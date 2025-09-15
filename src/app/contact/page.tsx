"use client";

import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import Banner from "@/components/Banner";

export default function ContactPage() {
  // 애니메이션 variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-white">
      <Banner
        title="상담 문의"
        description="방문 상담 및 수강 신청을 위한 안내입니다."
        image="/introduction.jpeg"
      />

      {/* Contact Section */}
      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          {/* 학원 소개 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              방문상담 안내사항
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

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">
                  🎤 보컬 파트 방문상담 안내
                </h4>
                <div className="space-y-3 text-sm">
                  <p>
                    온리보컬아카데미의 보컬파트 방문상담은 간단한 가창
                    테스트(보컬체크업)를 시행하고 있습니다.
                  </p>
                  <p>
                    <span className="font-semibold text-green-700">
                      준비사항:
                    </span>{" "}
                    평소에 즐겨 부르시던 노래를 1-2곡 정도 준비해오시면 원활한
                    상담이 가능합니다.
                  </p>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <p className="font-semibold text-gray-900 mb-2">
                      ⚠️ 중요 안내
                    </p>
                    <p>
                      비염, 축농증, 비중격만곡증, 발성장애 및 성대결절, 성대폴립
                      등의 성대 관련 질환이 있으실 경우
                      <span className="font-semibold text-green-700">
                        {" "}
                        예약 사항에 꼭 남겨주시길 바랍니다.
                      </span>
                    </p>
                  </div>
                  <p className="text-center font-semibold text-green-700">
                    광주 유일의 근거중심 보컬전문 아카데미 'ONLY' 진단과 근거를
                    바탕으로 상담하겠습니다.
                  </p>
                </div>
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
      </div>

      {/* Contact Info Section */}
      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            연락처 정보
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <div className="bg-gray-50 rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-4">📞 전화 상담</h3>
              <div className="mb-6">
                <a
                  href="tel:0507-1497-4900"
                  className="text-2xl font-bold hover:underline"
                >
                  0507-1497-4900
                </a>
              </div>
              <p className="text-brand-100 mb-6">
                운영시간 내 언제든 상담 가능합니다
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>월-금</span>
                  <span>14:00 ~ 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>토요일</span>
                  <span>13:00 ~ 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>일요일</span>
                  <span>정기휴무</span>
                </div>
              </div>
            </div>

            {/* Location Contact */}
            <div className="bg-gray-50 rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-4">📍 방문 상담</h3>
              <div className="mb-6">
                <p className="text-lg font-semibold">광주 광산구 수완동 1435</p>
                <p className="text-sm">
                  광주 광산구 임방울대로332번길 9-14 GW빌딩 2층 온리보컬아카데미
                </p>
              </div>
              <p className="text-brand-100 mb-6">사전 예약 필수</p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://map.naver.com/p/search/온리보컬/place/1108538742?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh"
                className="inline-block bg-gray-100 text-brand-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                오시는 길 보기
              </Link>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-4">📱 소셜 미디어</h3>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/onlyvocal_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.youtube.com/@onlyvocal2250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
