'use client'

import { usePathname } from 'next/navigation'
import { LanguageProvider, type Lang } from '@/app/lib/language-context'
import SiteFooter from '@/app/components/site-footer'
import TopNavbar from '@/app/components/top-navbar'
import WhatsAppFloat from '@/app/components/whatsapp-float'

type SiteChromeProps = {
  children: React.ReactNode
  initialLang: Lang
}

export default function SiteChrome({ children, initialLang }: SiteChromeProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <LanguageProvider initialLang={initialLang}>
      <TopNavbar />
      <div className={isHomePage ? '' : 'pt-28'}>{children}</div>
      <SiteFooter />
      <WhatsAppFloat />
    </LanguageProvider>
  )
}
