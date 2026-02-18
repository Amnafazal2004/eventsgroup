"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { guttie } from "@/lib/fonts";

// --- Add your YouTube video IDs and titles here ---
const eventsData = [
  {
    id: "YOUR_VIDEO_ID_1", // e.g. "dQw4w9WgXcQ"
    title: "Digital First Event Highlights",
  },
  {
    id: "YOUR_VIDEO_ID_2", // e.g. "jNQXAC9IVRw"
    title: "Enterprise OPS Conference",
  },
];

// ── Single Video Card ──────────────────────────────────────────────────────────
const VideoCard = ({ video, index }: { video: (typeof eventsData)[0]; index: number }) => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);

  // Trigger animation when card enters viewport
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      // Cards slide up from below on scroll
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      className="rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/40 transition-colors duration-300"
    >
      {/* Video area */}
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>

        {/* --- THUMBNAIL STATE (before play) --- */}
        {!playing && (
          <>
            {/* YouTube thumbnail image */}
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
            />

            {/* Dark overlay so play button is visible */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Play button — centered */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Red YouTube-style play button */}
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                {/* Play triangle */}
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: "14px solid white",
                    marginLeft: "3px",
                  }}
                />
              </div>
            </button>
          </>
        )}

        {/* --- PLAYING STATE (iframe embed) --- */}
        {playing && (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </motion.div>
  );
};

// ── Main Section ───────────────────────────────────────────────────────────────
const EventsHighlights = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section className="py-20 px-8 md:px-16 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Two column layout: left = heading, right = videos */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Heading ── */}
          <div ref={headingRef}>

            {/* Small orange label */}
            <motion.p
              className="text-orange-500 font-[fahkwang] text-xs tracking-[0.2em] uppercase mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={headingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              // Our Events
            </motion.p>

            {/* Main heading */}
            <motion.h2
              className={`${guttie.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5`}
              initial={{ opacity: 0, x: -30 }}
              animate={headingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              EVENTS <span className="text-orange-500">HIGHLIGHTS</span>
            </motion.h2>

            {/* Orange underline accent */}
            <motion.div
              className="w-14 h-[2px] bg-orange-500 mb-5"
              initial={{ scaleX: 0 }}
              animate={headingInView ? { scaleX: 1 } : {}}
              style={{ originX: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            />

            {/* Description */}
            <motion.p
              className="text-gray-400 font-[fahkwang] text-sm leading-relaxed max-w-sm"
              initial={{ opacity: 0, y: 15 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              Relive the energy and insights from our most impactful boardroom events.
            </motion.p>

          </div>

          {/* ── RIGHT: Video cards stacked, both visible in section ── */}
          <div className="flex flex-col gap-4">
            {eventsData.map((video, index) => (
              <VideoCard key={index} video={video} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsHighlights;