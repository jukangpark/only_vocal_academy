import Navigation from "@/components/navigation";
import { Users, Award, Target, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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
            광주 유일의 근거중심 보컬전문 아카데미로 15년간 500여명의 합격생을
            배출한 전문적인 음악 교육 기관입니다.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-gray-200">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                학원소개 & 비전
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                온리보컬아카데미는 2009년 설립 이후, 과학적이고 체계적인 보컬
                교육을 통해 수많은 학생들의 꿈을 실현시켜 왔습니다.
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
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="text-2xl font-bold text-brand-600 mb-2">
                    500+
                  </div>
                  <p className="text-gray-600">합격생 배출</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="text-2xl font-bold text-brand-600 mb-2">
                    15년
                  </div>
                  <p className="text-gray-600">교육 노하우</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="text-2xl font-bold text-brand-600 mb-2">
                    98%
                  </div>
                  <p className="text-gray-600">만족도</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="text-2xl font-bold text-brand-600 mb-2">
                    24/7
                  </div>
                  <p className="text-gray-600">상담 가능</p>
                </div>
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
              <div className="w-32 h-32 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden shadow-lg">
                {/* 원장님 얼굴 이미지가 들어갈 자리 */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">원장님 사진</span>
                </div>
                {/* 실제 이미지 사용 시 아래 주석을 해제하고 위의 placeholder div를 제거하세요 */}
                {/* <img 
                  src="/images/director.jpg" 
                  alt="윤지현 원장" 
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                윤지현 원장
              </h3>
              <p className="text-gray-600">
                음악대학 보컬과 졸업, 15년 교육 경력
              </p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                안녕하세요. 온리보컬아카데미 원장 윤지현입니다.
              </p>
              <p className="mb-4">
                15년간 보컬 교육에 전념하며 500여명의 학생들을 성공적으로
                합격시킨 경험을 바탕으로, 여러분의 음악적 꿈을 실현시켜
                드리겠습니다.
              </p>
              <p className="mb-4">
                우리 학원은 단순히 노래를 가르치는 것이 아니라, 음악의 본질을
                이해하고 자신만의 독특한 목소리를 찾을 수 있도록 도와드립니다.
              </p>
              <p>
                개인별 맞춤형 커리큘럼과 체계적인 교육 시스템으로 여러분의
                잠재력을 최대한 끌어올려 드리겠습니다. 함께 음악의 세계로
                떠나보시겠습니까?
              </p>
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
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  수업 시간
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <span className="font-semibold">평일</span>
                    <span className="text-gray-600">PM 12:00 ~ PM 10:00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <span className="font-semibold">토요일</span>
                    <span className="text-gray-600">AM 11:00 ~ PM 08:00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <span className="font-semibold">일요일</span>
                    <span className="text-gray-600">PM 02:00 ~ PM 10:00</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  상담 시간
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <span className="font-semibold">평일</span>
                    <span className="text-gray-600">PM 12:00 ~ PM 10:00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <span className="font-semibold">토요일</span>
                    <span className="text-gray-600">AM 11:00 ~ PM 08:00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <span className="font-semibold">일요일</span>
                    <span className="text-gray-600">상담 불가능</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * 일요일은 수업만 가능하며 상담은 불가능합니다.
                </p>
              </div>
            </div>
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
