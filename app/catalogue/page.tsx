'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { brand } from '@/app/lib/brand'
import { catalogueGroups, type CatalogueGroup } from '@/app/lib/catalogue'
import { useLanguage } from '@/app/lib/language-context'

function orderHref(missingName: string) {
  const text = missingName
    ? `This product is not in the catalogue. Please quote it or make it: ${missingName}. My tractor brand and model is: `
    : 'I want a part from the catalogue.\nPart number:\nTractor brand and model:'
  return `${brand.whatsappHref}?text=${encodeURIComponent(text)}`
}

export default function CataloguePage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const [query, setQuery] = useState('')
  const needle = query.trim().toLowerCase()

  const visible = useMemo(() => {
    if (!needle) return catalogueGroups
    return catalogueGroups
      .map((group) => ({
        ...group,
        parts: group.parts.filter((part) => `${part.no} ${part.en} ${part.ur}`.toLowerCase().includes(needle)),
      }))
      .filter((group) => group.parts.length > 0)
  }, [needle])

  const shown = visible.reduce((sum, group) => sum + group.parts.length, 0)
  const href = orderHref(shown === 0 ? query.trim() : '')

  return (
    <main className="min-h-screen bg-[#0c0c0c] px-4 pb-16 pt-4 text-[#F4F0E6] sm:px-6 md:px-14 md:pt-28 lg:px-20">
      <div className="mx-auto max-w-8xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#B8923D]">FTA-01 to FTA-97</p>
            <h1
              className={`mt-2 text-[#F4F0E6] ${isUr ? 'text-3xl sm:text-4xl' : 'font-poster text-4xl uppercase tracking-[0.02em] sm:text-5xl'} leading-none`}
              style={isUr ? { lineHeight: 1.6 } : undefined}
            >
              {isUr ? 'پارٹس کیٹلاگ' : 'Parts catalogue'}
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#A39B90]" style={isUr ? { lineHeight: 1.8 } : undefined}>
              {isUr
                ? 'ہر لائن ایک الگ پارٹ ہے۔ نمبر اور نام ساتھ ہیں۔ تصویر وہی ہے جو اس پارٹ کو دکھاتی ہے۔'
                : 'Each line is one part. The number sits with the name. A photo is only the part it actually shows.'}
            </p>
          </div>
          <label className="block w-full max-w-sm">
            <span className="sr-only">{isUr ? 'فہرست میں ڈھونڈیں' : 'Find in the list'}</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={isUr ? 'فہرست میں نام ڈھونڈیں' : 'Find a name in this list'}
              className="w-full rounded-full border border-white/15 bg-[#161616] px-4 py-2.5 text-sm text-[#F4F0E6] outline-none placeholder:text-[#A39B90] focus:border-[#B8923D]"
            />
          </label>
        </div>

        <nav className="mt-4 flex flex-wrap gap-2" aria-label={isUr ? 'گروپس' : 'Groups'}>
          {catalogueGroups.map((group) => (
            <a key={group.id} href={`#${group.id}`} className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-[#F4F0E6] hover:border-[#B8923D]">
              {isUr ? group.ur : group.en}
            </a>
          ))}
        </nav>

        <div className="mt-5 space-y-4">
          {visible.map((group) => (
            <CatalogueSheet key={group.id} group={group} isUr={isUr} />
          ))}
        </div>

        <section className="relative mt-8 overflow-hidden rounded-[22px] border border-[#B8923D]/40 bg-[#161616]">
          <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#F5E8C8] via-[#B8923D] to-transparent" />
          <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-10">
            <p className="max-w-3xl text-xl font-semibold leading-snug text-[#F5E8C8] sm:text-2xl" style={isUr ? { lineHeight: 1.8 } : undefined}>
              {isUr
                ? 'اگر کوئی پارٹ اس فہرست میں نہیں، ہم وہ بھی بنا سکتے ہیں۔ ہمیں وہ پروڈکٹ بتا دیں۔'
                : 'If a part is not in this list, we can make it. Tell us the product.'}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
              {isUr
                ? 'ٹریکٹر کا برانڈ اور ماڈل، پارٹ کا نام، اور پرانے پارٹ کی تصویر بھیجیں۔ ہم پارٹ کنفرم کر کے ریٹ بھیج دیں گے۔'
                : 'Send the tractor brand and model, the part name, and a photo of the old part. We confirm the part and send the rate.'}
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center rounded-full bg-gradient-to-br from-[#F5E8C8] via-[#C6A04A] to-[#8A6B25] px-8 text-sm font-semibold text-[#1A1408]"
            >
              {isUr ? 'واٹس ایپ پر آرڈر' : 'Order on WhatsApp'}
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

function CatalogueSheet({ group, isUr }: { group: CatalogueGroup; isUr: boolean }) {
  return (
    <section id={group.id} className="relative overflow-hidden rounded-[22px] border border-white/15 bg-[#161616]">
      <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#B8923D] to-transparent" />
      <div className="grid gap-4 p-4 md:p-5 lg:grid-cols-[280px_1fr] lg:gap-6">
        <div>
          <h2 className={`text-[#F5E8C8] ${isUr ? 'text-2xl' : 'font-poster text-3xl uppercase'} leading-none`} style={isUr ? { lineHeight: 1.6 } : undefined}>
            {isUr ? group.ur : group.en}
          </h2>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#B8923D]">
            {group.parts.length} {isUr ? 'پارٹس' : 'parts'}
          </p>
          {group.photos.length > 0 ? (
            <div className={`mt-3 grid gap-2 ${group.photos.length > 1 ? 'grid-cols-2' : ''}`}>
              {group.photos.map((photo) => (
                <figure key={photo.src + photo.captionEn} className={group.photos.length > 2 && photo === group.photos[0] ? 'col-span-2' : ''}>
                  <div className="relative h-28 overflow-hidden rounded-xl border border-white/10 lg:h-32">
                    <Image src={photo.src} alt={isUr ? photo.captionUr : photo.captionEn} fill sizes="280px" className="object-cover" />
                  </div>
                  <figcaption className="mt-1 text-[11px] leading-4 text-[#A39B90]">{isUr ? photo.captionUr : photo.captionEn}</figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </div>
        <ul className="grid content-start gap-x-6 sm:grid-cols-2">
          {group.parts.map((part) => (
            <li key={part.no} id={part.no.toLowerCase()} className="flex items-center gap-3 border-b border-white/10 py-2">
              <span className="w-[4.5rem] shrink-0 rounded-md bg-[#B8923D]/15 px-2 py-1 text-center font-mono text-xs font-bold text-[#F5E8C8]">
                {part.no}
              </span>
              <span className="text-[15px] leading-5 text-[#F4F0E6]" style={isUr ? { lineHeight: 1.8 } : undefined}>
                {isUr ? part.ur : part.en}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
