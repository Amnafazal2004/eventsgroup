"use client"
import { useState } from "react";
import { Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className={`section-label transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              Let's Work Together
            </span>
            <h2 className={`text-5xl lg:text-7xl font-display font-black mt-4 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              Hey! <span className="text-4xl lg:text-6xl inline-block animate-wiggle">👋</span>
            </h2>
            <p className={`text-muted-foreground mt-6 max-w-md leading-relaxed text-lg transition-all duration-500 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              We're here to bring your creative visions to life. If you'd like to collaborate, inquire about our services, or simply say hello, feel free to reach out!
            </p>
            <p className={`mt-8 text-muted-foreground transition-all duration-500 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
              We're passionate about innovation, brilliant ideas and the execution that brings it all together in one beautiful experience.
            </p>
          </div>

          {/* Right - Form */}
          <form
            className={`space-y-6 transition-all duration-700 ${isVisible ? "animate-fade-left" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className={`text-sm block mb-2 transition-colors duration-300 ${focusedField === "name" ? "text-primary" : "text-muted-foreground"}`}>
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="group">
                <label className={`text-sm block mb-2 transition-colors duration-300 ${focusedField === "email" ? "text-primary" : "text-muted-foreground"}`}>
                  Your Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className={`text-sm block mb-2 transition-colors duration-300 ${focusedField === "subject" ? "text-primary" : "text-muted-foreground"}`}>
                Subject *
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-500"
              >
                <option value="">Select a category</option>
                <option value="branding">Branding</option>
                <option value="web">Web Design</option>
                <option value="marketing">Digital Marketing</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>
            <div>
              <label className={`text-sm block mb-2 transition-colors duration-300 ${focusedField === "message" ? "text-primary" : "text-muted-foreground"}`}>
                Message
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-500 resize-none"
                placeholder="Write what you want to say!"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-orange-dark hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-105 active:scale-95 transition-all duration-500 group"
            >
              Let's Work
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
