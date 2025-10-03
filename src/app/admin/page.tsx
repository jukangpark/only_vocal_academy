"use client";

import { useState, useEffect } from "react";
import { Lock, LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import AdminDashboard from "./AdminDashboard";
import LoginModal from "@/components/LoginModal";

export default function AdminPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    // 현재 세션 확인
    checkUser();

    // 인증 상태 변화 감지
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setIsLoginModalOpen(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    setUser(session?.user ?? null);
    // 로그인되지 않은 경우 모달을 자동으로 열지 않음
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setUser(null);
      setIsLoginModalOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoginModalOpen(false);
    // 사용자 정보 다시 가져오기
    checkUser();
  };

  if (user) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Admin Dashboard Header */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  관리자 대시보드
                </h1>
                <p className="text-sm text-gray-600">
                  안녕하세요, {user.email}님
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 cursor-pointer"
              >
                <LogOut className="w-4 h-4 mr-2" />
                로그아웃
              </button>
            </div>
          </div>
        </div>

        <AdminDashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Login Required Screen */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-16 h-16 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            로그인이 필요한 서비스입니다
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            온리보컬아카데미 관리자 페이지에 접근하려면 로그인이 필요합니다.
          </p>
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold cursor-pointer"
          >
            로그인하기
          </button>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title="관리자 로그인"
        description="온리보컬아카데미 관리자 페이지"
        showLogo={true}
        onSuccess={handleLoginSuccess}
      />
    </div>
  );
}
