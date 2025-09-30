import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 관리자 이메일 주소
export const ADMIN_EMAIL = "onlyvocalgood@gmail.com";

// 현재 사용자가 관리자인지 확인
export async function isAdmin(): Promise<boolean> {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user || !user.email) {
      return false;
    }

    return user.email === ADMIN_EMAIL;
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

    if (!user || !user.email) {
      return { isAdmin: false, user: null };
    }

    const isAdminUser = user.email === ADMIN_EMAIL;

    if (!isAdminUser) {
      // 관리자가 아닌 경우 로그인 페이지로 리다이렉트
      if (typeof window !== "undefined") {
        window.location.href = "/auth/login";
      }
    }

    return { isAdmin: isAdminUser, user };
  } catch (error) {
    console.error("관리자 권한 확인 중 오류:", error);
    return { isAdmin: false, user: null };
  }
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
