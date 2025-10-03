"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // URL에서 인증 정보 추출
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("인증 오류:", error);
          router.push("/auth/login?error=auth_failed");
          return;
        }

        if (data.session) {
          // 로그인 성공
          console.log("로그인 성공:", data.session.user);
          router.push("/"); // 메인 페이지로 리다이렉트
        } else {
          // 세션이 없는 경우
          router.push("/auth/login?error=no_session");
        }
      } catch (error) {
        console.error("콜백 처리 오류:", error);
        router.push("/auth/login?error=callback_failed");
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-4"></div>
        <p className="text-gray-600">이메일 확인 중...</p>
      </div>
    </div>
  );
}
