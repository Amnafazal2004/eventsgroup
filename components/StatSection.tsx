  // "use client";

  // import { motion } from "framer-motion";
  // import { useScrollAnimation } from "@/hooks/useScrollAnimation";
  // import CountUp from "react-countup";

  // // Each bar has its own visual height (px) for display
  // const stats = [
  //   { value: 15, label: "Years Experience", height: 95 },
  //   { value: 15, label: "Team Members", height: 95 },
  //   { value: 121, label: "Global Clients", height: 220 },
  //   { value: 355, label: "Happy Customers", height: 300 },
  // ]; 

  // const StatSection = () => {
  //   const { ref, isVisible } = useScrollAnimation();

  //   return (
  //   <section className="py-20 lg:py-32" ref={ref}>
  //       <div className="max-w-6xl mx-auto rounded-xl bg-[rgb(239,232,232)] px-6 py-15">

  //         <div className="flex justify-center items-end gap-1">

  //           {stats.map((stat, index) => (
  //             <div
  //               key={index}
  //               // className="w-28 sm:w-36 md:w-44 lg:w-65 h-[340px] flex items-end"
  //               className="w-33 sm:w-43 md:w-53 lg:w-65 h-[340px] flex items-end" //boxes wil take this width
  //             >
  //               <motion.div
  //                 initial={{ scaleY: 0 }} 
  //                 animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
  //                 transition={{ duration: 1.2, ease: "easeInOut" }}
  //                 style={{ transformOrigin: "bottom", height: `${stat.height}px` }}
  //                 className="w-full bg-black flex flex-col justify-between p-4"
  //               >
  //                 <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
  //                   {isVisible && (
  //                     <CountUp start={0} end={stat.value} duration={1.5} />
  //                   )}
  //                   +
  //                 </h4>
  //                 <h1 className="text-white text-xs sm:text-sm text-end mb-2">
  //                   {stat.label}
  //                 </h1>
  //               </motion.div>
  //             </div>
  //           ))}

  //         </div>
  //       </div>
  //     </section>
  //   )
  // };

  // export default StatSection;
import { useRef, useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: 121, label: "Years Experience", suffix: "+" },
  { value: 244, label: "Creative Solutions", suffix: "+" },
  { value: 181, label: "Creative Personnel", suffix: "" },
  { value: 355, label: "Happy Customers", suffix: "+" },
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
    <section className="py-24 lg:py-32 bg-gradient-orange relative overflow-hidden" ref={ref}>
      {/* Decorative animated shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-background/10 rounded-full animate-spin-slow" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-background/10 rounded-full animate-float" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-background/10 rounded-full animate-bounce-subtle" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <span className={`text-sm uppercase tracking-[0.3em] text-background/60 font-medium transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          // The Numbers Speak
        </span>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="text-6xl lg:text-7xl font-display font-black text-background">
                <Counter target={s.value} inView={isVisible} suffix={s.suffix} />
              </div>
              <p className="text-background/70 font-medium mt-2 uppercase tracking-wider text-sm">
                {s.label}
              </p>
              {/* Subtle separator line */}
              <div className={`mx-auto mt-4 h-0.5 bg-background/20 rounded-full transition-all duration-1000 ease-out ${isVisible ? "w-16" : "w-0"}`} style={{ transitionDelay: `${0.5 + i * 0.15}s` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
