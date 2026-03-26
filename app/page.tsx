'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/app/lib/language-context'

const highlights = [
  {
    en: 'Fiat, Massey, Ford local parts specialist',
    ur: 'فیاٹ، میسی، فورڈ لوکل پارٹس اسپیشلسٹ',
    detailEn: 'Daily-use reliable local parts with model-wise fitting support.',
    detailUr: 'روزمرہ استعمال کے مضبوط لوکل پارٹس، ماڈل کے مطابق فٹنگ گائیڈ کے ساتھ۔',
  },
  {
    en: 'Top Link & Lift Link wholesale dealer',
    ur: 'ٹاپ لنک اور لفٹ لنک ہول سیل ڈیلر',
    detailEn: 'Strong wholesale network for shops, mechanics and market dealers.',
    detailUr: 'دکانوں، مکینکس اور مارکیٹ ڈیلرز کے لئے مضبوط ہول سیل سپلائی چین۔',
  },
  {
    en: 'Manufacturing and bulk supply support',
    ur: 'مینوفیکچرنگ اور بلک سپلائی سپورٹ',
    detailEn: 'Bulk quantity readiness for long-term buyers and workshops.',
    detailUr: 'طویل مدتی خریداروں اور ورکشاپس کے لئے بلک مقدار میں مستقل دستیابی۔',
  },
]

const categories = [
  'Fiat Local Parts',
  'Massey Local Parts',
  'Ford Local Parts',
  'Top Link',
  'Lift Link',
  'Hydraulic & Linkage Items',
]

export default function Home() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-slate-100">
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="mx-auto grid max-w-8xl gap-10 px-4 pb-16 pt-36 md:grid-cols-2 md:px-16 md:pb-24 md:pt-40">
          <div>
            <p className="inline-block rounded-full bg-amber-300 px-3 py-1 text-xs font-bold tracking-wide text-slate-950">
              {isUr ? 'قابلِ اعتماد پارٹس پارٹنر' : 'TRUSTED PARTS PARTNER'}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              {isUr ? 'ہر ٹریکٹر پارٹ ایک جگہ' : 'All Tractor Parts Under One Roof'}
            </h1>
            <p className="mt-4 max-w-xl text-sm text-blue-100 md:text-base">
              {isUr
                ? 'وکی ٹریکٹر فہد آٹوز میں فیاٹ، میسی اور فورڈ کے لوکل پارٹس، ٹاپ لنک اور لفٹ لنک کی ہول سیل ڈیلنگ اور مینوفیکچرنگ سپورٹ دستیاب ہے۔'
                : 'Vicky Tractor Fahad Autos deals in Fiat, Massey and Ford local parts, with Top Link and Lift Link wholesale dealing and manufacturing support.'}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/parts" className="rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950">
                {isUr ? 'پارٹس دیکھیں' : 'Explore Parts'}
              </Link>
              <Link href="/contact" className="rounded-lg border border-white px-5 py-3 text-sm font-bold">
                {isUr ? 'رابطہ کریں' : 'Contact Us'}
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
            <Image
              src="/business-card.png"
              alt="Vicky Tractor Fahad Autos business card"
              width={1280}
              height={720}
              className="h-full w-full rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 text-center md:px-8">
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">{isUr ? 'ہمارے نمایاں فیچرز' : 'Our Highlights'}</h2>
          <p className="mt-2 text-sm text-slate-600">
            {isUr ? 'معیار، قیمت اور سپلائی میں ہماری اصل پہچان' : 'Our edge in quality, pricing and dependable supply'}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => (
            <article
              key={item.en}
              className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-cyan-300">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-bold text-indigo-900">{isUr ? item.ur : item.en}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{isUr ? item.detailUr : item.detailEn}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
          <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
            <h3 className="text-xl font-bold text-amber-900">
              {isUr ? 'خصوصی مہارت: فیاٹ، میسی، فورڈ + ٹاپ لنک' : 'Special Focus: Fiat, Massey, Ford + Top Link'}
            </h3>
            <p className="mt-2 text-sm text-amber-800">
              {isUr
                ? 'ہماری بنیادی اسپیشلٹی فیاٹ، میسی اور فورڈ کے لوکل پارٹس، ٹاپ لنک، لفٹ لنک، اور متعلقہ لنکیج آئٹمز کی ہول سیل اور مینوفیکچرنگ ہے۔'
                : 'Our core specialization is Fiat, Massey and Ford local parts, Top Link, Lift Link, and related linkage items with wholesale and manufacturing capabilities.'}
            </p>
          </div>
          <h2 className="text-3xl font-bold text-slate-900">{isUr ? 'پارٹس کی کیٹیگریز' : 'Parts Categories'}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((category) => (
              <div key={category} className="rounded-xl border border-blue-100 bg-blue-50 p-4 font-semibold text-blue-900">
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
