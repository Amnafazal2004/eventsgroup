
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
