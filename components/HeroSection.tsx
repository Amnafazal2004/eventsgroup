// "use client"
// import { ArrowUpRight } from "lucide-react";
// import heroImage from "@/assets/hero-image.webp";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import Image from "next/image";

// const HeroSection = () => {
//   const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation();

//   return (
//     <section id="home" className="relative pt-20 overflow-hidden">
  
//       {/* Giant studio text on orange */}
//       <div className="mx-6 lg:mx-12 rounded-2xl bg-gradient-orange overflow-hidden relative animate-scale-up" style={{ animationDelay: "0.1s" }}>
//         <h1
//           className="font-display font-black text-[12vw] md:text-[10vw] leading-[0.85] tracking-tighter text-background/90 py-8 px-6 lg:px-12 select-none animate-slide-up-hero"
//           style={{ animationDelay: "0.3s" }}
//         >
//           <span className="inline-block animate-text-reveal" style={{ animationDelay: "0.4s" }}>DREAMSLAB</span>
//           <br />
//           <span className="inline-block animate-text-reveal" style={{ animationDelay: "0.6s" }}>STUDIO</span>
//         </h1>
//         {/* Decorative floating elements */}
//         <div className="absolute top-6 right-6 w-16 h-16 border-2 border-background/20 rounded-full animate-float opacity-40" />
//         <div className="absolute bottom-10 right-20 w-8 h-8 border border-background/15 rounded-full animate-float" style={{ animationDelay: "1s" }} />
//       </div>

//       {/* Tagline and CTAs */}
//       <div className="container mx-auto px-6 lg:px-12 mt-8 grid lg:grid-cols-2 gap-8 items-end">
//         <div>
//           <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
//             From Concept to Creation: Building Your
//             <br />
//             Digital Presence with Passion
//           </p>

//           <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold italic leading-[1.1] text-muted-foreground/70 max-w-xl animate-fade-up" style={{ animationDelay: "0.7s" }}>
//             Beyond Boundaries, Beyond Brands, Sparking Ideas, Igniting Success.
//           </h2>
//         </div>

//         <div className="flex flex-col gap-4 animate-fade-left" style={{ animationDelay: "0.8s" }}>
//           <div className="flex gap-3">
//             <a
//               href="#projects"
//               className="flex items-center gap-3 bg-secondary text-foreground px-6 py-4 rounded-xl font-medium text-sm hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500 group"
//             >
//               VIEW ALL WORK
//               <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-125" />
//             </a>
//             <a
//               href="#contact"
//               className="flex items-center gap-3 border border-border text-foreground px-6 py-4 rounded-xl font-medium text-sm hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500"
//             >
//               FREE CONSULTING
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Hero image */}
//       <div ref={imgRef} className="container mx-auto px-6 lg:px-12 mt-12">
//         <div className={`rounded-2xl overflow-hidden img-reveal transition-all duration-1000 ${imgVisible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-10"}`}>
//           <Image
//             src={heroImage}
//             alt="Creative agency workspace"
//             className="w-full h-[40vh] lg:h-[60vh] object-cover transition-transform duration-700 hover:scale-105"
//           />
//         </div>
//       </div>

//       {/* Client logos marquee */}
//       <div className="mt-16 border-t border-b border-border py-8 overflow-hidden">
//         <div className="flex animate-marquee gap-16 items-center">
//           {["Spotify", "Netflix", "Amazon", "Google", "Apple", "Meta", "Spotify", "Netflix", "Amazon", "Google", "Apple", "Meta"].map((name, i) => (
//             <span
//               key={i}
//               className="text-xl font-display font-bold text-muted-foreground/30 whitespace-nowrap hover:text-primary/70 transition-all duration-500 hover:scale-110 cursor-default"
//             >
//               {name}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  const letters = "EVENTSFIRSTGROUP".split("");

  return (
    <div className="max-w-full mx-7  rounded-xl bg-amber-600 py-20">
      <div className="">
        <p className="flex justify-center flex-wrap gap-2 text-6xl md:text-7xl font-bold">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="cursor-default inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
