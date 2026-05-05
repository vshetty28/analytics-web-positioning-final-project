import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Best Rest Stops America | Your Complete Guide to Highway Rest Areas',
  description: 'Discover the best rest stops across America. Comprehensive guides to highway rest areas, travel centers, and road trip stops on I-95, I-10, and more. Plan your perfect road trip today.',
  keywords: ['best rest stops america', 'highway rest areas', 'road trip stops', 'travel centers', 'I-95 rest stops', 'I-10 rest stops'],
  authors: [{ name: 'RestStopsUSA Editorial Team' }],
  openGraph: {
    title: 'Best Rest Stops America | Your Complete Guide to Highway Rest Areas',
    description: 'Discover the best rest stops across America. Comprehensive guides to highway rest areas, travel centers, and road trip stops.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
