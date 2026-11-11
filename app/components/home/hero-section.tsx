'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/app/components/section-heading'
import { brand } from '@/app/lib/brand'

type HeroSectionProps = {
  isUr: boolean
}

export default function HeroSection({ isUr }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="mx-auto grid max-w-8xl gap-10 px-4 pb-16 pt-36 md:grid-cols-2 md:px-8 md:pb-24 md:pt-40">
        <div>
          <p className="inline-block rounded-full bg-amber-300 px-3 py-1 text-xs font-bold tracking-wide text-slate-950">
            {isUr ? brand.channelsUr : brand.channelsEn}
          </p>
          <SectionHeading
            as="h1"
            variant="dark"
            size="hero"
            className="brand-title mt-4"
            primaryEn={brand.mark}
            accentEn={brand.accentEn}
            primaryUr={brand.mark}
            accentUr={brand.accentUr}
            isUr={isUr}
          />
          <p className={`max-w-xl text-sm text-blue-100 md:text-base ${isUr ? 'mt-5' : 'mt-4'}`}>
            {isUr
              ? brand.lineUr
              : brand.lineEn}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/parts" className="btn-cta-amber">
              {isUr ? 'پارٹس دیکھیں' : 'Explore Parts'}
            </Link>
            <Link href="/contact" className="btn-cta-outline-light">
              {isUr ? 'رابطہ کریں' : 'Contact Us'}
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
          <Image
            src="/business-card.png"
            alt={isUr ? `${brand.ur} بزنس کارڈ` : `${brand.en} business card`}
            width={1280}
            height={720}
            className="h-full w-full rounded-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
