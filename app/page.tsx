"use client"

import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWedo from "@/components/WhatWeDo";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProcessSection from "@/components/ProcessSection";
import StatSection from "@/components/StatSection";
import OurMissionSection from "@/components/OurMissionSection";
import UpcomingEvents from "@/components/UpcomingEvents";
import ClientSection from "@/components/ClientSection";
import UpcomingBoardrooms from "@/components/UpcomingBoardrooms";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";

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

          
        </div>
            <main className="">
      <HeroSection />
      <AboutSection />
      <OurMissionSection/>
      <ClientSection/>
      <WhyChooseSection />
      <WhatWedo />
      <UpcomingEvents/>
      <UpcomingBoardrooms/>
      <StatSection />
      {/* <StatsSection /> */}
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer/>
    
  
               
            </main>

        
         
          </div>
           
   </>
  );
};

export default Index;
