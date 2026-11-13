import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, Crumbs } from "@/components/blocks";
import { ArrowIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { areas } from "@/lib/areas";
import { breadcrumbSchema } from "@/lib/schema";
import { formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Areas We Serve in Pune",
  description:
    "Tekton delivers and installs office and home furniture across Pune from its Yewalewadi factory: Hinjewadi, Kharadi, Chakan, Baner, Magarpatta and more.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <Crumbs trail={[{ name: "Areas served" }]} />
      <div className="wrap prose-head">
        <h1>Where Tekton delivers and installs furniture in Pune</h1>
        <p className="lead">
          {site.name} makes furniture at {formatAddress(site.factory)} and delivers and installs it across Pune and
          Pimpri-Chinchwad. These are the areas we are asked about most.
        </p>
      </div>
      <section className="wrap section section--tight">
        <ul className="arealist">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={`/areas/${a.slug}`}>
                <h2>
                  {a.name} <ArrowIcon />
                </h2>
                <p>{a.context}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p>
          Not on the list? We deliver to the rest of Pune too. Call {site.phone} with your location.
        </p>
      </section>
      <ContactBand />
      <JsonLd data={breadcrumbSchema([{ name: "Areas served", path: "/areas" }])} />
    </>
  );
}
