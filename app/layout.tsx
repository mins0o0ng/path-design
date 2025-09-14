import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "PathDesign - 운동, 이제 작품이 된다",
  description: "원하는 거리만 입력하면, AI가 당신만의 하트·이니셜·패턴 경로를 자동 생성해주는 러닝·산책 앱",
  generator: "PathDesign",
  keywords: "러닝코스 앱, 산책 경로 추천, 운동 경로 생성, 러닝 SNS 공유, AI 경로 디자인",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
