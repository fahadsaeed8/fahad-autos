'use client'

import Image from 'next/image'
import { useLanguage } from '@/app/lib/language-context'

export default function SiteFooter() {
  const { lang } = useLanguage()

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.6fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center justify-start">
            <Image
              src="/new-logo.png"
              alt="Fahad Autos logo"
              width={460}
              height={140}
              className="h-24 w-80 object-contain md:w-96"
            />
          </div>
          <p className="mt-3 text-sm leading-7">
            {lang === 'en'
              ? 'Trusted local tractor parts shop in Lahore for farmers, mechanics and workshops.'
              : 'لاہور میں کسانوں، مکینک اور ورکشاپس کے لئے قابل اعتماد ٹریکٹر پارٹس کی دکان۔'}
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white">{lang === 'en' ? 'Quick Contact' : 'فوری رابطہ'}</h4>
          <p className="mt-2 text-sm">0321-4964013</p>
          <p className="text-sm">0300-4785384</p>
          <p className="text-sm">Ph: 37700794</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">{lang === 'en' ? 'Address' : 'پتہ'}</h4>
          <p className="mt-2 text-sm">Shop No. 43, Ramzan Chamber, 91/140 Badami Bagh, Lahore</p>
          <p className="mt-2 text-sm" dir="rtl" lang="ur">
            دکان نمبر 43، رمضان چیمبر، 91/140 بادامی باغ، لاہور
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-400">
        {lang === 'en'
          ? 'Copyright 2026 Vicky Tractor Fahad Autos. All rights reserved.'
          : 'کاپی رائٹ 2026 وکی ٹریکٹر فہد آٹوز۔ جملہ حقوق محفوظ ہیں۔'}
      </div>
    </footer>
  )
}
