'use client'

import Link from 'next/link'
import { GlowEllipse } from '@/app/components/motion'
import { brand } from '@/app/lib/brand'
import { useLanguage } from '@/app/lib/language-context'

const enquiry = [
  {
    labelEn: 'Tractor',
    labelUr: 'ٹریکٹر',
    textEn: 'Brand and model, so the part is matched before a rate is given.',
    textUr: 'برانڈ اور ماڈل، تاکہ ریٹ سے پہلے پارٹ ملایا جا سکے۔',
  },
  {
    labelEn: 'Part',
    labelUr: 'پارٹ',
    textEn: 'The part name, or a clear photograph of the part to be replaced.',
    textUr: 'پارٹ کا نام، یا جس پرزے کو بدلنا ہے اس کی واضح تصویر۔',
  },
  {
    labelEn: 'Quantity',
    labelUr: 'تعداد',
    textEn: 'Number of pieces, or cartons when the order is for a dealer.',
    textUr: 'عدد، یا ڈیلر کے آرڈر پر کارٹن۔',
  },
  {
    labelEn: 'Terms',
    labelUr: 'شرط',
    textEn: 'Wholesale or retail.',
    textUr: 'ہول سیل یا ریٹیل۔',
  },
  {
    labelEn: 'Delivery',
    labelUr: 'سپلائی',
    textEn: 'Pickup at the shop, or the destination city or port when the order is packed for shipment.',
    textUr: 'دکان سے پک اپ، یا اگر آرڈر شپمنٹ کے لئے پیک ہو تو منزل کا شہر یا پورٹ۔',
  },
] as const

export default function ContactPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const poster = isUr ? '' : 'font-poster uppercase tracking-[0.02em]'

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#F4F0E6]">
      <section className="relative overflow-hidden px-8 pb-10 pt-28 md:px-14 md:pt-32 lg:px-20">
        <GlowEllipse />
        <div className="relative z-10 mx-auto max-w-8xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">
            {isUr ? 'کوٹ' : 'Quotation'}
          </p>
          <h1
            className={`mt-3 max-w-3xl text-[#F4F0E6] ${poster} ${isUr ? 'text-5xl' : 'text-6xl md:text-7xl'} leading-none`}
            style={isUr ? { lineHeight: 1.7 } : undefined}
          >
            {isUr ? 'پارٹس لسٹ بھیجیں' : 'Send the parts list'}
          </h1>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr
              ? 'درآمد کنندہ، ڈسٹری بیوٹر یا ورکشاپ یہ پانچ باتیں بھیجے۔ ہم اسٹاک، کوالٹی اور ریٹ لکھ کر واپس بھیجتے ہیں۔'
              : 'An importer, distributor or workshop sends these five points. We reply with stock, quality and a rate.'}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-8xl gap-4 px-8 pb-16 md:px-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-20">
        <article className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#8A6B25] via-[#B8923D] to-[#D9B96A] p-6 text-[#1A1408] md:p-8">
          <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-white/70 to-transparent" />
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#3d2e10]">
            {isUr ? 'انکوائری' : 'Enquiry'}
          </p>
          <h2 className={`mt-2 ${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
            {isUr ? 'کوٹیشن کی تفصیل' : 'Details for the quotation'}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#1A1408]/80" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr
              ? 'ایک پیغام کافی ہے۔ جواب میں اسٹاک، دی جانے والی کوالٹی، اور ریٹ لکھا جاتا ہے۔'
              : 'One message is enough. The reply states the stock, the quality offered, and the rate.'}
          </p>
          <ol className="mt-6 divide-y divide-[#1A1408]/15 border-y border-[#1A1408]/15">
            {enquiry.map((item, index) => (
              <li key={item.labelEn} className="flex gap-4 py-3">
                <span className="w-8 shrink-0 font-mono text-xs text-[#3d2e10]">0{index + 1}</span>
                <span>
                  <span className={`block text-[#3d2e10] ${isUr ? 'text-base' : 'font-mono text-[11px] uppercase tracking-[0.16em]'}`}>
                    {isUr ? item.labelUr : item.labelEn}
                  </span>
                  <span className="mt-1 block text-sm leading-6" style={isUr ? { lineHeight: 1.9 } : undefined}>
                    {isUr ? item.textUr : item.textEn}
                  </span>
                </span>
              </li>
            ))}
          </ol>
          <Link
            href={brand.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 items-center rounded-full bg-[#1A1408] px-5 text-sm font-semibold text-[#F5E8C8]"
          >
            {isUr ? 'واٹس ایپ پر انکوائری بھیجیں' : 'Send the enquiry on WhatsApp'}
          </Link>
        </article>

        <div className="grid gap-4">
          <article className="relative overflow-hidden rounded-[22px] border border-[#B8923D]/35 p-6" style={{ background: 'linear-gradient(165deg, rgba(217,185,106,0.28) 0%, #161616 48%)' }}>
            <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#F5E8C8] via-[#B8923D] to-transparent" />
            <h2 className={`${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
              {isUr ? 'فون' : 'Phone'}
            </h2>
            <ul className="mt-4 space-y-2">
              {brand.phones.map((phone) => (
                <li key={phone.tel}>
                  <a href={`tel:${phone.tel}`} translate="no" className={`notranslate ${phone.main ? 'font-semibold text-[#F5E8C8]' : 'text-[#F4F0E6]'}`}>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#B8923D]">{isUr ? phone.labelUr : phone.labelEn}</span>
                    <span className="mx-2 text-[#6F675F]">·</span>
                    <span className="tabular-nums">{isUr ? phone.displayUr : phone.displayEn}</span>
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-[22px] border border-[#B8923D]/35 p-6" style={{ background: 'linear-gradient(165deg, rgba(184,146,61,0.22) 0%, #12100c 60%)' }}>
            <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#B8923D] to-transparent" />
            <h2 className={`${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
              {isUr ? 'ای میل' : 'Email'}
            </h2>
            <ul className="mt-4 space-y-2">
              {brand.emails.map((item) => (
                <li key={item.address}>
                  <a href={`mailto:${item.address}`} translate="no" className={`notranslate ${item.main ? 'font-semibold text-[#F5E8C8]' : 'text-[#F4F0E6]'}`}>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#B8923D]">{isUr ? item.labelUr : item.labelEn}</span>
                    <span className="mx-2 text-[#6F675F]">·</span>
                    <span className="break-all">{item.address}</span>
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#161616] p-6">
            <h2 className={`${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
              {isUr ? 'پتہ' : 'Address'}
            </h2>
            <address className="mt-4 text-sm not-italic leading-7 text-[#A39B90]" dir={isUr ? 'rtl' : 'ltr'}>
              {(isUr ? brand.addressUr : brand.addressEn).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </article>
        </div>
      </section>
    </main>
  )
}
