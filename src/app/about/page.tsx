"use client";

import AddressInfo from "@/components/AddressInfo";
import Banner from "@/components/Banner";
import Image from "next/image";

export default function AboutPage() {
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
      {/* Hero Section */}
      <Banner
        title="학원 소개"
        description="광주 유일의 근거 중심 발성 보컬 센터, 발성은 과학, 노래는 예술이다."
        image="/introduction.jpeg"
      />

      {/* Greeting Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            인사말
          </h2>
          <div className="text-center mb-12">
            <div className="w-64 h-100 mx-auto mb-6 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/온리보컬 원장 보컬코치 윤지현.jpeg"
                alt="윤지현 원장"
                width={256}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              윤지현 원장
            </h3>
            <p className="text-xl text-brand-600 font-semibold">발성 전문가</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-lg leading-relaxed text-gray-800">
              <p>
                안녕하세요. <br />
                근거중심발성교수법을 토대로 목소리 본연의 아름다움을 찾아
                노래하는 즐거움을 선사하는 온리보컬아카데미의 원장 보컬코치
                윤지현입니다.
              </p>

              <p>
                사람마다 눈, 코, 입이 다르게 생긴 것처럼 우리 모두가 몸의 구조,
                마인드, 성대 모양, 발성 기관들의 협응성 등이 모두 다릅니다.
                따라서 보컬 레슨을 진행할 때{" "}
                <strong className="text-brand-600 text-xl">
                  개인의 특성에 맞게 적합한 방법을 사용하는 것을 가장 중요하게
                </strong>{" "}
                여기고 있습니다.
              </p>

              <p>
                또한 보컬코치가 옳다고, 좋다고 생각하는 소리를 기준으로 수강생을
                이끌지 않고, <br />
                <strong className="text-brand-600 text-xl">
                  수강생이 진정으로 원하는 소리와 방향대로 수업하는 것을
                  중요하게
                </strong>{" "}
                생각합니다. :)
              </p>

              <p>
                <strong className="text-brand-600 text-xl">
                  노래는 타고난 사람만 잘하는게 아닙니다.
                  <br />
                </strong>{" "}
                음치나 박치, 고음이 안 나는 사람도 성장, 개발될 수 있습니다.
                노래를 사랑하는 마음과 끊임없이 노력할 수 있는 끈기, 그리고 옳은
                방향으로 이끌어 줄 수 있는 보컬코치만 있다면 크게 개발될 수
                있습니다.
              </p>

              <p>
                저는 타고난 1%가 아니라 평범한 99% 사람들에게 노래하는 즐거움을
                주는 보컬코치가 되어
                <br />
                <strong className="text-brand-600 text-xl">
                  "노래는 타고난 사람만 잘할 수 있다"는 편견을 꼭 깨겠습니다.
                </strong>
              </p>

              <p>
                많은 사람이 편하고 건강하게 오랫동안 노래하는 행복을 느끼실 수
                있도록 절대 자만하지 않고 항상 낮은 자세로 공부하고, 수강생의
                입장에서 공감하고 이해하며 끊임없이 노력하는
                <br />
                <strong className="text-brand-600 text-xl">
                  단 하나뿐인 보컬 전문 아카데미 '온리'가 되겠습니다.
                </strong>
              </p>
            </div>

            <div className="text-center mt-12">
              <a
                href="https://linktr.ee/onlyvocal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-500 to-brand-600 text-black px-10 py-5 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all duration-300 shadow-xl cursor-pointer"
              >
                <span>온리보컬 링크트리</span>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                비전
              </h2>
              <div className="w-24 h-1 bg-brand-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    우리의 철학
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-brand-600">
                    모든 소리에는 원인과 결과가 있습니다.
                  </strong>
                  <br />
                  1:1 맞춤수업으로 수강생의 니즈를 정확하게 파악하고 교정합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎵</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">교육 목표</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  단순한 노래 교육이 아닌, 음악의 본질을 이해하고 표현할 수 있는
                  <strong className="text-brand-600">
                    {" "}
                    진정한 아티스트를 양성
                  </strong>
                  하는 것을 목표로 합니다.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">💎</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    맞춤형 교육
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  개인별 맞춤형 커리큘럼과 전문 강사진의 체계적인 지도로
                  <strong className="text-brand-600">
                    {" "}
                    여러분의 음악적 잠재력을 최대한 끌어올려
                  </strong>{" "}
                  드리겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            운영시간
          </h2>
          <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-900">월 ~ 금</span>
                <span className="text-gray-600">14:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-900">토</span>
                <span className="text-gray-600">13:00 - 19:00</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg shadow-sm border border-red-200">
                <span className="font-semibold text-red-600">일</span>
                <span className="text-red-600">정기휴무 (매주 일요일)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            위치 안내
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  주소 정보
                </h3>
                <AddressInfo />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  찾아오시는 길
                </h3>
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <p className="text-gray-600 mb-4">
                    네이버 지도에서 '온리보컬아카데미'를 검색하시면
                    <br />
                    정확한 위치를 확인하실 수 있습니다.
                  </p>
                  <a
                    href="https://map.naver.com/p/search/온리보컬/place/1108538742?placePath=/ticket?entry=pll&fromPanelNum=2&timestamp=202509092103&locale=ko&svcName=map_pcv5&searchText=온리보컬&from=map&fromPanelNum=2&timestamp=202509092103&locale=ko&svcName=map_pcv5&searchText=온리보컬&fromNxList=true&searchType=place&c=15.00,0,0,0,dh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>네이버 지도에서 보기</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
