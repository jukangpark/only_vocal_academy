import Banner from "@/components/Banner";
import { Calendar, Wifi, Users, Coffee } from "lucide-react";

export default function FacilityPage() {
  const facilities = [
    {
      name: "보컬 연습실",
      description: "개인 보컬 레슨을 위한 전문 연습실",
      features: [
        "고급 음향 장비",
        "피아노",
        "에어컨",
        "조명 시스템",
        "전문 거울",
        "자세 교정 도구",
        "음향 흡음재",
      ],
      image: "🎤",
    },
    {
      name: "대기실",
      description: "수업 대기 및 휴식을 위한 공간",
      features: [
        "카페테리아",
        "로비 테이블",
        "음료&다과 서비스",
        "무료 와이파이",
        "편안한 소파",
        "음악 관련 서적",
      ],
      image: "☕",
    },
    {
      name: "녹음실",
      description: "음원 녹음 및 포트폴리오 제작을 위한 공간",
      features: [
        "전문 녹음 장비",
        "편집 시스템",
        "음향 처리 장비",
        "모니터링 시스템",
      ],
      image: "🎧",
    },
    {
      name: "공연장",
      description: "정기 공연 및 발표회를 위한 공간",
      features: ["전문 무대", "조명 시스템", "음향 시스템", "관객석"],
      image: "🎭",
    },
  ];

  const amenities = [
    {
      name: "예약",
      icon: Calendar,
      description: "온라인 및 전화 예약 서비스",
      bgColor: "bg-blue-500",
    },
    {
      name: "무선 인터넷",
      icon: Wifi,
      description: "전 구역에서 무료 Wi-Fi 사용 가능",
      bgColor: "bg-green-500",
    },
    {
      name: "남/녀 화장실 구분",
      icon: Users,
      description: "남녀 구분된 깨끗한 화장실 시설",
      bgColor: "bg-purple-500",
    },
    {
      name: "음료 및 다과",
      icon: Coffee,
      description: "다양한 음료와 다과 서비스 제공",
      bgColor: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Banner
        title="시설 소개"
        description="최신 장비와 편안한 환경으로 최고의 학습 효과를 제공합니다."
        image="/introduction.jpeg"
      />

      {/* Facilities List */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            주요 시설
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 transition-shadow"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                    {facility.image}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    주요 특징
                  </h4>
                  <ul className="space-y-2">
                    {facility.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-brand-600 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            편의 시설
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 ${amenity.bgColor} rounded-lg flex items-center justify-center`}
                  >
                    <amenity.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {amenity.name}
                    </h3>
                    <p className="text-gray-600">{amenity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
