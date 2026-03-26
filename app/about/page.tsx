'use client'

import { useLanguage } from '@/app/lib/language-context'

export default function AboutPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900">{isUr ? 'ہمارے بارے میں' : 'About Us'}</h1>
        <p className="mt-5 leading-8 text-slate-700">
          {isUr
            ? 'وکی ٹریکٹر فہد آٹوز ایک خاندانی کاروبار ہے جہاں کسانوں اور مکینکس کی ضروریات کے مطابق معیاری ٹریکٹر پارٹس دستیاب کیے جاتے ہیں۔ ہمارا مقصد مناسب قیمت، اصل کوالٹی اور ایماندار رہنمائی فراہم کرنا ہے۔'
            : 'Vicky Tractor Fahad Autos is a family-run business focused on supplying quality tractor parts for farmers and mechanics. Our mission is fair pricing, trusted quality and honest guidance for every customer.'}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="font-bold text-blue-900">{isUr ? 'تجربہ' : 'Experience'}</h2>
            <p className="mt-2 text-sm text-slate-700">{isUr ? 'مقامی مارکیٹ میں مضبوط شناخت' : 'Strong local market understanding.'}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="font-bold text-blue-900">{isUr ? 'بھروسہ' : 'Trust'}</h2>
            <p className="mt-2 text-sm text-slate-700">{isUr ? 'کسٹمر سینٹرک اور شفاف لین دین' : 'Customer-first and transparent dealing.'}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="font-bold text-blue-900">{isUr ? 'سروس' : 'Service'}</h2>
            <p className="mt-2 text-sm text-slate-700">{isUr ? 'تیز رسپانس اور بہتر مشورہ' : 'Quick response with practical recommendations.'}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
