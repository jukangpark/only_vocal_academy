"use client";

import { useState, useMemo } from "react";
import Banner from "@/components/Banner";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import galleryPosts from "@/mock/galleryPosts";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<"all" | "image" | "video">("all");
  const itemsPerPage = 6; // 페이지당 아이템 수
  // 게시글 형태의 갤러리 데이터

  // 필터링된 갤러리 포스트
  const filteredPosts = useMemo(() => {
    return galleryPosts.filter((post) => {
      // 검색어 필터링
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase());

      // 탭 필터링
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "image" && post.media.type === "image") ||
        (activeTab === "video" && post.media.type === "video");

      return matchesSearch && matchesTab;
    });
  }, [searchTerm, activeTab]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // 검색어가 변경되면 첫 페이지로 이동
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // 탭 변경 핸들러
  const handleTabChange = (tab: "all" | "image" | "video") => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  // 페이지 변경 함수
  const goToPage = (page: number) => setCurrentPage(page);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner
        title="갤러리"
        description="온리보컬 아카데미의 다양한 순간들을 만나보세요"
        image="/introduction.jpeg"
      />

      {/* Search UI */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              <button
                onClick={() => handleTabChange("all")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === "all"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                전체
              </button>
              <button
                onClick={() => handleTabChange("image")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === "image"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                📷 이미지
              </button>
              <button
                onClick={() => handleTabChange("video")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === "video"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🎥 영상
              </button>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="제목, 내용으로 검색..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-gray-500"
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Media Section */}
              <div className="relative h-48 overflow-hidden">
                {post.media.type === "image" ? (
                  <img
                    src={post.media.src}
                    alt={post.media.alt}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                ) : (
                  <iframe
                    src={post.media.src}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                <div className="absolute top-3 right-3">
                  <span className="bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    {post.media.type === "video" ? "🎥 영상" : "📷 이미지"}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {post.content}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                이전
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                          page === currentPage
                            ? "bg-gray-600 text-white"
                            : "border border-gray-300 text-gray-700 hover:bg-gray-50"
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
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center cursor-pointer"
              >
                다음
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
