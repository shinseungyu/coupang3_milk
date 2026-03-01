import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google'

import './globals.css'

const _notoSansKR = Noto_Sans_KR({ subsets: ['latin'], weight: ['300', '400', '500', '700'] })
const _notoSerifKR = Noto_Serif_KR({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  title: '유기농 우유 - 매일 마시는 우유, 그래서 더 깐깐하게',
  description: '원유부터 관리까지 투명하게, 믿고 고르는 유기농 우유. 담백한 고소함과 깔끔한 끝맛의 데일리 우유.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
