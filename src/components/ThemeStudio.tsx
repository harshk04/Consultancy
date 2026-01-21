"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/Card";
import { cn } from "@/lib/cn";
import { assetPath } from "@/lib/assetPath";
import type { ThemeConfig } from "@/theme/theme";
import { applyThemeToElement, defaultTheme } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";

function isEqualTheme(a: ThemeConfig, b: ThemeConfig) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (next: string) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold tracking-[0.16em] text-[color:var(--muted)]">{label}</span>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-10 cursor-pointer rounded-lg border border-[color:var(--border)] bg-transparent"
          aria-label={`${label} color picker`}
        />
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-11 w-full rounded-xl border border-[color:var(--border)] bg-white px-3 text-sm text-[color:var(--fg)] shadow-[var(--shadow-soft)] transition-shadow duration-200 hover:shadow-[var(--shadow-soft-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)] focus-visible:shadow-[var(--shadow-soft-hover)] motion-reduce:transition-none"
        />
      </div>
    </label>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  suffix = "",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  onChange: (next: number) => void;
}) {
  return (
    <label className="grid gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-semibold tracking-[0.16em] text-[color:var(--muted)]">{label}</span>
        <span className="text-xs text-[color:var(--muted)]">
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step ?? 1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer accent-[color:var(--brand-blue)]"
      />
    </label>
  );
}

function ToggleField({ label, value, onChange }: { label: string; value: boolean; onChange: (next: boolean) => void }) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3">
      <span className="text-sm font-medium text-[color:var(--fg)]">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className={cn(
          "relative inline-flex h-7 w-12 items-center rounded-full border border-[color:var(--border)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]",
          value ? "bg-[color:color-mix(in_oklab,var(--brand-blue)_18%,white)]" : "bg-[color:color-mix(in_oklab,var(--fg)_6%,white)]",
        )}
      >
        <span
          className={cn(
            "absolute left-1 h-5 w-5 rounded-full bg-white shadow-[var(--shadow-soft)] transition-transform motion-reduce:transition-none",
            value ? "translate-x-5" : "translate-x-0",
          )}
        />
      </button>
    </label>
  );
}

function mergeTheme(base: ThemeConfig, patch: Partial<ThemeConfig>): ThemeConfig {
  return { ...base, ...patch };
}

export function ThemeStudio() {
  const { persistedTheme, setPersistedTheme } = useTheme();

  const [draftTheme, setDraftTheme] = useState<ThemeConfig>(() => persistedTheme ?? defaultTheme);
  const [previewEnabled, setPreviewEnabled] = useState(true);

  const previewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setDraftTheme(persistedTheme);
  }, [persistedTheme]);

  const dirty = useMemo(() => !isEqualTheme(draftTheme, persistedTheme), [draftTheme, persistedTheme]);

  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    applyThemeToElement(previewEnabled ? draftTheme : persistedTheme, el);
  }, [draftTheme, persistedTheme, previewEnabled]);

  const status = dirty ? "Unsaved changes" : "Saved";

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-4xl leading-[1.05] text-[color:var(--fg)]">Theme Studio</h1>
          <p className="mt-3 max-w-2xl text-[color:var(--muted)]">
            Edit gradients and tokens with a safe preview. Changes affect the whole site only when you click Save.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className={cn("rounded-full border px-3 py-1 text-xs", dirty ? "border-[color:var(--border-gold)] bg-white" : "border-[color:var(--border)] bg-white")}>
            {status}
          </span>
          <button
            type="button"
            className={cn(
              "rounded-[var(--radius-pill)] border border-[color:var(--border)] bg-white px-5 py-2.5 text-sm font-medium text-[color:var(--fg)] transition-colors hover:bg-[color:color-mix(in_oklab,var(--brand-blue)_6%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]",
              previewEnabled && "border-[color:var(--border-gold)]",
            )}
            onClick={() => setPreviewEnabled((v) => !v)}
          >
            Preview: {previewEnabled ? "On" : "Off"}
          </button>
          <button
            type="button"
            className="rounded-[var(--radius-pill)] border border-[color:var(--border)] bg-white px-5 py-2.5 text-sm font-medium text-[color:var(--fg)] transition-colors hover:bg-[color:color-mix(in_oklab,var(--fg)_4%,white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
            onClick={() => setDraftTheme(persistedTheme)}
            disabled={!dirty}
          >
            Reset
          </button>
          <button
            type="button"
            className={cn(
              "rounded-[var(--radius-pill)] border border-[color:color-mix(in_oklab,var(--brand-blue)_18%,transparent)] bg-[color:var(--brand-gold-1)] [background-image:var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-blue)] transition-colors hover:text-black hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]",
              !dirty && "opacity-60",
            )}
            onClick={() => setPersistedTheme(draftTheme)}
            disabled={!dirty}
          >
            Save
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Card className="shadow-none">
            <div className="grid gap-7">
              <div className="grid gap-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">GRADIENTS</p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <ColorField
                    label="BLUE START"
                    value={draftTheme.brandBlue1}
                    onChange={(v) => setDraftTheme((t) => mergeTheme(t, { brandBlue1: v }))}
                  />
                  <ColorField
                    label="BLUE END"
                    value={draftTheme.brandBlue2}
                    onChange={(v) => setDraftTheme((t) => mergeTheme(t, { brandBlue2: v }))}
                  />
                  <ColorField
                    label="GOLD START"
                    value={draftTheme.brandGold1}
                    onChange={(v) => setDraftTheme((t) => mergeTheme(t, { brandGold1: v }))}
                  />
                  <ColorField
                    label="GOLD END"
                    value={draftTheme.brandGold2}
                    onChange={(v) => setDraftTheme((t) => mergeTheme(t, { brandGold2: v }))}
                  />
                </div>
                <SliderField
                  label="GRADIENT ANGLE"
                  value={draftTheme.gradientAngle}
                  min={0}
                  max={180}
                  suffix="°"
                  onChange={(v) => setDraftTheme((t) => mergeTheme(t, { gradientAngle: clamp(v, 0, 180) }))}
                />
              </div>

              <div className="grid gap-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">SHAPE</p>
                <SliderField
                  label="CARD RADIUS"
                  value={draftTheme.radiusCard}
                  min={12}
                  max={28}
                  suffix="px"
                  onChange={(v) => setDraftTheme((t) => mergeTheme(t, { radiusCard: clamp(v, 12, 28) }))}
                />
              </div>

              <div className="grid gap-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">DETAIL</p>
                <ToggleField
                  label="Subtle hero noise"
                  value={draftTheme.noiseEnabled}
                  onChange={(v) => setDraftTheme((t) => mergeTheme(t, { noiseEnabled: v }))}
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-7">
          <div
            ref={previewRef}
            className="overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--border)] bg-[color:var(--bg)] shadow-[var(--shadow)]"
          >
            <div className="border-b border-[color:color-mix(in_oklab,var(--brand-gold)_20%,transparent)] bg-[color:var(--brand-blue-1)] [background-image:var(--gradient-blue)]">
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={assetPath("/darkbg.jpeg")}
                    alt="Logo"
                    width={160}
                    height={48}
                    className="h-7 w-auto rounded-md object-contain sm:h-8"
                  />
                  <span className="text-xs font-semibold tracking-[0.12em] text-[color:color-mix(in_oklab,var(--brand-gold)_80%,white)]">
                    Preview
                  </span>
                </div>
                <div className="hidden items-center gap-3 md:flex">
                  <span className="text-sm font-medium text-[color:var(--brand-gold)]">Home</span>
                  <span className="text-sm font-medium text-[color:var(--brand-gold)]">Services</span>
                  <span className="text-sm font-medium text-[color:var(--brand-gold)]">Resources</span>
                </div>
                <div className="rounded-[var(--radius-pill)] border border-[color:color-mix(in_oklab,var(--brand-gold)_35%,transparent)] bg-[color:var(--brand-gold-1)] [background-image:var(--gradient-gold)] px-4 py-2 text-xs font-semibold text-[color:var(--brand-blue)]">
                  Begin a Conversation
                </div>
              </div>
            </div>

            <div className="hero-surface px-6 py-10">
              <h2 className="font-display text-3xl leading-tight text-[color:var(--fg)]">Guiding Minds. Shaping Leaders.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
                This preview area applies your draft theme only when Preview is enabled. Saving updates the entire site.
              </p>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <div className="rounded-[var(--radius-card)] border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">SAMPLE CARD</p>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--fg)]">
                    Thin borders, generous spacing, and a quiet premium gradient treatment.
                  </p>
                  <div className="mt-5 inline-flex rounded-[var(--radius-pill)] border border-[color:var(--border)] bg-transparent px-4 py-2 text-xs font-semibold text-[color:var(--fg)]">
                    View details →
                  </div>
                </div>
                <div className="rounded-[var(--radius-card)] border border-[color:var(--border-gold)] bg-[color:var(--panel)] p-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">GOLD ACCENT</p>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--fg)]">
                    Optional subtle gold-tinted border for emphasis while keeping the overall look minimal.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-10 [background-image:var(--gradient-gold-soft)]">
              <h3 className="font-display text-2xl leading-tight text-[color:var(--brand-blue)]">Begin a Conversation</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--brand-blue)_80%,white)]">
                Gold gradients for CTA sections should stay subtle and premium.
              </p>
              <div className="mt-6 inline-flex rounded-[var(--radius-pill)] border border-[color:color-mix(in_oklab,var(--brand-blue)_25%,transparent)] bg-white/60 px-4 py-2 text-xs font-semibold text-[color:var(--brand-blue)]">
                Begin a Purposeful Conversation
              </div>
            </div>

            <div className="border-t border-[color:color-mix(in_oklab,var(--brand-gold)_20%,transparent)] bg-[color:var(--brand-blue-1)] [background-image:var(--gradient-blue)] px-6 py-8 text-[color:var(--brand-gold)]">
              <div className="flex items-center justify-between gap-6">
                <p className="text-xs text-[color:color-mix(in_oklab,var(--brand-gold)_78%,white)]">© {new Date().getFullYear()} ShreeGuru</p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-[color:var(--brand-gold)]">Sitemap</span>
                  <span className="text-[color:var(--brand-gold)]">Contact</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-[color:var(--muted)]">
            Preview applies to this panel only. Save applies to <span className="font-semibold">:root</span> and persists in localStorage.
          </p>
        </div>
      </div>
    </div>
  );
}
