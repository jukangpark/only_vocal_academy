"use client";

import Link from "next/link";
import Image from "next/image";
import { Award, Star } from "lucide-react";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import teachers from "@/constants/teachers";

export default function TeachersPage() {
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
      <Banner
        title="강사진 소개"
        description="각 분야의 전문가들이 여러분의 음악적 꿈을 실현시켜 드립니다."
        image="/introduction.jpeg"
      />

      {/* 팀 로고 */}
      <div className="flex justify-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/team_only_vocal.png"
            alt="온리보컬 팀"
            width={250}
            height={250}
            className="rounded-full"
          />
        </motion.div>
      </div>

      {/* 온리보컬 코치 소개 섹션 - 3개의 카드 */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-br from-brand-50 to-brand-100"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎤 Only Vocal Coach
            </h2>
          </div>

          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            {/* 카드 1 */}
            <motion.div
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  온리보컬 코치는 <span className="font-bold text-gray-900">단순히 노래를 가르치는 사람이 아닙니다.</span>
                  <br />
                  <br />
                  우리는 <span className="font-bold text-brand-600">목소리를 진단하고</span>,
                  <br />
                  <span className="font-bold text-brand-600">문제를 분석하고</span>,
                  <br />
                  학생이 <span className="font-bold text-gray-900">스스로 선택하고 조절할 수 있도록</span> 돕는
                  <br />
                  <span className="font-bold text-brand-600 text-xl">전문 교육자</span>입니다.
                </p>
              </div>
            </motion.div>

            {/* 카드 2 */}
            <motion.div
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <p className="text-lg md:text-xl text-gray-700 mb-6 font-semibold">
                  온리보컬의 코치는
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <motion.span
                    className="px-6 py-3 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl text-blue-700 font-bold shadow-md border border-blue-200"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    발성학·음향학
                  </motion.span>
                  <motion.span
                    className="px-6 py-3 bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl text-purple-700 font-bold shadow-md border border-purple-200"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    교육학·심리학
                  </motion.span>
                  <motion.span
                    className="px-6 py-3 bg-gradient-to-br from-green-50 to-teal-100 rounded-xl text-green-700 font-bold shadow-md border border-green-200"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    뇌과학적 학습 원리
                  </motion.span>
                </div>
                <p className="text-lg md:text-xl text-gray-700">
                  <span className="font-bold text-gray-900">기반의 커리큘럼을 꾸준히 연구</span>합니다.
                </p>
              </div>
            </motion.div>

            {/* 카드 3 */}
            <motion.div
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  우리는 <span className="font-bold text-gray-900">&ldquo;정답 발성&rdquo;을 강요하지 않습니다.</span>
                  <br />
                  <br />
                  학생이 <span className="font-bold text-brand-600">원하는 목소리</span>를
                  <br />
                  <span className="font-bold text-gray-900">가장 건강하고 자연스러운 방향</span>으로
                  <br />
                  <span className="font-bold text-brand-600">연주할 수 있도록 안내</span>합니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
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
                {teachers[0].experience && (
                  <p className="text-gray-500 text-base mb-2">
                    {teachers[0].experience}
                  </p>
                )}
                {teachers[0].education && (
                  <p className="text-gray-600 text-base">
                    {teachers[0].education}
                  </p>
                )}
              </div>

              {(teachers[0].description || teachers[0].achievements) && (
                <div className="mb-6">
                  {teachers[0].description && (
                    <p className="text-gray-700 mb-4 text-lg">
                      {teachers[0].description}
                    </p>
                  )}

                  {teachers[0].achievements &&
                    teachers[0].achievements.length > 0 && (
                      <>
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
                      </>
                    )}
                </div>
              )}

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
                {teachers[1].experience && (
                  <p className="text-gray-500 text-base mb-2">
                    {teachers[1].experience}
                  </p>
                )}
                {teachers[1].education && (
                  <p className="text-gray-600 text-base">
                    {teachers[1].education}
                  </p>
                )}
              </div>

              {(teachers[1].description || teachers[1].achievements) && (
                <div className="mb-6">
                  {teachers[1].description && (
                    <p className="text-gray-700 mb-4 text-lg">
                      {teachers[1].description}
                    </p>
                  )}

                  {teachers[1].achievements &&
                    teachers[1].achievements.length > 0 && (
                      <>
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
                      </>
                    )}
                </div>
              )}

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
                  {teacher.experience && (
                    <p className="text-gray-500 text-sm mb-2">
                      {teacher.experience}
                    </p>
                  )}
                  {teacher.education && (
                    <p className="text-gray-600 text-sm">{teacher.education}</p>
                  )}
                </div>

                {(teacher.description || teacher.achievements) && (
                  <div className="mb-6">
                    {teacher.description && (
                      <p className="text-gray-700 mb-4 text-sm">
                        {teacher.description}
                      </p>
                    )}

                    {teacher.achievements &&
                      teacher.achievements.length > 0 && (
                        <>
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
                        </>
                      )}
                  </div>
                )}

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
