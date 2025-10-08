"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Eye,
  User,
  Loader2,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Edit,
  LogOut,
} from "lucide-react";
import AdminGuard from "@/components/AdminGuard";
import { signOut } from "@/lib/auth";
import { getGalleryPostById, getMediaUrl, GalleryPost } from "@/lib/gallery";

const AdminGalleryPreview = () => {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<GalleryPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // 포스트 ID 가져오기
  const postId = params.id ? parseInt(params.id as string) : null;

  // 포스트 데이터 로드
  useEffect(() => {
    if (postId) {
      loadPost(postId);
    }
  }, [postId]);

  const loadPost = async (id: number) => {
    try {
      setIsLoading(true);
      setError(null);

      // Supabase에서 특정 포스트 조회 (관리자는 모든 상태의 포스트를 볼 수 있음)
      const postData = await getGalleryPostById(id);

      if (!postData) {
        setError("포스트를 찾을 수 없습니다.");
        return;
      }

      setPost(postData);
    } catch (error) {
      console.error("포스트 로드 실패:", error);
      setError(
        error instanceof Error
          ? error.message
          : "포스트를 불러오는데 실패했습니다."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // 미디어 네비게이션 함수
  const goToPreviousMedia = () => {
    if (post?.media && post.media.length > 0) {
      setCurrentMediaIndex((prev) =>
        prev === 0 ? post.media!.length - 1 : prev - 1
      );
    }
  };

  const goToNextMedia = () => {
    if (post?.media && post.media.length > 0) {
      setCurrentMediaIndex((prev) =>
        prev === post.media!.length - 1 ? 0 : prev + 1
      );
    }
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

  // 로딩 상태
  if (isLoading) {
    return (
      <AdminGuard>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <Loader2 className="w-8 h-8 animate-spin text-gray-600 mx-auto mb-4" />
                <p className="text-gray-600">포스트를 불러오는 중...</p>
              </div>
            </div>
          </div>
        </div>
      </AdminGuard>
    );
  }

  // 에러 상태
  if (error || !post) {
    return (
      <AdminGuard>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  포스트를 불러올 수 없습니다
                </h3>
                <p className="text-gray-600 mb-4">{error}</p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => router.back()}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                  >
                    뒤로가기
                  </button>
                  <button
                    onClick={() => postId && loadPost(postId)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    다시 시도
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminGuard>
    );
  }

  const currentMedia = post.media && post.media[currentMediaIndex];
  const hasMultipleMedia = post.media && post.media.length > 1;

  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50">
        {/* 헤더 */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => router.back()}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                뒤로가기
              </button>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => router.push(`/admin/gallery/edit/${post.id}`)}
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  편집하기
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
        <div className="max-w-4xl mx-auto px-4 py-8">
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* 미디어 섹션 */}
            {currentMedia && (
              <div className="relative">
                {currentMedia.file_type === "image" ? (
                  <img
                    src={getMediaUrl(currentMedia.file_path)}
                    alt={currentMedia.alt_text || post.title}
                    className="w-full h-96 object-cover"
                  />
                ) : (
                  <video
                    src={getMediaUrl(currentMedia.file_path)}
                    className="w-full h-96 object-cover"
                    controls
                    autoPlay={false}
                  />
                )}

                {/* 미디어 타입 표시 */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentMedia.file_type === "video"
                      ? "🎥 영상"
                      : "📷 이미지"}
                  </span>
                </div>

                {/* 미디어 네비게이션 (여러 개인 경우) */}
                {hasMultipleMedia && (
                  <>
                    {/* 이전 버튼 */}
                    <button
                      onClick={goToPreviousMedia}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* 다음 버튼 */}
                    <button
                      onClick={goToNextMedia}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all cursor-pointer"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* 미디어 인디케이터 */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="flex space-x-2">
                        {post.media?.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentMediaIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                              index === currentMediaIndex
                                ? "bg-white"
                                : "bg-white bg-opacity-50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* 미디어 카운터 */}
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                        {currentMediaIndex + 1} / {post.media?.length || 0}
                      </span>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* 콘텐츠 섹션 */}
            <div className="p-8">
              {/* 메타 정보 */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.created_at).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    조회수: {post.views || 0}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    관리자
                  </div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    post.status || "published"
                  )}`}
                >
                  {getStatusText(post.status || "published")}
                </div>
              </div>

              {/* 제목 */}
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>

              {/* 내용 */}
              <div className="prose max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {post.content}
                </div>
              </div>
            </div>
          </article>

          {/* 하단 네비게이션 */}
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => router.push("/admin/gallery")}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
            >
              갤러리 관리로 돌아가기
            </button>
            {post.status === "published" && (
              <button
                onClick={() => router.push(`/gallery/${post.id}`)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                공개 페이지 보기
              </button>
            )}
          </div>
        </div>
      </div>
    </AdminGuard>
  );
};

export default AdminGalleryPreview;
