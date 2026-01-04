import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/navigation";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: "온리보컬아카데미 - 광주 최고의 보컬·발성 전문 아카데미",
  description:
    "광주 최고의 보컬·발성 전문 아카데미",
  openGraph: {
    title: "온리보컬아카데미 - 광주 최고의 보컬·발성 전문 아카데미",
    description: "광주 최고의 보컬·발성 전문 아카데미",
    images: [
      {
        url: "/home-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "온리보컬아카데미",
      },
    ],
    type: "website",
    locale: "ko_KR",
    siteName: "온리보컬아카데미",
  },
  twitter: {
    card: "summary_large_image",
    title: "온리보컬아카데미 - 광주 최고의 보컬·발성 전문 아카데미",
    description: "광주 최고의 보컬·발성 전문 아카데미",
    images: ["/home-banner.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900 antialiased">
        <Navigation />
        {children}
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
