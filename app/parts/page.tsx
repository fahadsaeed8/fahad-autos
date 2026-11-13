'use client'

import Image from 'next/image'
import { GlowEllipse } from '@/app/components/motion'
import Link from 'next/link'
import { brand } from '@/app/lib/brand'
import { PART_CATEGORIES } from '@/app/lib/parts-data'
import { imageForPart } from '@/app/lib/site-images'
import { useLanguage } from '@/app/lib/language-context'

const manufactured = PART_CATEGORIES.find((part) => part.id === 'top-lift-link')

export default function PartsPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const poster = isUr ? '' : 'font-poster uppercase tracking-[0.02em]'

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
              ? `فیاٹ، میسی، فورڈ کے لوکل پارٹس، انجن، ہائیڈرولک، لنکیج، کلچ، بریک، بجلی، پی ٹی او، کولنگ، کھیت اور ایرگیشن سے جڑے آئٹمز، ٹائر اور ہول سیل سپلائی۔ تیار شدہ ٹاپ لنک اور لنکیج برانڈ ${brand.manufacturingUr} کے تحت ہیں۔`
              : `Fiat, Massey and Ford local parts: engine, hydraulics, linkage, clutch, brakes, electrical, PTO, cooling, field & irrigation items, tyres, belts and wholesale supply. Manufactured Top Link and linkage are supplied under ${brand.manufacturingEn}.`}
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

        {manufactured ? (
          <div className="mt-14">
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">
              {isUr ? brand.manufacturingUr : brand.manufacturingEn}
            </p>
            <h2
              className={`mt-3 text-[#F4F0E6] ${poster} ${isUr ? 'text-4xl' : 'text-5xl'} leading-none`}
              style={isUr ? { lineHeight: 1.7 } : undefined}
            >
              {isUr ? 'تیار شدہ پارٹس' : 'Manufactured parts'}
            </h2>
            <p className="mt-4 max-w-3xl font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
              {isUr
                ? 'ہر تصویر پر فہد کا پارٹ نمبر لکھا ہے۔ خریدار تصویر اور نمبر دیکھ کر پارٹ پکڑ سکتا ہے۔ فیاٹ، میسی یا نیو ہالینڈ کا OEM نمبر کوٹیشن پر اسی پارٹ سے ملایا جاتا ہے۔'
                : 'The number on each photo is the Fahad part number. A buyer can point to the photo and the number. A Fiat, Massey or New Holland OEM number is matched to that part on the quotation.'}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {manufactured.items.map((item) => (
                <Link
                  key={item.en}
                  href={`/parts/top-lift-link#${item.partNo ?? item.en}`}
                  className="group overflow-hidden rounded-[22px] border border-[#B8923D]/40 bg-[#161616] transition duration-500 hover:-translate-y-2 hover:border-[#F5E8C8]"
                >
                  <div className="relative h-64">
                    <Image
                      src={item.image ?? '/parts/top-link.jpg'}
                      alt={isUr ? item.ur : item.en}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                      style={{ objectPosition: item.focus ?? 'center' }}
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/15 to-transparent" />
                    <span className="absolute bottom-3 start-3 rounded-xl border border-[#F5E8C8]/50 bg-[#1A1408]/85 px-3 py-2 shadow-lg">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#B8923D]">
                        {isUr ? 'پارٹ نمبر' : 'Part no.'}
                      </span>
                      <span className="mt-0.5 block font-poster text-3xl leading-none tracking-wide text-[#F5E8C8]">
                        {item.partNo}
                      </span>
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className={`text-[#F4F0E6] ${poster} text-2xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
                      {isUr ? item.ur : item.en}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
                      {isUr ? item.descUr : item.descEn}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </main>
  )
}
