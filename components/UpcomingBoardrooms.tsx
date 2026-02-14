// "use client";

// import { motion } from "framer-motion";

// const boardroomsData = [
//   {
//     id: 1,
//     title: "Leadership Strategy 2026",
//     date: "March 12, 2026",
//     description:
//       "A high-level executive discussion focusing on long-term strategic growth and leadership innovation."
//   },
//   {
//     id: 2,
//     title: "Investment & Growth Summit",
//     date: "April 5, 2026",
//     description:
//       "An exclusive boardroom session covering investment trends, financial planning, and scaling strategies."
//   },
//   {
//     id: 3,
//     title: "Global Expansion Forum",
//     date: "May 18, 2026",
//     description:
//       "Discuss global market expansion, partnerships, and cross-border leadership frameworks."
//   }
// ];

// const UpcomingBoardrooms = () => {
//   return (
//     <div className="bg-black text-white min-h-screen py-20 px-8 md:px-16">

//       {/* Header Section */}
//       <div className="max-w-6xl mx-auto mb-16">
//         <p className="text-orange-500 text-sm mb-2">
//           BOARDROOMS
//         </p>

//         <h1 className="text-4xl md:text-5xl font-bold">
//           Upcoming Boardrooms
//         </h1>
//       </div>

//       {/* Cards Section */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//         {boardroomsData.map((room) => (
//           <motion.div
//             key={room.id}
//             className="relative bg-gray-100 rounded-2xl p-8 shadow-md cursor-pointer overflow-hidden"
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 20px 40px rgba(0,0,0,0.15)"
//             }}
//             transition={{ type: "spring", stiffness: 200, damping: 15 }}
//           >
//             {/* Card Content */}
//             <h3 className="text-xl font-semibold text-black">
//               {room.title}
//             </h3>
//             <p className="text-gray-500 text-sm mt-2">
//               {room.date}
//             </p>

//             {/* Hidden Description Popup */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileHover={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//               className="absolute inset-0 bg-white rounded-2xl p-8 flex items-center justify-center text-center"
//             >
//               <p className="text-gray-700">
//                 {room.description}
//               </p>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UpcomingBoardrooms;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import project1 from "@/assets/project-1.webp";
import project2 from "@/assets/project-2.webp";
import project3 from "@/assets/project-3.webp";
import { guttie } from "@/lib/fonts";

interface Boardroom {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: StaticImageData;
}

const boardroomsData: Boardroom[] = [
  {
    id: 1,
    title: "Leadership Strategy 2026",
    date: "March 12, 2026",
    location: "London, UK",
    description:
      "A high-level executive discussion focusing on long-term strategic growth and leadership innovation.",
    image: project1,
  },
  {
    id: 2,
    title: "Investment & Growth Summit",
    date: "April 5, 2026",
    location: "Dubai, UAE",
    description:
      "An exclusive boardroom session covering investment trends, financial planning, and scaling strategies.",
    image: project2,
  },
  {
    id: 3,
    title: "Global Expansion Forum",
    date: "May 18, 2026",
    location: "New York, USA",
    description:
      "Discuss global market expansion, partnerships, and cross-border leadership frameworks.",
    image: project3,
  },
];

const UpcomingBoardrooms: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Boardroom | null>(null);

  return (
    <div className="min-h-screen py-20 px-8 md:px-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">

          <motion.p
        className="text-orange-500 font-[fahkwang] text-sm mb-2"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
        BOARDROOMS
        </motion.p>
      <motion.h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-22 ${guttie.className}`}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          UPCOMING BOARDROOMS
        </motion.h2>
       
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8  hover:border-orange-500">
        {boardroomsData.map((room) => (
          <motion.div
            key={room.id}
            onClick={() => setSelectedRoom(room)}
            whileHover={{ scale: 1.04, y: -5 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="bg-gray-100 rounded-2xl shadow-md cursor-pointer overflow-hidden border border-black hover:border-orange-500 transition-colors duration-300"
          >
            <Image
              src={room.image}
              alt={room.title}
              className="w-full h-48 object-cover"
            />
            <div className=" bg-black p-6">
              <h3 className={`text-lg font-semibold font-[fahkwang]`}>{room.title}</h3>
              <p className="text-orange-500 font-[fahkwang] text-sm mb-2">{room.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedRoom(null)}
            />

            {/* Modal Container */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 60 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 60 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 25,
                  mass: 0.9,
                }}
                className="bg-black text-white max-w-2xl w-full rounded-3xl shadow-2xl overflow-hidden relative"
              >
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="absolute top-4 right-4 hover:text-black z-10"
                >
                  ✕
                </button>

                <Image
                  src={selectedRoom.image}
                  alt={selectedRoom.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-8 font-[fahkwang]">
                  <h2 className="text-2xl font-bold   text-black mb-2">
                    {selectedRoom.title}
                  </h2>

                  <p className="text-orange-500 text-sm mb-2">
                    {selectedRoom.date}
                  </p>

                  <p className="text-white text-sm mb-6">
                    {selectedRoom.location}
                  </p>

                  <p className="text-gray-500 leading-relaxed">
                    {selectedRoom.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UpcomingBoardrooms;
