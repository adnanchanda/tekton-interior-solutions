import type { Metadata } from "next";
import { Crumbs } from "@/components/blocks";
import { PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import QuoteForm from "@/components/QuoteForm";
import { breadcrumbSchema } from "@/lib/schema";
import { formatAddress, mapsQuery, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and Factory Address in Kondhwa Budruk, Pune",
  description:
    "Call or WhatsApp Tekton Interior Solutions on +91 7385036389. Factory near D-Mart, Somji, Kondhwa Budruk, Pune 411048. Open Monday to Saturday, 9 AM to 7 PM.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const directions = site.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${mapsQuery()}`;
  return (
    <>
      <Crumbs trail={[{ name: "Contact" }]} />
      <div className="wrap prose-head">
        <h1>Contact Tekton Interior Solutions</h1>
        <p className="lead">
          The fastest way to get a quote is to call or WhatsApp {site.phone} with your floor plan or room measurements.
          We are open {site.hours.days}, {site.hours.label}.
        </p>
      </div>

      <div className="wrap contact">
        <div className="sheet sheet--contact">
          <a className="panel panel--ink panel--link" href={site.phoneHref} data-track="click_call" data-track-at="contact">
            <PhoneIcon />
            <span>
              Call <strong>{site.phone}</strong>
            </span>
          </a>
          <a className="panel panel--wood panel--link" href={whatsappLink()} data-track="click_whatsapp" data-track-at="contact" rel="noopener">
            <WhatsAppIcon />
            <span>
              <strong>WhatsApp</strong> your plan or photos
            </span>
          </a>
          <div className="panel panel--green contact__addr">
            <h2>Factory</h2>
            <address>
              {site.name}
              <br />
              {site.factory.street}
              <br />
              {site.factory.locality} {site.factory.postalCode}, {site.factory.region}
            </address>
            <h2>Head office</h2>
            <address>{formatAddress(site.headOffice)}</address>
            <p>
              <a href={`mailto:${site.email}`} data-track="click_email" data-track-at="contact">
                {site.email}
              </a>
            </p>
            <a className="btn btn--ink" href={directions} rel="noopener" data-track="click_directions" data-track-at="contact">
              <PinIcon /> Get directions
            </a>
          </div>
          <div className="panel panel--white contact__map">
            <iframe
              title="Map showing the Tekton Interior Solutions factory in Kondhwa Budruk, Pune"
              src={`https://www.google.com/maps?q=${mapsQuery()}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="panel panel--white contact__form">
          <h2>Send an enquiry</h2>
          <p>We call back during working hours.</p>
          <QuoteForm />
        </div>
      </div>

      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
          { "@context": "https://schema.org", "@type": "ContactPage", url: `${site.url}/contact`, name: `Contact ${site.name}`, about: { "@id": `${site.url}/#business` } },
        ]}
      />
    </>
  );
}
