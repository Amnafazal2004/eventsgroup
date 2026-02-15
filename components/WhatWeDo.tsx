"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import project3 from "@/assets/project-4.webp";
import project1 from "@/assets/project-1.webp";
import { guttie } from "@/lib/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServicesSection = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.h2
          className={`text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-24 ${guttie.className}`}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          WHAT WE DO
        </motion.h2>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
    {/* LEFT SIDE — TALLER CREDIT CARD FAN */}
<motion.div
  className="relative w-full lg:w-[55%] flex justify-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  <div className="relative w-[460px] h-[420px]">

    {/* Back Card */}
    <motion.div
      className="absolute w-[250px] h-[360px] rounded-2xl overflow-hidden shadow-xl"
      initial={{ rotate: 0, x: 140, y: 160, opacity: 0 }}
      whileInView={{ rotate: 10, x: 40, y: 60, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ left: "80px", zIndex: 1 }}
    >
      <Image
        src={project3}
        alt="project-back"
        fill
        className="object-cover"
      />
    </motion.div>

    {/* Front Card */}
    <motion.div
      className="absolute w-[250px] h-[360px] rounded-2xl overflow-hidden shadow-2xl"
      initial={{ rotate: 0, x: 180, y: 200, opacity: 0 }}
      whileInView={{ rotate: 22, x: 120, y: 10, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.15,
      }}
      style={{ left: "140px", zIndex: 2 }}
    >
      <Image
        src={project1}
        alt="project-front"
        fill
        className="object-cover"
      />
    </motion.div>

  </div>
</motion.div>

          {/* RIGHT SIDE — ACCORDION (NO BG) */}
          <motion.div
            className="w-full lg:w-[45%]"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-6">

              <AccordionItem
                value="item-1"
                className="border-b border-gray-700 pb-5"
              >
                <AccordionTrigger className={`text-2xl font-bold hover:no-underline ${guttie.className}`}>
                  EVENT MANAGEMENT
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 font-[fahkwang] text-base mt-3 leading-relaxed">
                  We design and execute conferences, exhibitions, corporate
                  events, and executive round tables with precision and
                  creativity, ensuring memorable experiences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b border-gray-700 pb-5"
              >
                <AccordionTrigger className={`text-2xl font-bold hover:no-underline ${guttie.className}`}>
                  CREATIVE AND STRATEGIC SOLUTIONS
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 font-[fahkwang] text-base mt-3 leading-relaxed">
                  From branding to strategic planning, we create innovative
                  solutions tailored to elevate your brand and business
                  presence in competitive markets.
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
