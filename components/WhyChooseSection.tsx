"use client"
import { Brain, Search, Layers, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Brain, title: "AI-Centered", desc: "We think about how AI can provide more efficiency and personalization, driving process innovation." },
  { icon: Search, title: "Embedded Research", desc: "We use data to strengthen hypotheses and identify risks. Our research team ensures the customer has the loudest voice." },
  { icon: Layers, title: "Systems First", desc: "Process is at the core of every partnership. We help clients sustain new growth with systems and infrastructure." },
  { icon: Zap, title: "Dedicated Speed", desc: "Clients come to us when they need to adapt, shift, and scale. We work quickly with early prototyping." },
];

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <span className={`section-label transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          // Why Choose DreamsLab
        </span>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-8 hover-lift group cursor-default transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/25 group-hover:scale-110 group-hover:rotate-6">
                <f.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-display font-bold text-xl mt-6 transition-colors duration-300 group-hover:text-primary">{f.title}</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{f.desc}</p>
              {/* Animated underline */}
              <div className="mt-4 h-0.5 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
