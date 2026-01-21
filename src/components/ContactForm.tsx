"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Field = { label: string; placeholder: string };

export function ContactForm({
  fields,
  submitLabel,
  note,
}: {
  fields: {
    name: Field;
    email: Field;
    organisation: Field;
    message: Field;
  };
  submitLabel: string;
  note: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "mt-2 h-11 w-full rounded-xl border border-[color:var(--border)] bg-white px-3 text-sm text-[color:var(--fg)] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-5"
    >
      <label className="grid gap-1 text-sm text-[color:var(--fg)]">
        <span className="text-xs font-semibold tracking-[0.16em] text-[color:var(--muted)]">{fields.name.label}</span>
        <input name="name" placeholder={fields.name.placeholder} className={inputClass} />
      </label>

      <label className="grid gap-1 text-sm text-[color:var(--fg)]">
        <span className="text-xs font-semibold tracking-[0.16em] text-[color:var(--muted)]">{fields.email.label}</span>
        <input name="email" type="email" placeholder={fields.email.placeholder} className={inputClass} />
      </label>

      <label className="grid gap-1 text-sm text-[color:var(--fg)]">
        <span className="text-xs font-semibold tracking-[0.16em] text-[color:var(--muted)]">
          {fields.organisation.label}
        </span>
        <input name="organisation" placeholder={fields.organisation.placeholder} className={inputClass} />
      </label>

      <label className="grid gap-1 text-sm text-[color:var(--fg)]">
        <span className="text-xs font-semibold tracking-[0.16em] text-[color:var(--muted)]">{fields.message.label}</span>
        <textarea
          name="message"
          placeholder={fields.message.placeholder}
          rows={6}
          className="mt-2 w-full resize-none rounded-xl border border-[color:var(--border)] bg-white px-3 py-3 text-sm text-[color:var(--fg)] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-[color:color-mix(in_oklab,var(--brand-blue)_18%,transparent)] [background-image:var(--gradient-gold)] px-6 py-3 text-base font-semibold text-[color:var(--brand-blue)] transition-colors hover:text-black hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
      >
        {submitLabel}
      </button>

      <p className={cn("text-xs text-[color:var(--muted)]", submitted && "text-[color:var(--fg)]")}>
        {submitted ? "Submitted (preview only). No message was sent." : note}
      </p>
    </form>
  );
}
