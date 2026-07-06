import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import HashScroll from '@/components/HashScroll'
import IntroLoader from '@/components/IntroLoader'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ravishka',
  description:
    'UI/UX Designer passionate about creating modern, user-friendly, and visually engaging digital experiences with clean and creative designs.',
  icons: {
    icon: '/pictures/favicons.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-black text-white">
        <IntroLoader>
          <Navbar />
          <main className="overflow-hidden">{children}</main>
          <Footer />
          <CustomCursor />
          <HashScroll />
        </IntroLoader>
      </body>
    </html>
  )
}
