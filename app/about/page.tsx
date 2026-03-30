'use client'

import { SectionHeading } from '@/app/components/section-heading'
import { useLanguage } from '@/app/lib/language-context'

export default function AboutPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-14 md:px-8">
        <div className="text-center">
          <SectionHeading
            as="h1"
            size="page"
            centered
            primaryEn="About"
            accentEn="Us"
            primaryUr="ہمارے بارے"
            accentUr="میں"
            isUr={isUr}
          />
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-700">
            {isUr
              ? 'وکی ٹریکٹر فہد آٹوز ایک خاندانی کاروبار ہے جہاں کسانوں اور مکینکس کی ضروریات کے مطابق معیاری ٹریکٹر پارٹس دستیاب کیے جاتے ہیں۔ ہمارا مقصد مناسب قیمت، اصل کوالٹی اور ایماندار رہنمائی فراہم کرنا ہے۔'
              : 'Vicky Tractor Fahad Autos is a family-run business focused on supplying quality tractor parts for farmers and mechanics. Our mission is fair pricing, trusted quality and honest guidance for every customer.'}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <SectionHeading
              as="h2"
              size="card"
              primaryEn="Experience"
              primaryUr="تجربہ"
              isUr={isUr}
            />
            <p className="mt-2 text-sm text-slate-700">{isUr ? 'مقامی مارکیٹ میں مضبوط شناخت' : 'Strong local market understanding.'}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <SectionHeading
              as="h2"
              size="card"
              primaryEn="Trust"
              primaryUr="بھروسہ"
              isUr={isUr}
            />
            <p className="mt-2 text-sm text-slate-700">{isUr ? 'کسٹمر سینٹرک اور شفاف لین دین' : 'Customer-first and transparent dealing.'}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <SectionHeading
              as="h2"
              size="card"
              primaryEn="Service"
              primaryUr="سروس"
              isUr={isUr}
            />
            <p className="mt-2 text-sm text-slate-700">{isUr ? 'تیز رسپانس اور بہتر مشورہ' : 'Quick response with practical recommendations.'}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
