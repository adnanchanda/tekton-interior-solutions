"use client";

import Script from "next/script";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import About from "@/components/About";
import ClientsCarousel from "@/components/ClientsCarousel";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QHBQGXNWR8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QHBQGXNWR8');
        `}
      </Script>

      <main className="overflow-x-hidden">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Products Section */}
        <Products />

        {/* About Section */}
        <About />

        {/* Clients Section */}
        <ClientsCarousel />

        {/* Contact Section */}
        <ContactForm />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}