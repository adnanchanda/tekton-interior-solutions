import type { Metadata } from "next";
import { Crumbs } from "@/components/blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Tekton Interior Solutions handles the details you send through this website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Crumbs trail={[{ name: "Privacy policy" }]} />
      <div className="wrap prose-head">
        <h1>Privacy policy</h1>
      </div>
      <div className="wrap article article--single">
        <div className="article__main">
          <section>
            <h2>What we collect</h2>
            <p>
              When you send the enquiry form we receive the name, phone number, email address and message you type
              in, and your answer to how you heard about us. We use these only to reply to your enquiry and prepare a
              quote.
            </p>
          </section>
          <section>
            <h2>Services this site uses</h2>
            <p>
              Enquiries are delivered to our inbox by EmailJS. Visits are measured with Google Analytics, which uses
              cookies to count pages viewed and buttons clicked. The contact page shows a Google Map. Each of these
              services handles data under its own privacy policy.
            </p>
          </section>
          <section>
            <h2>What we do not do</h2>
            <p>We do not sell or share your details with anyone for marketing.</p>
          </section>
          <section>
            <h2>Ask us to delete your details</h2>
            <p>
              Email <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={site.phoneHref}>{site.phone}</a>{" "}
              and we will delete the enquiry details we hold about you.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
