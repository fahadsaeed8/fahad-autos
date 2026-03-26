'use client'

import Image from 'next/image'
import { useLanguage } from '@/app/lib/language-context'

const parts = [
  {
    title: 'Fiat, Massey, Ford Local Parts',
    desc: 'Complete local parts range for Fiat, Massey and Ford tractors for daily farming needs.',
    image:
      'https://images.unsplash.com/photo-1649322014009-f2f2da52d58d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Top Link & Lift Link Range',
    desc: 'Top Link, Lift Link and related linkage items available in retail and wholesale quantity.',
    image:
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Wholesale + Manufacturing Supply',
    desc: 'Consistent supply support for dealers, workshops and market distributors with manufacturing options.',
    image:
      'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function PartsPage() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-slate-100">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 px-4 py-14 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-extrabold">{isUr ? 'ٹریکٹر پارٹس' : 'Tractor Parts'}</h1>
          <p className="mt-3 max-w-3xl text-blue-100">
            {isUr
              ? 'ہم فیاٹ، میسی اور فورڈ کے لوکل پارٹس، ٹاپ لنک، لفٹ لنک اور لنکیج پارٹس کی خصوصی سپلائی کرتے ہیں۔'
              : 'We specialize in Fiat, Massey and Ford local parts, including Top Link, Lift Link and linkage items.'}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {parts.map((part) => (
            <article key={part.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image src={part.image} alt={part.title} width={1200} height={800} className="h-52 w-full object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-bold text-slate-900">{part.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">{part.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
