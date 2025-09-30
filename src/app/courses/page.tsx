"use client";

import Link from "next/link";
import Navigation from "@/components/navigation";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";

export default function CoursesPage() {
  // 애니메이션 variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-white">
      <Banner
        title="수강 안내"
        description="개인별 맞춤형 커리큘럼으로 여러분의 목표에 맞는 최적의 과정을 제공합니다."
        image="/introduction.jpeg"
      />

      {/* Courses Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            {/* 보컬 과정 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                보컬 과정
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 스탠다드 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      스탠다드
                    </h4>
                    <div className="inline-block bg-gray-100 text-brand-700 px-3 py-1 rounded-full text-sm font-semibold">
                      추천
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">수업시간:</span>
                      <span className="font-semibold">고정스케줄</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">레슨시간:</span>
                      <span className="font-semibold">1T (50분)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">수강료:</span>
                      <span className="font-bold text-brand-600">₩220,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">1회 수강료:</span>
                      <span className="font-semibold text-gray-700">
                        ₩55,000
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">할인:</span>
                      <span className="text-gray-500">해당 없음</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">커리큘럼:</p>
                    <p className="text-sm text-gray-700">
                      개인의 발성상태, 지향성에 맞춘 100% 1:1 개인 맞춤 커리큘럼
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">추천 대상:</p>
                    <p className="text-sm text-gray-700">
                      남녀노소 누구나, 노래 실력 향상, 발성 교정 목적으로 장기
                      수강을 원하는 경우 (6개월 이상)
                    </p>
                  </div>
                </div>

                {/* 심화 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      심화
                    </h4>
                    <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      2만원 할인
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">수업시간:</span>
                      <span className="font-semibold">고정스케줄</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">레슨시간:</span>
                      <span className="font-semibold">2T (100분)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">수강료:</span>
                      <span className="font-bold text-brand-600">₩440,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">1회 수강료:</span>
                      <span className="font-semibold text-gray-700">
                        ₩52,500
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">할인:</span>
                      <span className="text-green-600 font-semibold">
                        2만원 할인
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">커리큘럼:</p>
                    <p className="text-sm text-gray-700">
                      개인의 발성상태, 지향성에 맞춘 100% 1:1 개인 맞춤 커리큘럼
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">추천 대상:</p>
                    <p className="text-sm text-gray-700">
                      단기간 빠른 성장을 원하는 경우, 진단 결과 발성 상태가 매우
                      좋지 않아 빠른 교정이 필요한 경우
                    </p>
                  </div>
                </div>

                {/* 원장직강 */}
                <div className="bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      원장직강
                    </h4>
                    <div className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                      프리미엄
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">수업시간:</span>
                      <span className="font-semibold">주 1회 (한 달 4회)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">레슨시간:</span>
                      <span className="font-semibold">1T (50분)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">수강료:</span>
                      <span className="font-bold text-brand-600">₩390,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">1회 수강료:</span>
                      <span className="font-semibold text-gray-700">
                        ₩97,500
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">할인:</span>
                      <span className="text-gray-500">해당 없음</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">커리큘럼:</p>
                    <p className="text-sm text-gray-700">
                      개인의 발성상태, 지향성에 맞춘 100% 1:1 개인 맞춤 커리큘럼
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">추천 대상:</p>
                    <p className="text-sm text-gray-700">
                      진단 결과 발성 상태, 발성 습관 등이 매우 좋지 않아 빠른
                      발성 교정이 필요한 전공생, 노래, 목소리 관련 직업군
                    </p>
                  </div>
                </div>

                {/* 원장직강 원포인트 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      원장직강 원포인트 [쿠폰제]
                    </h4>
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      1회 레슨
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">수업시간:</span>
                      <span className="font-semibold">1회 과정</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">레슨시간:</span>
                      <span className="font-semibold">1T (50분)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">수강료:</span>
                      <span className="font-bold text-brand-600">₩100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">할인:</span>
                      <span className="text-gray-500">해당 없음</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">커리큘럼:</p>
                    <p className="text-sm text-gray-700">
                      개인의 발성상태, 지향성에 맞춘 100% 1:1 개인 맞춤 커리큘럼
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">추천 대상:</p>
                    <p className="text-sm text-gray-700">
                      발성 교정에 목적을 둔 전공생, 노래, 목소리 관련 직업군
                      (고정스케줄 시간이 안맞지만 수강을 받고 싶은 경우)
                    </p>
                  </div>
                </div>

                {/* 보컬 Pro class */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      보컬 Pro class
                    </h4>
                    <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                      전문반
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">수업시간:</span>
                      <span className="font-semibold">1:1 개인레슨</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">레슨시간:</span>
                      <span className="font-semibold">1T (50분)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">수강료:</span>
                      <span className="font-bold text-brand-600">590,000₩</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">커리큘럼:</p>
                    <p className="text-sm text-gray-700">
                      개인의 발성상태, 지향성에 맞춘 100% 1:1 개인 맞춤 커리큘럼
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">추천 대상:</p>
                    <p className="text-sm text-gray-700">
                      흥미, 재미를 위한 수강은 불가하며 실용음악과 입시 지망생
                      또는 전문적인 수강 목적을 가진 경우 (1년 이상 장기 수강생)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 발성프로그램 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                발성프로그램
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      발성프로그램
                    </h4>
                    <div className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
                      그룹수업
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">수업시간:</span>
                      <span className="font-semibold">주 1회 (한 달 4회)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">레슨시간:</span>
                      <span className="font-semibold">1T (50분)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">수강료:</span>
                      <span className="font-bold text-brand-600">₩100,000</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">커리큘럼:</p>
                    <p className="text-sm text-gray-700">
                      기본 발성 위주의 그룹수업 (실기, 이론 병행)
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">추천 대상:</p>
                    <p className="text-sm text-gray-700">
                      전문적인 수강 목적을 가진 경우 (1년 이상 장기 수강생)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {/* 수상 경력 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              방문 상담 및 수강 신청
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                🏆 수상 경력
              </h3>
              <div className="space-y-4 text-left">
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
                  <p className="font-semibold text-gray-900">
                    2023, 2024 KCIA 한국소비자산업평가 2년연속 광주광역시 음악
                    부문 우수 업체 선정
                  </p>
                </div>
                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-lg">
                  <p className="font-semibold text-gray-900">
                    스포츠서울 주관 2024 이노베이션 리더 대상 보컬, 음악 부분
                    대상 수상
                  </p>
                </div>
                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded-lg">
                  <p className="font-semibold text-gray-900">
                    스포츠서울 주관 2022 혁신한국인 & 파워코리아
                    보컬전문교육기관 부문 대상
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 학원 소개 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              온리보컬아카데미 소개
            </h3>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-brand-600">
                  온리보컬아카데미
                </span>
                는 광주, 호남 유일의 근거 중심 발성 보컬센터로 근거 중심 발성
                교수법, 보컬코치 과정을 수료한 발성 전문 원장과 보컬코치들이
                수업합니다.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">
                  👨‍⚕️ 윤지현 원장 프로필
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• 현) 서울 메디컬보이스 이비인후과 발성센터 출강 중</li>
                  <li>• 현) 온리보컬아카데미 원장</li>
                  <li>• Medical Voice 1기 수료</li>
                  <li>
                    • 유명 가수 및 뮤지컬 배우, 아이돌, 실용음악과 지망생,
                    발성장애 환자 등 다양한 케이스 경험
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">
                  📋 방문 상담 과정
                </h4>
                <p className="mb-3">
                  레슨 전 필수로 내원 방문 상담이 필요합니다. 방문 상담은 100%
                  예약제로 진행 중이며:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>목소리 문진표 작성</li>
                  <li>간단한 가창 테스트(보컬체크업) 시행</li>
                  <li>발성 상태 진단</li>
                  <li>수업 방향 제시</li>
                  <li>진단내용에 따라 가장 적합한 보컬코치 배정</li>
                </ol>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">
                  ⚠️ 중요 안내사항
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    • 레슨받기까지의 과정이 타 학원에 비해 복잡하고 대기기간도
                    오래걸립니다
                  </li>
                  <li>
                    • 방문상담 희망자가 많아 한달 가량 일찍 방문상담 예약이
                    마감됩니다
                  </li>
                  <li>
                    • 수업을 원하시는 경우 여유를 두고 미리 예약을 잡아주시길
                    부탁드립니다
                  </li>
                  <li>
                    • '보컬PRO'과정은 원장직강으로만 진행하며, 6개월이상
                    대기하실 수 있습니다
                  </li>
                </ul>
              </div>

              <p className="text-center text-lg font-semibold text-brand-600">
                노래와 목소리로 고민하시는 많은 분께 직관적이고 근거 있는 방법을
                제시하는
                <br />단 하나의 보컬 전문 아카데미 'ONLY' 입니다.
              </p>
            </div>
          </div>

          {/* 예약 및 다운로드 */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              방문 상담은 네이버 예약을 통해 진행됩니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://map.naver.com/p/search/온리보컬/place/1108538742?placePath=/ticket?entry=pll&fromPanelNum=2&timestamp=202509092103&locale=ko&svcName=map_pcv5&searchText=온리보컬&from=map&fromPanelNum=2&timestamp=202509092103&locale=ko&svcName=map_pcv5&searchText=온리보컬&fromNxList=true&searchType=place&c=15.00,0,0,0,dh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>네이버 예약하기</span>
              </a>
              <a
                href="/images/온리보컬_수강신청서.jpeg"
                download="온리보컬_수강신청서.jpeg"
                className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>수강신청서 다운로드</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
