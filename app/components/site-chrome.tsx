'use client'

import { usePathname } from 'next/navigation'
import { LanguageProvider } from '@/app/lib/language-context'
import SiteFooter from '@/app/components/site-footer'
import TopNavbar from '@/app/components/top-navbar'

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <LanguageProvider>
      <TopNavbar />
      <div className={isHomePage ? '' : 'pt-28'}>{children}</div>
      <SiteFooter />
    </LanguageProvider>
  )
}
