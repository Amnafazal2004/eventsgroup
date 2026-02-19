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
  {
    key: "name",
    label: "Your Name*",
    placeholder: "your-name",
    type: "text",
  },
  {
    key: "email",
    label: "Your Mail*",
    placeholder: "your-email@example.com",
    type: "email",
  },
  {
    key: "industry",
    label: "Your Industry*",
    placeholder: "e.g. Tech, Fashion, Finance…",
    type: "text",
  },
  {
    key: "message",
    label: "Your Message",
    placeholder: "Write what you want to say!",
    type: "textarea",
  },
] as const;

type StepKey = (typeof STEPS)[number]["key"];
type FormData = Record<StepKey, string>;

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    industry: "",
    message: "",
  });
  const [toast, setToast] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const currentStep = STEPS[step];

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  }, []);

  const handleNext = () => {
    const value = formData[currentStep.key].trim();
    if (!value && currentStep.key !== "message") {
      showToast("One or more fields have an error. Please check and try again.");
      return;
    }
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1);
    } else {
      setSubmitted(true);
    }
  };
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

  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
        className="py-14 sm:py-18 lg:py-24 px-6 sm:px-10 lg:px-14 overflow-hidden"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

            {/* ── Left card ─────────────────────────────────────────────
                Water-flow animation: comes from bottom-left → upper-right.
                Achieved with a combined x (negative = from left) and y (positive = from below).
            ────────────────────────────────────────────────────────────── */}
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

            {/* ── Right: multi-step form ─────────────────────────────────── */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-2"
                >
                  <p className="text-2xl font-display font-black">Thanks! 🎉</p>
                  <p className="text-muted-foreground">
                    We'll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* ── Animated field ── */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep.key}
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -18 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-3"
                    >
                      {/* Label */}
                      <label className="text-base font-medium text-foreground block">
                        {currentStep.label}
                      </label>

                      {/* Input / Textarea */}
                      {currentStep.type === "textarea" ? (
                        <textarea
                          rows={4}
                          autoFocus
                          value={formData[currentStep.key]}
                          onChange={(e) =>
                            setFormData((d) => ({
                              ...d,
                              [currentStep.key]: e.target.value,
                            }))
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && e.metaKey) handleNext();
                          }}
                          placeholder={currentStep.placeholder}
                          className="w-full bg-transparent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-orange-500 focus:outline-none focus:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-500 resize-none"
                        />
                      ) : (
                        <input
                          autoFocus
                          type={currentStep.type}
                          value={formData[currentStep.key]}
                          onChange={(e) =>
                            setFormData((d) => ({
                              ...d,
                              [currentStep.key]: e.target.value,
                            }))
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleNext();
                          }}
                          placeholder={currentStep.placeholder}
                          className="w-full bg-transparent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-orange-500 focus:outline-none focus:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-500"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* ── Dots + Arrow ──
                      Layout: dots on the left, large white circle arrow on the right.
                      Exactly matches the screenshot — dots are small filled circles,
                      arrow button is a big white circle with a right-arrow icon.
                  ── */}
                  <div className="flex items-center">
                    {/* Pagination dots */}
                    <div className="flex items-center gap-3">
                      {STEPS.map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            backgroundColor:
                              i === step
                                ? "rgb(255,255,255)"
                                : "rgba(255,255,255,0.3)",
                            width: i === step ? 9 : 8,
                            height: i === step ? 9 : 8,
                          }}
                          transition={{ duration: 0.25 }}
                          className="rounded-full"
                        />
                      ))}
                    </div>

                    {/* Large white circle arrow button — pushed to the right */}
                    <motion.button
                      type="button"
                      onClick={handleNext}
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.91 }}
                      className="ml-auto w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:bg-orange-500 hover:text-white transition-colors duration-200 shrink-0"
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