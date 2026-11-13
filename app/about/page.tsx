import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, Crumbs, PageSheet } from "@/components/blocks";
import JsonLd from "@/components/JsonLd";
import { products } from "@/lib/products";
import { breadcrumbSchema } from "@/lib/schema";
import { clients, formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us: Furniture Manufacturer in Pune since 2017",
  description:
    "Tekton Interior Solutions has made office and home furniture in Kondhwa Budruk, Pune since May 2017. It began with office seating and now makes complete office fit-outs.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Crumbs trail={[{ name: "About" }]} />
      <PageSheet
        h1="A Pune furniture factory, at work since 2017"
        answer={`${site.name} is a furniture manufacturer based in Kondhwa Budruk, Pune. It was founded in ${site.founded} and is led by its director, ${site.director}. It makes office furniture and residential furniture in its own factory and installs it on site.`}
        scene="storage"
        sceneTitle="Drawing of storage units, shown as their panels"
      />
      <div className="wrap article article--single">
        <div className="article__main">
          <section>
            <h2>From chairs to complete offices</h2>
            <p>
              Tekton started as a seating manufacturer, making office chairs, visitor chairs and sofas. As clients
              asked for more, the factory added modular furniture: workstations, executive tables, reception tables,
              conference tables, pantry tables and desking systems. Today a company can set up a whole office from
              one vendor, and a homeowner can order a wardrobe, a kitchen or a bed from the same factory.
            </p>
          </section>
          <section>
            <h2>What we make</h2>
            <ul className="ticks">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2>What we care about</h2>
            <p>
              Time, quality and comfort. A fit-out has a date, and furniture that arrives late holds up everyone
              else on site, so we plan production around your handover. Quality is decided by things you can check:
              the board, the edge banding, the hardware. Comfort is why we began with chairs.
            </p>
          </section>
          <section>
            <h2>Who we have worked for</h2>
            <p>
              Our clients include {clients.slice(0, -1).map((c) => c.name).join(", ")} and {clients[clients.length - 1].name}
              , along with many smaller offices and homes across Pune.
            </p>
          </section>
          <section>
            <h2>Where to find us</h2>
            <table className="specs">
              <tbody>
                <tr>
                  <th scope="row">Factory</th>
                  <td>{formatAddress(site.factory)}</td>
                </tr>
                <tr>
                  <th scope="row">Head office</th>
                  <td>{formatAddress(site.headOffice)}</td>
                </tr>
                <tr>
                  <th scope="row">Phone</th>
                  <td>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Hours</th>
                  <td>
                    {site.hours.days}, {site.hours.label}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
      <ContactBand />
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "About", path: "/about" }]),
          { "@context": "https://schema.org", "@type": "AboutPage", url: `${site.url}/about`, name: `About ${site.name}`, about: { "@id": `${site.url}/#business` } },
        ]}
      />
    </>
  );
}
