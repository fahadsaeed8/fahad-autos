import { partsPageImages } from '@/app/lib/site-images'

const N = partsPageImages.length

/** imageIndex 0..N-1 — each card can use a different stock image */
export type PartSubItem = {
  en: string
  ur: string
  descEn: string
  descUr: string
  imageIndex: number
}

export type PartCategory = {
  id: string
  primaryEn: string
  accentEn: string
  primaryUr: string
  accentUr: string
  descEn: string
  descUr: string
  imageIndex: number
  items: PartSubItem[]
}

function sub(
  en: string,
  ur: string,
  descEn: string,
  descUr: string,
  imageIndex: number
): PartSubItem {
  return { en, ur, descEn, descUr, imageIndex: imageIndex % N }
}

export const PART_CATEGORIES: PartCategory[] = [
  {
    id: 'brands',
    primaryEn: 'Fiat, Massey, Ford',
    accentEn: 'Local Parts',
    primaryUr: 'فیاٹ، میسی، فورڈ',
    accentUr: 'لوکل پارٹس',
    descEn:
      'Engine, clutch, gearbox, axle and body-related local parts for daily field and transport use.',
    descUr:
      'انجن، کلچ، گیئر باکس، ایکسل اور باڈی سے متعلق لوکل پارٹس کھیت اور سڑک دونوں استعمال کے لیے۔',
    imageIndex: 0,
    items: [
      sub(
        'Engine head & gasket sets',
        'انجن ہیڈ اور گیسکٹ سیٹ',
        'Cylinder head sealing for overhaul jobs; match tractor model and head type.',
        'اوور ہال کے لیے ہیڈ سیلنگ؛ ٹریکٹر ماڈل اور ہیڈ ٹائپ کے مطابق۔',
        0
      ),
      sub(
        'Piston, rings & liners (model-wise)',
        'پسٹن، رنگ اور لائنر ماڈل کے مطابق',
        'Compression repair kits for worn engines; bore size checked before supply.',
        'گھسے انجن کے لیے کمپریشن کٹ؛ سپلائی سے پہلے بور سائز چیک۔',
        1
      ),
      sub(
        'Crankshaft & camshaft bearings',
        'کرینک اور کیم شافٹ بیئرنگ',
        'Main and big-end shells where local pattern parts are preferred.',
        'مین اور بگ اینڈ شیلز جہاں لوکل پیٹرن پسند ہو۔',
        2
      ),
      sub(
        'Injector & pump service parts',
        'انجیکٹر اور پمپ سروس پارٹس',
        'Nozzles, delivery valves and pump kits for field tuning and workshop repair.',
        'نوزل، ڈیلیوری والو اور پمپ کٹ کھیت اور ورکشاپ ٹیوننگ کے لیے۔',
        3
      ),
      sub(
        'Radiator & cooling hoses (brand fit)',
        'ریڈیٹر اور کولنگ پائپ برانڈ فٹ',
        'Hoses and clamps sized for Fiat / Massey / Ford radiator layouts.',
        'فیاٹ، میسی، فورڈ ریڈیٹر لے آؤٹ کے مطابق پائپ اور کلیمپ۔',
        4
      ),
      sub(
        'Body panels, fenders & hood parts',
        'باڈی پینل، فینڈر اور ہڈ پارٹس',
        'Sheet metal for mud guards, bonnet catches and side panels.',
        'مٹی گارڈ، بونٹ کلیچ اور سائیڈ پینل کے لیے شیٹ میٹل۔',
        5
      ),
      sub(
        'Axle shafts & differential kits',
        'ایکسل شافٹ اور ڈفرنشل کٹ',
        'Half shafts, crown wheel and pinion where heavy loads are common.',
        'آدھی شافٹ، کراؤن وہیل اور پینین بھاری بوجھ والے کاموں میں۔',
        6
      ),
      sub(
        'Gear lever & linkage bushes',
        'گیئر لیور اور لنکیج بش',
        'Nylon and brass bushes to remove play in shift and draft control.',
        'شفٹ اور ڈرافٹ کنٹرول میں کھلوار ختم کرنے کے لیے بش۔',
        0
      ),
    ],
  },
  {
    id: 'engine-filters',
    primaryEn: 'Engine &',
    accentEn: 'Filters',
    primaryUr: 'انجن اور',
    accentUr: 'فلٹر',
    descEn: 'Oil, fuel and air filters, gaskets and service items that protect the engine in dusty farm conditions.',
    descUr:
      'آئل، ڈیزل اور ہوا کے فلٹر، گیسکٹ اور سروس آئٹم جو دھول والے کھیت میں انجن کی حفاظت کرتے ہیں۔',
    imageIndex: 1,
    items: [
      sub(
        'Engine oil filter (spin-on / cartridge)',
        'انجن آئل فلٹر سپن آن / کارٹج',
        'Spin-on or cartridge style; change with correct thread and gasket.',
        'سپن آن یا کارٹج؛ صحیح تھریڈ اور گیسکٹ کے ساتھ تبدیلی۔',
        1
      ),
      sub(
        'Primary diesel fuel filter',
        'پرائمری ڈیزل فیول فلٹر',
        'First stage filtration before injection pump; frequent change in dirty fuel.',
        'انجیکشن پمپ سے پہلے پہلا فلٹر؛ گندے فیول میں جلدی تبدیلی۔',
        2
      ),
      sub(
        'Secondary fine fuel filter',
        'سیکنڈری باریک فیول فلٹر',
        'Fine mesh element for water and particle capture near the engine.',
        'انجن کے قریب پانی اور ذرات پکڑنے کے لیے باریک جالی۔',
        3
      ),
      sub(
        'Air filter element & outer cap',
        'ایئر فلٹر عنصر اور بیرونی ڈھکن',
        'Paper or mesh elements; pre-clean outer cap in dusty harvest weeks.',
        'کاغذ یا جالی؛ دھول والے ہفتوں میں بیرونی ڈھکن صاف رکھیں۔',
        4
      ),
      sub(
        'Hydraulic oil suction filter',
        'ہائیڈرولک آئل سکشن فلٹر',
        'Protects pump from grit when loader or lift runs long hours.',
        'لوڈر یا لفٹ لمبے چلنے پر پمپ کو ریت سے بچاتا ہے۔',
        5
      ),
      sub(
        'Fuel water separator bowl & kit',
        'فیول واٹر سپریٹر باؤل اور کٹ',
        'Drain water before it reaches pump; essential for canal-area diesel.',
        'پمپ سے پہلے پانی نکالیں؛ نہری ڈیزل کے لیے ضروری۔',
        6
      ),
      sub(
        'Breather & crankcase filter',
        'بریدر اور کرینک کیس فلٹر',
        'Stops dust entering crankcase on open farm roads.',
        'کھلے کھیت کی سڑکوں پر کرینک کیس میں دھول روکتا ہے۔',
        0
      ),
      sub(
        'Bypass & safety cartridge filters',
        'بائی پاس اور سیفٹی کارٹج فلٹر',
        'Cartridge types for auxiliary circuits and safety relief lines.',
        'اضافی سرکٹ اور سیفٹی لائن کے لیے کارٹج۔',
        1
      ),
      sub(
        'Oil filter housing gasket',
        'آئل فلٹر ہاؤسنگ گیسکٹ',
        'Flat and O-ring gaskets so spin-on housings seal without leaks.',
        'سپن آن ہاؤسنگ بغیر رساو کے سیل کرنے کے لیے۔',
        2
      ),
      sub(
        'Service filter kits (oil + fuel + air)',
        'سروس فلٹر کٹ آئل فیول ہوا',
        'One kit for seasonal service — saves matching part numbers at the shop.',
        'موسمی سروس ایک کٹ میں؛ دکان پر نمبر میچنگ آسان۔',
        3
      ),
    ],
  },
  {
    id: 'hydraulic',
    primaryEn: 'Hydraulic',
    accentEn: 'System',
    primaryUr: 'ہائیڈرولک',
    accentUr: 'سسٹم',
    descEn: 'Pumps, cylinders, valves, hoses and couplings for loaders, lifts and implement control.',
    descUr:
      'پمپ، سلنڈر، والو، پائپ اور کنیکٹر لوڈر، لفٹ اور مشین کنٹرول کے لیے۔',
    imageIndex: 2,
    items: [
      sub(
        'Hydraulic gear pump',
        'ہائیڈرولک گیئر پمپ',
        'Flow-rated pumps for standard rear-mount and mid-mount setups.',
        'سٹینڈرڈ پیچھے یا درمیان فٹ کے لیے فلو ریٹیڈ پمپ۔',
        2
      ),
      sub(
        'Lift & position control cylinder',
        'لفٹ اور پوزیشن کنٹرول سلنڈر',
        'Lift ram and draft sensing cylinders for three-point hitch.',
        'تین نقطہ ہچ کے لیے لفٹ ریم اور ڈرافٹ سیلنڈر۔',
        3
      ),
      sub(
        'Steering assist cylinder',
        'اسٹیرنگ اسسٹ سلنڈر',
        'Helps steering on front loaders and heavy trailers.',
        'فرنٹ لوڈر اور بھاری ٹریلر پر اسٹیرنگ آسان۔',
        4
      ),
      sub(
        'Directional control valve',
        'ڈائریکشنل کنٹرول والو',
        'Spool valves for loader raise/lower and auxiliary spool ports.',
        'لوڈر اوپر نیچے اور اضافی پورٹ کے لیے سپول والو۔',
        5
      ),
      sub(
        'Relief & pressure valve',
        'ریلیف اور پریشر والو',
        'Protects circuit from over-pressure when implement hits obstacle.',
        'رکاوٹ لگنے پر سرکٹ اوور پریشر سے بچاتا ہے۔',
        6
      ),
      sub(
        'High-pressure rubber hose',
        'ہائی پریشر ربڑ پائپ',
        'Wire-braid hose cut to length; matched fittings for field repair.',
        'تار والا ربڑ لمبائی کے مطابق؛ فیلڈ ریپیر فٹنگ۔',
        0
      ),
      sub(
        'Quick-release couplings',
        'فوری کھلنے والے کنیکٹر',
        'Flat-face couplers for clean connect/disconnect of implements.',
        'مشین لگانے اتارنے کے لیے فلیٹ فیس کنپلر۔',
        1
      ),
      sub(
        'Hydraulic oil filter & strainer',
        'ہائیڈرولک آئل فلٹر اور سٹینر',
        'Suction strainer and return filter to extend pump life.',
        'سکشن سٹینر اور ریٹرن فلٹر پمپ عمر بڑھاتے ہیں۔',
        2
      ),
      sub(
        'Cylinder seal kits',
        'سلنڈر سیل کٹ',
        'O-ring and wiper kits for leaking lift or steering cylinders.',
        'رساو والے لفٹ یا اسٹیرنگ سلنڈر کے لیے۔',
        3
      ),
      sub(
        'Orbit motor & flow divider (where used)',
        'آربٹ موٹر اور فلو ڈیوائڈر',
        'For drive systems that need metered flow to auger or reel.',
        'آگر یا ریل کو میٹرڈ فلو چاہیے جہاں لگے۔',
        4
      ),
    ],
  },
  {
    id: 'top-lift-link',
    primaryEn: 'Top Link &',
    accentEn: 'Lift Link',
    primaryUr: 'ٹاپ لنک اور',
    accentUr: 'لفٹ لنک',
    descEn: 'Wholesale and retail for three-point linkage, pins, balls and category-wise fittings.',
    descUr:
      'تین نقطہ لنکیج، پن، بال اور کیٹیگری کے مطابق فٹنگ ہول سیل اور ریٹیل دونوں میں۔',
    imageIndex: 3,
    items: [
      sub(
        'Top link pipe (adjustable)',
        'ٹاپ لنک پائپ ایڈجسٹیبل',
        'Threaded pipe with handle for implement height and angle.',
        'لمبائی اور زاویہ ایڈجسٹ کرنے کے لیے تھریڈ والا پائپ۔',
        3
      ),
      sub(
        'Lift link / lower link set',
        'لفٹ لنک اور لوئر لنک سیٹ',
        'Left/right lower arms and lift rods for category I & II.',
        'کیٹ ۱ اور ۲ کے لیے بائیں دائیں بازو اور لفٹ راڈ۔',
        4
      ),
      sub(
        'Cat-1 / Cat-2 ball ends',
        'کیٹ ۱ اور ۲ بال اینڈ',
        'Hitch balls and retainers matching implement drawbar size.',
        'مشین ڈرا بار سائز کے مطابق بال اور ریٹینر۔',
        5
      ),
      sub(
        'Linch pins & R-pins',
        'لنچ پن اور آر پن',
        'Quick secure pins for lower link and implement hooks.',
        'لوئر لنک اور ہک فوری لاک کرنے کے لیے۔',
        6
      ),
      sub(
        'Stabilizer chain & turnbuckle',
        'اسٹیبلائزر چین اور ٹرن بکل',
        'Side sway control for mounted plough and trolleys.',
        'پلاؤ اور ٹرالی سائیڈ حرکت کم کرنے کے لیے۔',
        0
      ),
      sub(
        'Linkage pins & bush kits',
        'لنکیج پن اور بش کٹ',
        'Replace worn pins and bronze bushes on lift arms.',
        'کھلے بازوؤں پر پن اور برونز بش بدلیں۔',
        1
      ),
      sub(
        'Top link handle & nut',
        'ٹاپ لنک ہینڈل اور نٹ',
        'Grip and locknut sets for fast adjustment in the field.',
        'کھیت میں تیز ایڈجسٹ کے لیے گریپ اور لاک نٹ۔',
        2
      ),
      sub(
        'Drawbar hooks & extensions',
        'ڈرا بار ہک اور ایکسٹینشن',
        'Tow pins and extenders for trailers and tubewell sets.',
        'ٹریلر اور ٹیوب ویل کھینچنے کے لیے۔',
        3
      ),
    ],
  },
  {
    id: 'clutch-gear',
    primaryEn: 'Clutch &',
    accentEn: 'Transmission',
    primaryUr: 'کلچ اور',
    accentUr: 'ٹرانسمیشن',
    descEn: 'Clutch plates, pressure plates, gears and shafts for smooth power to the wheels and PTO.',
    descUr:
      'کلچ پلیٹ، پریشر پلیٹ، گیئر اور شافٹ تاکہ پہیوں اور پی ٹی او تک بجلی بغیر جھٹکے پہنچے۔',
    imageIndex: 4,
    items: [
      sub(
        'Clutch plate (single / dual)',
        'کلچ پلیٹ سنگل یا ڈبل',
        'Friction plate kits sized to flywheel and hub spline.',
        'فلائے وہیل اور ہب سپلائن کے مطابق فریکشن کٹ۔',
        4
      ),
      sub(
        'Pressure plate & cover assembly',
        'پریشر پلیٹ اور کور اسمبلی',
        'Spring pressure and release lever interface for pedal feel.',
        'پیڈل فیل کے لیے سپرنگ اور رلیز لیور۔',
        5
      ),
      sub(
        'Release / thrust bearing',
        'رلیز تھرسٹ بیئرنگ',
        'Throw-out bearing for quiet clutch disengage on gear change.',
        'گیئر بدلتے وقت خاموش کلچ کھولنے کے لیے۔',
        6
      ),
      sub(
        'Main shaft & counter shaft gears',
        'مین اور کاؤنٹر شافٹ گیئر',
        'Speed matching gears for road and field ratio selection.',
        'سڑک اور کھیت کے ریشو کے لیے۔',
        0
      ),
      sub(
        'Synchronizer rings & hubs',
        'سنکرو رنگ اور ہب',
        'Smooth gear engagement under load; replace when grinding.',
        'بوجھ پر ہموار گیئر؛ گرائنڈ آئے تو بدلیں۔',
        1
      ),
      sub(
        'Gear shift forks & rails',
        'گیئر شفٹ فورک اور ریل',
        'Stop slip-out of gear when forks wear thin.',
        'فورک پتلی ہو تو گیھر نکلتا ہے۔',
        2
      ),
      sub(
        'Transmission oil seals',
        'ٹرانسمیشن آئل سیل',
        'Input and output shaft seals to stop leaks on PTO side.',
        'پی ٹی او سائیڈ رساو روکنے کے لیے۔',
        3
      ),
      sub(
        'PTO drive gears & shaft',
        'پی ٹی او ڈرائیو گیئر اور شافٹ',
        'Independent PTO shaft gears for pump and thresher drive.',
        'پمپ اور تھریشر ڈرائیو کے لیے۔',
        4
      ),
    ],
  },
  {
    id: 'brakes-steer',
    primaryEn: 'Brakes &',
    accentEn: 'Steering',
    primaryUr: 'بریک اور',
    accentUr: 'اسٹیرنگ',
    descEn: 'Brake shoes, cylinders, steering arms and pins for safe stopping on muddy fields and roads.',
    descUr:
      'بریک شو، سلنڈر، اسٹیرنگ آرم اور پن کیچڑ والے کھیت اور سڑک پر محفوظ رکنے کے لیے۔',
    imageIndex: 5,
    items: [
      sub(
        'Brake shoe & lining',
        'بریک شو اور لائننگ',
        'Bonded lining for drum brakes; match axle rating.',
        'ڈرم بریک کے لیے بانڈ لائننگ؛ ایکسل ریٹنگ۔',
        5
      ),
      sub(
        'Brake drum (front / rear)',
        'بریک ڈرم اگلا پچھلا',
        'Cast drums when scored or out-of-round from heavy towing.',
        'کھینچنے سے خدوخال یا گولائی خراب ہو تو۔',
        6
      ),
      sub(
        'Master cylinder & repair kit',
        'ماسٹر سلنڈر اور ریپیر کٹ',
        'Pedal hydraulic circuit seals and piston kits.',
        'پیڈل ہائیڈرولک سرکٹ سیل اور پسٹن۔',
        0
      ),
      sub(
        'Wheel cylinder & seals',
        'ویل سلنڈر اور سیل',
        'Per-wheel brake actuation on live axle setups.',
        'لائیو ایکسل پر ہر پہیے کی بریک۔',
        1
      ),
      sub(
        'Steering sector & worm set',
        'اسٹیرنگ سیکٹر اور ورم سیٹ',
        'Recirculating ball or worm repair for loose steering.',
        'ڈھیلا اسٹیرنگ ٹھیک کرنے کے لیے۔',
        2
      ),
      sub(
        'Tie rod ends & drag link',
        'ٹائی رڈ اینڈ اور ڈریگ لنک',
        'Align front wheels and remove toe-in wear on roads.',
        'اگلے پہیے سیدھے اور ٹو ان ختم۔',
        3
      ),
      sub(
        'King pin & bush kit',
        'کنگ پن اور بش کٹ',
        'Front axle pivot wear; essential for loaded trailers.',
        'فرنٹ ایکسل محور بھاری ٹریلر میں۔',
        4
      ),
      sub(
        'Power steering hose & pump parts',
        'پاور اسٹیرنگ پائپ اور پمپ پارٹس',
        'High-pressure hose and pump cartridge for assisted steer.',
        'اسسٹڈ اسٹیرنگ پریشر پائپ اور کارٹریج۔',
        5
      ),
    ],
  },
  {
    id: 'electrical',
    primaryEn: 'Electrical &',
    accentEn: 'Lighting',
    primaryUr: 'بجلی اور',
    accentUr: 'لائٹنگ',
    descEn: 'Battery, self motor, alternator, switches and lights for night work and cold starts.',
    descUr:
      'بیٹری، سیلف موٹر، بجلی جنریشن، سوئچ اور لائٹ رات کے کام اور سردی میں اسٹارٹ کے لیے۔',
    imageIndex: 6,
    items: [
      sub(
        'Battery (12V farm duty)',
        'بیٹری ۱۲ وولٹ فارم ڈیوٹی',
        'High-crank amps for cold morning starts and lighting load.',
        'سرد صبح اسٹارٹ اور لائٹ بوجھ کے لیے۔',
        6
      ),
      sub(
        'Starter motor & bendix',
        'سٹارٹر موٹر اور بینڈکس',
        'Engages flywheel reliably after long idle periods.',
        'لمبے آرام کے بعد فلائے وہیل پکڑتا ہے۔',
        0
      ),
      sub(
        'Alternator / dynamo',
        'الٹرنیٹر / ڈائنامو',
        'Charges battery under headlight and fan load.',
        'ہیڈ لائٹ اور فین بوجھ پر چارج۔',
        1
      ),
      sub(
        'Head lamp & work light',
        'ہیڈ لیمپ اور ورک لائٹ',
        'Halogen/LED options for night ploughing and transport.',
        'رات کو ہل چلانے اور نقل و حمل۔',
        2
      ),
      sub(
        'Tail & indicator lamp',
        'ٹیل اور انڈیکیٹر لیمپ',
        'Road-legal signalling when moving between villages.',
        'گاؤں درمیان سڑک پر اشارہ۔',
        3
      ),
      sub(
        'Horn & flasher unit',
        'ہارن اور فلیشر یونٹ',
        'Loud horn and hazard flash for narrow lane safety.',
        'تنگ گلی میں سلامتی۔',
        4
      ),
      sub(
        'Ignition switch & key set',
        'اگنیشن سوئچ اور چابی سیٹ',
        'Anti-theft and clean start/stop control.',
        'چوری سے بچاؤ اور صاف اسٹارٹ۔',
        5
      ),
      sub(
        'Fuse box & relays',
        'فیوز باکس اور ریلے',
        'Protect circuits from short when implements plug in.',
        'مشین لگتے وقت شارٹ سے بچاؤ۔',
        6
      ),
      sub(
        'Wiring harness patches',
        'وائرنگ ہارنس پیچ',
        'Connector repairs for corroded field moisture damage.',
        'نمی سے خراب کنیکٹر ریپیر۔',
        0
      ),
    ],
  },
  {
    id: 'pto',
    primaryEn: 'PTO &',
    accentEn: 'Shafts',
    primaryUr: 'پی ٹی او اور',
    accentUr: 'شافٹ',
    descEn: 'Power take-off shafts, couplers and guards for threshers, tubewells and mounted tools.',
    descUr:
      'پی ٹی او شافٹ، کنیکٹر اور گارڈ تھریشر، ٹیوب ویل اور لگی مشینوں کے لیے۔',
    imageIndex: 0,
    items: [
      sub(
        'PTO shaft (6 / 8 spline)',
        'پی ٹی او شافٹ ۶ یا ۸ سپلائن',
        'Match implement yoke to tractor PTO stub profile.',
        'مشین یوک ٹریکٹر پی ٹی او سے میچ کریں۔',
        1
      ),
      sub(
        'Shear bolt & guard set',
        'شیئر بولٹ اور گارڈ سیٹ',
        'Safety bolt breaks before gearbox damage on overload.',
        'اوور لوڈ پر گیئر بچانے کے لیے۔',
        2
      ),
      sub(
        'Quick coupler yoke',
        'فوری یوک کنپلر',
        'Fast hook-up for seasonal implement swaps.',
        'موسمی مشین بدلنے میں تیز۔',
        3
      ),
      sub(
        'Cross kit & U-joint',
        'کراس کٹ اور یو جوائنٹ',
        'Replace worn joints that cause vibration at high RPM.',
        'تیز RPM پر تھرتھراہٹ ختم۔',
        4
      ),
      sub(
        'PTO clutch pack (where fitted)',
        'پی ٹی او کلچ پیک جہاں لگتا ہو',
        'Independent clutch discs for live PTO engagement.',
        'لائیو پی ٹی او الگ کلچ۔',
        5
      ),
      sub(
        'Extension shaft for tubewell',
        'ٹیوب ویل ایکسٹینشن شافٹ',
        'Longer shaft for deep-set pumps on PTO drive.',
        'گہرے پمپ کے لیے لمبی شافٹ۔',
        6
      ),
      sub(
        'Safety shield & chain',
        'سیفٹی شیلڈ اور چین',
        'Guard rotating shaft; required for safe field operation.',
        'گھومتی شافٹ ڈھانپ؛ محفوظ کھیت۔',
        0
      ),
    ],
  },
  {
    id: 'cooling',
    primaryEn: 'Radiator &',
    accentEn: 'Cooling',
    primaryUr: 'ریڈیٹر اور',
    accentUr: 'کولنگ',
    descEn: 'Radiator cores, caps, water pump and hoses to avoid overheating in long summer work.',
    descUr:
      'ریڈیٹر، ڈھکن، واٹر پمپ اور پائپ لمبی گرمی میں اوور ہیٹنگ سے بچنے کے لیے۔',
    imageIndex: 1,
    items: [
      sub(
        'Radiator core / assembly',
        'ریڈیٹر کور یا اسمبلی',
        'Leak repair or full core when fins are blocked with chaff.',
        'رساو یا بھوسا بند فن کے لیے۔',
        2
      ),
      sub(
        'Radiator pressure cap',
        'ریڈیٹر پریشر کیپ',
        'Maintains boil point on long pull loads.',
        'لمبے کھینچنے پر ابال کنٹرول۔',
        3
      ),
      sub(
        'Water pump & impeller',
        'واٹر پمپ اور امپیلر',
        'Circulates coolant when idling with fan off in queue.',
        'قطار میں فین بند ہو تو بھی سرکولیشن۔',
        4
      ),
      sub(
        'Thermostat & housing',
        'تھرموسٹٹ اور ہاؤسنگ',
        'Opens at right temp for fast warm-up and stable run.',
        'جلدی گرم اور مستقل چال۔',
        5
      ),
      sub(
        'Coolant hose (upper / lower)',
        'کولنٹ پائپ اوپر نیچے',
        'Rubber hoses rated for heat and pressure cycles.',
        'گرمی اور دباؤ سائیکل۔',
        6
      ),
      sub(
        'Fan blade & pulley',
        'فین بلیڈ اور پلی',
        'Pulls air through radiator at low road speed.',
        'سست رفتار پر ہوا کھینچتا ہے۔',
        0
      ),
      sub(
        'Temperature sender & gauge',
        'درجہ حرارت سینسر اور میٹر',
        'Dashboard warning before engine damage.',
        'انجن خراب ہونے سے پہلے خبردار۔',
        1
      ),
    ],
  },
  {
    id: 'belts-bearings',
    primaryEn: 'Belts &',
    accentEn: 'Bearings',
    primaryUr: 'بیلٹ اور',
    accentUr: 'بیئرنگ',
    descEn: 'Fan belts, V-belts and bearings for pumps, alternator and implement drives.',
    descUr:
      'فین بیلٹ، وی بیلٹ اور بیئرنگ پمپ، بجلی اور مشین ڈرائیو کے لیے۔',
    imageIndex: 2,
    items: [
      sub(
        'Fan / alternator V-belt',
        'فین اور الٹرنیٹر وی بیلٹ',
        'Correct profile A/B/C section for pulley groove.',
        'پلی گروو کے مطابق A/B/C۔',
        3
      ),
      sub(
        'Compressor & pump belt set',
        'کمپریسر اور پمپ بیلٹ سیٹ',
        'Matched sets for air brake or hydraulic pump drive.',
        'ایئر بریک یا ہائیڈرولک پمپ۔',
        4
      ),
      sub(
        'Taper roller bearing',
        'ٹیپر رولر بیئرنگ',
        'Hub and shaft loads on wheels and gearboxes.',
        'پہیے اور گیئر باکس بوجھ۔',
        5
      ),
      sub(
        'Ball bearing (deep groove)',
        'بال بیئرنگ ڈیپ گروو',
        'High-speed spares for alternator and idler pulleys.',
        'الٹرنیٹر اور آئڈلر تیز رفتار۔',
        6
      ),
      sub(
        'Needle bearing & cage',
        'نیڈل بیئرنگ اور کیج',
        'Compact load in gear clusters and U-joints.',
        'گیئر کلسٹر میں کم جگہ۔',
        0
      ),
      sub(
        'Oil seal & O-ring kit',
        'آئل سیل اور او رنگ کٹ',
        'Stop dust ingress on axle and shaft exits.',
        'ایکسل اور شافٹ سے دھول روکیں۔',
        1
      ),
      sub(
        'Belt tensioner & idler',
        'بیلٹ ٹینشنر اور آئڈلر',
        'Auto or manual tension to stop belt slip.',
        'بیلٹ سلپ کم۔',
        2
      ),
    ],
  },
  {
    id: 'farming-field',
    primaryEn: 'Farming &',
    accentEn: 'Field Use',
    primaryUr: 'کھیتی اور',
    accentUr: 'کھیت کا سامان',
    descEn:
      'Irrigation fittings, spray parts, cultivator and rotavator linkage items farmers use every season.',
    descUr:
      'آبپاش کے کنکشن، سپرے پارٹس، کلٹیویٹر اور روٹاویٹر لنکیج وہ چیزیں جو ہر موسم استعمال ہوتی ہیں۔',
    imageIndex: 3,
    items: [
      sub(
        'Spray pump & nozzle kit',
        'سپرے پمپ اور نوزل کٹ',
        'Pressure and drift control for pesticide and foliar feed.',
        'کیڑے اور کھاد سپرے کنٹرول۔',
        4
      ),
      sub(
        'Boom pipe & hose clamps',
        'بوم پائپ اور ہوز کلیمپ',
        'Wide coverage bars for row crops.',
        'قطار فصلوں پر چوڑا کوریج۔',
        5
      ),
      sub(
        'Drip / flood irrigation fittings',
        'ڈرپ اور سیلاب ایرگیشن فٹنگ',
        'Connectors for canal and tube well distribution lines.',
        'نہر اور ٹیوب ویل لائن۔',
        6
      ),
      sub(
        'Cultivator tine & clamp',
        'کلٹیویٹر ٹائن اور کلیمپ',
        'Replace bent tines after rocky soil.',
        'پتھریلی مٹی کے بعد ٹائن۔',
        0
      ),
      sub(
        'Rotavator blade & bolt set',
        'روٹاویٹر بلیڈ اور بولٹ سیٹ',
        'Cutting edge refresh for fine tilth seed beds.',
        'باریک مٹی بیج بستر۔',
        1
      ),
      sub(
        'Disc plough bearing & scraper',
        'ڈسک پلاؤ بیئرنگ اور سکریپر',
        'Smooth disc rotation and mud clearing.',
        'ڈسک چلن اور کیچڑ صاف۔',
        2
      ),
      sub(
        'Seed drill linkage pins',
        'سیڈ ڈرل لنکیج پن',
        'Secure drill to three-point for even depth.',
        'تیون بونائی گہرائی۔',
        3
      ),
      sub(
        'Trailer hitch & drawbar pins',
        'ٹریلر ہچ اور ڈرا بار پن',
        'Safe towing for grain and fodder carts.',
        'اناج اور چارہ کارٹ۔',
        4
      ),
      sub(
        'Mud pump & chain for water',
        'کیچڑ پمپ اور پانی کی چین',
        'Field drainage and flood pumping accessories.',
        'نکاسی اور سیلاب پمپ۔',
        5
      ),
    ],
  },
  {
    id: 'tyres',
    primaryEn: 'Tyres &',
    accentEn: 'Tubes',
    primaryUr: 'ٹائر اور',
    accentUr: 'ٹیوب',
    descEn: 'Rear and front farm sizes with tubes suited for soft soil and cart loads.',
    descUr:
      'اگلے پچھلے فارم سائز ٹائر اور ٹیوب نرم مٹی اور بوجھ کے مطابق۔',
    imageIndex: 4,
    items: [
      sub(
        'Rear drive tyre (farm tread)',
        'پچھلا ڈرائیو ٹائر فارم ٹریڈ',
        'Deep lug for traction in wet paddy and loose soil.',
        'گیلی دھان اور نرم مٹی میں پکڑ۔',
        5
      ),
      sub(
        'Front steer tyre (narrow)',
        'اگلا اسٹیئر ٹائر باریک',
        'Low rolling resistance between crop rows.',
        'قطاروں میں کم مزاحمت۔',
        6
      ),
      sub(
        'Heavy-duty tube & flap',
        'ہیوی ڈیوٹی ٹیوب اور فلیپ',
        'Thorn protection for stubble fields.',
        'کھڑی کھیت میں کانٹا۔',
        0
      ),
      sub(
        'Rim strip & valve set',
        'ریم سٹرپ اور والو سیٹ',
        'Prevent pinch flats on split rims.',
        'سپلٹ رم پنچ سے بچاؤ۔',
        1
      ),
      sub(
        'Wheel weights (where used)',
        'ویل ویٹ جہاں استعمال ہو',
        'Extra grip for front loader work.',
        'فرنٹ لوڈر میں پکڑ۔',
        2
      ),
      sub(
        'Tyre lever & repair patch',
        'ٹائر لیور اور ریپیر پیچ',
        'Field patch kits for emergency tube repair.',
        'فیلڈ ایمرجنسی پیچ۔',
        3
      ),
    ],
  },
  {
    id: 'wholesale',
    primaryEn: 'Wholesale +',
    accentEn: 'Manufacturing',
    primaryUr: 'ہول سیل +',
    accentUr: 'مینوفیکچرنگ',
    descEn: 'Bulk packs for dealers and workshops; manufacturing support where repeat orders need it.',
    descUr:
      'ڈیلر اور ورکشاپ کے لیے بلک پیکج؛ بار بار آرڈر پر مینوفیکچرنگ سپورٹ جہاں ضرورت ہو۔',
    imageIndex: 5,
    items: [
      sub(
        'Bulk fastener & pin packs',
        'بلک فاسٹنر اور پن پیک',
        'Shop-size boxes of pins, clips and shims for daily sales.',
        'دکان روزمرہ فروخت کے ڈبے۔',
        5
      ),
      sub(
        'Bush & sleeve manufacturing',
        'بش اور سلیو مینوفیکچرنگ',
        'Custom bronze or nylon bush runs from sample or drawing.',
        'نمونہ یا نقشے سے کسٹم رن۔',
        6
      ),
      sub(
        'Dealer display kits',
        'ڈیلر ڈسپلے کٹ',
        'Sample boards for counter explanation to farmers.',
        'کسانوں کو سمجھانے کے نمونے۔',
        0
      ),
      sub(
        'Repeat-order linkage packs',
        'بار بار آرڈر لنکیج پیک',
        'Pre-counted bags of linkage pins per season.',
        'موسم کے حساب سے گنتی والی تھیلیاں۔',
        1
      ),
      sub(
        'Workshop consumables bundle',
        'ورکشاپ کنزیوم ایبل بنڈل',
        'Seals, O-rings and grease in one wholesale carton.',
        'سیل، او رنگ اور گریس ایک کارٹن۔',
        2
      ),
      sub(
        'Custom batch runs (MOQ applies)',
        'کسٹم بیچ مینوفیکچرنگ MOQ',
        'Volume pricing when you commit to minimum order quantity.',
        'کم از کم آرڈر پر قیمت۔',
        3
      ),
    ],
  },
]

export function getCategoryBySlug(slug: string): PartCategory | undefined {
  return PART_CATEGORIES.find((c) => c.id === slug)
}

export const PART_SLUGS = PART_CATEGORIES.map((c) => c.id)
