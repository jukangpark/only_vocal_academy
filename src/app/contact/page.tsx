import Link from "next/link";
import Navigation from "@/components/navigation";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            상담 문의
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            궁금한 점이 있으시면 언제든 연락주세요. 전문 상담사가 친절하게
            답변해드립니다.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-8 text-gray-900">
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
                  <span>평일</span>
                  <span>PM 12:00 ~ PM 10:00</span>
                </div>
                <div className="flex justify-between">
                  <span>토요일</span>
                  <span>AM 11:00 ~ PM 08:00</span>
                </div>
                <div className="flex justify-between">
                  <span>일요일</span>
                  <span>PM 02:00 ~ PM 10:00</span>
                </div>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-4">✉️ 이메일 문의</h3>
              <div className="mb-6">
                <a
                  href="mailto:info@onlyvocal.kr"
                  className="text-xl font-semibold hover:underline"
                >
                  info@onlyvocal.kr
                </a>
              </div>
              <p className="text-brand-100 mb-6">24시간 내 답변 보장</p>
              <ul className="space-y-2 text-sm">
                <li>• 수강 관련 문의</li>
                <li>• 입시 상담 문의</li>
                <li>• 강사진 문의</li>
                <li>• 기타 문의사항</li>
              </ul>
            </div>

            {/* Location Contact */}
            <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-4">📍 방문 상담</h3>
              <div className="mb-6">
                <p className="text-lg font-semibold">임방울대로332번길 9-14</p>
                <p className="text-sm">GW빌딩 2층 온리보컬아카데미</p>
              </div>
              <p className="text-brand-100 mb-6">사전 예약 필수</p>
              <Link
                href="/location"
                className="inline-block bg-gray-100 text-brand-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                오시는 길 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            온라인 상담 신청
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                    placeholder="연락처를 입력하세요"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  관심 과정
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent">
                  <option value="">관심 과정을 선택하세요</option>
                  <option value="entrance">입시과정</option>
                  <option value="hobby">취미과정</option>
                  <option value="audition">오디션과정</option>
                  <option value="professional">전문심화과정</option>
                  <option value="ensemble">앙상블 과정</option>
                  <option value="ccm">CCM 과정</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  상담 내용 *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                  placeholder="상담하고 싶은 내용을 자세히 적어주세요"
                ></textarea>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-600"
                />
                <label className="text-sm text-gray-600">
                  개인정보 수집 및 이용에 동의합니다. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-600 text-white py-4 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            자주 묻는 질문
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "수강 신청은 어떻게 하나요?",
                answer:
                  "전화 상담 후 학원 방문 상담을 통해 개인별 맞춤 커리큘럼을 설계하고 수강 신청을 진행합니다.",
              },
              {
                question: "수강료는 어떻게 되나요?",
                answer:
                  "과정별로 수강료가 다르며, 3개월 이상 등록 시 할인 혜택을 제공합니다. 자세한 내용은 상담 시 안내해드립니다.",
              },
              {
                question: "입시 준비는 언제부터 시작해야 하나요?",
                answer:
                  "목표 대학과 전공에 따라 다르지만, 일반적으로 1년 전부터 체계적인 준비를 권장합니다.",
              },
              {
                question: "체험 수업이 가능한가요?",
                answer:
                  "네, 체험 수업이 가능합니다. 사전 예약 후 1회 무료 체험 수업을 제공합니다.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <MessageSquare className="w-5 h-5 text-brand-600 mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-600 to-brand-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <h3 className="text-xl font-bold">온리보컬아카데미</h3>
              </div>
              <p className="text-gray-400 text-sm">
                광주 유일의 근거중심 보컬전문 아카데미
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">수강 과정</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>입시과정</li>
                <li>취미과정</li>
                <li>오디션과정</li>
                <li>전문심화과정</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">학원 정보</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>학원소개</li>
                <li>강사진</li>
                <li>합격실적</li>
                <li>상담문의</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>0507-1497-4900</p>
                <p>임방울대로332번길 9-14</p>
                <p>GW빌딩 2층</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 온리보컬아카데미. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
