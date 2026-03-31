'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/app/lib/language-context'

function navLinkActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

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
  const pathname = usePathname()
  const { lang, toggleLang } = useLanguage()
  const isUr = lang === 'ur'
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isHome = pathname === '/'
  const innerNavBar =
    isScrolled
      ? 'border-blue-900/30 bg-gradient-to-r from-slate-950/98 via-blue-950/98 to-slate-900/98 backdrop-blur-md'
      : 'border-transparent bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900'
  const homeNavBar =
    isScrolled
      ? 'border-blue-900/20 bg-slate-950/95 backdrop-blur'
      : 'border-transparent bg-gradient-to-r from-slate-950/40 via-blue-950/35 to-slate-900/40'

  const logoSizes = isScrolled
    ? 'h-14 w-auto max-w-[min(72vw,280px)] sm:max-w-[300px] md:h-16 md:max-w-[300px]'
    : 'h-[4.25rem] w-auto max-w-[min(78vw,320px)] sm:h-[4.75rem] sm:max-w-[340px] md:h-24 md:max-w-[380px]'

  const linkClass = (active: boolean) =>
    `rounded-lg px-4 py-3 text-base font-semibold transition md:px-3 md:py-2 ${
      active
        ? 'bg-amber-300/25 text-amber-50 ring-1 ring-amber-300/50 shadow-sm'
        : 'text-white hover:bg-white/10'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isHome ? homeNavBar : innerNavBar
      }`}
    >
      <div
        className={`relative mx-auto flex w-full max-w-8xl items-center justify-between gap-2 px-3 transition-all duration-300 sm:gap-3 sm:px-4 md:px-8 ${
          isScrolled ? 'py-2' : 'py-2'
        }`}
      >
        {/* Logo: start side — left in EN (LTR), right in UR (RTL). Larger on small screens. */}
        <Link
          href="/"
          className="flex min-w-0 shrink items-center justify-start md:-ms-12"
        >
          <Image
            src="/new-logo.png"
            alt="Fahad Autos logo"
            width={420}
            height={130}
            priority
            className={`object-contain object-start ${logoSizes}`}
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex md:gap-3"
          aria-label="Main"
        >
          {navItems.map((item) => {
            const active = navLinkActive(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={linkClass(active)}
              >
                {lang === 'en' ? item.en : item.ur}
              </Link>
            )
          })}
        </nav>

        {/* End: language + menu (mobile). EN: both on the right; UR: mirrored to the left via dir. */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="group relative inline-flex shrink-0 items-center rounded-xl border border-amber-300/70 bg-slate-900/70 p-1 text-xs font-bold shadow-lg shadow-slate-950/40 transition hover:border-amber-300 sm:text-sm"
          >
            <span
              className={`rounded-lg px-2 py-1.5 transition sm:px-3 ${
                lang === 'en' ? 'bg-amber-300 text-slate-950' : 'text-amber-200 group-hover:text-amber-100'
              }`}
            >
              ENG
            </span>
            <span
              className={`rounded-lg px-2 py-1.5 transition sm:px-3 ${
                lang === 'ur' ? 'bg-amber-300 text-slate-950' : 'text-amber-200 group-hover:text-amber-100'
              }`}
            >
              اردو
            </span>
          </button>

          <button
            type="button"
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border shadow-sm transition md:hidden ${
              mobileOpen
                ? 'border-amber-300/80 bg-amber-300/20 text-amber-200 ring-2 ring-amber-300/40'
                : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
            }`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? (isUr ? 'مینو بند کریں' : 'Close menu') : isUr ? 'مینو کھولیں' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <div
          className="fixed inset-0 z-[100] md:hidden"
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label={isUr ? 'مینو' : 'Menu'}
        >
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            aria-hidden
            onClick={() => setMobileOpen(false)}
          />
          <nav
            className={`absolute start-0 end-0 top-0 z-10 max-h-[90vh] overflow-y-auto border-b border-white/10 bg-slate-950/98 px-4 pb-6 pt-[4.75rem] shadow-2xl ${
              isUr ? 'text-end' : 'text-start'
            }`}
            dir={isUr ? 'rtl' : 'ltr'}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto flex max-w-md flex-col gap-1">
              {navItems.map((item) => {
                const active = navLinkActive(pathname, item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`${linkClass(active)} block w-full`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {lang === 'en' ? item.en : item.ur}
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
