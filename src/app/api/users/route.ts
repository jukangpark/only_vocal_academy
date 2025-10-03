import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// 서비스 키로 Supabase 클라이언트 생성 (admin 권한)
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const ADMIN_UID = "74a61bfb-5163-4da6-a823-2409b3f862ac";

export async function GET() {
  try {
    const { data, error } = await supabase.auth.admin.listUsers();

    if (error) {
      throw new Error(error.message);
    }

    // 관리자 UID 제외하고 반환
    const filteredUsers = data.users.filter((user) => user.id !== ADMIN_UID);

    const users = filteredUsers.map((user) => {
      // user_metadata에서 데이터 가져오기
      const userMeta = user.user_metadata || {};

      // 디버깅을 위한 로그
      console.log(`User ${user.email} metadata:`, {
        user_metadata: user.user_metadata,
        gallery_access: userMeta.gallery_access,
      });

      return {
        id: user.id,
        email: user.email || "",
        name: userMeta.name || userMeta.full_name || "이름 없음",
        phone: userMeta.phone || "",
        role: (userMeta.role as "admin" | "user" | "teacher") || "user",
        status: (user.email_confirmed_at ? "active" : "pending") as
          | "active"
          | "inactive"
          | "pending",
        createdAt: user.created_at,
        lastLogin: user.last_sign_in_at || "",
        profileImage: userMeta.avatar_url,
        galleryAccess: userMeta.gallery_access || false,
      };
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error("사용자 데이터 가져오기 실패:", error);
    return NextResponse.json(
      { error: "사용자 데이터를 가져올 수 없습니다." },
      { status: 500 }
    );
  }
}
