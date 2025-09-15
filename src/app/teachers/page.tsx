"use client";

import Link from "next/link";
import Image from "next/image";
import { Award, Star } from "lucide-react";
import Banner from "@/components/Banner";
import teachers from "@/constants/teachers";

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Banner
        title="강사진 소개"
        description="각 분야의 전문가들이 여러분의 음악적 꿈을 실현시켜 드립니다."
        image="/introduction.jpeg"
      />

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
