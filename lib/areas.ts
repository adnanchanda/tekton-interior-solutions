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
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
