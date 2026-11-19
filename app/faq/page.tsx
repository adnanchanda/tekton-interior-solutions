import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, Crumbs, FaqList } from "@/components/blocks";
import JsonLd from "@/components/JsonLd";
import { allFaqs, faqGroups } from "@/lib/faqs";
import { products } from "@/lib/products";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Furniture FAQ: Materials, Sizes, Ordering",
  description:
    "Answers from a Pune furniture manufacturer: MDF or particle board, HDHMR, plywood grades, standard sizes, getting a quote and whether installation is included.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <Crumbs trail={[{ name: "FAQ" }]} />
      <div className="wrap prose-head">
        <h1>Questions about buying furniture from Tekton</h1>
        <p className="lead">
          Short answers to what office managers and homeowners in Pune ask before they order. Each answer starts with
          the answer.
        </p>
      </div>
      <div className="wrap article article--single">
        <div className="article__main">
          {faqGroups.map((g) => (
            <section key={g.heading}>
              <h2>{g.heading}</h2>
              <FaqList faqs={g.items} />
            </section>
          ))}
          <section>
            <h2>Questions about a specific product</h2>
            <ul className="ticks">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}#faq-h`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <ContactBand heading="Still have a question? Ask the factory." />
      <JsonLd data={[faqSchema(allFaqs), breadcrumbSchema([{ name: "FAQ", path: "/faq" }])]} />
    </>
  );
}
