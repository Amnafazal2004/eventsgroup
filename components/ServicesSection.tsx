"use client"
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    num: "01",
    title: "Copywriting",
    desc: "At the core of everything we do is branding. We work closely with our clients to understand their business operations and challenges.",
    tags: ["Brand Positioning", "Tagline Development", "Copywriting", "Brand Naming"],
  },
  {
    num: "02",
    title: "Branding",
    desc: "We work closely with our clients to understand their business, crafting unique brand identities that stand out.",
    tags: ["Brand Strategy", "Tone of Voice", "Brand Audits", "Brand Identity"],
  },
  {
    num: "03",
    title: "Graphic Design",
    desc: "We provide tailored design services to help brands attract, engage, and convert customers with stunning visuals.",
    tags: ["Art Direction", "Logo Design", "Brochure Design", "Illustration"],
  },
  {
    num: "04",
    title: "Digital Marketing",
    desc: "Maximise your online presence with our performance-driven digital marketing services tailored to your needs.",
    tags: ["SEO", "Pay Per Click", "Email Marketing", "Content Marketing"],
  },
  {
    num: "05",
    title: "Websites",
    desc: "We create highly engaging custom websites, fully optimized for SEO to drive traffic, leads and conversions.",
    tags: ["SEO", "Content Management", "eCommerce", "UX Design"],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <span className={`section-label transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          // Our Services
        </span>
        <h2
          className={`section-title mt-6 max-w-3xl transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          Providing solutions and services that uplift your business.
        </h2>
        <p
          className={`text-muted-foreground mt-6 max-w-xl transition-all duration-500 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          At our creative agency, imagination meets strategy. Our talented team crafts vibrant visuals and compelling narratives.
        </p>

        <div className="mt-16 space-y-0">
          {services.map((s, i) => (
            <div
              key={i}
              className={`border-t border-border last:border-b transition-all duration-500 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full py-6 flex items-center justify-between group"
              >
                <div className="flex items-center gap-8">
                  <span className="text-primary font-display text-sm italic transition-transform duration-300 group-hover:scale-125">//{s.num}</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold group-hover:text-primary transition-all duration-300 group-hover:translate-x-2">
                    {s.title}
                  </h3>
                </div>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                  active === i
                    ? "bg-primary border-primary rotate-180 shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                    : "border-border group-hover:border-primary group-hover:bg-primary/10"
                }`}>
                  <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${active === i ? "text-primary-foreground" : ""}`} />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  active === i ? "max-h-96 opacity-100 pb-8" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-0 md:pl-20 grid md:grid-cols-2 gap-6">
                  <p className="text-muted-foreground">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default hover:scale-105"
                        style={{ transitionDelay: `${j * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
