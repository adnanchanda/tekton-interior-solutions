import Link from "next/link";
import type { Faq, Product } from "@/lib/products";
import { formatAddress, site, whatsappLink } from "@/lib/site";
import IsoDrawing from "./iso/IsoDrawing";
import type { SceneKey } from "./iso/scenes";
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export function Crumbs({ trail }: { trail: { name: string; path?: string }[] }) {
  return (
    <nav className="crumbs wrap" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {trail.map((t) => (
          <li key={t.name}>{t.path ? <Link href={t.path}>{t.name}</Link> : <span aria-current="page">{t.name}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * The top of an inner page, laid out as a cut board: one large panel with the
 * heading and the direct answer, a drawing panel, and the two contact panels.
 */
export function PageSheet({
  h1,
  answer,
  scene,
  sceneTitle,
  waMessage,
  label,
}: {
  h1: string;
  answer: string;
  scene: SceneKey;
  sceneTitle: string;
  waMessage?: string;
  label?: string;
}) {
  return (
    <div className="wrap">
      <div className="sheet sheet--page" data-reveal>
        <div className="panel panel--green sheet__lead">
          <h1>{h1}</h1>
          <p className="lead">{answer}</p>
        </div>
        <div className="panel panel--white sheet__drawing">
          <IsoDrawing scene={scene} title={sceneTitle} />
          {label && <span className="part">{label}</span>}
        </div>
        <a className="panel panel--ink panel--link" href={site.phoneHref} data-track="click_call" data-track-at="page-sheet">
          <PhoneIcon />
          <span>
            Call <strong>{site.phone}</strong>
          </span>
        </a>
        <a
          className="panel panel--wood panel--link"
          href={whatsappLink(waMessage)}
          data-track="click_whatsapp"
          data-track-at="page-sheet"
          rel="noopener"
        >
          <WhatsAppIcon />
          <span>
            <strong>WhatsApp</strong> your plan or photos
          </span>
        </a>
      </div>
    </div>
  );
}

export function FaqList({ faqs, headingLevel = 3 }: { faqs: Faq[]; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as "h2" | "h3";
  return (
    <div className="faqs">
      {faqs.map((f) => (
        <div className="faq" key={f.q}>
          <H>{f.q}</H>
          <p>{f.a}</p>
        </div>
      ))}
    </div>
  );
}

export function ProductPanel({ p }: { p: Product }) {
  return (
    <Link className="panel panel--white product-panel" href={`/products/${p.slug}`}>
      <IsoDrawing scene={p.scene} title={`Drawing of ${p.name.toLowerCase()}`} />
      <span className="product-panel__name">
        {p.name} <ArrowIcon />
      </span>
      <span className="part">
        {p.part} · {p.size}
      </span>
    </Link>
  );
}

/** Closing block on every page: how to reach the factory. */
export function ContactBand({ heading = "Send us the plan. We will send you a quote." }: { heading?: string }) {
  return (
    <section className="band" aria-labelledby="band-h">
      <div className="wrap band__grid">
        <div>
          <h2 id="band-h">{heading}</h2>
          <p>
            For an office, send the seat count and a floor plan. For a home, send the wall measurements and a few
            photos. We work {site.hours.days}, {site.hours.label}.
          </p>
          <p className="band__addr">Factory: {formatAddress(site.factory)}</p>
        </div>
        <div className="band__actions">
          <a className="btn btn--green" href={site.phoneHref} data-track="click_call" data-track-at="band">
            <PhoneIcon /> Call {site.phone}
          </a>
          <a className="btn btn--paper" href={whatsappLink()} data-track="click_whatsapp" data-track-at="band" rel="noopener">
            <WhatsAppIcon /> WhatsApp us
          </a>
          <Link className="btn btn--ghost" href="/contact#quote" data-track="click_quote" data-track-at="band">
            Fill in the enquiry form <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
