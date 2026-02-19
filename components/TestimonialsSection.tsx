'use client';
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
import { Play, Star } from 'lucide-react';
import { guttie } from "@/lib/fonts";

const headingText = "SUCCESS STORIES";
const headingWords = headingText.split(" ");

const videoIds = [
  'kjro4AVXUhM',
  '8xluYDV_07g',
  'ktsauwzmb-Q',
  'M7lc1UVf-VE',
  'iFVU9upOXyM',
  '_ogyuzwQWYo',
  'OYIX4ga3DI8',
  'j7g0eRb7hsQ',
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [videoTitles, setVideoTitles] = useState<Record<string, string>>({});
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Fetch video titles from YouTube oEmbed
  useEffect(() => {
    const fetchTitles = async () => {
      const titles: Record<string, string> = {};
      await Promise.all(
        videoIds.map(async (id) => {
          try {
            const res = await fetch(
              `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
            );
            if (res.ok) {
              const data = await res.json();
              titles[id] = data.title;
            } else {
              titles[id] = 'Watch Video';
            }
          } catch {
            titles[id] = 'Watch Video';
          }
        })
      );
      setVideoTitles(titles);
    };
    fetchTitles();
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying && playingVideo === null) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % videoIds.length);
      }, 3500);
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlaying, playingVideo]);

  const handlePrev = () => { setCurrentIndex((prev) => (prev - 1 + videoIds.length) % videoIds.length); setIsAutoPlaying(false); };
  const handleNext = () => { setCurrentIndex((prev) => (prev + 1) % videoIds.length); setIsAutoPlaying(false); };
  const handlePlayVideo = (index: number) => { setPlayingVideo(index); setIsAutoPlaying(false); };
  const handleStopVideo = () => setPlayingVideo(null);

  return (
    <section className="py-12 overflow-hidden bg-gradient-to-b from-background to-background/50" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-14">
        {/* Top area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-10">
          {/* Left - Heading */}
          <div>
            <span className={`inline-block font-[fahkwang] text-sm font-display text-orange-500 mb-2 transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Testimonials
            </span>
            <motion.h2
              className={`text-4xl lg:text-5xl ${guttie.className} font-bold mt-4 leading-tight`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={{ staggerChildren: 0.12 }}
            >
              {headingWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-3 text-gray-500"
                  variants={{
                    hidden: { color: "#6b7280" },
                    visible: { color: "#ffffff", transition: { duration: 0.8 } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <p
              className={`text-muted-foreground font-[fahkwang] mt-6 text-lg leading-relaxed max-w-lg transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              Read our clients' inspiring testimonials and see how their success reflects our creative vision.{' '}
              <span className="text-foreground font-[fahkwang] italic">
                "Each story celebrates our commitment to innovative design and exceptional service."
              </span>
            </p>
          </div>

          {/* Right - Rating */}
          <div className="flex flex-col justify-end">
            <div className={`transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 fill-orange-500 text-orange-500 transition-all duration-300 ${isVisible ? 'animate-rotate-in' : 'opacity-0'}`} style={{ animationDelay: `${0.4 + i * 0.1}s` }} />
                  ))}
                </div>
                <span className="text-3xl font-bold">4.9 <span className="text-muted-foreground text-lg">/ 5</span></span>
              </div>
              <p className="text-muted-foreground font-[fahkwang]">
                We've delivered <span className="text-foreground font-bold">150+</span> projects that help companies generate real results.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <span className="text-sm text-muted-foreground">Trusted by clients worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[400px] flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '2000px' }}>
                {videoIds.map((id, index) => {
                  const diff = index - currentIndex;
                  const totalCards = videoIds.length;
                  let normalizedDiff = diff;
                  if (Math.abs(diff) > totalCards / 2) {
                    normalizedDiff = diff > 0 ? diff - totalCards : diff + totalCards;
                  }
                  const isCenter = normalizedDiff === 0;
                  const isPlaying = playingVideo === index;

                  const getTransform = () => {
                    if (normalizedDiff === 0)  return { x: 0,   scale: 1,    rotateY: 0,   zIndex: 50, opacity: 1,   blur: 0 };
                    if (normalizedDiff === -1) return { x: -70, scale: 0.85, rotateY: 20,  zIndex: 40, opacity: 0.7, blur: 0.5 };
                    if (normalizedDiff === 1)  return { x: 70,  scale: 0.85, rotateY: -20, zIndex: 40, opacity: 0.7, blur: 0.5 };
                    if (normalizedDiff === -2) return { x: -85, scale: 0.7,  rotateY: 30,  zIndex: 30, opacity: 0.5, blur: 1 };
                    if (normalizedDiff === 2)  return { x: 85,  scale: 0.7,  rotateY: -30, zIndex: 30, opacity: 0.5, blur: 1 };
                    return { x: 0, scale: 0.5, rotateY: 0, zIndex: 10, opacity: 0, blur: 2 };
                  };

                  const transform = getTransform();
                  const videoTitle = videoTitles[id] || 'Loading...';

                  return (
                    <motion.div
                      key={index}
                      className="absolute cursor-pointer"
                      animate={{
                        x: `${transform.x}%`,
                        scale: transform.scale,
                        rotateY: transform.rotateY,
                        opacity: transform.opacity,
                        zIndex: transform.zIndex,
                        filter: `blur(${transform.blur}px)`
                      }}
                      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ transformStyle: 'preserve-3d' }}
                      onClick={() => {
                        if (!isCenter) normalizedDiff < 0 ? handlePrev() : handleNext();
                      }}
                    >
                      <div className={`w-[280px] sm:w-[350px] lg:w-[450px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border transition-all duration-300 ${
                        isCenter ? 'border-orange-500/50 shadow-orange-500/20' : 'border-gray-700/50'
                      }`}>
                        <div className="relative w-full bg-black" style={{ height: '300px' }}>
                          {!isPlaying ? (
                            <>
                              {/* YouTube Thumbnail */}
                              <img
                                src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                                alt={videoTitle}
                                className="w-full h-full object-cover"
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                                }}
                              />

                              {/* Gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                              {/* Play button */}
                              {isCenter && (
                                <div
                                  className="absolute inset-0 flex items-center justify-center"
                                  onClick={(e) => { e.stopPropagation(); handlePlayVideo(index); }}
                                >
                                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                                    <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1" fill="currentColor" />
                                  </div>
                                </div>
                              )}

                              {/* Bottom — only video title */}
                              <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-4 sm:pb-5">
                                <h3 className="text-white font-bold text-sm sm:text-base line-clamp-2 leading-snug">
                                  {videoTitle}
                                </h3>
                              </div>
                            </>
                          ) : (
                            <div className="relative w-full h-full">
                              <iframe
                                src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                              <button
                                onClick={(e) => { e.stopPropagation(); handleStopVideo(); }}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/90 hover:bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 z-10 flex items-center gap-2"
                              >
                                ✕ Close
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;