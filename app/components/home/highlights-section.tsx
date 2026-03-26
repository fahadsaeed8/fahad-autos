'use client'

const highlights = [
  { en: 'Fiat, Massey, Ford local parts specialist', ur: 'فیاٹ، میسی، فورڈ لوکل پارٹس اسپیشلسٹ' },
  { en: 'Top Link & Lift Link wholesale dealer', ur: 'ٹاپ لنک اور لفٹ لنک ہول سیل ڈیلر' },
  { en: 'Manufacturing and bulk supply support', ur: 'مینوفیکچرنگ اور بلک سپلائی سپورٹ' },
]

type HighlightsSectionProps = {
  isUr: boolean
}

export default function HighlightsSection({ isUr }: HighlightsSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <h2 className="text-3xl font-bold text-slate-900">{isUr ? 'ہمارے نمایاں فیچرز' : 'Our Highlights'}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.en} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-blue-900">{isUr ? item.ur : item.en}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
