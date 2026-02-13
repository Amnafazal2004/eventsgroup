"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const eventsData = [
  { id: 1, title: "Event One", date: "Feb 20, 2026", description: "This is the first event." },
  { id: 2, title: "Event Two", date: "Mar 5, 2026", description: "This is the second event." },
  { id: 3, title: "Event Three", date: "Apr 12, 2026", description: "This is the third event." },
  { id: 4, title: "Event Four", date: "May 18, 2026", description: "This is the fourth event." },
  { id: 5, title: "Event Five", date: "Jun 1, 2026", description: "This is the fifth event." },
  { id: 6, title: "Event Six", date: "Jul 10, 2026", description: "This is the sixth event." },
];

const BATCH_SIZE = 3;       // number of cards per batch
const SWITCH_DELAY = 4000;  // 4 seconds per batch

const UpcomingEvents = () => {
  const [batchIndex, setBatchIndex] = useState(0);

  // Precompute batches
  const batches = [];
  for (let i = 0; i < eventsData.length; i += BATCH_SIZE) {
    batches.push(eventsData.slice(i, i + BATCH_SIZE));
  }

  // Rotate batches using useEffect safely
  useEffect(() => {
    const interval = setInterval(() => {
      setBatchIndex(prev => (prev + 1) % batches.length);
    }, SWITCH_DELAY);

    return () => clearInterval(interval);
  }, [batches.length]);

  // Current batch (safely)
  const currentBatch = batches[batchIndex] || [];

  return (
    <div className="mt-17">
      <motion.section
        className="bg-white text-black py-20 px-10 mx-auto max-w-6xl rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <div className="md:w-1/6">
            <span className="text-sm text-gray-400">// Events</span>
          </div>
          <div className="md:w-5/6 md:text-right mt-4 md:mt-0">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <p className="mt-4 text-gray-600">
              Stay updated with our latest events. Each event brings new experiences and opportunities.
            </p>
          </div>
        </div>

        {/* Event cards */}
        <div className="relative w-full flex justify-center h-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={batchIndex} // animate each batch as a unit
              className="flex space-x-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {currentBatch.map((event) => (
                <div
                  key={event.id}
                  className="bg-gray-50 p-6 rounded-xl shadow-lg w-64 flex-shrink-0 text-center"
                >
                  <h3 className="font-semibold text-xl">{event.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{event.date}</p>
                  <p className="mt-2 text-gray-700">{event.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
};

export default UpcomingEvents;
