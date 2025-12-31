import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Steel Tech Industries - Construction Technology Leaders | Iron Task 726',
  description: 'Steel Tech Industries builds cutting-edge construction technology. Home of Iron Task 726 - the professional documentation system trusted by 10,000+ ironworkers and construction companies worldwide.',
  keywords: 'construction technology, Iron Task 726, construction documentation, ironworker software, project management, safety compliance, Steel Tech',
  openGraph: {
    title: 'Steel Tech Industries - Building the Future of Construction Technology',
    description: 'Professional construction documentation with Iron Task 726. Smart photo management, real-time translation, AI-powered reports.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
