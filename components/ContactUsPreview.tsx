"use client";

import { segmenta } from "@/lib/fonts";
import { motion } from "framer-motion";

const ContactUsPreview = () => {
  const letters = "LET'S CONTACT US".split("");

  return (
    <div className="max-w-7xl mx-auto text-black rounded-xl bg-amber-600 pt-20">
      <div>
        <p className="flex justify-left flex-wrap text-7xl md:text-[200px] font-bold">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              whileHover={{ scaleY: 1.5 }} // stretch upward
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                mass: 0.6,
              }}
              className={`cursor-default inline-block origin-bottom ${segmenta.className}`} // origin-bottom ensures stretch goes upward
            >
              {letter}
            </motion.span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ContactUsPreview;
