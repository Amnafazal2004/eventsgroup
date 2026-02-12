"use client"
import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Hook to observe elements entering the viewport for scroll-triggered animations.
 * Returns a ref to attach to the container, and a boolean `isVisible`.
 */
export function useScrollAnimation(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "-50px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/**
 * Hook to observe multiple children for staggered animations.
 * Attach the returned ref to a parent, then children with `data-animate` will animate in sequence.
 */
export function useStaggerAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = el.querySelectorAll("[data-animate]");
          children.forEach((child, i) => {
            const htmlChild = child as HTMLElement;
            htmlChild.style.animationDelay = `${i * 0.12}s`;
            htmlChild.classList.add("is-visible");
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Hook for parallax scroll effect on an element.
 */
export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      if (scrolled > 0 && rect.top < window.innerHeight) {
        el.style.transform = `translateY(${scrolled * speed * -0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}
