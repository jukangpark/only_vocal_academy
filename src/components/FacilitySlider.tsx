"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Calendar, Wifi, Users } from "lucide-react";

const FacilitySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/slide/온리보컬02.jpeg",
    "/slide/온리보컬03.jpeg",
    "/slide/온리보컬04.jpeg",
    "/slide/온리보컬05.jpeg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-12 mt-12">
      {/* 제목 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          시설소개
        </h1>
        <h2 className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          최신 장비와 편안한 환경으로 최고의 학습 효과를 제공합니다.
        </h2>
      </div>

      {/* 슬라이드 컨테이너 */}
      <div className="relative overflow-hidden shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="relative w-full h-96 md:h-[500px]">
                <Image
                  src={image}
                  alt={`온리보컬 시설 ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 왼쪽 화살표 */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200  cursor-pointer"
          aria-label="이전 슬라이드"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* 오른쪽 화살표 */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200  cursor-pointer"
          aria-label="다음 슬라이드"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* 슬라이드 인디케이터 */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
              index === currentSlide
                ? "bg-black scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
};

export default FacilitySlider;
