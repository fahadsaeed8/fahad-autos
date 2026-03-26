'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
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
  {
    key: 'fiat',
    title: 'Fiat Local Parts',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
    en: {
      overview: 'Fiat local tractor parts available with practical quality for local farming needs.',
      items: ['Local market fitting support', 'Regular stock availability', 'Retail and wholesale supply'],
    },
    ur: {
      overview: 'فیاٹ کے لوکل ٹریکٹر پارٹس مقامی کھیتی باڑی کی ضروریات کے مطابق دستیاب ہیں۔',
      items: ['لوکل مارکیٹ فٹنگ سپورٹ', 'مستقل اسٹاک دستیابی', 'ریٹیل اور ہول سیل سپلائی'],
    },
  },
  {
    key: 'massey',
    title: 'Massey Local Parts',
    image: 'https://images.unsplash.com/photo-1457530378978-8bac673b8062?auto=format&fit=crop&w=1200&q=80',
    en: {
      overview: 'Massey local parts range for mechanics and farmers with reliable compatibility.',
      items: ['Model-based guidance', 'Workshop-friendly supply', 'Daily-use durable quality'],
    },
    ur: {
      overview: 'میسی کے لوکل پارٹس مکینکس اور کسان بھائیوں کی ضروریات کے مطابق دستیاب ہیں۔',
      items: ['ماڈل کے مطابق رہنمائی', 'ورکشاپ کے لئے بہتر سپلائی', 'روزمرہ استعمال کے لئے مضبوط کوالٹی'],
    },
  },
  {
    key: 'ford',
    title: 'Ford Local Parts',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80',
    en: {
      overview: 'Ford local tractor parts for replacement and maintenance with easy availability.',
      items: ['Reliable local options', 'Mechanic support', 'Retail and bulk quantity'],
    },
    ur: {
      overview: 'فورڈ ٹریکٹر کے لوکل پارٹس مرمت اور تبدیلی کے لئے آسانی سے دستیاب ہیں۔',
      items: ['قابلِ اعتماد لوکل آپشنز', 'مکینک سپورٹ', 'ریٹیل اور بلک مقدار'],
    },
  },
  {
    key: 'toplink',
    title: 'Top Link',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80',
    en: {
      overview: 'Top Link is one of our core products with wholesale dealing support.',
      items: ['Multiple sizes available', 'Wholesale dealer rates', 'Bulk order handling'],
    },
    ur: {
      overview: 'ٹاپ لنک ہماری بنیادی مصنوعات میں شامل ہے اور ہول سیل سپورٹ کے ساتھ دستیاب ہے۔',
      items: ['مختلف سائز دستیاب', 'ہول سیل ڈیلر ریٹس', 'بلک آرڈر ہینڈلنگ'],
    },
  },
  {
    key: 'liftlink',
    title: 'Lift Link',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
    en: {
      overview: 'Lift Link stock is available with stable supply for market demand.',
      items: ['Market-demand items', 'Consistent stock flow', 'Dealer quantity available'],
    },
    ur: {
      overview: 'لفٹ لنک کا اسٹاک مارکیٹ ڈیمانڈ کے مطابق مستقل سپلائی کے ساتھ دستیاب ہے۔',
      items: ['مارکیٹ ڈیمانڈ آئٹمز', 'مسلسل اسٹاک فلو', 'ڈیلر مقدار دستیاب'],
    },
  },
  {
    key: 'hydraulic',
    title: 'Hydraulic & Linkage Items',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1200&q=80',
    en: {
      overview: 'Hydraulic and linkage items available for local repairs and field work support.',
      items: ['Linkage-related local items', 'Workshop demand stock', 'Wholesale and retail availability'],
    },
    ur: {
      overview: 'ہائیڈرولک اور لنکیج آئٹمز مقامی مرمت اور کھیت کے کام کے لئے دستیاب ہیں۔',
      items: ['لنکیج سے متعلق لوکل آئٹمز', 'ورکشاپ ڈیمانڈ اسٹاک', 'ہول سیل اور ریٹیل دستیابی'],
    },
  },
]

export default function Home() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const [activeCategory, setActiveCategory] = useState(categories[0])

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
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">{isUr ? 'پارٹس کی کیٹیگریز' : 'Parts Categories'}</h2>
            <p className="mt-2 text-sm text-slate-600">
              {isUr ? 'ہر کیٹیگری میں معیاری اور قابلِ اعتماد پارٹس دستیاب ہیں۔' : 'Reliable and quality stock available across every category.'}
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((category) => {
              const isActive = activeCategory.key === category.key
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`overflow-hidden rounded-2xl border text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${isActive ? 'border-cyan-400 ring-2 ring-cyan-200' : 'border-indigo-100'
                    }`}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={1000}
                    height={650}
                    className="h-36 w-full object-cover"
                  />
                  <div className="bg-gradient-to-b from-white to-indigo-50/40 p-4">
                    <h3 className="text-lg font-bold text-indigo-900">{category.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {isUr ? 'مزید تفصیل دیکھنے کے لئے کلک کریں' : 'Click to view related details'}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
