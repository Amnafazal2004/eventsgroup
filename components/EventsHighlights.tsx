"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { guttie } from "@/lib/fonts";
import eventimage1 from "@/assets/eventimage1.png";

// ── Your YouTube video IDs ─────────────────────────────────────────
// ID = part after ?v= in a YouTube URL
const cardVideos = [
  { id: "3uvw31I1tq8", title: "Enterprise OPS Conference" },
  { id: "Klt-iNu1g4g", title: "Digital First Highlights" },
];

// ── Video Card ──────────────────────────────────────────────────────
const VideoCard = ({
  video,
  index,
  onClick,
}: {
  video: (typeof cardVideos)[0];
  index: number;
  onClick: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      // Slides in from left → right, staggered
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 + index * 0.18 }}
      onClick={onClick}
      className="cursor-pointer flex-shrink-0 group"
      // ↓ CHANGE clamp values to resize cards: clamp(min, preferred, max)
      style={{ width: "clamp(180px, 25vw, 320px)" }}
    >
      {/*
        FIXED HEIGHT container — same technique as Testimonials carousel.
        We give the box a fixed height and let the img fill it with object-cover.
      */}
      <div
        className="relative w-full overflow-hidden rounded-xl border border-white/10 group-hover:border-orange-500/50 transition-colors duration-300"
        style={{ height: "160px" }}
      >
        <img
          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
          alt={video.title}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "130%",           /* wider than container to crop side padding */
            height: "130%",          /* taller than container to crop black bars top/bottom */
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            transition: "transform 0.5s ease, width 0.5s ease, height 0.5s ease",
          }}
          className="group-hover:!w-[140%] group-hover:!h-[140%]"
        />

        {/* Bottom gradient for title */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Play icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/40">
            <div style={{ width:0, height:0, borderTop:"6px solid transparent", borderBottom:"6px solid transparent", borderLeft:"11px solid white", marginLeft:"2px" }} />
          </div>
        </div>

        {/* Title */}
        <p className="absolute bottom-0 left-0 right-0 px-3 py-2 text-white font-[fahkwang] text-[10px] sm:text-xs font-semibold leading-tight line-clamp-1">
          {video.title}
        </p>
      </div>
    </motion.div>
  );
};

// ── Main Section ────────────────────────────────────────────────────
const EventsHighlights = () => {
  const sectionRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Tracks scroll as section enters viewport (0 → 1)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  // BG grows from bottom-right corner as you scroll in
  // Change 0.62 to start bigger/smaller
  const scale        = useTransform(scrollYProgress, [0, 1], [0.62, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const opacity      = useTransform(scrollYProgress, [0, 0.5], [0.25, 1]);

  const textRef    = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: "-80px" });

  return (
    // height: 100dvh — covers full screen including on mobile browsers
    // overflow-hidden prevents any gap/line at bottom
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden "
      style={{ height: "100dvh", minHeight: "600px" }}
    >
      {/* ── BACKGROUND — grows from bottom-right ────────────────────── */}
      <motion.div
        className="absolute inset-0"
        style={{
          scale,
          borderRadius,
          opacity,
          transformOrigin: "bottom right",
        }}
      >
        <Image src={eventimage1} alt="Event background" fill className="object-cover" priority />
        {/* Left gradient — keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        {/* Bottom gradient — keeps cards readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      </motion.div>

      {/* ── CONTENT — fills full height ─────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 sm:px-10 lg:px-16 py-10 sm:py-14">

        {/* TOP: Heading */}
        <div ref={textRef} className="max-w-lg">

          <motion.p
            className="text-orange-500 font-[fahkwang] text-xs tracking-[0.22em] uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Our Events
          </motion.p>

          <motion.h2
            className={`${guttie.className} text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-none mb-4`}
            initial={{ opacity: 0, y: 35 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          >
            EVENTS<br />
            <span className="text-orange-500">HIGHLIGHTS</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 font-[fahkwang] text-xs sm:text-sm leading-relaxed max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            Relive the energy and insights from our most impactful boardroom events.
          </motion.p>

          {/* Watch button */}
          <motion.button
            onClick={() => setActiveVideo(cardVideos[0].id)}
            className="mt-5 flex items-center gap-3 group"
            initial={{ opacity: 0, y: 15 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-orange-500 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 flex-shrink-0">
              <div style={{ width:0, height:0, borderTop:"5px solid transparent", borderBottom:"5px solid transparent", borderLeft:"9px solid #f97316", marginLeft:"2px" }} className="group-hover:border-l-white transition-colors duration-300" />
            </div>
            <span className="text-white font-[fahkwang] text-xs sm:text-sm tracking-widest uppercase">
              Watch Highlight
            </span>
          </motion.button>
        </div>

        {/* BOTTOM: Video cards — right-aligned, small on mobile */}
        <div className="flex justify-end items-end gap-3 sm:gap-4">
          {cardVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              onClick={() => setActiveVideo(video.id)}
            />
          ))}
        </div>
      </div>

      {/* ── MODAL ───────────────────────────────────────────────────── */}
      {activeVideo && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            className="relative w-full max-w-4xl"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-9 right-0 text-white font-[fahkwang] text-xs tracking-widest hover:text-orange-500 transition-colors"
            >
              ✕ CLOSE
            </button>
            <div className="rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "16/9" }}>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default EventsHighlights;