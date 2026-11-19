import { site, clients } from "./site";
import { products, type Faq } from "./products";
import { areas } from "./areas";

const abs = (path: string) => `${site.url}${path}`;
export const businessId = abs("/#business");

const postal = (a: typeof site.factory | typeof site.headOffice) => ({
  "@type": "PostalAddress",
  streetAddress: a.street,
  addressLocality: a.locality,
  addressRegion: a.region,
  postalCode: a.postalCode,
  addressCountry: a.country,
});

/** The business itself. Rendered once, in the root layout. */
export const businessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["FurnitureStore", "LocalBusiness"],
  "@id": businessId,
  name: site.name,
  description: site.description,
  url: site.url,
  logo: abs("/logo.png"),
  image: abs("/opengraph-image"),
  telephone: site.phone,
  email: site.email,
  foundingDate: "2017-05",
  founder: { "@type": "Person", name: site.director },
  address: postal(site.factory),
  geo: { "@type": "GeoCoordinates", ...site.factory.geo },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${site.factory.geo.latitude},${site.factory.geo.longitude}`,
  location: [
    {
      "@type": "Place",
      name: `${site.name} factory`,
      address: postal(site.factory),
      geo: { "@type": "GeoCoordinates", ...site.factory.geo },
    },
    { "@type": "Place", name: `${site.name} head office`, address: postal(site.headOffice) },
  ],
  areaServed: [
    { "@type": "City", name: "Pune" },
    ...areas.map((a) => ({ "@type": "Place", name: `${a.name}, Pune` })),
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: site.hours.open,
      closes: site.hours.close,
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    contactType: "sales",
    areaServed: "IN",
  },
  sameAs: [site.instagram],
  knowsAbout: products.map((p) => p.name),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Furniture made by Tekton Interior Solutions",
    itemListElement: products.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: p.name, url: abs(`/products/${p.slug}`) },
    })),
  },
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": abs("/#website"),
  url: site.url,
  name: site.name,
  publisher: { "@id": businessId },
  inLanguage: "en-IN",
});

export const faqSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...trail].map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: abs(t.path),
  })),
});

export const serviceSchema = (o: {
  name: string;
  description: string;
  path: string;
  area?: string;
  priceFrom?: { amount: number; unit?: string };
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: o.name,
  description: o.description,
  url: abs(o.path),
  serviceType: o.name,
  provider: { "@id": businessId },
  areaServed: { "@type": "Place", name: o.area ?? "Pune, Maharashtra, India" },
  ...(o.priceFrom && {
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        minPrice: o.priceFrom.amount,
        description: `Starting price${o.priceFrom.unit ? ` ${o.priceFrom.unit}` : ""}`,
      },
    },
  }),
});

export const articleSchema = (o: { title: string; description: string; path: string; updated: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: o.title,
  description: o.description,
  url: abs(o.path),
  mainEntityOfPage: abs(o.path),
  dateModified: o.updated,
  datePublished: o.updated,
  inLanguage: "en-IN",
  author: { "@id": businessId },
  publisher: { "@id": businessId },
});

export const clientNames = clients.map((c) => c.name);
