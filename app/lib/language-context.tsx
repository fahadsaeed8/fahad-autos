'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { clearTranslateCookie, readTranslateCode } from '@/app/lib/translate-languages'

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
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    window.localStorage.setItem('site-lang-choice', next)
    window.localStorage.setItem('site-lang', next)
    window.localStorage.removeItem('site-lang-explicit')
    document.cookie = `site-lang=${next}; path=/; max-age=31536000; samesite=lax`
    document.cookie = `site-lang-choice=${next}; path=/; max-age=31536000; samesite=lax`
    document.cookie = 'site-lang-explicit=; path=/; max-age=0; samesite=lax'
  }, [])

  useEffect(() => {
    const saved = window.localStorage.getItem('site-lang-choice')
    if (saved === 'ur') {
      setLangState('ur')
      return
    }
    setLangState('en')
    if (saved) return
    window.localStorage.setItem('site-lang', 'en')
    window.localStorage.removeItem('site-lang-explicit')
    document.cookie = 'site-lang=en; path=/; max-age=31536000; samesite=lax'
    document.cookie = 'site-lang-explicit=; path=/; max-age=0; samesite=lax'
    clearTranslateCookie()
  }, [])

  useEffect(() => {
    if (readTranslateCode()) return
    applyDocumentDirection(lang)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang(lang === 'en' ? 'ur' : 'en'),
    }),
    [lang, setLang]
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
