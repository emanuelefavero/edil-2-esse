import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import FullScreenPattern from '@/components/FullScreenPattern'
import Header from '@/components/Header'

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
  // TODO Add footer
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FullScreenPattern />
        <Header />

        <main>{children}</main>
      </body>
    </html>
  )
}
