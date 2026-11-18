'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { GlowEllipse } from '@/app/components/motion'
import ShopCards from '@/app/components/shop-card'
import SiteFooter from '@/app/components/site-footer'
import { brand } from '@/app/lib/brand'
import { useLanguage } from '@/app/lib/language-context'

const supply = [
  { en: 'Fiat local parts', ur: 'فیاٹ لوکل پارٹس' },
  { en: 'Massey local parts', ur: 'میسی لوکل پارٹس' },
  { en: 'Ford local parts', ur: 'فورڈ لوکل پارٹس' },
  { en: 'New Holland parts', ur: 'نیو ہالینڈ پارٹس' },
  { en: 'Top Link, made here', ur: 'ٹاپ لنک، یہیں بنتا ہے' },
  { en: 'Lift Link', ur: 'لفٹ لنک' },
  { en: 'All tractor parts', ur: 'ٹریکٹر کے تمام پارٹس' },
  { en: 'Lahore, 25 years', ur: 'لاہور، ۲۵ سال' },
]

const work = [
  {
    en: 'Fiat, Massey and Ford local parts',
    ur: 'فیاٹ، میسی اور فورڈ کے لوکل پارٹس',
    detailEn: 'The part is matched to the tractor model before a rate is given.',
    detailUr: 'ریٹ دینے سے پہلے پارٹ ٹریکٹر کے ماڈل سے ملایا جاتا ہے۔',
  },
  {
    en: 'Wholesale rates and export packing',
    ur: 'ہول سیل ریٹ اور ایکسپورٹ پیکنگ',
    detailEn: 'Stock, quality and packing are confirmed before the price is sent.',
    detailUr: 'قیمت بھیجنے سے پہلے اسٹاک، کوالٹی اور پیکنگ کنفرم کی جاتی ہے۔',
  },
  {
    en: 'Written quotations',
    ur: 'تحریری کوٹیشن',
    detailEn: 'Importers, distributors and workshops get the rate in writing.',
    detailUr: 'درآمدکنندگان، ڈسٹری بیوٹرز اور ورکشاپس کو ریٹ تحریر میں ملتا ہے۔',
  },
]

const pages = [
  {
    href: '/catalogue',
    en: 'Catalogue',
    ur: 'کیٹلاگ',
    src: '/parts/top-link.jpg',
    altEn: 'Top link, with its handle.',
    altUr: 'ٹاپ لنک، ہینڈل کے ساتھ۔',
    lineEn: 'FTA-01 to FTA-97. Number and name on each line.',
    lineUr: 'FTA-01 سے FTA-97۔ ہر لائن پر نمبر اور نام۔',
  },
  {
    href: '/services',
    en: 'Services',
    ur: 'سروسز',
    src: '/parts/hydraulic.jpg',
    altEn: 'Hydraulic pump, lift cylinder and hose.',
    altUr: 'ہائیڈرولک پمپ، لفٹ سلنڈر اور ہوز۔',
    lineEn: 'Wholesale, manufacturing, and a written rate.',
    lineUr: 'ہول سیل، مینوفیکچرنگ، اور تحریری ریٹ۔',
  },
  {
    href: '/gallery',
    en: 'Gallery',
    ur: 'گیلری',
    src: '/gallery/field.jpg',
    altEn: 'Tractor in a field.',
    altUr: 'کھیت میں ٹریکٹر۔',
    lineEn: 'Tractors, fields, linkage and harvest.',
    lineUr: 'ٹریکٹر، کھیت، لنکیج اور کٹائی۔',
  },
  {
    href: '/about',
    en: 'About',
    ur: 'ہمارے بارے میں',
    src: '/gallery/linkage.jpg',
    altEn: 'Linkage on the tractor.',
    altUr: 'ٹریکٹر پر لنکیج۔',
    lineEn: 'Haji Saeed. 25 years. Badami Bagh, Lahore.',
    lineUr: 'حاجی سعید۔ ۲۵ سال۔ بادامی باغ، لاہور۔',
  },
  {
    href: '/contact',
    en: 'Contact',
    ur: 'رابطہ',
    src: '/gallery/machinery.jpg',
    altEn: 'Engine close-up.',
    altUr: 'انجن قریب سے۔',
    lineEn: '0313-4426717 · 0321-4964013 · Shop 43, Ramzan Chamber.',
    lineUr: '0313-4426717 · 0321-4964013 · دکان 43، رمضان چیمبر۔',
  },
]

const steps = [
  {
    enTitle: 'Send the parts list',
    urTitle: 'پارٹس لسٹ بھیجیں',
    enText: 'Brand, model, part name and quantity. A photo of the old part helps.',
    urText: 'برانڈ، ماڈل، پارٹ کا نام اور تعداد۔ پرانے پارٹ کی تصویر مدد کرتی ہے۔',
  },
  {
    enTitle: 'Stock, quality and price',
    urTitle: 'اسٹاک، کوالٹی اور قیمت',
    enText: 'We confirm what is in stock, the quality, and the wholesale or retail rate.',
    urText: 'ہم اسٹاک، کوالٹی اور ہول سیل یا ریٹیل ریٹ کنفرم کرتے ہیں۔',
  },
  {
    enTitle: 'Packing and shipment',
    urTitle: 'پیکنگ اور شپمنٹ',
    enText: 'After the order, packing is done at the shop and shipment goes with your forwarder.',
    urText: 'آرڈر کے بعد پیکنگ دکان پر ہوتی ہے اور شپمنٹ آپ کے فارورڈر کے ساتھ جاتی ہے۔',
  },
]

export default function Home() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const poster = isUr ? '' : 'font-poster uppercase tracking-[0.02em]'
  const trackRef = useRef<HTMLDivElement>(null)
  const dashRef = useRef<HTMLDivElement>(null)
  const postRef = useRef<HTMLDivElement>(null)
  const rearRef = useRef<SVGGElement>(null)
  const frontRef = useRef<SVGGElement>(null)
  const tractorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const html = document.documentElement
    const previousHtml = html.style.overflow
    const previousBody = document.body.style.overflow
    const stackQuery = window.matchMedia('(max-width: 1023px)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const stacked = () => stackQuery.matches
    let target = 0
    let current = 0
    let frame = 0

    const limit = () =>
      stacked()
        ? Math.max(0, html.scrollHeight - window.innerHeight)
        : Math.max(0, (trackRef.current?.scrollWidth ?? 0) - window.innerWidth)

    const paint = (x: number) => {
      if (trackRef.current) {
        trackRef.current.style.transform = stacked() ? 'none' : `translate3d(${-x}px,0,0)`
      }
      if (dashRef.current) dashRef.current.style.transform = `translate3d(${-(x * 2.4)}px,0,0)`
      if (postRef.current) postRef.current.style.transform = `translate3d(${-(x * 3.1)}px,0,0)`
      const spin = reduce ? 0 : x * 0.55
      if (rearRef.current) rearRef.current.style.transform = `rotate(${spin}deg)`
      if (frontRef.current) frontRef.current.style.transform = `rotate(${spin * 1.7}deg)`
      if (tractorRef.current) {
        const max = limit()
        const progress = max === 0 ? 0 : Math.min(1, Math.max(0, x / max))
        const width = tractorRef.current.offsetWidth || 132
        const narrow = window.innerWidth < 720
        const start = narrow ? 12 : 36
        const end = Math.max(start, window.innerWidth - width - (narrow ? 16 : 72))
        tractorRef.current.style.left = `${start + (end - start) * progress}px`
      }
    }

    const tick = () => {
      if (stacked()) {
        paint(window.scrollY)
      } else {
        current += (target - current) * (reduce ? 1 : 0.14)
        if (Math.abs(target - current) < 0.5) current = target
        paint(current)
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    const move = (delta: number) => {
      target = Math.min(limit(), Math.max(0, target + delta))
    }

    const onWheel = (event: WheelEvent) => {
      if (stacked()) return
      event.preventDefault()
      const line = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1
      move(event.deltaY * line + event.deltaX * line)
    }

    let lastTouch = 0
    const onTouchStart = (event: TouchEvent) => {
      lastTouch = event.touches[0].clientX
    }
    const onTouchMove = (event: TouchEvent) => {
      if (stacked()) return
      const x = event.touches[0].clientX
      move(lastTouch - x)
      lastTouch = x
      event.preventDefault()
    }

    const onKey = (event: KeyboardEvent) => {
      if (stacked()) return
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight' || event.key === 'PageDown') {
        event.preventDefault()
        move(window.innerWidth * 0.9)
      }
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault()
        move(-window.innerWidth * 0.9)
      }
    }

    const lock = () => {
      if (stacked()) {
        html.style.overflow = previousHtml
        document.body.style.overflow = previousBody
        target = 0
        current = 0
        if (trackRef.current) trackRef.current.style.transform = 'none'
      } else {
        html.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
      }
    }

    const onResize = () => {
      lock()
      if (!stacked()) move(0)
    }
    lock()
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    stackQuery.addEventListener('change', onResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      stackQuery.removeEventListener('change', onResize)
      html.style.overflow = previousHtml
      document.body.style.overflow = previousBody
    }
  }, [])

  return (
    <main className="home-stage fixed inset-0 overflow-hidden bg-[#0c0c0c] text-[#F4F0E6]">
      <div ref={trackRef} className="home-track flex h-full will-change-transform">
        <section className="home-panel home-hero relative flex h-full w-screen shrink-0 items-center overflow-hidden">
          <GlowEllipse />
          <p
            aria-hidden
            className="stroke-pulse pointer-events-none absolute left-[34%] top-1/2 hidden -translate-y-1/2 font-poster text-[14rem] uppercase leading-none tracking-wide text-transparent lg:block"
            style={{ WebkitTextStroke: '1px rgba(184,146,61,0.28)' }}
          >
            Parts
          </p>
          <div className="home-hero-grid relative z-10 mx-auto grid w-full max-w-8xl items-center gap-8 px-8 pb-28 pt-28 md:px-14 lg:grid-cols-2 lg:px-20">
            <div className="min-w-0" style={{ containerType: 'inline-size' }}>
              <p className="max-w-full break-words font-mono text-[11px] uppercase tracking-[0.12em] text-[#B8923D] sm:text-[13px] sm:tracking-[0.18em]">
                {isUr ? brand.channelsUr : brand.channelsEn}
              </p>
              <h1
                className={`home-title mt-3 text-[#F4F0E6] ${poster} ${isUr ? 'text-[clamp(2.4rem,8vw,4.5rem)]' : 'text-[clamp(3rem,7vw,6.5rem)] leading-[0.88]'}`}
                style={isUr ? { lineHeight: 1.6 } : undefined}
              >
                {isUr ? (
                  'فہد ٹریکٹرز اینڈ آٹوز'
                ) : (
                  <>
                    <span className="block">Fahad</span>
                    <span className="block text-[#B8923D]">Tractors</span>
                    <span className="block text-transparent" style={{ WebkitTextStroke: '0.035em #6d645e' }}>
                      and Autos
                    </span>
                  </>
                )}
              </h1>
              <p className="mt-4 max-w-full break-words font-mono text-sm leading-7 text-[#A39B90] sm:max-w-xl">{isUr ? brand.lineUr : brand.lineEn}</p>
              <p className="mt-2 font-mono text-sm text-[#F5E8C8]">{isUr ? brand.yearsUr : brand.yearsEn}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/catalogue"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#F5E8C8]/70 bg-gradient-to-br from-[#F5E8C8] via-[#C6A04A] to-[#8A6B25] px-6 text-sm font-semibold text-[#1A1408] max-sm:w-full"
                >
                  {isUr ? 'کیٹلاگ کھولیں' : 'Open the catalogue'}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#B8923D]/50 px-6 text-sm font-semibold text-[#F4F0E6] hover:border-[#F5E8C8] hover:text-[#F5E8C8] max-sm:w-full"
                >
                  {isUr ? 'کوٹیشن مانگیں' : 'Request a quotation'}
                </Link>
              </div>
            </div>
            <div className="relative min-w-0">
              <ShopCards isUr={isUr} />
            </div>
          </div>
        </section>

        <section className="home-panel flex h-full shrink-0 items-center overflow-hidden px-8 pb-28 pt-28 md:px-14">
          <div className="home-pages-wrap flex items-stretch gap-4">
            <div className="home-pages-intro flex w-56 shrink-0 flex-col justify-center">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">{isUr ? 'صفحات' : 'Pages'}</p>
              <h2
                className={`home-stack-title mt-2 text-[#F4F0E6] ${poster} ${isUr ? 'text-4xl' : 'text-5xl'} leading-none`}
                style={isUr ? { lineHeight: 1.6 } : undefined}
              >
                {isUr ? 'صفحہ کھولیں' : 'Open a page'}
              </h2>
            </div>
            <div className="home-cards contents">
            {pages.map((page) => (
              <article key={page.href} className="home-card relative flex w-72 shrink-0 flex-col overflow-hidden rounded-[22px] border border-white/15 bg-[#161616] shadow-[0_18px_40px_-24px_rgba(0,0,0,0.8)]">
                <span className="absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r from-[#F5E8C8] via-[#B8923D] to-transparent" />
                <img src={page.src} alt={isUr ? page.altUr : page.altEn} className="h-40 w-full object-cover" />
                <div className="flex flex-1 flex-col px-4 py-4">
                  <p className={`text-2xl text-[#F5E8C8] ${isUr ? '' : 'font-poster uppercase'}`} style={isUr ? { lineHeight: 1.6 } : undefined}>
                    {isUr ? page.ur : page.en}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-[#A39B90]" style={isUr ? { lineHeight: 1.8 } : undefined}>
                    {isUr ? page.lineUr : page.lineEn}
                  </p>
                  <Link
                    href={page.href}
                    className="mt-4 inline-flex min-h-10 w-fit items-center rounded-full bg-gradient-to-br from-[#F5E8C8] via-[#C6A04A] to-[#8A6B25] px-5 text-sm font-semibold text-[#1A1408]"
                  >
                    {isUr ? 'کھولیں' : 'Open'}
                  </Link>
                </div>
              </article>
            ))}
            </div>
          </div>
        </section>

        <section className="home-panel flex h-full w-screen shrink-0 items-center overflow-hidden">
          <div className="home-block mx-auto w-full max-w-8xl px-8 pb-28 pt-28 md:px-14 lg:px-20">
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">{isUr ? 'دکان' : 'The shop'}</p>
            <h2
              className={`home-stack-title mt-2 max-w-3xl text-[#F4F0E6] ${poster} ${isUr ? 'text-4xl' : 'text-5xl md:text-6xl'} leading-none`}
              style={isUr ? { lineHeight: 1.6 } : undefined}
            >
              {isUr ? 'فیاٹ، میسی، فورڈ اور ٹاپ لنک' : 'Fiat, Massey, Ford and Top Link'}
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:grid-cols-4">
              {supply.map((item) => (
                <li key={item.en} className="rounded-xl border border-white/10 bg-[#161616] px-3 py-3 text-sm text-[#F4F0E6]">
                  {isUr ? item.ur : item.en}
                </li>
              ))}
            </ul>
            <ul className="mt-4 grid gap-3 lg:grid-cols-3">
              {work.map((item) => (
                <li key={item.en} className="rounded-2xl border border-[#B8923D]/30 bg-[#161616] px-4 py-3">
                  <p className="text-sm font-semibold text-[#F5E8C8]" style={isUr ? { lineHeight: 1.7 } : undefined}>
                    {isUr ? item.ur : item.en}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#A39B90]" style={isUr ? { lineHeight: 1.8 } : undefined}>
                    {isUr ? item.detailUr : item.detailEn}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="home-panel flex h-full w-screen shrink-0 items-center overflow-hidden">
          <div className="home-block mx-auto w-full max-w-8xl px-8 pb-28 pt-28 md:px-14 lg:px-20">
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">{isUr ? 'آرڈر' : 'An order'}</p>
            <h2
              className={`home-stack-title mt-2 max-w-3xl text-[#F4F0E6] ${poster} ${isUr ? 'text-4xl' : 'text-5xl md:text-6xl'} leading-none`}
              style={isUr ? { lineHeight: 1.6 } : undefined}
            >
              {isUr ? 'لسٹ بھیجیں، ریٹ لکھ کر آئے' : 'Send the list. The rate comes in writing.'}
            </h2>
            <ol className="mt-6 grid gap-3 lg:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.enTitle} className="rounded-2xl border border-white/10 bg-[#161616] px-4 py-4">
                  <p className="font-mono text-xs text-[#B8923D]">0{index + 1}</p>
                  <p className="mt-1 text-sm font-semibold text-[#F5E8C8]" style={isUr ? { lineHeight: 1.7 } : undefined}>
                    {isUr ? step.urTitle : step.enTitle}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#A39B90]" style={isUr ? { lineHeight: 1.8 } : undefined}>
                    {isUr ? step.urText : step.enText}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-5 max-w-3xl text-sm font-semibold leading-6 text-[#F5E8C8]" style={isUr ? { lineHeight: 1.8 } : undefined}>
              {isUr
                ? 'فہرست میں نہ ہو تو ہم بنا سکتے ہیں۔ پروڈکٹ بتا دیں۔'
                : 'If a part is not in this list, we can make it. Tell us the product.'}
            </p>
          </div>
        </section>

        <section className="home-panel home-end flex h-full w-screen shrink-0 items-end overflow-hidden pb-28">
          <div className="w-full">
            <SiteFooter compact />
          </div>
        </section>
      </div>

      <div className="home-road pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[108px] overflow-hidden" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-7 bg-gradient-to-b from-[#1a2418] to-[#2f4a28]">
          <div
            ref={postRef}
            className="absolute bottom-0 left-0 h-full w-[360%]"
            style={{
              backgroundImage:
                'linear-gradient(#1d3a22 0 0), linear-gradient(#3d6b34 0 0)',
              backgroundRepeat: 'repeat-x',
              backgroundSize: '8px 14px, 18px 8px',
              backgroundPosition: '12px 100%, 6px 100%',
            }}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 top-7 bg-[#2c2c2c]">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#e8e4dc]" />
          <div className="absolute inset-x-0 top-1.5 h-1 bg-[#c45c26]" />
          <div
            ref={dashRef}
            className="absolute left-0 top-1/2 h-1.5 w-[300%] -translate-y-1/2"
            style={{ backgroundImage: 'repeating-linear-gradient(90deg, #f4f0e6 0 28px, transparent 28px 56px)' }}
          />
          <div className="absolute inset-x-0 bottom-1.5 h-1 bg-[#c45c26]" />
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#e8e4dc]" />
        </div>
        <div ref={tractorRef} className="home-tractor tractor-bob absolute bottom-2 left-9 h-[78px] w-[132px]">
          <span className="road-puff absolute bottom-2 -left-3 h-2 w-2 rounded-full bg-[#d9d3c7]/80" />
          <span className="road-puff absolute bottom-3 -left-6 h-2.5 w-2.5 rounded-full bg-[#a39b90]/70 [animation-delay:0.3s]" />
          <span className="headlamp absolute left-[90%] top-[48%] h-2 w-12 rounded-full bg-[#fff6d8] blur-[1px]" />
          <svg viewBox="0 0 128 78" className="h-full w-full drop-shadow-[0_4px_0_rgba(0,0,0,0.35)]">
            <g ref={rearRef} style={{ transformOrigin: '34px 56px', transformBox: 'view-box' }}>
              <circle cx="34" cy="56" r="20" fill="#111827" />
              <circle cx="34" cy="56" r="11" fill="#9ca3af" />
              <path d="M34 46v20M24 56h20M27 49l14 14M27 63L41 49" stroke="#111827" strokeWidth="1.5" />
              <circle cx="34" cy="56" r="4" fill="#f8fafc" />
            </g>
            <g ref={frontRef} style={{ transformOrigin: '102px 58px', transformBox: 'view-box' }}>
              <circle cx="102" cy="58" r="12" fill="#111827" />
              <circle cx="102" cy="58" r="6.5" fill="#9ca3af" />
              <path d="M102 52.5v11M96.5 58h11" stroke="#111827" strokeWidth="1.2" />
            </g>
            <path d="M22 48h48l8-16h26v16h12v10H90" fill="#f59e0b" />
            <path d="M50 22h28l6 12H54z" fill="#b45309" />
            <path d="M58 26h14v8H58z" fill="#e0f2fe" />
            <rect x="44" y="10" width="5" height="16" rx="1.5" fill="#334155" />
          </svg>
        </div>
      </div>
    </main>
  )
}
