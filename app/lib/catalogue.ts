import { brand } from '@/app/lib/brand'

/** Same list as the WhatsApp catalogue, FTA-01 to FTA-97.
 * A photo is shown once for the group, with a caption of what the picture actually is.
 */

export type CataloguePhoto = {
  src: string
  captionEn: string
  captionUr: string
}

export type CataloguePart = {
  no: string
  en: string
  ur: string
  image?: string
}

export type CatalogueGroup = {
  id: string
  en: string
  ur: string
  photos: CataloguePhoto[]
  parts: CataloguePart[]
}

export const catalogueGroups: CatalogueGroup[] = [
  {
    id: 'linkage',
    en: 'Linkage',
    ur: 'لنکیج',
    photos: [
      { src: '/parts/top-link.jpg', captionEn: 'Top link, with its handle.', captionUr: 'ٹاپ لنک، ہینڈل کے ساتھ۔' },
      { src: '/parts/lift-link.jpg', captionEn: 'Lift link set.', captionUr: 'لفٹ لنک سیٹ۔' },
      { src: '/gallery/linkage.jpg', captionEn: 'Linkage on the tractor: arms, chains and pins.', captionUr: 'ٹریکٹر پر لنکیج: آرمز، چین اور پن۔' },
    ],
    parts: [
      { no: 'FTA-01', en: 'Top link pipe (adjustable)', ur: 'ٹاپ لنک پائپ (ایڈجسٹ ہونے والا)', image: '/parts/top-link.jpg' },
      { no: 'FTA-02', en: 'Lift link / lower link set', ur: 'لفٹ لنک / لوئر لنک سیٹ', image: '/parts/lift-link.jpg' },
      { no: 'FTA-03', en: 'Cat-1 / Cat-2 ball ends', ur: 'کیٹ-1 / کیٹ-2 بال اینڈ' },
      { no: 'FTA-04', en: 'Linch pins & R-pins', ur: 'لنچ پن اور آر پن' },
      { no: 'FTA-05', en: 'Stabilizer chain & turnbuckle', ur: 'سٹیبلائزر چین اور ٹرن بکل' },
      { no: 'FTA-06', en: 'Linkage pins & bush kits', ur: 'لنکیج پن اور بش کٹ' },
      { no: 'FTA-07', en: 'Top link handle & nut', ur: 'ٹاپ لنک ہینڈل اور نٹ', image: '/parts/top-link.jpg' },
      { no: 'FTA-08', en: 'Drawbar hooks & extensions', ur: 'ڈرابار ہک اور ایکسٹینشن' },
    ],
  },
  {
    id: 'engine',
    en: 'Engine and axle',
    ur: 'انجن اور ایکسل',
    photos: [
      { src: '/parts/fiat-parts.jpg', captionEn: 'Head gasket, pistons, rings and liner.', captionUr: 'ہیڈ گاسکیٹ، پسٹن، رنگ اور لائنر۔' },
      { src: '/parts/radiator.jpg', captionEn: 'Radiator, water pump and coolant hose.', captionUr: 'ریڈی ایٹر، واٹر پمپ اور کولنٹ ہوز۔' },
      { src: '/parts/massey-parts.jpg', captionEn: 'Shaft and differential gears.', captionUr: 'شافٹ اور ڈفرینشل گیئر۔' },
    ],
    parts: [
      { no: 'FTA-09', en: 'Engine head & gasket sets', ur: 'انجن ہیڈ اور گاسکیٹ سیٹ', image: '/parts/fiat-parts.jpg' },
      { no: 'FTA-10', en: 'Piston, rings & liners', ur: 'پسٹن، رنگ اور لائنر', image: '/parts/fiat-parts.jpg' },
      { no: 'FTA-11', en: 'Crankshaft & camshaft bearings', ur: 'کرینک شافٹ اور کیم شافٹ بیرنگ' },
      { no: 'FTA-12', en: 'Injector & pump service parts', ur: 'انجیکٹر اور پمپ کے پرزے' },
      { no: 'FTA-13', en: 'Radiator & cooling hoses', ur: 'ریڈی ایٹر اور کولنگ ہوز', image: '/parts/radiator.jpg' },
      { no: 'FTA-14', en: 'Body panels, fenders & hood parts', ur: 'باڈی پینل، فنڈر اور ہڈ' },
      { no: 'FTA-15', en: 'Axle shafts & differential kits', ur: 'ایکسل شافٹ اور ڈفرینشل کٹ', image: '/parts/massey-parts.jpg' },
      { no: 'FTA-16', en: 'Gear lever & linkage bushes', ur: 'گیئر لیور اور لنکیج بش' },
    ],
  },
  {
    id: 'filters',
    en: 'Filters',
    ur: 'فلٹر',
    photos: [{ src: '/parts/filters.jpg', captionEn: 'Oil filter, fuel filter and air filter.', captionUr: 'آئل فلٹر، فیول فلٹر اور ایئر فلٹر۔' }],
    parts: [
      { no: 'FTA-17', en: 'Engine oil filter', ur: 'انجن آئل فلٹر', image: '/parts/filters.jpg' },
      { no: 'FTA-18', en: 'Primary diesel fuel filter', ur: 'پرائمری ڈیزل فیول فلٹر', image: '/parts/filters.jpg' },
      { no: 'FTA-19', en: 'Secondary fine fuel filter', ur: 'سیکنڈری فائن فیول فلٹر' },
      { no: 'FTA-20', en: 'Air filter element & outer cap', ur: 'ایئر فلٹر اور بیرونی ڈھکن', image: '/parts/filters.jpg' },
      { no: 'FTA-21', en: 'Hydraulic oil suction filter', ur: 'ہائیڈرولک آئل سکشن فلٹر' },
      { no: 'FTA-22', en: 'Fuel water separator bowl & kit', ur: 'فیول واٹر سیپریٹر' },
      { no: 'FTA-23', en: 'Breather & crankcase filter', ur: 'بریدر اور کرینک کیس فلٹر' },
      { no: 'FTA-24', en: 'Bypass & safety cartridge filters', ur: 'بائی پاس اور سیفٹی فلٹر' },
      { no: 'FTA-25', en: 'Oil filter housing gasket', ur: 'آئل فلٹر ہاؤسنگ گاسکیٹ' },
      { no: 'FTA-26', en: 'Service filter kit (oil + fuel + air)', ur: 'سروس فلٹر کٹ (آئل، فیول، ایئر)', image: '/parts/filters.jpg' },
    ],
  },
  {
    id: 'hydraulic',
    en: 'Hydraulic',
    ur: 'ہائیڈرولک',
    photos: [{ src: '/parts/hydraulic.jpg', captionEn: 'Hydraulic pump, lift cylinder and hose.', captionUr: 'ہائیڈرولک پمپ، لفٹ سلنڈر اور ہوز۔' }],
    parts: [
      { no: 'FTA-27', en: 'Hydraulic gear pump', ur: 'ہائیڈرولک گیئر پمپ', image: '/parts/hydraulic.jpg' },
      { no: 'FTA-28', en: 'Lift & position control cylinder', ur: 'لفٹ اور پوزیشن کنٹرول سلنڈر', image: '/parts/hydraulic.jpg' },
      { no: 'FTA-29', en: 'Steering assist cylinder', ur: 'اسٹیئرنگ اسسٹ سلنڈر' },
      { no: 'FTA-30', en: 'Directional control valve', ur: 'ڈائریکشنل کنٹرول والو' },
      { no: 'FTA-31', en: 'Relief & pressure valve', ur: 'ریلیف اور پریشر والو' },
      { no: 'FTA-32', en: 'High-pressure rubber hose', ur: 'ہائی پریشر ربڑ ہوز', image: '/parts/hydraulic.jpg' },
      { no: 'FTA-33', en: 'Quick-release couplings', ur: 'کوئک ریلیز کپلنگ' },
      { no: 'FTA-34', en: 'Hydraulic oil filter & strainer', ur: 'ہائیڈرولک آئل فلٹر اور سٹرینر' },
      { no: 'FTA-35', en: 'Cylinder seal kits', ur: 'سلنڈر سیل کٹ' },
      { no: 'FTA-36', en: 'Orbit motor & flow divider', ur: 'آربٹ موٹر اور فلو ڈیوائیڈر' },
    ],
  },
  {
    id: 'clutch',
    en: 'Clutch and gears',
    ur: 'کلچ اور گیئر',
    photos: [
      { src: '/parts/clutch.jpg', captionEn: 'Clutch plate and pressure plate.', captionUr: 'کلچ پلیٹ اور پریشر پلیٹ۔' },
      { src: '/parts/ford-parts.jpg', captionEn: 'Clutch disc and gear shafts.', captionUr: 'کلچ ڈسک اور گیئر شافٹ۔' },
    ],
    parts: [
      { no: 'FTA-37', en: 'Clutch plate (single / dual)', ur: 'کلچ پلیٹ (سنگل / ڈوئل)', image: '/parts/clutch.jpg' },
      { no: 'FTA-38', en: 'Pressure plate & cover assembly', ur: 'پریشر پلیٹ اور کور', image: '/parts/clutch.jpg' },
      { no: 'FTA-39', en: 'Release / thrust bearing', ur: 'ریلیز / تھرسٹ بیرنگ' },
      { no: 'FTA-40', en: 'Main shaft & counter shaft gears', ur: 'مین شافٹ اور کاؤنٹر شافٹ گیئر', image: '/parts/ford-parts.jpg' },
      { no: 'FTA-41', en: 'Synchronizer rings & hubs', ur: 'سنکرونائزر رنگ اور ہب' },
      { no: 'FTA-42', en: 'Gear shift forks & rails', ur: 'گیئر شفٹ فورک اور ریل' },
      { no: 'FTA-43', en: 'Transmission oil seals', ur: 'ٹرانسمیشن آئل سیل' },
      { no: 'FTA-44', en: 'PTO drive gears & shaft', ur: 'پی ٹی او ڈرائیو گیئر اور شافٹ' },
    ],
  },
  {
    id: 'brakes',
    en: 'Brakes and steering',
    ur: 'بریک اور اسٹیئرنگ',
    photos: [{ src: '/parts/brakes.jpg', captionEn: 'Brake shoe.', captionUr: 'بریک شو۔' }],
    parts: [
      { no: 'FTA-45', en: 'Brake shoe & lining', ur: 'بریک شو اور لائننگ', image: '/parts/brakes.jpg' },
      { no: 'FTA-46', en: 'Brake drum (front / rear)', ur: 'بریک ڈرم (سامنے / پیچھے)' },
      { no: 'FTA-47', en: 'Master cylinder & repair kit', ur: 'ماسٹر سلنڈر اور مرمت کٹ' },
      { no: 'FTA-48', en: 'Wheel cylinder & seals', ur: 'وہیل سلنڈر اور سیل' },
      { no: 'FTA-49', en: 'Steering sector & worm set', ur: 'اسٹیئرنگ سیکٹر اور ورم سیٹ' },
      { no: 'FTA-50', en: 'Tie rod ends & drag link', ur: 'ٹائی راڈ اینڈ اور ڈریگ لنک' },
      { no: 'FTA-51', en: 'King pin & bush kit', ur: 'کنگ پن اور بش کٹ' },
      { no: 'FTA-52', en: 'Power steering hose & pump parts', ur: 'پاور اسٹیئرنگ ہوز اور پمپ کے پرزے' },
    ],
  },
  {
    id: 'electrical',
    en: 'Electrical',
    ur: 'بجلی',
    photos: [{ src: '/parts/electrical.jpg', captionEn: 'Starter motor, alternator and head lamp.', captionUr: 'سٹارٹر، آلٹرنیٹر اور ہیڈ لیمپ۔' }],
    parts: [
      { no: 'FTA-53', en: 'Battery (12V farm duty)', ur: 'بیٹری (12 وولٹ، کھیت والی)' },
      { no: 'FTA-54', en: 'Starter motor & bendix', ur: 'سٹارٹر موٹر اور بینڈکس', image: '/parts/electrical.jpg' },
      { no: 'FTA-55', en: 'Alternator / dynamo', ur: 'آلٹرنیٹر / ڈائنمو', image: '/parts/electrical.jpg' },
      { no: 'FTA-56', en: 'Head lamp & work light', ur: 'ہیڈ لیمپ اور ورک لائٹ', image: '/parts/electrical.jpg' },
      { no: 'FTA-57', en: 'Tail & indicator lamp', ur: 'ٹیل اور انڈیکیٹر لیمپ' },
      { no: 'FTA-58', en: 'Horn & flasher unit', ur: 'ہارن اور فلیشر' },
      { no: 'FTA-59', en: 'Ignition switch & key set', ur: 'اگنیشن سوئچ اور چابی' },
      { no: 'FTA-60', en: 'Fuse box & relays', ur: 'فیوز باکس اور ریلے' },
      { no: 'FTA-61', en: 'Wiring harness patches', ur: 'وائرنگ ہارنس پیچ' },
    ],
  },
  {
    id: 'pto',
    en: 'PTO',
    ur: 'پی ٹی او',
    photos: [{ src: '/parts/pto.jpg', captionEn: 'PTO shaft, with yoke and joint.', captionUr: 'پی ٹی او شافٹ، یوک اور جوڑ کے ساتھ۔' }],
    parts: [
      { no: 'FTA-62', en: 'PTO shaft (6 / 8 spline)', ur: 'پی ٹی او شافٹ (6 / 8 سپلائن)', image: '/parts/pto.jpg' },
      { no: 'FTA-63', en: 'Shear bolt & guard set', ur: 'شیئر بولٹ اور گارڈ' },
      { no: 'FTA-64', en: 'Quick coupler yoke', ur: 'کوئک کپلر یوک', image: '/parts/pto.jpg' },
      { no: 'FTA-65', en: 'Cross kit & U-joint', ur: 'کراس کٹ اور یو جوائنٹ', image: '/parts/pto.jpg' },
      { no: 'FTA-66', en: 'PTO clutch pack', ur: 'پی ٹی او کلچ پیک' },
      { no: 'FTA-67', en: 'Extension shaft for tubewell', ur: 'ٹیوب ویل کے لئے ایکسٹینشن شافٹ' },
      { no: 'FTA-68', en: 'Safety shield & chain', ur: 'سیفٹی شیلڈ اور چین' },
    ],
  },
  {
    id: 'cooling',
    en: 'Cooling',
    ur: 'کولنگ',
    photos: [{ src: '/parts/radiator.jpg', captionEn: 'Radiator, water pump and coolant hose.', captionUr: 'ریڈی ایٹر، واٹر پمپ اور کولنٹ ہوز۔' }],
    parts: [
      { no: 'FTA-69', en: 'Radiator core / assembly', ur: 'ریڈی ایٹر کور / اسمبلی', image: '/parts/radiator.jpg' },
      { no: 'FTA-70', en: 'Radiator pressure cap', ur: 'ریڈی ایٹر پریشر کیپ' },
      { no: 'FTA-71', en: 'Water pump & impeller', ur: 'واٹر پمپ اور امپیلر', image: '/parts/radiator.jpg' },
      { no: 'FTA-72', en: 'Thermostat & housing', ur: 'تھرمو سٹیٹ اور ہاؤسنگ' },
      { no: 'FTA-73', en: 'Coolant hose (upper / lower)', ur: 'کولنٹ ہوز (اوپر / نیچے)', image: '/parts/radiator.jpg' },
      { no: 'FTA-74', en: 'Fan blade & pulley', ur: 'فین بلیڈ اور پلّی' },
      { no: 'FTA-75', en: 'Temperature sender & gauge', ur: 'ٹمپریچر سینڈر اور گیج' },
    ],
  },
  {
    id: 'belts',
    en: 'Belts and bearings',
    ur: 'بیلٹ اور بیرنگ',
    photos: [{ src: '/parts/belts.jpg', captionEn: 'V-belts, ball bearing and taper roller bearing.', captionUr: 'وی بیلٹ، بال بیرنگ اور ٹیپر رولر بیرنگ۔' }],
    parts: [
      { no: 'FTA-76', en: 'Fan / alternator V-belt', ur: 'فین / آلٹرنیٹر وی بیلٹ', image: '/parts/belts.jpg' },
      { no: 'FTA-77', en: 'Compressor & pump belt set', ur: 'کمپریسر اور پمپ بیلٹ سیٹ', image: '/parts/belts.jpg' },
      { no: 'FTA-78', en: 'Taper roller bearing', ur: 'ٹیپر رولر بیرنگ', image: '/parts/belts.jpg' },
      { no: 'FTA-79', en: 'Ball bearing', ur: 'بال بیرنگ', image: '/parts/belts.jpg' },
      { no: 'FTA-80', en: 'Needle bearing & cage', ur: 'نیڈل بیرنگ اور کیج' },
      { no: 'FTA-81', en: 'Oil seal & O-ring kit', ur: 'آئل سیل اور او رنگ کٹ' },
      { no: 'FTA-82', en: 'Belt tensioner & idler', ur: 'بیلٹ ٹینشنر اور آئیڈلر' },
    ],
  },
  {
    id: 'field',
    en: 'Field equipment',
    ur: 'کھیت کا سامان',
    photos: [{ src: '/parts/field-parts.jpg', captionEn: 'Cultivator tines, nozzles and irrigation fitting.', captionUr: 'کلٹیویٹر کے دانت، نوزل اور آبپاشی فٹنگ۔' }],
    parts: [
      { no: 'FTA-83', en: 'Spray pump & nozzle kit', ur: 'سپرے پمپ اور نوزل کٹ', image: '/parts/field-parts.jpg' },
      { no: 'FTA-84', en: 'Boom pipe & hose clamps', ur: 'بوم پائپ اور ہوز کلیمپ' },
      { no: 'FTA-85', en: 'Drip / flood irrigation fittings', ur: 'ڈرپ / فلڈ آبپاشی فٹنگ', image: '/parts/field-parts.jpg' },
      { no: 'FTA-86', en: 'Cultivator tine & clamp', ur: 'کلٹیویٹر ٹائن اور کلیمپ', image: '/parts/field-parts.jpg' },
      { no: 'FTA-87', en: 'Rotavator blade & bolt set', ur: 'روٹیویٹر بلیڈ اور بولٹ' },
      { no: 'FTA-88', en: 'Disc plough bearing & scraper', ur: 'ڈسک پلاؤ بیرنگ اور سکریپر' },
      { no: 'FTA-89', en: 'Seed drill linkage pins', ur: 'سیڈ ڈرل لنکیج پن' },
      { no: 'FTA-90', en: 'Trailer hitch & drawbar pins', ur: 'ٹریلر ہچ اور ڈرابار پن' },
      { no: 'FTA-91', en: 'Mud pump & chain for water', ur: 'مڈ پمپ اور پانی کی چین' },
    ],
  },
  {
    id: 'tyres',
    en: 'Tyres',
    ur: 'ٹائر',
    photos: [{ src: '/parts/tyres.jpg', captionEn: 'Rear tractor tyre and tube.', captionUr: 'پچھلا ٹریکٹر ٹائر اور ٹیوب۔' }],
    parts: [
      { no: 'FTA-92', en: 'Rear drive tyre (farm tread)', ur: 'پچھلا ڈرائیو ٹائر', image: '/parts/tyres.jpg' },
      { no: 'FTA-93', en: 'Front steer tyre', ur: 'اگلا اسٹیئر ٹائر' },
      { no: 'FTA-94', en: 'Heavy-duty tube & flap', ur: 'ہیوی ڈیوٹی ٹیوب اور فلیپ', image: '/parts/tyres.jpg' },
      { no: 'FTA-95', en: 'Rim strip & valve set', ur: 'رم سٹرپ اور والو سیٹ' },
      { no: 'FTA-96', en: 'Wheel weights', ur: 'وہیل ویٹ' },
      { no: 'FTA-97', en: 'Tyre lever & repair patch', ur: 'ٹائر لیور اور مرمت پیچ' },
    ],
  },
]

export const catalogueParts = catalogueGroups.flatMap((group) => group.parts)

export function askForPartHref(part: CataloguePart) {
  const text = `I need ${part.no} ${part.en}. My tractor brand and model is: `
  return `${brand.whatsappHref}?text=${encodeURIComponent(text)}`
}

export function tellProductHref(product: string) {
  const named = product.trim()
  const text = named
    ? `This product is not in the catalogue. Please quote it or make it: ${named}. My tractor brand and model is: `
    : 'A product I need is not in the catalogue. The product is: '
  return `${brand.whatsappHref}?text=${encodeURIComponent(text)}`
}
