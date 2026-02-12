// "use client"
// import { useRef } from "react";
// import { ArrowRight } from "lucide-react";
// import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

// const features = [
//   {
//     title: "Harnessing the Power of Ideas",
//     desc: "We transform creative concepts into inspiring campaigns.",
//   },
//   {
//     title: "Ultimate Connectivity",
//     desc: "By seamlessly merging modern marketing with breakthrough design, we craft a unique identity for every brand.",
//   },
//   {
//     title: "Partners in Success",
//     desc: "With attentive listening and close collaboration, we elevate each project to unprecedented heights.",
//   },
// ];

// const AboutSection = () => {
//   const { ref, isVisible } = useScrollAnimation();
//   const staggerRef = useStaggerAnimation();

//   return (
//     <section id="about" className="py-24 lg:py-32" ref={ref}>
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Left */}
//           <div>
//             <span className={`section-label transition-all duration-700 ${isVisible ? "animate-fade-in opacity-100" : "opacity-0"}`}>
//               // About DreamsLab
//             </span>
//             <p className={`text-primary font-medium mt-2 transition-all duration-700 delay-100 ${isVisible ? "animate-fade-in opacity-100" : "opacity-0"}`}>
//               since 1996
//             </p>
//             <h2 className={`section-title mt-6 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
//               Sparking Ideas,
//               <br />
//               <span className={`text-gradient-orange ${isVisible ? "text-shimmer animate-shimmer" : ""}`}>Igniting Success.</span>
//             </h2>
//             <p className={`text-muted-foreground mt-6 max-w-md leading-relaxed transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
//               With 20+ years in the brand building business, we are skilled at making you stand out. Ready to reach your audience, secure greater sales and entice top talent?
//             </p>

//             <div ref={staggerRef} className="mt-8 flex flex-col gap-6">
//               {features.map((f, i) => (
//                 <div
//                   key={i}
//                   data-animate
//                   className={`border-l-2 border-primary pl-4 scroll-animate transition-all duration-500 hover:translate-x-2 hover:border-l-4 ${isVisible ? "animate-fade-right is-visible" : ""}`}
//                   style={{ animationDelay: `${0.4 + i * 0.15}s` }}
//                 >
//                   <h4 className="font-display font-bold text-lg">{f.title}</h4>
//                   <p className="text-muted-foreground text-sm mt-1">{f.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <a
//               href="#services"
//               className={`mt-8 inline-flex items-center gap-2 text-primary font-medium group transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
//               style={{ animationDelay: "0.7s" }}
//             >
//               More About Us <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
//             </a>
//           </div>

//           {/* Right - Mission */}
//           <div
//             className={`glass-card rounded-2xl p-8 lg:p-12 flex flex-col justify-center hover-lift transition-all duration-700 ${isVisible ? "animate-fade-left" : "opacity-0"}`}
//             style={{ animationDelay: "0.3s" }}
//           >
//             <span className="section-label">Our Mission</span>
//             <p className="mt-6 text-xl lg:text-2xl font-display leading-relaxed text-foreground/80">
//               Empowering brands with innovative solutions to reach their full potential through creativity and collaboration. We believe in the power of ideas to transform and inspire.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import project1 from "@/assets/project-1.webp";
import project2 from "@/assets/project-2.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="w-full bg-black pt-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col gap-6">
        <motion.h4
    className="text-amber-600 text-sm tracking-wider"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    ABOUT
  </motion.h4>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-4xl md:text-5xl font-bold leading-snug text-white">
              <span className="block">Welcome to</span>
              <span className="block">Our Company</span>
            </h3>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            className="mt-4 text-gray-400 text-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We provide top-notch services with a focus on innovation, quality,
            and customer satisfaction. Our team works tirelessly to exceed
            expectations and bring ideas to life.
          </motion.p>

          {/* Images */}
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Image
              src={project1}
              alt="About Image 1"
              className="w-1/2 h-60 object-cover rounded-lg"
            />
            <Image
              src={project2}
              alt="About Image 2"
              className="w-1/2 h-60 object-cover rounded-lg"
            />
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block">We craft exceptional</span>
            <span className="block">event experiences</span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Our company specializes in delivering innovative solutions and
            creating memorable experiences for our clients. We focus on quality,
            creativity, and excellence in every project we undertake. Our range
            of services includes conferences, exhibitions, managed events, and
            executive round tables. We are adept at all types of events with
            clients ranging from Government Entities, Large Corporations, and
            Small and Medium Enterprises. Identifying your needs and delivering
            on them, we work together towards a blueprint of success for your
            company!
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button className="mt-4 py-2 bg-black text-white font-medium border border-amber-600 rounded-3xl hover:bg-amber-600 hover:text-black transition-all duration-300 w-48 mx-auto">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
