"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CountUp from "react-countup";

// Each bar has its own visual height (px) for display
const stats = [
  { value: 15, label: "Years Experience", height: 95 },
  { value: 15, label: "Team Members", height: 95 },
  { value: 121, label: "Global Clients", height: 220 },
  { value: 355, label: "Happy Customers", height: 300 },
];

const StatSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
   <section className="py-20 lg:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto rounded-xl bg-[rgb(239,232,232)] px-6 py-15">

        <div className="flex justify-center items-end gap-1">

          {stats.map((stat, index) => (
            <div
              key={index}
              // className="w-28 sm:w-36 md:w-44 lg:w-65 h-[340px] flex items-end"
              className="w-33 sm:w-43 md:w-53 lg:w-65 h-[340px] flex items-end" //boxes wil take this width
            >
              <motion.div
                initial={{ scaleY: 0 }} 
                animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{ transformOrigin: "bottom", height: `${stat.height}px` }}
                className="w-full bg-black flex flex-col justify-between p-4"
              >
                <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                  {isVisible && (
                    <CountUp start={0} end={stat.value} duration={1.5} />
                  )}
                  +
                </h4>
                <h1 className="text-white text-xs sm:text-sm text-end mb-2">
                  {stat.label}
                </h1>
              </motion.div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
};

export default StatSection;
