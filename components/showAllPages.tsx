"use client"

import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/WhatWeDo";
import WhyChooseSection from "@/components/WhyChooseSection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/UpcomingEvents";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
   const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

  return (
   <>
   <div className="min-h-screen bg-background text-foreground">
       <div>
            <motion.header
                className="header"
                animate={{
                    y: hidden ? -140 : 0,
                    opacity: hidden ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                        <Header/>
            </motion.header>

            <main>
                <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <StatsSection />
      <ProcessSection />
      <ProjectsSection />
      
      <TestimonialsSection />
      <ContactSection />
      <Footer />
               
            </main>

          
        </div>
        
         
          </div>
           
   </>
  );
};

export default Index;
