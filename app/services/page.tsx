'use client'

import Link from 'next/link'
import { GlowEllipse } from '@/app/components/motion'
import { brand } from '@/app/lib/brand'
import { useLanguage } from '@/app/lib/language-context'

const services = [
  {
    key: 'export',
    primaryEn: 'International Sales',
    accentEn: '& Export',
    primaryUr: 'بین الاقوامی سیلز',
    accentUr: 'اور ایکسپورٹ',
    detailEn:
      'Importers and distributors send a parts list and receive a written quotation. We then follow the order through packing and shipment from Lahore.',
    detailUr:
      'درآمدکنندگان اور ڈسٹری بیوٹرز پارٹس لسٹ بھیجتے ہیں اور تحریری کوٹیشن پاتے ہیں۔ اس کے بعد آرڈر پیکنگ اور لاہور سے شپمنٹ تک فالو ہوتا ہے۔',
    bulletsEn: [
      'Quotations for Fiat, New Holland and other tractor brands',
      'Order follow-up by email and WhatsApp',
      'Packing and shipment coordination from Pakistan',
    ],
    bulletsUr: [
      'فیاٹ، نیو ہالینڈ اور دیگر ٹریکٹر برانڈز کی کوٹیشن',
      'ای میل اور واٹس ایپ پر آرڈر فالو اپ',
      'پاکستان سے پیکنگ اور شپمنٹ کوآرڈینیشن',
    ],
  },
  {
    key: 'brands',
    primaryEn: 'Brand-Specific Support',
    accentEn: 'Fiat / New Holland / others',
    primaryUr: 'برانڈ اسپیسفک سپورٹ',
    accentUr: 'فیاٹ / نیو ہالینڈ / دیگر',
    detailEn:
      'We help you pick the right local parts for your tractor model, not just any part, but what actually fits field use and workshop demand.',
    detailUr:
      'ہم صرف کوئی بھی پارٹ نہیں، بلکہ آپ کے ٹریکٹر ماڈل اور کھیت یا ورکشاپ کی اصل ضرورت کے مطابق درست لوکل پارٹس کی رہنمائی دیتے ہیں۔',
    bulletsEn: [
      'Model-wise fitting guidance for Fiat, New Holland and other brands',
      'Practical advice for daily farming and repair use',
      'Retail and wholesale quantity options',
    ],
    bulletsUr: [
      'فیاٹ، نیو ہالینڈ اور دیگر برانڈز کے لئے ماڈل کے مطابق فٹنگ گائیڈ',
      'روزمرہ کھیت اور مرمت کے لئے عملی مشورہ',
      'ریٹیل اور ہول سیل دونوں میں دستیابی',
    ],
  },
  {
    key: 'toplink',
    primaryEn: 'Top Link & Lift Link',
    accentEn: 'Wholesale',
    primaryUr: 'ٹاپ لنک اور لفٹ لنک',
    accentUr: 'ہول سیل',
    detailEn:
      'Strong wholesale dealing for shops and market dealers who need steady Top Link and Lift Link stock with clear rates and repeat supply.',
    detailUr:
      'دکانوں اور مارکیٹ ڈیلرز کے لئے ٹاپ لنک اور لفٹ لنک کی مستقل سپلائی، واضح ریٹس اور بار بار آرڈر کی سہولت۔',
    bulletsEn: [
      'Top Link and Lift Link in dealer-focused quantities',
      'Support for market shops and workshop demand',
      'Repeat orders at wholesale rates',
    ],
    bulletsUr: [
      'ٹاپ لنک اور لفٹ لنک ڈیلر لیول مقدار میں',
      'مارکیٹ دکانوں اور ورکشاپ ڈیمانڈ کے مطابق',
      'بار بار آرڈر ہول سیل ریٹ پر',
    ],
  },
  {
    key: 'bulk',
    primaryEn: 'Top Link',
    accentEn: 'Manufacturing',
    primaryUr: 'ٹاپ لنک',
    accentUr: 'مینوفیکچرنگ',
    detailEn:
      `Top Link is manufactured at the shop under the brand ${brand.manufacturingEn} and sold wholesale. Other parts are quoted only after the stock is checked. Orders can be picked up in Badami Bagh or packed for shipment.`,
    detailUr:
      `ٹاپ لنک دکان پر، برانڈ ${brand.manufacturingUr} کے تحت، بنتا ہے اور ہول سیل بکتا ہے۔ باقی پارٹس کا کوٹ اسٹاک چیک کے بعد ہوتا ہے۔ آرڈر بادامی باغ سے لیا جا سکتا ہے یا شپمنٹ کے لئے پیک کیا جا سکتا ہے۔`,
    bulletsEn: [
      `Manufactured under ${brand.manufacturingEn}`,
      'Top Link made and packed for dealers',
      'OEM number for the tractor model written on the quotation',
      'Other parts quoted from checked stock',
    ],
    bulletsUr: [
      `برانڈ ${brand.manufacturingUr} کے تحت تیار`,
      'ڈیلر کے لئے بنا اور پیک کیا ہوا ٹاپ لنک',
      'ٹریکٹر ماڈل کا OEM نمبر کوٹیشن پر لکھا جاتا ہے',
      'باقی پارٹس چیک شدہ اسٹاک سے کوٹ',
    ],
  },
]

const cardWash = [
  'linear-gradient(155deg, rgba(217,185,106,0.5) 0%, #161616 58%)',
  'linear-gradient(205deg, rgba(166,133,58,0.55) 0%, #1a1408 48%, #0c0c0c 100%)',
  'linear-gradient(165deg, rgba(184,146,61,0.4) 0%, #12100c 64%)',
  'linear-gradient(180deg, rgba(217,185,106,0.28) 0%, #161616 52%)',
]

export default function ServicesPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const poster = isUr ? '' : 'font-poster uppercase tracking-[0.02em]'

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#F4F0E6]">
      <section className="relative overflow-hidden px-8 pb-6 pt-28 md:px-14 md:pt-32 lg:px-20">
        <GlowEllipse />
        <div className="relative z-10 mx-auto max-w-8xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">{isUr ? 'سروس' : 'The work'}</p>
          <h1
            className={`mt-3 max-w-3xl text-[#F4F0E6] ${poster} ${isUr ? 'text-5xl' : 'text-6xl md:text-7xl'} leading-none`}
            style={isUr ? { lineHeight: 1.7 } : undefined}
          >
            {isUr ? 'ہماری سروسز' : 'Our services'}
          </h1>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr
              ? 'ریٹ سے پہلے اسٹاک اور کوالٹی کنفرم ہوتی ہے۔ کوٹیشن، آرڈر، پیکنگ اور شپمنٹ لاہور کی دکان سے ہوتی ہے۔'
              : 'Stock and quality are confirmed before the rate. Quotations, orders, packing and shipment are handled from the Lahore shop.'}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-8 pb-16 md:px-14 lg:px-20">
        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.key}
              className="relative overflow-hidden rounded-[22px] border border-[#B8923D]/35 p-6"
              style={{ background: cardWash[index % cardWash.length] }}
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#F5E8C8] via-[#B8923D] to-transparent" />
              <p className="font-poster text-6xl leading-none text-transparent" style={{ WebkitTextStroke: '1.5px #6d645e' }}>
                0{index + 1}
              </p>
              <h2 className={`relative mt-2 text-[#F4F0E6] ${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
                {isUr ? `${service.primaryUr} ${service.accentUr}` : `${service.primaryEn} ${service.accentEn}`}
              </h2>
              <p className="relative mt-3 font-mono text-sm leading-7 text-[#F4F0E6]/85" style={isUr ? { lineHeight: 1.9 } : undefined}>
                {isUr ? service.detailUr : service.detailEn}
              </p>
              <ul className="relative mt-4 space-y-2">
                {(isUr ? service.bulletsUr : service.bulletsEn).map((line) => (
                  <li key={line} className="text-sm text-[#F4F0E6]" style={isUr ? { lineHeight: 1.9 } : undefined}>
                    <span className="me-2 font-mono text-xs text-[#B8923D]">/</span>
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="relative mt-4 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#8A6B25] via-[#B8923D] to-[#D9B96A] p-6 text-[#1A1408] md:flex md:items-center md:justify-between md:gap-8">
          <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-white/70 to-transparent" />
          <p className={`max-w-2xl ${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
            {isUr ? 'پارٹس لسٹ بھیجیں، ہم اسٹاک اور ریٹ کے ساتھ کوٹیشن واپس بھیجتے ہیں۔' : 'Send a parts list. We reply with stock and a rate.'}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-12 shrink-0 items-center rounded-full bg-[#1A1408] px-6 text-sm font-semibold text-[#F5E8C8] md:mt-0"
          >
            {isUr ? 'رابطہ صفحہ' : 'Go to Contact'}
          </Link>
        </article>
      </section>
    </main>
  )
}
