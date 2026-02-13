
"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  const letters = "EVENTSFIRSTGROUP".split("");

  return (
    <div className="max-w-full mx-7 text-black  rounded-xl bg-amber-600 py-20">
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
