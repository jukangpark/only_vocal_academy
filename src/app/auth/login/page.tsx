"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoginModal from "@/components/LoginModal";
import { ADMIN_EMAIL } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const error = searchParams.get("error");
    if (error) {
      switch (error) {
        case "auth_failed":
          setErrorMessage("인증에 실패했습니다. 다시 시도해주세요.");
          break;
        case "no_session":
          setErrorMessage("세션이 만료되었습니다. 다시 로그인해주세요.");
          break;
        case "callback_failed":
          setErrorMessage("인증 처리 중 오류가 발생했습니다.");
          break;
        default:
          setErrorMessage("로그인 중 오류가 발생했습니다.");
      }
    }
  }, [searchParams]);

  const handleLoginSuccess = () => {
    // 로그인 성공 시 관리자 페이지로 이동
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-600">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}

        {/* Admin Account Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
          <p className="text-sm text-blue-600 text-center">
            <strong>관리자 계정:</strong> {ADMIN_EMAIL}
          </p>
        </div>

        {/* Login Modal as Full Page Component */}
        <div className="bg-white rounded-lg shadow-xl p-6">
          <LoginModal
            isOpen={true}
            onClose={() => router.back()}
            title="관리자 로그인"
            description="온리보컬아카데미 관리자 페이지"
            showLogo={true}
            onSuccess={handleLoginSuccess}
          />
        </div>
      </div>
    </div>
  );
}
