import Navigation from "@/components/navigation";
import AddressInfo from "@/components/AddressInfo";
import { MapPin, Phone, Clock, Car, Train, Bus } from "lucide-react";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-80 flex items-center px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            오시는 길
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            온리보컬아카데미로 오시는 방법을 안내해드립니다.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            위치 안내
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  주소 정보
                </h3>
                <AddressInfo />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  찾아오시는 길
                </h3>
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <p className="text-gray-600 mb-4">
                    네이버 지도에서 '온리보컬아카데미'를 검색하시면
                    <br />
                    정확한 위치를 확인하실 수 있습니다.
                  </p>
                  <a
                    href="https://map.naver.com/p/search/온리보컬/place/1108538742?placePath=/ticket?entry=pll&fromPanelNum=2&timestamp=202509092103&locale=ko&svcName=map_pcv5&searchText=온리보컬&from=map&fromPanelNum=2&timestamp=202509092103&locale=ko&svcName=map_pcv5&searchText=온리보컬&fromNxList=true&searchType=place&c=15.00,0,0,0,dh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>네이버 지도에서 보기</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 px-4">
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

      {/* Nearby Landmarks */}
      <section className="py-20 px-4 bg-white">
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
                <li>• 버거킹</li>
                <li>• 청담동마녀김밥</li>
                <li>• 아쿠아 타임 (카페)</li>
                <li>• 팔팔소곱창</li>
                <li>• 텐퍼센트커피</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
