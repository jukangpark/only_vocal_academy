"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  Users,
  Award,
  Star,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function TeachersPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // 실제 강사 데이터 (teachers/page.tsx에서 추출)
  const teachers = [
    {
      id: 1,
      name: "윤지현 원장",
      specialty: "보컬 전문",
      experience: "",
      education: "음악대학 보컬과 졸업",
      description: "음악대학 보컬과 졸업, 다수의 합격생 배출",
      achievements: [
        "500여명 합격생 배출",
        "음악대학 입시 전문",
        "보컬 테크닉 전문가",
        "개인별 맞춤 지도",
      ],
      image: "/images/온리보컬 원장 보컬코치 윤지현.jpeg",
      position: "원장",
      status: "활성",
      courses: ["원장직강", "보컬 Pro class"],
      students: 45,
    },
    {
      id: 2,
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
      position: "부원장",
      status: "활성",
      courses: ["심화", "마스터클래스"],
      students: 32,
    },
    {
      id: 3,
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
      position: "보컬코치",
      status: "활성",
      courses: ["스탠다드", "발성프로그램"],
      students: 28,
    },
    {
      id: 4,
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
      position: "보컬코치",
      status: "활성",
      courses: ["스탠다드", "음악 이론"],
      students: 22,
    },
    {
      id: 5,
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
      position: "보컬코치",
      status: "활성",
      courses: ["마스터클래스", "발성프로그램"],
      students: 18,
    },
    {
      id: 6,
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
      position: "보컬코치",
      status: "활성",
      courses: ["스탠다드", "CCM 특화"],
      students: 15,
    },
  ];

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch =
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || teacher.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleEdit = (teacherId: number) => {
    console.log(`강사 ${teacherId} 수정`);
    // 수정 페이지로 이동하거나 모달 열기
  };

  const handleDelete = (teacherId: number) => {
    console.log(`강사 ${teacherId} 삭제`);
    // 삭제 확인 후 처리
  };

  const handleView = (teacherId: number) => {
    console.log(`강사 ${teacherId} 상세보기`);
    // 상세보기 페이지로 이동
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.back()}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                뒤로가기
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">강사 관리</h1>
                <p className="text-sm text-gray-600">
                  온리보컬아카데미 강사 정보 관리
                </p>
              </div>
            </div>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />새 강사 추가
            </button>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* 검색 및 필터 */}
          <div className="mb-6 bg-white p-4 rounded-lg shadow">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="강사명, 전문분야, 직책으로 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">전체</option>
                  <option value="활성">활성</option>
                  <option value="휴직">휴직</option>
                  <option value="퇴사">퇴사</option>
                </select>
                <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4 mr-1" />
                  필터
                </button>
              </div>
            </div>
          </div>

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    총 강사 수
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {teachers.length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">활성 강사</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {teachers.filter((t) => t.status === "활성").length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">총 수강생</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {teachers.reduce(
                      (sum, teacher) => sum + teacher.students,
                      0
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">평균 경력</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round(
                      teachers.reduce((sum, teacher) => {
                        const years = parseInt(
                          teacher.experience.replace(/[^\d]/g, "")
                        );
                        return sum + years;
                      }, 0) / teachers.length
                    )}
                    년
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 강사 목록 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* 카드 헤더 */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-200">
                        <Image
                          src={teacher.image}
                          alt={teacher.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {teacher.name}
                        </h3>
                        <p className="text-sm text-blue-600 font-medium">
                          {teacher.position}
                        </p>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            teacher.status === "활성"
                              ? "bg-green-100 text-green-800"
                              : teacher.status === "휴직"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {teacher.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={() => handleView(teacher.id)}
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(teacher.id)}
                        className="p-1 text-gray-400 hover:text-yellow-600 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(teacher.id)}
                        className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* 카드 본문 */}
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-4">
                    {teacher.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {teacher.experience}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      {teacher.education}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      수강생 {teacher.students}명
                    </div>
                  </div>

                  {/* 담당 강의 */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">담당 강의:</p>
                    <div className="flex flex-wrap gap-1">
                      {teacher.courses.map((course, index) => (
                        <span
                          key={index}
                          className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 주요 성과 */}
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-2">주요 성과:</p>
                    <div className="space-y-1">
                      {teacher.achievements
                        .slice(0, 2)
                        .map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-xs text-gray-600"
                          >
                            <Star className="w-3 h-3 text-yellow-500 mr-1 flex-shrink-0" />
                            <span className="truncate">{achievement}</span>
                          </div>
                        ))}
                      {teacher.achievements.length > 2 && (
                        <p className="text-xs text-gray-500">
                          +{teacher.achievements.length - 2}개 더
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 카드 푸터 */}
                <div className="px-4 py-3 bg-gray-50 rounded-b-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      ID: {teacher.id}
                    </span>
                    <span className="text-xs text-gray-500">
                      {teacher.specialty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 빈 상태 */}
          {filteredTeachers.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                검색 결과가 없습니다
              </h3>
              <p className="text-gray-600">다른 검색어를 시도해보세요.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
