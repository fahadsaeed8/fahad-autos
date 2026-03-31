'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { SectionHeading } from '@/app/components/section-heading'
import { getCategoryBySlug } from '@/app/lib/parts-data'
import { partsPageImages } from '@/app/lib/site-images'
import { useLanguage } from '@/app/lib/language-context'

export default function PartCategoryPage() {
  const params = useParams()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const category = getCategoryBySlug(slug)
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  if (!category) {
    notFound()
  }

  const titleStr = isUr ? `${category.primaryUr} ${category.accentUr}` : `${category.primaryEn} ${category.accentEn}`

  return (
    <main className="min-h-screen bg-slate-100">
      <section className="border-b border-slate-200 bg-white px-4 py-4 shadow-sm md:px-8">
        <div className="mx-auto max-w-6xl">
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm md:text-base" aria-label="Breadcrumb" dir={isUr ? 'rtl' : 'ltr'}>
            <Link href="/" className="font-medium text-slate-600 transition hover:text-indigo-700">
              {isUr ? 'ہوم' : 'Home'}
            </Link>
            <span className="text-slate-400" aria-hidden>
              /
            </span>
            <Link href="/parts" className="font-semibold text-indigo-700 underline-offset-2 hover:underline">
              {isUr ? 'پارٹس' : 'Parts'}
            </Link>
            <span className="text-slate-400" aria-hidden>
              /
            </span>
            <span className="font-bold text-slate-900" aria-current="page">
              {titleStr}
            </span>
          </nav>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 to-slate-900 px-4 py-10 text-white md:px-8 md:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            as="h1"
            variant="dark"
            size="page"
            centered
            primaryEn={category.primaryEn}
            accentEn={category.accentEn}
            primaryUr={category.primaryUr}
            accentUr={category.accentUr}
            isUr={isUr}
          />
          <p className={`mx-auto max-w-3xl text-sm leading-relaxed text-blue-100 md:text-base ${isUr ? 'mt-5' : 'mt-4'}`} dir={isUr ? 'rtl' : 'ltr'}>
            {isUr ? category.descUr : category.descEn}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item, i) => {
            const src = partsPageImages[item.imageIndex % partsPageImages.length]
            const cardTitle = isUr ? item.ur : item.en
            const cardBody = isUr ? item.descUr : item.descEn
            const altLine = isUr ? item.en : item.ur
            return (
              <article
                key={`${slug}-${i}`}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-indigo-200 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-200">
                  <Image
                    src={src}
                    alt={cardTitle}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <h3 className="text-base font-bold text-indigo-950 md:text-lg" dir={isUr ? 'rtl' : 'ltr'}>
                    {cardTitle}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-500" dir={isUr ? 'ltr' : 'rtl'}>
                    {altLine}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700" dir={isUr ? 'rtl' : 'ltr'}>
                    {cardBody}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <Link href="/parts" className="btn-cta-back">
            {isUr ? '← تمام کیٹیگریز' : '← All categories'}
          </Link>
          <Link href="/contact" className="btn-cta-indigo-xl">
            {isUr ? 'اس کیٹیگری کے لیے رابطہ' : 'Contact about this category'}
          </Link>
        </div>
      </section>
    </main>
  )
}
