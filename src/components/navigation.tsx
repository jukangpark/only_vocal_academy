"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, LogIn, LogOut, User } from "lucide-react";
import Logo from "./Logo";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import navigationItems from "@/constants/navigationItems";
import { supabase } from "@/lib/supabase";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  // 사용자 인증 상태 확인
  useEffect(() => {
    const getUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error("사용자 정보 가져오기 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();

    // 인증 상태 변화 감지
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/");
      setUser(null);
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 xl:h-20">
          <div className="flex items-center overflow-hidden h-20">
            <button
              onClick={handleLogoClick}
              className="flex items-center cursor-pointer"
            >
              <div className="transform rotate-[4deg]">
                <Logo />
              </div>
              <h1 className="font-light text-2xl hidden xl:block -ml-5">
                온리 보컬 아카데미
              </h1>
            </button>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? "text-brand-600 font-semibold"
                    : "text-gray-700 hover:text-brand-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden xl:flex items-center">
            {isLoading ? (
              <div className="w-8 h-8 border-2 border-gray-300 border-t-brand-600 rounded-full animate-spin"></div>
            ) : user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-gray-700">
                  <User className="w-5 h-5" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm">로그아웃</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="flex items-center space-x-2 bg-brand-600 text-gray-700 px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors cursor-pointer"
              >
                <LogIn className="w-5 h-5" />
                <span>로그인</span>
              </button>
            )}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-gray-700 hover:text-brand-600 transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 cursor-pointer" />
            ) : (
              <Menu className="w-6 h-6 cursor-pointer" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40 xl:hidden">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block w-full py-2 px-4 rounded-lg text-center transition-colors ${
                      isActive(item.href)
                        ? "text-brand-600 bg-brand-50 font-semibold"
                        : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Login Button */}
                <div className="pt-4 border-t border-gray-200">
                  {isLoading ? (
                    <div className="flex justify-center py-2">
                      <div className="w-6 h-6 border-2 border-gray-300 border-t-brand-600 rounded-full animate-spin"></div>
                    </div>
                  ) : user ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-gray-700 py-2">
                        <User className="w-5 h-5" />
                        <span className="text-sm">{user.email}</span>
                      </div>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center justify-center space-x-2 w-full py-2 px-4 text-gray-700 hover:text-gray-900 rounded-lg transition-colors cursor-pointer"
                      >
                        <LogOut className="w-5 h-5" />
                        <span>로그아웃</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setIsLoginModalOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-center space-x-2 w-full bg-brand-600 text-gray-500 py-2 px-4 rounded-lg hover:bg-brand-700 transition-colors cursor-pointer"
                    >
                      <LogIn className="w-5 h-5" />
                      <span>로그인</span>
                    </button>
                  )}
                </div>
              </nav>
            </div>
          </div>
        )}

        {/* Login Modal */}
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          title="로그인"
          description="온리보컬 아카데미에 오신 것을 환영합니다"
          showLogo={true}
          showSignupLink={true}
          onSignupClick={() => {
            setIsLoginModalOpen(false);
            setIsSignupModalOpen(true);
          }}
        />

        {/* Signup Modal */}
        <SignupModal
          isOpen={isSignupModalOpen}
          onClose={() => setIsSignupModalOpen(false)}
          title="회원가입"
          description="온리보컬 아카데미에 가입하세요"
          showLogo={true}
          showLoginLink={true}
          onLoginClick={() => {
            setIsSignupModalOpen(false);
            setIsLoginModalOpen(true);
          }}
        />
      </div>
    </header>
  );
}
