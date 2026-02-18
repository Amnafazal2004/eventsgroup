"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { guttie } from "@/lib/fonts";

// ─── Toast ────────────────────────────────────────────────────────────────────
const Toast = ({ message, visible }: { message: string; visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        key="toast"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-center gap-2 border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background w-full"
      >
        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-muted-foreground text-muted-foreground text-xs font-bold shrink-0">
          i
        </span>
        {message}
      </motion.div>
    )}
  </AnimatePresence>
);

// ─── Step definitions ─────────────────────────────────────────────────────────
const STEPS = [
  { key: "name",     label: "Your Name*",    placeholder: "your-name",               type: "text"     },
  { key: "email",    label: "Your Mail*",    placeholder: "your-email@example.com",  type: "email"    },
  { key: "industry", label: "Your Industry*",placeholder: "e.g. Tech, Fashion…",    type: "text"     },
  { key: "message",  label: "Your Message",  placeholder: "Write what you want to say!", type: "textarea" },
] as const;

type StepKey  = (typeof STEPS)[number]["key"];
type FormData = Record<StepKey, string>;

// ─── Floating decorative circle ───────────────────────────────────────────────
const FloatingCircle = ({
  size,
  className,
  delay = 0,
}: {
  size: number;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`rounded-full border border-white/20 ${className}`}
    style={{ width: size, height: size }}
    animate={{
      y: [0, -18, 0],
      x: [0, 8, 0],
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  />
);

// ─── Hero Banner ──────────────────────────────────────────────────────────────
const ContactHero = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="w-full overflow-hidden">
      {/* Full-width image block */}
      <div className="relative w-full h-[55vh] sm:h-[62vh] lg:h-[70vh] overflow-hidden">
        {/* Actual image — replace with your asset */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/contact-hero.jpg')` }}
        />
        {/* Rich red tint replicating the screenshot */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-800 to-red-900 opacity-90" />

        {/*
          ── Oversized heading anchored to BOTTOM-LEFT corner ──
          Matches the screenshot where text sits in the lower-left
          and the right portion bleeds off-screen.
        */}
        <div className="absolute bottom-0 left-0 overflow-hidden w-full">
          <motion.h1
            className="font-display font-black text-white uppercase tracking-tighter select-none"
            style={{
              fontSize: "clamp(4.5rem, 15vw, 19rem)",
              lineHeight: 0.83,
              whiteSpace: "nowrap",
            }}
            initial={{ opacity: 0, y: 110, x: -40 }}
            animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 110, x: -40 }}
            transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          >
            LET&apos;SWORKUS
          </motion.h1>
        </div>
      </div>

      {/* Subtitle below image — full width, left-aligned */}
      <motion.p
        className="px-6 sm:px-10 lg:px-16 py-5 sm:py-7 text-muted-foreground text-sm sm:text-base lg:text-[1.05rem]"
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        We're passionate about innovation, brilliant ideas and the execution
        that brings it all together in one beautiful experience.
      </motion.p>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const ContactSection = () => {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-70px" });

  const [step,      setStep]      = useState(0);
  const [formData,  setFormData]  = useState<FormData>({ name: "", email: "", industry: "", message: "" });
  const [toast,     setToast]     = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const current = STEPS[step];

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  }, []);

  const handleNext = () => {
    if (!formData[current.key].trim() && current.key !== "message") {
      showToast("One or more fields have an error. Please check and try again.");
      return;
    }
    step < STEPS.length - 1 ? setStep(s => s + 1) : setSubmitted(true);
  };

  // ── Stagger container for the card children ──────────────────────────────
  const cardContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
  };
  const cardChild = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <ContactHero />

      {/* ── Form section ─────────────────────────────────────────────────── */}
      <section
        id="contact"
        ref={sectionRef}
        className="relative py-16 sm:py-20 lg:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

            {/*
              ── LEFT CARD ────────────────────────────────────────────────────
              The entire left column is a relative wrapper so we can position
              the decorative circles absolutely around the card — exactly
              as seen on dreamslab.bravisthemes.com.
            */}
            <div className="relative">

              {/* ─ Top-left decorative circle (outline, small) ─ */}
              <motion.div
                className="absolute -top-8 -left-8 z-0"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <FloatingCircle
                  size={52}
                  className="border-2 border-white/25 bg-transparent"
                  delay={0}
                />
              </motion.div>

              {/* ─ Large decorative circle — LEFT of the card, vertically centred ─ */}
              <motion.div
                className="absolute -left-16 top-1/2 -translate-y-1/2 z-0 hidden sm:block"
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <FloatingCircle
                  size={80}
                  className="bg-white/90 border-0 shadow-[0_0_0_6px_rgba(255,255,255,0.15)]"
                  delay={1.2}
                />
              </motion.div>

              {/*
                ── THE CARD ────────────────────────────────────────────────
                Dreamslab animation: the card rises from bottom-left toward
                upper-right — a diagonal float-in with a strong spring ease.
                Children stagger in after the card arrives.
              */}
              <motion.div
                className="relative z-10 rounded-3xl p-8 sm:p-10 lg:p-12 space-y-5 ml-0 sm:ml-8"
                style={{ backgroundColor: "#efefed" }}
                initial={{ opacity: 0, x: -60, y: 80 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -60, y: 80 }}
                transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                variants={cardContainer}
                // We can't use both initial/animate AND variants cleanly here,
                // so we drive children manually with the parent inView state:
              >
                {/* Heading */}
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-neutral-900"
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  Hey!{" "}
                  {/* Animated waving hand — bounces on enter like the GIF on dreamslab */}
                  <motion.span
                    className={`inline-block ${guttie.className}`}
                    initial={{ rotate: 0 }}
                    animate={inView ? { rotate: [0, 20, -12, 20, -8, 14, 0] } : {}}
                    transition={{ delay: 1.1, duration: 0.8, ease: "easeInOut" }}
                  >
                    👋
                  </motion.span>
                </motion.h2>

                {/* Body text */}
                <motion.p
                  className="text-neutral-500 text-base sm:text-lg leading-relaxed max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  We're here to bring your creative visions to life. If you'd
                  like to collaborate, inquire about our services, or simply say
                  hello, feel free to reach out!
                </motion.p>
              </motion.div>
            </div>

            {/*
              ── RIGHT: multi-step form ──────────────────────────────────────
              Fades + slides up from below, slight delay after the card.
            */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 44 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-2"
                >
                  <p className="text-2xl font-display font-black">Thanks! 🎉</p>
                  <p className="text-muted-foreground">We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <>
                  {/* Animated field */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.key}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-3"
                    >
                      <label className="text-base font-medium text-foreground block">
                        {current.label}
                      </label>

                      {current.type === "textarea" ? (
                        <textarea
                          rows={4}
                          autoFocus
                          value={formData[current.key]}
                          onChange={e => setFormData(d => ({ ...d, [current.key]: e.target.value }))}
                          onKeyDown={e => { if (e.key === "Enter" && e.metaKey) handleNext(); }}
                          placeholder={current.placeholder}
                          className="w-full bg-transparent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-orange-500 focus:outline-none focus:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-500 resize-none"
                        />
                      ) : (
                        <input
                          autoFocus
                          type={current.type}
                          value={formData[current.key]}
                          onChange={e => setFormData(d => ({ ...d, [current.key]: e.target.value }))}
                          onKeyDown={e => { if (e.key === "Enter") handleNext(); }}
                          placeholder={current.placeholder}
                          className="w-full bg-transparent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-orange-500 focus:outline-none focus:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-500"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/*
                    ── Dots + Arrow row ──────────────────────────────────────
                    Dots left, large white circle arrow right — identical to
                    the dreamslab / screenshot layout.
                  */}
                  <div className="flex items-center">
                    {/* Pagination dots */}
                    <div className="flex items-center gap-3">
                      {STEPS.map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            backgroundColor: i === step ? "rgb(255,255,255)" : "rgba(255,255,255,0.28)",
                            width:  i === step ? 10 : 8,
                            height: i === step ? 10 : 8,
                          }}
                          transition={{ duration: 0.28 }}
                          className="rounded-full"
                        />
                      ))}
                    </div>

                    {/* Large white circle arrow — dreamslab style */}
                    <motion.button
                      type="button"
                      onClick={handleNext}
                      whileHover={{ scale: 1.08, backgroundColor: "rgb(249,115,22)" }}
                      whileTap={{ scale: 0.91 }}
                      className="ml-auto w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-colors duration-200 hover:text-white shrink-0"
                      aria-label="Next step"
                    >
                      <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
                    </motion.button>
                  </div>

                  {/* Toast error */}
                  <Toast message={toast ?? ""} visible={!!toast} />
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;