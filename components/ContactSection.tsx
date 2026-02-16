"use client"

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Send } from "lucide-react";
import { guttie } from "@/lib/fonts";

const ContactSectionAlternative = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", industry: "", phone: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Content */}
          <div className="space-y-6">
            <motion.span 
              className="section-label inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Let's Work Together
            </motion.span>
            
            <motion.h2
              className="text-5xl lg:text-7xl font-display font-black"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Hey! <motion.span 
                className={`text-4xl lg:text-6xl inline-block ${guttie.className}`}
                animate={isInView ? { rotate: [0, 14, -8, 14, -4, 10, 0] } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                👋
              </motion.span>
            </motion.h2>
            
            <motion.p
              className="text-muted-foreground max-w-md leading-relaxed text-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              We're here to bring your creative visions to life. If you'd like to collaborate, inquire about our services,
              or simply say hello, feel free to reach out!
            </motion.p>
            
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              We're passionate about innovation, brilliant ideas and the execution that brings it all together in one
              beautiful experience.
            </motion.p>
          </div>

          {/* Right - Form */}
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="group">
                <label
                  className={`text-sm block mb-2 transition-colors duration-300 ${
                    focusedField === "name" ? "text-orange-500" : "text-muted-foreground"
                  }`}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:border-orange-500 focus:outline-none focus:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="group">
                <label
                  className={`text-sm block mb-2 transition-colors duration-300 ${
                    focusedField === "email" ? "text-orange-500" : "text-muted-foreground"
                  }`}
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:border-orange-500 focus:outline-none focus:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-500"
                  placeholder="john@example.com"
                />
              </div>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="group">
                <label
                  className={`text-sm block mb-2 transition-colors duration-300 ${
                    focusedField === "industry" ? "text-orange-500" : "text-muted-foreground"
                  }`}
                >
                  Industry *
                </label>
                <input
                  type="text"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  onFocus={() => setFocusedField("industry")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:border-orange-500 focus:outline-none focus:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-500"
                  placeholder="Industry"
                />
              </div>

              <div className="group">
                <label
                  className={`text-sm block mb-2 transition-colors duration-300 ${
                    focusedField === "phone" ? "text-orange-500" : "text-muted-foreground"
                  }`}
                >
                  Your Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:border-orange-500 focus:outline-none focus:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-500"
                  placeholder="123-456-7890"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <label
                className={`text-sm block mb-2 transition-colors duration-300 ${
                  focusedField === "message" ? "text-orange-500" : "text-muted-foreground"
                }`}
              >
                Message
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:border-orange-500 focus:outline-none focus:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-500 resize-none"
                placeholder="Write what you want to say!"
              />
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(249,115,22,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-medium hover:bg-orange-600 transition-colors duration-300 group"
            >
              Let's Work
              <motion.div
                animate={isInView ? { x: [0, 4, 0], y: [0, -4, 0] } : {}}
                transition={{ delay: 1.3, duration: 0.6, ease: "easeInOut" }}
              >
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.div>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionAlternative;