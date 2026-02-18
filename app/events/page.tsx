"use client";
import UpcomingBoardrooms from '@/components/UpcomingBoardrooms'
import UpcomingEventsv2 from '@/components/UpcomingEventsv2'
import PastEvents from '@/components/PastEvents'
import { motion } from "framer-motion";
import Image from "next/image";
import eventimage from "@/assets/eventimage5.png";
import { guttie } from "@/lib/fonts";
import FollowUs from '@/components/FollowUs';

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
           EVENTS
          </h1>

          {/* Breadcrumb */}
          <div className="text-sm font-[fahkwang] text-amber-600">
            Home <span className="mx-2">/</span> Events
          </div>

          {/* Banner Image */}
          <div className="w-full h-40 md:h-56 relative rounded-lg overflow-hidden">
            <Image src={eventimage} alt="About Banner" fill className="object-cover" />
          </div>
        </div>
      </motion.section>
     
      <UpcomingEventsv2/>
    <UpcomingBoardrooms  nextEventPage={true}/>
    <PastEvents nextEventPage={false}/>
    <FollowUs/>
    </div>
  )
}

export default page
