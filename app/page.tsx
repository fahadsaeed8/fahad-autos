'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { SectionHeading } from '@/app/components/section-heading'
import { categoryImages } from '@/app/lib/site-images'
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
    image: categoryImages.fiat,
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
    image: categoryImages.massey,
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
    image: categoryImages.ford,
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
    image: categoryImages.toplink,
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
    image: categoryImages.liftlink,
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
    image: categoryImages.hydraulic,
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

const trustStats = [
  { value: '500+', en: 'Happy Buyers', ur: 'خوش گاہک' },
  { value: '6', en: 'Core Categories', ur: 'بنیادی کیٹیگریز' },
  { value: '3', en: 'Major Brands', ur: 'اہم برانڈز' },
  { value: '24/7', en: 'Order Support', ur: 'آرڈر سپورٹ' },
]

const workflow = [
  {
    enTitle: 'Requirement Discussion',
    urTitle: 'ضرورت کی سمجھ',
    enText: 'Share model and part details, we verify the right fitting.',
    urText: 'ٹریکٹر ماڈل اور پارٹ بتائیں، ہم درست فٹنگ کنفرم کرتے ہیں۔',
  },
  {
    enTitle: 'Stock & Rate Confirmation',
    urTitle: 'اسٹاک اور ریٹ کنفرمیشن',
    enText: 'We confirm real-time stock and provide retail/wholesale pricing.',
    urText: 'ہم فوری اسٹاک اور ریٹیل/ہول سیل ریٹس کنفرم کرتے ہیں۔',
  },
  {
    enTitle: 'Delivery / Pickup',
    urTitle: 'ڈیلیوری / پک اپ',
    enText: 'Fast dispatch for market dealers, workshops and local buyers.',
    urText: 'مارکیٹ ڈیلرز، ورکشاپس اور لوکل خریداروں کے لئے فوری سپلائی۔',
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
            <SectionHeading
              as="h1"
              variant="dark"
              size="hero"
              className="mt-4"
              primaryEn="All Tractor Parts"
              accentEn="Under One Roof"
              primaryUr="ہر ٹریکٹر پارٹ"
              accentUr="ایک جگہ"
              isUr={isUr}
            />
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
          <SectionHeading
            primaryEn="Our"
            accentEn="Highlights"
            primaryUr="ہمارے نمایاں"
            accentUr="فیچرز"
            isUr={isUr}
          />
          <p className="mt-2 text-sm text-slate-600">
            {isUr ? 'معیار، قیمت اور سپلائی میں ہماری اصل پہچان' : 'Our edge in quality, pricing and dependable supply'}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <article
              key={item.en}
              className="group overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_14px_40px_-18px_rgba(15,23,42,0.22)] ring-1 ring-slate-900/5 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(30,58,138,0.35)]"
            >
              <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600" aria-hidden />
              <div className="flex items-start gap-4 px-5 py-5 md:gap-5 md:px-6 md:py-6">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-sm font-bold text-cyan-300 shadow-inner md:h-14 md:w-14 md:text-base"
                  aria-hidden
                >
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1 text-start" dir={isUr ? 'rtl' : 'ltr'}>
                  <h3 className="text-[15px] font-bold leading-snug tracking-tight text-indigo-950 md:text-base">
                    {isUr ? item.ur : item.en}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {isUr ? item.detailUr : item.detailEn}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
          <div className="mb-14 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
            <SectionHeading
              as="h3"
              size="card"
              primaryEn="Special Focus:"
              accentEn="Fiat, Massey, Ford + Top Link"
              primaryUr="خصوصی مہارت:"
              accentUr="فیاٹ، میسی، فورڈ + ٹاپ لنک"
              isUr={isUr}
              primaryClassName="text-amber-950"
              accentClassName="text-amber-800"
            />
            <p className="mt-2 text-sm text-amber-800">
              {isUr
                ? 'ہماری بنیادی اسپیشلٹی فیاٹ، میسی اور فورڈ کے لوکل پارٹس، ٹاپ لنک، لفٹ لنک، اور متعلقہ لنکیج آئٹمز کی ہول سیل اور مینوفیکچرنگ ہے۔'
                : 'Our core specialization is Fiat, Massey and Ford local parts, Top Link, Lift Link, and related linkage items with wholesale and manufacturing capabilities.'}
            </p>
          </div>
          <div className="text-center">
            <SectionHeading
              primaryEn="Parts"
              accentEn="Categories"
              primaryUr="پارٹس کی"
              accentUr="کیٹیگریز"
              isUr={isUr}
            />
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

      <section className="relative overflow-hidden bg-gradient-to-r from-[#080f35] via-[#17205f] to-[#0a1138] text-white">
        <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="text-center">
            <SectionHeading
              variant="dark"
              primaryEn="Why Trust"
              accentEn="Our Shop?"
              primaryUr="ہم پر اعتماد"
              accentUr="کیوں؟"
              isUr={isUr}
            />
            <p className="mx-auto mt-3 max-w-3xl text-sm text-cyan-100/90">
              {isUr
                ? 'لوکل مارکیٹ کے تجربے اور مستقل سپلائی کی بنیاد پر کسان اور مکینک ہم پر اعتماد کرتے ہیں۔'
                : 'Farmers and mechanics trust us for practical guidance and reliable stock availability.'}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {trustStats.map((stat) => (
              <article
                key={stat.en}
                className="rounded-2xl border border-cyan-300/20 bg-white/10 p-6 text-center shadow-lg shadow-black/20 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15"
              >
                <p className="text-4xl font-extrabold text-cyan-300">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-100">{isUr ? stat.ur : stat.en}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <SectionHeading
            centered
            primaryEn="Wholesale & Manufacturing"
            accentEn="Workflow"
            primaryUr="ہول سیل اور مینوفیکچرنگ"
            accentUr="ورک فلو"
            isUr={isUr}
          />
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-slate-600">
            {isUr
              ? 'آرڈر سے لے کر سپلائی تک ہر مرحلے میں واضح رہنمائی، درست ریٹ اور بروقت سہولت دی جاتی ہے۔'
              : 'From inquiry to supply, each step is handled with clear communication, right pricing and timely support.'}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {workflow.map((step, index) => (
              <article
                key={step.enTitle}
                className="relative rounded-2xl border border-indigo-100 bg-gradient-to-b from-indigo-50/70 to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-900 text-xs font-bold text-cyan-300 shadow">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-bold text-indigo-900">{isUr ? step.urTitle : step.enTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{isUr ? step.urText : step.enText}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-indigo-50 p-6 text-center shadow-sm">
            <p className="text-lg font-bold text-indigo-900">
              {isUr ? 'بلک آرڈر یا ڈیلر ریٹس کے لئے ابھی رابطہ کریں' : 'Need bulk rates or dealership supply? Contact us now.'}
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex rounded-lg bg-indigo-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-800"
              >
                {isUr ? 'ابھی رابطہ کریں' : 'Contact Us Now'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
