import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ActionBar from "@/components/ActionBar";
import Enhance from "@/components/Enhance";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { businessSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

// One family. The width axis gives the condensed display voice and the
// regular text voice from the same file.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

// Paste the codes from Google Search Console and Bing Webmaster Tools into
// Vercel as environment variables. Nothing is rendered until they are set.
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
// Google is verified by the file public/googlecd09ead64c285a6e.html.
// Bing is verified by this meta tag; the value is public, not a secret.
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "449B6DE21F705752F04B990F3705F305";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Furniture Manufacturer in Pune | Tekton Interior Solutions",
    template: "%s | Tekton",
  },
  description: site.metaDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Furniture manufacturer",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: "Furniture Manufacturer in Pune for Offices and Homes",
    description: site.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture Manufacturer in Pune for Offices and Homes",
    description: site.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#8fae2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={archivo.variable}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ActionBar />
        <Enhance />
        <JsonLd data={[businessSchema(), websiteSchema()]} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gaId}');`}
        </Script>
      </body>
    </html>
  );
}
