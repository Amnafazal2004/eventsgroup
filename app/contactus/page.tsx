"use client";

// import ContactSection from "@/components/ContactSection";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import eventimage from "@/assets/eventimage5.png";
import { guttie } from "@/lib/fonts";
import FollowUs from "@/components/FollowUs";
import { Send, Mail, MapPin, Phone, PhoneCall } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Ease curve matching your existing code ───────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Reusable slide-up wrapper ────────────────────────────────────────────────
function SlideUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// ─── Contact info items ───────────────────────────────────────────────────────
const INFO_ITEMS = [
  {
    icon: Mail,
    label: "Mail Address",
    lines: ["info@eventsfirstgroup.com"],
    href: "mailto:info@eventsfirstgroup.com",
  },
  {
    icon: MapPin,
    label: "Office Address",
    lines: ["Office no: M07, The Light", "Commercial Tower, Arjan, Dubai"],
  },
  {
    icon: Phone,
    label: "Landline",
    lines: ["+971 4 883 4877"],
    href: "tel:+97148834877",
  },
  {
    icon: PhoneCall,
    label: "Phone Number",
    lines: ["+971 56 910 0679", "+971 50 769 1964"],
    href: "tel:+971569100679",
  },
];

// ─── Main component ───────────────────────────────────────────────────────────
const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Stagger counter for info cards
  const cardInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  // Shared input classes
  const inputBase =
    "w-full rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 bg-secondary border transition-all duration-500 outline-none resize-none";
  const inputIdle = "border-border hover:border-orange-500/30";
  const inputFocused =
    "border-orange-500 shadow-[0_0_22px_rgba(249,115,22,0.18)] bg-secondary";

  const inputClass = (field: string) =>
    `${inputBase} ${focusedField === field ? inputFocused : inputIdle}`;

  const labelClass = (field: string) =>
    `text-xs font-semibold uppercase tracking-widest block mb-2.5 transition-colors duration-300 ${
      focusedField === field ? "text-orange-500" : "text-muted-foreground/60"
    }`;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 overflow-hidden bg-background"
    >
      {/* ── Ambient background orbs ─────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-0 -left-60 w-[500px] h-[500px] rounded-full bg-orange-500/6 blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* ══ SECTION 1 — Contact info + map ══════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-20 lg:mb-28">
          {/* Left — Info cards */}
          <div className="flex flex-col gap-4">
            <SlideUp delay={0}>
              <span className="section-label inline-block">Get In Touch</span>
            </SlideUp>

            {INFO_ITEMS.map((item, i) => (
              <SlideUp key={item.label} delay={0.22 + i * 0.09}>
                <motion.div
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-border bg-secondary/50 hover:border-orange-500/40 hover:bg-secondary transition-all duration-400 cursor-default"
                  whileHover={{ y: -3, transition: { duration: 0.25 } }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon size={18} strokeWidth={1.7} />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-1 font-[fahkwang]">
                      {item.label}
                    </p>
                    {item.href
                      ? item.lines.map((line) => (
                          <a
                            key={line}
                            href={item.href}
                            className="block text-sm font-medium text-foreground hover:text-orange-500 transition-colors duration-200 font-[fahkwang]"
                          >
                            {line}
                          </a>
                        ))
                      : item.lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm font-medium text-foreground font-[fahkwang]"
                          >
                            {line}
                          </p>
                        ))}
                  </div>
                </motion.div>
              </SlideUp>
            ))}
          </div>

          {/* Right — Map */}
          <SlideUp delay={0.1} className="h-full min-h-[380px] lg:min-h-0">
            <div className="h-full min-h-[380px] rounded-2xl overflow-hidden border border-border shadow-[0_0_40px_rgba(0,0,0,0.3)]">
              <iframe
                title="Events First Group — Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.396!2d55.2176!3d25.0413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b2a7c8d1234%3A0xabcd!2sThe+Light+Commercial+Tower%2C+Arjan%2C+Dubai!5e0!3m2!1sen!2sae!4v1"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(92%) hue-rotate(185deg) saturate(0.85)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </SlideUp>
        </div>

        {/* Divider */}
        <SlideUp delay={0}>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent mb-20 lg:mb-28" />
        </SlideUp>

        {/* ══ SECTION 2 — Form ════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left — Copy */}
          <div className="flex flex-col gap-5">
            <SlideUp delay={0.05}>
              <span className="section-label inline-block">Drop Us a Line</span>
            </SlideUp>

            <SlideUp delay={0.12}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl  font-black leading-[1.1] ${guttie.className}">
                {/* We are always <span className="text-orange-500">ready</span> to
                help you and answer your questions. */}
                 Let’s Connect
              </h3>
            </SlideUp>

           
            <SlideUp delay={0.24}>
              <p className="text-muted-foreground font-[fahkwang] text-base leading-relaxed">
                {/* We're passionate about innovation, brilliant ideas and the
                execution that brings it all together in one beautiful
                experience. */}
                Have a vision for your next event? We’re here to bring it to life.
                Drop us a line with your questions, and let’s start building your next beautiful experience together.
              </p>
            </SlideUp>
          </div>

          {/* Right — Form */}
            <motion.form
            className="flex flex-col gap-6 font-[fahkwang]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            onSubmit={handleSubmit}
            >
            {/* Row 1 — Name / Email */}
            <motion.div
                className="grid md:grid-cols-2 gap-4 sm:gap-5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            >
                <div className="group">
                <label
                    className={`text-sm block mb-2 transition-colors duration-300 ${
                    focusedField === "name"
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                >
                    Your Name *
                </label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-500"
                    placeholder="John Doe"
                />
                </div>
                <div className="group">
                <label
                    className={`text-sm block mb-2 transition-colors duration-300 ${
                    focusedField === "email"
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                >
                    Your Email *
                </label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-500"
                    placeholder="john@example.com"
                />
                </div>
            </motion.div>

            {/* Row 2 — Subject */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.33, ease: EASE }}
            >
                <div className="group">
                <label
                    className={`text-sm block mb-2 transition-colors duration-300 ${
                    focusedField === "subject"
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                >
                    Subject *
                </label>
                <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                    }
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-500"
                    placeholder="e.g. Project Inquiry"
                />
                </div>
            </motion.div>

            {/* Message */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.41, ease: EASE }}
            >
                <label
                className={`text-sm block mb-2 transition-colors duration-300 ${
                    focusedField === "message"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                >
                Message
                </label>
                <textarea
                rows={5}
                value={formData.message}
                onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                }
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-500"
                placeholder="Write what you want to say!"
                />
            </motion.div>

            {/* Submit row */}
            <motion.div
                className="flex items-center gap-5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.49, ease: EASE }}
            >
                <motion.button
                type="submit"
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 44px hsl(var(--primary)/0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 bg-orange-500 text-primary-foreground px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-semibold text-sm tracking-wide transition-colors duration-300 group relative overflow-hidden"
                >
                {/* Shine sweep */}
                <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                />
                Let's Work
                <motion.span
                    animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                    transition={{ delay: 1.4, duration: 0.6, ease: "easeInOut" }}
                >
                    <Send
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                </motion.span>
                </motion.button>
                {/* <button
            type="submit" className="flex items-center gap-2 bg-orange-500 text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-orange-dark hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-105 active:scale-95 transition-all duration-500 group"
            >
            Let's Work
            <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button> */}
            </motion.div>
            </motion.form>
        </div>
      </div>
    </section>
  );
};

const page = () => {
  return (
    <div>
      <motion.section
        className="w-full px-6 md:px-12 pt-28"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto space-y-4">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white ${guttie.className}`}
          >
            CONTACT US
          </h1>

          {/* Breadcrumb */}
          <div className="text-sm font-[fahkwang] text-amber-600">
            Home
            <span className="mx-2">/</span>
            <span>Contact Us</span>
          </div>

          {/* Banner Image */}
          <div className="w-full h-40 md:h-56 relative rounded-lg overflow-hidden">
            <Image
              src={eventimage}
              alt="About Banner"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>
      <ContactSection />
      <FollowUs />
    </div>
  );
};

export default page;
