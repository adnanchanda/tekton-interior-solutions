"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, ArrowRight, Star, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImages = [
  { src: "/cabinet.png", alt: "Modern Office Cabinet" },
  { src: "/subtleChair.png", alt: "Ergonomic Office Chair" },
  { src: "/subtleCubicle.png", alt: "Office Workstation" },
  { src: "/seatingTwo.png", alt: "Premium Seating Solution" },
];

const floatingElements = [
  { x: "5%", y: "15%", delay: 0, size: "w-3 h-3" },
  { x: "85%", y: "10%", delay: 1, size: "w-2 h-2" },
  { x: "10%", y: "80%", delay: 2, size: "w-4 h-4" },
  { x: "90%", y: "75%", delay: 3, size: "w-2 h-2" },
  { x: "50%", y: "5%", delay: 4, size: "w-3 h-3" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-8, 8, -8],
    x: [-5, 5, -5],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  const handleDownload = () => {
    if (window.confirm("Download product catalog?")) {
      const link = document.createElement("a");
      link.href = "/documents/TektonCatalog.pdf";
      link.download = "TektonCatalog.pdf";
      link.click();
    }
  };

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} bg-[#8ca92b] rounded-full opacity-10`}
            style={{ left: element.x, top: element.y }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: element.delay }}
          />
        ))}
      </div>
      
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#b7eb3d]/10 to-[#8ca92b]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#8ca92b]/10 to-[#b7eb3d]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-screen flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-20 lg:py-20"
        >
          {/* Content Side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-6 mt-8 lg:mt-0">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-[#8ca92b]/10 text-[#8ca92b] px-4 py-2 rounded-full text-sm font-medium"
              >
                <Award className="w-4 h-4" />
                <span>8+ Years of Excellence</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
              >
                Transform Your{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ca92b] to-[#b7eb3d]">
                    Workspace
                  </span>
                  <motion.div
                    className="absolute -top-2 -right-6 hidden sm:block"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <Star className="w-6 h-6 text-[#b7eb3d] fill-current" />
                  </motion.div>
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Create inspiring work environments with our premium office furniture solutions.
                <span className="text-[#8ca92b] font-semibold"> Elegance meets functionality</span> in every piece.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
              >
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#8ca92b] to-[#b7eb3d] hover:from-[#b7eb3d] hover:to-[#8ca92b] text-white shadow-xl hover:shadow-2xl hover:shadow-[#8ca92b]/25 transition-all duration-300 text-base px-8 py-6"
                >
                  <div className="flex items-center space-x-3 relative z-10">
                    <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span className="font-semibold">Download Catalog</span>
                  </div>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-2 border-[#8ca92b] text-[#8ca92b] hover:bg-[#8ca92b] hover:text-white transition-all duration-300 text-base px-8 py-6"
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">Explore Products</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Button>
              </motion.div>

              {/* Stats */}
              {/* <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start gap-8 pt-12"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <div className="text-2xl sm:text-3xl font-bold text-[#8ca92b]">500</div>
                    <div className="text-[#b7eb3d] text-lg">+</div>
                  </div>
                  <div className="text-sm text-gray-500">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <div className="text-2xl sm:text-3xl font-bold text-[#8ca92b]">15</div>
                    <div className="text-[#b7eb3d] text-lg">+</div>
                  </div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <div className="text-2xl sm:text-3xl font-bold text-[#8ca92b]">98</div>
                    <div className="text-[#b7eb3d] text-lg">%</div>
                  </div>
                  <div className="text-sm text-gray-500">Satisfaction</div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>

          {/* Images Side */}
          <div className="flex-1 w-full max-w-2xl">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 lg:gap-6"
            >
              {heroImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={imageVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    index === 0 ? 'row-span-2' : 
                    index === 1 ? 'col-span-1' :
                    index === 2 ? 'col-span-1' :
                    'col-span-2'
                  }`}
                  style={{
                    height: index === 0 ? '400px' : 
                           index === 3 ? '180px' : '190px'
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  {/* Product Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">
                        {image.alt}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-gray-200"
            >
              <div className="flex items-center gap-2 text-gray-500">
                <Users className="w-4 h-4" />
                <span className="text-sm">Trusted by 500+ Companies</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Award className="w-4 h-4" />
                <span className="text-sm">Premium Quality</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}