"use client"
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import team1 from "@/assets/team-1.webp";
import team2 from "@/assets/team-2.webp";
import team3 from "@/assets/team-3.webp";
import team4 from "@/assets/team-4.webp";
import Image from "next/image";

const members = [
  { img: team1, name: "Isabella", role: "Marketing" },
  { img: team2, name: "William", role: "Consultant" },
  { img: team3, name: "Sophia", role: "Brand Strategy" },
  { img: team4, name: "Alexander", role: "HR Director" },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className={`section-label transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              // Meet The Team
            </span>
            <h2 className={`section-title mt-4 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              Professional. Dedicated. Creative.
            </h2>
          </div>
          <a href="#" className="text-primary font-medium link-underline transition-all duration-300 hover:gap-2 inline-flex items-center gap-1">
            View All Teams →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <div
              key={i}
              className={`group cursor-pointer transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.15 + i * 0.12}s` }}
            >
              <div className="rounded-2xl overflow-hidden relative">
                <Image
                  src={m.img}
                  alt={m.name}
                  className="w-full h-[320px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                {/* Social icons placeholder */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {["Fb", "Tw", "Li"].map((s) => (
                    <span key={s} className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold text-foreground hover:bg-primary transition-colors duration-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <h4 className="font-display font-bold text-lg mt-4 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                {m.name}
              </h4>
              <p className="text-muted-foreground text-sm transition-all duration-300 group-hover:text-muted-foreground/80">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
