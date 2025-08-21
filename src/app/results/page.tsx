import Link from "next/link";
import Navigation from "@/components/navigation";
import {
  ArrowLeft,
  Trophy,
  GraduationCap,
  Calendar,
  Search,
} from "lucide-react";

export default function ResultsPage() {
  const results = [
    {
      year: 2024,
      students: [
        {
          name: "김○○",
          school: "서울대학교",
          major: "음악대학 보컬과",
          type: "수시",
        },
        {
          name: "이○○",
          school: "연세대학교",
          major: "실용음악과",
          type: "수시",
        },
        {
          name: "박○○",
          school: "고려대학교",
          major: "음악대학 보컬과",
          type: "정시",
        },
        {
          name: "최○○",
          school: "한양대학교",
          major: "실용음악과",
          type: "수시",
        },
        {
          name: "정○○",
          school: "경희대학교",
          major: "음악대학 보컬과",
          type: "수시",
        },
        {
          name: "강○○",
          school: "성균관대학교",
          major: "실용음악과",
          type: "정시",
        },
        {
          name: "조○○",
          school: "중앙대학교",
          major: "음악대학 보컬과",
          type: "수시",
        },
        {
          name: "윤○○",
          school: "홍익대학교",
          major: "실용음악과",
          type: "수시",
        },
      ],
    },
    {
      year: 2023,
      students: [
        {
          name: "김○○",
          school: "서울대학교",
          major: "음악대학 보컬과",
          type: "수시",
        },
        {
          name: "이○○",
          school: "연세대학교",
          major: "실용음악과",
          type: "수시",
        },
        {
          name: "박○○",
          school: "고려대학교",
          major: "음악대학 보컬과",
          type: "정시",
        },
        {
          name: "최○○",
          school: "한양대학교",
          major: "실용음악과",
          type: "수시",
        },
        {
          name: "정○○",
          school: "경희대학교",
          major: "음악대학 보컬과",
          type: "수시",
        },
        {
          name: "강○○",
          school: "성균관대학교",
          major: "실용음악과",
          type: "정시",
        },
      ],
    },
    {
      year: 2022,
      students: [
        {
          name: "김○○",
          school: "서울대학교",
          major: "음악대학 보컬과",
          type: "수시",
        },
        {
          name: "이○○",
          school: "연세대학교",
          major: "실용음악과",
          type: "수시",
        },
        {
          name: "박○○",
          school: "고려대학교",
          major: "음악대학 보컬과",
          type: "정시",
        },
        {
          name: "최○○",
          school: "한양대학교",
          major: "실용음악과",
          type: "수시",
        },
      ],
    },
  ];

  const statistics = [
    { year: 2024, count: 8, topSchool: "서울대학교" },
    { year: 2023, count: 6, topSchool: "서울대학교" },
    { year: 2022, count: 4, topSchool: "서울대학교" },
    { year: 2021, count: 5, topSchool: "연세대학교" },
    { year: 2020, count: 3, topSchool: "고려대학교" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            합격자 명단
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            온리보컬아카데미에서 배출한 합격생들의 명단입니다.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            연도별 합격 통계
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl"
              >
                <div className="text-2xl md:text-3xl font-bold text-brand-600 mb-1">
                  {stat.count}
                </div>
                <div className="text-sm text-gray-600 mb-1">{stat.year}년</div>
                <div className="text-xs text-gray-500">{stat.topSchool}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-brand-600 text-white px-6 py-3 rounded-lg">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">총 26명 합격</span>
            </div>
          </div>
        </div>
      </section>

      {/* Results by Year */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-6xl">
          {results.map((yearResult, index) => (
            <div key={yearResult.year} className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-brand-600 mr-3" />
                {yearResult.year}년 합격자
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearResult.students.map((student, studentIndex) => (
                  <div
                    key={studentIndex}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900">
                        {student.name}
                      </h4>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          student.type === "수시"
                            ? "bg-blue-100 text-blue-600 border border-blue-200"
                            : "bg-green-100 text-green-600 border border-green-200"
                        }`}
                      >
                        {student.type}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-brand-600 font-semibold text-base">
                        {student.school}
                      </p>
                      <p className="text-gray-600 text-sm bg-gray-50 px-3 py-2 rounded-lg">
                        {student.major}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            합격자 검색
          </h2>

          <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input
                type="text"
                placeholder="이름으로 검색"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option value="">연도 선택</option>
                <option value="2024">2024년</option>
                <option value="2023">2023년</option>
                <option value="2022">2022년</option>
                <option value="2021">2021년</option>
                <option value="2020">2020년</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option value="">대학 선택</option>
                <option value="seoul">서울대학교</option>
                <option value="yonsei">연세대학교</option>
                <option value="korea">고려대학교</option>
                <option value="hanyang">한양대학교</option>
                <option value="kyunghee">경희대학교</option>
              </select>
            </div>

            <button className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors flex items-center justify-center space-x-2">
              <Search className="w-5 h-5" />
              <span>검색하기</span>
            </button>
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
