"use client";

import AddressInfo from "@/components/AddressInfo";
import Banner from "@/components/Banner";
import Image from "next/image";
import { Award, Star } from "lucide-react";
import teachers from "@/constants/teachers";
import { motion } from "framer-motion";

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

<motion.section
        className="py-24 px-4 bg-gradient-to-br from-brand-50 via-white to-brand-100"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-6xl">
          {/* 우리가 믿는 것 섹션 */}
          <div className="mb-12">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                온리보컬의 교육 철학
              </h3>
            </motion.div>

            <div className="space-y-8">
              {/* 믿음 1 */}
              <motion.div
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-blue-500 to-purple-500"></div>
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                  </div>
                  <div className="w-full md:flex-1 pt-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      모든 목소리는 다르다
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      얼굴, 성격, 성대 구조, 근육 협응성, 성도 모양, 인지 능력
                      <br />
                      <span className="font-semibold text-gray-900">따라서 정답 발성은 존재하지 않습니다.</span>
                      <br />
                      개인에게 맞는 전략만 있을 뿐입니다.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 믿음 2 */}
              <motion.div
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                  </div>
                  <div className="w-full md:flex-1 pt-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      노래는 느낌이 아니라 &lsquo;조절 능력&rsquo;이다
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      학생이 진성/가성·밝고/어두운 소리, 공간등을
                      <br />
                      <span className="font-semibold text-gray-900">스스로 조절할 수 있게 되면</span>
                      <br />
                      목소리는 하나의 악기처럼 연주 가능한 상태가 됩니다.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 믿음 3 */}
              <motion.div
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                  </div>
                  <div className="w-full md:flex-1 pt-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      좋은 교육은 &lsquo;왜&rsquo;를 설명할 수 있어야 한다
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      보컬코치가 설명할 수 없는 지식은
                      <br />
                      학생의 성장에 도움이 될 수 없습니다.
                      <br />
                      <span className="font-semibold text-gray-900">우리는 항상</span>
                      <br />
                      &ldquo;왜 이 훈련을 하는지&rdquo;,
                      <br />
                      &ldquo;어떤 원리로 변화가 생기는지&rdquo;
                      <br />
                      <span className="text-brand-600 font-bold">&ldquo;왜&rdquo;를 얘기 할 수 있습니다.</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 믿음 4 */}
              <motion.div
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500"></div>
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                  </div>
                  <div className="w-full md:flex-1 pt-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      학생이 선택하는 순간, 성장은 폭발한다
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      <span className="font-semibold text-gray-900">자율성은 학습의 핵심입니다.</span>
                      <br />
                      온리보컬 모든 레슨은
                      <br />
                      학생이 하고 싶은 방향을 직접 선택하고
                      <br />
                      코치는 그 선택을 기반으로 전략을 함께 설계합니다.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 믿음 5 */}
              <motion.div
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">5</span>
                    </div>
                  </div>
                  <div className="w-full md:flex-1 pt-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      우리의 목표는 &lsquo;노래 잘하는 사람&rsquo;이 아니라
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      <span className="font-semibold text-gray-900">자기 목소리를 이해하고 연주할 줄 아는 사람을 만드는 것.</span>
                      <br />
                      기술보다 중요한 것은
                      <br />
                      <span className="text-brand-600 font-bold">본인의 목소리에 대한 지속적인 인지·탐색·조절 능력</span>입니다.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

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
                목소리 본연의 아름다움을 찾아
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
                생각합니다.
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
                  &quot;노래는 타고난 사람만 잘할 수 있다&quot;는 편견을 꼭 깨겠습니다.
                </strong>
              </p>

              <p>
                많은 사람이 편하고 건강하게 오랫동안 노래하는 행복을 느끼실 수
                있도록 절대 자만하지 않고 항상 낮은 자세로 공부하고, 수강생의
                입장에서 공감하고 이해하며 끊임없이 노력하는
                <br />
                <strong className="text-brand-600 text-xl">
                  단 하나뿐인 보컬 전문 아카데미 &apos;온리&apos;가 되겠습니다.
                </strong>
              </p>
            </div>

            
          </div>
        </div>
      </section>

      {/* 온리보컬 철학 섹션 */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="space-y-6 text-lg leading-relaxed text-gray-800">
              <div className="text-center mb-8">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  온리보컬은
                </p>
                <p className="text-xl md:text-2xl text-brand-600 font-semibold mb-2">
                  &apos;목소리를 바꾸는 곳&apos;이 아니라
                </p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">
                  &apos;목소리를 다룰 수 있게 만드는 곳&apos;입니다.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-200">
                <p className="text-gray-700">
                  저는 지난 8년간 1만 5천 시간 이상의 레슨을 통해
                  <br />
                  수많은 목소리와 사람을 직접 만나왔습니다.
                </p>
                <p className="text-gray-700">
                  그 과정에서 <strong className="text-brand-600">발성학, 음성학, 운동학, 뇌과학 기반 심리학</strong>을 공부하고,
                  <br />
                  실제 레슨 현장에 적용하며
                  <br />
                  개개인의 목소리에 맞는 전략을 설계해왔습니다.
                </p>
                <p className="text-gray-700 font-semibold">
                  정답을 제시하기보다,
                  <br />
                  학생의 구조와 목표를 기준으로
                  <br />
                  현실적이고 지속 가능한 선택을 돕습니다.
                </p>
              </div>

              <div className="text-center pt-8 border-t border-gray-200 mt-8">
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
        </div>
      </section>

      {/* 원장 이력 사항 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            원장 이력
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            {/* 주요 성과 */}
            {teachers[0].achievements && teachers[0].achievements.length > 0 && (
              <div className="mb-8">
                <ul className="space-y-2">
                  {teachers[0].achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-base text-gray-700"
                    >
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-8 border-t pt-8">
              {/* 학력사항 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-xl flex items-center">
                  <Award className="w-6 h-6 text-brand-600 mr-2" />
                  학력사항
                </h3>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="space-y-2 text-base text-gray-700">
                    <p><span className="font-semibold">재학기간:</span> 2015-2017</p>
                    <p><span className="font-semibold">학교명:</span> 배재대학교</p>
                    <p><span className="font-semibold">전공:</span> 실용음악과 보컬전공</p>
                  </div>
                </div>
              </div>

              {/* 실무 경력사항 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-xl flex items-center">
                  <Award className="w-6 h-6 text-brand-600 mr-2" />
                  실무 경력사항
                </h3>
                <div className="bg-gray-50 rounded-lg p-5 space-y-4">
                  <div className="border-l-4 border-brand-500 pl-4">
                    <p className="font-semibold text-gray-900">2018.05 - 2019.07</p>
                    <p className="text-gray-700">원스실용음악학원</p>
                  </div>
                  <div className="border-l-4 border-brand-500 pl-4">
                    <p className="font-semibold text-gray-900">2019.07 - 2022.04</p>
                    <p className="text-gray-700">원스보컬&댄스아카데미 보컬파트원장</p>
                  </div>
                  <div className="border-l-4 border-brand-500 pl-4">
                    <p className="font-semibold text-gray-900">2022.04 - 현재</p>
                    <p className="text-gray-700">온리보컬아카데미 대표</p>
                  </div>
                  <div className="border-l-4 border-brand-500 pl-4">
                    <p className="font-semibold text-gray-900">2023.02 - 현재</p>
                    <p className="text-gray-700">메디컬보이스이비인후과 발성센터/발성지도사</p>
                  </div>
                </div>
              </div>

              {/* 기타 경력사항 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-xl flex items-center">
                  <Award className="w-6 h-6 text-brand-600 mr-2" />
                  기타 경력사항
                </h3>
                <div className="bg-gray-50 rounded-lg p-5 space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">교육 및 수료</p>
                    <ul className="space-y-1 text-base text-gray-700 ml-4">
                      <li className="list-disc">Medical Voice 이론과정 2기 수료 (메디컬보이스이비인후과 주관)</li>
                      <li className="list-disc">보컬리스트 임정희 사사</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">보컬코칭 경력</p>
                    <ul className="space-y-1 text-base text-gray-700 ml-4">
                      <li className="list-disc">가수 이예준, 조현영(그룹 레인보우), 트로트가수 한태이 발성 코칭</li>
                      <li className="list-disc">뮤지컬배우 한재아, 이규학 발성 코칭</li>
                      <li className="list-disc">다수의 가수, 아이돌, 뮤지컬배우, 배우, 성우 보컬코칭 트레이닝</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">입시 합격생 배출</p>
                    <p className="text-base text-gray-700 ml-4">
                      동아방송예대, 호원대, 동덕여대, 한양여대, 백석예대, 정화예대, 여주대, 백제예대 등 실용음악과 합격생 다수 배출
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">언론 인터뷰</p>
                    <ul className="space-y-1 text-base text-gray-700 ml-4">
                      <li className="list-disc">이코노미뷰 2024.4월호</li>
                      <li className="list-disc">프라임헤럴드 2023.3월호</li>
                      <li className="list-disc">월간인터뷰 2022.7월호 (보컬 교육기관 대표 인터뷰)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 수상 내역 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-xl flex items-center">
                  <Award className="w-6 h-6 text-yellow-500 mr-2" />
                  수상 내역
                </h3>
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-5 space-y-3">
                  <div className="flex items-start space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-gray-700">
                      <span className="font-semibold">2024</span> 이노베이션 리더 보컬, 음악 부문 대상 (스포츠서울 주관)
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-gray-700">
                      <span className="font-semibold">2022</span> 혁신한국인 & 파워코리아 보컬전문 교육기관 부문 대상 (스포츠서울 주관)
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-gray-700">
                      제 14회 김제지평선 청소년 가요제 최우수상 수상 (김제지평선축제 주관)
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-gray-700">
                      제 33회 금산인삼축제 전국 틴틴페스타(전국 청소년 가요-댄스 경연대회) 특별상 수상
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-gray-700">
                      제 2회 G-POP 페스티벌 준결선 진출
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-gray-700">
                      제 61회 백제나라 창작동요대회 성인부 은상 수상
                    </p>
                  </div>
                </div>
              </div>

              {/* 강연 및 활동 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-xl flex items-center">
                  <Award className="w-6 h-6 text-brand-600 mr-2" />
                  강연 및 활동
                </h3>
                <div className="bg-gray-50 rounded-lg p-5 space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">강연</p>
                    <ul className="space-y-1 text-base text-gray-700 ml-4">
                      <li className="list-disc">조선대학교 K-컬처공연기획학과 보컬 특강 </li>
                      <li className="list-disc">조선대학교 K-컬처공연기획학과 기말고사 심사위원</li>
                      <li className="list-disc">광주소프트웨어 마이스터고등학교 실용음악 파트 보컬강사</li>
                      <li className="list-disc">전) 원스실용음악학원 보컬파트 강사</li>
                      <li className="list-disc">전) 원스 보컬&댄스 아카데미 보컬파트 원장</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">공연 활동</p>
                    <ul className="space-y-1 text-base text-gray-700 ml-4">
                      <li className="list-disc">세월호 참사 추모문화제 &apos;목항에서 띄우는 편지&apos; 공연</li>
                      <li className="list-disc">찾아가는 병영 문화 예술공연 &apos;하나되는 무한열정&apos; 시즌 1,2 공연</li>
                      <li className="list-disc">제6회 코리아퓨전재즈 오케스트라 정기연주회 공연</li>
                      <li className="list-disc">하고 싶어서 하는 밴드 공연</li>
                      <li className="list-disc">대전지역 청년들에게 드리는 에너지 콘서트 &apos;잭팟&apos; 공연</li>
                      <li className="list-disc">천안시 도시미플랜 선포 기념 여름 음악 축제 &apos;여름날 소리가 있는 풍경 나들이&apos; 공연</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">기타 활동</p>
                    <ul className="space-y-1 text-base text-gray-700 ml-4">
                      <li className="list-disc">광주 지역 실버노래자랑 등 심사위원 다수</li>
                      <li className="list-disc">작곡가 가이드 녹음 및 축제 행사 공연 등 다수</li>
                    </ul>
                  </div>
                </div>
              </div>
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
                    네이버 지도에서 &apos;온리보컬아카데미&apos;를 검색하시면
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
