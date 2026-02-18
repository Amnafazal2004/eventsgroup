
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
import ContactUsPreview from "@/components/ContactUsPreview";
import EventsHighlights from "@/components/EventsHighlights";
import ContactHero from "@/components/ContactHero";


const Index = () => {

    return (
        <>
            <div className="min-h-screen bg-background text-foreground">  
                <HeroSection />
                <AboutSection />
                <OurMissionSection />
                <ClientSection />
                <WhyChooseSection />
                <WhatWedo />
                <UpcomingEvents />
                <UpcomingBoardrooms />
                <StatSection />
                <ProcessSection />
                <EventsHighlights/>
                <TestimonialsSection />
                <ContactSection />
            </div>
        </>
    );
};

export default Index;
