'use client'

import { useTheme } from '@/app/lib/theme-context'
import { useLanguage } from '@/app/lib/language-context'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { lang } = useLanguage()
  const isLight = theme === 'light'
  const label = isLight
    ? lang === 'ur'
      ? 'ڈارک موڈ'
      : 'Switch to dark mode'
    : lang === 'ur'
      ? 'لائٹ موڈ'
      : 'Switch to light mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/70 bg-slate-900/70 text-amber-100 shadow-lg shadow-slate-950/40 transition hover:border-amber-300"
    >
      {isLight ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z"
          />
        </svg>
      )}
    </button>
  )
}
