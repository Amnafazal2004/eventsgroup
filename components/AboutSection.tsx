"use client"
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    title: "Harnessing the Power of Ideas",
    desc: "We transform creative concepts into inspiring campaigns.",
  },
  {
    title: "Ultimate Connectivity",
    desc: "By seamlessly merging modern marketing with breakthrough design, we craft a unique identity for every brand.",
  },
  {
    title: "Partners in Success",
    desc: "With attentive listening and close collaboration, we elevate each project to unprecedented heights.",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const staggerRef = useStaggerAnimation();

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className={`section-label transition-all duration-700 ${isVisible ? "animate-fade-in opacity-100" : "opacity-0"}`}>
              // About DreamsLab
            </span>
            <p className={`text-primary font-medium mt-2 transition-all duration-700 delay-100 ${isVisible ? "animate-fade-in opacity-100" : "opacity-0"}`}>
              since 1996
            </p>
            <h2 className={`section-title mt-6 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              Sparking Ideas,
              <br />
              <span className={`text-gradient-orange ${isVisible ? "text-shimmer animate-shimmer" : ""}`}>Igniting Success.</span>
            </h2>
            <p className={`text-muted-foreground mt-6 max-w-md leading-relaxed transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
              With 20+ years in the brand building business, we are skilled at making you stand out. Ready to reach your audience, secure greater sales and entice top talent?
            </p>

            <div ref={staggerRef} className="mt-8 flex flex-col gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  data-animate
                  className={`border-l-2 border-primary pl-4 scroll-animate transition-all duration-500 hover:translate-x-2 hover:border-l-4 ${isVisible ? "animate-fade-right is-visible" : ""}`}
                  style={{ animationDelay: `${0.4 + i * 0.15}s` }}
                >
                  <h4 className="font-display font-bold text-lg">{f.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{f.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className={`mt-8 inline-flex items-center gap-2 text-primary font-medium group transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "0.7s" }}
            >
              More About Us <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>

          {/* Right - Mission */}
          <div
            className={`glass-card rounded-2xl p-8 lg:p-12 flex flex-col justify-center hover-lift transition-all duration-700 ${isVisible ? "animate-fade-left" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <span className="section-label">Our Mission</span>
            <p className="mt-6 text-xl lg:text-2xl font-display leading-relaxed text-foreground/80">
              Empowering brands with innovative solutions to reach their full potential through creativity and collaboration. We believe in the power of ideas to transform and inspire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
