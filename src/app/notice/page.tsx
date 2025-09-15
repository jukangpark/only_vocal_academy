"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Banner from "@/components/Banner";
import { Calendar, Search, ChevronLeft, ChevronRight } from "lucide-react";
import notices from "@/constants/notices";

export default function NoticePage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 페이지당 아이템 수

  // 필터링된 공지사항
  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchesSearch =
        notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesSearch;
    });
  }, [searchTerm]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNotices = filteredNotices.slice(startIndex, endIndex);

  // 검색어가 변경되면 첫 페이지로 이동
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // 페이지 변경 함수
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // 공지사항 클릭 핸들러
  const handleNoticeClick = (noticeId: number) => {
    router.push(`/notice/${noticeId}`);
  };
  return (
    <div className="min-h-screen bg-white">
      <Banner
        title="공지사항"
        description="온리보컬아카데미의 최신 소식과 중요한 안내사항을 확인하세요."
        image="/introduction.jpeg"
      />

      {/* Notice List */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          {/* 검색 UI */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="제목, 내용, 카테고리, 작성자, 태그로 검색..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              />
            </div>
          </div>

          <div className="space-y-6">
            {currentNotices.map((notice) => (
              <div
                key={notice.id}
                onClick={() => handleNoticeClick(notice.id)}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-gray-600 text-gray-100 rounded-full text-sm font-semibold">
                      {notice.category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{notice.date}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {notice.title}
                </h3>
                <p className="text-gray-600 mb-4">{notice.content}</p>
                <div className="text-gray-600 hover:text-gray-800 font-semibold transition-colors">
                  자세히 보기 →
                </div>
              </div>
            ))}
          </div>

          {/* 검색 결과가 없을 때 */}
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  이전
                </button>

                {/* 페이지 번호들 */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    // 현재 페이지 주변의 페이지들만 표시
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            page === currentPage
                              ? "bg-black text-white"
                              : "border border-black text-black hover:bg-black hover:text-white"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    } else if (
                      page === currentPage - 2 ||
                      page === currentPage + 2
                    ) {
                      return (
                        <span key={page} className="px-4 py-2 text-gray-500">
                          ...
                        </span>
                      );
                    }
                    return null;
                  }
                )}

                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  다음
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
