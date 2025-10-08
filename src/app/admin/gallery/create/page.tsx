"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Save,
  Upload,
  Image,
  Video,
  X,
  Plus,
  Eye,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";
import AdminGuard from "@/components/AdminGuard";
import { signOut } from "@/lib/auth";
import { createGalleryPost, CreateGalleryPostData } from "@/lib/gallery";

interface MediaFile {
  id: string;
  type: "image" | "video";
  file: File;
  preview: string;
}

export default function CreateGalleryPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [allowedFileType, setAllowedFileType] = useState<
    "image" | "video" | null
  >(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const fileType = file.type.startsWith("image/") ? "image" : "video";

      // 첫 번째 파일이거나, 이미 허용된 타입과 같은 경우에만 업로드 허용
      if (allowedFileType === null) {
        // 첫 번째 파일인 경우, 해당 타입을 허용된 타입으로 설정
        setAllowedFileType(fileType);
      } else if (allowedFileType !== fileType) {
        // 허용되지 않은 타입인 경우 경고 메시지 표시
        alert(
          allowedFileType === "image"
            ? "이미지만 업로드할 수 있습니다."
            : "동영상만 업로드할 수 있습니다."
        );
        return;
      }

      const preview = URL.createObjectURL(file);

      const newMedia: MediaFile = {
        id: Date.now().toString() + Math.random(),
        type: fileType,
        file,
        preview,
      };

      setMediaFiles((prev) => [...prev, newMedia]);
    });
  };

  const removeMedia = (id: string) => {
    setMediaFiles((prev) => {
      const media = prev.find((m) => m.id === id);
      if (media) {
        URL.revokeObjectURL(media.preview);
      }
      const newFiles = prev.filter((m) => m.id !== id);

      // 모든 파일이 제거된 경우 허용된 타입 초기화
      if (newFiles.length === 0) {
        setAllowedFileType(null);
      }

      return newFiles;
    });
  };

  const handleSave = async (publishStatus: "draft" | "published") => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    if (mediaFiles.length === 0) {
      alert("최소 하나의 미디어 파일을 업로드해주세요.");
      return;
    }

    setIsLoading(true);

    try {
      // Supabase에 포스트 생성
      const postData: CreateGalleryPostData = {
        title: title.trim(),
        content: content.trim(),
        status: publishStatus,
        mediaFiles: mediaFiles.map((media) => media.file),
      };

      const createdPost = await createGalleryPost(postData);

      console.log("포스트 생성 완료:", createdPost);

      alert(
        publishStatus === "published"
          ? "포스트가 발행되었습니다!"
          : "포스트가 임시저장되었습니다!"
      );

      router.push("/admin/gallery");
    } catch (error) {
      console.error("저장 실패:", error);
      alert(
        `저장에 실패했습니다: ${
          error instanceof Error ? error.message : "알 수 없는 오류"
        }`
      );
    } finally {
      setIsLoading(false);
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
                    새 포스트 작성
                  </h1>
                  <p className="text-sm text-gray-600">
                    온리보컬아카데미 갤러리 포스트 작성
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {showPreview ? "편집" : "미리보기"}
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
        <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                {!showPreview ? (
                  <form className="space-y-6">
                    {/* 제목 입력 */}
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        제목 *
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="포스트 제목을 입력하세요"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                        required
                      />
                    </div>

                    {/* 내용 입력 */}
                    <div>
                      <label
                        htmlFor="content"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        내용 *
                      </label>
                      <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="포스트 내용을 입력하세요"
                        rows={8}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                        required
                      />
                    </div>

                    {/* 미디어 업로드 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        미디어 파일 *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                        <div className="text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="mt-4">
                            <label
                              htmlFor="media-upload"
                              className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            >
                              <Plus className="w-4 h-4 mr-2" />
                              파일 선택
                            </label>
                            <input
                              id="media-upload"
                              type="file"
                              multiple
                              accept={
                                allowedFileType === "image"
                                  ? "image/*"
                                  : allowedFileType === "video"
                                  ? "video/*"
                                  : "image/*,video/*"
                              }
                              onChange={handleFileUpload}
                              className="hidden"
                            />
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            {allowedFileType === null
                              ? "이미지 또는 영상 파일을 업로드하세요"
                              : allowedFileType === "image"
                              ? "이미지 파일만 업로드할 수 있습니다"
                              : "동영상 파일만 업로드할 수 있습니다"}
                          </p>
                        </div>
                      </div>

                      {/* 업로드된 미디어 미리보기 */}
                      {mediaFiles.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            업로드된 파일 ({mediaFiles.length})
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {mediaFiles.map((media) => (
                              <div
                                key={media.id}
                                className="relative group border border-gray-200 rounded-lg overflow-hidden"
                              >
                                {media.type === "image" ? (
                                  <img
                                    src={media.preview}
                                    alt="미리보기"
                                    className="w-full h-24 object-cover"
                                  />
                                ) : (
                                  <video
                                    src={media.preview}
                                    className="w-full h-24 object-cover"
                                    muted
                                  />
                                )}
                                <div className="absolute top-1 right-1">
                                  <span className="bg-black bg-opacity-50 text-white text-xs px-1 py-0.5 rounded">
                                    {media.type === "image" ? "📷" : "🎥"}
                                  </span>
                                </div>
                                <button
                                  onClick={() => removeMedia(media.id)}
                                  className="absolute top-1 left-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 액션 버튼 */}
                    <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                      <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        취소
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setStatus("draft");
                          handleSave("draft");
                        }}
                        disabled={isLoading}
                        className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        {isLoading ? "저장 중..." : "임시저장"}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setStatus("published");
                          handleSave("published");
                        }}
                        disabled={isLoading}
                        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        {isLoading ? "발행 중..." : "발행하기"}
                      </button>
                    </div>
                  </form>
                ) : (
                  /* 미리보기 */
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {title || "제목이 없습니다"}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>작성일: {new Date().toLocaleDateString()}</span>
                        <span>작성자: 관리자</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            status === "published"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {status === "published" ? "발행됨" : "임시저장"}
                        </span>
                      </div>
                    </div>

                    {/* 미디어 미리보기 */}
                    {mediaFiles.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mediaFiles.map((media) => (
                          <div
                            key={media.id}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                          >
                            {media.type === "image" ? (
                              <img
                                src={media.preview}
                                alt="미리보기"
                                className="w-full h-48 object-cover"
                              />
                            ) : (
                              <video
                                src={media.preview}
                                className="w-full h-48 object-cover"
                                controls
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 내용 미리보기 */}
                    <div className="prose max-w-none">
                      <div className="whitespace-pre-wrap text-gray-700">
                        {content || "내용이 없습니다"}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </AdminGuard>
  );
}
