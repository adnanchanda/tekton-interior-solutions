import type { Faq } from "./products";
import { clients, site } from "./site";

// Content for the office-only landing page. It gathers what the six office
// product pages say into one page for buyers searching for an office
// furniture manufacturer. Every statement here is already on another page of
// the site. Prices, lead times, warranty and project case studies are left
// out until the owner supplies them.
export const office = {
  path: "/office-furniture-manufacturer-pune",
  name: "Office furniture manufacturer",
  title: "Office Furniture Manufacturer in Pune",
  metaDescription:
    "Tekton makes office furniture at its own factory in Kondhwa Budruk, Pune: modular workstations, chairs, executive and conference tables, storage, cafeteria furniture and sofas.",
  h1: "Office furniture manufacturer in Pune",
  answer: `${site.name} is an office furniture manufacturer in Pune. It makes modular workstations, office chairs, executive, conference and reception tables, storage units, cafeteria furniture and office sofas at its own factory in Kondhwa Budruk, and its own team installs them at your office. It has made office furniture since ${site.founded}.`,
  rooms: [
    {
      room: "Open office floor",
      items: "Linear, face-to-face and L-shape workstations with partition screens, pedestals and cable management, and workstation chairs.",
    },
    {
      room: "Cabins",
      items: "Executive and director tables with side return, executive and director chairs, visitor chairs and storage.",
    },
    {
      room: "Meeting and conference rooms",
      items: "Conference and meeting tables made to the room, and chairs to go with them.",
    },
    {
      room: "Reception",
      items: "Reception tables and front desks, with waiting sofas, lounge seating and centre tables.",
    },
    {
      room: "Storage",
      items: "Full-height cupboards, low credenzas, filing cabinets, pedestals, open shelving and staff lockers.",
    },
    {
      room: "Cafeteria and breakout",
      items: "Cafeteria tables and chairs, benches, bar stools and pantry counters.",
    },
  ],
  reasons: [
    {
      heading: "Made in our own factory",
      body: "The furniture is cut, edge-banded and assembled at Tekton's factory in Kondhwa Budruk, Pune. You deal with the maker, with no dealer in between.",
    },
    {
      heading: "One vendor for the whole office",
      body: "Tekton began with office seating and then added workstations, tables and storage, so the desks, chairs, cabins, meeting rooms, reception and cafeteria can come from one order with matching laminates.",
    },
    {
      heading: "Made to your floor plan",
      body: "Nothing is sold from fixed stock sizes. The layout is drawn around your seat count, columns, doors and electrical points, and the furniture is made to it.",
    },
    {
      heading: "Installed by our own team",
      body: "Tekton's team delivers and installs at your office and plans the work around the hours your building allows for material movement.",
    },
  ],
  faqs: [
    {
      q: "Who manufactures office furniture in Pune?",
      a: `${site.name} manufactures office furniture in Pune at its own factory in Kondhwa Budruk. It makes modular workstations, office chairs, executive, conference and reception tables, storage units, cafeteria furniture and office sofas, and installs them on site.`,
    },
    {
      q: "Can one manufacturer furnish a complete office?",
      a: "Yes. Tekton makes all six kinds of furniture an office needs: workstations, chairs, tables for cabins, meeting rooms and reception, storage, cafeteria furniture and sofas. A company can set up the whole office from one order.",
    },
    {
      q: "What do I send to get a quote for office furniture?",
      a: `Send the seat count, a floor plan with columns, doors and electrical points marked, the office location in Pune and the date you need to move in. Call or WhatsApp ${site.phone}. The layout and the quote are prepared from those.`,
    },
    {
      q: "Is buying office furniture from a manufacturer different from buying from a dealer?",
      a: "Yes. A manufacturer makes the furniture to your sizes and layout and is answerable for it directly. A dealer sells what another factory makes, usually in fixed sizes. Tekton is a manufacturer and installs its own furniture.",
    },
    {
      q: "Which companies has Tekton made office furniture for?",
      a: `Tekton's clients include ${clients.slice(0, -1).map((c) => c.name).join(", ")} and ${clients[clients.length - 1].name}, along with many smaller offices across Pune.`,
    },
    {
      q: "Does Tekton renovate or maintain existing office furniture?",
      a: "Yes. Tekton's catalogue lists renovation and maintenance of modular office furniture, alongside new manufacturing and installation.",
    },
  ] as Faq[],
};
