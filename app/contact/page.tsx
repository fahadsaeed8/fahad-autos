'use client'

import { SectionHeading } from '@/app/components/section-heading'
import { useLanguage } from '@/app/lib/language-context'

export default function ContactPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <SectionHeading
          as="h1"
          size="page"
          primaryEn="Contact"
          accentEn="Us"
          primaryUr="رابطہ"
          accentUr="کریں"
          isUr={isUr}
        />
        <p className="mt-3 max-w-2xl text-slate-700">
          {isUr
            ? 'پارٹس کی قیمت، دستیابی یا بلک آرڈر کے لئے ہم سے فون پر رابطہ کریں۔'
            : 'Call us for parts pricing, availability checks, and bulk workshop orders.'}
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionHeading
              as="h2"
              size="card"
              primaryEn="Phone"
              accentEn="Numbers"
              primaryUr="فون"
              accentUr="نمبرز"
              isUr={isUr}
            />
            <p className="mt-3 text-slate-800">0321-4964013</p>
            <p className="text-slate-800">0300-4785384</p>
            <p className="mt-3 text-slate-800">Landline: 37700794</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <SectionHeading
              as="h2"
              size="card"
              primaryEn="Address"
              primaryUr="پتہ"
              isUr={isUr}
            />
            <p className="mt-3 text-slate-800">Shop No. 43, Ramzan Chamber, 91/140 Badami Bagh, Lahore</p>
            <p className="mt-3 text-slate-700" dir="rtl" lang="ur">
              دکان نمبر 43، رمضان چیمبر، 91/140 بادامی باغ، لاہور
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
