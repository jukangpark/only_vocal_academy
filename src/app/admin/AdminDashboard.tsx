"use client";

import { BookOpen, Users, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const router = useRouter();

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
  };

  return (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default AdminDashboard;
