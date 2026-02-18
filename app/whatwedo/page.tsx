"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import eventimage from "@/assets/eventimage5.png";
import conference1 from "@/assets/eventimage1.png";
import conference2 from "@/assets/eventimage7.png";
import conference3 from "@/assets/eventimage8.png";
import { guttie } from "@/lib/fonts";
import FollowUs from "@/components/FollowUs";

const page = () => {
  return (
    <div>
      {/* Top Section */}
      <motion.section
        className="w-full px-6 md:px-12 pt-28"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto space-y-4">
          <h1 className={`text-4xl md:text-5xl font-bold text-white ${guttie.className}`}>
            WHAT WE DO
          </h1>

          {/* Breadcrumb */}
          <div className="text-sm font-[fahkwang] text-amber-600">
            Home <span className="mx-2">/</span> What We Do
          </div>

          {/* Banner Image */}
          <div className="w-full h-40 md:h-56 relative rounded-lg overflow-hidden">
            <Image src={eventimage} alt="About Banner" fill className="object-cover" />
          </div>
        </div>
      </motion.section>

      {/* Conferences & Exhibitions Section */}
      <motion.section
        className="w-full px-6 md:px-12 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Heading */}
          <h2 className={`text-4xl md:text-5xl text-center font-bold text-white ${guttie.className}`}>
            Conferences & Exhibitions
          </h2>

          {/* Paragraph */}
          <p className="text-gray-400  text-center text-sm md:text-base leading-relaxed font-[fahkwang]">
           Our primary focus is on curating and delivering exceptional conferences that serve as dynamic platforms for industry experts, thought leaders and key stakeholders to come together. Through our meticulously designed conferences, we facilitate the exchange of knowledge, insights, and best practices that are essential for driving business success in today’s fast-paced and evolving landscape.
           <br />
           <br />
           In addition to the enriching conference sessions, we also organize exhibitions that showcase cutting-edge technologies, solutions, and products. These conferences cum exhibitions serve as a marketplace for industry-leading companies to demonstrate their offerings and engage with potential clients, partners, and investors. By combining thought leadership with practical demonstrations, our conferences and exhibitions create a vibrant environment that facilitates knowledge sharing, relationship building, and business opportunities.
           <br />
           <br />
           Conferences & Exhibitions: Join us today to explore our upcoming thought-provoking conferences. Gain the knowledge, insights, and connections needed to thrive in the current market. Together, let’s push boundaries, explore emerging trends, and shape the future of your industry. Contact us now and pave the way for business success

          </p>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="w-full h-52 relative rounded-lg overflow-hidden">
              <Image src={conference1} alt="Conference 1" fill className="object-cover" />
            </div>
            <div className="w-full h-52 relative rounded-lg overflow-hidden">
              <Image src={conference2} alt="Conference 2" fill className="object-cover" />
            </div>
            <div className="w-full h-52 relative rounded-lg overflow-hidden">
              <Image src={conference3} alt="Conference 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </motion.section>
      <FollowUs/>
    </div>
  );
};

export default page;
