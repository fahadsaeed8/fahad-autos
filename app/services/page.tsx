'use client'

import { useLanguage } from '@/app/lib/language-context'

const services = [
  {
    en: 'Brand-Specific Support (Fiat / Massey / Ford)',
    ur: 'برانڈ اسپیسفک سپورٹ (فیاٹ / میسی / فورڈ)',
    detailEn: 'Model-wise recommendations for Fiat, Massey and Ford tractor local parts.',
    detailUr: 'فیاٹ، میسی اور فورڈ ٹریکٹرز کے لئے ماڈل کے مطابق درست لوکل پارٹس کی رہنمائی دی جاتی ہے۔',
  },
  {
    en: 'Top Link Wholesale Dealing',
    ur: 'ٹاپ لنک ہول سیل ڈیلنگ',
    detailEn: 'Top Link and Lift Link wholesale supply for market dealers and shops.',
    detailUr: 'مارکیٹ ڈیلرز اور دکانوں کے لئے ٹاپ لنک اور لفٹ لنک کی ہول سیل سپلائی دستیاب ہے۔',
  },
  {
    en: 'Manufacturing + Bulk Orders',
    ur: 'مینوفیکچرنگ + بلک آرڈرز',
    detailEn: 'Manufacturing-backed supply and bulk order handling for long-term buyers.',
    detailUr: 'مستقل خریداروں کے لئے مینوفیکچرنگ سپورٹ کے ساتھ بلک آرڈرز کی فراہمی کی جاتی ہے۔',
  },
]

export default function ServicesPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900">{isUr ? 'ہماری سروسز' : 'Our Services'}</h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          {isUr
            ? 'صرف پارٹس فروخت نہیں بلکہ مکمل رہنمائی اور سپورٹ بھی دی جاتی ہے تاکہ آپ کو درست چیز درست وقت پر ملے۔'
            : 'Beyond selling parts, we provide practical support so customers get the right product at the right time.'}
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.en} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-bold text-blue-900">{isUr ? service.ur : service.en}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">{isUr ? service.detailUr : service.detailEn}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
