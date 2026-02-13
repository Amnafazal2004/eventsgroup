// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const events = [
//   { title: "Tech Conference 2026", date: "Feb 20, 2026" },
//   { title: "AI Workshop", date: "Mar 5, 2026" },
//   { title: "Marketing Summit", date: "Apr 12, 2026" },
//   { title: "Design Expo", date: "May 25, 2026" },
//   { title: "Startup Pitch Day", date: "Jun 10, 2026" },
// ];

// const UpcomingEvents = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Heading fades out as you scroll
//   const headingOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);

//   // Cards fade in and appear when scrolling (initially hidden)
//   const cardsOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
//   const cardsY = useTransform(scrollYProgress, [0.3, 0.5], [100, 0]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative w-full bg-white text-black py-32 min-h-[150vh]"
//     >
//       <div className="container mx-auto px-6 lg:px-12">
//         {/* Sticky Heading - fades out on scroll */}
//         <motion.div 
//           className="sticky top-24 z-10 mb-16"
//           style={{ opacity: headingOpacity }}
//         >
//           <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center">
//             Upcoming Events
//           </h2>
//         </motion.div>

//         {/* Event Cards - appear on scroll, hidden initially */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32"
//           style={{ 
//             opacity: cardsOpacity, 
//             y: cardsY,
//             pointerEvents: cardsOpacity.get() < 0.1 ? 'none' : 'auto'
//           }}
//         >
//           {events.map((event, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-xl flex flex-col justify-center border border-gray-300"
//             >
//               <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold mb-4">
//                 {index + 1}
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold mb-3">
//                 {event.title}
//               </h3>
//               <p className="text-gray-600 text-lg mb-6">{event.date}</p>
//               <button className="px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
//                 Learn More
//               </button>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default UpcomingEvents;


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const eventsData = [
//   { id: 1, title: "Event One", date: "Feb 20, 2026", description: "This is the first event." },
//   { id: 2, title: "Event Two", date: "Mar 5, 2026", description: "This is the second event." },
//   { id: 3, title: "Event Three", date: "Apr 12, 2026", description: "This is the third event." },
//   { id: 4, title: "Event Four", date: "May 18, 2026", description: "This is the fourth event." },
//   { id: 5, title: "Event Five", date: "Jun 1, 2026", description: "This is the fifth event." },
//   { id: 6, title: "Event Six", date: "Jul 10, 2026", description: "This is the sixth event." },
// ];

// const BATCH_SIZE = 3; // number of cards to show at a time

// const UpcomingEvents = () => {
//   const [batchIndex, setBatchIndex] = useState(0);

//   // Rotate batches every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBatchIndex((prev) => (prev + 1) % Math.ceil(eventsData.length / BATCH_SIZE));
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // Calculate current batch
//   const start = batchIndex * BATCH_SIZE;
//   const currentBatch = eventsData.slice(start, start + BATCH_SIZE);

//   return (
//     <section className="bg-white  text-black py-20 px-10">
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
//         {/* Left small label */}
//         <div className="md:w-1/6">
//           <span className="text-sm text-gray-400">// Events</span>
//         </div>

//         {/* Right heading + paragraph */}
//         <div className="md:w-5/6 md:text-right mt-4 md:mt-0">
//           <h2 className="text-3xl font-bold">Upcoming Events</h2>
//           <p className="mt-4 text-gray-600">
//             Stay updated with our latest events. Each event brings new experiences and opportunities.
//           </p>
//         </div>
//       </div>

//       {/* Event cards */}
//       <div className="flex justify-center space-x-6">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={batchIndex} // animate each batch
//             className="flex space-x-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//           >
//             {currentBatch.map((event) => (
//               <div
//                 key={event.id}
//                 className="bg-gray-50 p-6 rounded-xl shadow-lg w-64 flex-shrink-0 text-center"
//               >
//                 <h3 className="font-semibold text-xl">{event.title}</h3>
//                 <p className="text-gray-500 text-sm mt-1">{event.date}</p>
//                 <p className="mt-2 text-gray-700">{event.description}</p>
//               </div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default UpcomingEvents;


// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const eventsData = [
//   { id: 1, title: "Event One", date: "Feb 20, 2026", description: "This is the first event." },
//   { id: 2, title: "Event Two", date: "Mar 5, 2026", description: "This is the second event." },
//   { id: 3, title: "Event Three", date: "Apr 12, 2026", description: "This is the third event." },
//   { id: 4, title: "Event Four", date: "May 18, 2026", description: "This is the fourth event." },
//   { id: 5, title: "Event Five", date: "Jun 1, 2026", description: "This is the fifth event." },
//   { id: 6, title: "Event Six", date: "Jul 10, 2026", description: "This is the sixth event." },
// ];

// const BATCH_SIZE = 3; // number of cards per batch
// const SWITCH_DELAY = 3000; // 3 seconds per batch

// const UpcomingEvents = () => {
//   const [batchIndex, setBatchIndex] = useState(0);

//   // Compute total batches dynamically
//   const totalBatches = eventsData.length >= BATCH_SIZE
//     ? eventsData.length - BATCH_SIZE + 1
//     : eventsData.length;

//   // Function to go to next batch
//   const nextBatch = () => {
//     setTimeout(() => {
//       setBatchIndex((prev) => (prev + 1) % totalBatches);
//       nextBatch(); // recursively schedule next
//     }, SWITCH_DELAY);
//   };

//   // Start the batch rotation
//   if (batchIndex === 0) nextBatch(); // start only once

//   // Get current batch
//   const currentBatch = eventsData.slice(batchIndex, batchIndex + BATCH_SIZE);

//   return (
//     <section className="bg-white text-black py-20 px-10 overflow-hidden">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
//         <div className="md:w-1/6">
//           <span className="text-sm text-gray-400">// Events</span>
//         </div>
//         <div className="md:w-5/6 md:text-right mt-4 md:mt-0">
//           <h2 className="text-3xl font-bold">Upcoming Events</h2>
//           <p className="mt-4 text-gray-600">
//             Stay updated with our latest events. Each event brings new experiences and opportunities.
//           </p>
//         </div>
//       </div>

//       {/* Event cards */}
//       <div className="relative w-full flex justify-center h-72">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={batchIndex} // animate each batch
//             className="flex space-x-6 absolute"
//             initial={{ x: "100%" }}   // enter from right
//             animate={{ x: 0 }}        // center
//             exit={{ x: "-100%" }}     // exit to left
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//           >
//             {currentBatch.map((event) => (
//               <div
//                 key={event.id}
//                 className="bg-gray-50 p-6 rounded-xl shadow-lg w-64 flex-shrink-0 text-center"
//               >
//                 <h3 className="font-semibold text-xl">{event.title}</h3>
//                 <p className="text-gray-500 text-sm mt-1">{event.date}</p>
//                 <p className="mt-2 text-gray-700">{event.description}</p>
//               </div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default UpcomingEvents;


"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "motion/react-client";

const eventsData = [
  { id: 1, title: "Event One", date: "Feb 20, 2026", description: "This is the first event." },
  { id: 2, title: "Event Two", date: "Mar 5, 2026", description: "This is the second event." },
  { id: 3, title: "Event Three", date: "Apr 12, 2026", description: "This is the third event." },
  { id: 4, title: "Event Four", date: "May 18, 2026", description: "This is the fourth event." },
  { id: 5, title: "Event Five", date: "Jun 1, 2026", description: "This is the fifth event." },
  { id: 6, title: "Event Six", date: "Jul 10, 2026", description: "This is the sixth event." },
];

const BATCH_SIZE = 3; // number of cards per batch
const SWITCH_DELAY = 3000; // 3 seconds per batch

const UpcomingEvents = () => {
  const [batchIndex, setBatchIndex] = useState(0);

  // Compute total batches dynamically
  const totalBatches = eventsData.length >= BATCH_SIZE
    ? eventsData.length - BATCH_SIZE + 1
    : eventsData.length;

  // Function to go to next batch
  const nextBatch = () => {
    setTimeout(() => {
      setBatchIndex((prev) => (prev + 1) % totalBatches);
      nextBatch(); // recursively schedule next
    }, SWITCH_DELAY);
  };

  // Start the batch rotation
  if (batchIndex === 0) nextBatch(); // start only once

  // Get current batch
  const currentBatch = eventsData.slice(batchIndex, batchIndex + BATCH_SIZE);

  return (
   <div className="mt-17">
    <motion.section
      className="bg-white text-black py-20 px-10 mx-auto max-w-6xl rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }} // triggers when 30% in view
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
            key={batchIndex} // animate each batch
            className="flex space-x-6 absolute"
            initial={{ x: "100%" }}   // enter from right
            animate={{ x: 0 }}        // center
            exit={{ x: "-100%" }}     // exit to left
            transition={{ duration: 0.3, ease: "easeInOut" }}
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
