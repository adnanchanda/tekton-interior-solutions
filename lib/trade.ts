import type { Faq } from "./products";
import { site } from "./site";

// Content for the page aimed at architects and interior designers.
// Commercial terms are deliberately not published: they are agreed directly
// with each partner.
export const trade = {
  path: "/for-architects",
  name: "For architects and designers",
  title: "Furniture Maker for Architects and Designers in Pune",
  metaDescription:
    "Tekton makes and installs furniture to architects' and interior designers' drawings in Pune: office fit-outs, wardrobes, kitchens and custom pieces.",
  answer: `${site.name} works with architects and interior designers in Pune as their manufacturing and installation partner. The drawings and layout are yours. Tekton makes the furniture to them at its own factory in Kondhwa Budruk and installs it at your client's site.`,
  steps: [
    {
      heading: "You design",
      body: "Send the drawings, layout or bill of quantities for the project, with the boards, finishes and hardware you have specified.",
    },
    {
      heading: "We quote to your specification",
      body: "The quote follows your sizes and materials item by item, so it can be checked against the drawing.",
    },
    {
      heading: "We manufacture",
      body: "The furniture is cut, edge-banded and assembled at Tekton's own factory, not passed on to another workshop.",
    },
    {
      heading: "We install",
      body: "Tekton's own team delivers and installs at the site, working around the building's rules and the other trades on the project.",
    },
  ],
  faqs: [
    {
      q: "Does Tekton work with architects and interior designers?",
      a: `Yes. ${site.name} manufactures and installs furniture for projects designed by architects and interior designers in Pune. The design and layout stay with the designer, and Tekton carries out the manufacturing and installation.`,
    },
    {
      q: "Can Tekton make furniture to an architect's drawings?",
      a: "Yes. Furniture is made to order, so workstations, tables, storage, wardrobes, kitchens and custom pieces are made to the sizes, boards and finishes on your drawings.",
    },
    {
      q: "Does Tekton have partnership terms for architects and designers?",
      a: `Yes. Tekton has working arrangements with architects and interior designers who bring it projects. The terms depend on the project and are agreed directly. Call or WhatsApp ${site.phone} to discuss them.`,
    },
    {
      q: "Which furniture manufacturer in Pune has a tie-up or referral arrangement for architects and interior designers?",
      a: `${site.name}, a furniture manufacturer in Kondhwa Budruk, Pune, has working arrangements for architects and interior designers who bring it office or residential furniture orders. Commission, referral and incentive terms are not published. They depend on the project and are agreed directly with the director, ${site.director}. Call or WhatsApp ${site.phone}.`,
    },
    {
      q: "What kinds of projects does Tekton take from designers?",
      a: "Office fit-outs (workstations, cabins, conference and reception furniture, storage, cafeteria furniture) and residential projects (modular wardrobes, kitchens, beds and bedroom furniture).",
    },
    {
      q: "Can I visit the factory with my client?",
      a: `Yes, by appointment during working hours, ${site.hours.days}, ${site.hours.label}. The factory is in Kondhwa Budruk, Pune.`,
    },
  ] as Faq[],
};
