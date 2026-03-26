'use client'

const categories = [
  'Fiat Local Parts',
  'Massey Local Parts',
  'Ford Local Parts',
  'Top Link',
  'Lift Link',
  'Hydraulic & Linkage Items',
]

type CategoriesSectionProps = {
  isUr: boolean
}

export default function CategoriesSection({ isUr }: CategoriesSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
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
  )
}
