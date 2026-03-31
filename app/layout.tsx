import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'
import SiteChrome from '@/app/components/site-chrome'

const inter = Inter({ subsets: ['latin'] })

function langFromCookie(siteLang: string | undefined) {
  return siteLang === 'en' ? 'en' : 'ur'
}

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = langFromCookie(cookieStore.get('site-lang')?.value)
  return {
    title: lang === 'ur' ? 'فہد آٹوز' : 'Fahad Autos',
    description:
      lang === 'ur'
        ? 'مقامی مارکیٹ کے لئے ٹریکٹر پارٹس کی جدید ویب سائٹ۔'
        : 'Premium tractor parts website for local market customers.',
    icons: {
      icon: [{ url: '/new-logo.png', type: 'image/png' }],
      apple: '/new-logo.png',
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const initialLang = langFromCookie(cookieStore.get('site-lang')?.value)

  return (
    <html lang={initialLang} dir={initialLang === 'ur' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={inter.className}>
        <SiteChrome initialLang={initialLang}>{children}</SiteChrome>
      </body>
    </html>
  )
}
