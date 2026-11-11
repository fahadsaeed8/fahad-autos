'use client'

import Image from 'next/image'
import { GlowEllipse } from '@/app/components/motion'
import Link from 'next/link'
import { PART_CATEGORIES } from '@/app/lib/parts-data'
import { imageForPart } from '@/app/lib/site-images'
import { useLanguage } from '@/app/lib/language-context'

export default function PartsPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#F4F0E6]">
      <section className="relative overflow-hidden px-8 pb-6 pt-28 md:px-14 md:pt-32 lg:px-20">
        <GlowEllipse />
        <div className="relative z-10 mx-auto max-w-8xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">
            {isUr ? 'اسٹاک' : 'The stock'}
          </p>
          <h1
            className={`mt-3 text-[#F4F0E6] ${isUr ? 'text-5xl' : 'font-poster text-6xl uppercase tracking-[0.02em] md:text-7xl'} leading-none`}
            style={isUr ? { lineHeight: 1.7 } : undefined}
          >
            {isUr ? 'ٹریکٹر پارٹس' : 'Tractor Parts'}
          </h1>
          <p className={`max-w-3xl font-mono text-sm leading-7 text-[#A39B90] ${isUr ? 'mt-5' : 'mt-4'}`} dir={isUr ? 'rtl' : 'ltr'} style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr
              ? 'فیاٹ، میسی، فورڈ کے لوکل پارٹس، انجن، ہائیڈرولک، لنکیج، کلچ، بریک، بجلی، پی ٹی او، کولنگ، کھیت اور ایرگیشن سے جڑے آئٹمز، ٹائر اور ہول سیل سپلائی۔'
              : 'Fiat, Massey and Ford local parts: engine, hydraulics, linkage, clutch, brakes, electrical, PTO, cooling, field & irrigation items, tyres, belts and wholesale supply.'}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-8 py-10 md:px-14 lg:px-20">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {PART_CATEGORIES.map((part) => {
            const img = imageForPart(part.id)
            const label = isUr ? `${part.primaryUr} ${part.accentUr}` : `${part.primaryEn} ${part.accentEn}`
            return (
              <Link
                key={part.id}
                href={`/parts/${part.id}`}
                className="group relative block h-72 overflow-hidden rounded-[22px] border border-white/15 transition duration-500 hover:-translate-y-2 hover:border-[#B8923D]"
              >
                <Image
                  src={img}
                  alt={label}
                  width={1200}
                  height={800}
                  className="slow-zoom absolute inset-0 h-full w-full object-cover"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/10 via-[#8A6B25]/30 to-[#0c0c0c]/95" />
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#B8923D] to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <h2
                    className={`text-[#F4F0E6] ${isUr ? 'text-2xl' : 'font-poster text-3xl uppercase tracking-[0.02em]'} leading-none`}
                    style={isUr ? { lineHeight: 1.7 } : undefined}
                  >
                    {label}
                  </h2>
                  <p className="mt-2 line-clamp-2 font-mono text-xs leading-5 text-[#F4F0E6]/80" dir={isUr ? 'rtl' : 'ltr'} style={isUr ? { lineHeight: 1.9 } : undefined}>
                    {isUr ? part.descUr : part.descEn}
                  </p>
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
