import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "온리보컬아카데미 - 광주 유일의 근거중심 보컬전문 아카데미",
  description:
    "500여명을 합격시킨 진짜 경험과 노하우, 광주 유일의 근거중심 보컬전문 아카데미입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
