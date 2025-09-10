"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  Calendar,
  FileText,
  Tag,
  Clock,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function NoticesPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // 실제 공지사항 데이터 (notice/page.tsx에서 추출)
  const notices = [
    {
      id: 1,
      title: "2024년 하반기 수강생 모집 안내",
      date: "2024-12-15",
      category: "모집안내",
      content:
        "2024년 하반기 수강생 모집을 시작합니다. 입시반, 취미반, 오디션반 등 다양한 과정을 준비했습니다.",
      author: "윤지현 원장",
      status: "공개",
      views: 156,
      priority: "높음",
      tags: ["모집", "입시", "취미"],
    },
    {
      id: 2,
      title: "2024년 합격생 발표",
      date: "2024-12-10",
      category: "합격발표",
      content: "2024년도 음악대학 및 실용음악과 입시 합격생 명단을 발표합니다.",
      author: "윤지현 원장",
      status: "공개",
      views: 234,
      priority: "높음",
      tags: ["합격", "입시", "발표"],
    },
    {
      id: 3,
      title: "겨울방학 특별 프로그램 안내",
      date: "2024-12-05",
      category: "프로그램",
      content:
        "겨울방학을 맞아 특별 프로그램을 준비했습니다. 집중 보컬 트레이닝과 합격 전략 수업을 진행합니다.",
      author: "한화정 부원장",
      status: "공개",
      views: 89,
      priority: "보통",
      tags: ["겨울방학", "특별프로그램", "보컬트레이닝"],
    },
    {
      id: 4,
      title: "2024년 연말 공연 안내",
      date: "2024-11-30",
      category: "공연안내",
      content:
        "2024년 연말 학생들의 실력을 보여주는 공연이 개최됩니다. 많은 관심과 참여 부탁드립니다.",
      author: "김가희 보컬코치",
      status: "공개",
      views: 67,
      priority: "보통",
      tags: ["공연", "연말", "학생발표"],
    },
    {
      id: 5,
      title: "신규 강사진 합류 안내",
      date: "2024-11-25",
      category: "강사소개",
      content:
        "더욱 전문적이고 체계적인 교육을 위해 새로운 강사진이 합류했습니다.",
      author: "윤지현 원장",
      status: "공개",
      views: 123,
      priority: "낮음",
      tags: ["강사", "신규", "합류"],
    },
    {
      id: 6,
      title: "2025년 상반기 수강료 조정 안내",
      date: "2024-11-20",
      category: "수강료",
      content:
        "2025년 상반기부터 수강료가 조정됩니다. 자세한 내용은 개별 안내드리겠습니다.",
      author: "윤지현 원장",
      status: "비공개",
      views: 0,
      priority: "높음",
      tags: ["수강료", "조정", "2025년"],
    },
  ];

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || notice.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleEdit = (noticeId: number) => {
    console.log(`공지사항 ${noticeId} 수정`);
    // 수정 페이지로 이동하거나 모달 열기
  };

  const handleDelete = (noticeId: number) => {
    console.log(`공지사항 ${noticeId} 삭제`);
    // 삭제 확인 후 처리
  };

  const handleView = (noticeId: number) => {
    console.log(`공지사항 ${noticeId} 상세보기`);
    // 상세보기 페이지로 이동
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "모집안내":
        return "bg-blue-100 text-blue-800";
      case "합격발표":
        return "bg-green-100 text-green-800";
      case "프로그램":
        return "bg-purple-100 text-purple-800";
      case "공연안내":
        return "bg-orange-100 text-orange-800";
      case "강사소개":
        return "bg-pink-100 text-pink-800";
      case "수강료":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "높음":
        return "bg-red-100 text-red-800";
      case "보통":
        return "bg-yellow-100 text-yellow-800";
      case "낮음":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.back()}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                뒤로가기
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  공지사항 관리
                </h1>
                <p className="text-sm text-gray-600">
                  온리보컬아카데미 공지사항 관리
                </p>
              </div>
            </div>
            <button className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />새 공지사항 작성
            </button>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* 검색 및 필터 */}
          <div className="mb-6 bg-white p-4 rounded-lg shadow">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="제목, 내용, 카테고리, 작성자로 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="all">전체</option>
                  <option value="공개">공개</option>
                  <option value="비공개">비공개</option>
                  <option value="임시저장">임시저장</option>
                </select>
                <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4 mr-1" />
                  필터
                </button>
              </div>
            </div>
          </div>

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    총 공지사항
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {notices.length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    공개된 공지
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {notices.filter((n) => n.status === "공개").length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    이번 달 작성
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {
                      notices.filter((n) => {
                        const noticeDate = new Date(n.date);
                        const now = new Date();
                        return (
                          noticeDate.getMonth() === now.getMonth() &&
                          noticeDate.getFullYear() === now.getFullYear()
                        );
                      }).length
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">총 조회수</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {notices.reduce((sum, notice) => sum + notice.views, 0)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 공지사항 목록 */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                공지사항 목록
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              {filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {notice.title}
                        </h3>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(
                            notice.category
                          )}`}
                        >
                          {notice.category}
                        </span>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(
                            notice.priority
                          )}`}
                        >
                          {notice.priority}
                        </span>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            notice.status === "공개"
                              ? "bg-green-100 text-green-800"
                              : notice.status === "비공개"
                              ? "bg-gray-100 text-gray-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {notice.status}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {notice.content}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {notice.date}
                        </div>
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {notice.author}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          조회 {notice.views}
                        </div>
                        <div className="flex items-center">
                          <Tag className="w-3 h-3 mr-1" />
                          {notice.tags.join(", ")}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-1 ml-4">
                      <button
                        onClick={() => handleView(notice.id)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(notice.id)}
                        className="p-2 text-gray-400 hover:text-yellow-600 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(notice.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 빈 상태 */}
          {filteredNotices.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                검색 결과가 없습니다
              </h3>
              <p className="text-gray-600">다른 검색어를 시도해보세요.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
