"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Premium Seating Solutions",
    description: "Ergonomic chairs designed for comfort and productivity in modern workspaces.",
    images: ["/seatingOne.png", "/subtleChair.png", "/seatingTwo.png"],
    features: ["Ergonomic Design", "Premium Materials", "Adjustable Settings", "Long-lasting Durability"],
  },
  {
    title: "Office Cubicles & Workstations",
    description: "Modular workstations that maximize space efficiency while maintaining privacy.",
    images: ["/subtleCubicle.png", "/cubicle.png"],
    features: ["Modular Design", "Space Efficient", "Cable Management", "Privacy Panels"],
  },
  {
    title: "Storage & Cabinet Solutions",
    description: "Comprehensive storage solutions for organized and clutter-free offices.",
    images: ["/cabinet.png"],
    features: ["Multi-functional Storage", "Secure Locking", "Modern Aesthetics", "Space Optimization"],
  },
  {
    title: "Lounge & Sofa Collection",
    description: "Comfortable seating for reception areas and collaborative spaces.",
    images: ["/sofa.png"],
    features: ["Contemporary Design", "Premium Upholstery", "Modular Options", "Easy Maintenance"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Products() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ca92b] to-[#b7eb3d]">
              Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of office furniture designed to enhance productivity and comfort in modern workspaces.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {products.map((product, index) => (
            <motion.div key={product.title} variants={cardVariants}>
              <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <div className="grid grid-cols-2 gap-2 h-full p-4">
                      {product.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`relative overflow-hidden rounded-lg ${
                            product.images.length === 1 ? "col-span-2" : 
                            imgIndex === 0 && product.images.length === 3 ? "col-span-2" : ""
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${product.title} ${imgIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>

                <CardContent className="p-6 lg:p-8">
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#8ca92b] transition-colors duration-300">
                    {product.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {product.description}
                  </CardDescription>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-[#8ca92b] rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-[#8ca92b] text-[#8ca92b] hover:bg-[#8ca92b] hover:text-white transition-all duration-300"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}