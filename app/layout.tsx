import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "디오니 Diony",
  description: "저작권 걱정 없는 맞춤형 광고 배경음악 생성 AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
