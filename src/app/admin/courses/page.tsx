"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  Calendar,
  Users,
  Clock,
  DollarSign,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function CoursesPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // 실제 강의 데이터 (courses/page.tsx에서 추출)
  const courses = [
    {
      id: 1,
      title: "스탠다드",
      instructor: "윤지현",
      level: "초급-중급",
      duration: "50분",
      price: "220,000원",
      students: 25,
      maxStudents: 30,
      status: "진행중",
      schedule: "주 1회 (한 달 4회)",
      description: "개인의 발성상태, 지향성에 맞춘 100% 1:1 개인 맞춤 커리큘럼",
      category: "보컬 과정",
      badge: "추천",
      badgeColor: "bg-gray-100 text-brand-700",
      targetAudience:
        "남녀노소 누구나, 노래 실력 향상, 발성 교정 목적으로 장기 수강을 원하는 경우 (6개월 이상)",
    },
    {
      id: 2,
      title: "심화",
      instructor: "윤지현",
      level: "중급-고급",
      duration: "100분",
      price: "440,000원",
      students: 18,
      maxStudents: 25,
      status: "진행중",
      schedule: "주 2회 (한 달 8회)",
      description: "개인의 발성상태, 지향성에 맞춘 100% 1:1 개인 맞춤 커리큘럼",
      category: "보컬 과정",
      badge: "2만원 할인",
      badgeColor: "bg-green-100 text-green-700",
      targetAudience:
        "단기간 빠른 성장을 원하는 경우, 진단 결과 발성 상태가 매우 좋지 않아 빠른 교정이 필요한 경우",
    },
    {
      id: 3,
      title: "원장직강",
      instructor: "윤지현",
      level: "고급",
      duration: "50분",
      price: "390,000원",
      students: 12,
      maxStudents: 15,
      status: "진행중",
      schedule: "주 1회 (한 달 4회)",
      description: "개인의 발성상태, 지향성에 맞춘 100% 1:1 개인 맞춤 커리큘럼",
      category: "보컬 과정",
      badge: "프리미엄",
      badgeColor: "bg-yellow-100 text-yellow-700",
      targetAudience:
        "진단 결과 발성 상태, 발성 습관 등이 매우 좋지 않아 빠른 발성 교정이 필요한 전공생, 노래, 목소리 관련 직업군",
    },
    {
      id: 4,
      title: "원장직강 원포인트",
      instructor: "윤지현",
      level: "전체",
      duration: "50분",
      price: "100,000원",
      students: 8,
      maxStudents: 10,
      status: "진행중",
      schedule: "1회 과정",
      description: "개인의 발성상태, 지향성에 맞춘 100% 1:1 개인 맞춤 커리큘럼",
      category: "보컬 과정",
      badge: "1회 레슨",
      badgeColor: "bg-blue-100 text-blue-700",
      targetAudience:
        "발성 교정에 목적을 둔 전공생, 노래, 목소리 관련 직업군 (고정스케줄 시간이 안맞지만 수강을 받고 싶은 경우)",
    },
    {
      id: 5,
      title: "보컬 Pro class",
      instructor: "윤지현",
      level: "전문가",
      duration: "50분",
      price: "590,000원",
      students: 6,
      maxStudents: 8,
      status: "진행중",
      schedule: "1:1 개인레슨",
      description: "개인의 발성상태, 지향성에 맞춘 100% 1:1 개인 맞춤 커리큘럼",
      category: "보컬 과정",
      badge: "전문반",
      badgeColor: "bg-purple-100 text-purple-700",
      targetAudience:
        "흥미, 재미를 위한 수강은 불가하며 실용음악과 입시 지망생 또는 전문적인 수강 목적을 가진 경우 (1년 이상 장기 수강생)",
    },
    {
      id: 6,
      title: "마스터클래스",
      instructor: "윤지현",
      level: "중급-고급",
      duration: "50분",
      price: "문의",
      students: 15,
      maxStudents: 20,
      status: "진행중",
      schedule: "주 1회 (한 달 4회)",
      description:
        "발표 위주의 그룹수업 (과제곡 발표, 듀엣 미션, 월말평가 진행 등)",
      category: "보컬 과정",
      badge: "그룹수업",
      badgeColor: "bg-orange-100 text-orange-700",
      targetAudience: "보컬 오디션 지망생, 앨범 발매 목적 등",
    },
    {
      id: 7,
      title: "발성프로그램",
      instructor: "윤지현",
      level: "초급",
      duration: "50분",
      price: "100,000원",
      students: 20,
      maxStudents: 25,
      status: "진행중",
      schedule: "주 1회 (한 달 4회)",
      description: "기본 발성 위주의 그룹수업 (실기, 이론 병행)",
      category: "발성프로그램",
      badge: "그룹수업",
      badgeColor: "bg-teal-100 text-teal-700",
      targetAudience: "전문적인 수강 목적을 가진 경우 (1년 이상 장기 수강생)",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || course.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleEdit = (courseId: number) => {
    console.log(`강의 ${courseId} 수정`);
    // 수정 페이지로 이동하거나 모달 열기
  };

  const handleDelete = (courseId: number) => {
    console.log(`강의 ${courseId} 삭제`);
    // 삭제 확인 후 처리
  };

  const handleView = (courseId: number) => {
    console.log(`강의 ${courseId} 상세보기`);
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
                <h1 className="text-2xl font-bold text-gray-900">강의 관리</h1>
                <p className="text-sm text-gray-600">
                  온리보컬아카데미 강의 정보 관리
                </p>
              </div>
            </div>
            <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />새 강의 추가
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
                    placeholder="강의명, 강사명, 카테고리로 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="all">전체</option>
                  <option value="진행중">진행중</option>
                  <option value="예정">예정</option>
                  <option value="완료">완료</option>
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
                    총 강의 수
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {courses.length}
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
                  <p className="text-sm font-medium text-gray-600">총 수강생</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {courses.reduce((sum, course) => sum + course.students, 0)}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">진행중</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {courses.filter((c) => c.status === "진행중").length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    평균 수강료
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round(
                      courses
                        .filter((c) => c.price !== "문의")
                        .reduce((sum, course) => {
                          const price = parseInt(
                            course.price.replace(/[^\d]/g, "")
                          );
                          return sum + price;
                        }, 0) /
                        courses.filter((c) => c.price !== "문의").length /
                        1000
                    )}
                    만원
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 강의 목록 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* 카드 헤더 */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {course.title}
                        </h3>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${course.badgeColor}`}
                        >
                          {course.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        강사: {course.instructor} | {course.category}
                      </p>
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          course.status === "진행중"
                            ? "bg-green-100 text-green-800"
                            : course.status === "예정"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {course.status}
                      </span>
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={() => handleView(course.id)}
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(course.id)}
                        className="p-1 text-gray-400 hover:text-yellow-600 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(course.id)}
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
                    {course.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {course.schedule}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {course.students}/{course.maxStudents}명
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {course.price}
                    </div>
                  </div>

                  {/* 추천 대상 */}
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">추천 대상:</p>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {course.targetAudience}
                    </p>
                  </div>
                </div>

                {/* 카드 푸터 */}
                <div className="px-4 py-3 bg-gray-50 rounded-b-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      레벨: {course.level}
                    </span>
                    <span className="text-xs text-gray-500">
                      ID: {course.id}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 빈 상태 */}
          {filteredCourses.length === 0 && (
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
