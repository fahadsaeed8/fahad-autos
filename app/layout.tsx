import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'
import SiteChrome from '@/app/components/site-chrome'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const lang = cookies().get('site-lang')?.value === 'ur' ? 'ur' : 'en'
  return {
    title: lang === 'ur' ? 'فہد آٹوز' : 'Fahad Autos',
    description:
      lang === 'ur'
        ? 'مقامی مارکیٹ کے لئے ٹریکٹر پارٹس کی جدید ویب سائٹ۔'
        : 'Premium tractor parts website for local market customers.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
