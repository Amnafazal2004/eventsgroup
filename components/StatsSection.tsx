"use client";
import { useRef, useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "motion/react";
import CountUp from "react-countup";

// Each bar has its own visual height (px) for display
  const stats = [
    { value: 15, label: "Years Experience", height: 95 },
    { value: 15, label: "Team Members", height: 95 },
    { value: 121, label: "Global Clients", height: 220 },
    { value: 355, label: "Happy Customers", height: 300 },
  ]; 
const Counter = ({ target, inView, suffix }: { target: number; inView: boolean; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-12 bg-gradient-orange relative overflow-hidden" ref={ref}>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <span className={`text-sm uppercase tracking-[0.3em] text-background/60 font-medium transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          // The Numbers Speak
        </span>

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
  );
};

export default StatsSection;
