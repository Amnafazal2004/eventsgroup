"use client"
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import blog1 from "@/assets/blog-1.webp";
import blog2 from "@/assets/blog-2.webp";
import blog3 from "@/assets/blog-3.webp";
import Image from "next/image";

const posts = [
  {
    img: blog1,
    cats: ["Branding", "Marketing"],
    title: "Design Without Limits: Pushing Creative Boundaries",
    excerpt: "In today's crowded digital landscape, creating campaigns that truly stand out requires more than just eye-catching visuals.",
  },
  {
    img: blog2,
    cats: ["Content", "Design"],
    title: "Building a Strong Brand Identity Through Visual Storytelling",
    excerpt: "A strong brand identity tells a story — one that your audience can see, feel, and remember.",
  },
  {
    img: blog3,
    cats: ["Storytelling", "Website"],
    title: "Mastering Content Marketing: Strategies for Agencies",
    excerpt: "For creative agencies, content marketing is more than a buzzword — it's a growth engine.",
  },
];

const BlogSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className={`section-label transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              // Latest News
            </span>
            <h2 className={`section-title mt-4 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              Explore Our Blog & Latest News
            </h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-primary font-medium group transition-all duration-300">
            View All Blog <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article
              key={i}
              className={`group cursor-pointer transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="rounded-2xl overflow-hidden img-reveal">
                <Image
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[250px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
              </div>
              <div className="mt-4">
                <div className="flex gap-2 text-xs uppercase tracking-wider text-primary transition-all duration-300 group-hover:tracking-widest">
                  {p.cats.join(" • ")}
                </div>
                <h3 className="font-display font-bold text-lg mt-2 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">{p.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-3 transition-all duration-500">
                  Continue Reading <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
