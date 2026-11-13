'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/app/components/section-heading'
import { brand } from '@/app/lib/brand'
import { useLanguage } from '@/app/lib/language-context'

export default function SiteFooter() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const address = isUr ? brand.addressUr : brand.addressEn

  return (
    <footer className="border-t border-[#B8923D]/40 bg-[#0c0c0c] text-[#A39B90]">
      <div className="mx-auto grid max-w-8xl gap-8 px-8 py-10 md:grid-cols-[1.6fr_1fr_1fr] md:px-14 lg:px-20">
        <div>
          <Link href="/" className="inline-flex">
            <Image
              src="/new-logo.png"
              alt="Fahad Tractor Parts and Services logo"
              width={460}
              height={140}
              className="h-24 w-80 object-contain md:w-96"
            />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7">
            {isUr ? brand.blurbUr : brand.blurbEn}
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#B8923D]">
            {isUr ? 'مینوفیکچرنگ برانڈ' : 'Manufacturing brand'}
          </p>
          <p className="mt-1 text-sm text-[#F4F0E6]" style={isUr ? { lineHeight: 1.9 } : undefined}>
            {isUr ? brand.manufacturingUr : brand.manufacturingEn}
          </p>
        </div>
        <div>
          <SectionHeading
            as="h4"
            variant="dark"
            size="footer"
            primaryEn="Quick"
            accentEn="Contact"
            primaryUr="فوری"
            accentUr="رابطہ"
            isUr={isUr}
          />
          <ul className="mt-3 space-y-1.5 text-sm">
            {brand.phones.map((phone) => (
              <li key={phone.tel}>
                <a href={`tel:${phone.tel}`} translate="no" className={`notranslate ${phone.main ? 'font-semibold text-[#F5E8C8] hover:text-white' : 'hover:text-white'}`}>
                  <span className={phone.main ? 'text-[#B8923D]' : 'text-slate-500'}>{isUr ? phone.labelUr : phone.labelEn}</span>
                  <span className="mx-2 text-slate-600">·</span>
                  <span className="tabular-nums">{isUr ? phone.displayUr : phone.displayEn}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-3 space-y-1.5 text-sm">
            {brand.emails.map((item) => (
              <li key={item.address}>
                <a
                  href={`mailto:${item.address}`}
                  translate="no"
                  className={`notranslate ${item.main ? 'font-semibold text-[#F5E8C8] hover:text-white' : 'hover:text-white'}`}
                >
                  <span className={item.main ? 'text-[#B8923D]' : 'text-slate-500'}>{isUr ? item.labelUr : item.labelEn}</span>
                  <span className="mx-2 text-slate-600">·</span>
                  <span className="break-all">{item.address}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading
            as="h4"
            variant="dark"
            size="footer"
            primaryEn="Address"
            primaryUr="پتہ"
            isUr={isUr}
          />
          <address
            className="mt-3 text-sm not-italic leading-7"
            dir={isUr ? 'rtl' : 'ltr'}
            lang={isUr ? 'ur' : 'en'}
          >
            {address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 px-8 py-4 text-center font-mono text-xs text-[#6F675F] md:px-14 lg:px-20">
        {isUr
          ? `کاپی رائٹ 2026 ${brand.ur}۔ جملہ حقوق محفوظ ہیں۔`
          : `Copyright 2026 ${brand.en}. All rights reserved.`}
      </div>
    </footer>
  )
}
