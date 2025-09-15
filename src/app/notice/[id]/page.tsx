"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar, User, Eye, Tag } from "lucide-react";
import Banner from "@/components/Banner";
import notices from "@/constants/notices";

interface NoticeDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function NoticeDetailPage({ params }: NoticeDetailPageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const noticeId = parseInt(resolvedParams.id);
  const notice = notices.find((n) => n.id === noticeId);

  if (!notice) {
    return (
      <div className="min-h-screen bg-white">
        <Banner
          title="공지사항을 찾을 수 없습니다"
          description="요청하신 공지사항이 존재하지 않습니다."
          image="/introduction.jpeg"
        />
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              공지사항을 찾을 수 없습니다
            </h3>
            <p className="text-gray-600 mb-6">
              요청하신 공지사항이 존재하지 않습니다.
            </p>
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              목록으로 돌아가기
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Banner
        title={notice.title}
        description={notice.category}
        image="/introduction.jpeg"
      />

      {/* 공지사항 상세 내용 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          {/* 뒤로가기 버튼 */}
          <div className="mb-8">
            <button
              onClick={() => router.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              목록으로 돌아가기
            </button>
          </div>

          {/* 공지사항 메타 정보 */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{notice.date}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{notice.author}</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                <span>조회 {notice.views}</span>
              </div>
            </div>
          </div>

          {/* 공지사항 내용 */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="mb-6">
                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                  {notice.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {notice.title}
              </h1>

              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {notice.content}
              </div>

              {/* 태그 */}
              {notice.tags && notice.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {notice.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 하단 네비게이션 */}
          <div className="mt-12 flex justify-between">
            <button
              onClick={() => router.back()}
              className="px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              목록으로 돌아가기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
