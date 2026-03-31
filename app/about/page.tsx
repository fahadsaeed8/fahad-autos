'use client'

import Link from 'next/link'
import { SectionHeading } from '@/app/components/section-heading'
import { useLanguage } from '@/app/lib/language-context'

const focusItems = [
  {
    en: 'Fiat, Massey & Ford local parts',
    ur: 'فیاٹ، میسی اور فورڈ کے لوکل پارٹس',
  },
  {
    en: 'Top Link & Lift Link wholesale',
    ur: 'ٹاپ لنک اور لفٹ لنک ہول سیل',
  },
  {
    en: 'Manufacturing & bulk supply',
    ur: 'مینوفیکچرنگ اور بلک سپلائی',
  },
  {
    en: 'Model-wise fitting guidance',
    ur: 'ماڈل کے مطابق فٹنگ رہنمائی',
  },
] as const

const values = [
  {
    titleEn: 'Experience',
    titleUr: 'تجربہ',
    descEn: 'Years of dealing with local market demand, workshop needs and seasonal part pressure.',
    descUr: 'مقامی مارکیٹ، ورکشاپ کی ضرورت اور موسمی پارٹس کی دباؤ سے نمٹنے کا تجربہ۔',
    bar: 'from-cyan-500 via-indigo-600 to-violet-600',
  },
  {
    titleEn: 'Trust',
    titleUr: 'بھروسہ',
    descEn: 'Straight rates, clear stock talk, and guidance that matches real field use.',
    descUr: 'سیدھے ریٹ، واضح اسٹاک بات، اور کھیت کے اصل استعمال سے میل کھاتی رہنمائی۔',
    bar: 'from-amber-400 via-orange-500 to-rose-600',
  },
  {
    titleEn: 'Service',
    titleUr: 'سروس',
    descEn: 'Quick response for shops and farmers, practical recommendations you can act on.',
    descUr: 'دکانوں اور کسانوں کے لئے تیز جواب، عملی مشورے جو آپ استعمال کر سکیں۔',
    bar: 'from-emerald-500 via-teal-600 to-cyan-700',
  },
] as const

export default function AboutPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden px-4 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.25),transparent)]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-200">
            {isUr ? 'وکی ٹریکٹر فہد آٹوز' : 'Vicky Tractor Fahad Autos'}
          </p>
          <SectionHeading
            as="h1"
            variant="dark"
            size="page"
            centered
            primaryEn="About"
            accentEn="Us"
            primaryUr="ہمارے بارے"
            accentUr="میں"
            isUr={isUr}
          />
          <p className="mt-5 text-lg leading-relaxed text-blue-100/95">
            {isUr
              ? 'لاہور، بادامی باغ میں خاندانی کاروبار: کسان، مکینک اور مارکیٹ ڈیلرز کے لئے معیاری ٹریکٹر پارٹس اور ہول سیل سپورٹ۔'
              : 'A family-run shop in Badami Bagh, Lahore, focused on quality tractor parts and wholesale support for farmers, mechanics and dealers.'}
          </p>
        </div>
      </section>

      <div className="relative -mt-8 rounded-t-[2rem] bg-slate-100 px-4 pb-16 pt-10 md:rounded-t-[2.5rem] md:px-8 md:pb-24 md:pt-14">
        <div className="mx-auto max-w-6xl">
          {/* Story */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              {isUr ? 'کہانی' : 'Our story'}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
              {isUr ? 'ہم کون ہیں' : 'Who we are'}
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600" />
            <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg" dir={isUr ? 'rtl' : 'ltr'}>
              {isUr
                ? 'وکی ٹریکٹر فہد آٹوز ایک خاندانی کاروبار ہے جہاں مقامی کھیتی ضروریات اور ورکشاپ ڈیمانڈ کو سامنے رکھ کر ٹریکٹر پارٹس فراہم کیے جاتے ہیں۔ ہمارا مقصد صرف فروخت نہیں، بلکہ مناسب قیمت، قابلِ اعتماد کوالٹی اور ایماندار مشورہ ہے تاکہ آپ کو درست پارٹ درست وقت پر ملے۔'
                : 'Vicky Tractor Fahad Autos is built around local farming needs and workshop demand. We are not only here to sell parts, but to offer fair pricing, dependable quality and honest guidance so you get the right part at the right time.'}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg" dir={isUr ? 'rtl' : 'ltr'}>
              {isUr
                ? 'ہم فیاٹ، میسی اور فورڈ کے لوکل پارٹس، ٹاپ لنک، لفٹ لنک اور لنکیج اشیاء پر خصوصی توجہ دیتے ہیں، ساتھ ہی مارکیٹ ڈیلرز اور بلک خریداروں کے لئے مینوفیکچرنگ اور مستقل سپلائی کی سہولت بھی فراہم کرتے ہیں۔'
                : 'We specialize in Fiat, Massey and Ford local parts, Top Link, Lift Link and linkage items, with manufacturing and steady supply options for market dealers and bulk buyers when required.'}
            </p>
          </div>

          {/* Focus grid */}
          <div className="mt-14">
            <h3 className="text-center text-lg font-bold text-slate-900 md:text-xl">
              {isUr ? 'ہماری خصوصی توجہ' : 'What we focus on'}
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {focusItems.map((item) => (
                <div
                  key={item.en}
                  className="flex items-center gap-3 rounded-2xl border border-indigo-100 bg-white px-4 py-3 shadow-sm ring-1 ring-slate-900/5"
                  dir={isUr ? 'rtl' : 'ltr'}
                >
                  <span className="flex h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600" aria-hidden />
                  <span className="text-sm font-semibold text-slate-800">{isUr ? item.ur : item.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h3 className="text-center text-lg font-bold text-slate-900 md:text-xl">
              {isUr ? 'ہماری اقدار' : 'Our values'}
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {values.map((v) => (
                <article
                  key={v.titleEn}
                  className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_14px_40px_-18px_rgba(15,23,42,0.15)] ring-1 ring-slate-900/5"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${v.bar}`} aria-hidden />
                  <div className="p-6 md:p-7">
                    <SectionHeading
                      as="h2"
                      size="card"
                      className="!text-lg md:!text-xl"
                      primaryEn={v.titleEn}
                      primaryUr={v.titleUr}
                      isUr={isUr}
                    />
                    <p className="mt-3 text-sm leading-relaxed text-slate-600" dir={isUr ? 'rtl' : 'ltr'}>
                      {isUr ? v.descUr : v.descEn}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-md md:flex md:items-center md:justify-between md:gap-8 md:p-8">
            <div className="flex items-start gap-4" dir={isUr ? 'rtl' : 'ltr'}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-indigo-900 text-cyan-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                  {isUr ? 'مقام' : 'Location'}
                </p>
                <p className="mt-1 font-semibold text-slate-900">{isUr ? 'لاہور، بادامی باغ' : 'Lahore, Badami Bagh'}</p>
                <p className="mt-2 text-sm text-slate-600">
                  {isUr ? 'Shop 43، Ramzan Chamber، 91/140 بادامی باغ' : 'Shop No. 43, Ramzan Chamber, 91/140 Badami Bagh'}
                </p>
              </div>
            </div>
            <Link href="/contact" className="btn-cta-indigo-xl mt-6 w-full md:mt-0 md:w-auto">
              {isUr ? 'مکمل پتہ اور رابطہ' : 'Full address & contact'}
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/parts" className="btn-cta-amber-lg">
              {isUr ? 'پارٹس دیکھیں' : 'View parts'}
            </Link>
            <Link href="/contact" className="btn-cta-outline-slate">
              {isUr ? 'رابطہ' : 'Contact'}
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
