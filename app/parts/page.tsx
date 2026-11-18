'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { GlowEllipse } from '@/app/components/motion'
import { brand } from '@/app/lib/brand'
import { allIndividualParts } from '@/app/lib/parts-data'
import { useLanguage } from '@/app/lib/language-context'

const parts = allIndividualParts()

function askHref(name: string, partNo?: string) {
  const label = partNo ? `${partNo} ${name}` : name
  const text = `I need this part: ${label}. Please send the photo, stock and the rate.`
  return `${brand.whatsappHref}?text=${encodeURIComponent(text)}`
}

export default function PartsPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const poster = isUr ? '' : 'font-poster uppercase tracking-[0.02em]'
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return parts
    return parts.filter((part) => {
      const haystack = `${part.en} ${part.ur} ${part.partNo ?? ''} ${part.descEn}`.toLowerCase()
      return haystack.includes(needle)
    })
  }, [query])

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#F4F0E6]">
      <section className="relative overflow-hidden px-4 pb-6 pt-4 sm:px-6 md:px-14 md:pt-32 lg:px-20">
        <GlowEllipse />
        <div className="relative z-10 mx-auto max-w-8xl">
          <Link href="/catalogue" className="inline-flex min-h-11 items-center rounded-full border border-[#F5E8C8]/70 bg-gradient-to-br from-[#F5E8C8] via-[#C6A04A] to-[#8A6B25] px-5 text-sm font-semibold text-[#1A1408]">
            {isUr ? 'نمبر والا کیٹلاگ کھولیں' : 'Open the numbered catalogue'}
          </Link>
          <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">
            {isUr ? 'ہر پارٹ الگ' : 'Each part on its own'}
          </p>
          <h1
            className={`mt-3 text-[#F4F0E6] ${isUr ? 'text-3xl sm:text-4xl md:text-5xl' : 'font-poster text-4xl uppercase tracking-[0.02em] sm:text-5xl md:text-6xl lg:text-7xl'} leading-none`}
            style={isUr ? { lineHeight: 1.7 } : undefined}
          >
            {isUr ? 'انفرادی پارٹس' : 'Individual parts'}
          </h1>
          <p
            className={`max-w-3xl font-mono text-sm leading-7 text-[#A39B90] ${isUr ? 'mt-5' : 'mt-4'}`}
            dir={isUr ? 'rtl' : 'ltr'}
            style={isUr ? { lineHeight: 1.9 } : undefined}
          >
            {isUr
              ? `ہر کارڈ ایک پارٹ ہے۔ ${brand.manufacturingUr} کے بنائے ہوئے پارٹس پر فہد کا نمبر لکھا ہے۔ فہرست میں نہ ہو تو نام یا تصویر بھیجیں، ہماری فیکٹری میں وہ پارٹ بن سکتا ہے۔`
              : `Each card is one part. Parts made by ${brand.manufacturingEn} show a Fahad part number. If you need a part that is not listed, send the name or a photo. We produce parts in our own factory.`}
          </p>
          <label className="mt-6 block max-w-xl">
            <span className="sr-only">{isUr ? 'پارٹ تلاش کریں' : 'Search parts'}</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={isUr ? 'پارٹ کا نام لکھیں' : 'Search a part by name'}
              className="w-full rounded-xl border border-white/15 bg-[#161616] px-4 py-3 font-mono text-sm text-[#F4F0E6] outline-none placeholder:text-[#A39B90] focus:border-[#B8923D]"
            />
          </label>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-[#B8923D]">
            {isUr
              ? `${visible.length} ${visible.length === 1 ? 'پارٹ' : 'پارٹس'}`
              : `${visible.length} individual ${visible.length === 1 ? 'part' : 'parts'}`}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-4 pb-20 sm:px-6 md:px-14 lg:px-20">
        {visible.length === 0 ? (
          <p className="font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr
              ? 'اس نام کا پارٹ فہرست میں نہیں۔ واٹس ایپ پر نام یا تصویر بھیجیں، فیکٹری میں بنایا جا سکتا ہے۔'
              : 'That part is not on the list. Send the name or a photo on WhatsApp and we can produce it.'}
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((part) => {
              const title = isUr ? part.ur : part.en
              return (
                <article
                  key={part.slug}
                  id={part.slug}
                  className="flex flex-col overflow-hidden rounded-[22px] border border-white/15 bg-[#161616] transition duration-500 hover:-translate-y-2 hover:border-[#B8923D]"
                >
                  <div className="relative h-56">
                    <Image
                      src={part.image}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                      style={part.focus ? { objectPosition: part.focus } : undefined}
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/15 to-transparent" />
                    {part.partNo ? (
                      <span className="absolute bottom-3 start-3 rounded-xl border border-[#F5E8C8]/50 bg-[#1A1408]/85 px-3 py-2">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#B8923D]">
                          {isUr ? 'پارٹ نمبر' : 'Part no.'}
                        </span>
                        <span className="mt-0.5 block font-poster text-3xl leading-none tracking-wide text-[#F5E8C8]">
                          {part.partNo}
                        </span>
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2
                      className={`text-[#F4F0E6] ${poster} text-2xl leading-none`}
                      style={isUr ? { lineHeight: 1.7 } : undefined}
                    >
                      {title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
                      {isUr ? part.descUr : part.descEn}
                    </p>
                    <a
                      href={askHref(part.en, part.partNo)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex min-h-11 items-center justify-center self-start rounded-full border border-[#F5E8C8]/70 bg-gradient-to-br from-[#F5E8C8] via-[#C6A04A] to-[#8A6B25] px-5 text-sm font-semibold tracking-wide text-[#1A1408]"
                    >
                      {isUr ? 'اس پارٹ کا ریٹ مانگیں' : 'Ask for this part'}
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </section>
    </main>
  )
}
