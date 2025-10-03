"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Search,
  Filter,
  Image,
  Video,
  Calendar,
  Edit,
  Trash2,
  Eye,
  LogOut,
  Plus,
  Upload,
  FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";
import AdminGuard from "@/components/AdminGuard";
import { signOut } from "@/lib/auth";
import galleryPosts from "@/mock/galleryPosts";

// 갤러리 포스트 타입 정의
interface GalleryPost {
  id: number;
  title: string;
  content: string;
  media: {
    type: "image" | "video";
    src: string;
    alt: string;
  };
  date: string;
  status?: "published" | "draft" | "archived";
  views?: number;
  author?: string;
}

export default function GalleryPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<GalleryPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<GalleryPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeTab, setActiveTab] = useState<"all" | "image" | "video">("all");
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    images: 0,
    videos: 0,
    published: 0,
    draft: 0,
    totalViews: 0,
  });

  // 갤러리 데이터 로드
  useEffect(() => {
    loadPosts();
  }, []);

  // 검색 및 필터 적용
  useEffect(() => {
    const filtered = posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTab =
        activeTab === "all" ||
        (activeTab === "image" && post.media.type === "image") ||
        (activeTab === "video" && post.media.type === "video");

      const matchesFilter =
        selectedFilter === "all" || post.status === selectedFilter;

      return matchesSearch && matchesTab && matchesFilter;
    });

    setFilteredPosts(filtered);
  }, [posts, searchTerm, activeTab, selectedFilter]);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      // 실제로는 API 호출
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 목업 데이터에 추가 필드 추가
      const postsWithStatus = galleryPosts.map((post, index) => ({
        ...post,
        status:
          index % 3 === 0
            ? "published"
            : index % 3 === 1
            ? "draft"
            : "archived",
        views: Math.floor(Math.random() * 1000) + 100,
        author: "관리자",
      }));

      setPosts(postsWithStatus);
      setFilteredPosts(postsWithStatus);

      // 통계 계산
      const total = postsWithStatus.length;
      const images = postsWithStatus.filter(
        (p) => p.media.type === "image"
      ).length;
      const videos = postsWithStatus.filter(
        (p) => p.media.type === "video"
      ).length;
      const published = postsWithStatus.filter(
        (p) => p.status === "published"
      ).length;
      const draft = postsWithStatus.filter((p) => p.status === "draft").length;
      const totalViews = postsWithStatus.reduce(
        (sum, p) => sum + (p.views || 0),
        0
      );

      setStats({ total, images, videos, published, draft, totalViews });
    } catch (error) {
      console.error("갤러리 로드 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (postId: number) => {
    // 갤러리 편집 페이지로 이동
    console.log("편집:", postId);
  };

  const handleDelete = async (postId: number) => {
    if (!confirm("정말로 이 갤러리 포스트를 삭제하시겠습니까?")) {
      return;
    }

    try {
      // 실제로는 API 호출
      setPosts(posts.filter((post) => post.id !== postId));
      await loadPosts(); // 통계 새로고침
    } catch (error) {
      console.error("삭제 실패:", error);
      alert("삭제에 실패했습니다.");
    }
  };

  const handleView = (postId: number) => {
    // 갤러리 상세 페이지로 이동
    console.log("보기:", postId);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/auth/login");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "published":
        return "발행됨";
      case "draft":
        return "임시저장";
      case "archived":
        return "보관됨";
      default:
        return "알 수 없음";
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
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  뒤로가기
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    갤러리 관리
                  </h1>
                  <p className="text-sm text-gray-600">
                    온리보컬아카데미 갤러리 관리
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => router.push("/admin/gallery/create")}
                  className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-black transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4 mr-2" />새 포스트 작성
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  로그아웃
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {/* 탭 필터 */}
            <div className="mb-6 bg-white p-4 rounded-lg shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 rounded-lg p-1 inline-flex">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                      activeTab === "all"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    전체
                  </button>
                  <button
                    onClick={() => setActiveTab("image")}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                      activeTab === "image"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    📷 이미지
                  </button>
                  <button
                    onClick={() => setActiveTab("video")}
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

              {/* 검색 및 필터 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="제목, 내용으로 검색..."
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
                    <option value="published">발행됨</option>
                    <option value="draft">임시저장</option>
                    <option value="archived">보관됨</option>
                  </select>
                  <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                    <Filter className="w-4 h-4 mr-1" />
                    필터
                  </button>
                </div>
              </div>
            </div>

            {/* 통계 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">
                      총 포스트
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
                    <Image className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">이미지</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stats.images}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Video className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">영상</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stats.videos}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Upload className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">발행됨</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stats.published}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <FileText className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">
                      임시저장
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stats.draft}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Eye className="w-6 h-6 text-red-600" />
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

            {/* 갤러리 포스트 목록 */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  갤러리 포스트 목록
                </h2>
              </div>
              {isLoading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">갤러리를 불러오는 중...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  {filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      {/* 미디어 섹션 */}
                      <div className="relative h-48 overflow-hidden">
                        {post.media.type === "image" ? (
                          <img
                            src={post.media.src}
                            alt={post.media.alt}
                            className="w-full h-full object-cover"
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
                            {post.media.type === "video"
                              ? "🎥 영상"
                              : "📷 이미지"}
                          </span>
                        </div>
                        <div className="absolute top-3 left-3">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                              post.status || "published"
                            )}`}
                          >
                            {getStatusText(post.status || "published")}
                          </span>
                        </div>
                      </div>

                      {/* 콘텐츠 섹션 */}
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-500">
                            {post.date}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Eye className="w-3 h-3 mr-1" />
                            {post.views || 0}
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                          {post.content}
                        </p>

                        {/* 액션 버튼 */}
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => handleView(post.id)}
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleEdit(post.id)}
                            className="p-2 text-gray-400 hover:text-yellow-600 transition-colors cursor-pointer"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
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
            {!isLoading && filteredPosts.length === 0 && (
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
