"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      if (scrollContainerRef.current.scrollLeft <= 0) {
        // Reset to end when reaching start
        scrollContainerRef.current.scrollLeft =
          scrollContainerRef.current.scrollWidth / 2;
      }
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      if (
        scrollContainerRef.current.scrollLeft +
          scrollContainerRef.current.clientWidth >=
        scrollContainerRef.current.scrollWidth - 5
      ) {
        // Reset to start when reaching end
        scrollContainerRef.current.scrollLeft =
          scrollContainerRef.current.scrollWidth / 4;
      }
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollWidth / 4;
    }
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
      isMenuOpen && 
      !(event.target as HTMLElement).closest("nav")
      ) {
      setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);



  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const aboutSection = () => {
    return (
      <motion.section
        id="about"
        className="p-4 md:p-12 bg-white text-left min-h-[500px] lg:min-h-screen py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-seria text-3xl md:text-5xl font-bold text-left"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          About Us
        </motion.h2>
        <motion.div
          className="mt-4 max-w-4xl mx-auto text-gray-700 text-left p-2 md:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3, delayChildren: 0.2 },
            },
          }}
        >
          {[
            "Tekton Interior solutions exists in the Furniture industry since May 2017 with a huge factory outlet having modern and world-class machine setup. The location of the company is very near and reachable to city area and well-connected roads to the major cities in Maharashtra.",
            "We have a vast customer base for Office Furniture as well as Residential Furniture. Factory Address:- Opp. Sinhgad college Behind Ganraj Marble, Kondhwa Annexe, Yewlewadi, Pune-48",
            "We are leading manufacturers of seating system chairs, Office chair, visitor chairs, and Sofas in a very short span of time. We have achieved our place in this industry. After a huge success, we have moved to Modular furniture of Office Workstation, Executive Table, Reception Table, Conference Table, Pantry Table, and Desking systems, etc.",
            "In short, we are a ONE-stop shop for all your requirements to set up a new Office / Workstation.",
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-base md:text-xl mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </motion.section>
    );
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center p-4 md:p-6 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Tekton Logo" width={50} height={50} />
          <h1 className="text-sm md:text-xl font-bold text-[#1d1d1d]">
            Tekton Interior Solutions
          </h1>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full md:w-auto md:flex transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 space-y-2 md:space-y-0">
            <a
              href="#products"
              className="hover:text-[#e95151] text-[#8ca92b] py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#about"
              className="hover:text-[#e95151] text-[#8ca92b] py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#clients"
              className="hover:text-[#e95151] text-[#8ca92b] py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Clients
            </a>
            <a
              href="#contact"
              className="hover:text-[#e95151] text-[#8ca92b] py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row min-h-[600px] lg:h-screen">
<motion.header 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="relative h-[300px] md:h-[500px] lg:h-auto bg-cover bg-center md:w-1/2 w-full"
>
  <motion.div 
    className="absolute inset-0 bg-opacity-50 justify-center flex flex-col p-6 md:p-20 gap-3 md:gap-5"
  >
    <motion.h1 
      variants={textRevealVariants}
      initial="hidden"
      animate="visible"
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-tight"
    >
      Transform Your Workspace
    </motion.h1>
    
    <motion.p 
      variants={textRevealVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3 }}
      className="mt-1 text-lg md:text-2xl text-black"
    >
      A perfect blend of elegance and comfort
    </motion.p>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-8"
    >
      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        href="/documents/TektonCatalog.pdf"
        download="TektonCatalog.pdf"
        className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-[#8ca92b] hover:bg-[#b7eb3d] text-white rounded-xl transition-colors duration-200 shadow-md text-sm md:text-base"
        onClick={(e) => {
          if (!window.confirm("Download product catalog?")) {
            e.preventDefault();
          }
        }}
      >
         <svg
              className="w-4 h-4 md:w-5 md:h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
         Download Product Catalog
      </motion.a>
    </motion.div>
  </motion.div>
</motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:w-1/2 w-full h-[300px] md:h-[500px] lg:h-auto grid grid-cols-3 grid-rows-3 gap-2 md:gap-4 p-2 md:p-4"
        >
          {[
            {
              src: "/cabinet.png",
              alt: "Product 1",
              className: "col-span-2 row-span-1",
            },
            {
              src: "/subtleChair.png",
              alt: "Product 2",
              className: "col-span-1 row-span-2",
            },
            {
              src: "/subtleCubicle.png",
              alt: "Product 3",
              className: "col-span-1 row-span-1",
            },
            { color: "bg-[#b7eb3d]", className: "" },
            {
              src: "/seatingTwo.png",
              alt: "Product 4",
              className: "col-span-2 row-span-1",
            },
            { color: "bg-[#8ca92b]", className: "" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className={`relative overflow-hidden rounded-lg ${item.className}`}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              ) : (
                <div className={`w-full h-full ${item.color}`}></div>
              )}
            </motion.div>
          ))}
        </motion.section>
      </div>

      {/* Products Section */}
      <section
        id="products"
        className="p-4 md:p-12 text-center min-h-[500px] lg:min-h-screen py-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold">Our Products</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              name: "Ergonomic Chairs",
              desc: "Adjustable chair for maximum comfort",
              img: "/highback.png",
            },
            {
              name: "Office Workstation",
              desc: "Sleek design for workspace",
              img: "/cubicle.png",
            },
            {
              name: "Premium Sofa Set",
              desc: "Handcrafted luxury sofas with premium upholstery and customizable designs",
              img: "/sofa.png",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-white hover:shadow-md transition-shadow"
            >
              <div className="h-48 md:h-64 w-full">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <h3 className="mt-4 text-lg md:text-xl font-bold">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      {aboutSection()}

      {/* Testimonials/Clients Section */}
      <section id="clients" className="p-4 md:p-12 text-center relative py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Our Clients
        </h2>

        <div className="relative overflow-hidden">
          {/* Left Scroll Button */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 md:p-2 rounded-full shadow-lg z-10 hover:bg-white transition-colors"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Scrollable Content */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scroll-container flex space-x-6 md:space-x-12 px-6 md:px-10 py-4 items-center"
          >
            {/* Duplicate images for infinite scroll effect */}
            {[...Array(2)].flatMap((_, i) => (
              <React.Fragment key={i}>
                <img
                  src="/tcs.png"
                  alt="Client 1"
                  className="h-10 md:h-16 w-auto transition-all"
                />
                <img
                  src="/tataMotors.png"
                  alt="Client 2"
                  className="h-10 md:h-16 w-auto transition-all"
                />
                <img
                  src="/honeywell.png"
                  alt="Client 3"
                  className="h-10 md:h-16 w-auto transition-all"
                />
                <img
                  src="/samsung.png"
                  alt="Client 4"
                  className="h-10 md:h-16 w-auto transition-all"
                />
                <img
                  src="/bajajFinance.png"
                  alt="Client 5"
                  className="h-10 md:h-16 w-auto transition-all"
                />
                <img
                  src="/bajajAllianz.png"
                  alt="Client 6"
                  className="h-10 md:h-16 w-auto transition-all"
                />
                <img
                  src="/larsenToubro.png"
                  alt="Client 7"
                  className="h-10 md:h-16 w-auto transition-all"
                />
                <img
                  src="/volkswagen.png"
                  alt="Client 8"
                  className="h-10 md:h-16 w-auto transition-all"
                />
                <img
                  src="/exide.png"
                  alt="Client 9"
                  className="h-10 md:h-16 w-auto transition-all"
                />
                <img
                  src="/wardwizard.png"
                  alt="Client 10"
                  className="h-10 md:h-16 w-auto transition-all"
                />
                <img
                  src="/toyota.png"
                  alt="Client 11"
                  className="h-10 md:h-16 w-auto transition-all"
                />
              </React.Fragment>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 md:p-2 rounded-full shadow-lg z-10 hover:bg-white transition-colors"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Hide scrollbar for all browsers */}

        {/* With this: */}
        <style jsx global>{`
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
          .scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* Contact Form Section */}
      <div
        className="flex justify-center items-center py-16 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/subtleCubicle.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative bg-white/70 p-4 md:p-8 rounded-3xl shadow-lg max-w-xs md:max-w-sm w-full mx-4 text-center backdrop-blur-md">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">
            Best Price Guaranteed!
          </h2>
          <p className="text-gray-700 font-semibold mb-4 text-sm md:text-base">
            Instant Quote with Design
          </p>

          <form className="space-y-4 md:space-y-6">
            <input
              type="text"
              placeholder="Name*"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-400 text-sm md:text-base"
              required
            />
            <input
              type="tel"
              placeholder="Phone*"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-400 text-sm md:text-base"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-400 text-sm md:text-base"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-400 text-sm md:text-base"
            />
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 md:py-3 rounded-2xl text-base md:text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              REQUEST A CALL BACK!
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer
        id="contact"
        className="p-4 md:p-6 text-white text-center bg-[#1d1d1d] py-8 md:py-12"
      >
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto gap-2">
          <Image
            src="/logo.png"
            alt="Tekton Logo"
            width={50}
            height={50}
            className="mb-2"
          />
          <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Us</h3>
          <p className="m-1 md:m-2 text-sm md:text-base">
            Serial Number: 6/1b/1, Kamte Fabrication, Opposite Sinhgad College,
            Near CNG Pump, Yewlewadi, Pune - 411048
          </p>
          <p className="m-1 md:m-2 text-sm md:text-base">
            Email: irfanchand0a@gmail.com
          </p>
          <p className="m-1 md:m-2 text-sm md:text-base">
            Phone: +91 7385036389
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-xs md:text-sm text-gray-400">
            © {new Date().getFullYear()} Tekton Interior Solutions. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
