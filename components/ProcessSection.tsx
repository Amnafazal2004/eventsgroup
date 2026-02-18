"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { guttie } from "@/lib/fonts";

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 mb-10">
        {/* CTA */}
        <div
          className={`mt-20 glass-card border-gray-300 rounded-2xl p-8 lg:p-12 text-center hover-lift transition-all duration-700 ${isVisible ? "animate-scale-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <h3 className={`text-4xl lg:text-5xl font-display font-black ${guttie.className}`}>
            Ready?
          </h3>
          <p className="text-muted-foreground mt-4 text-lg">
            Want to consult with our team ?
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 bg-orange-500 text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-orange-dark hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-105 transition-all duration-500"
          >
            Get quote now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

// "use client";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import { motion } from "framer-motion";
// import { ArrowRight, Sparkles, Zap } from "lucide-react";
// import { useState, useRef } from "react";

// const ProcessSection = () => {
//   const { ref, isVisible } = useScrollAnimation();
//   const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
//   const cardRef = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
    
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
    
//     setMousePosition({ x, y });
//   };

//   // Floating particles animation
//   const particles = Array.from({ length: 20 }, (_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     delay: Math.random() * 2,
//     duration: 3 + Math.random() * 2,
//   }));

//   return (
//     <section className="relative py-24 lg:py-32 overflow-hidden bg-background" ref={ref}>
//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.015]">
//         <div 
//           className="absolute inset-0" 
//           style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
//             backgroundSize: '40px 40px',
//           }} 
//         />
//       </div>

//       {/* Soft Gradient Orbs - More Subtle */}
//       <motion.div
//         className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.3, 0.4, 0.3],
//         }}
//         transition={{
//           duration: 9,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.div
//         className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[100px]"
//         animate={{
//           scale: [1.1, 1, 1.1],
//           opacity: [0.4, 0.3, 0.4],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 4,
//         }}
//       />

//       <div className="container mx-auto px-6 lg:px-12 relative z-10">
//         {/* Main CTA Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative"
//         >
//           {/* Card Container with Multiple Layers */}
//           <div 
//             ref={cardRef}
//             onMouseMove={handleMouseMove}
//             className="relative bg-card/50 backdrop-blur-xl rounded-3xl overflow-hidden group transition-all duration-700 border border-border/40 hover:border-primary/30"
//           >
//             {/* Animated Grid Pattern - Subtle */}
//             <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700">
//               <div className="absolute inset-0" style={{
//                 backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
//                                  linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
//                 backgroundSize: '50px 50px',
//               }} />
//             </div>

//             {/* Interactive Mouse-Tracking Gradient - Smooth */}
//             <div
//               className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
//               style={{
//                 background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, 
//                   hsl(var(--primary) / 0.08) 0%, 
//                   hsl(var(--orange) / 0.05) 30%,
//                   transparent 60%)`,
//               }}
//             />

//             {/* Content */}
//             <div className="relative p-8 lg:p-16 text-center">
//               {/* Decorative Elements */}
//               <div className="absolute top-8 left-8 right-8 flex justify-between opacity-20">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 >
//                   <Sparkles className="w-8 h-8 text-primary" />
//                 </motion.div>
//                 <motion.div
//                   animate={{ rotate: -360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 >
//                   <Zap className="w-8 h-8 text-orange" />
//                 </motion.div>
//               </div>

//               {/* Animated Badge */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//                 className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8"
//               >
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                   className="w-2 h-2 bg-primary rounded-full"
//                 />
//                 <span className="text-sm font-medium text-primary">Limited Time Offer</span>
//               </motion.div>

//               {/* Title with Stagger Animation */}
//               <motion.h3
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="text-5xl lg:text-7xl font-display font-black mb-6"
//               >
//                 <motion.span
//                   className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto]"
//                   animate={{
//                     backgroundPosition: ["0% center", "200% center", "0% center"],
//                   }}
//                   transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                 >
//                   Ready to Transform?
//                 </motion.span>
//               </motion.h3>

//               {/* Description */}
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto mb-10"
//               >
//                 Let's build something extraordinary together. Our team is ready to bring your vision to life.
//               </motion.p>

//               {/* CTA Button with Advanced Hover Effects */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.6, delay: 0.7 }}
//                 className="inline-block"
//               >
//                 <a
//                   href="#contact"
//                   className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full"
//                 >
//                   {/* Button Background */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange rounded-full transition-all duration-500 group-hover/btn:scale-105" />
                  
//                   {/* Subtle Spotlight on hover */}
//                   <div 
//                     className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-full"
//                     style={{
//                       background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)',
//                     }}
//                   />

//                   {/* Button Content */}
//                   <span className="relative z-10 px-10 py-5 text-lg font-bold text-white flex items-center gap-3">
//                     <span>Get Your Free Quote</span>
//                     <motion.div
//                       animate={{ x: [0, 3, 0] }}
//                       transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                     >
//                       <ArrowRight className="w-5 h-5" />
//                     </motion.div>
//                   </span>

//                   {/* Subtle Shine Effect */}
//                   <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//                 </a>
//               </motion.div>

//               {/* Trust Indicators */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//                 className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
//               >
//                 <motion.div 
//                   whileHover={{ scale: 1.1 }}
//                   className="flex items-center gap-2"
//                 >
//                   <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
//                     <div className="w-2 h-2 rounded-full bg-green-500" />
//                   </div>
//                   <span>Free Consultation</span>
//                 </motion.div>
//                 <motion.div 
//                   whileHover={{ scale: 1.1 }}
//                   className="flex items-center gap-2"
//                 >
//                   <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
//                     <div className="w-2 h-2 rounded-full bg-blue-500" />
//                   </div>
//                   <span>24/7 Support</span>
//                 </motion.div>
//                 <motion.div 
//                   whileHover={{ scale: 1.1 }}
//                   className="flex items-center gap-2"
//                 >
//                   <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
//                     <div className="w-2 h-2 rounded-full bg-purple-500" />
//                   </div>
//                   <span>Money-Back Guarantee</span>
//                 </motion.div>
//               </motion.div>
//             </div>

//             {/* Bottom Accent Line */}
//             <motion.div
//               className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
//               initial={{ scaleX: 0 }}
//               animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
//               transition={{ duration: 1, delay: 0.9 }}
//             />
//           </div>
//         </motion.div>

//         {/* Supporting Text */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="text-center text-sm text-muted-foreground mt-8"
//         >
//           Join <motion.span 
//             className="text-primary font-semibold"
//             animate={{ opacity: [1, 0.5, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             500+
//           </motion.span> satisfied clients who transformed their business with us
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;