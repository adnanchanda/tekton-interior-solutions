import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { PhoneIcon } from "./Icons";

export default function Header() {
  return (
    <header className="site-header">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="wrap site-header__row">
        <Link href="/" className="brand" aria-label={`${site.name}, home`}>
          <Image src="/logo.png" alt={`${site.name} logo`} width={54} height={62} priority />
          <span>
            Tekton <span className="brand__rest">Interior Solutions</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>

        <a className="btn btn--ink site-header__call" href={site.phoneHref} data-track="click_call" data-track-at="header">
          <PhoneIcon />
          <span>{site.phone}</span>
        </a>

        <details className="menu">
          <summary aria-label="Menu">
            <span aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
