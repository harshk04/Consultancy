"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageSquareText } from "lucide-react";

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand-gold/45 bg-brand-blue px-4 py-2 text-sm font-medium text-white shadow-glow transition hover:border-brand-gold hover:bg-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <MessageSquareText className="h-4 w-4 text-brand-gold" aria-hidden="true" />
            Begin a Conversation
          </Link>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

