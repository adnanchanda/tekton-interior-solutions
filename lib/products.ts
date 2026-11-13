import type { SceneKey } from "@/components/iso/scenes";

export type Faq = { q: string; a: string };

export type Product = {
  slug: string;
  name: string;
  short: string;
  group: "office" | "home";
  part: string; // part label used on the cutting-sheet panels
  size: string; // a typical size, shown as the panel dimension
  scene: SceneKey;
  title: string;
  metaDescription: string;
  answer: string; // the direct answer, first thing on the page
  range: string[];
  specs: { label: string; value: string }[];
  notes: { heading: string; body: string }[];
  faqs: Faq[];
};

// Sizes below are the common Indian market sizes for each product type.
// They are guidance for buyers, not a Tekton price list or stock list.
export const products: Product[] = [
  {
    slug: "modular-office-workstations",
    name: "Modular office workstations",
    short: "Workstations",
    group: "office",
    part: "WS",
    size: "1200 × 600",
    scene: "workstation",
    title: "Modular Office Workstation Manufacturer in Pune",
    metaDescription:
      "Tekton makes and installs modular office workstations in Pune: linear, L-shape and cluster desks with screens, pedestals and cable management. Factory in Yewalewadi.",
    answer:
      "Tekton Interior Solutions manufactures modular office workstations at its factory in Yewalewadi, Pune and installs them on site. Workstations are made to your seat count and floor plan: linear benches, face-to-face clusters, L-shape desks and cubicles, with partition screens, pedestals and cable management built in.",
    range: [
      "Linear and bench workstations",
      "Face-to-face cluster workstations",
      "L-shape and 120° workstations",
      "Cubicles with partition screens",
      "Desking systems on metal legs",
      "Pedestals, raceways and wire managers",
    ],
    specs: [
      { label: "Common desk widths", value: "1050, 1200, 1350 and 1500 mm" },
      { label: "Common desk depth", value: "600 mm (750 mm for manager desks)" },
      { label: "Desk height", value: "750 mm" },
      { label: "Worktop", value: "25 mm prelaminated board with 2 mm PVC edge band" },
      { label: "Screens", value: "Fabric, laminate, glass or acrylic, 300 to 450 mm above the desk" },
      { label: "Wiring", value: "Raceway under the top with switch and data cut-outs per seat" },
    ],
    notes: [
      {
        heading: "How to size a workstation order",
        body: "Start from the floor plan, not the desk. A 1200 × 600 mm seat with a shared aisle needs roughly 3.5 to 4.5 square metres per person once circulation is counted. Send the plan and the seat count, and the layout is drawn around columns, doors and the electrical points you already have.",
      },
      {
        heading: "What changes the price per seat",
        body: "Four things: the desk size, the board and laminate grade, the screen type (fabric costs less than glass), and what is included per seat (pedestal, keyboard tray, power box). Quantity matters too, because a larger run nests more efficiently on each board.",
      },
    ],
    faqs: [
      {
        q: "What is the standard size of an office workstation?",
        a: "The most common workstation in Indian offices is 1200 mm wide, 600 mm deep and 750 mm high. Compact seats are 1050 mm wide, and seats for people with two monitors are 1350 or 1500 mm wide.",
      },
      {
        q: "Which is better for workstations, particle board or MDF?",
        a: "Prelaminated particle board is the standard choice for workstation tops and panels because it is flat, stable and economical. MDF costs more and is used where edges are routed or surfaces are painted. For a desk that is laminated and edge-banded, particle board does the job.",
      },
      {
        q: "Can workstations be reconfigured later?",
        a: "Yes. Modular workstations are bolted together from separate tops, legs, screens and raceways, so seats can be added to a row, split into smaller clusters or moved to a new office.",
      },
    ],
  },
  {
    slug: "office-chairs",
    name: "Office chairs",
    short: "Office chairs",
    group: "office",
    part: "CH",
    size: "seat 420–520",
    scene: "chair",
    title: "Office Chair Manufacturer in Pune",
    metaDescription:
      "Office chairs from a Pune manufacturer: director, executive, workstation, visitor, cafeteria and training-room chairs. Tekton has made seating since 2017.",
    answer:
      "Tekton Interior Solutions started in 2017 as a seating manufacturer in Pune and still makes the full range of office chairs: director and executive chairs, mesh and cushioned workstation chairs, visitor chairs, cafeteria chairs and writing-pad chairs for training rooms.",
    range: [
      "Director chairs",
      "Executive chairs",
      "Workstation chairs, mesh and cushioned",
      "Visitor chairs",
      "Cafeteria chairs",
      "Writing-pad chairs for training rooms",
      "Bar stools",
    ],
    specs: [
      { label: "Seat height", value: "Gas-lift adjustable, usually 420 to 520 mm from the floor" },
      { label: "Back", value: "Mesh for airflow, cushioned for long sitting, high back with headrest for cabins" },
      { label: "Mechanism", value: "Centre tilt, synchro tilt or multi-lock" },
      { label: "Arms", value: "Fixed, height-adjustable or fold-away" },
      { label: "Base", value: "Five-star nylon, chrome or aluminium base on castors" },
    ],
    notes: [
      {
        heading: "Choosing by how long people sit",
        body: "For an eight-hour desk job, pick a chair with adjustable seat height, lumbar support and a synchro tilt, where the back reclines more than the seat. Visitor and cafeteria chairs are used for minutes, not hours, so a fixed frame is enough and costs far less.",
      },
      {
        heading: "Mesh or cushion",
        body: "Mesh backs breathe, which matters in Pune's summer and in offices where the air conditioning is switched off after hours. Cushioned backs feel softer and suit cabins and meeting rooms. Many offices order mesh for the floor and cushioned high-backs for managers.",
      },
    ],
    faqs: [
      {
        q: "What should I check before ordering office chairs in bulk?",
        a: "Check the seat height range, the tilt mechanism, the gas lift class, the base material and the foam density, and ask for one sample chair to be used for a week before confirming the full quantity.",
      },
      {
        q: "What is the difference between a director chair and an executive chair?",
        a: "A director chair has a high back with a headrest, thicker cushioning and usually leatherette upholstery. An executive chair is a mid-back or high-back chair with a simpler build, used at manager desks and meeting tables.",
      },
      {
        q: "Do you repair or re-upholster office chairs?",
        a: "Tekton's catalogue lists maintenance of modular office furniture alongside manufacturing and installation. Call or WhatsApp with photos of the chairs to check what can be repaired.",
      },
    ],
  },
  {
    slug: "office-tables",
    name: "Executive, conference and reception tables",
    short: "Office tables",
    group: "office",
    part: "TB",
    size: "2400 × 1100",
    scene: "table",
    title: "Office Table Manufacturer in Pune: Executive and Conference",
    metaDescription:
      "Executive tables, conference tables, reception desks and pantry tables made to size in Pune by Tekton Interior Solutions, with delivery and installation.",
    answer:
      "Tekton Interior Solutions makes executive tables, conference tables, reception tables and pantry tables to size at its Pune factory. Each table is built to the room it goes into, with wire boxes, modesty panels and side storage as needed.",
    range: [
      "Executive and director tables with side return",
      "Conference and meeting tables",
      "Reception tables and front desks",
      "Pantry and cafeteria tables",
      "Training and folding tables",
    ],
    specs: [
      { label: "Executive table", value: "1500 to 2100 mm wide, 750 to 900 mm deep, 750 mm high" },
      { label: "Conference table", value: "Allow 600 to 750 mm of edge per person" },
      { label: "Reception desk", value: "750 mm work surface with a 1050 to 1100 mm visitor counter" },
      { label: "Top", value: "25 mm board in laminate or veneer finish, or a thicker built-up edge" },
      { label: "Wiring", value: "Flip-up power and data boxes, wire trays under the top" },
    ],
    notes: [
      {
        heading: "How big should a conference table be?",
        body: "Count the seats, then allow 600 to 750 mm of table edge for each. An 8-seater is usually about 2400 × 1100 mm and a 12-seater about 3600 × 1200 mm. Leave at least 900 mm between the table edge and the wall so chairs can pull out.",
      },
      {
        heading: "Reception desks",
        body: "A reception desk is the first thing a visitor sees, so it is usually made to order: the company's laminate colour, a raised counter that hides the monitor, and a lockable drawer. Send the lobby dimensions and a logo colour reference.",
      },
    ],
    faqs: [
      {
        q: "What size conference table do I need for 10 people?",
        a: "A 10-seater conference table is usually about 3000 mm long and 1200 mm wide. The room should be at least 4800 × 3000 mm to leave walking space behind the chairs.",
      },
      {
        q: "What is the standard height of an office table?",
        a: "Office tables in India are made 750 mm high. Reception counters have a second, higher level of 1050 to 1100 mm for visitors who are standing.",
      },
      {
        q: "Can a table be made to match our existing furniture?",
        a: "Yes. Share the laminate brand and shade code, or a clear photo in daylight, and the closest available shade is matched before production.",
      },
    ],
  },
  {
    slug: "office-storage",
    name: "Office storage units",
    short: "Storage",
    group: "office",
    part: "ST",
    size: "900 × 450",
    scene: "storage",
    title: "Office Storage Cabinet Manufacturer in Pune",
    metaDescription:
      "Office storage made in Pune: filing cabinets, full-height cupboards, credenzas, pedestals and lockers, built to your wall sizes by Tekton Interior Solutions.",
    answer:
      "Tekton Interior Solutions makes office storage units in Pune: full-height cupboards, low credenzas, filing cabinets, mobile pedestals and lockers. Units are made to the wall width you have, with locks on every door and drawer.",
    range: [
      "Full-height storage cupboards",
      "Low-height credenzas and back units",
      "Filing cabinets and lateral files",
      "Mobile and fixed pedestals",
      "Open shelving and box-file racks",
      "Staff lockers",
    ],
    specs: [
      { label: "Common width", value: "750 to 900 mm per unit" },
      { label: "Common depth", value: "400 to 450 mm" },
      { label: "Heights", value: "About 750 mm (low), 1200 mm (mid) and 1800 to 2100 mm (full)" },
      { label: "Carcass", value: "18 mm prelaminated board, 8 mm back panel" },
      { label: "Hardware", value: "Soft-close hinges, telescopic drawer channels, cam locks" },
    ],
    notes: [
      {
        heading: "Plan storage by what goes inside",
        body: "A box file is about 350 mm tall and 280 mm deep, so shelves for box files are spaced at 380 mm and the unit is 400 to 450 mm deep. Tell us what you store, and the shelf count and spacing are worked out from that.",
      },
    ],
    faqs: [
      {
        q: "What is the standard size of an office storage cabinet?",
        a: "A common office storage unit is 900 mm wide and 450 mm deep. Low units are about 750 mm high so they line up with desks, and full-height units are 1800 to 2100 mm high.",
      },
      {
        q: "Is particle board strong enough for storage units?",
        a: "Yes, for normal office loads. 18 mm prelaminated particle board with shelves no wider than 900 mm carries box files without sagging. For heavy loads such as catalogues or samples, shelves are made in 25 mm board or given a centre support.",
      },
    ],
  },
  {
    slug: "cafeteria-furniture",
    name: "Cafeteria and breakout furniture",
    short: "Cafeteria",
    group: "office",
    part: "CF",
    size: "1200 × 750",
    scene: "cafeteria",
    title: "Cafeteria Furniture Manufacturer in Pune",
    metaDescription:
      "Cafeteria tables, cafeteria chairs, bar stools and benches for office canteens and breakout areas, made in Pune by Tekton Interior Solutions.",
    answer:
      "Tekton Interior Solutions makes furniture for office cafeterias, canteens and breakout areas in Pune: cafeteria tables, cafeteria chairs, bar stools and benches, built for heavy daily use and easy cleaning.",
    range: [
      "Cafeteria tables, two-seater to six-seater",
      "Cafeteria chairs",
      "Bar stools and high tables",
      "Benches",
      "Pantry counters and tables",
    ],
    specs: [
      { label: "Four-seater table", value: "About 1200 × 750 mm, or 900 × 900 mm square" },
      { label: "Table height", value: "750 mm for dining, 1050 mm for high tables" },
      { label: "Bar stool seat", value: "About 750 mm for a 1050 mm counter" },
      { label: "Table top", value: "Laminate on board with a sealed PVC or post-formed edge" },
      { label: "Frame", value: "Powder-coated steel or stainless steel" },
    ],
    notes: [
      {
        heading: "How many seats does a canteen need?",
        body: "Most offices seat about a third of their headcount at one time, because lunch runs in shifts. Allow 1.2 to 1.5 square metres per seat including the aisles, and choose tops with sealed edges so water from daily mopping does not swell the board.",
      },
    ],
    faqs: [
      {
        q: "What is the standard height of a cafeteria table?",
        a: "A cafeteria dining table is 750 mm high and is used with chairs that have a 450 mm seat height. High tables are 1050 mm and are used with bar stools of about 750 mm.",
      },
      {
        q: "Which table top is best for an office canteen?",
        a: "A laminate top on board with a fully sealed edge is the usual choice. It resists hot plates and stains and is easy to wipe. Avoid open or poorly sealed edges, because water gets into the board and the top swells.",
      },
    ],
  },
  {
    slug: "reception-lounge-sofas",
    name: "Waiting lounges and office sofas",
    short: "Lounge and sofas",
    group: "office",
    part: "LS",
    size: "1800 × 800",
    scene: "sofa",
    title: "Office Sofa and Lounge Seating Manufacturer in Pune",
    metaDescription:
      "Office sofas, waiting lounges and soft seating for receptions and breakout areas, made and upholstered in Pune by Tekton Interior Solutions.",
    answer:
      "Tekton Interior Solutions makes office sofas, waiting lounges and soft seating in Pune for receptions, cabins and breakout areas. Sofas are built on a hardwood or metal frame and upholstered in the fabric or leatherette you choose.",
    range: [
      "Single, two-seater and three-seater office sofas",
      "Waiting lounge seating",
      "Modular soft seating and ottomans",
      "Centre tables and side tables",
    ],
    specs: [
      { label: "Three-seater sofa", value: "About 1800 to 2000 mm wide, 800 mm deep" },
      { label: "Seat height", value: "400 to 450 mm" },
      { label: "Upholstery", value: "Fabric or leatherette in your colour" },
      { label: "Frame", value: "Hardwood or powder-coated metal" },
    ],
    notes: [
      {
        heading: "Picking upholstery for a reception",
        body: "Leatherette wipes clean and suits a busy reception. Fabric feels warmer and suits a breakout area, but choose a tightly woven, darker shade where many people sit every day.",
      },
    ],
    faqs: [
      {
        q: "How many seats should an office reception have?",
        a: "A small office needs seating for three to four visitors, which is one three-seater sofa or a two-seater with a single chair. Leave at least 900 mm of clear walkway in front of the seats.",
      },
      {
        q: "Can the sofa be made in our brand colour?",
        a: "Yes. Send the colour reference and the closest fabric or leatherette shade is shown to you before the order is confirmed.",
      },
    ],
  },
  {
    slug: "modular-wardrobes",
    name: "Modular wardrobes",
    short: "Wardrobes",
    group: "home",
    part: "WR",
    size: "2100 × 600",
    scene: "wardrobe",
    title: "Modular Wardrobe Manufacturer in Pune",
    metaDescription:
      "Made-to-measure modular wardrobes from a Pune factory: hinged and sliding wardrobes with lofts, drawers and your choice of laminate, by Tekton Interior Solutions.",
    answer:
      "Tekton Interior Solutions makes modular wardrobes to measure at its factory in Yewalewadi, Pune. Because the wardrobe is cut and edge-banded in the factory and only assembled at your home, installation is quick and clean. Hinged or sliding shutters, lofts, drawers and internal layouts are made to your wall and your storage.",
    range: [
      "Hinged-door wardrobes",
      "Sliding-door wardrobes",
      "Wardrobes with loft",
      "Walk-in and open wardrobes",
      "Dressing units and study units",
    ],
    specs: [
      { label: "Depth", value: "560 to 600 mm for hinged, about 650 mm for sliding" },
      { label: "Height", value: "2100 mm for the main unit, with a loft above up to the ceiling" },
      { label: "Shutter width", value: "450 to 600 mm per hinged door" },
      { label: "Carcass", value: "18 mm plywood, HDHMR or prelaminated board" },
      { label: "Hardware", value: "Soft-close hinges, telescopic channels, hanging rods, locks" },
    ],
    notes: [
      {
        heading: "Hinged or sliding?",
        body: "Hinged doors cost less, seal better against dust and let you see the whole wardrobe at once, but they need about 600 mm of clear space in front to open. Sliding doors need no swing space, which suits a narrow bedroom, but the wardrobe has to be deeper and the track hardware adds cost.",
      },
      {
        heading: "Plywood, HDHMR or particle board?",
        body: "Plywood holds screws best and tolerates moisture, so it lasts longest. HDHMR is a dense, moisture-resistant board with a very smooth surface, good for shutters. Prelaminated particle board is the most economical and is fine in a dry bedroom. Many wardrobes use plywood or HDHMR for the carcass and a laminate or acrylic finish outside.",
      },
    ],
    faqs: [
      {
        q: "What is the standard depth of a wardrobe?",
        a: "A hinged wardrobe is 560 to 600 mm deep, which fits a hanger with a shirt on it. A sliding wardrobe is about 650 mm deep because the doors overlap on tracks.",
      },
      {
        q: "Is a modular wardrobe better than a carpenter-made wardrobe?",
        a: "A modular wardrobe is cut on factory machines, so panels are square, edges are sealed by an edge-banding machine and the finish is consistent. It is installed in a day or two with little dust. A carpenter-made wardrobe is built in your home, takes longer and depends on the carpenter's skill, but can be adjusted on the spot.",
      },
      {
        q: "Which material is best for a wardrobe in Pune?",
        a: "For most Pune homes, a plywood or HDHMR carcass with a laminate finish is a durable choice. Use moisture-resistant board on any wall that gets damp in the monsoon.",
      },
    ],
  },
  {
    slug: "modular-kitchens",
    name: "Modular kitchens",
    short: "Kitchens",
    group: "home",
    part: "KT",
    size: "850 high",
    scene: "kitchen",
    title: "Modular Kitchen Manufacturer in Pune",
    metaDescription:
      "Modular kitchens made to measure in Pune: base units, wall units, tall units and lofts in moisture-resistant board, by Tekton Interior Solutions.",
    answer:
      "Tekton Interior Solutions makes modular kitchens to measure at its Pune factory: base units, wall units, tall units and lofts, cut and edge-banded in the factory and assembled in your kitchen. Layouts are planned around your platform, sink, hob and the appliances you own.",
    range: [
      "Straight, L-shape, U-shape and parallel kitchens",
      "Base units with drawers and baskets",
      "Wall units and lofts",
      "Tall units for ovens and pantry storage",
      "Crockery and breakfast units",
    ],
    specs: [
      { label: "Counter height", value: "820 to 860 mm, set to the cook's height" },
      { label: "Base unit depth", value: "560 to 600 mm" },
      { label: "Wall unit depth", value: "300 to 350 mm" },
      { label: "Counter to wall unit gap", value: "About 600 mm" },
      { label: "Carcass", value: "BWR plywood or HDHMR, moisture resistant" },
      { label: "Shutters", value: "Laminate, acrylic or membrane finish" },
    ],
    notes: [
      {
        heading: "Use moisture-resistant board in a kitchen",
        body: "A kitchen sees water and steam every day, so the carcass should be boiling-water-resistant (BWR) plywood or HDHMR board, never plain particle board or interior-grade MDF. The unit under the sink takes the most water and is worth building in the best material you can afford.",
      },
      {
        heading: "Planning the layout",
        body: "Keep the sink, the hob and the refrigerator within a few steps of each other, with the sink in the middle. Put drawers, not shelves, in base units, because a drawer brings the back of the cabinet to you.",
      },
    ],
    faqs: [
      {
        q: "What is the standard height of a kitchen counter in India?",
        a: "Kitchen counters in India are usually 820 to 860 mm high. A simple rule is that the counter should be about 100 to 150 mm below the cook's elbow.",
      },
      {
        q: "Which material is best for a modular kitchen?",
        a: "BWR (boiling water resistant) plywood and HDHMR board are the two reliable choices for kitchen carcasses because both resist moisture. Laminate is the most practical shutter finish, and acrylic gives a high-gloss look at a higher cost.",
      },
      {
        q: "Can a modular kitchen be fitted on an existing granite platform?",
        a: "Yes. This is common in Pune flats. The base units are made to fit under and between the existing platform supports, and wall units and tall units are added around them.",
      },
    ],
  },
  {
    slug: "beds-and-bedroom-furniture",
    name: "Beds and bedroom furniture",
    short: "Beds",
    group: "home",
    part: "BD",
    size: "1830 × 1980",
    scene: "bed",
    title: "Bed and Bedroom Furniture Manufacturer in Pune",
    metaDescription:
      "Beds made to size in Pune: storage beds, bunk beds for hostels and children's rooms, side tables and dressers, by Tekton Interior Solutions.",
    answer:
      "Tekton Interior Solutions makes beds and bedroom furniture at its Pune factory: storage beds in single, queen and king sizes, bunk beds for hostels, staff accommodation and children's rooms, and matching side tables and dressers.",
    range: [
      "Queen and king beds with box or hydraulic storage",
      "Single beds",
      "Bunk beds",
      "Side tables and dressers",
      "Study tables",
    ],
    specs: [
      { label: "Single mattress", value: "36 × 72 or 36 × 78 inches (915 × 1830 or 1980 mm)" },
      { label: "Queen mattress", value: "60 × 78 inches (1525 × 1980 mm)" },
      { label: "King mattress", value: "72 × 78 inches (1830 × 1980 mm)" },
      { label: "Bed height", value: "About 400 to 450 mm to the top of the mattress base" },
      { label: "Storage", value: "Box storage, drawers, or hydraulic lift-up" },
    ],
    notes: [
      {
        heading: "Measure the mattress first",
        body: "A bed is built around its mattress. If you already own the mattress, measure it, because sizes vary by a few centimetres between brands. Then check that the room leaves at least 600 mm to walk on each open side.",
      },
      {
        heading: "Bunk beds for hostels and staff rooms",
        body: "Bunk beds for hostels, PG accommodation and company guest houses are made in quantity with a metal or board frame, a guard rail on the upper bunk and a fixed ladder. Send the room sizes and the number of beds.",
      },
    ],
    faqs: [
      {
        q: "What is the size of a queen bed in India?",
        a: "A queen mattress in India is 60 × 78 inches, which is about 1525 × 1980 mm. The bed frame is a few centimetres larger on each side.",
      },
      {
        q: "Is hydraulic storage better than box storage?",
        a: "Hydraulic storage lifts the whole mattress base on gas struts, so you reach everything without moving the mattress. Box storage is cheaper and has fewer parts to fail, but you lift the mattress and a lid to get in. Drawers are the easiest to use but need clear floor space beside the bed.",
      },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const officeProducts = products.filter((p) => p.group === "office");
export const homeProducts = products.filter((p) => p.group === "home");
