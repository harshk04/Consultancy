"use client";

import Link from "next/link";
import { BrandCard } from "@/components/brand/BrandCard";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function CaseStudyCard({
  title,
  context,
  ourWork,
  impact,
  href,
}: {
  title: string;
  context: string;
  ourWork: string[];
  impact: string[];
  href: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={false}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={href}
        className={cn(
          "block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        )}
      >
        <BrandCard className="h-full p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-serif text-xl tracking-tight text-brand-blue">
              {title}
            </h2>
            <span
              aria-hidden="true"
              className="mt-2 h-2 w-2 flex-none rounded-full bg-brand-gold"
            />
          </div>

          <div className="mt-4 space-y-5">
            <div className="space-y-1">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue/70">
                Context
              </p>
              <p className="text-sm leading-relaxed text-brand-blue">{context}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue/70">
                  Our Work
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-brand-blue">
                  {ourWork.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue/70">
                  Impact
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-brand-blue">
                  {impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm font-medium text-brand-blue">
              Read case study
            </span>
            <span
              aria-hidden="true"
              className="h-px w-16 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
            />
          </div>
        </BrandCard>
      </Link>
    </motion.div>
  );
}
