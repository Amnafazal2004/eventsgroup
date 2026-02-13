// "use client";

// import Image from "next/image";
// import project3 from "@/assets/project-4.webp";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const ServicesSection = () => {
//   return (
//     <section className="w-full bg-black text-white ">
//       <div className="container mx-auto px-6 lg:px-12">

//         {/* Thin gray border box with top & bottom borders */}
//         <div className="relative border-t border-b border-gray-500/40 py-12">

//           <div className="flex flex-col md:flex-row items-center gap-8">

//             {/* Left Half: Image */}
//             <div className="w-full md:w-1/2 flex justify-center items-center relative">
//               <div className="relative w-full max-w-sm md:max-w-lg h-90 md:h-[28rem] rounded-lg overflow-hidden">
//                 <Image
//                   src={project3}
//                   alt="Services Image"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>

//             {/* Split line in the middle */}
//             <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-500/40"></div>

//             {/* Right Half: Heading + Accordion */}
//             <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 py-4 md:py-0 space-y-6">
              
//               {/* Heading */}
//               <h2 className="text-xl md:text-2xl text-center">
//                 What We Do
//               </h2>

//               {/* Accordions */}
//               <Accordion type="single" collapsible className="w-full space-y-4 mt-17">
                
//                 <AccordionItem value="item-1" className="border-gray-600 rounded-md">
//                   <AccordionTrigger className="text-xl md:text-2xl font-bold hover:no-underline">
//                     EVENT MANAGEMENT
//                   </AccordionTrigger>
//                   <AccordionContent className="text-gray-300 text-sm md:text-base">
//                     We design and execute conferences, exhibitions, corporate
//                     events, and executive round tables with precision and
//                     creativity, ensuring memorable experiences.
//                   </AccordionContent>
//                 </AccordionItem>

//                 <AccordionItem value="item-2" className="border-gray-600 rounded-md">
//                   <AccordionTrigger className="text-xl md:text-2xl font-bold hover:no-underline">
//                    CREATIVE AND STARTEGIC SOLUTIONS
//                   </AccordionTrigger>
//                   <AccordionContent className="text-gray-300 text-sm md:text-base">
//                     From branding to strategic planning, we create innovative
//                     solutions tailored to elevate your brand and business
//                     presence in competitive markets.
//                   </AccordionContent>
//                 </AccordionItem>

//               </Accordion>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import project3 from "@/assets/project-4.webp";
import project1 from "@/assets/project-1.webp";
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

        {/* Heading with scroll animation */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-22"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          What We Do
        </motion.h2>
       
        {/* Main container */}
        <div className="relative max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            {/* Left Card - Accordion */}
            <motion.div
              className="relative w-full lg:w-[65%] bg-black rounded-[2rem] p-8 md:p-10 shadow-2xl border border-gray-800"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4 mt-2">
              
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 1 }}
                >
                  <AccordionItem value="item-1" className="border-gray-600 rounded-md">
                    <AccordionTrigger className="text-xl md:text-2xl font-bold hover:no-underline">
                      EVENT MANAGEMENT
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-200 text-sm md:text-base">
                      We design and execute conferences, exhibitions, corporate
                      events, and executive round tables with precision and
                      creativity, ensuring memorable experiences.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <AccordionItem value="item-2" className="border-gray-600 rounded-md">
                    <AccordionTrigger className="text-xl md:text-2xl font-bold hover:no-underline">
                      CREATIVE AND STRATEGIC SOLUTIONS
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-200 text-sm md:text-base">
                      From branding to strategic planning, we create innovative
                      solutions tailored to elevate your brand and business
                      presence in competitive markets.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>

              </Accordion>
            </motion.div>

            {/* Right Image - Gradient & floating */}
            <motion.div
              className="relative w-full lg:w-[55%]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Orange gradient card */}
              <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
                <div className="relative w-full h-full">
                  <Image
                    src={project1}
                    alt="project1"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Optional overlay text */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2">
                  <p className="text-white text-sm font-medium">Featured</p>
                </div>
              </div>

              {/* Bottom floating card */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 w-[280px] md:w-[320px] bg-white rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-black">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project3} 
                    alt="project2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
