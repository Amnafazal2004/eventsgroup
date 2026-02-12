"use client"
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer className="border-t border-border py-12" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
              <span className="text-primary-foreground font-display font-bold text-lg">✦</span>
            </div>
            <span className="font-display font-bold transition-colors duration-300 group-hover:text-primary">DreamsLab</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            {["Home", "About", "Services", "Projects", "Pricing", "Contact"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="link-underline hover:text-foreground transition-all duration-300 hover:translate-y-[-2px]"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {["Facebook", "Telegram", "Pinterest"].map((s) => (
              <a key={s} href="#" className="hover:text-primary transition-all duration-300 hover:scale-110">{s}</a>
            ))}
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          © 2026 DreamsLab Digital Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
