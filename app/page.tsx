"use client"

import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWedo from "@/components/WhatWeDo";
import WhyChooseSection from "@/components/WhyChooseSection";
import OurMissionSection from "@/components/OurMissionSection";
import UpcomingEvents from "@/components/UpcomingEvents";
import UpcomingBoardrooms from "@/components/UpcomingBoardrooms";

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
   <div className="min-h-screen bg-black text-white">
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
            <main className="pt-150">
      <HeroSection />
      <AboutSection />
      <OurMissionSection/>
      <WhyChooseSection />
      <WhatWedo />
      <UpcomingEvents/>
      <UpcomingBoardrooms/>
    
  
               
            </main>

        
         
          </div>
           
   </>
  );
};

export default Index;
