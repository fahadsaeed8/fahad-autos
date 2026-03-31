'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/app/components/section-heading'
import { galleryImages } from '@/app/lib/site-images'
import { useLanguage } from '@/app/lib/language-context'

const captions = [
  { en: 'Field & fleet', ur: 'کھیت اور فلیٹ' },
  { en: 'Hydraulics & power', ur: 'ہائیڈرولک اور پاور' },
  { en: 'Machinery up close', ur: 'مشینری قریب سے' },
  { en: 'Irrigation & land', ur: 'آبپاشی اور زمین' },
  { en: 'Linkage context', ur: 'لنکیج ماحول' },
  { en: 'Seasonal farming', ur: 'موسمی کاشت' },
] as const

export default function GalleryPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero: purpose + title */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(56,189,248,0.25),transparent)]" />
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 text-center md:px-8 md:pb-20 md:pt-20">
          <div className="mx-auto mb-8 inline-flex max-w-2xl flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-cyan-100/95 backdrop-blur-md md:flex-row md:items-center md:justify-center md:gap-3 md:text-start">
            <span className="inline-flex shrink-0 items-center justify-center rounded-lg bg-amber-400/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-slate-950">
              {isUr ? 'کیوں' : 'Why'}
            </span>
            <p className="leading-relaxed" dir={isUr ? 'rtl' : 'ltr'}>
              {isUr
                ? 'یہ صفحہ پارٹس کی لسٹ نہیں، بلکہ ویب سائٹ پر بھروسہ اور ماحول دکھانے کے لیے ہے تاکہ کسان اور ڈیلر دیکھ سکیں ہم کس دنیا کی بات کرتے ہیں۔'
                : 'This page is not a parts list. It is here to show atmosphere and trust: a quick visual of the farming and workshop world our stock is built for.'}
            </p>
          </div>

          <SectionHeading
            as="h1"
            variant="dark"
            size="page"
            centered
            primaryEn="Visual"
            accentEn="Gallery"
            primaryUr="تصویری"
            accentUr="گیلری"
            isUr={isUr}
          />
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100/90">
            {isUr
              ? 'ٹریکٹر، کھیت اور ورکشاپ کے مناظر: وہ ماحول جہاں فیاٹ، میسی، فورڈ کے لوکل پارٹس اور ٹاپ/لفٹ لنک کی اصل ضرورت پڑتی ہے۔'
              : 'Tractors, fields and workshops: the environment where Fiat, Massey, Ford local parts and Top / Lift Link demand really lives.'}
          </p>
        </div>
      </section>

      {/* Light content area */}
      <div className="relative -mt-6 rounded-t-[2rem] bg-slate-100 pb-16 pt-10 md:rounded-t-[2.5rem] md:pb-24 md:pt-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Intro strip */}
          <div className="mb-10 flex flex-col items-center gap-4 text-center md:mb-14 md:flex-row md:justify-between md:text-start">
            <div className="max-w-xl" dir={isUr ? 'rtl' : 'ltr'}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                {isUr ? 'مناظر' : 'Scenes'}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                {isUr ? 'ایک نظر میں' : 'At a glance'}
              </h2>
              <p className="mt-2 text-slate-600">
                {isUr
                  ? 'ذیل میں غیر یکساں گرِڈ میں تصاویر ہیں۔ ہوور کریں تاکہ مختصر کیپشن نظر آئے۔'
                  : 'Images sit in an uneven grid for a richer layout. Hover for a short caption.'}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-2">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                {isUr ? 'لوکل پارٹس' : 'Local parts'}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                {isUr ? 'لاہور' : 'Lahore'}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                {isUr ? 'ہول سیل' : 'Wholesale'}
              </span>
            </div>
          </div>

          {/* Bento grid */}
          <div className="grid auto-rows-fr gap-4 md:grid-cols-12 md:gap-5">
            {/* Featured large */}
            <GalleryTile
              src={galleryImages[0]}
              alt={isUr ? captions[0].ur : captions[0].en}
              label={isUr ? captions[0].ur : captions[0].en}
              className="md:col-span-8 md:row-span-2"
              featured
            />
            <GalleryTile
              src={galleryImages[1]}
              alt={isUr ? captions[1].ur : captions[1].en}
              label={isUr ? captions[1].ur : captions[1].en}
              className="h-52 md:col-span-4 md:col-start-9 md:row-start-1 md:h-full md:min-h-[188px]"
            />
            <GalleryTile
              src={galleryImages[2]}
              alt={isUr ? captions[2].ur : captions[2].en}
              label={isUr ? captions[2].ur : captions[2].en}
              className="h-52 md:col-span-4 md:col-start-9 md:row-start-2 md:h-full md:min-h-[188px]"
            />

            <GalleryTile
              src={galleryImages[3]}
              alt={isUr ? captions[3].ur : captions[3].en}
              label={isUr ? captions[3].ur : captions[3].en}
              className="h-48 md:col-span-4 md:row-start-3 md:min-h-[200px]"
            />
            <GalleryTile
              src={galleryImages[4]}
              alt={isUr ? captions[4].ur : captions[4].en}
              label={isUr ? captions[4].ur : captions[4].en}
              className="h-48 md:col-span-4 md:row-start-3 md:col-start-5 md:min-h-[200px]"
            />
            <GalleryTile
              src={galleryImages[5]}
              alt={isUr ? captions[5].ur : captions[5].en}
              label={isUr ? captions[5].ur : captions[5].en}
              className="h-48 md:col-span-4 md:row-start-3 md:col-start-9 md:min-h-[200px]"
            />
          </div>

          {/* CTA */}
          <div className="relative mt-14 overflow-hidden rounded-3xl border border-indigo-200/50 bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 px-6 py-10 text-center shadow-2xl md:px-12 md:py-12">
            <div className="pointer-events-none absolute -right-20 top-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl" />
            <p className="relative text-xl font-bold text-white md:text-2xl">
              {isUr ? 'اصل پارٹ، ماڈل اور ریٹ کے لیے ایک کال دور' : 'Real parts, models and rates are one call away'}
            </p>
            <p className="relative mx-auto mt-3 max-w-lg text-sm text-cyan-100/85">
              {isUr
                ? 'گیلری صرف ماحول ہے۔ درست فٹنگ اور اسٹاک کے لیے رابطہ یا پارٹس کا صفحہ استعمال کریں۔'
                : 'The gallery sets the mood. Use contact or parts for correct fitting and stock.'}
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex min-w-[140px] justify-center rounded-xl bg-amber-400 px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-amber-300"
              >
                {isUr ? 'رابطہ' : 'Contact'}
              </Link>
              <Link
                href="/parts"
                className="inline-flex min-w-[140px] justify-center rounded-xl border-2 border-white/25 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                {isUr ? 'پارٹس کی فہرست' : 'Browse parts'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function GalleryTile({
  src,
  alt,
  label,
  className,
  featured,
}: {
  src: string
  alt: string
  label: string
  className?: string
  featured?: boolean
}) {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200 shadow-lg ring-1 ring-slate-900/5 ${featured ? 'min-h-[260px] md:min-h-[380px]' : 'min-h-[200px]'} ${className ?? ''}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 transition duration-300 group-hover:opacity-100 ${featured ? 'via-slate-950/40' : ''}`}
      />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <p className="text-sm font-bold text-white drop-shadow md:text-base">{label}</p>
        <p className="mt-1 max-h-0 overflow-hidden text-xs text-cyan-100/90 opacity-0 transition-all duration-300 group-hover:max-h-8 group-hover:opacity-100">
          Vicky Tractor Fahad Autos
        </p>
      </div>
    </div>
  )
}
