import type { Metadata } from 'next'
import { Anton, IBM_Plex_Mono, Inter, Noto_Nastaliq_Urdu } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'
import SiteChrome from '@/app/components/site-chrome'
import { brand } from '@/app/lib/brand'

const inter = Inter({ subsets: ['latin'] })

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poster',
})

const plex = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
})

const notoUrdu = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-urdu',
  display: 'swap',
})

function langFromCookie(siteLang: string | undefined) {
  return siteLang === 'ur' ? 'ur' : 'en'
}

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = langFromCookie(cookieStore.get('site-lang')?.value)
  return {
    title:
      lang === 'ur'
        ? `${brand.ur} | فیاٹ اور نیو ہالینڈ اسپیئر پارٹس`
        : `${brand.en} | Fiat & New Holland Tractor Spare Parts`,
    description:
      lang === 'ur'
        ? 'لاہور سے فیاٹ، میسی، فورڈ اور نیو ہالینڈ کے ٹریکٹر اسپیئر پارٹس۔ درآمدکنندگان اور ڈسٹری بیوٹرز کے لئے تحریری کوٹیشن، پیکنگ اور شپمنٹ۔'
        : 'Wholesale Fiat, Massey, Ford and New Holland tractor spare parts from Lahore, Pakistan. Written quotations for importers and distributors, then packing and shipment.',
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
      <body className={`${inter.className} ${notoUrdu.variable} ${anton.variable} ${plex.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('fahad-theme')==='light')document.documentElement.setAttribute('data-theme','light')}catch(e){}`,
          }}
        />
        <SiteChrome initialLang={initialLang}>{children}</SiteChrome>
      </body>
    </html>
  )
}
