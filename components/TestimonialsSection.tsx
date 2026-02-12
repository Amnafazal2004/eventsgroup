"use client"
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import team1 from "@/assets/team-1.webp";
import team2 from "@/assets/team-2.webp";
import Image from "next/image";

const testimonials = [
  {
    name: "John Fitzgerald",
    role: "Design Manager, HBO",
    img: team2,
    title: "Outstanding creativity and professionalism!",
    text: "They consistently delivered on time and ensured our feedback was incorporated at every step. Highly recommended for anyone looking to take their brand to the next level!",
  },
  {
    name: "Anne Weying",
    role: "Cloud Sales Executive, AMD",
    img: team1,
    title: "Exceptional service and dedication.",
    text: "I am beyond impressed with the dedication and expertise of this creative agency. From start to finish, they provided excellent customer service and always kept us informed.",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className={`section-label transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              // Testimonials
            </span>
            <h2 className={`section-title mt-4 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              Client Success Stories
            </h2>
            <div className={`mt-8 flex items-center gap-4 transition-all duration-500 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 fill-primary text-primary transition-all duration-300 ${isVisible ? "animate-rotate-in" : "opacity-0"}`}
                    style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                  />
                ))}
              </div>
              <span className="text-2xl font-display font-bold">4.9 / 5</span>
            </div>
            <p className={`text-muted-foreground mt-4 transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
              We've delivered <span className="text-foreground font-bold">150+</span> projects that help companies generate real results.
            </p>
          </div>

          {/* Right - Cards */}
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-8 hover-lift transition-all duration-700 ${isVisible ? "animate-fade-left" : "opacity-0"}`}
                style={{ animationDelay: `${0.2 + i * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent hover:ring-primary transition-all duration-500" />
                  <div>
                    <h4 className="font-display font-bold">{t.name}</h4>
                    <p className="text-muted-foreground text-sm">{t.role}</p>
                  </div>
                  <Quote className="w-8 h-8 text-primary/30 ml-auto animate-float" />
                </div>
                <h3 className="font-display font-bold text-lg">{t.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
