"use client"
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
