import type { Faq } from "./products";

export type Area = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  answer: string;
  context: string; // what kind of buyers are here and what they order
  typical: string[]; // product slugs most relevant here, in order
  advice: { heading: string; body: string }[];
  faqs: Faq[];
};

// Each page describes the area's real mix of offices and homes and what that
// means for a furniture order. Add a real Tekton project to each page (client
// type, seats, timeline, photos) as soon as the owner can share one: that is
// what will make these pages rank.
export const areas: Area[] = [
  {
    slug: "hinjewadi",
    name: "Hinjewadi",
    title: "Office Furniture Manufacturer for Hinjewadi, Pune",
    metaDescription:
      "Modular workstations, office chairs and meeting-room furniture for IT offices in Hinjewadi, made in Pune by Tekton Interior Solutions and installed on site.",
    answer:
      "Tekton Interior Solutions supplies and installs office furniture in Hinjewadi from its factory in Kondhwa Budruk, Pune. Most Hinjewadi orders are for IT and services offices: modular workstations in quantity, mesh workstation chairs, meeting tables and storage.",
    context:
      "Hinjewadi is home to the Rajiv Gandhi Infotech Park, so offices here are large open floors planned by seat count. Furniture is ordered in phases as teams grow, and landlords and IT park authorities often set rules for delivery hours and lift use.",
    typical: ["modular-office-workstations", "office-chairs", "office-tables", "cafeteria-furniture"],
    advice: [
      {
        heading: "Order in phases that match",
        body: "When a floor is fitted out in phases, fix the laminate shade code and the desk module at phase one and keep them on record. The next 50 seats then match the first 200 exactly.",
      },
      {
        heading: "Plan delivery around park rules",
        body: "Many IT park buildings allow material movement only at night or on weekends and need the goods lift booked in advance. Share the building's rules with the quote request so installation is scheduled around them.",
      },
    ],
    faqs: [
      {
        q: "Who makes modular workstations for offices in Hinjewadi?",
        a: "Tekton Interior Solutions is a Pune manufacturer that makes modular workstations at its Kondhwa Budruk factory and installs them in offices across Pune, including Hinjewadi Phase 1, 2 and 3.",
      },
      {
        q: "Can furniture be installed at night or on weekends in an IT park?",
        a: "Yes. Installation is planned around the hours your building allows for material movement. Tell us the permitted hours when you ask for the quote.",
      },
    ],
  },
  {
    slug: "kharadi",
    name: "Kharadi",
    title: "Office and Home Furniture Maker for Kharadi, Pune",
    metaDescription:
      "Office workstations and chairs for Kharadi's IT offices, and modular wardrobes and kitchens for Kharadi apartments, made in Pune by Tekton Interior Solutions.",
    answer:
      "Tekton Interior Solutions makes furniture in Pune for both offices and homes in Kharadi: workstations, chairs and meeting tables for IT and co-working offices, and made-to-measure wardrobes and kitchens for apartments.",
    context:
      "Kharadi mixes large IT campuses such as EON IT Park with new high-rise housing. Offices here are often in Grade A buildings with fit-out guidelines, and many homes are new possession flats that need wardrobes and a kitchen before move-in.",
    typical: ["modular-office-workstations", "office-chairs", "modular-wardrobes", "modular-kitchens"],
    advice: [
      {
        heading: "For a new possession flat",
        body: "Get the wardrobe and kitchen measured after the flooring and painting are done, not from the builder's brochure. Actual wall sizes differ from the plan by a few centimetres, and modular furniture is made to the millimetre.",
      },
      {
        heading: "For a co-working or managed office",
        body: "Co-working floors are re-planned often. Ask for bench workstations on metal legs with desk-mounted screens, because they are the easiest to move and re-space.",
      },
    ],
    faqs: [
      {
        q: "Do you make both office and home furniture for Kharadi?",
        a: "Yes. Tekton makes office workstations, chairs, tables and storage, and also makes modular wardrobes, kitchens and beds for homes. Both are made at the same factory in Kondhwa Budruk, Pune.",
      },
      {
        q: "When should I order wardrobes for a new flat?",
        a: "Order after you have possession and the painting is finished, so the walls can be measured as built. Share the possession date early so production can be planned.",
      },
    ],
  },
  {
    slug: "chakan",
    name: "Chakan",
    title: "Office and Canteen Furniture for Chakan MIDC, Pune",
    metaDescription:
      "Furniture for plant offices in Chakan MIDC: workstations, supervisor tables, canteen tables and chairs, lockers and storage, made in Pune by Tekton Interior Solutions.",
    answer:
      "Tekton Interior Solutions makes furniture for factories and plant offices in Chakan: office workstations, supervisor and executive tables, canteen tables and chairs, staff lockers and storage, delivered and installed from its Pune factory.",
    context:
      "Chakan is Pune's automotive and manufacturing belt, with large plants and their suppliers. Furniture here goes into plant offices, shop-floor supervisor cabins, training rooms and canteens, so it has to take dust, heavy use and frequent cleaning.",
    typical: ["cafeteria-furniture", "office-storage", "modular-office-workstations", "office-tables"],
    advice: [
      {
        heading: "Specify for the shop floor",
        body: "For supervisor cabins and shop-floor offices, ask for sealed 2 mm edge banding on every edge, metal legs instead of board gables, and darker laminates that hide marks. For canteens, choose steel frames and fully sealed table tops.",
      },
      {
        heading: "Vendor registration",
        body: "Large plants usually need a vendor to be registered before a purchase order can be raised. Ask early for the documents your purchase team needs, so registration does not delay the order.",
      },
    ],
    faqs: [
      {
        q: "Who supplies canteen furniture for factories in Chakan?",
        a: "Tekton Interior Solutions makes cafeteria tables, cafeteria chairs, benches and bar stools at its Pune factory and supplies them to offices and plants in the Pune region, including Chakan MIDC.",
      },
      {
        q: "Which furniture lasts on a factory shop floor?",
        a: "Choose metal frames, board with thick sealed edge banding and laminate tops. Avoid exposed board edges and fabric, because dust, oil and wet mopping damage them quickly.",
      },
    ],
  },
  {
    slug: "baner",
    name: "Baner",
    title: "Office and Home Furniture Maker for Baner, Pune",
    metaDescription:
      "Furniture for start-up offices and apartments in Baner and Balewadi: workstations, chairs, wardrobes and kitchens made in Pune by Tekton Interior Solutions.",
    answer:
      "Tekton Interior Solutions makes furniture in Pune for small and mid-size offices and for homes in Baner and Balewadi: compact workstations, meeting tables and chairs for offices, and modular wardrobes, kitchens and beds for apartments.",
    context:
      "Baner and Balewadi have many start-up and professional offices of 10 to 100 seats in commercial buildings along Baner Road, alongside a large number of apartments. Orders are smaller than in the IT parks, and every seat has to earn its space.",
    typical: ["modular-office-workstations", "office-tables", "modular-wardrobes", "modular-kitchens"],
    advice: [
      {
        heading: "Fitting more seats into a small office",
        body: "In a small office, 1050 mm desks in a bench layout seat about 15 percent more people than 1200 mm desks. Put storage on the walls as full-height units and keep the floor for desks.",
      },
      {
        heading: "Buy direct from the factory",
        body: "For a 20-seat office, buying from a manufacturer instead of a showroom means the desks are made to your room instead of chosen from fixed sizes, and there is one team responsible for making and installing them.",
      },
    ],
    faqs: [
      {
        q: "Do you take small office orders, for example 10 to 20 seats?",
        a: "Call or WhatsApp with your seat count and floor plan. Tekton makes furniture to order, so the quote is based on your layout, whatever the size.",
      },
      {
        q: "Can one vendor do both our office and my home?",
        a: "Yes. Tekton makes office furniture and residential furniture at the same factory, so the same team can make workstations for an office and wardrobes or a kitchen for a home.",
      },
    ],
  },
  {
    slug: "magarpatta",
    name: "Magarpatta and Hadapsar",
    title: "Furniture Manufacturer for Magarpatta and Hadapsar, Pune",
    metaDescription:
      "Office furniture for Magarpatta Cybercity and Hadapsar, and wardrobes, kitchens and beds for nearby homes, made by Tekton Interior Solutions in Kondhwa Budruk, Pune.",
    answer:
      "Tekton Interior Solutions makes office and home furniture for Magarpatta, Hadapsar and Amanora from its factory in Kondhwa Budruk, which is in the same south-east side of Pune. It supplies workstations and chairs to offices and wardrobes, kitchens and beds to homes.",
    context:
      "Magarpatta City combines the Cybercity IT park with a large residential township, and Hadapsar and Amanora add more offices and housing around it. It is the part of Pune closest to Tekton's factory in Kondhwa Budruk and its head office in Lullanagar.",
    typical: ["modular-office-workstations", "office-chairs", "modular-wardrobes", "beds-and-bedroom-furniture"],
    advice: [
      {
        heading: "Visit the factory before you order",
        body: "Kondhwa Budruk is a short drive from Hadapsar and Magarpatta. Seeing boards being cut and edge-banded, and sitting in a sample chair, tells you more than any catalogue. Call ahead to fix a time.",
      },
      {
        heading: "Township rules for home interiors",
        body: "Gated townships usually set working hours for interior work and need a work permit for the installation team. Ask your society office for the rules before fixing the installation date.",
      },
    ],
    faqs: [
      {
        q: "Is there a furniture manufacturer near Hadapsar and Magarpatta?",
        a: "Yes. Tekton Interior Solutions has its factory near D-Mart at Somji, Kondhwa Budruk, and its head office in Lullanagar, both in south-east Pune near Hadapsar.",
      },
      {
        q: "Can I visit the factory?",
        a: "Yes, by appointment during working hours, Monday to Saturday, 9:00 AM to 7:00 PM. Call +91 7385036389 to fix a time.",
      },
    ],
  },
  {
    slug: "kondhwa",
    name: "Kondhwa",
    title: "Furniture Manufacturer in Kondhwa, Pune",
    metaDescription:
      "Tekton Interior Solutions makes office and home furniture at its own factory in Kondhwa Budruk, Pune: workstations, chairs, wardrobes, kitchens and beds, made to measure.",
    answer:
      "Tekton Interior Solutions is a furniture manufacturer in Kondhwa, Pune. Its factory is at Plot 101, near D-Mart, Somji, Kondhwa Budruk, where it makes office workstations, chairs, tables and storage, and wardrobes, kitchens and beds for homes.",
    context:
      "Kondhwa covers Kondhwa Khurd and Kondhwa Budruk in south-east Pune. It is mostly housing societies, with schools, clinics, shops and small offices along the main roads. Tekton's factory is here, so Kondhwa buyers can see their furniture being made.",
    typical: ["modular-wardrobes", "modular-kitchens", "office-tables", "office-chairs"],
    advice: [
      {
        heading: "See the material before you choose",
        body: "Because the factory is in Kondhwa Budruk, you can look at board samples, laminate shades and hardware in person before you fix anything. Call ahead and bring your room measurements, so the visit ends with a clear list for the quote.",
      },
      {
        heading: "For a clinic, shop or small office",
        body: "Small commercial spaces need every centimetre to work. Give the exact wall-to-wall sizes and mark the doors, windows and plug points. A reception table, storage wall and two or three desks can then be made to fit the room exactly.",
      },
    ],
    faqs: [
      {
        q: "Is there a furniture manufacturer in Kondhwa, Pune?",
        a: "Yes. Tekton Interior Solutions has its factory at Plot 101, near D-Mart, Somji, Kondhwa Budruk, Pune 411048. It makes office furniture and residential furniture to order.",
      },
      {
        q: "Can I visit the Tekton factory in Kondhwa?",
        a: "Yes, by appointment during working hours, Monday to Saturday, 9:00 AM to 7:00 PM. Call +91 7385036389 to fix a time.",
      },
    ],
  },
  {
    slug: "nibm-road",
    name: "NIBM Road and Undri",
    title: "Modular Wardrobes and Kitchens for NIBM Road and Undri, Pune",
    metaDescription:
      "Made-to-measure modular wardrobes, kitchens and beds for apartments on NIBM Road, Undri and Mohammedwadi, made nearby in Kondhwa Budruk by Tekton Interior Solutions.",
    answer:
      "Tekton Interior Solutions makes modular wardrobes, kitchens and beds for homes on NIBM Road, Undri and Mohammedwadi. The furniture is made to measure at its factory in neighbouring Kondhwa Budruk and installed by its own team.",
    context:
      "NIBM Road takes its name from the National Institute of Bank Management and runs through one of south Pune's main residential belts, continuing into Undri and Mohammedwadi. Most buyers here are fitting out apartments in gated societies, often before moving in.",
    typical: ["modular-wardrobes", "modular-kitchens", "beds-and-bedroom-furniture", "office-tables"],
    advice: [
      {
        heading: "Decide the kitchen before the electrician finishes",
        body: "A modular kitchen fixes where the hob, chimney, fridge, oven and water purifier go, and each needs a plug point in the right place. Plan the kitchen layout first and give the electrician the point positions, so nothing has to be chased into finished walls later.",
      },
      {
        heading: "Furnish a whole flat in one order",
        body: "When wardrobes, the kitchen, beds and a study table are ordered together, the laminates and handles can be matched across rooms and everything is installed in one visit instead of several.",
      },
    ],
    faqs: [
      {
        q: "Who makes modular wardrobes and kitchens near NIBM Road and Undri?",
        a: "Tekton Interior Solutions makes modular wardrobes and kitchens to measure at its factory in Kondhwa Budruk, which adjoins NIBM Road, and installs them in homes across NIBM, Undri and Mohammedwadi.",
      },
      {
        q: "Do you also make a home office or study table?",
        a: "Yes. Tekton makes office tables and storage as well as home furniture, so a study table or home-office desk can be made in the same laminate as your wardrobes.",
      },
    ],
  },
  {
    slug: "wakad",
    name: "Wakad",
    title: "Home and Office Furniture Maker for Wakad, Pune",
    metaDescription:
      "Modular wardrobes, kitchens and beds for Wakad apartments, and workstations and chairs for small offices, made in Pune by Tekton Interior Solutions and installed on site.",
    answer:
      "Tekton Interior Solutions makes furniture in Pune for homes and offices in Wakad: made-to-measure wardrobes, kitchens and beds for apartments, and workstations, chairs and tables for small offices and co-working floors.",
    context:
      "Wakad sits next to Hinjewadi on the Pimpri-Chinchwad side of the Mumbai-Bengaluru highway. It has grown into a dense area of apartment towers, many occupied by people who work in the IT park, with small offices and co-working spaces along the main roads.",
    typical: ["modular-wardrobes", "modular-kitchens", "beds-and-bedroom-furniture", "modular-office-workstations"],
    advice: [
      {
        heading: "Make small bedrooms work harder",
        body: "In a compact bedroom, a full-height wardrobe with a loft and a bed with storage underneath usually removes the need for any other cupboard. Sliding shutters save the swing space that hinged doors need in front of the wardrobe.",
      },
      {
        heading: "For a rented flat",
        body: "If you may move in a few years, ask for wardrobes built as separate modules rather than one fixed unit. Modules can be taken apart, moved and refitted in the next home with small changes.",
      },
    ],
    faqs: [
      {
        q: "Do you deliver and install furniture in Wakad?",
        a: "Yes. Tekton Interior Solutions delivers and installs across Pune and Pimpri-Chinchwad, including Wakad, from its factory in Kondhwa Budruk.",
      },
      {
        q: "Can a modular wardrobe be moved to another flat later?",
        a: "Yes, if it is built as separate modules. Tell us at the quote stage that you may shift, so the wardrobe is designed to be dismantled and refitted.",
      },
    ],
  },
  {
    slug: "pimpri-chinchwad",
    name: "Pimpri-Chinchwad",
    title: "Office Furniture Manufacturer for Pimpri-Chinchwad",
    metaDescription:
      "Office workstations, chairs, tables, storage and canteen furniture for factories and offices in Pimpri, Chinchwad and Bhosari, made in Pune by Tekton Interior Solutions.",
    answer:
      "Tekton Interior Solutions supplies and installs office furniture across Pimpri-Chinchwad: workstations, chairs, tables and storage for plant offices and company offices, and canteen furniture for staff cafeterias. It is made at Tekton's own factory in Pune.",
    context:
      "Pimpri-Chinchwad is Pune's industrial twin city, with the MIDC estates at Pimpri, Chinchwad and Bhosari and many automobile and engineering companies. Furniture buyers here are usually plant administration and purchase teams fitting out offices, training rooms and canteens.",
    typical: ["modular-office-workstations", "office-storage", "cafeteria-furniture", "office-chairs"],
    advice: [
      {
        heading: "Write the specification into the purchase order",
        body: "Company purchase teams compare several vendors. Put the board type and thickness, laminate, edge band thickness and hardware brand in the enquiry itself, so every quote you receive is for the same thing.",
      },
      {
        heading: "Furniture for a canteen that runs in shifts",
        body: "A plant canteen is used by every shift and cleaned several times a day. Ask for metal frames, laminate or compact tops with sealed edges, and seating that can be wiped down and moved for floor cleaning.",
      },
    ],
    faqs: [
      {
        q: "Who supplies office furniture to companies in Pimpri-Chinchwad?",
        a: "Tekton Interior Solutions is a Pune manufacturer that makes office workstations, chairs, tables, storage and canteen furniture and installs them at offices and plants across Pimpri-Chinchwad.",
      },
      {
        q: "Can you quote against our company's specification?",
        a: "Yes. Send the specification or bill of quantities and the layout. Because Tekton makes the furniture itself, the quote follows your sizes, boards and finishes.",
      },
    ],
  },
  {
    slug: "viman-nagar",
    name: "Viman Nagar",
    title: "Office and Home Furniture Maker for Viman Nagar, Pune",
    metaDescription:
      "Workstations, chairs and reception furniture for offices in Viman Nagar, and modular wardrobes and kitchens for apartments, made in Pune by Tekton Interior Solutions.",
    answer:
      "Tekton Interior Solutions makes furniture in Pune for offices and homes in Viman Nagar: workstations, chairs, reception and meeting-room furniture for commercial offices, and made-to-measure wardrobes and kitchens for apartments.",
    context:
      "Viman Nagar lies beside Pune airport on the Nagar Road side of the city. It has IT and commercial office buildings, co-working floors, hotels and a large student and young-professional population, alongside established apartment societies.",
    typical: ["modular-office-workstations", "reception-lounge-sofas", "office-tables", "modular-wardrobes"],
    advice: [
      {
        heading: "Get the reception right first",
        body: "In a commercial building, the reception is what a visitor judges the office by. A reception table made to the width of the wall, with a place for the visitor register and cables hidden inside, and a matching sofa, does more than an expensive table that does not fit.",
      },
      {
        heading: "Fitting out a small office floor",
        body: "For 10 to 40 seats, share the floor plan with columns and windows marked. Linear bench workstations along the window side with a meeting table and storage on the core side usually seat the most people comfortably.",
      },
    ],
    faqs: [
      {
        q: "Do you make office furniture for Viman Nagar?",
        a: "Yes. Tekton Interior Solutions makes workstations, chairs, tables, storage and reception furniture in Pune and installs them in offices across the city, including Viman Nagar.",
      },
      {
        q: "Can you furnish a co-working space?",
        a: "Yes. Send the floor plan and the seat count you are aiming for. Bench workstations, cabin tables, meeting tables, lounge seating and storage are all made to the plan.",
      },
    ],
  },
  {
    slug: "kalyani-nagar",
    name: "Kalyani Nagar",
    title: "Made-to-Measure Furniture for Kalyani Nagar, Pune",
    metaDescription:
      "Modular wardrobes, kitchens and beds for Kalyani Nagar homes, and executive tables, conference tables and reception furniture for its offices, made in Pune by Tekton.",
    answer:
      "Tekton Interior Solutions makes made-to-measure furniture for Kalyani Nagar: modular wardrobes, kitchens and beds for apartments and bungalows, and executive tables, conference tables and reception furniture for its commercial offices.",
    context:
      "Kalyani Nagar sits between Koregaon Park and Viman Nagar along the river. It is an established residential area of apartments and bungalows with commercial office buildings on its main roads, and many homes here are being renovated rather than furnished for the first time.",
    typical: ["modular-wardrobes", "modular-kitchens", "office-tables", "reception-lounge-sofas"],
    advice: [
      {
        heading: "Replacing furniture in an older home",
        body: "In a renovation, walls are rarely square and old wardrobes often hide uneven plaster or pipes. Have the space measured after the old furniture is removed, so the new wardrobe or kitchen is made to the wall as it actually is.",
      },
      {
        heading: "For a director's cabin or boardroom",
        body: "Decide the table size from the room, not the other way round. Leave at least a metre behind each chair for people to pass, and ask for wire boxes in the table top so laptops and screens can be plugged in without cables across the floor.",
      },
    ],
    faqs: [
      {
        q: "Do you make custom furniture for homes in Kalyani Nagar?",
        a: "Yes. Tekton Interior Solutions makes wardrobes, kitchens and beds to measure at its Pune factory and installs them in homes across the city, including Kalyani Nagar.",
      },
      {
        q: "Can you make a conference table to a specific size?",
        a: "Yes. Conference tables are made to the size of your room and the number of seats you need, with wire boxes for power and data where you want them.",
      },
    ],
  },
  {
    slug: "wagholi",
    name: "Wagholi",
    title: "Modular Home Furniture Maker for Wagholi, Pune",
    metaDescription:
      "Modular wardrobes, kitchens and beds for new flats in Wagholi, and office furniture for nearby offices and institutes, made in Pune by Tekton Interior Solutions.",
    answer:
      "Tekton Interior Solutions makes modular wardrobes, kitchens and beds for new homes in Wagholi, and office and institutional furniture for the offices, warehouses and colleges around it. Everything is made to measure at Tekton's factory in Pune.",
    context:
      "Wagholi is on Nagar Road beyond Kharadi and is one of Pune's fastest-growing housing areas, with many new apartment projects. Buyers are often furnishing a first home on a fixed budget, and the area also has warehouses, schools and colleges.",
    typical: ["modular-wardrobes", "modular-kitchens", "beds-and-bedroom-furniture", "office-storage"],
    advice: [
      {
        heading: "Furnish a first home in stages",
        body: "If the budget is fixed, do the kitchen and the main bedroom wardrobe first, because you need them from the first day. Keep the laminate codes on record so the second bedroom and other pieces can be added later in a matching finish.",
      },
      {
        heading: "Spend on the parts that wear",
        body: "Hinges, drawer channels and edge banding take the daily wear in a wardrobe or kitchen. It is better to choose a simpler laminate and keep good hardware than the other way round.",
      },
    ],
    faqs: [
      {
        q: "Do you deliver and install furniture in Wagholi?",
        a: "Yes. Tekton Interior Solutions delivers and installs across Pune, including Wagholi, from its factory in Kondhwa Budruk.",
      },
      {
        q: "Can I order only a kitchen now and wardrobes later?",
        a: "Yes. Furniture is made to order, so you can order in stages. The laminate shade codes are kept on record so later pieces match.",
      },
    ],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
