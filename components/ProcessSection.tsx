"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { guttie } from "@/lib/fonts";

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 mb-10">
        {/* CTA */}
        <div
          className={`mt-20 glass-card border-gray-300 rounded-2xl p-8 lg:p-12 text-center hover-lift transition-all duration-700 ${isVisible ? "animate-scale-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <h3 className={`text-4xl lg:text-5xl font-display font-black ${guttie.className}`}>
            Ready?
          </h3>
          <p className="text-muted-foreground font-[fahkwang] mt-4 text-lg">
            Want to consult with our team ?
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 bg-orange-500 text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-orange-dark hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-105 transition-all duration-500"
          >
            Get quote now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
