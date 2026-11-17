import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, Crumbs, ProductPanel } from "@/components/blocks";
import JsonLd from "@/components/JsonLd";
import { homeProducts, officeProducts, products } from "@/lib/products";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Office and Home Furniture Made in Pune",
  description:
    "Everything Tekton makes in its Pune factory: modular workstations, office chairs, tables, storage, cafeteria furniture, sofas, wardrobes, kitchens and beds.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <Crumbs trail={[{ name: "Products" }]} />
      <div className="wrap prose-head">
        <h1>Furniture we make in Pune</h1>
        <p className="lead">
          {site.name} makes {products.length} lines of furniture at its factory in Kondhwa Budruk, Pune: six for offices
          and three for homes. Every piece is made to order from your plan and installed by our team.
        </p>
      </div>
      <section className="wrap section section--tight" aria-labelledby="office">
        <h2 id="office">Office furniture</h2>
        <p className="section__intro">
          Setting up a whole office? See <Link href="/office-furniture-manufacturer-pune">office furniture made in Pune</Link>,
          room by room.
        </p>
        <div className="sheet sheet--products" data-reveal>
          {officeProducts.map((p) => (
            <ProductPanel key={p.slug} p={p} />
          ))}
        </div>
      </section>
      <section className="wrap section section--tight" aria-labelledby="home">
        <h2 id="home">Home furniture</h2>
        <div className="sheet sheet--products" data-reveal>
          {homeProducts.map((p) => (
            <ProductPanel key={p.slug} p={p} />
          ))}
        </div>
      </section>
      <ContactBand />
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Products", path: "/products" }]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Furniture made by Tekton Interior Solutions",
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: `${site.url}/products/${p.slug}`,
            })),
          },
        ]}
      />
    </>
  );
}
