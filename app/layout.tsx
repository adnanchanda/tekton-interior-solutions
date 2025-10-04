import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tekton Interior Solutions - Premium Office Furniture in Pune",
    template: "%s | Tekton Interior Solutions",
  },
  description: "Transform your workspace with Tekton Interior Solutions. Premium office furniture, ergonomic chairs, modular workstations, and custom interior solutions in Pune, Maharashtra. Enhancing success through innovative design.",
  keywords: [
    "office furniture",
    "interior solutions",
    "ergonomic chairs",
    "modular workstations",
    "office design",
    "furniture manufacturer",
    "Pune",
    "Maharashtra",
    "commercial furniture",
    "workspace solutions"
  ],
  authors: [{ name: "Tekton Interior Solutions" }],
  creator: "Tekton Interior Solutions",
  publisher: "Tekton Interior Solutions",
  metadataBase: new URL("https://tektoninteriors.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tektoninteriors.com",
    title: "Tekton Interior Solutions - Premium Office Furniture",
    description: "Transform your workspace with premium office furniture and interior solutions. Serving businesses across Pune and Maharashtra.",
    siteName: "Tekton Interior Solutions",
    images: [
      {
        url: "/hero-photo.png",
        width: 1200,
        height: 630,
        alt: "Tekton Interior Solutions - Modern Office Furniture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekton Interior Solutions - Premium Office Furniture",
    description: "Transform your workspace with premium office furniture and interior solutions.",
    images: ["/hero-photo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#8ca92b" />
      </head>
      <body
        className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
