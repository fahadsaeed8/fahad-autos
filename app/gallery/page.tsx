'use client'

import Image from 'next/image'
import { SectionHeading } from '@/app/components/section-heading'
import { useLanguage } from '@/app/lib/language-context'

const galleryImages = [
  'https://images.unsplash.com/photo-1625246333195-78d73c0f1689?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1457530378978-8bac673b8062?auto=format&fit=crop&w=1200&q=80',
]

export default function GalleryPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-slate-100">
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <SectionHeading
          as="h1"
          size="page"
          primaryEn="Gall"
          accentEn="ery"
          primaryUr="گیل"
          accentUr="ری"
          isUr={isUr}
        />
        <p className="mt-3 max-w-3xl text-slate-700">
          {lang === 'en'
            ? 'A visual collection inspired by tractors, field work and heavy-duty machinery.'
            : 'ٹریکٹر، کھیت اور ہیوی ڈیوٹی مشینری سے متعلق تصویری مجموعہ۔'}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div key={src} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <Image
                src={src}
                alt={`Tractor gallery ${index + 1}`}
                width={1000}
                height={750}
                className="h-56 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
