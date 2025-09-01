"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Mic, Menu, X } from "lucide-react";

const navigationItems = [
  { href: "/about", label: "학원소개" },
  { href: "/notice", label: "공지사항" },
  { href: "/courses", label: "수강안내" },
  { href: "/teachers", label: "강사소개" },
  { href: "/facility", label: "시설소개" },
  { href: "/videos", label: "동영상" },
  { href: "/location", label: "오시는길" },
  { href: "/careers", label: "인재채용" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-600 to-brand-700 rounded-lg flex items-center justify-center">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                온리보컬아카데미
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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
            <Link
              href="/contact"
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive("/contact")
                  ? "bg-brand-600 text-gray-900 shadow-lg"
                  : "bg-gradient-to-r from-brand-500 to-brand-600 text-gray-900 shadow-md hover:shadow-lg hover:from-brand-600 hover:to-brand-700"
              }`}
            >
              상담문의
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-brand-600 transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="grid grid-cols-2 gap-2 text-sm">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`p-2 rounded transition-colors ${
                    isActive(item.href)
                      ? "text-brand-600 bg-brand-50 font-semibold"
                      : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`col-span-2 p-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                  isActive("/contact")
                    ? "bg-brand-600 text-white shadow-lg"
                    : "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-md hover:shadow-lg"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                상담문의
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
