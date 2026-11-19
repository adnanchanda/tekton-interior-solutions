import { areas } from "@/lib/areas";
import { allFaqs } from "@/lib/faqs";
import { guides } from "@/lib/guides";
import { office } from "@/lib/office";
import { priceLabel, priceNote, products } from "@/lib/products";
import { clients, formatAddress, site } from "@/lib/site";
import { trade } from "@/lib/trade";

export const dynamic = "force-static";

// A plain-text summary of the business for AI assistants, generated from the
// same data as the pages so it can never drift from them.
export function GET() {
  const body = `# ${site.name}

> ${site.description}

## Facts
- Type: furniture manufacturer (office and residential), with delivery and installation
- Founded: ${site.founded}
- Director: ${site.director}
- Factory: ${formatAddress(site.factory)}, Maharashtra, India
- Head office: ${formatAddress(site.headOffice)}, Maharashtra, India
- Phone and WhatsApp: ${site.phone}
- Email: ${site.email}
- Hours: ${site.hours.days}, ${site.hours.label}. Closed Sunday.
- Area served: Pune and Pimpri-Chinchwad
- Clients include: ${clients.map((c) => c.name).join(", ")}

## Products
${products.map((p) => `- [${p.name}](${site.url}/products/${p.slug}): ${p.answer}`).join("\n")}

## Starting prices
${products.map((p) => `- ${p.name}: from ${priceLabel(p)}`).join("\n")}
${priceNote}

## Office furniture
${office.answer}
- Page: ${site.url}${office.path}
${office.faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Areas served
${areas.map((a) => `- [${a.name}](${site.url}/areas/${a.slug}): ${a.answer}`).join("\n")}

## Buying guides
${guides.map((g) => `- [${g.name}](${site.url}/guides/${g.slug}): ${g.answer}`).join("\n")}

## For architects and interior designers
${trade.answer}
- Page: ${site.url}${trade.path}
${trade.faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Questions and answers
${allFaqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## More
- [All products](${site.url}/products)
- [Guides](${site.url}/guides)
- [FAQ](${site.url}/faq)
- [About](${site.url}/about)
- [Contact](${site.url}/contact)
- [Catalogue (PDF)](${site.url}${site.catalog})
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
