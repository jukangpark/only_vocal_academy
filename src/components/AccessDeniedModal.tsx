"use client";

import { X, Shield, Home } from "lucide-react";
import { useRouter } from "next/navigation";

interface AccessDeniedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccessDeniedModal({
  isOpen,
  onClose,
}: AccessDeniedModalProps) {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        {/* 헤더 */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              접근 권한 없음
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 본문 */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              관리자 권한이 존재하지 않습니다
            </h2>
            <p className="text-gray-600">
              이 페이지에 접근하려면 관리자 권한이 필요합니다.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-gray-900 mb-2">
              접근 권한이 필요한 이유:
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 관리자 전용 기능에 접근하려고 시도했습니다</li>
              <li>• 현재 계정에는 관리자 권한이 부여되지 않았습니다</li>
              <li>• 관리자 권한이 필요하다면 시스템 관리자에게 문의하세요</li>
            </ul>
          </div>
        </div>

        {/* 푸터 */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
          >
            닫기
          </button>
          <button
            onClick={handleGoHome}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center cursor-pointer"
          >
            <Home className="w-4 h-4 mr-2" />
            홈으로 이동
          </button>
        </div>
      </div>
    </div>
  );
}
