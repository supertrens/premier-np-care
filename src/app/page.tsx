import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardCheck,
  HeartHandshake,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import {
  HeroEntrance,
  HeroItem,
  MotionReveal,
} from "@/components/motion-reveal";
import { Section } from "@/components/section";
import { bookingUrl } from "@/lib/config";
import {
  credibilityPoints,
  howItWorksSteps,
  services,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Personal Telehealth Care",
  description:
    "Premier NP Care offers Nurse Practitioner-led telehealth-affiliated care with a personal, practical approach.",
};

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative isolate min-h-[calc(100svh-64px)] overflow-hidden border-b border-ink/10">
        <Image
          alt="Warm consultation table with notebook, ceramic cup, and appointment card"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/care-table-hero.png"
        />

        {/* Rich multi-stop gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(245,237,224,0.97)_0%,rgba(245,237,224,0.92)_30%,rgba(245,237,224,0.60)_58%,rgba(245,237,224,0.08)_100%)]" />
        {/* Ambient warm glow */}
        <div className="hero-glow absolute inset-0 -z-10" />

        <Container className="flex min-h-[calc(100svh-64px)] flex-col justify-between pb-12 pt-24 md:pb-20">
          <HeroEntrance className="max-w-5xl">

            {/* Availability badge */}
            <HeroItem>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-clay/25 bg-paper/80 px-4 py-2 backdrop-blur-sm">
                <span className="availability-dot h-2 w-2 rounded-full bg-clay" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-clay">
                  Now Accepting Patients
                </span>
              </div>
            </HeroItem>

            {/* Main headline */}
            <HeroItem>
              <h1 className="mt-6 font-display text-[clamp(3.5rem,10vw,8.5rem)] font-medium leading-[0.90] tracking-[-0.02em] text-ink">
                Premier
                <br />
                <em className="not-italic text-clay">NP</em> Care
              </h1>
            </HeroItem>

            {/* Sub-headline */}
            <HeroItem>
              <p className="mt-6 max-w-2xl font-display text-[clamp(1.5rem,3.5vw,2.75rem)] font-medium leading-[1.10] text-ink/85">
                Personal medical care
                <br />
                with clinical clarity.
              </p>
            </HeroItem>

            {/* Body */}
            <HeroItem>
              <p className="mt-5 max-w-lg text-lg leading-8 text-ink/68">
                [PLACEHOLDER: NP Name, Credentials] provides practical,
                provider-led care through the practice's established telehealth
                platform.
              </p>
            </HeroItem>

            {/* CTAs */}
            <HeroItem>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={bookingUrl} variant="ink">
                  <CalendarCheck aria-hidden="true" size={19} />
                  Book an Appointment
                </ButtonLink>
                <ButtonLink href="/about" variant="secondary">
                  Meet the Provider
                  <ArrowRight aria-hidden="true" size={18} />
                </ButtonLink>
              </div>
            </HeroItem>
          </HeroEntrance>

          {/* Bottom trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
            {[
              "Telehealth-based visits",
              "Single-provider practice",
              "Board-certified NP",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-ink/60">
                <span className="h-px w-5 bg-clay/60" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CREDIBILITY BAR ──────────────────────────────────── */}
      <Section className="ink-texture overflow-hidden bg-ink py-0 text-paper">
        <Container className="grid divide-y divide-paper/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {credibilityPoints.map((point, index) => (
            <MotionReveal key={point}>
              <div className="relative overflow-hidden py-14 md:px-12">
                {/* Large decorative number */}
                <span
                  className="pointer-events-none absolute -top-4 right-4 select-none font-display text-[9rem] font-medium leading-none text-paper/[0.04]"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
                <p className="relative font-display text-5xl font-light text-marigold">
                  0{index + 1}
                </p>
                <p className="relative mt-5 max-w-xs text-lg leading-7 text-paper/72">
                  {point}
                </p>
              </div>
            </MotionReveal>
          ))}
        </Container>
      </Section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <Section className="py-32">
        <Container className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <MotionReveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-widest text-clay">Services</p>
              <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.5rem)] font-medium leading-[0.98] text-ink">
                Focused care with a defined clinical scope.
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                The scope is intentionally clear: thoughtful assessment,
                practical plans, and appropriate guidance when in-person care
                is the better path.
              </p>
              <ButtonLink className="mt-10" href="/services" variant="secondary">
                Explore Services
                <ArrowRight aria-hidden="true" size={18} />
              </ButtonLink>
            </div>
          </MotionReveal>

          <div className="divide-y divide-ink/10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionReveal key={service.title} delay={index * 0.06}>
                  <div className="service-row group grid gap-5 py-9 md:grid-cols-[180px_1fr]">
                    <div className="flex items-start gap-3 pt-1">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mist text-clay">
                        <Icon aria-hidden="true" size={19} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-ink/50 mt-2">
                        {service.eyebrow}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-[1.75rem] font-medium leading-tight text-ink">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-lg leading-8 text-ink/65">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <Section className="relative overflow-hidden bg-mist py-32">
        {/* Subtle dot grid */}
        <div className="dot-grid absolute inset-0 opacity-40" aria-hidden="true" />

        <Container className="relative">
          <MotionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-clay">
                How it works
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.5rem)] font-medium leading-[0.98] text-ink">
                Less friction. More clarity.
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink/65">
                This site stays public and informational. Scheduling, visits,
                and patient information remain in the practice's existing
                systems.
              </p>
            </div>
          </MotionReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <MotionReveal key={step.title} delay={index * 0.1}>
                  <div className="card-lift flex h-full flex-col rounded-2xl border border-ink/10 bg-paper/70 p-8 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-5xl font-light leading-none text-clay/40">
                        {index + 1}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist-deep text-clay">
                        <Icon aria-hidden="true" size={21} />
                      </div>
                    </div>
                    <h3 className="mt-6 font-display text-3xl font-medium text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 flex-1 leading-7 text-ink/65">
                      {step.description}
                    </p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── STATEMENT ────────────────────────────────────────── */}
      <Section className="py-28">
        <Container>
          <MotionReveal>
            <div className="grid gap-10 border-y border-ink/10 py-16 md:grid-cols-[0.55fr_1.45fr] md:items-center md:gap-16">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist text-clay">
                  <ClipboardCheck aria-hidden="true" size={22} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-ink/50">
                  Informational only
                </p>
              </div>
              <p className="font-display text-[clamp(1.9rem,3.8vw,3.75rem)] font-medium leading-[1.06] text-ink">
                No portal. No patient account. No scheduling database. Just a
                clear public website for a real medical practice.
              </p>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <Section className="ink-texture bg-ink text-paper">
        <Container className="grid gap-8 py-6 md:grid-cols-[1fr_auto] md:items-center">
          <MotionReveal>
            <div>
              <div className="mb-5 flex items-center gap-3 text-marigold">
                <HeartHandshake aria-hidden="true" size={22} />
                <p className="text-xs font-bold uppercase tracking-widest">Start here</p>
              </div>
              <p className="font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-medium leading-tight">
                Ready to start with
                <br />
                the practice?
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-7 text-paper/68">
                Book through the practice scheduling link. For urgent needs,
                use emergency services.
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <ButtonLink href={bookingUrl}>
              <CalendarCheck aria-hidden="true" size={19} />
              Book an Appointment
            </ButtonLink>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}
