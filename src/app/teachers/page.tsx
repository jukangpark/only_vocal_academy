"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/navigation";
import { Music, GraduationCap, Award, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TeachersPage() {
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

  const teachers = [
    {
      name: "윤지현 원장",
      specialty: "보컬 전문",
      experience: "15년 경력",
      education: "음악대학 보컬과 졸업",
      description: "음악대학 보컬과 졸업, 다수의 합격생 배출",
      achievements: [
        "500여명 합격생 배출",
        "음악대학 입시 전문",
        "보컬 테크닉 전문가",
        "개인별 맞춤 지도",
      ],
      image: "/images/온리보컬 원장 보컬코치 윤지현.jpeg",
    },
    {
      name: "한화정 부원장 보컬코치",
      specialty: "보컬 전문",
      experience: "12년 경력",
      education: "보컬 테크닉 전문",
      description: "고급 보컬 테크닉 전문, 오디션 합격 다수",
      achievements: [
        "고급 보컬 테크닉",
        "오디션 합격 다수",
        "음악 치료사 자격",
        "발성 기법 전문",
      ],
      image: "/images/온리보컬 보컬코치 한화정.jpeg",
    },
    {
      name: "김가희 보컬코치",
      specialty: "보컬 전문",
      experience: "10년 경력",
      education: "실용음악과 보컬 전공",
      description: "실용음악과 보컬 전공, 작곡 및 편곡 전문",
      achievements: [
        "보컬 반주 전문",
        "작곡 및 편곡 전문",
        "음악 이론 전문",
        "실용음악 입시 전문",
      ],
      image: "/images/온리보컬 보컬코치 김가희.png",
    },
    {
      name: "이다영 보컬코치",
      specialty: "보컬 전문",
      experience: "8년 경력",
      education: "음악학과 보컬 전공",
      description: "음악 이론 및 시창청음 전문, 입시 준비 전문",
      achievements: [
        "음악 이론 전문",
        "시창청음 전문",
        "입시 준비 전문",
        "화성학 전문",
      ],
      image: "/images/온리보컬 보컬코치 이다영.jpeg",
    },
    {
      name: "배윤서 보컬코치",
      specialty: "보컬 전문",
      experience: "6년 경력",
      education: "앙상블 및 합창 전문",
      description: "앙상블 및 합창 전문, 그룹 활동 지도",
      achievements: [
        "앙상블 전문",
        "합창 지도 전문",
        "그룹 활동 지도",
        "무대 공연 전문",
      ],
      image: "/images/온리보컬 보컬코치 배윤서.jpeg",
    },
    {
      name: "김예찬 보컬코치",
      specialty: "보컬 전문",
      experience: "7년 경력",
      education: "CCM 및 찬양 전문",
      description: "CCM 및 찬양 전문, 교회 음악 전문",
      achievements: [
        "CCM 전문",
        "찬양 지도 전문",
        "교회 음악 전문",
        "영성 음악 전문",
      ],
      image: "/images/온리보컬 보컬코치 김예찬.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-80 flex items-center px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            강사진 소개
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            각 분야의 전문가들이 여러분의 음악적 꿈을 실현시켜 드립니다.
          </p>
        </div>
      </section>
      <div className="flex justify-center mt-6">
        <Image
          src="/images/team_only_vocal.png"
          alt="온리보컬 팀"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
      {/* Teachers List */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          {/* 원장님 섹션 */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white border border-gray-200 rounded-xl p-8 transition-shadow">
              <div className="text-center mb-6">
                <div className="w-64 h-96 mx-auto mb-6 overflow-hidden border-4 border-brand-500 rounded-lg">
                  <Image
                    src={teachers[0].image}
                    alt={teachers[0].name}
                    width={256}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {teachers[0].name}
                </h3>
                <p className="text-brand-600 font-semibold mb-1 text-lg">
                  {teachers[0].specialty}
                </p>
                <p className="text-gray-500 text-base mb-2">
                  {teachers[0].experience}
                </p>
                <p className="text-gray-600 text-base">
                  {teachers[0].education}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 mb-4 text-lg">
                  {teachers[0].description}
                </p>

                <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-lg">
                  <Award className="w-5 h-5 text-yellow-500 mr-2" />
                  주요 성과
                </h4>
                <ul className="space-y-2">
                  {teachers[0].achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-base text-gray-600"
                    >
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="block w-full bg-brand-600 text-white text-center py-3 rounded-lg font-semibold transition-colors text-lg"
              >
                상담 신청하기
              </Link>
            </div>
          </div>

          {/* 부원장 섹션 */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white border border-gray-200 rounded-xl p-8 transition-shadow">
              <div className="text-center mb-6">
                <div className="w-56 h-84 mx-auto mb-6 overflow-hidden border-4 border-brand-500 rounded-lg">
                  <Image
                    src={teachers[1].image}
                    alt={teachers[1].name}
                    width={224}
                    height={336}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {teachers[1].name}
                </h3>
                <p className="text-brand-600 font-semibold mb-1 text-lg">
                  {teachers[1].specialty}
                </p>
                <p className="text-gray-500 text-base mb-2">
                  {teachers[1].experience}
                </p>
                <p className="text-gray-600 text-base">
                  {teachers[1].education}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 mb-4 text-lg">
                  {teachers[1].description}
                </p>

                <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-lg">
                  <Award className="w-5 h-5 text-yellow-500 mr-2" />
                  주요 성과
                </h4>
                <ul className="space-y-2">
                  {teachers[1].achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-base text-gray-600"
                    >
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="block w-full bg-brand-600 text-white text-center py-3 rounded-lg font-semibold transition-colors text-lg"
              >
                상담 신청하기
              </Link>
            </div>
          </div>

          {/* 보컬코치들 섹션 */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teachers.slice(2).map((teacher, index) => (
              <div
                key={index + 2}
                className="bg-white border border-gray-200 rounded-xl p-6 transition-shadow"
              >
                <div className="text-center mb-6">
                  <div className="w-48 h-72 mx-auto mb-4 overflow-hidden border-4 border-brand-500 rounded-lg">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      width={192}
                      height={288}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {teacher.name}
                  </h3>
                  <p className="text-brand-600 font-semibold mb-1">
                    {teacher.specialty}
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                    {teacher.experience}
                  </p>
                  <p className="text-gray-600 text-sm">{teacher.education}</p>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 mb-4 text-sm">
                    {teacher.description}
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-sm">
                    <Award className="w-4 h-4 text-yellow-500 mr-2" />
                    주요 성과
                  </h4>
                  <ul className="space-y-2">
                    {teacher.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-xs text-gray-600"
                      >
                        <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-brand-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-brand-700 transition-colors text-sm"
                >
                  상담 신청하기
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
