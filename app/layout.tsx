import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { getAbsoluteUrl, truncateText } from "@/lib/meta-utils"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maha Tradings - Expert Stock Market Trading Insights",
  description: truncateText("Get expert stock market trading insights and research alerts with Maha Tradings. Expert analysis for successful trading strategies."),
  generator: 'Next.js',
  keywords: ['stock trading', 'market research', 'trading alerts', 'investment insights', 'Maha Tradings'],
  icons: {
    icon: '/mahatradings-favicon.png',
    shortcut: '/mahatradings-favicon.png',
    apple: '/mahatradings-logo.png',
  },
  metadataBase: new URL('https://mahatradings.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: getAbsoluteUrl(''),
    title: 'Maha Tradings - Expert Stock Market Trading Insights',
    description: truncateText('Get expert stock market trading insights and research alerts with Maha Tradings. Expert analysis for successful trading strategies.'),
    siteName: 'Maha Tradings',
    images: [
      {
        url: getAbsoluteUrl('/mahatradings-logo.png'),
        width: 1200,
        height: 630,
        alt: 'Maha Tradings',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maha Tradings - Expert Stock Market Trading Insights',
    description: truncateText('Get expert stock market trading insights and research alerts with Maha Tradings'),
    images: [getAbsoluteUrl('/mahatradings-logo.png')],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
