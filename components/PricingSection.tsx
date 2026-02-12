"use client"
import { useState } from "react";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = {
  monthly: [
    {
      name: "Starter",
      price: "$1,999",
      period: "month",
      popular: false,
      features: ["Basic brand consultation", "Essential creative concepts", "Minimal logo design", "Starter social media kit", "Basic market insight", "Flexible payment options"],
    },
    {
      name: "Ignite Plan",
      price: "$2,999",
      period: "month",
      popular: true,
      features: ["Extended brand consultation", "Multiple design concepts", "Advanced logo & identity", "Dedicated project manager", "Unified digital assets", "Customizable payment plans"],
    },
    {
      name: "Luminary Plan",
      price: "$3,999",
      period: "month",
      popular: false,
      features: ["Complete brand strategy", "Unlimited creative concepts", "All-in-one marketing package", "24/7 dedicated support", "Expert account management", "Integrated digital & print"],
    },
  ],
  annual: [
    {
      name: "Starter",
      price: "$2,999",
      period: "year",
      popular: false,
      features: ["Basic brand consultation", "Essential creative concepts", "Minimal logo design", "Starter social media kit", "Basic market insight", "Flexible payment options"],
    },
    {
      name: "Ignite Plan",
      price: "$3,999",
      period: "year",
      popular: true,
      features: ["Extended brand consultation", "Multiple design concepts", "Advanced logo & identity", "Dedicated project manager", "Unified digital assets", "Customizable payment plans"],
    },
    {
      name: "Luminary Plan",
      price: "$4,999",
      period: "year",
      popular: false,
      features: ["Complete brand strategy", "Unlimited creative concepts", "All-in-one marketing package", "24/7 dedicated support", "Expert account management", "Integrated digital & print"],
    },
  ],
};

const PricingSection = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className={`section-label transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            // Pricing Table
          </span>
          <h2 className={`section-title mt-4 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            Big or Small? We Have a Plan
          </h2>
          <p className={`text-muted-foreground mt-4 transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            Unlock your creative potential with our flexible, transparent pricing plans designed to turn bold ideas into reality.
          </p>

          {/* Toggle */}
          <div className={`mt-8 inline-flex bg-secondary rounded-full p-1 transition-all duration-500 ${isVisible ? "animate-scale-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 ${billing === "monthly" ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]" : "text-muted-foreground hover:text-foreground"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 ${billing === "annual" ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]" : "text-muted-foreground hover:text-foreground"}`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans[billing].map((plan, i) => (
            <div
              key={`${billing}-${i}`}
              className={`rounded-2xl p-8 relative hover-lift transition-all duration-700 ${
                plan.popular ? "bg-primary text-primary-foreground animate-pulse-glow" : "glass-card"
              } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.3 + i * 0.15}s` }}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-background text-foreground text-xs px-3 py-1 rounded-full font-medium animate-bounce-subtle">
                  PRO
                </span>
              )}
              <div className="text-3xl font-display font-black">
                {plan.price}
                <span className={`text-base font-normal ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  / {plan.period}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mt-2">{plan.name}</h3>
              <p className={`text-sm mt-3 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                Unlock your creative potential with our flexible, transparent pricing plans.
              </p>
              <div className="mt-6 space-y-3">
                <p className={`text-xs uppercase tracking-wider ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  What's included
                </p>
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm group/item">
                    <Check className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:rotate-12" />
                    <span className="transition-all duration-300 group-hover/item:translate-x-1">{f}</span>
                  </div>
                ))}
              </div>
              <button
                className={`mt-8 w-full py-3 rounded-full font-medium text-sm transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                  plan.popular
                    ? "bg-background text-foreground hover:bg-foreground hover:text-background"
                    : "bg-primary text-primary-foreground hover:bg-orange-dark hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
