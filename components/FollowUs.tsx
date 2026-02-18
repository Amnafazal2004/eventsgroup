"use client"

import Image from "next/image";
import Link from "next/link";
import ctaImage from "@/assets/eventimage6.png"; // choose your image
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { guttie } from "@/lib/fonts";
import { motion } from "framer-motion";


const FollowUs = () => {
  return (
    <div>
        {/* CTA Section */}
<motion.section
className="w-full px-6 md:px-12 pt-4 pb-12"
initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
  <div className="max-w-6xl mx-auto relative rounded-xl overflow-hidden">

    {/* Background Image */}
    <div className="relative h-64 md:h-80 w-full">
      <Image
        src={ctaImage}
        alt="Support Background"
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        
        <h2 className={`text-white text-3xl md:text-5xl font-bold ${guttie.className}`}>
          Still You Need Our Support ?
        </h2>

        <p className="text-gray-300 font-[fahkwang] text-sm md:text-base">
          Don’t wait — make a smart & logical move today. It’s pretty easy.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-white text-xl pt-4">
          <Link href="https://www.linkedin.com/company/events-first-group/posts/?feedView=all" target="_blank" className="hover:text-amber-500 transition">
            <FaLinkedinIn />
          </Link>

          <Link href="https://www.instagram.com/eventsfirstgroup/" target="_blank" className="hover:text-amber-500 transition">
            <FaInstagram />
          </Link>

          <Link href="https://www.youtube.com/@EventsFirstGroup-fe8rq" target="_blank" className="hover:text-amber-500 transition">
            <FaYoutube />
          </Link>
        </div>

      </div>
    </div>

  </div>
</motion.section>

      
    </div>
  )
}

export default FollowUs
