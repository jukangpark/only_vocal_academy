"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Search,
  Filter,
  User,
  Mail,
  Calendar,
  LogOut,
  Plus,
  Image as ImageIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import AdminGuard from "@/components/AdminGuard";
import { signOut, getAllUsers, updateUserGalleryAccess } from "@/lib/auth";

// 사용자 데이터 타입 정의
interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "admin" | "user" | "teacher";
  status: "active" | "inactive" | "pending";
  createdAt: string;
  lastLogin: string;
  profileImage?: string;
  galleryAccess: boolean;
}

export default function UsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    galleryApproved: 0,
  });

  // 사용자 데이터 로드
  useEffect(() => {
    loadUsers();
  }, []);

  // 검색 및 필터 적용
  useEffect(() => {
    const filtered = users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase());

      let matchesFilter = true;
      if (selectedFilter === "name") {
        matchesFilter = user.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      } else if (selectedFilter === "email") {
        matchesFilter = user.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      } else if (selectedFilter === "phone") {
        matchesFilter =
          user.phone?.toLowerCase().includes(searchTerm.toLowerCase()) || false;
      }

      return matchesSearch && matchesFilter;
    });

    setFilteredUsers(filtered);
  }, [users, searchTerm, selectedFilter]);

  const loadUsers = async () => {
    try {
      setIsLoading(true);
      const usersData = await getAllUsers();
      setUsers(usersData);
      setFilteredUsers(usersData);

      // 통계 계산
      const total = usersData.length;
      const galleryApproved = usersData.filter(
        (u: User) => u.galleryAccess
      ).length;

      setStats({ total, galleryApproved });
    } catch (error) {
      console.error("사용자 로드 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGalleryApproval = async (
    userId: string,
    currentAccess: boolean
  ) => {
    try {
      await updateUserGalleryAccess(userId, !currentAccess);
      await loadUsers(); // 데이터 새로고침
      alert(
        `갤러리 접근 권한이 ${!currentAccess ? "승인" : "취소"}되었습니다.`
      );
    } catch (error) {
      console.error("갤러리 접근 권한 업데이트 실패:", error);
      alert("갤러리 접근 권한 업데이트에 실패했습니다.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/auth/login");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "teacher":
        return "bg-blue-100 text-blue-800";
      case "user":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50">
        {/* 헤더 */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => router.back()}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  뒤로가기
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    사용자 관리
                  </h1>
                  <p className="text-sm text-gray-600">
                    온리보컬아카데미 사용자 관리
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  로그아웃
                </button>
              </div>
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
                      placeholder="이름, 이메일, 역할로 검색..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  >
                    <option value="all">전체</option>
                    <option value="name">이름</option>
                    <option value="email">이메일</option>
                    <option value="phone">전화번호</option>
                  </select>
                  <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                    <Filter className="w-4 h-4 mr-1" />
                    필터
                  </button>
                </div>
              </div>
            </div>

            {/* 통계 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">
                      총 사용자
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stats.total}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <ImageIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">
                      갤러리 승인
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stats.galleryApproved} /{" "}
                      <span className="text-gray-400">{stats.total}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 사용자 목록 */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  사용자 목록
                </h2>
              </div>
              {isLoading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">사용자를 불러오는 중...</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <div
                      key={user.id}
                      className="p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                            {user.profileImage ? (
                              <img
                                src={user.profileImage}
                                alt={user.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                            ) : (
                              <User className="w-6 h-6 text-gray-500" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {user.name}
                              </h3>
                              <span
                                className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(
                                  user.role
                                )}`}
                              >
                                {user.role === "admin"
                                  ? "관리자"
                                  : user.role === "teacher"
                                  ? "강사"
                                  : "사용자"}
                              </span>
                              <span
                                className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                                  user.status
                                )}`}
                              >
                                {user.status === "active"
                                  ? "활성"
                                  : user.status === "inactive"
                                  ? "비활성"
                                  : "대기중"}
                              </span>
                              <span
                                className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                  user.galleryAccess
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {user.galleryAccess
                                  ? "갤러리 접근 가능"
                                  : "갤러리 접근 불가"}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Mail className="w-3 h-3 mr-1" />
                                {user.email}
                              </div>
                              {user.phone && (
                                <div className="flex items-center">
                                  <User className="w-3 h-3 mr-1" />
                                  {user.phone}
                                </div>
                              )}
                              <div className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                가입: {user.createdAt}
                              </div>
                              <div className="flex items-center">
                                <User className="w-3 h-3 mr-1" />
                                마지막 로그인: {user.lastLogin}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center ml-4">
                          <div className="text-sm text-gray-600 mr-2">
                            갤러리 승인
                          </div>

                          <label className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={user.galleryAccess}
                              onChange={() =>
                                handleGalleryApproval(
                                  user.id,
                                  user.galleryAccess
                                )
                              }
                              className="sr-only"
                            />
                            <div
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                user.galleryAccess
                                  ? "bg-green-600"
                                  : "bg-gray-200"
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  user.galleryAccess
                                    ? "translate-x-6"
                                    : "translate-x-1"
                                }`}
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 빈 상태 */}
            {!isLoading && filteredUsers.length === 0 && (
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
    </AdminGuard>
  );
}
