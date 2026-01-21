"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

function encode(value: string) {
  return encodeURIComponent(value);
}

function buildAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl;
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  if (!origin) return pathOrUrl;
  return new URL(pathOrUrl, origin).toString();
}

export function ShareBar({
  title,
  path,
  className,
}: {
  title: string;
  path: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const url = useMemo(() => buildAbsoluteUrl(path), [path]);

  const links = useMemo(() => {
    const shareText = title;
    return {
      x: `https://twitter.com/intent/tweet?text=${encode(shareText)}&url=${encode(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encode(url)}`,
      whatsapp: `https://wa.me/?text=${encode(`${shareText} — ${url}`)}`,
      email: `mailto:?subject=${encode(shareText)}&body=${encode(url)}`,
    };
  }, [title, url]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      window.prompt("Copy this link:", url);
    }
  };

  const onNativeShare = async () => {
    try {
      if (!navigator.share) return;
      await navigator.share({ title, url });
    } catch {
      // Ignore user cancel.
    }
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[color:var(--border)] bg-white/70 px-4 py-3 backdrop-blur",
        className,
      )}
    >
      <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">SHARE</p>
      <div className="flex flex-wrap items-center gap-2">
        {typeof navigator !== "undefined" && "share" in navigator ? (
          <button
            type="button"
            onClick={onNativeShare}
            className="rounded-[var(--radius-pill)] border border-[color:var(--border)] bg-white px-3 py-2 text-xs font-semibold text-[color:var(--fg)] transition-colors hover:bg-[color:color-mix(in_oklab,var(--fg)_4%,white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
          >
            Share…
          </button>
        ) : null}

        <button
          type="button"
          onClick={onCopy}
          className="rounded-[var(--radius-pill)] border border-[color:var(--border)] bg-white px-3 py-2 text-xs font-semibold text-[color:var(--fg)] transition-colors hover:bg-[color:color-mix(in_oklab,var(--fg)_4%,white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
        >
          {copied ? "Copied" : "Copy link"}
        </button>

        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-[var(--radius-pill)] border border-[color:var(--border)] bg-white px-3 py-2 text-xs font-semibold text-[color:var(--fg)] transition-colors hover:bg-[color:color-mix(in_oklab,var(--fg)_4%,white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
        >
          LinkedIn
        </a>
        <a
          href={links.x}
          target="_blank"
          rel="noreferrer"
          className="rounded-[var(--radius-pill)] border border-[color:var(--border)] bg-white px-3 py-2 text-xs font-semibold text-[color:var(--fg)] transition-colors hover:bg-[color:color-mix(in_oklab,var(--fg)_4%,white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
        >
          X
        </a>
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="rounded-[var(--radius-pill)] border border-[color:var(--border)] bg-white px-3 py-2 text-xs font-semibold text-[color:var(--fg)] transition-colors hover:bg-[color:color-mix(in_oklab,var(--fg)_4%,white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
        >
          WhatsApp
        </a>
        <a
          href={links.email}
          className="rounded-[var(--radius-pill)] border border-[color:var(--border)] bg-white px-3 py-2 text-xs font-semibold text-[color:var(--fg)] transition-colors hover:bg-[color:color-mix(in_oklab,var(--fg)_4%,white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
        >
          Email
        </a>
      </div>
    </div>
  );
}
