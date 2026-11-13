import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, Crumbs, FaqList, PageSheet } from "@/components/blocks";
import { ArrowIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { products } from "@/lib/products";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { trade } from "@/lib/trade";

export const metadata: Metadata = {
  title: trade.title,
  description: trade.metaDescription,
  alternates: { canonical: trade.path },
  openGraph: { title: trade.title, description: trade.metaDescription, url: trade.path },
};

export default function ForArchitectsPage() {
  return (
    <>
      <Crumbs trail={[{ name: trade.name }]} />
      <PageSheet
        h1="You design it. We make and install it."
        answer={trade.answer}
        scene="table"
        sceneTitle="Drawing of a conference table, shown as the panels it is made from"
        waMessage="Hi, I am an architect / interior designer. I would like to discuss working with Tekton on a project."
      />

      <div className="wrap article article--single">
        <div className="article__main">
          <section aria-labelledby="how-h">
            <h2 id="how-h">How it works</h2>
            <table className="specs">
              <tbody>
                {trade.steps.map((s, i) => (
                  <tr key={s.heading}>
                    <th scope="row">
                      {i + 1}. {s.heading}
                    </th>
                    <td>{s.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section aria-labelledby="send-h">
            <h2 id="send-h">What to send for a quote</h2>
            <ul className="ticks">
              <li>Drawings or a layout with dimensions, as PDF or CAD.</li>
              <li>The bill of quantities or item list, if you have one.</li>
              <li>Boards, laminates or other finishes, edge banding and hardware as specified.</li>
              <li>The site location in Pune and the dates you are working to.</li>
            </ul>
          </section>

          <section aria-labelledby="terms-h">
            <h2 id="terms-h">Partnership terms</h2>
            <p>
              Tekton has working arrangements with architects and interior designers who bring it projects. The terms
              depend on the project and are agreed directly, not published here. Call or WhatsApp {site.phone}, or
              write to <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </section>

          <section aria-labelledby="faq-h">
            <h2 id="faq-h">Questions from architects and designers</h2>
            <FaqList faqs={trade.faqs} />
          </section>
        </div>
      </div>

      <section className="wrap section section--tight" aria-labelledby="make-h">
        <h2 id="make-h">What we make</h2>
        <ul className="chips">
          {products.map((p) => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}`}>
                {p.name} <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactBand heading="Have a project? Send us the drawings." />
      <JsonLd
        data={[
          serviceSchema({
            name: "Furniture manufacturing and installation for architects and interior designers",
            description: trade.metaDescription,
            path: trade.path,
          }),
          faqSchema(trade.faqs),
          breadcrumbSchema([{ name: trade.name, path: trade.path }]),
        ]}
      />
    </>
  );
}
