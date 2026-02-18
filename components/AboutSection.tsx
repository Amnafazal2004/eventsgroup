"use client"
import eventimage2 from "@/assets/eventimage2.png";
import eventimage1 from "@/assets/eventimage1.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { guttie } from "@/lib/fonts";
import Link from "next/link";

const AboutSection = ({nextPage = false}) => {
  return (
    <section className={nextPage ? "w-full pt-15 px-6 md:px-12" : "w-full pt-20 px-6 md:px-12"}>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col gap-6">
        {!nextPage ?
          <motion.h4
            className="text-amber-600 text-sm font-[fahkwang] tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            ABOUT
          </motion.h4>
          : null }

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className={`"text-4xl md:text-5xl font-bold leading-snug ${guttie.className} text-white"`}>
              <span className="block">WELCOME TO</span>
              <span className="block">OUR COMPANY</span>
            </h3>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            className={`mt-4 text-gray-400 text-sm font-[fahkwang]`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            First choice for events. We specialize in creating exceptional B2B events tailored to meet the unique needs and goals of clients. With years of experience in the industry, we have built a reputation for delivering high-quality conferences, summits, exhibitions, and managed events that provide our clients with the best networking experience and help them build their potential business.
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
              src={eventimage1}
              alt="About Image 1"
              className="w-1/2 h-60 object-cover rounded-lg"
            />
            <Image
              src={eventimage2}
              alt="About Image 2"
              className="w-1/2 h-60 object-cover rounded-lg"
            />
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Heading */}
          <motion.h2
            className={`text-4xl md:text-5xl font-bold text-white  ${guttie.className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block">WE CRAFT EXCEPTIONAL</span>
            <span className="block">EVENT EXPERIENCES</span>
          </motion.h2>

        {
          nextPage ?   <motion.p
            className="text-gray-400 text-sm font-[fahkwang]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >   
            Our team, backed by over 15 years of collective experience, brings a wealth of knowledge and know-how to the table. With an extensive track record of success, we have cultivated strong connections with industry leaders, initiating collaborative partnerships aimed at assisting them in effectively reaching their objectives. Whether it is expanding your market presence, establishing valuable connections with key prospects, nurturing existing relationships, or implementing strategic initiatives, we remain dedicated to providing comprehensive support tailored to your specific goals every step of the way.
          </motion.p>
        : 
           <motion.p
            className="text-gray-400 text-sm font-[fahkwang]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Our range of services, including conferences, exhibitions, managed events, and executive round tables. We are adept at all types of events with clients ranging from Government Entities, Large Corporations, and Small and medium enterprises. Identifying your needs and delivering on them, we work together towards a blueprint of success for your company!
          </motion.p>
        }
       

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
           {!nextPage ? <Link href={"/aboutus"}>
              <button className="mt-4 py-2 bg-black font-[fahkwang] text-white font-medium border border-amber-600 rounded-3xl hover:bg-amber-600 hover:text-black transition-all duration-300 w-48 mx-auto">
                Learn More
              </button>
            </Link> : null }
          </motion.div>
        </div>
       
      </div>
    </section>
  );
};

export default AboutSection;
