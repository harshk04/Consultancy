"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type TypewriterConfig = {
  enabled: boolean;
  phrases: readonly string[];
  typeSpeedMs: number;
  deleteSpeedMs: number;
  pauseMs: number;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function normalizePhrases(phrases: readonly string[]) {
  return phrases.map((p) => p.trim()).filter(Boolean);
}

export function Typewriter({
  enabled,
  phrases,
  typeSpeedMs,
  deleteSpeedMs,
  pauseMs,
  className,
}: TypewriterConfig & { className?: string }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const reduceMotion = prefersReducedMotion();
  const safePhrases = useMemo(() => {
    const list = normalizePhrases(phrases);
    return list.length ? list : [""];
  }, [phrases]);
  const safePhrasesKey = useMemo(() => safePhrases.join("\n"), [safePhrases]);

  const phraseForLoop = safePhrases[phraseIndex % safePhrases.length] ?? "";
  const phraseForStatic = safePhrases[0] ?? "";
  const rendered = reduceMotion || !enabled ? phraseForStatic : phraseForLoop.slice(0, charIndex);

  useEffect(() => {
    if (reduceMotion) return;
    if (!enabled) return;
    if (safePhrases.length <= 1 && !safePhrases[0]) return;

    const full = phraseForLoop.length;
    const doneTyping = !isDeleting && charIndex >= full;
    const doneDeleting = isDeleting && charIndex <= 0;

    const t = window.setTimeout(() => {
      if (doneTyping) {
        setIsDeleting(true);
        return;
      }

      if (doneDeleting) {
        setIsDeleting(false);
        setPhraseIndex((v) => (v + 1) % safePhrases.length);
        return;
      }

      setCharIndex((v) => v + (isDeleting ? -1 : 1));
    }, doneTyping || doneDeleting ? pauseMs : isDeleting ? deleteSpeedMs : typeSpeedMs);
    return () => window.clearTimeout(t);
  }, [charIndex, deleteSpeedMs, enabled, isDeleting, pauseMs, phraseForLoop, reduceMotion, safePhrases, typeSpeedMs]);

  useEffect(() => {
    if (reduceMotion || !enabled) return;
    const t = window.setTimeout(() => {
      setCharIndex(0);
      setPhraseIndex(0);
      setIsDeleting(false);
    }, 0);
    return () => window.clearTimeout(t);
  }, [enabled, reduceMotion, safePhrasesKey]);

  return (
    <span className={cn("inline-flex items-baseline gap-1 min-w-0", className)}>
      <span>{rendered}</span>
      {reduceMotion || !enabled ? null : (
        <span className="type-cursor" aria-hidden="true">
          |
        </span>
      )}
    </span>
  );
}
