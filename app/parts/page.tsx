'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/app/components/section-heading'
import { PART_CATEGORIES } from '@/app/lib/parts-data'
import { partsPageImages } from '@/app/lib/site-images'
import { useLanguage } from '@/app/lib/language-context'

export default function PartsPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-slate-100">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 px-4 py-14 text-white md:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeading
            as="h1"
            variant="dark"
            size="page"
            centered
            primaryEn="Tractor"
            accentEn="Parts"
            primaryUr="ٹریکٹر"
            accentUr="پارٹس"
            isUr={isUr}
          />
          <p className={`mx-auto max-w-3xl text-sm leading-relaxed text-blue-100 md:text-base ${isUr ? 'mt-5' : 'mt-3'}`} dir={isUr ? 'rtl' : 'ltr'}>
            {isUr
              ? 'فیاٹ، میسی، فورڈ کے لوکل پارٹس، انجن، ہائیڈرولک، لنکیج، کلچ، بریک، بجلی، پی ٹی او، کولنگ، کھیت اور ایرگیشن سے جڑے آئٹمز، ٹائر اور ہول سیل سپلائی۔'
              : 'Fiat, Massey and Ford local parts: engine, hydraulics, linkage, clutch, brakes, electrical, PTO, cooling, field & irrigation items, tyres, belts and wholesale supply.'}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {PART_CATEGORIES.map((part) => {
            const img = partsPageImages[part.imageIndex % partsPageImages.length]
            return (
              <Link
                key={part.id}
                href={`/parts/${part.id}`}
                className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-indigo-300 hover:shadow-lg"
              >
                <article>
                  <Image
                    src={img}
                    alt={isUr ? `${part.primaryUr} ${part.accentUr}` : `${part.primaryEn} ${part.accentEn}`}
                    width={1200}
                    height={800}
                    className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="p-5">
                    <SectionHeading
                      as="h2"
                      size="card"
                      primaryEn={part.primaryEn}
                      accentEn={part.accentEn}
                      primaryUr={part.primaryUr}
                      accentUr={part.accentUr}
                      isUr={isUr}
                    />
                    <p className={`text-sm leading-relaxed text-slate-700 ${isUr ? 'mt-5' : 'mt-3'}`} dir={isUr ? 'rtl' : 'ltr'}>
                      {isUr ? part.descUr : part.descEn}
                    </p>
                    <p className="mt-3 text-xs font-bold text-indigo-700 group-hover:underline" dir={isUr ? 'rtl' : 'ltr'}>
                      {isUr ? 'مزید دیکھیں →' : 'View details →'}
                    </p>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
