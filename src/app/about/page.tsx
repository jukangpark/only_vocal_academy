"use client";

import Navigation from "@/components/navigation";
import Image from "next/image";
import { Users, Award, Target, Clock, Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [copiedRoad, setCopiedRoad] = useState(false);
  const [copiedJibun, setCopiedJibun] = useState(false);

  const roadAddress =
    "광주 광산구 임방울대로332번길 9-14 GW빌딩 2층 온리보컬아카데미";
  const jibunAddress = "광주 광산구 수완동 1435";

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

  const copyToClipboard = async (text: string, type: "road" | "jibun") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "road") {
        setCopiedRoad(true);
        setTimeout(() => setCopiedRoad(false), 2000);
      } else {
        setCopiedJibun(true);
        setTimeout(() => setCopiedJibun(false), 2000);
      }
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/introduction.jpeg)" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            학원 소개
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            광주 유일의 근거중심 보컬전문 아카데미
          </p>
          <div className="mt-8">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">
              광주 유일의 '근거 중심 발성 보컬 센터'
            </p>
            <p className="text-xl md:text-2xl font-semibold text-white">
              '발성은 과학, 노래는 예술이다.'
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-gray-200">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
              학원소개 & 비전
            </h2>
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-6">
                온리보컬아카데미는 2009년 설립 이후, 과학적이고 체계적인 보컬
                교육을 통해 수많은 학생들의 꿈을 실현시켜 왔습니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                <strong>모든 소리에는 원인과 결과가 있습니다.</strong> 1:1
                맞춤수업으로 수강생의 니즈를 정확하게 파악하고 교정합니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                우리는 단순한 노래 교육이 아닌, 음악의 본질을 이해하고 표현할 수
                있는 진정한 아티스트를 양성하는 것을 목표로 합니다.
              </p>
              <p className="text-lg text-gray-600">
                개인별 맞춤형 커리큘럼과 전문 강사진의 체계적인 지도로 여러분의
                음악적 잠재력을 최대한 끌어올려 드리겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation System Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            체계적인 상담 시스템
          </h2>
          <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                내원 방문상담은 100% 예약제로만 진행중입니다
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                목소리 문진표 작성 및 간단한 가창 테스트, 체크업을 시행하여
                개인의 발성상태를 진단 후, 수업 진행 방향을 안내드리고 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  📱 예약 방법
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  내원 방문상담은 <strong>네이버예약을 통해서만</strong> 받고
                  있으니
                </p>
                <p className="text-xl font-bold text-brand-600">
                  네이버에 '온리보컬아카데미'를 검색해주세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Greeting Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            인사말
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-40 h-60 mx-auto mb-4 overflow-hidden border-4 border-brand-500 rounded-lg shadow-lg">
                <Image
                  src="/images/온리보컬 원장 보컬코치 윤지현.jpeg"
                  alt="윤지현 원장"
                  width={160}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                윤지현 원장
              </h3>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                안녕하세요. 근거중심발성교수법을 토대로 목소리 본연의 아름다움을
                찾아 노래하는 즐거움을 선사하는 온리보컬아카데미의 원장 보컬코치
                윤지현입니다.
              </p>

              <p className="mb-4">
                사람마다 눈, 코, 입이 다르게 생긴 것처럼 우리 모두가 몸의 구조,
                마인드, 성대 모양, 발성 기관들의 협응성 등이 모두 다릅니다.
                따라서 보컬 레슨을 진행할 때{" "}
                <strong>
                  개인의 특성에 맞게 적합한 방법을 사용하는 것을 가장 중요하게
                </strong>{" "}
                여기고 있습니다.
              </p>

              <p className="mb-4">
                또한 보컬코치가 옳다고, 좋다고 생각하는 소리를 기준으로 수강생을
                이끌지 않고,
                <strong>
                  수강생이 진정으로 원하는 소리와 방향대로 수업하는 것을
                  중요하게
                </strong>{" "}
                생각합니다. :)
              </p>

              <p className="mb-4">
                <strong>노래는 타고난 사람만 잘하는게 아닙니다.</strong> 음치나
                박치, 고음이 안 나는 사람도 성장, 개발될 수 있습니다. 노래를
                사랑하는 마음과 끊임없이 노력할 수 있는 끈기, 그리고 옳은
                방향으로 이끌어 줄 수 있는 보컬코치만 있다면 크게 개발될 수
                있습니다.
              </p>

              <p className="mb-4">
                저는 타고난 1%가 아니라 평범한 99% 사람들에게 노래하는 즐거움을
                주는 보컬코치가 되어
                <strong>
                  "노래는 타고난 사람만 잘할 수 있다"는 편견을 꼭 깨겠습니다.
                </strong>
              </p>

              <p className="mb-4">
                많은 사람이 편하고 건강하게 오랫동안 노래하는 행복을 느끼실 수
                있도록 절대 자만하지 않고 항상 낮은 자세로 공부하고, 수강생의
                입장에서 공감하고 이해하며 끊임없이 노력하는
                <strong>
                  단 하나뿐인 보컬 전문 아카데미 '온리'가 되겠습니다.
                </strong>
              </p>

              <p className="text-center text-lg font-semibold text-brand-600">
                감사합니다!
              </p>

              <div className="text-center mt-8">
                <a
                  href="https://linktr.ee/onlyvocal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-500 to-brand-600 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <span>온리보컬 링크트리</span>
                  <svg
                    className="w-5 h-5"
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
                <span className="font-semibold text-gray-900">월</span>
                <span className="text-gray-600">14:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-900">화</span>
                <span className="text-gray-600">14:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-900">수</span>
                <span className="text-gray-600">14:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-900">목</span>
                <span className="text-gray-600">14:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-900">금</span>
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
      <section className="py-20 px-4 bg-gray-50">
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
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">
                        도로명 주소
                      </h4>
                      <button
                        onClick={() => copyToClipboard(roadAddress, "road")}
                        className="flex items-center space-x-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors"
                      >
                        {copiedRoad ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>복사됨</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>복사</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-gray-600">
                      광주 광산구 임방울대로332번길 9-14
                      <br />
                      GW빌딩 2층 온리보컬아카데미
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">지번</h4>
                      <button
                        onClick={() => copyToClipboard(jibunAddress, "jibun")}
                        className="flex items-center space-x-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors"
                      >
                        {copiedJibun ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>복사됨</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>복사</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-gray-600">광주 광산구 수완동 1435</p>
                  </div>
                </div>
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
