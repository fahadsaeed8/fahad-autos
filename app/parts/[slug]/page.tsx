'use client'

import Image from 'next/image'
import { GlowEllipse } from '@/app/components/motion'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { getCategoryBySlug } from '@/app/lib/parts-data'
import { imageForPart } from '@/app/lib/site-images'
import { useLanguage } from '@/app/lib/language-context'

export default function PartCategoryPage() {
  const params = useParams()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const category = getCategoryBySlug(slug)
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const poster = isUr ? '' : 'font-poster uppercase tracking-[0.02em]'

  if (!category) {
    notFound()
  }

  const titleStr = isUr ? `${category.primaryUr} ${category.accentUr}` : `${category.primaryEn} ${category.accentEn}`
  const src = imageForPart(category.id)

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#F4F0E6]">
      <section className="relative overflow-hidden px-8 pb-6 pt-28 md:px-14 md:pt-32 lg:px-20">
        <GlowEllipse />
        <div className="relative z-10 mx-auto max-w-8xl">
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs uppercase tracking-[0.14em] text-[#A39B90]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F5E8C8]">
              {isUr ? 'ہوم' : 'Home'}
            </Link>
            <span aria-hidden>/</span>
            <Link href="/parts" className="hover:text-[#F5E8C8]">
              {isUr ? 'پارٹس' : 'Parts'}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-[#F5E8C8]" aria-current="page">
              {titleStr}
            </span>
          </nav>
          <h1
            className={`mt-4 max-w-4xl text-[#F4F0E6] ${poster} ${isUr ? 'text-5xl' : 'text-6xl md:text-7xl'} leading-none`}
            style={isUr ? { lineHeight: 1.7 } : undefined}
          >
            {titleStr}
          </h1>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr ? category.descUr : category.descEn}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-8 pb-16 md:px-14 lg:px-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item, index) => {
            const cardTitle = isUr ? item.ur : item.en
            const cardBody = isUr ? item.descUr : item.descEn
            const altLine = isUr ? item.en : item.ur
            const photo = item.image ?? src
            return (
              <article
                key={`${slug}-${index}`}
                id={item.partNo}
                className="relative overflow-hidden rounded-[22px] border border-white/15 bg-[#161616] transition duration-500 hover:-translate-y-2 hover:border-[#B8923D]"
              >
                <div className="relative h-64">
                  <Image
                    src={photo}
                    alt={cardTitle}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="slow-zoom object-cover"
                    style={item.focus ? { objectPosition: item.focus } : undefined}
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/20 to-transparent" />
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#B8923D] to-transparent" />
                  {item.partNo ? (
                    <span className="absolute bottom-3 start-3 rounded-xl border border-[#F5E8C8]/50 bg-[#1A1408]/85 px-3 py-2">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#B8923D]">
                        {isUr ? 'پارٹ نمبر' : 'Part no.'}
                      </span>
                      <span className="mt-0.5 block font-poster text-3xl leading-none tracking-wide text-[#F5E8C8]">
                        {item.partNo}
                      </span>
                    </span>
                  ) : null}
                </div>
                <div className="p-5">
                  <h2 className={`text-[#F4F0E6] ${poster} text-2xl leading-none`} style={isUr ? { lineHeight: 1.7 } : undefined}>
                    {cardTitle}
                  </h2>
                  <p className="mt-2 font-mono text-xs text-[#B8923D]" dir={isUr ? 'ltr' : 'rtl'}>
                    {altLine}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#A39B90]" style={isUr ? { lineHeight: 1.9 } : undefined}>
                    {cardBody}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/parts"
            className="inline-flex min-h-12 items-center rounded-full border border-[#B8923D]/50 px-6 text-sm font-semibold tracking-wide text-[#F4F0E6] hover:border-[#F5E8C8] hover:text-[#F5E8C8]"
          >
            {isUr ? 'تمام کیٹیگریز' : 'All categories'}
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center rounded-full border border-[#F5E8C8]/70 bg-gradient-to-br from-[#F5E8C8] via-[#C6A04A] to-[#8A6B25] px-6 text-sm font-semibold tracking-wide text-[#1A1408]"
          >
            {isUr ? 'اس کیٹیگری کے لیے رابطہ' : 'Contact about this category'}
          </Link>
        </div>
      </section>
    </main>
  )
}
