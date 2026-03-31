'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Lang = 'en' | 'ur'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function applyDocumentDirection(next: Lang) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.lang = next === 'ur' ? 'ur' : 'en'
  root.dir = next === 'ur' ? 'rtl' : 'ltr'
}

export function LanguageProvider({
  children,
  initialLang = 'en',
}: {
  children: React.ReactNode
  initialLang?: Lang
}) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    const cookieMatch = document.cookie.match(/(?:^|; )site-lang=(en|ur)/)
    if (cookieMatch?.[1] === 'en' || cookieMatch?.[1] === 'ur') {
      setLang(cookieMatch[1])
      return
    }
    const stored = window.localStorage.getItem('site-lang')
    if (stored === 'en' || stored === 'ur') {
      setLang(stored)
    }
  }, [])

  useEffect(() => {
    applyDocumentDirection(lang)
  }, [lang])

  useEffect(() => {
    window.localStorage.setItem('site-lang', lang)
    document.cookie = `site-lang=${lang}; path=/; max-age=31536000; samesite=lax`
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'en' ? 'ur' : 'en')),
    }),
    [lang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
