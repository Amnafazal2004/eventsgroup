"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import blog3 from "@/assets/blog-3.webp";

const text =
  "Beyond, Boundaries, Beyond, Brands, Sparking, Ideas, Igniting, Success.";

const OurMissionSection = () => {
  const words = text.split(" ");

  return (
    <section className="w-full pt-10 bg-black overflow-hidden">
      
      {/* Animated Heading Section */}
      <div className="py-20 px-6 flex items-center justify-center text-center">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold italic max-w-4xl leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-3 text-gray-500"
              variants={{
                hidden: { color: "#6b7280" },
                visible: {
                  color: "#ffffff",
                  transition: { duration: 0.8 },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* 🖼 Image Section */}
      <div className="relative w-full h-[70vh]">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={blog3}
            alt="Mission Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* 📦 Center Mission Box */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-6"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="bg-white max-w-2xl w-full p-8 md:p-12 text-center rounded-2xl shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our mission is to craft meaningful and unforgettable experiences
              that inspire innovation, spark creativity, and drive lasting
              success. We go beyond boundaries to transform ideas into impactful
              realities.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default OurMissionSection;
