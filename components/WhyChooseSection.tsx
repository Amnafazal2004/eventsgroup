"use client";
import { Brain, Search, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Brain, title: "AI-Centered", desc: "We think about how AI can provide more efficiency and personalization, driving process innovation." },
  { icon: Search, title: "Embedded Research", desc: "We use data to strengthen hypotheses and identify risks. Our research team ensures the customer has the loudest voice." },
  { icon: Layers, title: "Systems First", desc: "Process is at the core of every partnership. We help clients sustain new growth with systems and infrastructure." },
];

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <span className={`section-label transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          // Why Choose EventsFirstGroup
        </span>

        {/* Centered Cards */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-8 hover-lift group cursor-default transition-all duration-700 text-center flex flex-col items-center w-full sm:w-[300px] ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + i * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-6">
                <f.icon className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl mt-6 text-white">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {f.desc}
              </p>

              {/* Animated underline */}
              <div className="mt-4 h-0.5 bg-white/20 rounded-full overflow-hidden w-full">
                <div className="h-full bg-white w-0 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
