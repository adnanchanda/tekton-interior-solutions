import Link from "next/link";
import { areas } from "@/lib/areas";
import { products } from "@/lib/products";
import { formatAddress, site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <p className="site-footer__name">{site.name}</p>
          <p>
            Furniture manufacturer in Pune since {site.foundedYear}. Office and residential furniture, made in our
            own factory and installed by our team.
          </p>
          <address>
            <strong>Factory</strong>
            <br />
            {formatAddress(site.factory)}
            <br />
            <strong>Head office</strong>
            <br />
            {formatAddress(site.headOffice)}
          </address>
        </div>

        <nav aria-label="Products">
          <h2>Products</h2>
          <ul>
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Areas served">
          <h2>Areas served</h2>
          <ul>
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/areas/${a.slug}`}>{a.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/areas">All of Pune</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href={site.phoneHref} data-track="click_call" data-track-at="footer">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} data-track="click_whatsapp" data-track-at="footer" rel="noopener">
                WhatsApp us
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} data-track="click_email" data-track-at="footer">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.instagram} rel="noopener me">
                Instagram
              </a>
            </li>
            <li>
              {site.hours.days}, {site.hours.label}
            </li>
          </ul>
          <ul className="site-footer__minor">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/guides">Guides</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/for-architects">For architects and designers</Link>
            </li>
            <li>
              <a href={site.catalog} data-track="download_catalog" data-track-at="footer">
                Catalogue (PDF)
              </a>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap site-footer__base">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
