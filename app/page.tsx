import Image from "next/image";
import Link from "next/link";
import { ContactBand, FaqList, ProductPanel } from "@/components/blocks";
import { ArrowIcon, DownloadIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import IsoDrawing from "@/components/iso/IsoDrawing";
import { areas } from "@/lib/areas";
import { faqGroups } from "@/lib/faqs";
import { homeProducts, officeProducts } from "@/lib/products";
import { clients, formatAddress, site, whatsappLink } from "@/lib/site";

const homeFaqs = [
  faqGroups[0].items[0],
  faqGroups[0].items[2],
  faqGroups[1].items[0],
  faqGroups[1].items[2],
  faqGroups[2].items[0],
];

const steps = [
  {
    name: "You send the plan",
    text: "A floor plan and seat count for an office, or wall measurements and photos for a home. WhatsApp is fine.",
  },
  {
    name: "We draw and quote",
    text: "You get a layout and a written quote that names the board, the finish and the hardware, so you can compare it fairly.",
  },
  {
    name: "We make it in our factory",
    text: "Boards are cut, edge-banded and drilled in Yewalewadi. Chairs and sofas are assembled and upholstered in the same place.",
  },
  {
    name: "We deliver and install",
    text: "Our team brings the furniture to your site and fits it, around the working hours your building allows.",
  },
];

export default function Home() {
  return (
    <>
      <section className="wrap hero" aria-labelledby="hero-h">
        <div className="ruler ruler--top" aria-hidden="true">
          <span>2440 mm</span>
        </div>
        <div className="hero__body">
          <div className="ruler ruler--side" aria-hidden="true">
            <span>1220 mm</span>
          </div>
          <div className="sheet sheet--hero">
            <div className="panel panel--green hero__lead">
              <h1 id="hero-h">Office and home furniture, made in our own factory in Pune.</h1>
              <p className="lead">
                Tekton Interior Solutions has manufactured and installed modular workstations, chairs, tables and
                storage since {site.foundedYear}, and makes wardrobes, kitchens and beds to measure.
              </p>
              <div className="hero__cta">
                <Link className="btn btn--ink" href="/contact#quote" data-track="click_quote" data-track-at="hero">
                  Get a quote <ArrowIcon />
                </Link>
                <a className="btn btn--line" href={site.catalog} data-track="download_catalog" data-track-at="hero">
                  <DownloadIcon /> Catalogue (PDF)
                </a>
              </div>
            </div>

            <Link className="panel panel--white hero__drawing" href="/products/modular-office-workstations">
              <IsoDrawing scene="workstation" title="Drawing of a two-seat modular workstation, shown as its panels" />
              <span className="part">WS · 1200 × 600</span>
            </Link>

            <a className="panel panel--ink panel--link hero__call" href={site.phoneHref} data-track="click_call" data-track-at="hero">
              <PhoneIcon />
              <span>
                Call <strong>{site.phone}</strong>
              </span>
            </a>
            <a
              className="panel panel--wood panel--link hero__wa"
              href={whatsappLink()}
              data-track="click_whatsapp"
              data-track-at="hero"
              rel="noopener"
            >
              <WhatsAppIcon />
              <span>
                <strong>WhatsApp</strong> your plan
              </span>
            </a>
            <Link className="panel panel--white panel--link hero__office" href="/products#office">
              <span>
                <strong>For offices</strong> workstations, chairs, tables, storage
              </span>
              <ArrowIcon />
            </Link>
            <Link className="panel panel--white panel--link hero__home" href="/products#home">
              <span>
                <strong>For homes</strong> wardrobes, kitchens, beds
              </span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
        <p className="hero__note">
          A furniture board is 8 × 4 feet. Everything we make starts as one, cut into panels like these.
        </p>
      </section>

      <section className="wrap section" aria-labelledby="make-h">
        <h2 id="make-h">What we make</h2>
        <p className="section__intro">
          Nine product lines from one factory. Each drawing shows the panels the piece is made from.
        </p>

        <h3 id="office" className="group-h">
          Office furniture
        </h3>
        <div className="sheet sheet--products" data-reveal>
          {officeProducts.map((p) => (
            <ProductPanel key={p.slug} p={p} />
          ))}
        </div>

        <h3 id="home" className="group-h">
          Home furniture
        </h3>
        <div className="sheet sheet--products" data-reveal>
          {homeProducts.map((p) => (
            <ProductPanel key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section className="section section--green" aria-labelledby="why-h">
        <div className="wrap split">
          <div>
            <h2 id="why-h">Buy from the factory, not from a showroom.</h2>
            <p>
              A showroom sells what is on its floor. A manufacturer makes what fits yours. Tekton cuts, edge-bands and
              assembles furniture in its own factory in Yewalewadi and sends its own team to install it.
            </p>
          </div>
          <dl className="facts">
            <div>
              <dt>Made to your plan</dt>
              <dd>Desks sized to the seat count, wardrobes sized to the wall. No fixed catalogue sizes.</dd>
            </div>
            <div>
              <dt>One team, start to finish</dt>
              <dd>The people who quote are the people who make and install. One number to call.</dd>
            </div>
            <div>
              <dt>Office and home</dt>
              <dd>Workstations for a 200-seat floor and a wardrobe for one bedroom come off the same machines.</dd>
            </div>
            <div>
              <dt>In Pune since {site.foundedYear}</dt>
              <dd>
                Factory at {formatAddress(site.factory)}. Visits by appointment, {site.hours.days}.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="how-h">
        <h2 id="how-h">How an order runs</h2>
        <ol className="steps" data-reveal>
          {steps.map((s) => (
            <li key={s.name}>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap section" aria-labelledby="clients-h">
        <h2 id="clients-h">Companies we have made furniture for</h2>
        <p className="section__intro">
          More than 500 clients since {site.foundedYear}, from single offices to large plants and IT floors.
        </p>
        <ul className="clients">
          {clients.map((c) => (
            <li key={c.name}>
              <Image src={c.logo} alt={c.name} width={140} height={64} />
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section" aria-labelledby="areas-h">
        <h2 id="areas-h">Where we deliver in Pune</h2>
        <p className="section__intro">
          We deliver and install across Pune and Pimpri-Chinchwad from our factory in Yewalewadi.
        </p>
        <ul className="chips">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={`/areas/${a.slug}`}>
                {a.name} <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section" aria-labelledby="faq-h">
        <h2 id="faq-h">Questions buyers ask first</h2>
        <FaqList faqs={homeFaqs} />
        <p>
          <Link className="textlink" href="/faq">
            All questions and answers <ArrowIcon />
          </Link>
        </p>
      </section>

      <ContactBand />
    </>
  );
}
