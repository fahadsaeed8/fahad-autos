/**
 * Unsplash URLs verified with HTTP 200 (some legacy IDs like 1625246333195 / 1649322014009 return 404 now).
 */
const q = 'auto=format&fit=crop&w=1200&q=80'

export const siteImages = {
  /** Tractor in field (“Field & fleet”, Top Link mood) */
  fieldTractor: `https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?${q}`,
  /** Green tractor, Ford / linkage gallery slot */
  greenTractor: `https://images.unsplash.com/photo-1574943320219-553eb213f72d?${q}`,
  /** Tractor front, Fiat local parts */
  tractorFront: `https://images.unsplash.com/photo-1592982537447-7440770cbfc9?${q}`,
  harvest: `https://images.unsplash.com/photo-1457530378978-8bac673b8062?${q}`,
  irrigation: `https://images.unsplash.com/photo-1464226184884-fa280b87c399?${q}`,
  workshop: `https://images.unsplash.com/photo-1605000797499-95a51c5269ae?${q}`,
  wheatField: `https://images.unsplash.com/photo-1502741338009-cac2772e18bc?${q}`,
} as const

/** Stand-in product photos until the shop's own pictures replace them. */
export const partImages = {
  brands: '/parts/fiat-parts.jpg',
  'engine-filters': '/parts/filters.jpg',
  hydraulic: '/parts/hydraulic.jpg',
  'top-lift-link': '/parts/top-link.jpg',
  'clutch-gear': '/parts/clutch.jpg',
  'brakes-steer': '/parts/brakes.jpg',
  electrical: '/parts/electrical.jpg',
  pto: '/parts/pto.jpg',
  cooling: '/parts/radiator.jpg',
  'belts-bearings': '/parts/belts.jpg',
  'farming-field': '/parts/field-parts.jpg',
  tyres: '/parts/tyres.jpg',
  wholesale: '/parts/wholesale.jpg',
} as const

export function imageForPart(id: string) {
  if (id in partImages) return partImages[id as keyof typeof partImages]
  return partImages.brands
}

export const categoryImages = {
  fiat: '/parts/fiat-parts.jpg',
  massey: '/parts/massey-parts.jpg',
  ford: '/parts/ford-parts.jpg',
  toplink: '/parts/top-link.jpg',
  liftlink: '/parts/lift-link.jpg',
  hydraulic: '/parts/hydraulic.jpg',
} as const

/** Order matches parts page cards (reused across categories). */
export const partsPageImages = [
  siteImages.tractorFront,
  siteImages.greenTractor,
  siteImages.fieldTractor,
  siteImages.workshop,
  siteImages.irrigation,
  siteImages.harvest,
  siteImages.wheatField,
] as const

/** Each frame matches its gallery caption. Stand-ins until the shop's own photos replace them. */
export const galleryImages = [
  '/gallery/field.jpg',
  '/gallery/hydraulic.jpg',
  '/gallery/machinery.jpg',
  '/gallery/irrigation.jpg',
  '/gallery/linkage.jpg',
  '/gallery/harvest.jpg',
] as const
