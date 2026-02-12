"use client";
import { useState } from "react";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 animate-fade-down">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110">
              <span className="text-primary-foreground font-display font-bold text-lg">
                ✦
              </span>
            </div>
            <div className="font-display font-bold text-sm leading-tight transition-colors duration-300 group-hover:text-primary">
              <span>The</span>
              <br />
              <span>DreamsLab</span>
              <br />
              <span>Digital Studio.</span>
            </div>
          </div>

          {/* Nav dots */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hidden md:flex gap-1 group  pl-9"
          >
            {menuOpen ? (
              <X className="w-5 h-5 transition-all duration-300" />
            ) : (
              <div className="grid grid-cols-2 gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 bg-white rounded-full transition-all duration-300 group-hover:bg-primary group-hover:scale-125"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
            )}
          </button>

          <div
            className={` pl-6 hidden md:flex items-center gap-6 overflow-hidden transition-all duration-500 ${
              menuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4 pointer-events-none"
            }`}
          >
            {["Home", "About", "Services", "Projects", "Pricing", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{
                  scale: 1.15,
                  y: -3,
                  color: "hsl(var(--primary))",
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                className="text-sm font-display cursor-pointer text-gray-500"
                
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 hover:rotate-90 transition-all duration-500">
            <Search className="w-4 h-4" />
          </button>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-full font-medium text-sm hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-500 group"
          >
            GET IN TOUCH
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-12 h-12 flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <div
              className={`transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-black border-t border-border overflow-hidden transition-all duration-500 ease-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="px-6 py-8 flex flex-col gap-4 md:gap-12 md:flex-row">
          {["Home", "About", "Services", "Projects", "Pricing", "Contact"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-display hover:text-primary hover:translate-x-4 transition-all duration-300 link-underline"
              style={{ transitionDelay: menuOpen ? `${i * 70}ms` : "0ms" }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;





             