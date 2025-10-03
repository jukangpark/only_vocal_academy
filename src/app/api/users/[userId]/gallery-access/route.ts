import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// 서비스 키로 Supabase 클라이언트 생성 (admin 권한)
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { hasAccess } = await request.json();
    const { userId } = await params;

    const { error } = await supabase.auth.admin.updateUserById(userId, {
      user_metadata: {
        gallery_access: hasAccess,
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("갤러리 접근 권한 업데이트 실패:", error);
    return NextResponse.json(
      { error: "갤러리 접근 권한 업데이트에 실패했습니다." },
      { status: 500 }
    );
  }
}
