import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/navigation";
import {
  Phone,
  MapPin,
  Award,
  Instagram,
  Youtube,
  Calendar,
  Users,
  Music,
  Mic,
  Star,
  ChevronRight,
  Clock,
  CheckCircle,
  Trophy,
  GraduationCap,
  Heart,
  Target,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/home-banner.jpeg)" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              진짜 보컬은 <span className="text-brand-400">결과</span>로
              증명합니다
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-4">
              광주 유일의 근거중심 보컬전문 아카데미
            </p>
            <p className="text-lg text-gray-300">비교된다면 비교해 보세요</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            ONLY LIVE
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            수강생들의 유튜브 영상입니다. 영상 제작은{" "}
            <strong>온리보컬아카데미</strong>
            에서 주관하고 있습니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="relative w-full h-48 bg-gradient-to-br from-brand-100 to-brand-200">
                  {/* YouTube-style play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-l-[12px] border-l-brand-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>

                  {/* Video duration overlay */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    3:45
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/videos"
              className="inline-flex items-center space-x-2 text-brand-600 hover:text-brand-700 font-semibold"
            >
              <span>영상 더보기</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              온리보컬아카데미 홍보영상
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              광주 유일의 근거중심 보컬전문 아카데미를 소개합니다
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-8 shadow-xl">
            <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/YSReBuZDCU0"
                title="온리보컬아카데미 홍보영상"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="text-center mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                온리보컬아카데미의 특별함을 확인하세요
              </h3>
              <p className="text-gray-600 mb-6">
                근거중심 발성 교수법과 체계적인 교육 시스템을 통해
                <br />
                수많은 합격생을 배출한 온리보컬아카데미만의 차별화된 교육을
                만나보세요
              </p>
              <a
                href="https://www.youtube.com/watch?v=YSReBuZDCU0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube에서 보기</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            수강 과정
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "입시과정",
                description: "음악대학, 실용음악과 입시 준비",
                icon: GraduationCap,
                features: [
                  "개인별 맞춤 커리큘럼",
                  "실전 모의고사",
                  "합격 전략 수립",
                ],
              },
              {
                title: "취미과정",
                description: "일반인을 위한 보컬 레슨",
                icon: Heart,
                features: [
                  "기초부터 차근차근",
                  "편안한 분위기",
                  "개인 스케줄 맞춤",
                ],
              },
              {
                title: "오디션과정",
                description: "가수 오디션 준비 과정",
                icon: Target,
                features: [
                  "오디션 노하우 전수",
                  "실전 연습",
                  "포트폴리오 제작",
                ],
              },
              {
                title: "전문심화과정",
                description: "전문가를 위한 고급 과정",
                icon: Zap,
                features: ["고급 테크닉", "음악 이론", "창작 실습"],
              },
              {
                title: "앙상블 과정",
                description: "팀워크와 하모니 연습",
                icon: Users,
                features: ["팀워크 향상", "하모니 훈련", "공연 경험"],
              },
              {
                title: "CCM 과정",
                description: "CCM 전문 보컬 트레이닝",
                icon: Music,
                features: ["CCM 특화 훈련", "영성 음악", "교회 봉사"],
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mb-4">
                  <course.icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <ul className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            강사진 소개
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "윤지현 원장",
                specialty: "보컬 전문",
                experience: "15년 경력",
                description: "음악대학 보컬과 졸업, 다수의 합격생 배출",
              },
              {
                name: "이음악 강사",
                specialty: "피아노 전문",
                experience: "10년 경력",
                description: "실용음악과 피아노 전공, 작곡 및 편곡 전문",
              },
              {
                name: "박테크닉 강사",
                specialty: "보컬 테크닉",
                experience: "12년 경력",
                description: "고급 보컬 테크닉 전문, 오디션 합격 다수",
              },
            ].map((teacher, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mic className="w-12 h-12 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {teacher.name}
                </h3>
                <p className="text-brand-600 font-semibold mb-1">
                  {teacher.specialty}
                </p>
                <p className="text-gray-500 text-sm mb-3">
                  {teacher.experience}
                </p>
                <p className="text-gray-600 text-sm">{teacher.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            왜 온리보컬아카데미인가요?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                근거중심 교육
              </h3>
              <p className="text-gray-600">
                과학적이고 체계적인 보컬 교육으로 확실한 실력 향상을 약속합니다
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                전문 상담
              </h3>
              <p className="text-gray-600">
                수업 전 필수 내원 방문 상담으로 개인 맞춤형 교육 계획을
                제공합니다
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                예약 시스템
              </h3>
              <p className="text-gray-600">
                100% 사전 예약제로 체계적이고 편리한 수업 관리가 가능합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Award Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-50 to-brand-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Trophy className="w-12 h-12 text-yellow-500 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                수상 내역
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              전문성과 우수성을 인정받은 온리보컬아카데미의 수상 실적입니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* KCIA 수상 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    KCIA 한국소비자산업평가
                  </h3>
                  <p className="text-sm text-gray-500">2023-2024</p>
                </div>
              </div>
              <p className="text-gray-700 font-semibold">
                2년 연속 광주광역시 음악 부문 우수 업체 선정
              </p>
            </div>

            {/* 스포츠서울 이노베이션 리더 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    스포츠서울 이노베이션 리더
                  </h3>
                  <p className="text-sm text-gray-500">2024</p>
                </div>
              </div>
              <p className="text-gray-700 font-semibold">
                보컬, 음악 부분 대상 수상
              </p>
            </div>

            {/* 혁신한국인 & 파워코리아 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-lg flex items-center justify-center mr-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    혁신한국인 & 파워코리아
                  </h3>
                  <p className="text-sm text-gray-500">2022</p>
                </div>
              </div>
              <p className="text-gray-700 font-semibold">
                보컬전문교육기관 부문 대상
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              광주, 호남 유일의 근거 중심 발성 보컬센터
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              근거 중심 발성 교수법, 보컬코치 과정을 수료한 발성 전문 원장과
              보컬코치들이 수업합니다
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              {/* Profile Image */}
              <div className="text-center">
                <div className="w-48 h-72 mx-auto mb-6 overflow-hidden border-4 border-brand-500 rounded-lg shadow-xl">
                  <Image
                    src="/images/온리보컬 원장 보컬코치 윤지현.jpeg"
                    alt="윤지현 원장"
                    width={192}
                    height={288}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  윤지현 원장
                </h3>
                <p className="text-brand-600 font-semibold">발성 전문가</p>
              </div>

              {/* Introduction */}
              <div>
                <div className="space-y-3 text-gray-700 mb-6">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>현)</strong> 서울 메디컬보이스 이비인후과 발성센터
                      출강 중
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>현)</strong> 온리보컬아카데미 원장
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Medical Voice 1기 수료</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  유명 가수 및 뮤지컬 배우, 아이돌, 실용음악과 지망생, 발성장애
                  환자 등 수많은 케이스에 맞춘 다양한 레슨 경험을 토대로 개인의
                  발성상태에 맞춘 1:1 최적화 레슨을 진행중입니다.
                </p>
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4 text-center">
                전문 분야
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold">
                  발성 전문
                </span>
                <span className="px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold">
                  보컬 코치
                </span>
                <span className="px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold">
                  Medical Voice
                </span>
                <span className="px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold">
                  발성장애 치료
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              체계적인 상담 시스템
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              레슨 전 필수로 내원 방문 상담이 필요합니다. 100% 예약제로
              진행됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                목소리 문진표 작성
              </h3>
              <p className="text-gray-600">
                개인의 발성 상태와 목표를 파악하기 위한 상세한 문진표를
                작성합니다
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                보컬 체크업
              </h3>
              <p className="text-gray-600">
                간단한 가창 테스트를 통해 현재 발성 상태를 정확히 진단합니다
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-900 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                맞춤형 코치 배정
              </h3>
              <p className="text-gray-600">
                진단 내용에 따라 가장 적합한 보컬코치를 배정하고 수업 방향을
                제시합니다
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                왜 복잡한 과정을 거치나요?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                레슨받기까지의 과정이 타 학원에 비해 복잡하고 대기기간도
                오래걸리는 것이 사실입니다. 조금 번거롭고 시간이 필요하더라도
                레슨생 한 분 한 분의 최적의 레슨을 진행하기 위해 어려운 방법을
                택했습니다.
              </p>
            </div>

            <div className="bg-gradient-to-r from-brand-50 to-brand-100 rounded-2xl p-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Clock className="w-8 h-8 text-brand-600" />
                <h4 className="text-xl font-bold text-gray-900">예약 안내</h4>
              </div>
              <div className="text-center space-y-3">
                <p className="text-gray-700 font-semibold">
                  방문상담 희망자가 많아 한달 가량 일찍 방문상담 예약이 마감되고
                  있습니다.
                </p>
                <p className="text-gray-600">
                  수업을 원하시는 경우 여유를 두고 미리 예약을 잡아주시길
                  부탁드립니다.
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
                  >
                    <span>상담 예약하기</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRO Course Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-3xl p-8 md:p-12 text-gray-900 text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                &apos;보컬PRO&apos; 과정
              </h2>
              <p className="text-xl opacity-90">
                원장직강으로만 진행하는 프리미엄 과정
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-yellow-300 mr-3" />
                <h3 className="text-2xl font-bold">특별 안내</h3>
              </div>
              <p className="text-lg leading-relaxed">
                받을 수 있는 인원에 한계가 있어 대기자가 있는 상황이며,
                <strong>6개월 이상 대기</strong>하실 수 있음을 미리
                알려드립니다.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-lg opacity-90">
                본인의 발성 상태가 궁금하시거나 노래하며 해결하고 싶던 부분과
                궁금증이 있으셨다면 부담 없이 예약해주세요 :)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-50 to-brand-100">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                단 하나의 보컬 전문 아카데미
              </h2>
              <div className="text-6xl font-bold text-brand-600 mb-4">
                &apos;ONLY&apos;
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              노래와 목소리로 고민하시는 많은 분께
              <br />
              직관적이고 근거 있는 방법을 제시하는
              <br />
              <strong className="text-brand-600">
                단 하나의 보컬 전문 아카데미
              </strong>
              입니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-brand-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
              >
                <span>상담 예약하기</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 border-2 border-brand-600 text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-brand-600 hover:text-white transition-colors"
              >
                <span>학원 소개</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            상담 문의
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-4">📞 전화 상담</h3>
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="w-6 h-6" />
                <a
                  href="tel:0507-1497-4900"
                  className="text-xl font-semibold hover:underline"
                >
                  0507-1497-4900
                </a>
              </div>
              <p className="mb-6 text-brand-100">
                운영시간 내 언제든 상담 가능합니다
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>평일</span>
                  <span>PM 12:00 ~ PM 10:00</span>
                </div>
                <div className="flex justify-between">
                  <span>토요일</span>
                  <span>AM 11:00 ~ PM 08:00</span>
                </div>
                <div className="flex justify-between">
                  <span>일요일</span>
                  <span>PM 02:00 ~ PM 10:00</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-700 to-brand-800 rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-4">📍 위치 안내</h3>
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold">임방울대로332번길 9-14</p>
                  <p>GW빌딩 2층 온리보컬아카데미</p>
                </div>
              </div>
              <p className="mb-6 text-brand-100">
                광주광역시 광산구에 위치한 전문 보컬 학원입니다
              </p>
              <a
                href="https://booking.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-brand-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                네이버 예약하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            소셜 미디어
          </h2>

          <div className="flex justify-center space-x-8">
            <a
              href="https://www.instagram.com/onlyvocal_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-brand-500 to-brand-600 text-gray-900 px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-semibold">Instagram</span>
            </a>

            <a
              href="https://www.youtube.com/@onlyvocal2250"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-brand-600 text-gray-900 px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              <Youtube className="w-6 h-6" />
              <span className="font-semibold">YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
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
