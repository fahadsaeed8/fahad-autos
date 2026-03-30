'use client'

import Link from 'next/link'
import { SectionHeading } from '@/app/components/section-heading'
import { useLanguage } from '@/app/lib/language-context'

const services = [
  {
    key: 'brands',
    primaryEn: 'Brand-Specific Support',
    accentEn: '(Fiat / Massey / Ford)',
    primaryUr: 'برانڈ اسپیسفک سپورٹ',
    accentUr: '(فیاٹ / میسی / فورڈ)',
    detailEn:
      'We help you pick the right local parts for your tractor model — not just “any” part, but what actually fits field use and workshop demand.',
    detailUr:
      'ہم صرف “کوئی بھی” پارٹ نہیں، بلکہ آپ کے ٹریکٹر ماڈل اور کھیت/ورکشاپ کی اصل ضرورت کے مطابق درست لوکل پارٹس کی رہنمائی دیتے ہیں۔',
    bulletsEn: [
      'Model-wise fitting guidance for Fiat, Massey and Ford',
      'Practical advice for daily farming and repair use',
      'Retail and wholesale quantity options',
    ],
    bulletsUr: [
      'فیاٹ، میسی اور فورڈ کے لئے ماڈل کے مطابق فٹنگ گائیڈ',
      'روزمرہ کھیت اور مرمت کے لئے عملی مشورہ',
      'ریٹیل اور ہول سیل دونوں میں دستیابی',
    ],
    panel: 'from-indigo-700 via-slate-900 to-slate-950',
  },
  {
    key: 'toplink',
    primaryEn: 'Top Link & Lift Link',
    accentEn: 'Wholesale Network',
    primaryUr: 'ٹاپ لنک اور لفٹ لنک',
    accentUr: 'ہول سیل نیٹ ورک',
    detailEn:
      'Strong wholesale dealing for shops and market dealers who need steady Top Link and Lift Link stock with clear rates and repeat supply.',
    detailUr:
      'دکانوں اور مارکیٹ ڈیلرز کے لئے ٹاپ لنک اور لفٹ لنک کی مستقل سپلائی، واضح ریٹس اور بار بار آرڈر کی سہولت۔',
    bulletsEn: [
      'Top Link and Lift Link in dealer-focused quantities',
      'Support for market shops and workshop demand',
      'Consistent stock flow for repeat buyers',
    ],
    bulletsUr: [
      'ٹاپ لنک اور لفٹ لنک ڈیلر لیول مقدار میں',
      'مارکیٹ دکانوں اور ورکشاپ ڈیمانڈ کے مطابق',
      'بار بار خریداروں کے لئے مستقل سپلائی',
    ],
    panel: 'from-cyan-800 via-blue-950 to-slate-950',
  },
  {
    key: 'bulk',
    primaryEn: 'Manufacturing & Bulk',
    accentEn: 'Order Support',
    primaryUr: 'مینوفیکچرنگ اور بلک',
    accentUr: 'آرڈر سپورٹ',
    detailEn:
      'Long-term buyers and workshops can plan bulk orders with manufacturing-backed options where needed — clear communication from requirement to dispatch.',
    detailUr:
      'طویل مدتی خریدار اور ورکشاپس بلک آرڈر پلان کر سکتے ہیں؛ جہاں ضرورت ہو مینوفیکچرنگ سپورٹ بھی، ضرورت سے لے کر سپلائی تک واضح باتچیت۔',
    bulletsEn: [
      'Bulk pricing and quantity planning for serious buyers',
      'Manufacturing support where the job needs it',
      'Fast coordination for dispatch and pickup',
    ],
    bulletsUr: [
      'سنجیدہ خریداروں کے لئے بلک ریٹ اور مقدار کی پلاننگ',
      'ضرورت کے مطابق مینوفیکچرنگ سپورٹ',
      'ڈیلیوری اور پک اپ کے لئے تیز رابطہ',
    ],
    panel: 'from-amber-700/90 via-slate-900 to-slate-950',
  },
]

export default function ServicesPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-slate-100">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-slate-900 px-4 py-16 text-white md:px-8 md:py-20">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            as="h1"
            variant="dark"
            size="page"
            primaryEn="Our"
            accentEn="Services"
            primaryUr="ہماری"
            accentUr="سروسز"
            isUr={isUr}
          />
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-blue-100/95">
            {isUr
              ? 'ہم صرف پارٹس بیچنے تک محدود نہیں — فٹنگ، ہول سیل، اور بلک سپلائی تک ہماری سروسز کاروبار اور کسان دونوں کے لئے واضح اور قابلِ اعتماد ہیں۔'
              : 'We are not limited to selling parts alone — from fitting guidance to wholesale and bulk supply, our services stay clear and dependable for dealers and farmers alike.'}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            {isUr ? 'تفصیل سے' : 'In detail'}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
            {isUr ? 'ہم کیا فراہم کرتے ہیں' : 'What we provide'}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600" />
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {services.map((service, index) => {
            const reverse = index % 2 === 1
            return (
              <article
                key={service.key}
                className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/5"
              >
                <div
                  className={`flex flex-col md:min-h-[320px] md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="relative flex flex-1 flex-col justify-center p-8 md:p-12 lg:p-14 ps-10 md:ps-14">
                    <div
                      className="absolute inset-y-0 start-0 w-1 bg-gradient-to-b from-cyan-500 to-indigo-600 md:w-1.5"
                      aria-hidden
                    />
                    <span className="inline-flex w-fit items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {String(index + 1).padStart(2, '0')} — {isUr ? 'سروس' : 'Service'}
                    </span>
                    <div className="mt-5" dir={isUr ? 'rtl' : 'ltr'}>
                      <SectionHeading
                        as="h2"
                        size="compact"
                        className="!text-2xl md:!text-3xl"
                        primaryEn={service.primaryEn}
                        accentEn={service.accentEn}
                        primaryUr={service.primaryUr}
                        accentUr={service.accentUr}
                        isUr={isUr}
                        accentClassName="bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent"
                      />
                    </div>
                    <p
                      className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg"
                      dir={isUr ? 'rtl' : 'ltr'}
                    >
                      {isUr ? service.detailUr : service.detailEn}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {(isUr ? service.bulletsUr : service.bulletsEn).map((line) => (
                        <li
                          key={line}
                          className="flex gap-3 text-sm leading-relaxed text-slate-800 md:text-base"
                          dir={isUr ? 'rtl' : 'ltr'}
                        >
                          <span
                            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600"
                            aria-hidden
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`relative flex min-h-[200px] flex-1 items-center justify-center bg-gradient-to-br p-10 md:min-h-0 md:max-w-md lg:max-w-lg ${service.panel}`}
                  >
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.06%22%3E%3Cpath%20d%3D%22M0%2038.59l2.83-2.83%201.41%201.41L1.41%2040H0v-1.41zM0%201.4l2.83%202.83%201.41-1.41L1.41%200H0v1.41zM38.59%2040l-2.83-2.83%201.41-1.41L40%2038.59V40h-1.41zM40%201.41l-2.83%202.83-1.41-1.41L38.59%200H40v1.41zM20%2018.6l2.83-2.83%201.41%201.41L21.41%2020l2.83%202.83-1.41%201.41L20%2021.41l-2.83%202.83-1.41-1.41L18.59%2020l-2.83-2.83%201.41-1.41L20%2018.59z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-80" />
                    <span
                      className="relative text-7xl font-black tabular-nums text-white/[0.12] transition group-hover:text-white/20 md:text-8xl"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-indigo-200/80 bg-gradient-to-r from-indigo-950 via-slate-900 to-blue-950 px-6 py-10 text-center shadow-xl md:px-12">
          <p className="text-lg font-bold text-white md:text-xl">
            {isUr ? 'بلک ریٹ، ڈیلر سپلائی یا ماڈل کی تصدیق کے لئے رابطہ کریں۔' : 'Contact us for bulk rates, dealer supply, or model-wise part verification.'}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-xl bg-amber-400 px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-amber-300"
          >
            {isUr ? 'رابطہ صفحہ' : 'Go to Contact'}
          </Link>
        </div>
      </div>
    </main>
  )
}
