function TractorMark({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 128 78"
      className={`h-10 w-16 shrink-0 ${flip ? '-scale-x-100' : ''}`}
      aria-hidden
    >
      <circle cx="34" cy="56" r="20" fill="#111827" />
      <circle cx="34" cy="56" r="11" fill="#9ca3af" />
      <circle cx="34" cy="56" r="4" fill="#f8fafc" />
      <circle cx="102" cy="58" r="12" fill="#111827" />
      <circle cx="102" cy="58" r="6.5" fill="#9ca3af" />
      <path d="M22 48h48l8-16h26v16h12v10H90" fill="#dc2626" />
      <path d="M50 22h28l6 12H54z" fill="#991b1b" />
      <path d="M58 26h14v8H58z" fill="#e0f2fe" />
      <rect x="44" y="10" width="5" height="16" rx="1.5" fill="#334155" />
    </svg>
  )
}

function VtBadge() {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-700 shadow-md ring-4 ring-amber-200/80">
      <span className="font-poster text-lg tracking-tight text-white">
        FA
      </span>
    </div>
  )
}

const copy = {
  en: {
    person: 'Haji Saeed',
    title: 'Fahad Tractors and Autos',
    work: 'Fiat, Massey and Ford local parts. Wholesale dealer and manufacturer of Top Link.',
    all: 'All tractor parts.',
    years: '25 years experience',
    main: '0313-4426717',
    address: 'Shop No. 43, Ramzan Chamber, 91/140 Badami Bagh, Lahore',
    phones: ['0321-4964013', '0300-4785384'],
    landline: 'Ph: 37700794',
  },
  ur: {
    person: 'حاجی سعید',
    title: 'فہد ٹریکٹرز اینڈ آٹوز',
    work: 'فیٹ، میسی، فورڈ کے لوکل پارٹس اور ٹاپ لنک کے ہول سیل ڈیلر اور مینوفیکچرر۔',
    all: 'ٹریکٹر کی تمام چیزیں۔',
    years: '۲۵ سال کا تجربہ',
    main: '0313-4426717',
    address: 'دکان نمبر 43، رمضان چیمبر، 91/140 بادامی باغ، لاہور',
    phones: ['0321-4964013', '0300-4785384'],
    landline: 'Ph: 37700794',
  },
} as const

export default function ShopCards({ isUr }: { isUr: boolean }) {
  const text = isUr ? copy.ur : copy.en

  return (
    <div className="w-full rounded-3xl border border-white/15 bg-white/10 p-2 shadow-2xl shadow-black/20 backdrop-blur sm:p-3">
      <article
        dir={isUr ? 'rtl' : 'ltr'}
        className="w-full overflow-hidden rounded-2xl bg-[#f4f0c8] text-slate-950"
      >
        <header className="flex items-center justify-between gap-3 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 px-4 py-3.5">
          <VtBadge />
          <div className="min-w-0 text-end">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-blue-950/70">
              {isUr ? 'مالک' : 'Proprietor'}
            </p>
            <p className="font-sans text-lg font-semibold text-blue-950" style={isUr ? { lineHeight: 1.8 } : undefined}>
              {text.person}
            </p>
          </div>
        </header>

        <div className="px-4 pb-4 pt-4">
          <div className="flex items-center justify-center gap-2">
            <TractorMark />
            <h2
              className={`min-w-0 flex-1 text-center text-blue-800 ${isUr ? 'text-2xl' : 'font-poster text-[1.55rem] uppercase leading-none tracking-[0.02em] sm:text-[1.85rem]'}`}
              style={isUr ? { lineHeight: 1.85 } : undefined}
            >
              {text.title}
            </h2>
            <TractorMark flip />
          </div>

          <p
            className="mt-3 text-center font-sans text-sm font-medium text-rose-800"
            style={isUr ? { lineHeight: 2 } : { lineHeight: 1.5 }}
          >
            {text.work}
          </p>
          <p
            className="mt-2 text-center font-sans text-base font-semibold text-blue-900"
            style={isUr ? { lineHeight: 1.9 } : undefined}
          >
            {text.all}
          </p>
          <p
            className="mt-1 text-center font-mono text-xs font-medium uppercase tracking-[0.16em] text-amber-800"
            style={isUr ? { lineHeight: 1.9 } : undefined}
          >
            {text.years}
          </p>
        </div>

        <footer className="bg-slate-950 px-4 py-3.5 text-amber-50">
          <p className="font-sans text-sm font-medium text-amber-100" style={isUr ? { lineHeight: 1.9 } : { lineHeight: 1.45 }}>
            {text.address}
          </p>
          <div className="notranslate mt-3 flex flex-wrap gap-2" translate="no">
            <a
              href="tel:+923134426717"
              className="rounded-lg bg-amber-300 px-2.5 py-1 font-mono text-sm font-medium tabular-nums tracking-wide text-slate-950"
            >
              {isUr ? 'مین' : 'Main'} {text.main}
            </a>
            {text.phones.map((phone) => (
              <span
                key={phone}
                className="rounded-lg bg-white/10 px-2.5 py-1 font-mono text-sm font-medium tabular-nums tracking-wide text-white"
              >
                {phone}
              </span>
            ))}
            <span className="rounded-lg bg-white/10 px-2.5 py-1 font-mono text-sm font-medium tabular-nums text-white">
              {text.landline}
            </span>
          </div>
        </footer>
      </article>
    </div>
  )
}
