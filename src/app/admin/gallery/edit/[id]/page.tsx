"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Eye,
  Upload,
  X,
  Trash2,
  Image,
  Video,
  Loader2,
  AlertCircle,
} from "lucide-react";
import AdminGuard from "@/components/AdminGuard";
import {
  getGalleryPostById,
  updateGalleryPost,
  getMediaUrl,
  GalleryPost,
  GalleryMedia,
} from "@/lib/gallery";

interface MediaFile {
  id?: number;
  file: File | null;
  preview: string;
  file_type: "image" | "video";
  alt_text: string;
  isExisting: boolean;
  existingPath?: string;
}

export default function EditGalleryPost() {
  const params = useParams();
  const router = useRouter();
  const postId = parseInt(params.id as string);

  const [post, setPost] = useState<GalleryPost | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"published" | "draft" | "archived">(
    "draft"
  );
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [allowedFileType, setAllowedFileType] = useState<
    "image" | "video" | null
  >(null);

  // 포스트 데이터 로드
  useEffect(() => {
    if (postId) {
      loadPost();
    }
  }, [postId]);

  const loadPost = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const postData = await getGalleryPostById(postId);
      if (!postData) {
        throw new Error("포스트를 찾을 수 없습니다.");
      }

      setPost(postData);
      setTitle(postData.title);
      setContent(postData.content);
      setStatus(postData.status);

      // 기존 미디어를 MediaFile 형태로 변환
      if (postData.media && postData.media.length > 0) {
        const existingMedia: MediaFile[] = postData.media.map((media) => ({
          id: media.id,
          file: null,
          preview: getMediaUrl(media.file_path),
          file_type: media.file_type,
          alt_text: media.alt_text || "",
          isExisting: true,
          existingPath: media.file_path,
        }));
        setMediaFiles(existingMedia);

        // 기존 미디어가 있으면 첫 번째 미디어의 타입을 허용된 타입으로 설정
        if (existingMedia.length > 0) {
          setAllowedFileType(existingMedia[0].file_type);
        }
      }
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

  // 새 미디어 파일 추가
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

      const newMediaFile: MediaFile = {
        file,
        preview,
        file_type: fileType,
        alt_text: "",
        isExisting: false,
      };

      setMediaFiles((prev) => [...prev, newMediaFile]);
    });
  };

  // 미디어 파일 삭제
  const handleRemoveMedia = (index: number) => {
    setMediaFiles((prev) => {
      const newFiles = [...prev];
      const removedFile = newFiles[index];

      // 기존 파일의 preview URL 정리
      if (removedFile.preview && !removedFile.isExisting) {
        URL.revokeObjectURL(removedFile.preview);
      }

      newFiles.splice(index, 1);

      // 모든 파일이 제거된 경우 허용된 타입 초기화
      if (newFiles.length === 0) {
        setAllowedFileType(null);
      }

      return newFiles;
    });
  };

  // 미디어 순서 변경
  const moveMedia = (index: number, direction: "up" | "down") => {
    setMediaFiles((prev) => {
      const newFiles = [...prev];
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      if (targetIndex >= 0 && targetIndex < newFiles.length) {
        [newFiles[index], newFiles[targetIndex]] = [
          newFiles[targetIndex],
          newFiles[index],
        ];
      }

      return newFiles;
    });
  };

  // Alt 텍스트 업데이트
  const updateAltText = (index: number, altText: string) => {
    setMediaFiles((prev) => {
      const newFiles = [...prev];
      newFiles[index].alt_text = altText;
      return newFiles;
    });
  };

  // 포스트 저장
  const handleSave = async (publishStatus: "draft" | "published") => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    try {
      setIsSaving(true);
      setError(null);

      // 새로 추가된 파일들만 추출
      const newFiles = mediaFiles
        .filter((media) => !media.isExisting && media.file)
        .map((media) => media.file!);

      const updateData = {
        title: title.trim(),
        content: content.trim(),
        status: publishStatus,
        mediaFiles: newFiles,
      };

      await updateGalleryPost(postId, updateData);

      alert(
        publishStatus === "published"
          ? "포스트가 발행되었습니다!"
          : "포스트가 저장되었습니다!"
      );

      router.push("/admin/gallery");
    } catch (error) {
      console.error("저장 실패:", error);
      setError(error instanceof Error ? error.message : "저장에 실패했습니다.");
    } finally {
      setIsSaving(false);
    }
  };

  // 미리보기
  const handlePreview = () => {
    router.push(`/gallery/${postId}`);
  };

  if (isLoading) {
    return (
      <AdminGuard>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-gray-600" />
            <p className="text-gray-600">포스트를 불러오는 중...</p>
          </div>
        </div>
      </AdminGuard>
    );
  }

  if (error) {
    return (
      <AdminGuard>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-600" />
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => router.push("/admin/gallery")}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              갤러리로 돌아가기
            </button>
          </div>
        </div>
      </AdminGuard>
    );
  }

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
                    갤러리 포스트 편집
                  </h1>
                  <p className="text-sm text-gray-600">
                    포스트를 수정하고 관리하세요
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePreview}
                  className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  미리보기
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
                {/* 기본 정보 */}
                <div className="space-y-6">
                  {/* 제목 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      제목 *
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                      placeholder="포스트 제목을 입력하세요"
                    />
                  </div>

                  {/* 내용 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      내용 *
                    </label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                      placeholder="포스트 내용을 입력하세요"
                    />
                  </div>

                  {/* 미디어 섹션 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      미디어 파일
                    </label>

                    {/* 파일 업로드 */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                      <div className="text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="mt-4">
                          <label
                            htmlFor="media-upload"
                            className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                          >
                            <Upload className="w-4 h-4 mr-2" />
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

                    {/* 미디어 목록 */}
                    {mediaFiles.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          업로드된 파일 ({mediaFiles.length})
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {mediaFiles.map((media, index) => (
                            <div
                              key={index}
                              className="relative group border border-gray-200 rounded-lg overflow-hidden"
                            >
                              {media.file_type === "image" ? (
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
                              <div className="absolute top-1 left-1">
                                <span className="bg-black bg-opacity-50 text-white text-xs px-1 py-0.5 rounded">
                                  {media.file_type === "image" ? "📷" : "🎥"}
                                </span>
                                {media.isExisting && (
                                  <span className="bg-blue-500 bg-opacity-50 text-white text-xs px-1 py-0.5 rounded ml-1">
                                    기존
                                  </span>
                                )}
                              </div>
                              <button
                                onClick={() => handleRemoveMedia(index)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 cursor-pointer"
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
                      disabled={isSaving}
                      className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {isSaving ? "저장 중..." : "임시저장"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("published");
                        handleSave("published");
                      }}
                      disabled={isSaving}
                      className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {isSaving ? "발행 중..." : "발행하기"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AdminGuard>
  );
}
