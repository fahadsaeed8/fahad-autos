"""Catalogue matching the parts list already sent on WhatsApp.

Every name from that message has one Fahad number, in the same order.
A photo is used only when it shows that part. The same photo is not pasted
onto a different part.
"""

from pathlib import Path

from fpdf import FPDF
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "Fahad-Parts-Catalogue.pdf"
PARTS = ROOT / "public" / "parts"
GALLERY = ROOT / "public" / "gallery"

INK = (26, 20, 8)
GOLD = (138, 107, 37)
CREAM = (246, 243, 236)
MUTED = (92, 86, 78)

# (number, name, photo key or None). Photo key is shared by parts the picture actually shows.
ITEMS = [
    ("FTA-01", "Top link pipe (adjustable)", "top-link"),
    ("FTA-02", "Lift link / lower link set", "lift-link"),
    ("FTA-03", "Cat-1 / Cat-2 ball ends", "linkage"),
    ("FTA-04", "Linch pins & R-pins", "linkage"),
    ("FTA-05", "Stabilizer chain & turnbuckle", "linkage"),
    ("FTA-06", "Linkage pins & bush kits", "linkage"),
    ("FTA-07", "Top link handle & nut", "top-link"),
    ("FTA-08", "Drawbar hooks & extensions", "linkage"),
    ("FTA-09", "Engine head & gasket sets", "engine"),
    ("FTA-10", "Piston, rings & liners", "engine"),
    ("FTA-11", "Crankshaft & camshaft bearings", None),
    ("FTA-12", "Injector & pump service parts", None),
    ("FTA-13", "Radiator & cooling hoses", "cooling"),
    ("FTA-14", "Body panels, fenders & hood parts", None),
    ("FTA-15", "Axle shafts & differential kits", "gears"),
    ("FTA-16", "Gear lever & linkage bushes", None),
    ("FTA-17", "Engine oil filter", "filters"),
    ("FTA-18", "Primary diesel fuel filter", "filters"),
    ("FTA-19", "Secondary fine fuel filter", "filters"),
    ("FTA-20", "Air filter element & outer cap", "filters"),
    ("FTA-21", "Hydraulic oil suction filter", None),
    ("FTA-22", "Fuel water separator bowl & kit", "filters"),
    ("FTA-23", "Breather & crankcase filter", None),
    ("FTA-24", "Bypass & safety cartridge filters", None),
    ("FTA-25", "Oil filter housing gasket", None),
    ("FTA-26", "Service filter kit (oil + fuel + air)", "filters"),
    ("FTA-27", "Hydraulic gear pump", "hydraulic"),
    ("FTA-28", "Lift & position control cylinder", "hydraulic"),
    ("FTA-29", "Steering assist cylinder", None),
    ("FTA-30", "Directional control valve", None),
    ("FTA-31", "Relief & pressure valve", None),
    ("FTA-32", "High-pressure rubber hose", "hydraulic"),
    ("FTA-33", "Quick-release couplings", None),
    ("FTA-34", "Hydraulic oil filter & strainer", None),
    ("FTA-35", "Cylinder seal kits", None),
    ("FTA-36", "Orbit motor & flow divider", None),
    ("FTA-37", "Clutch plate (single / dual)", "clutch"),
    ("FTA-38", "Pressure plate & cover assembly", "clutch"),
    ("FTA-39", "Release / thrust bearing", None),
    ("FTA-40", "Main shaft & counter shaft gears", "shafts"),
    ("FTA-41", "Synchronizer rings & hubs", None),
    ("FTA-42", "Gear shift forks & rails", None),
    ("FTA-43", "Transmission oil seals", None),
    ("FTA-44", "PTO drive gears & shaft", "shafts"),
    ("FTA-45", "Brake shoe & lining", "brake"),
    ("FTA-46", "Brake drum (front / rear)", None),
    ("FTA-47", "Master cylinder & repair kit", None),
    ("FTA-48", "Wheel cylinder & seals", None),
    ("FTA-49", "Steering sector & worm set", None),
    ("FTA-50", "Tie rod ends & drag link", None),
    ("FTA-51", "King pin & bush kit", None),
    ("FTA-52", "Power steering hose & pump parts", None),
    ("FTA-53", "Battery (12V farm duty)", None),
    ("FTA-54", "Starter motor & bendix", "electrical"),
    ("FTA-55", "Alternator / dynamo", "electrical"),
    ("FTA-56", "Head lamp & work light", "electrical"),
    ("FTA-57", "Tail & indicator lamp", None),
    ("FTA-58", "Horn & flasher unit", None),
    ("FTA-59", "Ignition switch & key set", None),
    ("FTA-60", "Fuse box & relays", None),
    ("FTA-61", "Wiring harness patches", None),
    ("FTA-62", "PTO shaft (6 / 8 spline)", "pto"),
    ("FTA-63", "Shear bolt & guard set", None),
    ("FTA-64", "Quick coupler yoke", "pto"),
    ("FTA-65", "Cross kit & U-joint", "pto"),
    ("FTA-66", "PTO clutch pack", None),
    ("FTA-67", "Extension shaft for tubewell", None),
    ("FTA-68", "Safety shield & chain", None),
    ("FTA-69", "Radiator core / assembly", "cooling"),
    ("FTA-70", "Radiator pressure cap", None),
    ("FTA-71", "Water pump & impeller", "cooling"),
    ("FTA-72", "Thermostat & housing", None),
    ("FTA-73", "Coolant hose (upper / lower)", "cooling"),
    ("FTA-74", "Fan blade & pulley", None),
    ("FTA-75", "Temperature sender & gauge", None),
    ("FTA-76", "Fan / alternator V-belt", "belts"),
    ("FTA-77", "Compressor & pump belt set", "belts"),
    ("FTA-78", "Taper roller bearing", "belts"),
    ("FTA-79", "Ball bearing", "belts"),
    ("FTA-80", "Needle bearing & cage", None),
    ("FTA-81", "Oil seal & O-ring kit", None),
    ("FTA-82", "Belt tensioner & idler", None),
    ("FTA-83", "Spray pump & nozzle kit", "field"),
    ("FTA-84", "Boom pipe & hose clamps", None),
    ("FTA-85", "Drip / flood irrigation fittings", "field"),
    ("FTA-86", "Cultivator tine & clamp", "field"),
    ("FTA-87", "Rotavator blade & bolt set", None),
    ("FTA-88", "Disc plough bearing & scraper", None),
    ("FTA-89", "Seed drill linkage pins", None),
    ("FTA-90", "Trailer hitch & drawbar pins", None),
    ("FTA-91", "Mud pump & chain for water", None),
    ("FTA-92", "Rear drive tyre (farm tread)", "tyre"),
    ("FTA-93", "Front steer tyre", None),
    ("FTA-94", "Heavy-duty tube & flap", "tyre"),
    ("FTA-95", "Rim strip & valve set", None),
    ("FTA-96", "Wheel weights", None),
    ("FTA-97", "Tyre lever & repair patch", None),
]

PHOTOS = {
    "top-link": (PARTS / "top-link.jpg", "Top link, with its handle."),
    "lift-link": (PARTS / "lift-link.jpg", "Lift link set."),
    "linkage": (GALLERY / "linkage.jpg", "Linkage on the tractor: arms, chains and pins."),
    "engine": (PARTS / "fiat-parts.jpg", "Head gasket, pistons, rings and liner."),
    "gears": (PARTS / "massey-parts.jpg", "Shaft and differential gears."),
    "filters": (PARTS / "filters.jpg", "Oil filter, fuel filter and air filter."),
    "hydraulic": (PARTS / "hydraulic.jpg", "Hydraulic pump, lift cylinder and hose."),
    "clutch": (PARTS / "clutch.jpg", "Clutch plate and pressure plate."),
    "shafts": (PARTS / "ford-parts.jpg", "Clutch disc and gear shafts."),
    "brake": (PARTS / "brakes.jpg", "Brake shoe."),
    "electrical": (PARTS / "electrical.jpg", "Starter motor, alternator and head lamp."),
    "pto": (PARTS / "pto.jpg", "PTO shaft, with yoke and joint."),
    "cooling": (PARTS / "radiator.jpg", "Radiator, water pump and coolant hose."),
    "belts": (PARTS / "belts.jpg", "V-belts, ball bearing and taper roller bearing."),
    "field": (PARTS / "field-parts.jpg", "Cultivator tines, nozzles and irrigation fitting."),
    "tyre": (PARTS / "tyres.jpg", "Rear tractor tyre and tube."),
}


def fit(path: Path, max_w: float, max_h: float) -> tuple[float, float]:
    with Image.open(path) as image:
        width, height = image.size
    scale = min(max_w / width, max_h / height)
    return width * scale, height * scale


class Catalogue(FPDF):
    def footer(self):
        if self.page_no() == 1:
            return
        self.set_y(-12)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(*MUTED)
        self.cell(0, 5, "Fahad Tractors and Autos  ·  WhatsApp +92 313 4426717  ·  Order with the part number", align="C")


def cover(pdf: Catalogue):
    pdf.add_page()
    pdf.set_fill_color(*INK)
    pdf.rect(0, 0, 210, 297, "F")
    logo = ROOT / "public" / "new-logo.png"
    logo_w, logo_h = fit(logo, 130, 52)
    pdf.image(str(logo), x=(210 - logo_w) / 2, y=54, w=logo_w, h=logo_h)
    pdf.set_y(54 + logo_h + 8)
    pdf.set_text_color(*CREAM)
    pdf.set_font("Helvetica", "B", 20)
    pdf.cell(0, 9, "FAHAD TRACTORS AND AUTOS", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 13)
    pdf.set_text_color(217, 185, 106)
    pdf.cell(0, 7, "Haji Saeed", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(4)
    pdf.set_fill_color(*GOLD)
    pdf.rect(70, pdf.get_y(), 70, 1.1, "F")
    pdf.ln(6)
    pdf.set_text_color(*CREAM)
    pdf.set_font("Helvetica", "B", 22)
    pdf.cell(0, 10, "PARTS CATALOGUE", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(3)
    pdf.set_font("Helvetica", "", 12)
    pdf.set_text_color(217, 185, 106)
    pdf.multi_cell(
        0,
        6,
        "Wholesale dealer and manufacturer of\nFiat, Massey and Ford local parts, Top Link and linkage.\n\n"
        "FTA-01 to FTA-97. Every line is one part.\n"
        "Order with the part number and the tractor model.",
        align="C",
    )
    pdf.ln(4)
    pdf.set_font("Helvetica", "B", 13)
    pdf.set_text_color(*CREAM)
    pdf.multi_cell(0, 6, "If a part is not in this list, we can make it.\nTell us the product.", align="C")
    pdf.ln(4)
    pdf.set_font("Helvetica", "", 12)
    pdf.set_text_color(*CREAM)
    pdf.cell(0, 6, "Shop No. 43, Ramzan Chamber, 91/140 Badami Bagh, Lahore", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.cell(0, 6, "0313-4426717   ·   0321-4964013   ·   0300-4785384", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.cell(0, 6, "Ph: 37700794   ·   thefahadsaeed@gmail.com", align="C")


def chunk_items():
    """One page per group from the message, still in FTA-01 to FTA-97 order."""
    cuts = [
        "FTA-09",
        "FTA-17",
        "FTA-27",
        "FTA-37",
        "FTA-45",
        "FTA-53",
        "FTA-62",
        "FTA-69",
        "FTA-76",
        "FTA-83",
        "FTA-92",
    ]
    pages = []
    current = []
    for item in ITEMS:
        if item[0] in cuts and current:
            pages.append(current)
            current = []
        current.append(item)
    if current:
        pages.append(current)
    return pages


def draw_photos(pdf: Catalogue, keys: list[str], y: float, rows: int) -> float:
    if not keys:
        return y
    count = len(keys)
    list_h = rows * 8 + 22
    room = max(40, 268 - y - list_h)
    # Short lists leave a hole if photos stay in one thin row, so stack them.
    stack = count > 1 and rows <= 10
    if stack:
        max_w = 174
        max_h = max(34, min(72, (room / count) - 6))
        pdf.set_font("Helvetica", "", 8)
        pdf.set_text_color(*MUTED)
        for key in keys:
            width, height = fit(PHOTOS[key][0], max_w, max_h)
            pdf.image(str(PHOTOS[key][0]), x=18 + (174 - width) / 2, y=y, w=width, h=height)
            y += height + 1
            pdf.set_xy(18, y)
            pdf.multi_cell(174, 4, PHOTOS[key][1], align="C")
            y = pdf.get_y() + 2
        return y + 1
    gap = 4
    max_w = (174 - gap * (count - 1)) / count
    max_h = min(78, room - 10)
    sizes = [fit(PHOTOS[key][0], max_w, max_h) for key in keys]
    row_h = max(height for _, height in sizes)
    x = 18
    for key, (width, height) in zip(keys, sizes):
        pdf.image(str(PHOTOS[key][0]), x=x + (max_w - width) / 2, y=y + (row_h - height) / 2, w=width, h=height)
        x += max_w + gap
    y += row_h + 3
    pdf.set_xy(18, y)
    pdf.set_font("Helvetica", "", 8)
    pdf.set_text_color(*MUTED)
    caption = "  ·  ".join(PHOTOS[key][1] for key in keys)
    pdf.multi_cell(174, 4, caption, align="C")
    return pdf.get_y() + 3


def parts_page(pdf: Catalogue, rows: list[tuple[str, str, str | None]]):
    pdf.add_page()
    pdf.set_fill_color(*CREAM)
    pdf.rect(0, 0, 210, 297, "F")
    pdf.set_fill_color(*GOLD)
    pdf.rect(0, 0, 210, 2.5, "F")
    keys = []
    for _, _, key in rows:
        if key and key not in keys:
            keys.append(key)
    y = draw_photos(pdf, keys, 10, len(rows))
    pdf.set_y(y)
    for number, name, key in rows:
        pdf.set_x(18)
        pdf.set_font("Helvetica", "B", 11)
        pdf.set_text_color(*GOLD)
        pdf.cell(22, 8, number)
        pdf.set_font("Helvetica", "", 11)
        pdf.set_text_color(*INK)
        pdf.cell(152, 8, name, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)
    pdf.set_x(18)
    pdf.set_font("Helvetica", "", 8)
    pdf.set_text_color(*MUTED)
    pdf.multi_cell(
        174,
        4,
        "Each line is a separate part. Send the part number with the tractor brand and model. The part is matched to that model before the rate is given.",
    )


def closing_note(pdf: Catalogue):
    pdf.ln(5)
    pdf.set_x(18)
    pdf.set_font("Helvetica", "B", 13)
    pdf.set_text_color(*INK)
    pdf.multi_cell(174, 6, "If a part is not in this list, we can make it. Tell us the product.", align="C")
    pdf.ln(2)
    pdf.set_x(18)
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(*MUTED)
    pdf.multi_cell(
        174,
        5,
        "Send the tractor brand and model, the part name, and a photo of the old part. We confirm the part and send the rate.",
        align="C",
    )
    if pdf.get_y() > 275:
        print("OVERFLOW close", pdf.get_y())


def main():
    pdf = Catalogue(format="A4", unit="mm")
    pdf.set_auto_page_break(False)
    pdf.set_margins(18, 14, 18)
    cover(pdf)
    pages = chunk_items()
    for index, rows in enumerate(pages):
        parts_page(pdf, rows)
        if index == len(pages) - 1:
            closing_note(pdf)
    try:
        pdf.output(str(OUT))
        print(f"{OUT} pages={pdf.pages_count} parts={len(ITEMS)}")
    except PermissionError:
        alt = OUT.with_name(OUT.stem + "-updated.pdf")
        pdf.output(str(alt))
        print(f"LOCKED {OUT}")
        print(f"{alt} pages={pdf.pages_count} parts={len(ITEMS)}")


if __name__ == "__main__":
    main()
