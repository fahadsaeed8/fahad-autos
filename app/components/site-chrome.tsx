'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { LanguageProvider, useLanguage } from '@/app/lib/language-context'

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

function TopNavbar() {
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
        <div>
          <div className="flex items-center justify-start gap-3">
            <Image
              src="/new-logo.png"
              alt="Fahad Autos logo"
              width={420}
              height={130}
              className="h-24 w-80 object-contain"
            />
          </div>
     
        </div>

        <nav className="flex flex-wrap items-center gap-2 md:gap-4">
          {navItems.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {lang === 'en' ? item.en : item.ur}
              </Link>
            )
          })}
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

function SiteFooter() {
  const { lang } = useLanguage()

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.6fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center justify-start">
            <Image
              src="/new-logo.png"
              alt="Fahad Autos logo"
              width={460}
              height={140}
              className="h-24 w-80 object-contain md:w-96"
            />
          </div>
          <p className="mt-3 text-sm leading-7">
            {lang === 'en'
              ? 'Trusted local tractor parts shop in Lahore for farmers, mechanics and workshops.'
              : 'لاہور میں کسانوں، مکینک اور ورکشاپس کے لئے قابل اعتماد ٹریکٹر پارٹس کی دکان۔'}
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white">{lang === 'en' ? 'Quick Contact' : 'فوری رابطہ'}</h4>
          <p className="mt-2 text-sm">0321-4964013</p>
          <p className="text-sm">0300-4785384</p>
          <p className="text-sm">Ph: 37700794</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">{lang === 'en' ? 'Address' : 'پتہ'}</h4>
          <p className="mt-2 text-sm">Shop No. 43, Ramzan Chamber, 91/140 Badami Bagh, Lahore</p>
          <p className="mt-2 text-sm" dir="rtl" lang="ur">
            دکان نمبر 43، رمضان چیمبر، 91/140 بادامی باغ، لاہور
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-400">
        {lang === 'en'
          ? 'Copyright 2026 Vicky Tractor Fahad Autos. All rights reserved.'
          : 'کاپی رائٹ 2026 وکی ٹریکٹر فہد آٹوز۔ جملہ حقوق محفوظ ہیں۔'}
      </div>
    </footer>
  )
}

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
