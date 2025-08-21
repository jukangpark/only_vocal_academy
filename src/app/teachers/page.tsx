import Link from "next/link";
import Navigation from "@/components/navigation";
import {
  ArrowLeft,
  Mic,
  Music,
  GraduationCap,
  Award,
  Users,
  Star,
} from "lucide-react";

export default function TeachersPage() {
  const teachers = [
    {
      name: "윤지현 원장",
      specialty: "보컬 전문",
      experience: "15년 경력",
      education: "음악대학 보컬과 졸업",
      description: "음악대학 보컬과 졸업, 다수의 합격생 배출",
      achievements: [
        "500여명 합격생 배출",
        "음악대학 입시 전문",
        "보컬 테크닉 전문가",
        "개인별 맞춤 지도",
      ],
      image: "🎤",
    },
    {
      name: "이음악 강사",
      specialty: "피아노 전문",
      experience: "10년 경력",
      education: "실용음악과 피아노 전공",
      description: "실용음악과 피아노 전공, 작곡 및 편곡 전문",
      achievements: [
        "피아노 반주 전문",
        "작곡 및 편곡 전문",
        "음악 이론 전문",
        "실용음악 입시 전문",
      ],
      image: "🎹",
    },
    {
      name: "박테크닉 강사",
      specialty: "보컬 테크닉",
      experience: "12년 경력",
      education: "보컬 테크닉 전문",
      description: "고급 보컬 테크닉 전문, 오디션 합격 다수",
      achievements: [
        "고급 보컬 테크닉",
        "오디션 합격 다수",
        "음악 치료사 자격",
        "발성 기법 전문",
      ],
      image: "🎵",
    },
    {
      name: "최음악 강사",
      specialty: "음악 이론",
      experience: "8년 경력",
      education: "음악학과 이론 전공",
      description: "음악 이론 및 시창청음 전문, 입시 준비 전문",
      achievements: [
        "음악 이론 전문",
        "시창청음 전문",
        "입시 준비 전문",
        "화성학 전문",
      ],
      image: "📚",
    },
    {
      name: "정앙상블 강사",
      specialty: "앙상블 전문",
      experience: "6년 경력",
      education: "앙상블 및 합창 전문",
      description: "앙상블 및 합창 전문, 그룹 활동 지도",
      achievements: [
        "앙상블 전문",
        "합창 지도 전문",
        "그룹 활동 지도",
        "무대 공연 전문",
      ],
      image: "👥",
    },
    {
      name: "한CCM 강사",
      specialty: "CCM 전문",
      experience: "7년 경력",
      education: "CCM 및 찬양 전문",
      description: "CCM 및 찬양 전문, 교회 음악 전문",
      achievements: [
        "CCM 전문",
        "찬양 지도 전문",
        "교회 음악 전문",
        "영성 음악 전문",
      ],
      image: "⛪",
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
            강사진 소개
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            각 분야의 전문가들이 여러분의 음악적 꿈을 실현시켜 드립니다.
          </p>
        </div>
      </section>

      {/* Teachers List */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                    {teacher.image}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {teacher.name}
                  </h3>
                  <p className="text-brand-600 font-semibold mb-1">
                    {teacher.specialty}
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                    {teacher.experience}
                  </p>
                  <p className="text-gray-600 text-sm">{teacher.education}</p>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 mb-4">{teacher.description}</p>

                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-4 h-4 text-yellow-500 mr-2" />
                    주요 성과
                  </h4>
                  <ul className="space-y-2">
                    {teacher.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-brand-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
                >
                  상담 신청하기
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            교육 철학
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                개인별 맞춤 교육
              </h3>
              <p className="text-gray-600">
                각 학생의 개성과 목표에 맞는 맞춤형 커리큘럼을 제공하여 최적의
                학습 효과를 달성합니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                전문적 지도
              </h3>
              <p className="text-gray-600">
                각 분야의 전문가들이 체계적이고 과학적인 방법으로 학생들의
                실력을 향상시킵니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mb-4">
                <Music className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                창의적 표현
              </h3>
              <p className="text-gray-600">
                음악의 본질을 이해하고 자신만의 독특한 표현력을 개발할 수 있도록
                지도합니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                실전 중심
              </h3>
              <p className="text-gray-600">
                이론과 실습을 균형있게 배합하여 실제 상황에서 활용할 수 있는
                실력을 기릅니다.
              </p>
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
