"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ProgressBar from "@/components/ProgressBar";
import ReviewCard from "@/components/ReviewCard";
import reviews from "@/constants/reviews";
import reviewStats from "@/constants/reviewStats";

const ReviewPage = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setShowTooltip(false);
      }
    };

    if (showTooltip) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTooltip]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="h-80 flex items-center px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              수강 후기
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              100% 리얼 수강생 리뷰로 증명합니다.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4">
        {/* 페이지 제목 */}
        <div className="text-center mb-12 py-5"></div>

        {/* 리뷰 통계 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold text-gray-800">
                  이런 점이 좋았어요.
                </h2>
                <div className="relative" ref={tooltipRef}>
                  <button
                    onClick={() => setShowTooltip(!showTooltip)}
                    className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                    aria-label="도움말"
                  >
                    <span className="text-gray-600 text-sm font-bold">?</span>
                  </button>

                  {/* 툴팁 */}
                  {showTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-8 left-1/2 transform -translate-x-1/2 w-80 bg-gray-800 text-white text-sm rounded-lg p-4 shadow-lg z-10"
                    >
                      {/* X 버튼 */}
                      <button
                        onClick={() => setShowTooltip(false)}
                        className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center transition-colors duration-200"
                        aria-label="닫기"
                      >
                        <span className="text-white text-xs font-bold">×</span>
                      </button>

                      <div className="text-center pr-6">
                        <p className="mb-2">
                          네이버 예약, 주문, 결제내역, 영수증 등으로 인증한
                          방문자들이 해당 장소에 대해 최대 5개 까지 선택한
                          키워드 통계 결과입니다.
                        </p>
                        <p className="text-gray-300 text-xs">
                          업데이트 주기: 하루 단위
                        </p>
                      </div>
                      {/* 화살표 */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
                    </motion.div>
                  )}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                <span className="text-green-600 font-bold">✅ 105회</span> 83명
                참여
              </p>
              <motion.a
                href="https://map.naver.com/p/entry/place/1108538742?placePath=/review?additionalHeight=76&entry=plt&fromPanelNum=1&locale=ko&svcName=map_pcv5&timestamp=202509111416&fromPanelNum=1&additionalHeight=76&timestamp=202509111416&locale=ko&svcName=map_pcv5&searchType=place&lng=126.8255258&lat=35.1900323&c=15.00,0,0,0,dh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                네이버 리뷰 보러가기
              </motion.a>
            </div>
          </motion.div>

          <div className="space-y-2">
            {reviewStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProgressBar
                  label={stat.label}
                  value={stat.value}
                  maxValue={stat.maxValue}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 개별 리뷰 섹션 */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-800 mb-6"
          >
            실제 수강생 후기
          </motion.h2>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-black text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform flex items-center gap-2"
              aria-label="맨 위로 가기"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              맨 위로 가기
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
