type SectionHeadingProps = {
  as?: 'h1' | 'h2' | 'h3'
  /** Light: slate + gradient accent. Dark: white + cyan (for blue/dark sections). */
  variant?: 'light' | 'dark'
  size?: 'hero' | 'section' | 'page' | 'card'
  className?: string
  centered?: boolean
  primaryEn: string
  accentEn: string
  primaryUr: string
  accentUr: string
  isUr: boolean
  /** Override primary span classes (e.g. amber banner). */
  primaryClassName?: string
  /** Override accent span classes (e.g. amber banner). */
  accentClassName?: string
}

const sizeClasses: Record<NonNullable<SectionHeadingProps['size']>, string> = {
  hero: 'text-4xl font-extrabold leading-tight md:text-6xl',
  section: 'text-4xl font-extrabold tracking-tight md:text-5xl',
  page: 'text-4xl font-extrabold md:text-5xl',
  card: 'text-xl font-bold',
}

export function SectionHeading({
  as: Tag = 'h2',
  variant = 'light',
  size = 'section',
  className = '',
  centered = false,
  primaryEn,
  accentEn,
  primaryUr,
  accentUr,
  isUr,
  primaryClassName,
  accentClassName,
}: SectionHeadingProps) {
  const primary = isUr ? primaryUr : primaryEn
  const accent = isUr ? accentUr : accentEn
  const defaultPrimary = variant === 'light' ? 'text-slate-900' : 'text-white'
  const primaryCls = primaryClassName ?? defaultPrimary
  const defaultAccent =
    variant === 'light'
      ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent'
      : 'text-cyan-300'
  const accentCls = accentClassName ?? defaultAccent

  return (
    <Tag className={`${sizeClasses[size]} ${centered ? 'text-center ' : ''}${className}`.trim()}>
      <span className={primaryCls}>{primary}</span>
      {accent ? (
        <>
          {' '}
          <span className={accentCls}>{accent}</span>
        </>
      ) : null}
    </Tag>
  )
}
