"use client";

import { useMemo, useState } from "react";
import { BrandButton } from "@/components/brand/BrandButton";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  institution: string;
  role: string;
  email: string;
  phone: string;
  message: string;
  followUpCall: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  institution: "",
  role: "",
  email: "",
  phone: "",
  message: "",
  followUpCall: false,
};

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-brand-blue">
          {label} {required ? <span className="text-brand-gold">*</span> : null}
        </label>
        {error ? (
          <span id={`${id}-error`} className="text-xs text-red-700">
            {error}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>(
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errors = useMemo(() => validate(values), [values]);

  const showError = (key: keyof FormState) => Boolean(touched[key] && errors[key]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const next = validate(values);
    if (Object.keys(next).length > 0) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 450));
    setIsSubmitting(false);
    setSubmitted(true);
    setValues(initial);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      {submitted ? (
        <div
          role="status"
          className="rounded-3xl border border-brand-gold/25 bg-white p-4 text-sm text-brand-blue shadow-sm"
        >
          Thank you—your message has been received. (Placeholder: form not yet
          connected.)
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="contact-name"
          label="Name"
          required
          error={showError("name") ? errors.name : undefined}
        >
          <input
            className={cn(
              "h-11 w-full rounded-2xl border bg-white px-3 text-sm text-brand-blue shadow-sm outline-none transition focus:border-brand-gold/60 focus:ring-2 focus:ring-brand-gold/25",
              showError("name") ? "border-red-400" : "border-brand-gold/20",
            )}
            id="contact-name"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            aria-invalid={showError("name")}
            aria-describedby={showError("name") ? "contact-name-error" : undefined}
            required
            name="name"
            autoComplete="name"
          />
        </Field>

        <Field id="contact-institution" label="Institution/Organisation">
          <input
            className="h-11 w-full rounded-2xl border border-brand-gold/20 bg-white px-3 text-sm text-brand-blue shadow-sm outline-none transition focus:border-brand-gold/60 focus:ring-2 focus:ring-brand-gold/25"
            id="contact-institution"
            value={values.institution}
            onChange={(e) =>
              setValues((v) => ({ ...v, institution: e.target.value }))
            }
            name="institution"
            autoComplete="organization"
          />
        </Field>

        <Field id="contact-role" label="Role/Title">
          <input
            className="h-11 w-full rounded-2xl border border-brand-gold/20 bg-white px-3 text-sm text-brand-blue shadow-sm outline-none transition focus:border-brand-gold/60 focus:ring-2 focus:ring-brand-gold/25"
            id="contact-role"
            value={values.role}
            onChange={(e) => setValues((v) => ({ ...v, role: e.target.value }))}
            name="role"
            autoComplete="organization-title"
          />
        </Field>

        <Field
          id="contact-email"
          label="Email"
          required
          error={showError("email") ? errors.email : undefined}
        >
          <input
            className={cn(
              "h-11 w-full rounded-2xl border bg-white px-3 text-sm text-brand-blue shadow-sm outline-none transition focus:border-brand-gold/60 focus:ring-2 focus:ring-brand-gold/25",
              showError("email") ? "border-red-400" : "border-brand-gold/20",
            )}
            id="contact-email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            aria-invalid={showError("email")}
            aria-describedby={showError("email") ? "contact-email-error" : undefined}
            required
            name="email"
            type="email"
            autoComplete="email"
          />
        </Field>

        <Field id="contact-phone" label="Phone">
          <input
            className="h-11 w-full rounded-2xl border border-brand-gold/20 bg-white px-3 text-sm text-brand-blue shadow-sm outline-none transition focus:border-brand-gold/60 focus:ring-2 focus:ring-brand-gold/25"
            id="contact-phone"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            name="phone"
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field
        id="contact-message"
        label="Message"
        required
        error={showError("message") ? errors.message : undefined}
      >
        <textarea
          className={cn(
            "min-h-36 w-full rounded-2xl border bg-white px-3 py-3 text-sm text-brand-blue shadow-sm outline-none transition focus:border-brand-gold/60 focus:ring-2 focus:ring-brand-gold/25",
            showError("message") ? "border-red-400" : "border-brand-gold/20",
          )}
          id="contact-message"
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          aria-invalid={showError("message")}
          aria-describedby={
            showError("message") ? "contact-message-error" : undefined
          }
          required
          name="message"
        />
      </Field>

      <label className="flex items-start gap-3 rounded-3xl border border-brand-gold/20 bg-white p-4 text-sm text-brand-blue shadow-sm">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-brand-gold/30 text-brand-blue focus:ring-2 focus:ring-brand-gold/25"
          checked={values.followUpCall}
          onChange={(e) =>
            setValues((v) => ({ ...v, followUpCall: e.target.checked }))
          }
          name="followUpCall"
        />
        <span>I would like to receive a follow-up call.</span>
      </label>

      <div className="flex items-center gap-3">
        <BrandButton type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit"}
        </BrandButton>
        <p className="text-xs text-brand-blue/70">
          Front-end only. No data is sent yet.
        </p>
      </div>
    </form>
  );
}
