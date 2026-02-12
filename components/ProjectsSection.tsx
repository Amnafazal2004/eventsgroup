"use client"
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/project-1.webp";
import project2 from "@/assets/project-2.webp";
import project3 from "@/assets/project-3.webp";
import project4 from "@/assets/project-4.webp";
import Image from "next/image";

const projects = [
  { img: project1, title: "Elevating Visual Narratives", tags: ["Creative", "Digital Marketing"] },
  { img: project2, title: "Telling Stories That Matter", tags: ["Branding", "Graphic Design"] },
  { img: project3, title: "From Concept to Impact", tags: ["Branding", "Creative"] },
  { img: project4, title: "The Art of Digital Storytelling", tags: ["Digital Marketing", "Web Design"] },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className={`section-label transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              Showcasing Our Outstanding Projects
            </span>
            <h2
              className={`section-title mt-4 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "0.1s" }}
            >
              Projects
            </h2>
          </div>
          <p className={`text-muted-foreground max-w-md transition-all duration-500 ${isVisible ? "animate-fade-left" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            At our creative agency, we transform bold ideas into outstanding projects that captivate and inspire audiences.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group cursor-pointer transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="rounded-2xl overflow-hidden relative img-reveal">
                <Image
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[350px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <span className="text-primary-foreground font-display font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Project →
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex gap-2 mb-2">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="text-xs uppercase tracking-wider text-primary transition-all duration-300 group-hover:tracking-widest">
                      {tag}{j < p.tags.length - 1 ? " •" : ""}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-display font-bold group-hover:text-primary transition-all duration-300 group-hover:translate-x-2">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
