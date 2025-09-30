"use client";

import { useState, useEffect } from "react";
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
  Clock,
  User,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";
import AdminGuard from "@/components/AdminGuard";
import {
  getAllNotices,
  deleteNotice,
  searchNotices,
  getNoticeStats,
  Notice,
} from "@/lib/notices";
import { signOut } from "@/lib/auth";

export default function NoticesPage() {
  const router = useRouter();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [filteredNotices, setFilteredNotices] = useState<Notice[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    draft: 0,
    thisMonth: 0,
    totalViews: 0,
  });

  // 공지사항 데이터 로드
  useEffect(() => {
    loadNotices();
    loadStats();
  }, []);

  // 검색 및 필터 적용
  useEffect(() => {
    if (searchTerm.trim()) {
      handleSearch();
    } else {
      const filtered = notices.filter((notice) => {
        const matchesFilter =
          selectedFilter === "all" || notice.status === selectedFilter;
        return matchesFilter;
      });
      setFilteredNotices(filtered);
    }
  }, [notices, selectedFilter, searchTerm]);

  const loadNotices = async () => {
    try {
      setIsLoading(true);
      const data = await getAllNotices();
      setNotices(data);
      setFilteredNotices(data);
    } catch (error) {
      console.error("공지사항 로드 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const data = await getNoticeStats();
      setStats(data);
    } catch (error) {
      console.error("통계 로드 실패:", error);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setFilteredNotices(notices);
      return;
    }

    try {
      const results = await searchNotices(searchTerm, {
        status: selectedFilter !== "all" ? selectedFilter : undefined,
      });
      setFilteredNotices(results);
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  const handleEdit = (noticeId: number) => {
    router.push(`/admin/notices/${noticeId}/edit`);
  };

  const handleCreate = () => {
    router.push("/admin/notices/create");
  };

  const handleDelete = async (noticeId: number) => {
    if (!confirm("정말로 이 공지사항을 삭제하시겠습니까?")) {
      return;
    }

    try {
      await deleteNotice(noticeId);
      await loadNotices(); // 목록 새로고침
      await loadStats(); // 통계 새로고침
    } catch (error) {
      console.error("삭제 실패:", error);
      alert("삭제에 실패했습니다.");
    }
  };

  const handleView = (noticeId: number) => {
    router.push(`/notice/${noticeId}`);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/auth/login");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
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
    <AdminGuard>
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
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleCreate}
                  className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-black transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4 mr-2" />새 공지사항 작성
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-2 cursor-pointer" />
                  로그아웃
                </button>
              </div>
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
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
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
                      {stats.total}
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
                      {stats.published}
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
                      {stats.thisMonth}
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
                    <p className="text-sm font-medium text-gray-600">
                      총 조회수
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stats.totalViews}
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
              {isLoading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">공지사항을 불러오는 중...</p>
                </div>
              ) : (
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
                          </div>
                        </div>

                        <div className="flex space-x-1 ml-4">
                          <button
                            onClick={() => handleView(notice.id)}
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleEdit(notice.id)}
                            className="p-2 text-gray-400 hover:text-yellow-600 transition-colors cursor-pointer"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(notice.id)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 빈 상태 */}
            {!isLoading && filteredNotices.length === 0 && (
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
    </AdminGuard>
  );
}
