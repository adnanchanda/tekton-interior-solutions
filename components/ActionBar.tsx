import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

/** Call, WhatsApp and quote, always one tap away on a phone. */
export default function ActionBar() {
  return (
    <div className="actionbar" role="group" aria-label="Contact Tekton">
      <a href={site.phoneHref} data-track="click_call" data-track-at="actionbar">
        <PhoneIcon />
        Call
      </a>
      <a href={whatsappLink()} data-track="click_whatsapp" data-track-at="actionbar" rel="noopener">
        <WhatsAppIcon />
        WhatsApp
      </a>
      <Link href="/contact#quote" data-track="click_quote" data-track-at="actionbar">
        Get a quote
      </Link>
    </div>
  );
}
