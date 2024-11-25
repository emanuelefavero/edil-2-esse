import Footer from '@/components/Footer'
import FullScreenPattern from '@/components/FullScreenPattern'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Edil 2 Esse',
  description: 'Impresa Edile che opera a Livorno e provincia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FullScreenPattern />
        <Header />

        <main>{children}</main>

        <Footer />
      </body>

      <Script src='/js/scrollIntoView.js' />
    </html>
  )
}
