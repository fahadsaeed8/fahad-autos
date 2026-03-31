'use client'

import { SectionHeading } from '@/app/components/section-heading'

const categories = [
  { en: 'Fiat Local Parts', ur: 'فیاٹ لوکل پارٹس' },
  { en: 'Massey Local Parts', ur: 'میسی لوکل پارٹس' },
  { en: 'Ford Local Parts', ur: 'فورڈ لوکل پارٹس' },
  { en: 'Top Link', ur: 'ٹاپ لنک' },
  { en: 'Lift Link', ur: 'لفٹ لنک' },
  { en: 'Hydraulic & Linkage Items', ur: 'ہائیڈرولک اور لنکیج آئٹمز' },
]

type CategoriesSectionProps = {
  isUr: boolean
}

export default function CategoriesSection({ isUr }: CategoriesSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
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
          <p className={`text-sm text-amber-800 ${isUr ? 'mt-5' : 'mt-2'}`}>
            {isUr
              ? 'ہماری بنیادی اسپیشلٹی فیاٹ، میسی اور فورڈ کے لوکل پارٹس، ٹاپ لنک، لفٹ لنک، اور متعلقہ لنکیج آئٹمز کی ہول سیل اور مینوفیکچرنگ ہے۔'
              : 'Our core specialization is Fiat, Massey and Ford local parts, Top Link, Lift Link, and related linkage items with wholesale and manufacturing capabilities.'}
          </p>
        </div>
        <SectionHeading
          size="compact"
          primaryEn="Parts"
          accentEn="Categories"
          primaryUr="پارٹس کی"
          accentUr="کیٹیگریز"
          isUr={isUr}
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.en}
              className="rounded-xl border border-blue-100 bg-blue-50 p-4 font-semibold text-blue-900"
              dir={isUr ? 'rtl' : 'ltr'}
            >
              {isUr ? category.ur : category.en}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
