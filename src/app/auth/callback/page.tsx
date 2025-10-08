"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // URL 파라미터에서 오류 확인
        const errorParam = searchParams.get("error");
        const errorCode = searchParams.get("error_code");
        const errorDescription = searchParams.get("error_description");

        if (errorParam === "access_denied") {
          if (errorCode === "otp_expired") {
            setError(
              "이메일 인증 링크가 만료되었습니다. 새로운 인증 이메일을 요청해주세요."
            );
          } else {
            setError("이메일 인증에 실패했습니다. 다시 시도해주세요.");
          }
          return;
        }

        // URL에서 인증 정보 추출
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("인증 오류:", error);
          setError("인증 처리 중 오류가 발생했습니다.");
          return;
        }

        if (data.session) {
          // 로그인 성공
          console.log("로그인 성공:", data.session.user);
          router.push("/"); // 메인 페이지로 리다이렉트
        } else {
          // 세션이 없는 경우
          setError("인증이 완료되지 않았습니다. 다시 시도해주세요.");
        }
      } catch (error) {
        console.error("콜백 처리 오류:", error);
        setError("처리 중 오류가 발생했습니다.");
      }
    };

    handleAuthCallback();
  }, [router, searchParams]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">인증 실패</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="space-y-3">
            <button
              onClick={() => router.push("/auth/login")}
              className="w-full bg-brand-600 text-white py-2 px-4 rounded-lg hover:bg-brand-700 transition-colors"
            >
              로그인 페이지로 이동
            </button>
            <button
              onClick={() => router.push("/")}
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
            >
              홈으로 이동
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-4"></div>
        <p className="text-gray-600">이메일 확인 중...</p>
      </div>
    </div>
  );
}

export default function AuthCallback() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-4"></div>
            <p className="text-gray-600">로딩 중...</p>
          </div>
        </div>
      }
    >
      <AuthCallbackContent />
    </Suspense>
  );
}
