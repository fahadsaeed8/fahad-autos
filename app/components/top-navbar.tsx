'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/app/lib/language-context'

type NavItem = {
  href: string
  en: string
  ur: string
}

const navItems: NavItem[] = [
  { href: '/', en: 'Home', ur: 'ہوم' },
  { href: '/parts', en: 'Parts', ur: 'پارٹس' },
  { href: '/services', en: 'Services', ur: 'سروسز' },
  { href: '/gallery', en: 'Gallery', ur: 'گیلری' },
  { href: '/about', en: 'About', ur: 'ہمارے بارے میں' },
  { href: '/contact', en: 'Contact', ur: 'رابطہ' },
]

export default function TopNavbar() {
  const { lang, toggleLang } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-blue-900/20 bg-slate-950/95 backdrop-blur'
          : 'border-transparent bg-gradient-to-r from-slate-950/40 via-blue-950/35 to-slate-900/40'
      }`}
    >
      <div className="mx-auto flex max-w-8xl flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-8">
        <div className="flex items-center justify-start gap-3">
          <Image src="/new-logo.png" alt="Fahad Autos logo" width={420} height={130} className="h-24 w-80 object-contain" />
        </div>

        <nav className="flex flex-wrap items-center gap-2 md:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {lang === 'en' ? item.en : item.ur}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-lg border border-amber-300 px-3 py-2 text-sm font-bold text-amber-300 transition hover:bg-amber-300 hover:text-slate-950"
          >
            {lang === 'en' ? 'اردو' : 'English'}
          </button>
        </nav>
      </div>
    </header>
  )
}
