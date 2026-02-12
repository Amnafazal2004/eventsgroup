"use client";

import Image from "next/image";
import project3 from "@/assets/project-3.webp";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServicesSection = () => {
  return (
    <section className="w-full bg-black text-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Image with border */}
        <div className="flex flex-col items-center">
          {/* Thin gray line on top */}
          <div className="w-24 h-[1px] bg-gray-500 mb-6"></div>
          
          <div className="relative w-full max-w-sm h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={project3}
              alt="Services Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center px-2 md:px-0">
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            What We Do
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            
            <AccordionItem value="item-1" className="border-gray-700">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                Event Management
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm">
                We design and execute conferences, exhibitions, corporate
                events, and executive round tables with precision and
                creativity, ensuring memorable experiences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-gray-700">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                Creative & Strategic Solutions
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm">
                From branding to strategic planning, we create innovative
                solutions tailored to elevate your brand and business
                presence in competitive markets.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
