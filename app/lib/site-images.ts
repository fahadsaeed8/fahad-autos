/**
 * Unsplash URLs verified with HTTP 200 (some legacy IDs like 1625246333195 / 1649322014009 return 404 now).
 */
const q = 'auto=format&fit=crop&w=1200&q=80'

export const siteImages = {
  /** Tractor in field — “Field & fleet”, Top Link mood */
  fieldTractor: `https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?${q}`,
  /** Green tractor — Ford / linkage gallery slot */
  greenTractor: `https://images.unsplash.com/photo-1574943320219-553eb213f72d?${q}`,
  /** Tractor front — Fiat local parts */
  tractorFront: `https://images.unsplash.com/photo-1592982537447-7440770cbfc9?${q}`,
  harvest: `https://images.unsplash.com/photo-1457530378978-8bac673b8062?${q}`,
  irrigation: `https://images.unsplash.com/photo-1464226184884-fa280b87c399?${q}`,
  workshop: `https://images.unsplash.com/photo-1605000797499-95a51c5269ae?${q}`,
  wheatField: `https://images.unsplash.com/photo-1502741338009-cac2772e18bc?${q}`,
} as const

export const categoryImages = {
  fiat: siteImages.tractorFront,
  massey: siteImages.harvest,
  ford: siteImages.greenTractor,
  toplink: siteImages.fieldTractor,
  liftlink: siteImages.wheatField,
  hydraulic: siteImages.workshop,
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

/** Captions: field, hydraulics, machinery, irrigation, linkage, harvest */
export const galleryImages = [
  siteImages.fieldTractor,
  siteImages.workshop,
  siteImages.tractorFront,
  siteImages.irrigation,
  siteImages.greenTractor,
  siteImages.harvest,
] as const
