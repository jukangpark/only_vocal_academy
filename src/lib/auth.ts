import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const ADMIN_EMAIL = "admin@onlyvocalacademy.com";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 관리자 UID
export const ADMIN_UID = "74a61bfb-5163-4da6-a823-2409b3f862ac";

// 현재 사용자가 관리자인지 확인
export async function isAdmin(): Promise<boolean> {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user || !user.id) {
      return false;
    }

    return user.id === ADMIN_UID;
  } catch (error) {
    console.error("인증 확인 중 오류:", error);
    return false;
  }
}

// 관리자 권한이 필요한 페이지에서 사용할 훅
export async function requireAdmin(): Promise<{ isAdmin: boolean; user: any }> {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user || !user.id) {
      return { isAdmin: false, user: null };
    }

    const isAdminUser = user.id === ADMIN_UID;

    return { isAdmin: isAdminUser, user };
  } catch (error) {
    console.error("관리자 권한 확인 중 오류:", error);
    return { isAdmin: false, user: null };
  }
}

// 회원가입 함수
export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// 로그인 함수
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// 로그아웃 함수
export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

// 모든 사용자 데이터 가져오기 (관리자 제외)
export async function getAllUsers() {
  try {
    const response = await fetch("/api/users");

    if (!response.ok) {
      throw new Error("사용자 데이터를 가져올 수 없습니다.");
    }

    const users = await response.json();
    return users;
  } catch (error) {
    console.error("사용자 데이터 가져오기 실패:", error);
    throw error;
  }
}

// 사용자 갤러리 접근 권한 업데이트
export async function updateUserGalleryAccess(
  userId: string,
  hasAccess: boolean
) {
  try {
    const response = await fetch(`/api/users/${userId}/gallery-access`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ hasAccess }),
    });

    if (!response.ok) {
      throw new Error("갤러리 접근 권한 업데이트에 실패했습니다.");
    }

    return true;
  } catch (error) {
    console.error("갤러리 접근 권한 업데이트 실패:", error);
    throw error;
  }
}
