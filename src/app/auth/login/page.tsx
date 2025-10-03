"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginModal from "@/components/LoginModal";
import { ADMIN_EMAIL } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    // 로그인 성공 시 관리자 페이지로 이동
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
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
