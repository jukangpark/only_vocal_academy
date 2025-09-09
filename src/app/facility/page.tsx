import Navigation from "@/components/navigation";
import { Users, Wifi, Coffee, Car } from "lucide-react";

export default function FacilityPage() {
  const facilities = [
    {
      name: "보컬 연습실",
      description: "개인 보컬 레슨을 위한 전문 연습실",
      features: ["고급 음향 장비", "피아노", "에어컨", "조명 시스템"],
      image: "🎤",
    },
    {
      name: "앙상블실",
      description: "그룹 수업 및 앙상블 연습을 위한 공간",
      features: ["다중 음향 시스템", "무대 조명", "대형 스크린", "편안한 좌석"],
      image: "👥",
    },
    {
      name: "피아노실",
      description: "피아노 반주 및 이론 수업을 위한 공간",
      features: ["그랜드 피아노", "음악 이론 교구", "화이트보드", "에어컨"],
      image: "🎹",
    },
    {
      name: "대기실",
      description: "수업 대기 및 휴식을 위한 공간",
      features: ["편안한 소파", "음료 서비스", "무료 Wi-Fi", "음악 관련 서적"],
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
      name: "무료 Wi-Fi",
      icon: Wifi,
      description: "전 구역에서 무료 인터넷 사용 가능",
    },
    { name: "주차장", icon: Car, description: "학원 이용 고객 무료 주차" },
    {
      name: "음료 서비스",
      icon: Coffee,
      description: "커피, 차 등 음료 무료 제공",
    },
    { name: "화장실", icon: Users, description: "깨끗하고 편리한 화장실 시설" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            시설 소개
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            최신 장비와 편안한 환경으로 최고의 학습 효과를 제공합니다.
          </p>
        </div>
      </section>

      {/* Facilities List */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            주요 시설
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow"
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
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            편의 시설
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center">
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

      {/* Location Info */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            위치 및 접근성
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">교통편</h3>
              <div className="space-y-3 text-gray-600">
                <div>
                  <span className="font-semibold">지하철:</span> 광주 1호선
                  광산구청역 3번 출구
                </div>
                <div>
                  <span className="font-semibold">버스:</span> 100, 200, 300번
                  버스 정류장 하차
                </div>
                <div>
                  <span className="font-semibold">주차:</span> 건물 내 무료
                  주차장 이용 가능
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                운영 시간
              </h3>
              <div className="space-y-3 text-gray-600">
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
          </div>
        </div>
      </section>
    </div>
  );
}
