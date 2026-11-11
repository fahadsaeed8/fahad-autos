export type SiteLanguage = {
  code: string
  name: string
  native: string
  /** Written on the site, not machine-translated. */
  original?: boolean
}

/** English and Urdu are the site's own text. Every other code is translated from English. */
export const siteLanguages: SiteLanguage[] = [
  { code: 'en', name: 'English', native: 'English', original: true },
  { code: 'ur', name: 'Urdu', native: 'اردو', original: true },
  { code: 'ar', name: 'Arabic', native: 'العربية' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'sw', name: 'Swahili', native: 'Kiswahili' },
  { code: 'pt', name: 'Portuguese', native: 'Português' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'zh-CN', name: 'Chinese', native: '中文' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'tr', name: 'Turkish', native: 'Türkçe' },
  { code: 'de', name: 'German', native: 'Deutsch' },
  { code: 'ru', name: 'Russian', native: 'Русский' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'fa', name: 'Persian', native: 'فارسی' },
  { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Malay', native: 'Bahasa Melayu' },
  { code: 'th', name: 'Thai', native: 'ไทย' },
  { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt' },
  { code: 'ko', name: 'Korean', native: '한국어' },
  { code: 'ja', name: 'Japanese', native: '日本語' },
  { code: 'it', name: 'Italian', native: 'Italiano' },
  { code: 'nl', name: 'Dutch', native: 'Nederlands' },
  { code: 'pl', name: 'Polish', native: 'Polski' },
  { code: 'uk', name: 'Ukrainian', native: 'Українська' },
  { code: 'ro', name: 'Romanian', native: 'Română' },
  { code: 'el', name: 'Greek', native: 'Ελληνικά' },
  { code: 'he', name: 'Hebrew', native: 'עברית' },
  { code: 'am', name: 'Amharic', native: 'አማርኛ' },
  { code: 'so', name: 'Somali', native: 'Soomaali' },
  { code: 'ha', name: 'Hausa', native: 'Hausa' },
  { code: 'yo', name: 'Yoruba', native: 'Yorùbá' },
  { code: 'ig', name: 'Igbo', native: 'Igbo' },
]

export const machineLanguageCodes = siteLanguages.filter((item) => !item.original).map((item) => item.code)

export function readTranslateCode() {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(/(?:^|; )googtrans=(?:\/[^/;]+)?\/([A-Za-z-]+)/)
  const code = match?.[1]
  if (!code || code === 'en') return null
  return code
}

function cookieDomains() {
  const host = window.location.hostname
  const domains = [host]
  if (host.includes('.')) domains.push(`.${host}`)
  return domains
}

export function writeTranslateCookie(code: string) {
  const value = `/en/${code}`
  document.cookie = `googtrans=${value};path=/`
  for (const domain of cookieDomains()) {
    document.cookie = `googtrans=${value};path=/;domain=${domain}`
  }
}

export function clearTranslateCookie() {
  const expires = 'expires=Thu, 01 Jan 1970 00:00:00 GMT'
  document.cookie = `googtrans=;${expires};path=/`
  for (const domain of cookieDomains()) {
    document.cookie = `googtrans=;${expires};path=/;domain=${domain}`
  }
}
