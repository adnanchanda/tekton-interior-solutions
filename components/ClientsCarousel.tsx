"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const clients = [
  { name: "Tata Motors", logo: "/tataMotors.png" },
  { name: "TCS", logo: "/tcs.png" },
  { name: "Toyota", logo: "/toyota.png" },
  { name: "Samsung", logo: "/samsung.png" },
  { name: "Larsen & Toubro", logo: "/larsenToubro.png" },
  { name: "Bajaj Finance", logo: "/bajajFinance.png" },
  { name: "Bajaj Allianz", logo: "/bajajAllianz.png" },
  { name: "Honeywell", logo: "/honeywell.png" },
  { name: "Exide", logo: "/exide.png" },
  { name: "Volkswagen", logo: "/volkswagen.png" },
  { name: "Wardwizard", logo: "/wardwizard.png" },
  { name: "Thermax Global", logo: "/thermaxGlobal.png" },
  { name: "Finolex Cables", logo: "/finolexCables.png" },
];

export default function ClientsCarousel() {
  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ca92b] to-[#b7eb3d]">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to serve some of the world's most respected companies with our premium office furniture solutions.
          </p>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative">
          <div className="flex space-x-8 animate-scroll">
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % clients.length) * 0.05 }}
                className="flex-shrink-0"
              >
                <Card className="w-48 h-32 flex items-center justify-center p-6 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-100 group">
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                      sizes="200px"
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#8ca92b]">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#8ca92b]">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#8ca92b]">8+</div>
              <div className="text-gray-600">Years of Trust</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}