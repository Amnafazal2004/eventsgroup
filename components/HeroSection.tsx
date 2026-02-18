"use client";

import { segmenta } from "@/lib/fonts";
import { motion } from "framer-motion";

const HeroSection = () => {
  const letters = "EVENTSFIRSTGROUP".split("");

  return (
    <>
      {/* Video Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          src="/efg-compressed1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="pt-8 bg-black">
         <div className="w-[1190px] mx-auto text-black rounded-xl bg-amber-600 pt-12">
        <div>
          <p className="flex justify-center flex-wrap text-9xl md:text-[280px] font-bold">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                whileHover={{ scaleY: 1.5 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  mass: 0.6,
                }}
                className={`cursor-default inline-block origin-bottom ${segmenta.className}`}
              >
                {letter}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
      </div>
     
    </>
  );
};

export default HeroSection;



