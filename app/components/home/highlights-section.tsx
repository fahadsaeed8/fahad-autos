'use client'

import { SectionHeading } from '@/app/components/section-heading'

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

type HighlightsSectionProps = {
  isUr: boolean
}

export default function HighlightsSection({ isUr }: HighlightsSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionHeading
        size="compact"
        primaryEn="Our"
        accentEn="Highlights"
        primaryUr="ہمارے نمایاں"
        accentUr="فیچرز"
        isUr={isUr}
      />
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
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
  )
}
