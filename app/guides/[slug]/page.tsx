import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand, Crumbs, FaqList } from "@/components/blocks";
import { ArrowIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { getGuide, guides } from "@/lib/guides";
import { getProduct, type Product } from "@/lib/products";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => guides.map((g) => ({ slug: g.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = getGuide((await params).slug);
  if (!g) return {};
  const path = `/guides/${g.slug}`;
  return {
    title: g.title,
    description: g.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: g.title, description: g.metaDescription, url: path, type: "article" },
  };
}

export default async function GuidePage({ params }: Props) {
  const g = getGuide((await params).slug);
  if (!g) notFound();
  const path = `/guides/${g.slug}`;
  const related = g.products.map(getProduct).filter((p): p is Product => Boolean(p));

  return (
    <>
      <Crumbs trail={[{ name: "Guides", path: "/guides" }, { name: g.name }]} />
      <div className="wrap prose-head">
        <h1>{g.title}</h1>
        <p className="lead">{g.answer}</p>
      </div>

      <div className="wrap article article--single">
        <div className="article__main">
          {g.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body?.map((p) => <p key={p}>{p}</p>)}
              {s.table && (
                <table className="specs">
                  <tbody>
                    {s.table.map((r) => (
                      <tr key={r.label}>
                        <th scope="row">{r.label}</th>
                        <td>{r.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {s.list && (
                <ul className="ticks">
                  {s.list.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section aria-labelledby="faq-h">
            <h2 id="faq-h">Common questions</h2>
            <FaqList faqs={g.faqs} />
          </section>

          <p className="fine">
            The sizes here are the ones commonly used in India. They are guidance, not a rule: furniture is made to
            your room and your plan.
          </p>
        </div>
      </div>

      <section className="wrap section section--tight" aria-labelledby="more-h">
        <h2 id="more-h">Related</h2>
        <ul className="chips">
          {related.map((p) => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}`}>
                {p.name} <ArrowIcon />
              </Link>
            </li>
          ))}
          {guides
            .filter((o) => o.slug !== g.slug)
            .map((o) => (
              <li key={o.slug}>
                <Link href={`/guides/${o.slug}`}>
                  {o.name} <ArrowIcon />
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <ContactBand />
      <JsonLd
        data={[
          articleSchema({ title: g.title, description: g.metaDescription, path, updated: g.updated }),
          faqSchema(g.faqs),
          breadcrumbSchema([
            { name: "Guides", path: "/guides" },
            { name: g.name, path },
          ]),
        ]}
      />
    </>
  );
}
