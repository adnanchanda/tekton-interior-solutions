import type { Faq } from "./products";
import { site, formatAddress } from "./site";

// General FAQs. Answers lead with the direct answer so a search engine or an
// AI assistant can quote the first sentence on its own.
//
// Questions buyers ask that are NOT answered here because the facts must come
// from the owner. Add them as soon as you have the numbers; they are the most
// valuable answers on the site:
//   - What does a modular workstation cost per seat in Pune? (a real range)
//   - How long does manufacturing and installation take? (days, by order size)
//   - What warranty do you give?
//   - Do you deliver outside Pune, and what does delivery cost?
export const faqGroups: { heading: string; items: Faq[] }[] = [
  {
    heading: "About Tekton",
    items: [
      {
        q: "What does Tekton Interior Solutions make?",
        a: "Tekton Interior Solutions is a furniture manufacturer in Pune. It makes modular office workstations, office chairs, executive, conference and reception tables, storage units, cafeteria furniture and office sofas, and also makes residential furniture such as modular wardrobes, modular kitchens and beds.",
      },
      {
        q: "Where is Tekton Interior Solutions located?",
        a: `The factory is at ${formatAddress(site.factory)}. The head office is at ${formatAddress(site.headOffice)}.`,
      },
      {
        q: "Is Tekton a manufacturer or a dealer?",
        a: "Tekton is a manufacturer. Furniture is made at its own factory in Kondhwa Budruk, Pune and installed by its own team, so there is no dealer in between.",
      },
      {
        q: "How long has Tekton been in business?",
        a: "Tekton Interior Solutions has been making furniture since May 2017. It began with office seating and then added modular workstations, tables and storage.",
      },
      {
        q: "What are the working hours?",
        a: `Tekton is open ${site.hours.days}, ${site.hours.label}, and closed on Sunday.`,
      },
    ],
  },
  {
    heading: "Ordering",
    items: [
      {
        q: "How do I get a quote?",
        a: `Call or WhatsApp ${site.phone} with what you need. For an office, send the seat count and a floor plan. For a home, send the room or wall measurements and photos. A quote is prepared from those.`,
      },
      {
        q: "What decides the price of modular furniture?",
        a: "Five things decide the price: the size, the board (particle board, MDF, HDHMR or plywood), the finish (laminate, acrylic, veneer), the hardware (hinges, channels, locks) and the quantity. Two quotes are only comparable if all five are the same.",
      },
      {
        q: "Do you provide installation?",
        a: "Yes. Tekton manufactures the furniture and installs it at your site. Its catalogue also lists renovation and maintenance of modular office furniture.",
      },
      {
        q: "Can I see the products before ordering?",
        a: "Yes. You can download the product catalogue from this website, or visit the factory in Kondhwa Budruk by appointment to see materials and samples.",
      },
      {
        q: "Do you make furniture to custom sizes?",
        a: "Yes. Furniture is made to order from your floor plan or room measurements, so sizes, laminate shades and internal layouts are yours to choose.",
      },
    ],
  },
  {
    heading: "Materials",
    items: [
      {
        q: "Which is better, MDF or particle board?",
        a: "Neither is better for everything. Particle board is lighter and cheaper and is the standard for laminated desks, panels and carcasses in dry rooms. MDF is denser and smoother, so it is used for routed, painted or membrane-finished shutters. Neither should be used where it will get wet; use HDHMR or BWR plywood there.",
      },
      {
        q: "What is prelaminated particle board?",
        a: "Prelaminated particle board is particle board with a decorative laminate layer pressed onto both faces at the board factory. It arrives ready to cut, so furniture made from it only needs edge banding. It is the most common material for office workstations and storage.",
      },
      {
        q: "What is HDHMR board?",
        a: "HDHMR stands for high density, high moisture resistance. It is a dense engineered wood board that resists moisture better than MDF or particle board and holds screws well, which makes it a popular choice for kitchens and wardrobes.",
      },
      {
        q: "What is the difference between MR and BWR plywood?",
        a: "MR (moisture resistant) plywood handles humidity and is used for bedroom and living-room furniture. BWR (boiling water resistant) plywood handles direct water contact and is used in kitchens and bathrooms. BWR costs more.",
      },
      {
        q: "What is edge banding and why does it matter?",
        a: "Edge banding is the PVC strip sealed onto the cut edge of a board. It stops moisture entering the board and stops the laminate chipping. A 2 mm band on exposed edges lasts much longer than a thin 0.8 mm band, and machine-applied banding lasts longer than hand-applied.",
      },
      {
        q: "What size is a standard furniture board?",
        a: "Furniture boards are sold in sheets of 8 × 4 feet, which is 2440 × 1220 mm. Carcasses are usually cut from 18 mm board and desk tops from 25 mm board.",
      },
    ],
  },
];

export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.items);
