'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { GlowEllipse, Reveal } from '@/app/components/motion'
import ShopCards from '@/app/components/shop-card'
import { categoryImages } from '@/app/lib/site-images'
import { brand } from '@/app/lib/brand'
import { PART_CATEGORIES } from '@/app/lib/parts-data'
import { useLanguage } from '@/app/lib/language-context'

const highlights = [
  {
    en: 'Fiat, New Holland and other brands',
    ur: 'فیاٹ، نیو ہالینڈ اور دیگر برانڈز',
    detailEn: 'The part is matched to the tractor model before a rate is given.',
    detailUr: 'ریٹ دینے سے پہلے پارٹ ٹریکٹر کے ماڈل سے ملایا جاتا ہے۔',
  },
  {
    en: 'Wholesale rates and export packing',
    ur: 'ہول سیل ریٹ اور ایکسپورٹ پیکنگ',
    detailEn: 'Stock, quality and packing are confirmed before the price is sent.',
    detailUr: 'قیمت بھیجنے سے پہلے اسٹاک، کوالٹی اور پیکنگ کنفرم کی جاتی ہے۔',
  },
  {
    en: 'Quotations for overseas buyers',
    ur: 'بیرونِ ملک خریداروں کے لئے کوٹیشن',
    detailEn: 'Importers, distributors and workshops receive a written quote. Packing and shipment follow the order.',
    detailUr: 'درآمدکنندگان، ڈسٹری بیوٹرز اور ورکشاپس کو تحریری کوٹ ملتا ہے۔ پیکنگ اور شپمنٹ آرڈر کے بعد ہوتی ہے۔',
  },
]

const categories = [
  {
    key: 'fiat',
    title: 'Fiat Spare Parts',
    titleUr: 'فیاٹ اسپیئر پارٹس',
    image: categoryImages.fiat,
    en: {
      overview: 'Fiat local tractor parts available with practical quality for local farming needs.',
      items: ['Local market fitting support', 'Regular stock availability', 'Retail and wholesale supply'],
    },
    ur: {
      overview: 'فیاٹ کے لوکل ٹریکٹر پارٹس مقامی کھیتی باڑی کی ضروریات کے مطابق دستیاب ہیں۔',
      items: ['لوکل مارکیٹ فٹنگ سپورٹ', 'مستقل اسٹاک دستیابی', 'ریٹیل اور ہول سیل سپلائی'],
    },
  },
  {
    key: 'massey',
    title: 'Massey Spare Parts',
    titleUr: 'میسی اسپیئر پارٹس',
    image: categoryImages.massey,
    en: {
      overview: 'Massey local parts range for mechanics and farmers with reliable compatibility.',
      items: ['Model-based guidance', 'Workshop-friendly supply', 'Daily-use durable quality'],
    },
    ur: {
      overview: 'میسی کے لوکل پارٹس مکینکس اور کسان بھائیوں کی ضروریات کے مطابق دستیاب ہیں۔',
      items: ['ماڈل کے مطابق رہنمائی', 'ورکشاپ کے لئے بہتر سپلائی', 'روزمرہ استعمال کے لئے مضبوط کوالٹی'],
    },
  },
  {
    key: 'ford',
    title: 'Ford Spare Parts',
    titleUr: 'فورڈ اسپیئر پارٹس',
    image: categoryImages.ford,
    en: {
      overview: 'Ford local tractor parts for replacement and maintenance with easy availability.',
      items: ['Reliable local options', 'Mechanic support', 'Retail and bulk quantity'],
    },
    ur: {
      overview: 'فورڈ ٹریکٹر کے لوکل پارٹس مرمت اور تبدیلی کے لئے آسانی سے دستیاب ہیں۔',
      items: ['قابلِ اعتماد لوکل آپشنز', 'مکینک سپورٹ', 'ریٹیل اور بلک مقدار'],
    },
  },
  {
    key: 'toplink',
    title: 'Top Link',
    titleUr: 'ٹاپ لنک',
    image: categoryImages.toplink,
    en: {
      overview: 'Top Link is one of our core products with wholesale dealing support.',
      items: ['Multiple sizes available', 'Wholesale dealer rates', 'Bulk order handling'],
    },
    ur: {
      overview: 'ٹاپ لنک ہماری بنیادی مصنوعات میں شامل ہے اور ہول سیل سپورٹ کے ساتھ دستیاب ہے۔',
      items: ['مختلف سائز دستیاب', 'ہول سیل ڈیلر ریٹس', 'بلک آرڈر ہینڈلنگ'],
    },
  },
  {
    key: 'liftlink',
    title: 'Lift Link',
    titleUr: 'لفٹ لنک',
    image: categoryImages.liftlink,
    en: {
      overview: 'Lift Link stock is available with stable supply for market demand.',
      items: ['Market-demand items', 'Consistent stock flow', 'Dealer quantity available'],
    },
    ur: {
      overview: 'لفٹ لنک کا اسٹاک مارکیٹ ڈیمانڈ کے مطابق مستقل سپلائی کے ساتھ دستیاب ہے۔',
      items: ['مارکیٹ ڈیمانڈ آئٹمز', 'مسلسل اسٹاک فلو', 'ڈیلر مقدار دستیاب'],
    },
  },
  {
    key: 'hydraulic',
    title: 'Hydraulic & Linkage Items',
    titleUr: 'ہائیڈرولک اور لنکیج آئٹمز',
    image: categoryImages.hydraulic,
    en: {
      overview: 'Hydraulic and linkage items available for local repairs and field work support.',
      items: ['Linkage-related local items', 'Workshop demand stock', 'Wholesale and retail availability'],
    },
    ur: {
      overview: 'ہائیڈرولک اور لنکیج آئٹمز مقامی مرمت اور کھیت کے کام کے لئے دستیاب ہیں۔',
      items: ['لنکیج سے متعلق لوکل آئٹمز', 'ورکشاپ ڈیمانڈ اسٹاک', 'ہول سیل اور ریٹیل دستیابی'],
    },
  },
]

const tradePoints = [
  { en: 'Written quote', ur: 'تحریری کوٹ' },
  { en: 'Stock checked first', ur: 'پہلے اسٹاک چیک' },
  { en: 'Wholesale and retail', ur: 'ہول سیل اور ریٹیل' },
  { en: 'Export packing', ur: 'ایکسپورٹ پیکنگ' },
]

const workflow = [
  {
    enTitle: 'Send the parts list',
    urTitle: 'پارٹس لسٹ بھیجیں',
    enText: 'Brand, model, part name and quantity. A photo of the old part helps.',
    urText: 'برانڈ، ماڈل، پارٹ کا نام اور تعداد۔ پرانے پارٹ کی تصویر مدد کرتی ہے۔',
  },
  {
    enTitle: 'Stock, quality and price',
    urTitle: 'اسٹاک، کوالٹی اور قیمت',
    enText: 'We confirm what is in stock, the quality, and the wholesale or retail rate.',
    urText: 'ہم اسٹاک، کوالٹی اور ہول سیل یا ریٹیل ریٹ کنفرم کرتے ہیں۔',
  },
  {
    enTitle: 'Packing and shipment',
    urTitle: 'پیکنگ اور شپمنٹ',
    enText: 'After the order, packing is done at the shop and shipment is coordinated with your forwarder.',
    urText: 'آرڈر کے بعد پیکنگ دکان پر ہوتی ہے اور شپمنٹ آپ کے فارورڈر کے ساتھ طے ہوتی ہے۔',
  },
]

const cardWash = [
  'linear-gradient(155deg, rgba(217,185,106,0.62) 0%, #161616 58%)',
  'linear-gradient(205deg, #A6853A 0%, #1a1408 48%, #0c0c0c 100%)',
  'linear-gradient(165deg, rgba(184,146,61,0.5) 0%, #12100c 64%)',
]

const factsEn = ['25 years experience', 'Fiat', 'Massey', 'Ford', 'New Holland', 'Top Link', 'All tractor parts', 'Lahore, Pakistan']
const factsUr = ['۲۵ سال کا تجربہ', 'فیاٹ', 'میسی', 'فورڈ', 'نیو ہالینڈ', 'ٹاپ لنک', 'ٹریکٹر کی تمام چیزیں', 'لاہور، پاکستان']

const quoteSend = [
  { en: 'Tractor brand and model', ur: 'ٹریکٹر کا برانڈ اور ماڈل' },
  { en: 'Part name, or a photo of the old part', ur: 'پارٹ کا نام، یا پرانے پارٹ کی تصویر' },
  { en: 'Quantity', ur: 'تعداد' },
  { en: 'Wholesale or retail', ur: 'ہول سیل یا ریٹیل' },
  { en: 'For export: destination city or port, so packing can be planned', ur: 'ایکسپورٹ کے لئے: منزل کا شہر یا پورٹ، تاکہ پیکنگ طے ہو' },
]

const quoteReply = [
  { en: 'Whether that part is in stock', ur: 'وہ پارٹ اسٹاک میں ہے یا نہیں' },
  { en: 'The quality being offered, written on the quote', ur: 'جو کوالٹی دی جا رہی ہے، کوٹ پر لکھی ہوئی' },
  { en: 'The rate', ur: 'ریٹ' },
  { en: 'A packing note when the order is for shipment', ur: 'شپمنٹ والے آرڈر پر پیکنگ کی تفصیل' },
]

const faqs = [
  {
    qEn: 'Are these genuine parts?',
    qUr: 'کیا یہ اوریجنل پارٹس ہیں؟',
    aEn: 'The shop deals in local parts for Fiat, Massey and Ford. Top Link is sold wholesale and manufactured here. The quotation names what is being offered. A local part is not described as genuine.',
    aUr: 'دکان فیاٹ، میسی اور فورڈ کے لوکل پارٹس رکھتی ہے۔ ٹاپ لنک ہول سیل بھی ہے اور یہیں بنتا بھی ہے۔ کوٹیشن میں لکھا ہوتا ہے کیا دیا جا رہا ہے۔ لوکل پارٹ کو اوریجنل نہیں لکھا جاتا۔',
  },
  {
    qEn: 'Is every part in stock?',
    qUr: 'کیا ہر پارٹ اسٹاک میں ہے؟',
    aEn: 'The counter covers engine, clutch, hydraulics, linkage, brakes, electrical, PTO, cooling, belts, tyres and field items. A named part is checked in stock before the rate is sent.',
    aUr: 'کاؤنٹر پر انجن، کلچ، ہائیڈرولک، لنکیج، بریک، بجلی، پی ٹی او، کولنگ، بیلٹ، ٹائر اور کھیت کے سامان آتے ہیں۔ جس پارٹ کا نام آئے، ریٹ سے پہلے اس کا اسٹاک دیکھا جاتا ہے۔',
  },
  {
    qEn: 'Can I buy one piece, or only a carton?',
    qUr: 'ایک عدد بھی ملے گا، یا صرف کارٹن؟',
    aEn: 'Both. A workshop can buy retail and a dealer can buy wholesale. The quantity you need is written on the quote.',
    aUr: 'دونوں۔ ورکشاپ ریٹیل لے سکتی ہے اور ڈیلر ہول سیل۔ جو تعداد چاہیے وہ کوٹ پر لکھی جاتی ہے۔',
  },
  {
    qEn: 'How does an order leave Lahore?',
    qUr: 'آرڈر لاہور سے کیسے جاتا ہے؟',
    aEn: 'You send the list. We reply with stock and a rate. After the order, packing is done at Shop No. 43, Ramzan Chamber, Badami Bagh, and shipment is coordinated with your forwarder.',
    aUr: 'آپ لسٹ بھیجتے ہیں۔ ہم اسٹاک اور ریٹ واپس بھیجتے ہیں۔ آرڈر کے بعد پیکنگ دکان نمبر 43، رمضان چیمبر، بادامی باغ پر ہوتی ہے، اور شپمنٹ آپ کے فارورڈر کے ساتھ طے ہوتی ہے۔',
  },
]

export default function Home() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const poster = isUr ? '' : 'font-poster uppercase tracking-[0.02em]'
  const facts = isUr ? factsUr : factsEn
  const activeCopy = isUr ? activeCategory.ur : activeCategory.en

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#F4F0E6]">
      <section className="relative overflow-hidden">
        <GlowEllipse />
        <p
          aria-hidden
          className="stroke-pulse pointer-events-none absolute left-[34%] top-1/2 hidden -translate-y-1/2 font-poster text-[14rem] uppercase leading-none tracking-wide text-transparent lg:block"
          style={{ WebkitTextStroke: '1px rgba(184,146,61,0.28)' }}
        >
          Parts
        </p>
        <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-8xl items-center gap-10 px-8 pb-16 pt-32 md:px-14 md:pb-20 md:pt-36 lg:grid-cols-2 lg:gap-14 lg:px-20 lg:pb-24 lg:pt-40">
          <div className="min-w-0" style={{ containerType: 'inline-size' }}>
            <p className="rise max-w-full font-mono text-[13px] uppercase tracking-[0.14em] text-[#B8923D] sm:tracking-[0.18em]">
              {isUr ? brand.channelsUr : brand.channelsEn}
            </p>
            <h1
              className={`mt-4 max-w-full text-[#F4F0E6] ${poster} ${isUr ? 'rise rise-d1 text-[clamp(2.8rem,14cqw,5.6rem)]' : 'text-[clamp(3.6rem,20cqw,8rem)] leading-[0.88]'}`}
              style={isUr ? { lineHeight: 1.7 } : undefined}
            >
              {isUr ? (
                'فہد ٹریکٹرز اینڈ آٹوز'
              ) : (
                <>
                  <span className="rise rise-d1 block">Fahad</span>
                  <span className="rise rise-d2 block text-[#B8923D]">Tractors</span>
                  <span className="rise rise-d3 block text-transparent" style={{ WebkitTextStroke: '0.035em #6d645e' }}>
                    and Autos
                  </span>
                </>
              )}
            </h1>
            <p className="rise rise-d4 mt-6 max-w-xl font-mono text-sm leading-7 text-[#A39B90]">
              {isUr ? brand.lineUr : brand.lineEn}
            </p>
            <p className="rise rise-d5 mt-3 font-mono text-sm tracking-wide text-[#F5E8C8]">
              {isUr ? brand.yearsUr : brand.yearsEn}
            </p>
            <div className="rise rise-d6 mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center rounded-full border border-[#F5E8C8]/70 bg-gradient-to-br from-[#F5E8C8] via-[#C6A04A] to-[#8A6B25] px-6 text-sm font-semibold tracking-wide text-[#1A1408]"
              >
                {isUr ? 'کوٹیشن مانگیں' : 'Request a quotation'}
              </Link>
              <Link
                href="/parts"
                className="inline-flex min-h-12 items-center rounded-full border border-[#B8923D]/50 px-6 text-sm font-semibold tracking-wide text-[#F4F0E6] hover:border-[#F5E8C8] hover:text-[#F5E8C8]"
              >
                {isUr ? 'پارٹس دیکھیں' : 'Explore Parts'}
              </Link>
            </div>
          </div>
          <div className="rise rise-d2 relative w-full min-w-0">
            <div className="pointer-events-none absolute -bottom-3 -end-3 start-3 top-3 hidden border-4 border-[#B8923D] lg:block" aria-hidden />
            <div className="relative w-full">
              <ShopCards isUr={isUr} />
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-white/10 py-4">
        <div className="land-marquee flex w-max gap-10">
          {[...facts, ...facts].map((fact, index) => (
            <span key={`${fact}-${index}`} className="font-mono text-xs uppercase tracking-[0.18em] text-[#A39B90]">
              {fact}
              <span className="mx-10 text-[#B8923D]">/</span>
            </span>
          ))}
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-white/10 py-16 md:py-20">
        <GlowEllipse />
        <div className="relative z-10 mx-auto max-w-8xl px-8 md:px-14 lg:px-20">
          <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">
            {isUr ? 'کام' : 'The work'}
          </p>
          <h2 className={`mt-3 max-w-3xl text-[#F4F0E6] ${poster} ${isUr ? 'text-4xl' : 'text-5xl md:text-6xl'} leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
            {isUr ? 'معیار، قیمت اور سپلائی' : 'Quality, price and supply'}
          </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal key={item.en} delay={index * 90} className="h-full">
              <article
                className="group relative h-full overflow-hidden rounded-[22px] border border-[#B8923D]/35 p-6 transition duration-500 hover:-translate-y-2"
                style={{ background: cardWash[index % cardWash.length] }}
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#F5E8C8] via-[#B8923D] to-transparent" />
                <p
                  className="pointer-events-none font-poster text-7xl leading-none text-transparent"
                  style={{ WebkitTextStroke: '1.5px #6d645e' }}
                >
                  0{index + 1}
                </p>
                <h3 className={`relative mt-2 text-[#F4F0E6] ${poster} ${isUr ? 'text-2xl' : 'text-3xl'} leading-tight`} style={isUr ? { lineHeight: 1.7 } : undefined}>
                  {isUr ? item.ur : item.en}
                </h3>
                <p className="relative mt-3 font-mono text-sm leading-7 text-[#F4F0E6]/80" style={isUr ? { lineHeight: 1.9 } : undefined}>
                  {isUr ? item.detailUr : item.detailEn}
                </p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 py-16 md:py-20">
        <GlowEllipse place="corner" />
        <div className="relative z-10 mx-auto max-w-8xl px-8 md:px-14 lg:px-20">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">
            {isUr ? 'اسٹاک' : 'The stock'}
          </p>
          <h2 className={`mt-3 text-[#F4F0E6] ${poster} ${isUr ? 'text-4xl' : 'text-5xl md:text-6xl'} leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
            {isUr ? 'پارٹس کی کیٹیگریز' : 'Parts categories'}
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr
              ? 'فیاٹ، نیو ہالینڈ اور دیگر برانڈز کے اسپیئر پارٹس، ٹاپ لنک، لفٹ لنک اور لنکیج۔'
              : 'Spare parts for Fiat, New Holland and other brands, plus Top Link, Lift Link and linkage.'}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const isActive = activeCategory.key === category.key
              const categoryLabel = isUr ? category.titleUr : category.title
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`group relative h-64 overflow-hidden rounded-[22px] border text-start transition duration-500 hover:-translate-y-2 ${isActive ? 'border-[#F5E8C8]' : 'border-white/15 hover:border-[#B8923D]'}`}
                >
                  <Image src={category.image} alt={categoryLabel} width={1000} height={650} className="slow-zoom absolute inset-0 h-full w-full object-cover" />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/10 via-[#8A6B25]/40 to-[#0c0c0c]/95" />
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#B8923D] to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className={`text-[#F4F0E6] ${poster} text-2xl leading-tight`} style={isUr ? { lineHeight: 1.7 } : undefined}>
                      {categoryLabel}
                    </h3>
                  </span>
                </button>
              )
            })}
          </div>
          <article className="relative mt-4 overflow-hidden rounded-[22px] border border-[#B8923D]/40 bg-[#161616] p-6">
            <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#F5E8C8] via-[#B8923D] to-transparent" />
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#B8923D]">
              {isUr ? activeCategory.titleUr : activeCategory.title}
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#F4F0E6]" style={isUr ? { lineHeight: 1.9 } : undefined}>
              {activeCopy.overview}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {activeCopy.items.map((item) => (
                <li key={item} className="border border-white/15 px-3 py-1 font-mono text-xs text-[#A39B90]">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-8xl px-8 md:px-14 lg:px-20">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">
            {isUr ? 'فہرست' : 'The range'}
          </p>
          <h2 className={`mt-3 max-w-3xl text-[#F4F0E6] ${poster} ${isUr ? 'text-4xl' : 'text-5xl md:text-6xl'} leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
            {isUr ? 'دکان پر جو پارٹس آتے ہیں' : 'What the counter actually stocks'}
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr
              ? 'یہ وہی گروپ ہیں جو پارٹس کے صفحے پر ہیں۔ جس پارٹ کا نام کوٹ میں آئے، اس کا اسٹاک الگ سے چیک ہوتا ہے۔'
              : 'These are the same groups as the parts page. A part named on a quote is checked in stock on its own.'}
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {PART_CATEGORIES.map((part, index) => (
              <article
                key={part.id}
                className="group relative overflow-hidden rounded-[22px] border border-[#B8923D]/35 p-6 transition duration-500 hover:-translate-y-2"
                style={{ background: cardWash[index % cardWash.length] }}
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#F5E8C8] via-[#B8923D] to-transparent" />
                <h3 className={`relative text-[#F4F0E6] ${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
                  {isUr ? `${part.primaryUr} ${part.accentUr}` : `${part.primaryEn} ${part.accentEn}`}
                </h3>
                <p className="mt-3 font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
                  {isUr ? part.descUr : part.descEn}
                </p>
                <ul className="mt-4 space-y-2">
                  {part.items.slice(0, 4).map((item) => (
                    <li key={item.en} className="text-sm text-[#F4F0E6]" style={isUr ? { lineHeight: 1.9 } : undefined}>
                      {isUr ? item.ur : item.en}
                    </li>
                  ))}
                </ul>
                <Link href={`/parts/${part.id}`} className="mt-5 inline-flex font-mono text-xs uppercase tracking-[0.16em] text-[#B8923D] hover:text-[#F5E8C8]">
                  {isUr ? 'پوری فہرست' : 'Full list'}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-8xl px-8 md:px-14 lg:px-20">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">
            {isUr ? 'کوٹ' : 'The quote'}
          </p>
          <h2 className={`mt-3 max-w-3xl text-[#F4F0E6] ${poster} ${isUr ? 'text-4xl' : 'text-5xl md:text-6xl'} leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
            {isUr ? 'کوٹ میں کیا مانگا اور کیا لکھا جاتا ہے' : 'What a quotation asks for, and what it answers'}
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#8A6B25] via-[#B8923D] to-[#D9B96A] p-6 text-[#1A1408] transition duration-500 hover:-translate-y-2">
              <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-white/70 to-transparent" />
              <h3 className={`text-[#1A1408] ${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
                {isUr ? 'آپ بھیجیں' : 'You send'}
              </h3>
              <ol className="mt-5 space-y-3">
                {quoteSend.map((item, index) => (
                  <li key={item.en} className="flex gap-3 text-sm text-[#1A1408]" style={isUr ? { lineHeight: 1.9 } : undefined}>
                    <span className="font-mono text-xs text-[#3d2e10]">0{index + 1}</span>
                    <span>{isUr ? item.ur : item.en}</span>
                  </li>
                ))}
              </ol>
            </article>
            <article
              className="relative overflow-hidden rounded-[22px] border border-[#B8923D]/40 p-6 transition duration-500 hover:-translate-y-2"
              style={{ background: 'linear-gradient(205deg, rgba(217,185,106,0.34) 0%, #161616 52%)' }}
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#F5E8C8] via-[#B8923D] to-transparent" />
              <h3 className={`text-[#F5E8C8] ${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
                {isUr ? 'ہم واپس لکھتے ہیں' : 'We write back'}
              </h3>
              <ol className="mt-5 space-y-3">
                {quoteReply.map((item, index) => (
                  <li key={item.en} className="flex gap-3 text-sm text-[#F4F0E6]" style={isUr ? { lineHeight: 1.9 } : undefined}>
                    <span className="font-mono text-xs text-[#B8923D]">0{index + 1}</span>
                    <span>{isUr ? item.ur : item.en}</span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
          <p className="mt-6 max-w-3xl font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr
              ? `دکان نمبر 43، رمضان چیمبر، بادامی باغ، لاہور۔ فیاٹ، میسی اور فورڈ کے لوکل پارٹس۔ ٹاپ لنک برانڈ ${brand.manufacturingUr} کے تحت تیار ہوتا ہے۔`
              : `Shop No. 43, Ramzan Chamber, Badami Bagh, Lahore. Local parts for Fiat, Massey and Ford. Top Link is manufactured under ${brand.manufacturingEn}.`}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 py-16 md:py-20">
        <GlowEllipse />
        <div className="relative z-10 mx-auto max-w-8xl px-8 md:px-14 lg:px-20">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">
            {isUr ? 'سوال' : 'Questions'}
          </p>
          <h2 className={`mt-3 text-[#F4F0E6] ${poster} ${isUr ? 'text-4xl' : 'text-5xl md:text-6xl'} leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
            {isUr ? 'خریدار جو پوچھتے ہیں' : 'What buyers ask'}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((item, index) => (
              <Reveal key={item.qEn} delay={(index % 2) * 80}>
              <article className="relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-[#161616] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#B8923D]">
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#B8923D] to-transparent" />
                <h3 className={`text-[#F4F0E6] ${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
                  {isUr ? item.qUr : item.qEn}
                </h3>
                <p className="mt-3 font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
                  {isUr ? item.aUr : item.aEn}
                </p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-8xl gap-10 px-8 md:grid-cols-[0.8fr_1.2fr] md:px-14 lg:px-20">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">
              {isUr ? 'آرڈر' : 'The order'}
            </p>
            <h2 className={`mt-3 text-[#F4F0E6] ${poster} ${isUr ? 'text-4xl' : 'text-5xl md:text-6xl'} leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
              {isUr ? 'انکوائری سے شپمنٹ تک' : 'From enquiry to shipment'}
            </h2>
          </div>
          <div className="grid gap-4">
            {workflow.map((step, index) => (
              <article key={step.enTitle} className="border-t border-white/15 pt-4">
                <p className="font-mono text-xs tracking-[0.18em] text-[#B8923D]">0{index + 1}</p>
                <h3 className={`mt-2 text-[#F4F0E6] ${poster} text-3xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
                  {isUr ? step.urTitle : step.enTitle}
                </h3>
                <p className="mt-2 max-w-xl font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
                  {isUr ? step.urText : step.enText}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-8xl flex-wrap gap-3 px-8 md:px-14 lg:px-20">
          {tradePoints.map((point) => (
            <span key={point.en} className="border border-white/15 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#F5E8C8]">
              {isUr ? point.ur : point.en}
            </span>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-8xl px-8 md:px-14 lg:px-20">
          <div className="bg-gradient-to-br from-[#2A2416] via-[#141210] to-[#0c0c0c] px-6 py-12 md:px-12">
            <h2 className={`max-w-3xl text-[#F5E8C8] ${poster} ${isUr ? 'text-4xl' : 'text-5xl md:text-6xl'} leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
              {isUr ? 'پارٹس لسٹ بھیجیں' : 'Send the parts list'}
            </h2>
            <p className="mt-4 max-w-xl font-mono text-sm leading-7 text-[#A39B90]">
              {isUr ? 'ہم اسٹاک اور ریٹ کے ساتھ کوٹیشن واپس بھیجتے ہیں۔' : 'We reply with stock and a rate.'}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center rounded-full border border-[#F5E8C8]/70 bg-gradient-to-br from-[#F5E8C8] via-[#C6A04A] to-[#8A6B25] px-6 text-sm font-semibold tracking-wide text-[#1A1408]"
            >
              {isUr ? 'کوٹیشن مانگیں' : 'Request a quotation'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
