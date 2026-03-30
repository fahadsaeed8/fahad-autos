'use client'

import Link from 'next/link'
import { SectionHeading } from '@/app/components/section-heading'
import { useLanguage } from '@/app/lib/language-context'

const phones = [
  { labelEn: 'Mobile 1', labelUr: 'موبائل ۱', num: '0321-4964013', tel: '+923214964013' },
  { labelEn: 'Mobile 2', labelUr: 'موبائل ۲', num: '0300-4785384', tel: '+923004785384' },
] as const

const landline = { display: '042-37700794', tel: '+924237700794' }

const WHATSAPP_HREF = 'https://wa.me/923004785384'

export default function ContactPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden px-4 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(56,189,248,0.2),transparent)]" />
        <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <SectionHeading
            as="h1"
            variant="dark"
            size="page"
            centered
            primaryEn="Contact"
            accentEn="Us"
            primaryUr="رابطہ"
            accentUr="کریں"
            isUr={isUr}
          />
          <p className="mt-5 text-lg leading-relaxed text-blue-100/95">
            {isUr
              ? 'پارٹس کی قیمت، دستیابی یا بلک آرڈر کے لئے فون، واٹس ایپ یا دکان پر رابطہ کریں۔'
              : 'Reach us by phone, WhatsApp or visit the shop for parts pricing, availability and bulk orders.'}
          </p>
        </div>
      </section>

      <div className="relative -mt-8 rounded-t-[2rem] bg-slate-100 px-4 pb-16 pt-10 md:rounded-t-[2.5rem] md:px-8 md:pb-24 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Phone card */}
            <article className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_14px_40px_-18px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/5">
              <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600" aria-hidden />
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-cyan-300 shadow-inner"
                    aria-hidden
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1 text-start" dir={isUr ? 'rtl' : 'ltr'}>
                    <SectionHeading
                      as="h2"
                      size="card"
                      className="!text-xl md:!text-2xl"
                      primaryEn="Phone"
                      accentEn="Numbers"
                      primaryUr="فون"
                      accentUr="نمبرز"
                      isUr={isUr}
                    />
                    <p className="mt-1 text-sm text-slate-500">
                      {isUr ? 'براہ راست کال کے لئے' : 'Tap to call on mobile'}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {phones.map((p) => (
                    <li key={p.tel}>
                      <a
                        href={`tel:${p.tel}`}
                        className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 transition hover:border-indigo-200 hover:bg-indigo-50/50"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          {isUr ? p.labelUr : p.labelEn}
                        </span>
                        <span className="text-lg font-bold tabular-nums text-indigo-950">{p.num}</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {isUr ? 'لینڈ لائن' : 'Landline'}
                      </span>
                      <a href={`tel:${landline.tel}`} className="text-lg font-bold tabular-nums text-indigo-950 hover:underline">
                        {landline.display}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </article>

            {/* Address card */}
            <article className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_14px_40px_-18px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/5">
              <div className="h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600" aria-hidden />
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-orange-800 text-white shadow-inner"
                    aria-hidden
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1 text-start" dir={isUr ? 'rtl' : 'ltr'}>
                    <SectionHeading
                      as="h2"
                      size="card"
                      className="!text-xl md:!text-2xl"
                      primaryEn="Address"
                      primaryUr="پتہ"
                      isUr={isUr}
                    />
                    <p className="mt-1 text-sm text-slate-500">{isUr ? 'دکان کا مقام' : 'Shop location'}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4 rounded-2xl border border-slate-100 bg-slate-50/90 p-5">
                  <p className="leading-relaxed text-slate-800" lang="en">
                    Shop No. 43, Ramzan Chamber, 91/140 Badami Bagh, Lahore
                  </p>
                  <p className="leading-relaxed text-slate-700" dir="rtl" lang="ur">
                    دکان نمبر 43، رمضان چیمبر، 91/140 بادامی باغ، لاہور
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* WhatsApp strip */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-emerald-200/60 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 p-6 shadow-lg md:flex md:items-center md:justify-between md:gap-6 md:p-8">
            <div className="flex items-center gap-4" dir={isUr ? 'rtl' : 'ltr'}>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white md:text-lg">{isUr ? 'واٹس ایپ پر میسج' : 'Message on WhatsApp'}</p>
                <p className="mt-0.5 text-sm text-emerald-50/95">
                  {isUr ? '0300-4785384 پر فوری رابطہ' : 'Quick chat on 0300-4785384'}
                </p>
              </div>
            </div>
            <Link
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-emerald-800 shadow-md transition hover:bg-emerald-50 md:mt-0 md:w-auto"
            >
              {isUr ? 'چیٹ کھولیں' : 'Open chat'}
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
