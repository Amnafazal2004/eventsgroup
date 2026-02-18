"use client";
import AboutSection from "@/components/AboutSection";
import { motion } from "framer-motion";
import Image from "next/image";
import eventimage from "@/assets/eventimage5.png";
import { guttie } from "@/lib/fonts";
import FollowUs from "@/components/FollowUs";

const page = () => {
    return (
        <div>
            <motion.section className="w-full px-6 md:px-12 pt-28"
             initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>

                <div className="max-w-6xl mx-auto space-y-4">
                    <h1 className={`text-4xl md:text-5xl font-bold text-white ${guttie.className}`}>
                       ABOUT US
                    </h1>

                    {/* Breadcrumb */}
                    <div className="text-sm font-[fahkwang] text-amber-600">
                        Home
                        <span className="mx-2">/</span>
                        <span>About Us</span>
                    </div>

                    {/* Banner Image */}
                    <div className="w-full h-40 md:h-56 relative rounded-lg overflow-hidden">
                        <Image
                            src={eventimage}
                            alt="About Banner"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </motion.section>

            <AboutSection nextPage={true} />

            <section className="w-full px-6 md:px-12 py-16">
                <div className="max-w-6xl mx-auto space-y-8">

                    {/* Main Paragraph */}
                    <motion.p
                        className="text-gray-400 text-sm md:text-base font-[fahkwang] leading-relaxed text-center md:text-left"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        At Events First Group, every detail matters. From conception to execution, we personalize each event to align with your vision, goals, and brand identity. Meticulous planning, innovative thinking, and our extensive network create captivating environments that leave a lasting impression. We take extreme pride in our work and commitment toward the partners and relationships we build along the way.
                    </motion.p>

                    {/* Centered Line */}
                    <motion.p
                        className="text-gray-400 text-base md:text-lg font-[fahkwang] text-center font-medium"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        Experience the difference today – contact us to unlock the full potential of your next event.
                    </motion.p>

                </div>

            </section>
             <FollowUs/>
        </div>
    );
};

export default page;
