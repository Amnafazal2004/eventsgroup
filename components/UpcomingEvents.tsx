"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import event1 from "@/assets/blog-1.webp";
import event2 from "@/assets/blog-2.webp";
import event3 from "@/assets/blog-3.webp";
import event4 from "@/assets/project-1.webp";
import event5 from "@/assets/project-2.webp";
import event6 from "@/assets/project-4.webp";
import { guttie } from "@/lib/fonts";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: StaticImageData;
}

const eventsData: Event[] = [
  { id: 1, title: "Event One", date: "Feb 20, 2026", location: "London, UK", description: "This is the first event.A high-level executive discussion focusing on long-term strategic growth and leadership innovation.", image: event1 },
  { id: 2, title: "Event Two", date: "Mar 5, 2026", location: "Dubai, UAE", description: "This is the second event.A high-level executive discussion focusing on long-term strategic growth and leadership innovation.", image: event2 },
  { id: 3, title: "Event Three", date: "Apr 12, 2026", location: "New York, USA", description: "This is the third event.A high-level executive discussion focusing on long-term strategic growth and leadership innovation.", image: event3 },
  { id: 4, title: "Event Four", date: "May 18, 2026", location: "Tokyo, Japan", description: "This is the fourth event.A high-level executive discussion focusing on long-term strategic growth and leadership innovation.", image: event4 },
  { id: 5, title: "Event Five", date: "Jun 1, 2026", location: "Paris, France", description: "This is the fifth event.A high-level executive discussion focusing on long-term strategic growth and leadership innovation.", image: event5 },
  { id: 6, title: "Event Six", date: "Jul 10, 2026", location: "Sydney, Australia", description: "This is the sixth event.A high-level executive discussion focusing on long-term strategic growth and leadership innovation.", image: event6 },
];

const BATCH_SIZE = 3;
const SWITCH_DELAY = 4000;

const UpcomingEvents: React.FC = () => {
  const [batchIndex, setBatchIndex] = useState(0);

  const batches = [];
  for (let i = 0; i < eventsData.length; i += BATCH_SIZE) {
    batches.push(eventsData.slice(i, i + BATCH_SIZE));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBatchIndex(prev => (prev + 1) % batches.length);
    }, SWITCH_DELAY);

    return () => clearInterval(interval);
  }, [batches.length]);

  const currentBatch = batches[batchIndex] || [];

  return (
    <div className="mt-16">
      <motion.section
        className="bg-white text-black py-20 px-10 mx-auto max-w-6xl rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header aligned with paragraph */}
        <div className="max-w-4xl mx-auto mb-16 text-left">
          <p className="text-orange-500 text-sm font-[fahkwang] mb-2">Events</p>
          <h2 className={`text-3xl font-bold ${guttie.className}`}>UPCOMING EVENTS</h2>
          <p className="mt-4 text-gray-600 font-[fahkwang]">
            Stay updated with our latest events. Each event brings new experiences and opportunities.
          </p>
        </div>

        {/* Event cards */}
        <div className="relative w-full flex justify-center h-88">
          <AnimatePresence mode="wait">
            <motion.div
              key={batchIndex}
              className="flex space-x-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {currentBatch.map((event) => (
                <motion.div
                  key={event.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden w-72 cursor-pointer flex-shrink-0"
                >
                  <div className="relative w-full h-44">
                    <Image
                      src={event.image}
                      alt={event.title}
                      className="object-cover rounded-t-2xl w-full h-full"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold font-[fahkwang] text-black">{event.title}</h3>
                    <p className="text-gray-500 font-[fahkwang] font-bold text-orange-500 text-sm">{event.date} | {event.location}</p>
                    <p className="mt-2 font-[fahkwang] text-gray-700 text-xs">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
};

export default UpcomingEvents;
