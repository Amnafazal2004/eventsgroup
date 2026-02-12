"use client"
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation();

  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      {/* Info bar */}
      <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-wider text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span>Available For Work 24/7</span>
        </div>
        <span className="hidden md:inline">Based in Los Angeles, California</span>
        <span className="hidden md:inline">Call Support (234) 109-6666</span>
        <div className="hidden lg:flex items-center gap-6">
          {["Facebook", "Telegram", "Pinterest"].map((s) => (
            <a key={s} href="#" className="link-underline hover:text-foreground transition-colors duration-300">{s}</a>
          ))}
        </div>
      </div>

      {/* Giant studio text on orange */}
      <div className="mx-6 lg:mx-12 rounded-2xl bg-gradient-orange overflow-hidden relative animate-scale-up" style={{ animationDelay: "0.1s" }}>
        <h1
          className="font-display font-black text-[12vw] md:text-[10vw] leading-[0.85] tracking-tighter text-background/90 py-8 px-6 lg:px-12 select-none animate-slide-up-hero"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="inline-block animate-text-reveal" style={{ animationDelay: "0.4s" }}>DREAMSLAB</span>
          <br />
          <span className="inline-block animate-text-reveal" style={{ animationDelay: "0.6s" }}>STUDIO</span>
        </h1>
        {/* Decorative floating elements */}
        <div className="absolute top-6 right-6 w-16 h-16 border-2 border-background/20 rounded-full animate-float opacity-40" />
        <div className="absolute bottom-10 right-20 w-8 h-8 border border-background/15 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Tagline and CTAs */}
      <div className="container mx-auto px-6 lg:px-12 mt-8 grid lg:grid-cols-2 gap-8 items-end">
        <div>
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            From Concept to Creation: Building Your
            <br />
            Digital Presence with Passion
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold italic leading-[1.1] text-muted-foreground/70 max-w-xl animate-fade-up" style={{ animationDelay: "0.7s" }}>
            Beyond Boundaries, Beyond Brands, Sparking Ideas, Igniting Success.
          </h2>
        </div>

        <div className="flex flex-col gap-4 animate-fade-left" style={{ animationDelay: "0.8s" }}>
          <div className="flex gap-3">
            <a
              href="#projects"
              className="flex items-center gap-3 bg-secondary text-foreground px-6 py-4 rounded-xl font-medium text-sm hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500 group"
            >
              VIEW ALL WORK
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-125" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 border border-border text-foreground px-6 py-4 rounded-xl font-medium text-sm hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500"
            >
              FREE CONSULTING
            </a>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div ref={imgRef} className="container mx-auto px-6 lg:px-12 mt-12">
        <div className={`rounded-2xl overflow-hidden img-reveal transition-all duration-1000 ${imgVisible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-10"}`}>
          <img
            src={heroImage}
            alt="Creative agency workspace"
            className="w-full h-[40vh] lg:h-[60vh] object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Client logos marquee */}
      <div className="mt-16 border-t border-b border-border py-8 overflow-hidden">
        <div className="flex animate-marquee gap-16 items-center">
          {["Spotify", "Netflix", "Amazon", "Google", "Apple", "Meta", "Spotify", "Netflix", "Amazon", "Google", "Apple", "Meta"].map((name, i) => (
            <span
              key={i}
              className="text-xl font-display font-bold text-muted-foreground/30 whitespace-nowrap hover:text-primary/70 transition-all duration-500 hover:scale-110 cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
