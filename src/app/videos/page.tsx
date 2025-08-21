import Navigation from "@/components/navigation";
import { Play, Calendar, Eye } from "lucide-react";

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      title: "보컬입시합격자 - 김○○",
      category: "입시합격",
      date: "2024-12-15",
      views: "1,234",
      thumbnail: "🎤",
      description:
        "2024년 음악대학 보컬과 최종합격자 김○○ 학생의 오디션 영상입니다.",
    },
    {
      id: 2,
      title: "오디션합격자 - 이○○",
      category: "오디션합격",
      date: "2024-12-10",
      views: "2,156",
      thumbnail: "⭐",
      description:
        "대형 엔터테인먼트사 오디션 최종합격자 이○○ 학생의 무대 영상입니다.",
    },
    {
      id: 3,
      title: "음악대학합격자 - 박○○",
      category: "입시합격",
      date: "2024-12-05",
      views: "987",
      thumbnail: "🎓",
      description: "실용음악과 최종합격자 박○○ 학생의 실기 시험 영상입니다.",
    },
    {
      id: 4,
      title: "실용음악과합격자 - 최○○",
      category: "입시합격",
      date: "2024-11-30",
      views: "1,567",
      thumbnail: "🎵",
      description:
        "실용음악과 보컬 전공 최종합격자 최○○ 학생의 오디션 영상입니다.",
    },
    {
      id: 5,
      title: "앙상블수업 - 그룹A",
      category: "수업영상",
      date: "2024-11-25",
      views: "3,421",
      thumbnail: "👥",
      description: "앙상블 수업에서 진행된 그룹A의 하모니 연습 영상입니다.",
    },
    {
      id: 6,
      title: "졸업공연 - 2024년",
      category: "공연영상",
      date: "2024-11-20",
      views: "5,234",
      thumbnail: "🎭",
      description: "2024년 온리보컬아카데미 졸업생들의 축하 공연 영상입니다.",
    },
    {
      id: 7,
      title: "보컬테크닉 강의 - 발성법",
      category: "강의영상",
      date: "2024-11-15",
      views: "4,567",
      thumbnail: "🎤",
      description:
        "윤지현 원장의 보컬 테크닉 강의 - 올바른 발성법에 대한 설명입니다.",
    },
    {
      id: 8,
      title: "입시준비 팁 - 모의고사",
      category: "강의영상",
      date: "2024-11-10",
      views: "2,890",
      thumbnail: "📚",
      description:
        "음악대학 입시 준비를 위한 모의고사 팁과 노하우를 공유합니다.",
    },
    {
      id: 9,
      title: "CCM 합창 - 찬양팀",
      category: "공연영상",
      date: "2024-11-05",
      views: "1,876",
      thumbnail: "⛪",
      description: "CCM 과정 학생들이 참여한 찬양팀의 합창 공연 영상입니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            동영상
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            합격생들의 성과와 수업 영상을 통해 온리보컬아카데미의 실력을
            확인하세요.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{video.thumbnail}</div>
                      <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-600 text-white text-xs font-semibold rounded-full">
                      {video.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{video.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>{video.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors">
              더 많은 영상 보기
            </button>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            추천 영상
          </h2>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-6">🎤</div>
                  <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-full">
                  추천
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                2024년 온리보컬아카데미 합격생 특집
              </h3>
              <p className="text-gray-600 mb-6">
                2024년 온리보컬아카데미에서 배출한 합격생들의 특별 영상입니다.
                각자의 꿈을 향해 달려온 학생들의 이야기와 함께하는 감동적인
                영상을 만나보세요.
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>2024-12-20</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>12,345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-600 to-brand-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <h3 className="text-xl font-bold">온리보컬아카데미</h3>
              </div>
              <p className="text-gray-400 text-sm">
                광주 유일의 근거중심 보컬전문 아카데미
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">수강 과정</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>입시과정</li>
                <li>취미과정</li>
                <li>오디션과정</li>
                <li>전문심화과정</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">학원 정보</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>학원소개</li>
                <li>강사진</li>
                <li>합격실적</li>
                <li>상담문의</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>0507-1497-4900</p>
                <p>임방울대로332번길 9-14</p>
                <p>GW빌딩 2층</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 온리보컬아카데미. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
