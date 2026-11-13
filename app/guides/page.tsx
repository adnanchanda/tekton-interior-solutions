import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, Crumbs } from "@/components/blocks";
import { ArrowIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { guides } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Furniture Buying Guides",
  description:
    "Plain guides to buying office and home furniture in India: workstation sizes, boards and materials, wardrobe planning, kitchen layouts and how to compare quotes.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <Crumbs trail={[{ name: "Guides" }]} />
      <div className="wrap prose-head">
        <h1>Furniture buying guides</h1>
        <p className="lead">
          Sizes, materials and layouts explained by a furniture manufacturer, so you know what to ask for before you
          ask for a quote.
        </p>
      </div>
      <section className="wrap section section--tight">
        <ul className="arealist">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}`}>
                <h2>
                  {g.name} <ArrowIcon />
                </h2>
                <p>{g.answer}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <ContactBand />
      <JsonLd data={breadcrumbSchema([{ name: "Guides", path: "/guides" }])} />
    </>
  );
}
