import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, Crumbs, FaqList, PageSheet, ProductPanel } from "@/components/blocks";
import { ArrowIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { areas } from "@/lib/areas";
import { office } from "@/lib/office";
import { officeProducts, priceLabel, priceNote } from "@/lib/products";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { clients, formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: office.title,
  description: office.metaDescription,
  alternates: { canonical: office.path },
  openGraph: { title: office.title, description: office.metaDescription, url: office.path },
};

export default function OfficeFurniturePage() {
  return (
    <>
      <Crumbs trail={[{ name: office.name }]} />
      <PageSheet
        h1={office.h1}
        answer={office.answer}
        scene="workstation"
        sceneTitle="Drawing of a modular office workstation, shown as the panels it is made from"
        waMessage="Hi, I found Tekton on your website. I need office furniture in Pune and would like a quote."
      />

      <section className="wrap section section--tight" aria-labelledby="lines-h">
        <h2 id="lines-h">Office furniture we manufacture</h2>
        <div className="sheet sheet--products" data-reveal>
          {officeProducts.map((p) => (
            <ProductPanel key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <div className="wrap article article--single">
        <div className="article__main">
          <section aria-labelledby="rooms-h">
            <h2 id="rooms-h">A complete office, room by room</h2>
            <table className="specs">
              <tbody>
                {office.rooms.map((r) => (
                  <tr key={r.room}>
                    <th scope="row">{r.room}</th>
                    <td>{r.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section aria-labelledby="prices-h">
            <h2 id="prices-h">Office furniture starting prices</h2>
            <table className="specs">
              <tbody>
                {officeProducts.map((p) => (
                  <tr key={p.slug}>
                    <th scope="row">
                      <Link href={`/products/${p.slug}`}>{p.name}</Link>
                    </th>
                    <td>From {priceLabel(p)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="fine">{priceNote}</p>
          </section>

          {office.reasons.map((r) => (
            <section key={r.heading}>
              <h2>{r.heading}</h2>
              <p>{r.body}</p>
            </section>
          ))}

          <section aria-labelledby="clients-h">
            <h2 id="clients-h">Companies we have made furniture for</h2>
            <p>
              Our clients include {clients.slice(0, -1).map((c) => c.name).join(", ")} and{" "}
              {clients[clients.length - 1].name}, along with many smaller offices across Pune.
            </p>
          </section>

          <section aria-labelledby="quote-h">
            <h2 id="quote-h">What to send for a quote</h2>
            <ul className="ticks">
              <li>The number of seats, cabins and meeting rooms.</li>
              <li>A floor plan with columns, doors and electrical points marked.</li>
              <li>The office location in Pune and the date you need to move in.</li>
              <li>Any building rules on delivery hours and lift use.</li>
            </ul>
            <p>
              Call or WhatsApp <a href={site.phoneHref}>{site.phone}</a>, or visit the factory at{" "}
              {formatAddress(site.factory)} by appointment, {site.hours.days}, {site.hours.label}. Architects and
              interior designers can see <Link href="/for-architects">how we work to your drawings</Link>.
            </p>
          </section>

          <section aria-labelledby="faq-h">
            <h2 id="faq-h">Questions about buying office furniture in Pune</h2>
            <FaqList faqs={office.faqs} />
          </section>
        </div>
      </div>

      <section className="wrap section section--tight" aria-labelledby="areas-h">
        <h2 id="areas-h">Where we install in Pune</h2>
        <ul className="chips">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={`/areas/${a.slug}`}>
                {a.name} <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactBand heading="Setting up an office? Send us the floor plan." />
      <JsonLd
        data={[
          serviceSchema({
            name: "Office furniture manufacturing and installation",
            description: office.metaDescription,
            path: office.path,
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Office furniture made by Tekton Interior Solutions",
            itemListElement: officeProducts.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: `${site.url}/products/${p.slug}`,
            })),
          },
          faqSchema(office.faqs),
          breadcrumbSchema([{ name: office.name, path: office.path }]),
        ]}
      />
    </>
  );
}
