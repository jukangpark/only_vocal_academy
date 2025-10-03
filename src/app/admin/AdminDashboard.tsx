"use client";

import { useState, useEffect } from "react";
import {
  BookOpen,
  Users,
  FileText,
  Shield,
  UserCheck,
  Image,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import AccessDeniedModal from "@/components/AccessDeniedModal";

const AdminDashboard = () => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [showAccessDeniedModal, setShowAccessDeniedModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 권한 체크
  useEffect(() => {
    const checkAdminAccess = async () => {
      try {
        const { isAdmin: hasAdminAccess } = await requireAdmin();
        setIsAdmin(hasAdminAccess);

        if (!hasAdminAccess) {
          setShowAccessDeniedModal(true);
        }
      } catch (error) {
        console.error("권한 확인 중 오류:", error);
        setShowAccessDeniedModal(true);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminAccess();
  }, []);

  const courseManagementCards = [
    {
      id: 1,
      title: "강사 관리",
      description: "강사 정보 관리",
      icon: Users,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      id: 2,
      title: "강의 관리",
      description: "강의 정보 및 스케줄 관리",
      icon: BookOpen,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      id: 3,
      title: "공지사항 관리",
      description: "공지사항 작성 및 관리",
      icon: FileText,
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
    {
      id: 4,
      title: "사용자 관리",
      description: "회원 정보 및 권한 관리",
      icon: UserCheck,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      id: 5,
      title: "갤러리 관리",
      description: "갤러리 이미지 및 콘텐츠 관리",
      icon: Image,
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
    },
  ];

  const handleCardClick = (cardId: number) => {
    if (cardId === 1) {
      router.push("/admin/teachers");
    }
    if (cardId === 2) {
      router.push("/admin/courses");
    }
    if (cardId === 3) {
      router.push("/admin/notices");
    }
    if (cardId === 4) {
      router.push("/admin/users");
    }
    if (cardId === 5) {
      router.push("/admin/gallery");
    }
  };

  // 로딩 중이거나 권한이 없는 경우
  if (isLoading) {
    return (
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600 mx-auto mb-4"></div>
            <p className="text-gray-600">권한을 확인하는 중...</p>
          </div>
        </div>
      </main>
    );
  }

  // 권한이 없는 경우
  if (!isAdmin) {
    return (
      <>
        <AccessDeniedModal
          isOpen={showAccessDeniedModal}
          onClose={() => setShowAccessDeniedModal(false)}
        />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                접근 권한이 없습니다
              </h3>
              <p className="text-gray-600">관리자 권한이 필요합니다.</p>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <AccessDeniedModal
        isOpen={showAccessDeniedModal}
        onClose={() => setShowAccessDeniedModal(false)}
      />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* 대시보드 헤더 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              관리 대시보드
            </h1>
            <p className="text-gray-600">온리보컬아카데미 관리 기능</p>
          </div>

          {/* 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {courseManagementCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 cursor-pointer"
                >
                  {/* 카드 헤더 */}
                  <div
                    className={`${card.color} ${card.hoverColor} p-4 rounded-t-lg`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                          <IconComponent className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 카드 본문 */}
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-4">
                      {card.description}
                    </p>
                    <div className="text-center">
                      <span className="text-sm text-gray-600 font-medium">
                        클릭하여 {card.title} 페이지로 이동 →
                      </span>
                    </div>
                  </div>

                  {/* 카드 푸터 */}
                  <div className="px-4 py-2 bg-gray-50 rounded-b-lg border-t border-gray-100">
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                        활성
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;
