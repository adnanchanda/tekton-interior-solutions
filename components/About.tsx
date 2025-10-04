"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Happy Clients",
    description: "Satisfied customers across industries",
  },
  {
    icon: Award,
    number: "8+",
    label: "Years Experience",
    description: "Proven track record in office solutions",
  },
  {
    icon: CheckCircle,
    number: "1000+",
    label: "Projects Completed",
    description: "Successfully delivered office transformations",
  },
  {
    icon: Zap,
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock customer assistance",
  },
];

const values = [
  {
    title: "Quality First",
    description: "We never compromise on the quality of materials and craftsmanship in our products.",
  },
  {
    title: "Customer Centric",
    description: "Every decision we make is guided by our commitment to customer satisfaction.",
  },
  {
    title: "Innovation",
    description: "We continuously innovate to bring you the latest in office furniture design.",
  },
  {
    title: "Sustainability",
    description: "Environmentally responsible practices in all our manufacturing processes.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
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
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ca92b] to-[#b7eb3d]">
              Tekton
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enhancing success through innovative office furniture solutions that combine elegance, functionality, and comfort.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Workspaces Since 2017
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Tekton Interior Solutions has been at the forefront of office furniture innovation for over a decade. 
              We specialize in creating workspaces that not only look exceptional but also enhance productivity and well-being.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our comprehensive range includes everything from ergonomic seating solutions to modular workstations, 
              storage systems, and executive furniture. Each piece is carefully crafted to meet the evolving needs of modern businesses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <h4 className="font-semibold text-[#8ca92b] text-lg">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-photo.png"
                alt="Modern Office Space by Tekton Interior Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8ca92b]/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8ca92b]">8+</div>
                <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-[#8ca92b]/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#8ca92b]" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-800">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}