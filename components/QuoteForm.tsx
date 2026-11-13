"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { products } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";

const SOURCES = ["Google Search", "Google Maps", "ChatGPT or another AI assistant", "IndiaMART or JustDial", "Instagram", "Referred by someone", "Existing client", "Other"];

type Status = "idle" | "sending" | "sent" | "error";

export default function QuoteForm({ interest = "" }: { interest?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  // Kept so a failed send can be handed to WhatsApp without retyping.
  const [draft, setDraft] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    if (f.get("company_website")) return; // honeypot: bots fill it, people never see it
    setStatus("sending");

    const need = String(f.get("need") || "Not specified");
    const source = String(f.get("source") || "Not specified");
    // "How did you hear about us" travels inside the message so the existing
    // EmailJS template shows it without any change.
    const name = String(f.get("name") || "");
    const phone = String(f.get("phone") || "");
    const email = String(f.get("email") || "");
    const message = [
      String(f.get("message") || ""),
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "not given"}`,
      `Looking for: ${need}`,
      `How they found us: ${source}`,
      `Sent from: ${window.location.pathname}`,
    ].join("\n");
    setDraft(`Enquiry from the Tekton website\n\n${message}`);

    try {
      await emailjs.send(
        "service_kg85zgf",
        "template_9qhyf5n",
        {
          // The EmailJS template is addressed to the business inbox, copies
          // the customer on {{email}} when they gave one, and prints
          // {{name}}, {{email}}, {{phone}} and {{location}} in the body.
          // The whole enquiry travels in {{location}} so it is always shown.
          name,
          email,
          phone,
          location: message,
          subject: `Website enquiry: ${need}`,
          message,
        },
        "fV4WHwbYECoh0ynzd",
      );
      window.gtag?.("event", "generate_lead", { need, lead_source: source, page_path: window.location.pathname });
      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error("Enquiry failed to send", err);
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <h3>Enquiry sent.</h3>
        <p>
          We will call you back during working hours ({site.hours.days}, {site.hours.label}). If it is urgent, call{" "}
          <a href={site.phoneHref}>{site.phone}</a>.
        </p>
        <button type="button" className="btn btn--line" onClick={() => setStatus("idle")}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} id="quote">
      <div className="form__row">
        <label>
          Your name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required pattern="[0-9+ ()-]{8,}" />
        </label>
      </div>
      <div className="form__row">
        <label>
          <span>
            Email <span className="form__opt">(optional)</span>
          </span>
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label>
          What do you need?
          <select name="need" defaultValue={interest}>
            <option value="">Choose one</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Complete office fit-out">Complete office fit-out</option>
            <option value="Something else">Something else</option>
          </select>
        </label>
      </div>
      <label>
        Tell us about the job
        <textarea name="message" rows={4} required placeholder="Seat count or room sizes, location, and when you need it" />
      </label>
      <label>
        How did you hear about us?
        <select name="source" defaultValue="">
          <option value="">Choose one</option>
          {SOURCES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="form__trap" aria-hidden="true">
        Company website
        <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      {status === "error" && (
        <div className="form__error" role="alert">
          <p>The enquiry did not send from this page. Nothing you typed is lost.</p>
          <a className="btn btn--ink" href={whatsappLink(draft)} data-track="click_whatsapp" data-track-at="form-fallback" rel="noopener">
            Send it on WhatsApp instead
          </a>
        </div>
      )}

      <button className="btn btn--ink" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
