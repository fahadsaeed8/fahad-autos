'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/app/components/section-heading'

type HeroSectionProps = {
  isUr: boolean
}

export default function HeroSection({ isUr }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="mx-auto grid max-w-8xl gap-10 px-4 pb-16 pt-36 md:grid-cols-2 md:px-8 md:pb-24 md:pt-40">
        <div>
          <p className="inline-block rounded-full bg-amber-300 px-3 py-1 text-xs font-bold tracking-wide text-slate-950">
            {isUr ? 'قابلِ اعتماد پارٹس پارٹنر' : 'TRUSTED PARTS PARTNER'}
          </p>
          <SectionHeading
            as="h1"
            variant="dark"
            size="hero"
            className="mt-4"
            primaryEn="All Tractor Parts"
            accentEn="Under One Roof"
            primaryUr="ہر ٹریکٹر پارٹ"
            accentUr="ایک جگہ"
            isUr={isUr}
          />
          <p className="mt-4 max-w-xl text-sm text-blue-100 md:text-base">
            {isUr
              ? 'وکی ٹریکٹر فہد آٹوز میں فیاٹ، میسی اور فورڈ کے لوکل پارٹس، ٹاپ لنک اور لفٹ لنک کی ہول سیل ڈیلنگ اور مینوفیکچرنگ سپورٹ دستیاب ہے۔'
              : 'Vicky Tractor Fahad Autos deals in Fiat, Massey and Ford local parts, with Top Link and Lift Link wholesale dealing and manufacturing support.'}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/parts" className="rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950">
              {isUr ? 'پارٹس دیکھیں' : 'Explore Parts'}
            </Link>
            <Link href="/contact" className="rounded-lg border border-white px-5 py-3 text-sm font-bold">
              {isUr ? 'رابطہ کریں' : 'Contact Us'}
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
          <Image
            src="/business-card.png"
            alt="Vicky Tractor Fahad Autos business card"
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
