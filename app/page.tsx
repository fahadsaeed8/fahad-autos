'use client'

import CategoriesSection from '@/app/components/home/categories-section'
import HeroSection from '@/app/components/home/hero-section'
import HighlightsSection from '@/app/components/home/highlights-section'
import { useLanguage } from '@/app/lib/language-context'

export default function Home() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <main className="min-h-screen bg-slate-100">
      <HeroSection isUr={isUr} />
      <HighlightsSection isUr={isUr} />
      <CategoriesSection isUr={isUr} />
    </main>
  )
}
