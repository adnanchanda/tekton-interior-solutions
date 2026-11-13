// Single source of truth for business facts. Every page, the JSON-LD,
// the sitemap and llms.txt read from here, so a fact is changed once.
//
// OWNER TO CONFIRM (taken from the catalogue PDF and git history):
//   - factory and head-office addresses below
//   - that the phone number is also the WhatsApp number
// OWNER TO SUPPLY (left out on purpose, never invent these):
//   - price ranges, lead times, warranty terms, GST number
//   - Google Maps place link once the Business Profile exists (mapsUrl)

export const site = {
  name: "Tekton Interior Solutions",
  shortName: "Tekton",
  url: "https://www.tektoninteriorsolutions.in",
  tagline: "Furniture manufacturer in Pune for offices and homes",
  description:
    "Tekton Interior Solutions is a furniture manufacturer in Yewalewadi, Pune. Since 2017 it has made and installed modular office workstations, office chairs, tables and storage, and makes modular wardrobes, kitchens and beds for homes.",
  metaDescription:
    "Furniture manufacturer in Yewalewadi, Pune since 2017. Modular office workstations, chairs, tables and storage, plus wardrobes, kitchens and beds for homes.",
  foundedYear: 2017,
  founded: "May 2017",
  director: "Irfan Ahmed",
  phone: "+91 7385036389",
  phoneHref: "tel:+917385036389",
  whatsapp: "917385036389",
  email: "irfanchanda0@gmail.com",
  instagram: "https://www.instagram.com/tektoninteriorsolutions.in/",
  catalog: "/documents/TektonCatalog.pdf",
  hours: { days: "Monday to Saturday", open: "09:00", close: "19:00", label: "9:00 AM to 7:00 PM" },
  factory: {
    label: "Factory",
    street: "Opp. Sinhgad College, Behind Ganraj Marble, Yewalewadi, Kondhwa Budruk",
    locality: "Pune",
    region: "Maharashtra",
    postalCode: "411048",
    country: "IN",
  },
  headOffice: {
    label: "Head office",
    street: "A8/12 Brahma Horizon, Lullanagar",
    locality: "Pune",
    region: "Maharashtra",
    postalCode: "411040",
    country: "IN",
  },
  // Replace with the Google Business Profile link when it exists.
  mapsUrl: "",
  gaId: "G-QHBQGXNWR8",
} as const;

export const yearsInBusiness = () => new Date().getFullYear() - site.foundedYear;

export const formatAddress = (a: { street: string; locality: string; postalCode: string }) =>
  `${a.street}, ${a.locality} ${a.postalCode}`;

export const mapsQuery = () =>
  encodeURIComponent(`${site.name}, ${formatAddress(site.factory)}`);

export const whatsappLink = (message = "Hi, I found Tekton Interior Solutions on your website. I would like a quote.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

// Clients shown on the site. Get written permission before publishing logos.
export const clients = [
  { name: "Tata Motors", logo: "/clients/tata-motors.png" },
  { name: "TCS", logo: "/clients/tcs.png" },
  { name: "Toyota", logo: "/clients/toyota.png" },
  { name: "Samsung", logo: "/clients/samsung.png" },
  { name: "Larsen & Toubro", logo: "/clients/larsen-toubro.png" },
  { name: "Bajaj Finance", logo: "/clients/bajaj-finance.png" },
  { name: "Bajaj Allianz", logo: "/clients/bajaj-allianz.png" },
  { name: "Honeywell", logo: "/clients/honeywell.png" },
  { name: "Exide", logo: "/clients/exide.png" },
  { name: "Volkswagen", logo: "/clients/volkswagen.png" },
  { name: "Wardwizard", logo: "/clients/wardwizard.png" },
  { name: "Thermax", logo: "/clients/thermax.png" },
  { name: "Finolex Cables", logo: "/clients/finolex-cables.png" },
] as const;

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/areas", label: "Areas served" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;
