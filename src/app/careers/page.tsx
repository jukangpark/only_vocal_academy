import Link from "next/link";
import Navigation from "@/components/navigation";
import {
  ArrowLeft,
  Users,
  Briefcase,
  Mail,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";

export default function CareersPage() {
  const positions = [
    {
      title: "보컬 강사",
      type: "정규직",
      location: "광주광역시 광산구",
      experience: "3년 이상",
      education: "음악대학 보컬과 졸업",
      description:
        "음악대학 입시 및 일반 보컬 레슨을 담당할 전문 강사를 모집합니다.",
      requirements: [
        "음악대학 보컬과 졸업자",
        "3년 이상의 보컬 교육 경력",
        "입시 준비 경험 우대",
        "열정적이고 책임감 있는 분",
        "학생들과의 소통 능력 우수",
      ],
      benefits: [
        "경쟁력 있는 급여",
        "4대보험",
        "퇴직연금",
        "연차휴가",
        "교육비 지원",
      ],
    },
    {
      title: "피아노 반주 강사",
      type: "계약직",
      location: "광주광역시 광산구",
      experience: "2년 이상",
      education: "실용음악과 피아노 전공",
      description: "보컬 레슨 반주 및 피아노 수업을 담당할 강사를 모집합니다.",
      requirements: [
        "실용음악과 피아노 전공자",
        "2년 이상의 반주 경험",
        "다양한 장르 반주 가능",
        "즉흥 반주 능력 우수",
        "팀워크 능력 우수",
      ],
      benefits: [
        "시급 기준 급여",
        "4대보험",
        "연차휴가",
        "교육비 지원",
        "유연한 근무시간",
      ],
    },
    {
      title: "음악 이론 강사",
      type: "파트타임",
      location: "광주광역시 광산구",
      experience: "1년 이상",
      education: "음악학과 이론 전공",
      description: "음악 이론 및 시창청음 수업을 담당할 강사를 모집합니다.",
      requirements: [
        "음악학과 이론 전공자",
        "1년 이상의 교육 경험",
        "입시 이론 지도 경험",
        "체계적인 커리큘럼 구성 능력",
        "학생 지도에 대한 열정",
      ],
      benefits: [
        "시급 기준 급여",
        "4대보험",
        "연차휴가",
        "교육비 지원",
        "주말 근무 가능",
      ],
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
            인재채용
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            온리보컬아카데미와 함께 성장할 열정적인 인재를 모집합니다.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            우리 학원의 문화
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-6">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                성장 중심 문화
              </h3>
              <p className="text-gray-600">
                지속적인 교육과 훈련을 통해 개인과 조직이 함께 성장하는 문화를
                만들어갑니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-6">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                전문성 존중
              </h3>
              <p className="text-gray-600">
                각 분야의 전문성을 존중하고, 전문가로서의 자부심을 가질 수 있는
                환경을 제공합니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-6">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                소통과 협력
              </h3>
              <p className="text-gray-600">
                열린 소통과 협력을 통해 더 나은 교육 환경을 만들어갑니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-6">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                워라밸 중시
              </h3>
              <p className="text-gray-600">
                업무와 삶의 균형을 중시하여 건강한 조직 문화를 만들어갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            채용 포지션
          </h2>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors">
                    지원하기
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      주요 업무
                    </h4>
                    <p className="text-gray-600 mb-4">{position.description}</p>

                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      자격 요건
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-gray-600"
                        >
                          <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      복리후생
                    </h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-gray-600"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            지원하기
          </h2>

          <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="연락처를 입력하세요"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  지원 포지션 *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">지원 포지션을 선택하세요</option>
                  <option value="vocal">보컬 강사</option>
                  <option value="piano">피아노 반주 강사</option>
                  <option value="theory">음악 이론 강사</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  자기소개서 *
                </label>
                <textarea
                  required
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="자기소개서를 작성해주세요"
                ></textarea>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label className="text-sm text-gray-600">
                  개인정보 수집 및 이용에 동의합니다. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-600 text-white py-4 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
              >
                지원서 제출하기
              </button>
            </form>
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
