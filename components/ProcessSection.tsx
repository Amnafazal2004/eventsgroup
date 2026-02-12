"use client"
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "Discovery and Research",
    desc: "Identify client needs and gather market insights through focused stakeholder discussions and basic market analysis.",
    items: ["Conduct stakeholder meetings to understand objectives.", "Perform competitive analysis and research market trends."],
  },
  {
    num: "02",
    title: "Strategy Development",
    desc: "Craft a focused strategy that aligns client goals with market trends and brand values.",
    items: ["Define a clear brand message and value proposition.", "Outline actionable steps to reach the target audience."],
  },
  {
    num: "03",
    title: "Creative Concepting",
    desc: "Develop creative concepts to transform the strategy into engaging visual and narrative ideas.",
    items: ["Brainstorm innovative ideas and design directions.", "Create mood boards to visualize the creative direction."],
  },
  {
    num: "04",
    title: "Execution and Implementation",
    desc: "Bring creative ideas to life with efficient execution and continuous refinement.",
    items: ["Finalize design assets and launch marketing campaigns.", "Monitor performance and adjust strategies based on feedback."],
  },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <span className={`section-label transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          // Working Process
        </span>
        <h2
          className={`section-title mt-6 max-w-3xl transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          We are combining our love of well-designed websites with our marketing knowledge.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`relative group transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <span className="text-6xl font-display font-black text-secondary transition-all duration-500 group-hover:text-primary/30 group-hover:scale-110 inline-block">
                {s.num}
              </span>
              <h3 className="font-display font-bold text-xl mt-4 transition-colors duration-300 group-hover:text-primary">{s.title}</h3>
              <p className="text-muted-foreground text-sm mt-3">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.items.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2 transition-all duration-300 group-hover:translate-x-1" style={{ transitionDelay: `${j * 100}ms` }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0 transition-transform duration-300 group-hover:scale-150" />
                    {item}
                  </li>
                ))}
              </ul>
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className={`hidden lg:block absolute top-8 -right-4 border-t border-dashed border-border transition-all duration-1000 ${isVisible ? "w-8 opacity-100" : "w-0 opacity-0"}`} style={{ transitionDelay: `${0.8 + i * 0.2}s` }} />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-20 glass-card rounded-2xl p-8 lg:p-12 text-center hover-lift transition-all duration-700 ${isVisible ? "animate-scale-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <h3 className="text-4xl lg:text-5xl font-display font-black">Ready?</h3>
          <p className="text-muted-foreground mt-4 text-lg">Code. Create. Conquer. With us, no regrets.</p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-orange-dark hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-105 transition-all duration-500"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
