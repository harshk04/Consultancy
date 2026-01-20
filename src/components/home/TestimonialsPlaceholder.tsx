"use client";

import { useEffect, useState } from "react";
import { BrandCard } from "@/components/brand/BrandCard";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const placeholders = ["Coming soon", "Coming soon", "Coming soon"];

export function TestimonialsPlaceholder() {
  const [idx, setIdx] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIdx((v) => (v + 1) % placeholders.length);
    }, 3800);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <BrandCard className="relative overflow-hidden p-7">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(700px_260px_at_25%_20%,rgba(30,58,138,0.10),transparent_60%),radial-gradient(520px_240px_at_80%_40%,rgba(200,162,74,0.12),transparent_60%)]"
      />
      <div className="relative">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue/70">
          Testimonials
        </p>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={idx}
            className="mt-4 font-serif text-xl tracking-tight text-brand-blue"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {placeholders[idx]}
          </motion.p>
        </AnimatePresence>
        <p className="mt-3 text-sm text-brand-blue/75">
          Reflections from partner institutions will appear here.
        </p>
      </div>
    </BrandCard>
  );
}

