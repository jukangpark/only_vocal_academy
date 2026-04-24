"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import navigationItems from "@/constants/navigationItems";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <h1 className="font-light text-2xl hidden xl:block -ml-3">
                온리보컬아카데미
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
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
