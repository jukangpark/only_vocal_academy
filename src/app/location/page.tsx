import Navigation from "@/components/navigation";
import { MapPin, Phone, Clock, Car, Train, Bus } from "lucide-react";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            오시는 길
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            온리보컬아카데미로 오시는 방법을 안내해드립니다.
          </p>
        </div>
      </section>

      {/* Address Info */}
      <section className=" px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">주소</h2>
              <p className="text-xl text-gray-600">
                광주광역시 광산구 임방울대로332번길 9-14
              </p>
              <p className="text-lg text-gray-600">
                GW빌딩 2층 온리보컬아카데미
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Phone className="w-5 h-5 text-brand-600 mr-2" />
                  연락처
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-semibold">전화:</span> 0507-1497-4900
                  </p>
                  <p>
                    <span className="font-semibold">팩스:</span> 062-123-4567
                  </p>
                  <p>
                    <span className="font-semibold">이메일:</span>{" "}
                    info@onlyvocal.kr
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Clock className="w-5 h-5 text-brand-600 mr-2" />
                  운영시간
                </h3>
                <div className="space-y-2 text-gray-600">
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
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            교통편 안내
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Subway */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Train className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">지하철</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-semibold">광주 1호선</span>
                </p>
                <p>광산구청역 3번 출구</p>
                <p>도보 5분 거리</p>
              </div>
            </div>

            {/* Bus */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Bus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">버스</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-semibold">일반버스:</span>
                </p>
                <p>100, 200, 300번</p>
                <p>광산구청 정류장 하차</p>
                <p>
                  <span className="font-semibold">마을버스:</span>
                </p>
                <p>광산01, 광산02번</p>
              </div>
            </div>

            {/* Car */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">자가용</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-semibold">주차:</span>
                </p>
                <p>건물 내 무료 주차장</p>
                <p>학원 이용 고객 무료</p>
                <p>주차 공간 제한적</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            위치 안내
          </h2>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <p className="text-xl text-gray-600 mb-2">
                지도가 여기에 표시됩니다
              </p>
              <p className="text-gray-500">Google Maps 또는 Naver Maps 연동</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            주변 시설
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                주변 편의시설
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 광산구청 (도보 3분)</li>
                <li>• 광산구청역 (도보 5분)</li>
                <li>• 편의점 (건물 1층)</li>
                <li>• 카페 (건물 1층)</li>
                <li>• 주차장 (건물 내)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                주변 음식점
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 분식점 (건물 1층)</li>
                <li>• 중국집 (건물 1층)</li>
                <li>• 치킨집 (건물 1층)</li>
                <li>• 커피숍 (건물 1층)</li>
                <li>• 다양한 음식점 (주변)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
