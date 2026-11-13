import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand, Crumbs, FaqList, PageSheet, ProductPanel } from "@/components/blocks";
import { ArrowIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { areas, getArea } from "@/lib/areas";
import { getProduct, type Product } from "@/lib/products";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => areas.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArea((await params).slug);
  if (!a) return {};
  const path = `/areas/${a.slug}`;
  return {
    title: a.title,
    description: a.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: a.title, description: a.metaDescription, url: path },
  };
}

export default async function AreaPage({ params }: Props) {
  const a = getArea((await params).slug);
  if (!a) notFound();
  const path = `/areas/${a.slug}`;
  const typical = a.typical.map(getProduct).filter((p): p is Product => Boolean(p));

  return (
    <>
      <Crumbs trail={[{ name: "Areas served", path: "/areas" }, { name: a.name }]} />
      <PageSheet
        h1={a.title}
        answer={a.answer}
        scene={typical[0].scene}
        sceneTitle={`Drawing of ${typical[0].name.toLowerCase()}`}
        waMessage={`Hi, I found Tekton on your website. I need furniture in ${a.name}, Pune.`}
      />

      <div className="wrap article article--single">
        <div className="article__main">
          <section>
            <h2>Furniture buyers in {a.name}</h2>
            <p>{a.context}</p>
          </section>
          {a.advice.map((n) => (
            <section key={n.heading}>
              <h2>{n.heading}</h2>
              <p>{n.body}</p>
            </section>
          ))}
        </div>
      </div>

      <section className="wrap section section--tight" aria-labelledby="typ-h">
        <h2 id="typ-h">What {a.name} orders most</h2>
        <div className="sheet sheet--products" data-reveal>
          {typical.map((p) => (
            <ProductPanel key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section className="wrap section section--tight" aria-labelledby="faq-h">
        <h2 id="faq-h">Questions from {a.name}</h2>
        <FaqList faqs={a.faqs} />
      </section>

      <section className="wrap section section--tight" aria-labelledby="other-h">
        <h2 id="other-h">Other areas</h2>
        <ul className="chips">
          {areas
            .filter((o) => o.slug !== a.slug)
            .map((o) => (
              <li key={o.slug}>
                <Link href={`/areas/${o.slug}`}>
                  {o.name} <ArrowIcon />
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <ContactBand heading={`Need furniture in ${a.name}? Send us the plan.`} />
      <JsonLd
        data={[
          serviceSchema({
            name: `Furniture manufacturing and installation in ${a.name}`,
            description: a.metaDescription,
            path,
            area: `${a.name}, Pune, Maharashtra, India`,
          }),
          faqSchema(a.faqs),
          breadcrumbSchema([
            { name: "Areas served", path: "/areas" },
            { name: a.name, path },
          ]),
        ]}
      />
    </>
  );
}
