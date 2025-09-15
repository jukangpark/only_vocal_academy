import Banner from "@/components/Banner";
import Navigation from "@/components/navigation";
import { Calendar } from "lucide-react";

export default function NoticePage() {
  const notices = [
    {
      id: 1,
      title: "2024년 하반기 수강생 모집 안내",
      date: "2024-12-15",
      category: "모집안내",
      content:
        "2024년 하반기 수강생 모집을 시작합니다. 입시반, 취미반, 오디션반 등 다양한 과정을 준비했습니다.",
    },
    {
      id: 2,
      title: "2024년 합격생 발표",
      date: "2024-12-10",
      category: "합격발표",
      content: "2024년도 음악대학 및 실용음악과 입시 합격생 명단을 발표합니다.",
    },
    {
      id: 3,
      title: "겨울방학 특별 프로그램 안내",
      date: "2024-12-05",
      category: "프로그램",
      content:
        "겨울방학을 맞아 특별 프로그램을 준비했습니다. 집중 보컬 트레이닝과 합격 전략 수업을 진행합니다.",
    },
    {
      id: 4,
      title: "2024년 연말 공연 안내",
      date: "2024-11-30",
      category: "공연안내",
      content:
        "2024년 연말 학생들의 실력을 보여주는 공연이 개최됩니다. 많은 관심과 참여 부탁드립니다.",
    },
    {
      id: 5,
      title: "신규 강사진 합류 안내",
      date: "2024-11-25",
      category: "강사소개",
      content:
        "더욱 전문적이고 체계적인 교육을 위해 새로운 강사진이 합류했습니다.",
    },
  ];

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
          <div className="space-y-6">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
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
                <button className="text-brand-600 hover:text-brand-700 font-semibold transition-colors">
                  자세히 보기 →
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                이전
              </button>
              <button className="px-4 py-2 bg-brand-600 text-gray-900 rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                다음
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
