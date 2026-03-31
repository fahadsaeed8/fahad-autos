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
      <div
        className={`relative mx-auto flex max-w-8xl items-center justify-between gap-3 px-4 transition-all duration-300 md:px-8 ${
          isScrolled ? 'py-2' : 'py-2'
        }`}
      >
        <div className="-ms-1 flex items-center justify-start gap-3 md:-ms-12">
          <Image
            src="/new-logo.png"
            alt="Fahad Autos logo"
            width={420}
            height={130}
            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-16 w-64' : 'h-24 w-80'}`}
          />
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-base font-semibold text-white transition hover:bg-white/10"
            >
              {lang === 'en' ? item.en : item.ur}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="group relative inline-flex items-center rounded-xl border border-amber-300/70 bg-slate-900/70 p-1 text-sm font-bold shadow-lg shadow-slate-950/40 transition hover:border-amber-300"
          >
            <span
              className={`rounded-lg px-3 py-1.5 transition ${
                lang === 'en' ? 'bg-amber-300 text-slate-950' : 'text-amber-200 group-hover:text-amber-100'
              }`}
            >
              ENG
            </span>
            <span
              className={`rounded-lg px-3 py-1.5 transition ${
                lang === 'ur' ? 'bg-amber-300 text-slate-950' : 'text-amber-200 group-hover:text-amber-100'
              }`}
            >
              اردو
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
