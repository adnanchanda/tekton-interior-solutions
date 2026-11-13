import type { Faq } from "./products";

// Buyer guides. These explain general furniture practice in India (sizes,
// materials, layouts). They make no claims about Tekton's prices, lead times
// or warranty: those facts must come from the owner.
export type GuideSection = {
  heading: string;
  body?: string[];
  list?: string[];
  table?: { label: string; value: string }[];
};

export type Guide = {
  slug: string;
  name: string; // short name for links
  title: string;
  metaDescription: string;
  answer: string; // the direct answer, first thing on the page
  sections: GuideSection[];
  faqs: Faq[];
  products: string[]; // related product slugs
  updated: string; // ISO date
};

export const guides: Guide[] = [
  {
    slug: "office-workstation-sizes",
    name: "Workstation sizes and space per seat",
    title: "Office Workstation Sizes and Space per Seat: A Planning Guide",
    metaDescription:
      "Standard office workstation sizes in India, how much floor space to allow per seat, and the aisle widths to keep. A practical guide for planning an office layout.",
    answer:
      "A standard linear office workstation in India is 1200 mm wide and 600 mm deep per seat, at a desk height of about 750 mm. For an open-plan office, allow roughly 60 to 80 square feet of floor per person once aisles, meeting rooms and common areas are included.",
    sections: [
      {
        heading: "Common workstation sizes",
        body: [
          "Workstations are made in modules, so the size per seat decides how many people a floor can hold. These are the sizes most Indian offices order.",
        ],
        table: [
          { label: "Compact linear desk", value: "1050 × 600 mm per seat" },
          { label: "Standard linear desk", value: "1200 × 600 mm per seat" },
          { label: "Generous linear desk", value: "1350 or 1500 × 600 to 750 mm per seat" },
          { label: "L-shape workstation", value: "1200 × 1200 mm or 1500 × 1500 mm per seat" },
          { label: "Manager's table", value: "1500 to 1800 × 750 to 900 mm" },
          { label: "Desk height", value: "About 750 mm" },
          { label: "Screen above desk", value: "300 to 450 mm high" },
        ],
      },
      {
        heading: "How much floor space per seat",
        body: [
          "The desk itself takes only about 8 square feet. The rest of the space goes to the chair, the aisle behind it, and each person's share of meeting rooms, reception, pantry and corridors.",
          "As a rough guide, a dense open-plan floor works out to about 50 to 60 square feet per person, a comfortable one to 70 to 80, and an office with many cabins to 100 or more. Use these only to check whether a floor is the right size. The real seat count comes from drawing the layout.",
        ],
      },
      {
        heading: "Aisles and clearances to keep",
        list: [
          "Behind a seated person with nobody passing: at least 900 mm from the desk edge to the wall or the next obstacle.",
          "Behind a seated person where others walk past: 1200 mm or more.",
          "Back-to-back rows: about 1500 to 1800 mm between desk edges, so two people can push back at once.",
          "Main circulation aisle: 1200 to 1500 mm, and whatever the building's fire rules require.",
        ],
      },
      {
        heading: "Linear, cluster or L-shape",
        body: [
          "Linear benches, with people side by side and face to face, seat the most people and are the easiest to extend or re-space later. Clusters of four or six suit teams that talk to each other all day. L-shape desks give each person more surface and privacy but take nearly twice the floor area per seat.",
          "Most offices mix them: benches for the main floor, L-shape desks or cabins for the few roles that need them.",
        ],
      },
      {
        heading: "What to send for a workstation quote",
        list: [
          "The floor plan with columns, windows, doors and electrical points marked.",
          "The number of seats needed now, and the number expected in a year.",
          "The desk size per seat, or the budget level, if you have one.",
          "Whether each seat needs a pedestal drawer unit, a screen and cable management.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the standard size of an office workstation?",
        a: "The most common size in India is 1200 mm wide by 600 mm deep per seat, with a desk height of about 750 mm. Compact layouts use 1050 mm wide desks and more generous ones use 1350 or 1500 mm.",
      },
      {
        q: "How many workstations fit in 1000 square feet?",
        a: "As a rough guide, 12 to 18 seats, depending on how much of the floor goes to cabins, a meeting room, reception and pantry. A layout drawn on your actual floor plan gives the real number.",
      },
      {
        q: "How much space should there be behind an office chair?",
        a: "Keep at least 900 mm between the desk edge and the wall behind, and 1200 mm or more if people need to walk past a seated person.",
      },
    ],
    products: ["modular-office-workstations", "office-chairs", "office-storage"],
    updated: "2026-11-14",
  },
  {
    slug: "mdf-vs-plywood-vs-hdhmr-vs-particle-board",
    name: "MDF vs plywood vs HDHMR vs particle board",
    title: "MDF vs Plywood vs HDHMR vs Particle Board: Which Board for Which Furniture",
    metaDescription:
      "How particle board, MDF, HDHMR and plywood differ in strength, moisture resistance and cost, and which board to use for desks, wardrobes, kitchens and shutters.",
    answer:
      "Use particle board for laminated office desks and storage in dry rooms, MDF for routed or painted shutters, HDHMR for kitchens and wardrobes that need moisture resistance at a moderate cost, and BWR plywood where the furniture will meet water directly, such as under a sink.",
    sections: [
      {
        heading: "The four boards at a glance",
        table: [
          {
            label: "Particle board",
            value: "Wood chips pressed with resin. Lightest and cheapest. Fine for dry rooms; swells if it gets wet.",
          },
          {
            label: "MDF",
            value: "Fine wood fibre pressed into a dense, smooth board. Routs and paints well. Not for wet areas.",
          },
          {
            label: "HDHMR",
            value: "High density, high moisture resistance fibre board. Denser than MDF, holds screws well, resists humidity.",
          },
          {
            label: "Plywood (MR grade)",
            value: "Thin wood veneers glued in layers. Strong, holds screws very well. Handles humidity, not standing water.",
          },
          {
            label: "Plywood (BWR / BWP grade)",
            value: "Plywood made with waterproof glue. For kitchens, bathrooms and anywhere water reaches. Costs the most.",
          },
        ],
      },
      {
        heading: "Which board for which furniture",
        list: [
          "Office workstations, tables and storage: prelaminated particle board is the standard, usually 25 mm for tops and 18 mm for carcasses.",
          "Wardrobe carcass in a dry bedroom: particle board, HDHMR or MR plywood, depending on budget.",
          "Wardrobe and kitchen shutters with grooves, profiles or a painted finish: MDF or HDHMR, because they machine cleanly.",
          "Kitchen base units and the sink unit: BWR plywood or HDHMR. Never plain particle board or MDF.",
          "Beds and anything that carries heavy load: plywood, or a hardwood frame with board panels.",
        ],
      },
      {
        heading: "What decides how long board furniture lasts",
        body: [
          "The board matters less than how its edges are sealed. Water enters through cut edges, not through the laminated face. A board with every exposed edge sealed in 2 mm PVC edge banding by machine will outlast a better board with thin, hand-applied banding.",
          "Hardware is the second factor. Hinges and drawer channels are the only moving parts, and they fail long before the board does.",
        ],
      },
      {
        heading: "Why the cost differs",
        body: [
          "From cheapest to most expensive, the usual order is particle board, MDF, HDHMR, MR plywood, then BWR plywood. The gap between the cheapest and the dearest board is large, which is why two quotes for the same wardrobe can differ so much. Always check which board each quote is for.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which is better for a wardrobe, plywood or HDHMR?",
        a: "Both work. Plywood is stronger and holds screws best, so it suits large, heavily loaded wardrobes. HDHMR is smoother, more uniform and resists moisture well at a lower cost, and is a good choice for shutters and for wardrobes in humid rooms.",
      },
      {
        q: "Is particle board furniture durable?",
        a: "Yes, in dry rooms and when its edges are properly sealed. Most office furniture in India is prelaminated particle board. It should not be used where it will get wet, such as kitchen sink units or bathrooms.",
      },
      {
        q: "Which board should be used in a modular kitchen?",
        a: "Use BWR plywood or HDHMR for the base units, and always for the unit under the sink. Wall units, which stay dry, can use MR plywood or HDHMR.",
      },
      {
        q: "Is MDF waterproof?",
        a: "No. Standard MDF swells when it absorbs water. It is used for shutters and decorative panels in dry areas. For moisture resistance, use HDHMR or BWR plywood.",
      },
    ],
    products: ["modular-wardrobes", "modular-kitchens", "office-storage"],
    updated: "2026-11-14",
  },
  {
    slug: "modular-wardrobe-planning",
    name: "How to plan a modular wardrobe",
    title: "How to Plan a Modular Wardrobe: Sizes, Shutters and Internal Layout",
    metaDescription:
      "Standard modular wardrobe depth, height and shutter widths, hinged versus sliding doors, and how to divide the inside into hanging, shelves and drawers.",
    answer:
      "A modular wardrobe is normally 600 mm deep with hinged shutters, or about 650 mm deep with sliding shutters, and around 2100 mm high with a separate loft above. Plan the inside first: decide how much hanging, shelf and drawer space you need, then choose the doors.",
    sections: [
      {
        heading: "Standard wardrobe sizes",
        table: [
          { label: "Depth with hinged shutters", value: "About 600 mm (clothes on a hanger need about 550 mm clear)" },
          { label: "Depth with sliding shutters", value: "About 650 mm, because the two tracks take extra space" },
          { label: "Main height", value: "About 2100 mm (7 ft)" },
          { label: "Loft above", value: "The remaining height to the ceiling, often 450 to 600 mm" },
          { label: "Hinged shutter width", value: "400 to 600 mm each; wider shutters sag over time" },
          { label: "Sliding shutter width", value: "600 to 1200 mm each" },
        ],
      },
      {
        heading: "Hinged or sliding shutters",
        body: [
          "Hinged shutters open fully, so you see and reach the whole wardrobe at once, and they cost less. They need clear floor in front of the wardrobe equal to the shutter width.",
          "Sliding shutters need no swing space, which suits a bedroom where the bed is close to the wardrobe. Only half the wardrobe is open at a time, the tracks need occasional cleaning, and the wardrobe should be at least about 1800 mm wide for two shutters to work well.",
        ],
      },
      {
        heading: "Dividing the inside",
        list: [
          "Long hanging (sarees, dresses, long kurtas): about 1500 mm of clear height.",
          "Short hanging (shirts, folded trousers): about 1000 mm, which lets you fit two rods one above the other.",
          "Shelves for folded clothes: 300 to 350 mm apart.",
          "Drawers: 150 to 200 mm high, placed between knee and chest height where they are easy to use.",
          "Locker or lockable drawer: decide its position early, because it changes the carcass.",
          "Loft: for suitcases and bedding you use a few times a year.",
        ],
      },
      {
        heading: "How to measure the wall",
        body: [
          "Measure the wall width at the floor, the middle and the top, and the height at both ends, because walls are rarely square. Note the skirting, any beam, switchboards, the AC unit and the direction the room door opens.",
          "For a new flat, measure after flooring and painting are finished. Sizes on the builder's plan are usually a few centimetres off.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the standard depth of a wardrobe?",
        a: "About 600 mm (2 feet) for a wardrobe with hinged shutters, and about 650 mm for one with sliding shutters. A hanger with clothes needs about 550 mm of clear depth.",
      },
      {
        q: "Which is better, a sliding or a hinged wardrobe?",
        a: "Hinged is better when you have space in front of the wardrobe: it costs less and opens fully. Sliding is better when the bed or another piece of furniture is close to the wardrobe and doors cannot swing open.",
      },
      {
        q: "What is a loft in a wardrobe?",
        a: "A loft is the separate storage unit fitted above the main wardrobe, up to the ceiling. It is used for luggage, bedding and other things you need only occasionally.",
      },
    ],
    products: ["modular-wardrobes", "beds-and-bedroom-furniture"],
    updated: "2026-11-14",
  },
  {
    slug: "modular-kitchen-layouts",
    name: "Modular kitchen layouts and sizes",
    title: "Modular Kitchen Layouts and Standard Sizes Explained",
    metaDescription:
      "Straight, L-shape, U-shape, parallel and island kitchens compared, with standard counter height, depth and cabinet sizes used in Indian modular kitchens.",
    answer:
      "The five modular kitchen layouts are straight, L-shape, U-shape, parallel and island. Most Indian apartments suit an L-shape or parallel kitchen. The counter is normally 820 to 860 mm high and 600 mm deep, with wall cabinets starting about 600 mm above it.",
    sections: [
      {
        heading: "The five layouts",
        table: [
          { label: "Straight", value: "Everything on one wall. For small or open kitchens. Least storage." },
          { label: "L-shape", value: "Two adjoining walls. The most common in apartments. Leaves the floor open." },
          { label: "U-shape", value: "Three walls. The most counter and storage. Needs a room about 2.4 m wide or more." },
          { label: "Parallel", value: "Two facing counters. Efficient for one cook. Needs about 1.2 m between the counters." },
          { label: "Island", value: "Any layout plus a free-standing counter. Needs a large kitchen, with 1 m clear all round." },
        ],
      },
      {
        heading: "Standard kitchen sizes",
        table: [
          { label: "Counter height", value: "820 to 860 mm, chosen to suit the height of the person who cooks most" },
          { label: "Counter depth", value: "600 mm" },
          { label: "Base unit widths", value: "300, 450, 600, 750 and 900 mm modules" },
          { label: "Gap from counter to wall cabinets", value: "About 600 mm" },
          { label: "Wall cabinet height and depth", value: "600 to 720 mm high, 300 to 350 mm deep" },
          { label: "Chimney above hob", value: "650 to 750 mm above the hob for most models" },
        ],
      },
      {
        heading: "The working triangle",
        body: [
          "The sink, the hob and the fridge are the three points you move between most. Keep them close but not cramped: each side of the triangle between about 1.2 and 2.7 metres, with nothing blocking the path. In Indian kitchens, also keep counter space between the sink and the hob, because that is where most preparation happens.",
        ],
      },
      {
        heading: "Decide these before the kitchen is made",
        list: [
          "The hob, chimney, oven, microwave, fridge, dishwasher and water purifier you own or will buy, with their model sizes.",
          "Plug points and the gas line, positioned to the kitchen drawing rather than the other way round.",
          "The platform: whether the existing granite stays, or the kitchen comes with a new top.",
          "Board: BWR plywood or HDHMR for base units and always for the sink unit.",
          "Drawers versus shutters. Drawers cost more but are far easier to use in base units.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the standard height of a kitchen counter in India?",
        a: "Between 820 and 860 mm from the finished floor. The right height depends on the person who cooks most: the counter should sit about 100 to 150 mm below their bent elbow.",
      },
      {
        q: "Which kitchen layout is best for a small kitchen?",
        a: "A straight kitchen for a very narrow room, or an L-shape if two adjoining walls are free. A parallel kitchen works well when the room is long and narrow with about 1.2 metres between the two counters.",
      },
      {
        q: "Can a modular kitchen be fitted on an existing granite platform?",
        a: "Yes. This is common in Indian flats. The base units are made to fit under and between the supports of the existing platform, so the granite and the sink stay in place.",
      },
    ],
    products: ["modular-kitchens", "modular-wardrobes"],
    updated: "2026-11-14",
  },
  {
    slug: "how-to-compare-furniture-quotes",
    name: "How to compare furniture quotes",
    title: "How to Compare Modular Furniture Quotes: A Seven-Point Checklist",
    metaDescription:
      "Two modular furniture quotes are only comparable if seven things match: sizes, board, thickness, finish, edge banding, hardware and what is included. Use this checklist.",
    answer:
      "Two furniture quotes can only be compared if seven things are the same in both: the sizes, the board, the board thickness, the surface finish, the edge banding, the hardware brand, and what is included, such as delivery, installation and tax. A lower total usually means one of these is different.",
    sections: [
      {
        heading: "The seven things to match",
        table: [
          { label: "1. Sizes and quantity", value: "The same drawing or the same list of items, with dimensions." },
          { label: "2. Board", value: "Particle board, MDF, HDHMR, MR plywood or BWR plywood, with the brand if named." },
          { label: "3. Thickness", value: "Usually 18 mm for carcasses and 25 mm for desk tops. Thinner board is cheaper." },
          { label: "4. Finish", value: "Laminate thickness (0.8 or 1 mm), acrylic, veneer or paint, inside and outside." },
          { label: "5. Edge banding", value: "2 mm or 0.8 mm PVC, machine-applied or by hand." },
          { label: "6. Hardware", value: "Brand and type of hinges, drawer channels, locks and handles; soft-close or not." },
          { label: "7. Inclusions", value: "Delivery, installation, GST, and electrical or civil work if any." },
        ],
      },
      {
        heading: "How a quote is priced",
        body: [
          "Quotes for wardrobes and kitchens are often given per square foot of front area. That figure means nothing until you know the board, finish and hardware behind it, and whether the loft, drawers and accessories are counted in or charged extra.",
          "Office furniture is usually quoted per seat or per item. Check whether the per-seat price includes the screen, the pedestal drawer unit, the cable tray and the keyboard tray.",
        ],
      },
      {
        heading: "Questions to ask every vendor",
        list: [
          "Do you make the furniture yourself, or is it made by someone else?",
          "Can I see the factory or a finished job?",
          "Which board, laminate and hardware brands is this quote based on?",
          "Is the edge banding done by machine, and how thick is it?",
          "What is the payment schedule, and what happens if delivery is late?",
          "What does the warranty cover, and is it in writing?",
        ],
      },
      {
        heading: "The simplest way to get comparable quotes",
        body: [
          "Write the specification yourself and send the same one to every vendor: the drawing or item list, then the board, thickness, finish, edge band and hardware you want. Every quote that comes back is then for the same thing, and the price difference is real.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why do modular furniture quotes vary so much?",
        a: "Because they are rarely for the same thing. Board type, board thickness, laminate, edge banding and hardware can each change the price a great deal, and a lower quote usually uses a cheaper option in one or more of them.",
      },
      {
        q: "Is a per square foot rate a good way to compare wardrobe prices?",
        a: "Only if the specification behind it is the same. Ask each vendor what board, finish and hardware the rate includes, and whether the loft, drawers and accessories are extra.",
      },
      {
        q: "Should I buy furniture from a manufacturer or a dealer?",
        a: "A manufacturer makes the furniture to your sizes and can show you the factory and the materials. A dealer sells ready or outsourced products and adds a margin. For made-to-measure furniture, dealing with the maker gives you more control over what goes into it.",
      },
    ],
    products: ["modular-office-workstations", "modular-wardrobes", "modular-kitchens"],
    updated: "2026-11-14",
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
