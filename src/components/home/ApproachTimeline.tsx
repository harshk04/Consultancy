"use client";

import { home } from "@/content/content";
import { BrandCard } from "@/components/brand/BrandCard";
import { motion, useReducedMotion } from "framer-motion";

export function ApproachTimeline() {
  const reduceMotion = useReducedMotion();
  const items = home.approach.points;

  return (
    <BrandCard className="p-7">
      <div className="relative pl-6">
        <div
          aria-hidden="true"
          className="absolute left-2 top-1 bottom-1 w-px bg-gradient-to-b from-brand-gold/60 via-brand-gold/25 to-transparent"
        />
        <ul className="space-y-6">
          {items.map((item, idx) => (
            <li key={item} className="relative">
              <motion.span
                aria-hidden="true"
                className="absolute -left-6 top-1.5 h-3 w-3 rounded-full bg-brand-gold shadow-sm"
                initial={reduceMotion ? false : { scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
              />
              <p className="text-sm leading-relaxed text-brand-blue">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </BrandCard>
  );
}

