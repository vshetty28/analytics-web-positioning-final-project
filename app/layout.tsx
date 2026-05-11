import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-528P6ZP3');`,
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-528P6ZP3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
