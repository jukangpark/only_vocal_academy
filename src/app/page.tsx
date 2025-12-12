"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Instagram,
  Youtube,
  Users,
  Star,
  ChevronRight,
  Clock,
  Trophy,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Slider from "@/components/Slider";
import ReviewCard from "@/components/ReviewCard";
import reviews from "@/constants/reviews";
import FacilitySlider from "@/components/FacilitySlider";

export default function Home() {
  const [showMoreReviews, setShowMoreReviews] = useState(false);

  const awards = [
    "/images/awards/2023 KCIA 한국소비자산업평가.jpeg",
    "/images/awards/2023 KCIA 한국소비자산업평가2.jpeg",
    "/images/awards/2024 KCIA 한국소비자산업평가.png",
    "/images/awards/한국소비자산업평가.png",
  ];

  // 무한 슬라이드를 위해 배열을 복제
  const duplicatedAwards = [...awards, ...awards, ...awards, ...awards];

  // 리뷰 데이터 - 처음 10개만 사용
  const selectedReviews = reviews.slice(0, 10);
  const displayedReviews = showMoreReviews
    ? selectedReviews
    : selectedReviews.slice(0, 5);

  // 애니메이션 variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-80 px-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
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
              <span className="text-brand-400">모든 소리</span>에는 원인과
              결과가 있습니다
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-4">
              음악의 본질을 이해하고 표현할 수 있는 진정한 아티스트를 양성합니다
            </p>
            <p className="text-lg text-gray-300">
              광주 유일의 근거중심 보컬전문 아카데미
            </p>
          </div>
        </div>
      </div>

      {/* About Only Vocal Academy Section */}
      <motion.section
        className="py-24 px-4 bg-gradient-to-br from-brand-50 via-white to-brand-100"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-6xl">
          {/* 헤더 */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="text-sm md:text-base font-semibold text-brand-600 bg-brand-100 px-4 py-2 rounded-full">
                About Only Vocal Academy
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              보컬트레이닝의 새로운 기준을 만들다.
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                온리보컬은{" "}
                <span className="text-brand-600 font-bold">
                  발성학·음향학·교육학·심리학·뇌과학
                </span>
                을 결합한
                <br />
                국내 최초의 하이브리드 보컬트레이닝 기관입니다.
              </p>
            </div>
          </motion.div>

          {/* 경험 섹션 */}
          <motion.div
            className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-2xl mb-20 border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <Clock className="w-6 h-6 text-brand-600" />
                    <span className="text-3xl md:text-4xl font-bold text-gray-900">8년</span>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                    지난 8년, <span className="font-bold text-brand-600">1만5천 이상의 시간</span>동안
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    가수·아이돌·뮤지컬배우·성우·발성장애 환자·입시생 등
                    <br />
                    <span className="font-semibold text-gray-800">수천 건의 레슨 경험</span>을 바탕으로
                    <br />
                    단순 발성 교정이 아닌 <span className="text-brand-600 font-bold">&lsquo;목소리 사용 능력&rsquo;</span>을 길러왔습니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

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
                우리가 믿는 것
              </h3>
              <p className="text-gray-600 text-lg">온리보컬의 교육 철학</p>
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

      {/* Features Section */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            왜 온리보컬아카데미인가요?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl shadow-lg transition-shadow"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                개인별 맞춤 교육
              </h3>
              <p className="text-gray-600">
                사람마다 몸의 구조, 성대 모양, 발성 기관이 다르므로 개인의
                특성에 맞는 적합한 방법을 사용합니다
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl shadow-lg transition-shadow"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                수강생 중심 교육
              </h3>
              <p className="text-gray-600">
                보컬코치의 기준이 아닌 수강생이 진정으로 원하는 소리와 방향대로
                수업을 진행합니다
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl shadow-lg transition-shadow"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                누구나 성장 가능
              </h3>
              <p className="text-gray-600">
                음치나 박치, 고음이 안 나는 사람도 노래를 사랑하는 마음과 끈기만
                있다면 크게 개발될 수 있습니다
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Award Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-brand-50 to-brand-100"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                수상 내역
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              전문성과 우수성을 인정받은 온리보컬아카데미의 수상 실적입니다
            </p>
          </div>

          {/* 트로피와 수상 카드 레이아웃 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto mb-16">
            {/* 왼쪽: 트로피 이미지 */}
            <div className="flex-shrink-0 lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/award.png"
                  alt="온리보컬아카데미 수상 트로피"
                  width={400}
                  height={436}
                  className="drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>

            {/* 오른쪽: 수상 카드들 */}
            <div className="lg:w-1/2 space-y-6">
              {/* KCIA 수상 */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
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
              </motion.div>

              {/* 스포츠서울 이노베이션 리더 */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
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
              </motion.div>

              {/* 혁신한국인 & 파워코리아 */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
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
              </motion.div>
            </div>
          </div>

          {/* 무한 슬라이드 섹션 */}
          <Slider duplicatedAwards={duplicatedAwards} />
        </div>
      </motion.section>

      {/* Promotional Video Section */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              윤지현 원장님 방송출연 영상
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              &apos;진심누나&apos; 방송출연! : 트롯돌 &apos;태이&apos; 성대 회복 재활 트레이닝
              영상입니다
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
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
                광주 유일의 근거중심 보컬전문 아카데미
                <br />
              </p>
              <a
                href="https://www.youtube.com/watch?v=YSReBuZDCU0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-brand-600 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube에서 보기</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Academy Introduction Section */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
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
      </motion.section>

      {/* Consultation Process Section */}
      <motion.section
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
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
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                목소리 문진표 작성
              </h3>
              <p className="text-gray-600">
                개인의 발성 상태와 목표를 파악하기 위한 상세한 문진표를
                작성합니다
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                보컬 체크업
              </h3>
              <p className="text-gray-600">
                간단한 가창 테스트를 통해 현재 발성 상태를 정확히 진단합니다
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                맞춤형 코치 배정
              </h3>
              <p className="text-gray-600">
                진단 내용에 따라 가장 적합한 보컬코치를 배정하고 수업 방향을
                제시합니다
              </p>
            </motion.div>
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
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700 font-semibold">
                        ⚠️ 주의사항: 방문상담 희망자가 많아 한달 가량 일찍
                        방문상담 예약이 마감되고 있습니다.
                      </p>
                      <p className="text-sm text-yellow-700 mt-2">
                        수업을 원하시는 경우 여유를 두고 미리 예약을 잡아주시길
                        부탁드립니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-brand-600 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
                  >
                    <span>상담 예약하기</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <FacilitySlider />

      {/* Final Message Section */}
      <motion.section
        className="relative py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/slide/온리보컬03.jpeg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="mb-8">
            {/* 팀 로고 */}
            <div className="flex justify-center mb-6">
              <Image
                src="/images/team_only_vocal.png"
                alt="온리보컬 팀"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              단 하나의 보컬 전문 아카데미
            </h2>
            <div className="text-6xl font-bold text-white mb-4">
              &apos;ONLY&apos;
            </div>
          </div>

          <p className="text-xl text-white leading-relaxed mb-8">
            노래와 목소리로 고민하시는 많은 분께
            <br />
            직관적이고 근거 있는 방법을 제시하는
            <br />
            <strong className="text-white">단 하나의 보컬 전문 아카데미</strong>
            입니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 bg-brand-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
            >
              <span>학원 소개</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              100% 리얼 수강생 후기를 직접 확인하세요!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              실제 수강생들이 남긴 솔직한 후기를 통해 온리보컬아카데미의 진짜
              모습을 확인해보세요
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {displayedReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <ReviewCard {...review} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            {!showMoreReviews && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowMoreReviews(true)}
                className="inline-flex items-center space-x-2 bg-brand-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                <span>더보기</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            )}

            {showMoreReviews && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <Link
                  href="/review"
                  className="inline-flex items-center space-x-2 bg-brand-600 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
                >
                  <span>전체 수강후기 보기</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Social Media Section */}
      <motion.section
        className="py-16 px-4 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            소셜 미디어
          </h2>

          <div className="flex justify-center space-x-8">
            <a
              href="https://www.instagram.com/onlyvocal_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-brand-500 to-brand-600 text-gray-900 px-6 py-3 rounded-lg transition-transform hover:text-pink-300"
            >
              <Instagram className="w-6 h-6" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.youtube.com/@onlyvocal2250"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-brand-600 text-gray-900 px-6 py-3 rounded-lg transition-transform hover:text-red-500"
            >
              <Youtube className="w-6 h-6" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
