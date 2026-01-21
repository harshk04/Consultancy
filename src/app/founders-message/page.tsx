import Image from "next/image";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { foundersMessageContent } from "@/content/foundersMessage";
import { assetPath } from "@/lib/assetPath";

export default function FoundersMessagePage() {
  return (
    <>
      <Section surface="hero" reveal={false}>
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">FOUNDER’S MESSAGE</p>
            <h1 className="mt-4 text-5xl leading-[1] text-[color:var(--fg)] sm:text-6xl">{foundersMessageContent.title}</h1>
            <p className="mt-7 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{foundersMessageContent.intro}</p>
          </div>
          <div className="lg:col-span-5 lg:pl-10">
            <Card>
              <div className="overflow-hidden rounded-2xl border border-[color:var(--border)]">
                <Image
                  src={assetPath(foundersMessageContent.image.src)}
                  alt={foundersMessageContent.image.alt}
                  width={900}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <p className="mt-4 text-xs text-[color:var(--muted)]">Portrait</p>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6">
          <Card>
            <div className="max-w-3xl">
              <div className="grid gap-5 text-base leading-relaxed text-[color:var(--fg)] sm:text-lg">
                {foundersMessageContent.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-8 text-sm font-semibold text-[color:var(--muted)]">{foundersMessageContent.signature}</p>
              <div className="mt-10">
                <Button variant="outline" href={foundersMessageContent.cta.href} className="px-7 py-3 text-base">
                  {foundersMessageContent.cta.label}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section surface="muted">
        <div className="grid gap-8 lg:grid-cols-12">
          <Card className="lg:col-span-7" accent="gold">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">
              {foundersMessageContent.commitments.label}
            </p>
            <h2 className="mt-4 text-2xl leading-tight text-[color:var(--fg)]">{foundersMessageContent.commitments.title}</h2>
            <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-[color:var(--fg)]">
              {foundersMessageContent.commitments.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--brand-blue)_45%,transparent)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)]">{foundersMessageContent.note.label}</p>
            <h2 className="mt-4 text-2xl leading-tight text-[color:var(--fg)]">{foundersMessageContent.note.title}</h2>
            <p className="mt-5 text-sm leading-relaxed text-[color:var(--muted)]">{foundersMessageContent.note.body}</p>
          </Card>
        </div>
      </Section>
    </>
  );
}
