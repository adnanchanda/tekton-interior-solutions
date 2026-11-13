import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand, Crumbs, FaqList, PageSheet } from "@/components/blocks";
import { ArrowIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import QuoteForm from "@/components/QuoteForm";
import { areas } from "@/lib/areas";
import { guides } from "@/lib/guides";
import { getProduct, products } from "@/lib/products";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  if (!p) return {};
  const path = `/products/${p.slug}`;
  return {
    title: p.title,
    description: p.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: p.title, description: p.metaDescription, url: path },
  };
}

export default async function ProductPage({ params }: Props) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const path = `/products/${p.slug}`;
  const others = products.filter((o) => o.group === p.group && o.slug !== p.slug);

  return (
    <>
      <Crumbs trail={[{ name: "Products", path: "/products" }, { name: p.name }]} />
      <PageSheet
        h1={p.title}
        answer={p.answer}
        scene={p.scene}
        sceneTitle={`Drawing of ${p.name.toLowerCase()}, shown as the panels it is made from`}
        label={`${p.part} · ${p.size}`}
        waMessage={`Hi, I found Tekton on your website. I would like a quote for ${p.name.toLowerCase()}.`}
      />

      <div className="wrap article">
        <div className="article__main">
          <section aria-labelledby="range-h">
            <h2 id="range-h">What we make in this range</h2>
            <ul className="ticks">
              {p.range.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="specs-h">
            <h2 id="specs-h">Common sizes and materials</h2>
            <table className="specs">
              <tbody>
                {p.specs.map((s) => (
                  <tr key={s.label}>
                    <th scope="row">{s.label}</th>
                    <td>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="fine">
              These are the sizes most buyers in India order. Yours are made to your plan, so tell us if you need
              something different.
            </p>
          </section>

          {p.notes.map((n) => (
            <section key={n.heading}>
              <h2>{n.heading}</h2>
              <p>{n.body}</p>
            </section>
          ))}

          <section aria-labelledby="faq-h">
            <h2 id="faq-h">Questions about {p.name.toLowerCase()}</h2>
            <FaqList faqs={p.faqs} />
          </section>
        </div>

        <aside className="article__side" aria-label="Ask for a quote">
          <div className="panel panel--white">
            <h2>Ask for a quote</h2>
            <QuoteForm interest={p.name} />
          </div>
        </aside>
      </div>

      <section className="wrap section section--tight" aria-labelledby="more-h">
        <h2 id="more-h">Related</h2>
        <ul className="chips">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/products/${o.slug}`}>
                {o.name} <ArrowIcon />
              </Link>
            </li>
          ))}
          {guides
            .filter((g) => g.products.includes(p.slug))
            .map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`}>
                  Guide: {g.name} <ArrowIcon />
                </Link>
              </li>
            ))}
          {areas.slice(0, 3).map((a) => (
            <li key={a.slug}>
              <Link href={`/areas/${a.slug}`}>
                Furniture for {a.name} <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactBand />
      <JsonLd
        data={[
          serviceSchema({ name: p.name, description: p.metaDescription, path }),
          faqSchema(p.faqs),
          breadcrumbSchema([
            { name: "Products", path: "/products" },
            { name: p.name, path },
          ]),
        ]}
      />
    </>
  );
}
