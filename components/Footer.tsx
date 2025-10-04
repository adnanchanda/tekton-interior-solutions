"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Products", href: "#products" },
    { name: "Our Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Office Furniture", href: "#" },
    { name: "Custom Solutions", href: "#" },
    { name: "Interior Design", href: "#" },
    { name: "Consultation", href: "#" },
  ],
  support: [
    { name: "Customer Support", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Installation", href: "#" },
    { name: "Maintenance", href: "#" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export default function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8ca92b]/10 via-transparent to-[#b7eb3d]/10" />
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#8ca92b] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-[#b7eb3d] rounded-full blur-3xl opacity-20" />
      </div>

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 169, 43, 0.3) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          {/* Top decorative line */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-[#8ca92b] to-transparent mb-16"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <motion.div
                className="flex items-center space-x-3 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="Tekton Interior Solutions Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 transition-transform group-hover:rotate-6"
                  />
                  <div className="absolute -inset-2 bg-[#8ca92b]/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Tekton Interior Solutions
                </h3>
              </motion.div>

              <motion.p
                className="text-gray-300 text-lg leading-relaxed max-w-md relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Enhancing success through{" "}
                <span className="text-[#8ca92b] font-semibold">innovative</span>{" "}
                office furniture solutions. We create workspaces that inspire{" "}
                <span className="text-[#b7eb3d] font-semibold">
                  productivity
                </span>{" "}
                and reflect your company's values.
                <motion.div
                  className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#8ca92b] to-[#b7eb3d] rounded-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.p>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-3 text-gray-300 group hover:text-[#b7eb3d] transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 bg-[#8ca92b]/10 rounded-lg flex items-center justify-center group-hover:bg-[#8ca92b]/20 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-[#8ca92b] flex-shrink-0" />
                  </div>
                  <span>Pune, Maharashtra, India</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 text-gray-300 group hover:text-[#b7eb3d] transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 bg-[#8ca92b]/10 rounded-lg flex items-center justify-center group-hover:bg-[#8ca92b]/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-[#8ca92b] flex-shrink-0" />
                  </div>
                  <span>+91 7385036389</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 text-gray-300 group hover:text-[#b7eb3d] transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 bg-[#8ca92b]/10 rounded-lg flex items-center justify-center group-hover:bg-[#8ca92b]/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-[#8ca92b] flex-shrink-0" />
                  </div>
                  <span>irfanchanda0@gmail.com</span>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                      boxShadow: "0 0 20px rgba(139, 169, 43, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-[#8ca92b] hover:to-[#b7eb3d] rounded-xl flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-xl relative overflow-hidden"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#8ca92b] to-[#b7eb3d] opacity-0 group-hover:opacity-100"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Company
                </h4>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#8ca92b] to-[#b7eb3d] rounded-full" />
              </div>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-300 hover:text-[#8ca92b] transition-all duration-300 hover:translate-x-2 transform block group relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <motion.div className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#8ca92b] group-hover:w-full transition-all duration-300" />
                    </motion.button>
                  </motion.li>
                ))}
              </ul>

              <div className="relative pt-4">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Services
                </h4>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#8ca92b] to-[#b7eb3d] rounded-full" />
              </div>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 4) * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-[#8ca92b] transition-all duration-300 hover:translate-x-2 transform block group relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <motion.div className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#8ca92b] group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="relative">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Support
                </h4>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#8ca92b] to-[#b7eb3d] rounded-full" />
              </div>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-[#8ca92b] transition-all duration-300 hover:translate-x-2 transform block group relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <motion.div className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#8ca92b] group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="pt-6 p-4 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <div className="w-2 h-2 bg-[#8ca92b] rounded-full mr-2 animate-pulse" />
                  Business Hours
                </h5>
                <div className="text-gray-300 space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Monday - Saturday</span>
                    <div className="w-8 h-px bg-gray-600" />
                  </div>
                  <p className="text-[#8ca92b] font-semibold text-lg">
                    9:00 AM - 7:00 PM
                  </p>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="text-red-400 text-sm">Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Animated divider */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-[#8ca92b] to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          <div className="py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <motion.p
                className="text-gray-300 text-center md:text-left"
                whileHover={{ color: "#8ca92b" }}
                transition={{ duration: 0.3 }}
              >
                © 2024{" "}
                <span className="font-semibold">Tekton Interior Solutions</span>
                . All rights reserved.
              </motion.p>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (item, index) => (
                    <motion.a
                      key={item}
                      href="#"
                      className="text-gray-300 hover:text-[#8ca92b] transition-all duration-300 relative group"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                      <motion.div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8ca92b] group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
