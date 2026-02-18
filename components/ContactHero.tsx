"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import eventimage1 from "@/assets/eventimage1.png";

// ─── ContactHero ────────────────────────────────────────────────────────────
// Full-viewport-width banner with:
//   • A real background image via Next.js <Image> (fill + object-cover)
//   • A deep red overlay for the tinted effect matching the screenshot
//   • Oversized "LET 'SWORKUS" heading that bleeds off the right edge
//   • Subtitle paragraph below the image block
//
// WHY next/image instead of backgroundImage CSS?
//   → Automatic WebP conversion, lazy loading, blur placeholder, LCP optimisation.
//   → CSS backgroundImage skips all of that. For a hero this large, Image is better.

const ContactHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="w-full overflow-hidden">
      {/* ── Full-width image with huge text overlay ── */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[72vh] overflow-hidden">
        {/*
          Replace the backgroundImage below with your actual image path.
          The red overlay replicates the tinted look in the screenshot.
        */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('/contact-hero.jpg')` }}
        />
        {/* Deep red tint */}
        <div className="absolute inset-0 bg-red-800/65 mix-blend-multiply" />
        {/* Fallback gradient when no image is present */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-700 to-red-950 opacity-90" />

        {/* Oversized heading sitting at the bottom, bleeding off-screen to the right */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <motion.h1
            className="font-display font-black text-white uppercase tracking-tighter select-none"
            style={{
              fontSize: "clamp(5rem, 16vw, 20rem)",
              lineHeight: 0.82,
              /* Intentionally wider than viewport so it crops like in the screenshot */
              whiteSpace: "nowrap",
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            LET&apos;SWORKUS
          </motion.h1>
        </div>
      </div>

      {/* ── Subtitle line below the image ── */}
      <motion.p
        className="px-6 sm:px-10 lg:px-14 py-6 sm:py-8 text-muted-foreground text-sm sm:text-base lg:text-lg"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        We're passionate about innovation, brilliant ideas and the execution
        that brings it all together in one beautiful experience.
      </motion.p>
    </div>
  );
};

export default ContactHero;