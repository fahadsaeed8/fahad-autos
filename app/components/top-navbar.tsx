'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import LanguageMenu from '@/app/components/language-menu'
import ThemeToggle from '@/app/components/theme-toggle'
import { GlowEllipse } from '@/app/components/motion'
import { useLanguage } from '@/app/lib/language-context'

function navLinkActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

/** Match each page’s first hero so the fixed bar doesn’t look like a separate grey strip. */
function idleHeaderSurface() {
  return 'border-b-2 border-[#B8923D] bg-[#0c0c0c]'
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
  const { lang } = useLanguage()
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

  /** Top: same solid treatment as the hero below; after scroll (or mobile menu open): compact dark bar. */
  const headerSurface =
    isScrolled || mobileOpen
      ? 'border-b-2 border-[#B8923D] bg-[#0c0c0c] shadow-md shadow-black/40'
      : idleHeaderSurface()

  const logoSizes = isScrolled
    ? 'h-14 w-auto max-w-[min(72vw,280px)] sm:max-w-[300px] md:h-16 md:max-w-[300px]'
    : 'h-[4.25rem] w-auto max-w-[min(78vw,320px)] sm:h-[4.75rem] sm:max-w-[340px] md:h-24 md:max-w-[380px]'

  const linkClass = (active: boolean) =>
    `rounded-lg px-4 py-3 text-base font-semibold transition duration-200 ease-out md:px-3 md:py-2 ${
      active
        ? 'bg-[#B8923D]/20 text-[#F5E8C8] ring-1 ring-[#B8923D]/60'
        : 'text-[#F4F0E6] hover:bg-white/10 hover:text-[#F5E8C8]'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 transition-all duration-300 ${mobileOpen ? 'z-[200]' : 'z-50'} ${headerSurface}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <GlowEllipse place="header" />
      </div>
      {/* Stays above the dim overlay so menu / close controls stay visible on every page */}
      <div
        className={`relative mx-auto flex w-full max-w-8xl items-center justify-between gap-2 px-8 transition-all duration-300 sm:gap-3 md:px-14 lg:px-20 ${
          mobileOpen ? 'z-[210]' : ''
        } ${isScrolled ? 'py-2' : 'py-2'}`}
      >
        {/* Logo: start side (left in EN LTR, right in UR RTL). Larger on small screens. */}
        <Link
          href="/"
          className="relative z-0 flex min-w-0 shrink items-center justify-start"
        >
          <Image
            src="/new-logo.png"
            alt="Fahad Tractor Parts and Services logo"
            width={420}
            height={130}
            priority
            className={`object-contain object-start ${logoSizes}`}
          />
        </Link>

        <nav
          className="absolute left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 md:flex md:gap-3"
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
        <div className="relative z-30 flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
          <ThemeToggle />
          <LanguageMenu />

          <button
            type="button"
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 shadow-md transition duration-200 active:scale-95 md:hidden ${
              mobileOpen
                ? 'border-amber-400 bg-slate-900 text-white shadow-amber-900/40 ring-2 ring-amber-400/50'
                : isScrolled
                  ? 'border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-50'
                  : 'border-white/25 bg-white/10 text-white hover:bg-white/20'
            }`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? (isUr ? 'مینو بند کریں' : 'Close menu') : isUr ? 'مینو کھولیں' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <svg className="h-7 w-7 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.75} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className={`h-6 w-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-[180] md:hidden"
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label={isUr ? 'مینو' : 'Menu'}
            >
              <button
                type="button"
                className="absolute inset-0 bg-[#0c0c0c]/80"
                aria-label={isUr ? 'مینو بند کریں' : 'Close menu'}
                onClick={() => setMobileOpen(false)}
              />
              <nav
                className={`absolute start-4 end-4 top-24 z-10 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[22px] border border-[#B8923D]/40 bg-[#161616] p-3 shadow-2xl ${
                  isUr ? 'text-end' : 'text-start'
                }`}
                dir={isUr ? 'rtl' : 'ltr'}
              >
                <div className="flex flex-col gap-1">
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
            </div>,
            document.body,
          )
        : null}
    </header>
  )
}
