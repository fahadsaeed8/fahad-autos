'use client'

import Link from 'next/link'
import { GlowEllipse } from '@/app/components/motion'
import { brand } from '@/app/lib/brand'
import { useLanguage } from '@/app/lib/language-context'

const focusItems = [
  {
    en: 'Fiat, New Holland and other brands.',
    ur: 'فیاٹ، نیو ہالینڈ اور دیگر برانڈز',
  },
  {
    en: 'Top Link & Lift Link wholesale.',
    ur: 'ٹاپ لنک اور لفٹ لنک ہول سیل',
  },
  {
    en: 'Export quotations and shipment follow-up.',
    ur: 'ایکسپورٹ کوٹیشن اور شپمنٹ فالو اپ',
  },
  {
    en: 'Model-wise fitting guidance.',
    ur: 'ماڈل کے مطابق فٹنگ رہنمائی',
  },
] as const

const values = [
  {
    titleEn: 'Experience',
    titleUr: 'تجربہ',
    descEn: '25 years supplying tractor parts for workshops, dealers and farmers.',
    descUr: 'ورکشاپ، ڈیلر اور کسانوں کے لئے ٹریکٹر پارٹس میں ۲۵ سال کا تجربہ۔',
  },
  {
    titleEn: 'Trust',
    titleUr: 'بھروسہ',
    descEn: 'Straight rates, clear stock talk, and guidance that matches real field use.',
    descUr: 'سیدھے ریٹ، واضح اسٹاک بات، اور کھیت کے اصل استعمال سے میل کھاتی رہنمائی۔',
  },
  {
    titleEn: 'Service',
    titleUr: 'سروس',
    descEn: 'A written quotation for importers and distributors, with order and shipment follow-up.',
    descUr: 'درآمدکنندگان اور ڈسٹری بیوٹرز کے لئے تحریری کوٹیشن، پھر آرڈر اور شپمنٹ کی پیروی۔',
  },
] as const

const cardWash = [
  'linear-gradient(155deg, rgba(217,185,106,0.45) 0%, #161616 58%)',
  'linear-gradient(205deg, rgba(166,133,58,0.55) 0%, #1a1408 48%, #0c0c0c 100%)',
  'linear-gradient(165deg, rgba(184,146,61,0.4) 0%, #12100c 64%)',
]

export default function AboutPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const poster = isUr ? '' : 'font-poster uppercase tracking-[0.02em]'

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#F4F0E6]">
      <section className="relative overflow-hidden px-8 pb-6 pt-28 md:px-14 md:pt-32 lg:px-20">
        <GlowEllipse />
        <div className="relative z-10 mx-auto max-w-8xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">
            {isUr ? brand.ur : brand.en}
          </p>
          <h1
            className={`mt-3 max-w-3xl text-[#F4F0E6] ${poster} ${isUr ? 'text-5xl' : 'text-6xl md:text-7xl'} leading-none`}
            style={isUr ? { lineHeight: 1.7 } : undefined}
          >
            {isUr ? 'ہمارے بارے میں' : 'About us'}
          </h1>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr
              ? 'لاہور سے ٹریکٹر اسپیئر پارٹس: ہول سیل، ریٹیل، اور بیرونِ ملک خریداروں کے لئے کوٹیشن۔'
              : 'Tractor spare parts from Lahore: wholesale, retail, and quotations for overseas buyers.'}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-8 pb-16 md:px-14 lg:px-20">
        <article className="relative overflow-hidden rounded-[22px] border border-[#B8923D]/35 p-6 md:p-8" style={{ background: cardWash[0] }}>
          <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#F5E8C8] via-[#B8923D] to-transparent" />
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">{isUr ? 'کہانی' : 'The story'}</p>
          <h2 className={`mt-3 text-[#F4F0E6] ${poster} ${isUr ? 'text-3xl' : 'text-4xl'} leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
            {isUr ? 'ہم کون ہیں' : 'Who we are'}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#F4F0E6]" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr
              ? `${brand.ur} لاہور سے ۲۵ سال سے ٹریکٹر پارٹس دیتا ہے۔ قیمت سے پہلے اسٹاک، کوالٹی، ہول سیل ریٹ اور پیکنگ کنفرم ہوتی ہے۔ بیرونِ ملک خریدار کو تحریری کوٹ ملتا ہے، پھر پیکنگ اور شپمنٹ بادامی باغ کی دکان سے ہوتی ہے۔`
              : `${brand.en} has supplied tractor parts from Lahore for 25 years. Stock, quality, the wholesale rate and packing are confirmed before a price is sent. An overseas buyer receives a written quotation, then packing and shipment from the shop in Badami Bagh.`}
          </p>
          <p className="mt-4 max-w-3xl font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr
              ? 'فیاٹ، نیو ہالینڈ اور دیگر برانڈز کے اسپیئر پارٹس، ٹاپ لنک، لفٹ لنک اور لنکیج آئٹمز ہول سیل، ریٹیل اور ایکسپورٹ کے لئے دستیاب ہیں۔'
              : 'Spare parts for Fiat, New Holland and other brands, plus Top Link, Lift Link and linkage items, are available for wholesale, retail and export.'}
          </p>
        </article>

        <div className="mt-10">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">{isUr ? 'توجہ' : 'The focus'}</p>
          <h2 className={`mt-3 text-[#F4F0E6] ${poster} ${isUr ? 'text-3xl' : 'text-4xl'} leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
            {isUr ? 'ہماری خصوصی توجہ' : 'What we focus on'}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusItems.map((item, index) => (
              <article
                key={item.en}
                className="relative overflow-hidden rounded-[22px] border border-[#B8923D]/35 p-5"
                style={{ background: cardWash[index % cardWash.length] }}
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#B8923D] to-transparent" />
                <p className="font-mono text-xs text-[#B8923D]">0{index + 1}</p>
                <p className="mt-3 text-sm leading-6 text-[#F4F0E6]" style={isUr ? { lineHeight: 1.9 } : undefined}>
                  {isUr ? item.ur : item.en}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">{isUr ? 'اقدار' : 'The values'}</p>
          <h2 className={`mt-3 text-[#F4F0E6] ${poster} ${isUr ? 'text-3xl' : 'text-4xl'} leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
            {isUr ? 'ہماری اقدار' : 'Our values'}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {values.map((item, index) => (
              <article
                key={item.titleEn}
                className="relative overflow-hidden rounded-[22px] border border-[#B8923D]/35 p-6"
                style={{ background: cardWash[index % cardWash.length] }}
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#F5E8C8] via-[#B8923D] to-transparent" />
                <h3 className={`text-[#F4F0E6] ${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
                  {isUr ? item.titleUr : item.titleEn}
                </h3>
                <p className="mt-3 font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
                  {isUr ? item.descUr : item.descEn}
                </p>
              </article>
            ))}
          </div>
        </div>

        <article className="relative mt-10 overflow-hidden rounded-[22px] border border-[#B8923D]/40 bg-[#161616] p-6 md:flex md:items-center md:justify-between md:gap-8">
          <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#B8923D] to-transparent" />
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">{isUr ? 'مقام' : 'Location'}</p>
            <h2 className={`mt-3 text-[#F4F0E6] ${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
              {isUr ? 'لاہور، پاکستان' : 'Lahore, Pakistan'}
            </h2>
            <p className="mt-3 max-w-xl font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
              {(isUr ? brand.addressUr : brand.addressEn).join(isUr ? '، ' : ', ')}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
            <Link
              href="/parts"
              className="inline-flex min-h-12 items-center rounded-full border border-[#F5E8C8]/70 bg-gradient-to-br from-[#F5E8C8] via-[#C6A04A] to-[#8A6B25] px-6 text-sm font-semibold tracking-wide text-[#1A1408]"
            >
              {isUr ? 'پارٹس دیکھیں' : 'View parts'}
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-full border border-[#B8923D]/50 px-6 text-sm font-semibold tracking-wide text-[#F4F0E6] hover:border-[#F5E8C8] hover:text-[#F5E8C8]"
            >
              {isUr ? 'رابطہ' : 'Contact'}
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}
