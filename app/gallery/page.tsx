'use client'

import Image from 'next/image'
import { GlowEllipse } from '@/app/components/motion'
import Link from 'next/link'
import { brand } from '@/app/lib/brand'
import { galleryImages } from '@/app/lib/site-images'
import { useLanguage } from '@/app/lib/language-context'

const captions = [
  { en: 'Field fleet', ur: 'کھیت میں ٹریکٹر' },
  { en: 'Hydraulic parts', ur: 'ہائیڈرولک پارٹس' },
  { en: 'Engine close-up', ur: 'انجن قریب سے' },
  { en: 'Irrigation', ur: 'آبپاشی' },
  { en: 'Three-point linkage', ur: 'تھری پوائنٹ لنکیج' },
  { en: 'Harvest', ur: 'فصل کی کٹائی' },
] as const

export default function GalleryPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const poster = isUr ? '' : 'font-poster uppercase tracking-[0.02em]'

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#F4F0E6]">
      <section className="relative overflow-hidden px-8 pb-6 pt-28 md:px-14 md:pt-32 lg:px-20">
        <GlowEllipse />
        <div className="relative z-10 mx-auto max-w-8xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">{isUr ? 'مناظر' : 'The scenes'}</p>
          <h1
            className={`mt-3 max-w-3xl text-[#F4F0E6] ${poster} ${isUr ? 'text-5xl' : 'text-6xl md:text-7xl'} leading-none`}
            style={isUr ? { lineHeight: 1.7 } : undefined}
          >
            {isUr ? 'تصویری گیلری' : 'Visual gallery'}
          </h1>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr
              ? 'ٹریکٹر، کھیت اور ورکشاپ کے مناظر: وہ ماحول جہاں فیاٹ، میسی، فورڈ کے لوکل پارٹس اور ٹاپ یا لفٹ لنک کی اصل ضرورت پڑتی ہے۔'
              : 'Tractors, fields and workshops: the environment where Fiat, Massey, Ford local parts and Top or Lift Link demand really lives.'}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-8 pb-16 md:px-14 lg:px-20">
        <article className="relative mb-4 overflow-hidden rounded-[22px] border border-[#B8923D]/40 bg-[#161616] p-5">
          <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#F5E8C8] via-[#B8923D] to-transparent" />
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">{isUr ? 'نوٹ' : 'Note'}</p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#F4F0E6]" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr
              ? 'ہر تصویر اپنے عنوان کے مطابق ہے۔ یہ دکان کی تصاویر نہیں۔ دکان رمضان چیمبر، بادامی باغ، لاہور میں ہے۔'
              : 'Each photograph matches its caption. These are not photographs of the shop. The shop is in Ramzan Chamber, Badami Bagh, Lahore.'}
          </p>
        </article>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-12">
          {captions.map((caption, index) => (
            <GalleryTile
              key={caption.en}
              src={galleryImages[index]}
              alt={isUr ? caption.ur : caption.en}
              label={isUr ? caption.ur : caption.en}
              isUr={isUr}
              featured={index === 0}
              className={
                index === 0
                  ? 'md:col-span-8 md:row-span-2'
                  : index === 1
                    ? 'h-52 md:col-span-4 md:col-start-9 md:row-start-1 md:h-full md:min-h-[188px]'
                    : index === 2
                      ? 'h-52 md:col-span-4 md:col-start-9 md:row-start-2 md:h-full md:min-h-[188px]'
                      : index === 3
                        ? 'h-52 md:col-span-4 md:row-start-3 md:min-h-[200px]'
                        : index === 4
                          ? 'h-52 md:col-span-4 md:col-start-5 md:row-start-3 md:min-h-[200px]'
                          : 'h-52 md:col-span-4 md:col-start-9 md:row-start-3 md:min-h-[200px]'
              }
            />
          ))}
        </div>

        <article className="relative mt-4 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#8A6B25] via-[#B8923D] to-[#D9B96A] p-6 text-[#1A1408] md:flex md:items-center md:justify-between md:gap-8">
          <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-white/70 to-transparent" />
          <div>
            <p className={`${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
              {isUr ? 'اصل پارٹ، ماڈل اور ریٹ کے لیے رابطہ کریں' : 'Real parts, models and rates'}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#1A1408]/80" style={isUr ? { lineHeight: 1.9 } : undefined}>
              {isUr
                ? 'گیلری صرف ماحول ہے۔ درست فٹنگ اور اسٹاک کے لیے رابطہ یا پارٹس کا صفحہ استعمال کریں۔'
                : 'The gallery sets the scene. Use contact or parts for correct fitting and stock.'}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
            <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-[#1A1408] px-6 text-sm font-semibold text-[#F5E8C8]">
              {isUr ? 'رابطہ' : 'Contact'}
            </Link>
            <Link href="/parts" className="inline-flex min-h-12 items-center rounded-full border border-[#1A1408]/30 px-6 text-sm font-semibold text-[#1A1408]">
              {isUr ? 'پارٹس کی فہرست' : 'Browse parts'}
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}

function GalleryTile({
  src,
  alt,
  label,
  className,
  featured,
  isUr,
}: {
  src: string
  alt: string
  label: string
  className?: string
  featured?: boolean
  isUr?: boolean
}) {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-[22px] border border-white/15 bg-[#161616] ${featured ? 'min-h-[260px] md:min-h-[380px]' : 'min-h-[200px]'} ${className ?? ''}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="slow-zoom object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/10 via-[#8A6B25]/25 to-[#0c0c0c]/90" />
      <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#B8923D] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className={`text-2xl text-[#F4F0E6] ${isUr ? '' : 'font-poster uppercase tracking-[0.02em]'}`} style={isUr ? { lineHeight: 1.7 } : undefined}>
          {label}
        </p>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-[#F5E8C8]/80">{brand.en}</p>
      </div>
    </div>
  )
}
