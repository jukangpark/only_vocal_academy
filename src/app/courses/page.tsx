import Link from "next/link";
import Navigation from "@/components/navigation";
import {
  ArrowLeft,
  GraduationCap,
  Heart,
  Target,
  Zap,
  Users,
  Music,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react";

export default function CoursesPage() {
  const courses = [
    {
      title: "입시과정",
      description: "음악대학, 실용음악과 입시 준비",
      icon: GraduationCap,
      duration: "6개월 ~ 1년",
      price: "월 30만원",
      features: [
        "개인별 맞춤 커리큘럼",
        "실전 모의고사",
        "합격 전략 수립",
        "포트폴리오 제작",
        "입시 노하우 전수",
        "개별 상담 및 관리",
      ],
      target: "음악대학 입시 준비생",
      schedule: "주 2회 (개별 스케줄)",
    },
    {
      title: "취미과정",
      description: "일반인을 위한 보컬 레슨",
      icon: Heart,
      duration: "3개월 ~ 6개월",
      price: "월 15만원",
      features: [
        "기초부터 차근차근",
        "편안한 분위기",
        "개인 스케줄 맞춤",
        "다양한 장르 연습",
        "기초 음악 이론",
        "자유로운 수업 분위기",
      ],
      target: "보컬에 관심 있는 일반인",
      schedule: "주 1회 (개별 스케줄)",
    },
    {
      title: "오디션과정",
      description: "가수 오디션 준비 과정",
      icon: Target,
      duration: "3개월 ~ 6개월",
      price: "월 25만원",
      features: [
        "오디션 노하우 전수",
        "실전 연습",
        "포트폴리오 제작",
        "무대 매너 훈련",
        "오디션 심사 기준 분석",
        "개별 맞춤 전략",
      ],
      target: "가수 오디션 준비생",
      schedule: "주 2회 (개별 스케줄)",
    },
    {
      title: "전문심화과정",
      description: "전문가를 위한 고급 과정",
      icon: Zap,
      duration: "6개월 ~ 1년",
      price: "월 35만원",
      features: [
        "고급 테크닉",
        "음악 이론",
        "창작 실습",
        "음악 분석",
        "고급 보컬 테크닉",
        "전문가 지도",
      ],
      target: "전문가 지망생",
      schedule: "주 3회 (개별 스케줄)",
    },
    {
      title: "앙상블 과정",
      description: "팀워크와 하모니 연습",
      icon: Users,
      duration: "3개월 ~ 6개월",
      price: "월 20만원",
      features: [
        "팀워크 향상",
        "하모니 훈련",
        "공연 경험",
        "그룹 활동",
        "합창 기법",
        "무대 공연",
      ],
      target: "그룹 활동 희망자",
      schedule: "주 1회 (그룹 수업)",
    },
    {
      title: "CCM 과정",
      description: "CCM 전문 보컬 트레이닝",
      icon: Music,
      duration: "3개월 ~ 6개월",
      price: "월 18만원",
      features: [
        "CCM 특화 훈련",
        "영성 음악",
        "교회 봉사",
        "찬양 훈련",
        "영성 보컬",
        "교회 음악",
      ],
      target: "CCM 가수 지망생",
      schedule: "주 1회 (개별 스케줄)",
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
            수강 안내
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            개인별 맞춤형 커리큘럼으로 여러분의 목표에 맞는 최적의 과정을
            제공합니다.
          </p>
        </div>
      </section>

      {/* Course List */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-600 to-brand-700 rounded-lg flex items-center justify-center mb-6">
                  <course.icon className="w-8 h-8 text-gray-900" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-brand-600" />
                    <span>기간: {course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 text-brand-600" />
                    <span>수강료: {course.price}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">대상:</span> {course.target}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">수업:</span>{" "}
                    {course.schedule}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    주요 특징
                  </h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-brand-600 text-gray-900 text-center py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
                >
                  상담 신청하기
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            수강 안내사항
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                수강 신청 절차
              </h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-brand-600 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </span>
                  <span>전화 또는 온라인으로 상담 예약</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-brand-600 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </span>
                  <span>학원 방문 상담 및 수업 체험</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-brand-600 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </span>
                  <span>개인별 맞춤 커리큘럼 설계</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-brand-600 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </span>
                  <span>수강 신청 및 수업 시작</span>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                수강료 안내
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>입회비</span>
                  <span className="font-semibold">5만원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>교재비</span>
                  <span className="font-semibold">과정별 상이</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>할인 혜택</span>
                  <span className="font-semibold text-brand-600">
                    3개월 이상 등록 시
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>결제 방법</span>
                  <span className="font-semibold">현금, 카드, 계좌이체</span>
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
