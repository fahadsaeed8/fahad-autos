'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/app/lib/language-context'
import {
  clearTranslateCookie,
  machineLanguageCodes,
  readTranslateCode,
  siteLanguages,
  writeTranslateCookie,
  type SiteLanguage,
} from '@/app/lib/translate-languages'

type GoogleTranslateElement = {
  new (
    options: { pageLanguage: string; autoDisplay: boolean; includedLanguages: string },
    elementId: string,
  ): unknown
}

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: { translate?: { TranslateElement?: GoogleTranslateElement } }
  }
}

function currentChoice(siteLang: 'en' | 'ur'): SiteLanguage {
  const translated = readTranslateCode()
  if (translated) {
    return siteLanguages.find((item) => item.code === translated) ?? siteLanguages[0]
  }
  return siteLanguages.find((item) => item.code === siteLang) ?? siteLanguages[0]
}

export default function LanguageMenu() {
  const pathname = usePathname()
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeCode, setActiveCode] = useState<string>(lang)
  const panelId = useId()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setActiveCode(currentChoice(lang).code)
  }, [lang, pathname])

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      const Element = window.google?.translate?.TranslateElement
      if (!Element || document.getElementById('google_translate_element')?.childElementCount) return
      new Element(
        {
          pageLanguage: 'en',
          autoDisplay: false,
          includedLanguages: machineLanguageCodes.join(','),
        },
        'google_translate_element',
      )
    }

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script')
      script.id = 'google-translate-script'
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit()
    }
  }, [])

  useEffect(() => {
    const hideGoogleBar = () => {
      document.querySelectorAll('iframe.skiptranslate').forEach((frame) => {
        const element = frame as HTMLElement
        element.style.setProperty('display', 'none', 'important')
        element.style.setProperty('visibility', 'hidden', 'important')
      })
      document.body.style.setProperty('top', '0px', 'important')
    }
    hideGoogleBar()
    const observer = new MutationObserver(hideGoogleBar)
    observer.observe(document.body, { childList: true })
    const timer = window.setInterval(hideGoogleBar, 500)
    window.setTimeout(() => window.clearInterval(timer), 8000)
    return () => {
      observer.disconnect()
      window.clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const code = readTranslateCode()
    if (!code) return
    let tries = 0
    const timer = window.setInterval(() => {
      tries += 1
      const select = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null
      if (select && select.value !== code) {
        select.value = code
        select.dispatchEvent(new Event('change'))
        window.clearInterval(timer)
      }
      if (tries > 20) window.clearInterval(timer)
    }, 400)
    return () => window.clearInterval(timer)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const active = siteLanguages.find((item) => item.code === activeCode) ?? siteLanguages[0]
  const needle = query.trim().toLowerCase()
  const visible = useMemo(
    () =>
      siteLanguages.filter((item) => {
        if (!needle) return true
        return item.native.toLowerCase().includes(needle) || item.name.toLowerCase().includes(needle) || item.code.toLowerCase().includes(needle)
      }),
    [needle],
  )
  const originals = visible.filter((item) => item.original)
  const translated = visible.filter((item) => !item.original)

  function choose(item: SiteLanguage) {
    setOpen(false)
    setQuery('')
    if (item.code === active.code) return

    if (item.original) {
      const hadTranslation = Boolean(readTranslateCode())
      clearTranslateCookie()
      setLang(item.code === 'ur' ? 'ur' : 'en')
      if (hadTranslation) window.location.reload()
      return
    }

    setLang('en')
    document.cookie = 'site-lang=en; path=/; max-age=31536000; samesite=lax'
    window.localStorage.setItem('site-lang', 'en')
    window.localStorage.setItem('site-lang-choice', item.code)
    document.cookie = `site-lang-choice=${item.code}; path=/; max-age=31536000; samesite=lax`
    writeTranslateCookie(item.code)
    window.location.reload()
  }

  return (
    <div ref={rootRef} className="notranslate relative" translate="no">
      <div id="google_translate_element" className="google-translate-host" />
      <button
        type="button"
        className="inline-flex h-11 max-w-[9.5rem] items-center gap-1.5 rounded-xl border border-amber-300/70 bg-slate-900/70 px-2.5 text-xs font-bold text-amber-100 shadow-lg shadow-slate-950/40 transition hover:border-amber-300 sm:text-sm"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9s1.3-6.2 3.8-9z" />
        </svg>
        <span className="truncate">{active.native}</span>
      </button>

      {open ? (
        <div
          id={panelId}
          role="listbox"
          aria-label="Language"
          className="absolute end-0 top-[calc(100%+0.5rem)] z-[80] w-72 max-w-[calc(100vw-2rem)] overflow-hidden rounded-[18px] border border-[#B8923D]/50 bg-[#161616] text-[#F4F0E6] shadow-2xl"
        >
          <div className="border-b border-white/10 p-2">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search language"
              className="w-full rounded-lg border border-white/10 bg-[#0c0c0c] px-3 py-2 text-sm text-[#F4F0E6] outline-none placeholder:text-[#A39B90] focus:border-[#B8923D]"
              autoFocus
            />
          </div>
          <div className="max-h-80 overflow-y-auto p-1">
            {originals.length ? (
              <p className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#B8923D]">Original</p>
            ) : null}
            {originals.map((item) => (
              <LanguageRow key={item.code} item={item} selected={item.code === active.code} onChoose={choose} />
            ))}
            {translated.length ? (
              <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#B8923D]">Translated</p>
            ) : null}
            {translated.map((item) => (
              <LanguageRow key={item.code} item={item} selected={item.code === active.code} onChoose={choose} />
            ))}
            {!visible.length ? <p className="px-3 py-4 text-sm text-[#A39B90]">No language matches.</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function LanguageRow({
  item,
  selected,
  onChoose,
}: {
  item: SiteLanguage
  selected: boolean
  onChoose: (item: SiteLanguage) => void
}) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      onClick={() => onChoose(item)}
      className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-start text-sm transition hover:bg-white/10 ${
        selected ? 'bg-[#B8923D]/20 text-[#F5E8C8]' : ''
      }`}
    >
      <span>{item.native}</span>
      <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-[#A39B90]">{item.name}</span>
    </button>
  )
}
