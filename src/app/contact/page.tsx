import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { contactContent } from "@/content/contact";

export default function ContactPage() {
  return (
    <>
      <Section surface="hero" reveal={false}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">CONTACT</p>
          <h1 className="mt-4 text-5xl leading-[1] text-[color:var(--fg)] sm:text-6xl">{contactContent.title}</h1>
          <p className="mt-7 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{contactContent.intro}</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          <Card className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">DETAILS</p>
            <dl className="mt-6 grid gap-5">
              {contactContent.details.map((d) => (
                <div key={d.label} className="grid gap-2">
                  <dt className="text-xs font-semibold tracking-[0.16em] text-[color:var(--muted)]">{d.label}</dt>
                  <dd className="text-sm leading-relaxed text-[color:var(--fg)]">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Card>

          <Card className="lg:col-span-7 lg:ml-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">FORM</p>
            <h2 className="mt-4 text-2xl leading-tight text-[color:var(--fg)]">Send a message</h2>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
              Share your priorities and context. We will respond with clear next steps.
            </p>
            <div className="mt-7">
              <ContactForm
                fields={contactContent.form.fields}
                submitLabel={contactContent.form.submitLabel}
                note={contactContent.form.note}
              />
            </div>
          </Card>
        </div>
      </Section>

      <Section surface="muted">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{contactContent.guidance.label}</p>
            <h2 className="mt-4 text-4xl leading-[1.05] text-[color:var(--fg)] sm:text-5xl">{contactContent.guidance.title}</h2>
            <p className="mt-6 text-sm leading-relaxed text-[color:var(--muted)]">{contactContent.guidance.responseNote}</p>
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <Card accent="gold">
              <ul className="grid gap-5 text-base leading-relaxed text-[color:var(--fg)]">
                {contactContent.guidance.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_45%,transparent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
