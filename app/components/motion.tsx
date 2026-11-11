'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

const ellipse =
  'radial-gradient(ellipse at center, rgba(245,232,200,0.5) 0%, rgba(217,185,106,0.36) 24%, rgba(184,146,61,0.2) 48%, rgba(138,107,37,0.06) 68%, transparent 78%)'

export function GlowEllipse({ place = 'center' }: { place?: 'center' | 'corner' | 'header' }) {
  const placeClass =
    place === 'header'
      ? 'glow-breath h-[220%] w-[78%] md:w-[46%]'
      : place === 'corner'
        ? 'glow-corner right-0 top-16 h-72 w-72 md:top-24 md:h-[460px] md:w-[460px]'
        : 'glow-breath h-[48%] w-[90%] md:h-[62%] md:w-[62%]'

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-[50%] blur-[12px] ${placeClass}`}
      style={{ background: ellipse }}
    />
  )
}

export function Reveal({
  delay = 0,
  className = '',
  children,
}: {
  delay?: number
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const node = ref.current
    if (!node) return
    let active = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.15) {
          if (!active) {
            active = true
            setShown(false)
            requestAnimationFrame(() => {
              requestAnimationFrame(() => setShown(true))
            })
          }
        } else if (!entry.isIntersecting && active) {
          active = false
          setShown(false)
        }
      },
      { threshold: [0, 0.15] },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? undefined : 0,
        animation: shown ? `rise-line 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms backwards` : 'none',
      }}
    >
      {children}
    </div>
  )
}
