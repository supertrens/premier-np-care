import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  HeartPulse,
  Shield,
  Stethoscope,
  Video,
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

const scopeItems = [
  { label: "Primary Care", icon: Stethoscope },
  { label: "Chronic Conditions", icon: HeartPulse },
  { label: "Women's Health", icon: Shield },
  { label: "Telehealth Visits", icon: Video },
  { label: "Preventive Care", icon: HeartPulse },
  { label: "Medication Management", icon: Shield },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative isolate min-h-[calc(100svh-62px)] overflow-hidden">
        <Image
          alt="Medical consultation room — provider and patient in a calm clinical setting"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="https://images.unsplash.com/photo-1758691461990-03b49d969495?w=1920&q=85&auto=format&fit=crop"
        />
        {/* Warm tint unifies photo with palette */}
        <div className="hero-tint absolute inset-0 -z-20" />
        {/* Left-to-right fade */}
        <div className="hero-fade-x absolute inset-0 -z-10" />
        {/* Bottom vignette */}
        <div className="hero-fade-bottom absolute bottom-0 left-0 right-0 -z-10 h-48" />

        <Container className="flex min-h-[calc(100svh-62px)] flex-col justify-between pb-14 pt-20 md:pb-20">
          <HeroEntrance className="max-w-xl">

            {/* Eyebrow with medical cross */}
            <HeroItem>
              <div className="flex items-center gap-2.5">
                <span className="soft-dot inline-block h-2 w-2 rounded-full bg-fern" aria-hidden="true" />
                <p className="label-caps text-fern">Telehealth Medical Care</p>
              </div>
            </HeroItem>

            {/* Display headline */}
            <HeroItem>
              <h1 className="mt-6 font-display text-[clamp(3.4rem,8.5vw,7.5rem)] font-light leading-[0.93] tracking-[-0.025em] text-ink">
                Premier
                <br />
                <span className="font-display-italic">NP</span> Care
              </h1>
            </HeroItem>

            {/* Italic sub-line */}
            <HeroItem>
              <p className="mt-6 font-display-italic text-[clamp(1.2rem,2.5vw,1.8rem)] leading-[1.35] text-ink/68">
                Personal medical care with clinical clarity.
              </p>
            </HeroItem>

            {/* Body */}
            <HeroItem>
              <p className="mt-4 max-w-sm text-[0.93rem] leading-7 text-ink/52">
                [PLACEHOLDER: NP Name, Credentials] provides board-certified
                Nurse Practitioner care through a telehealth-affiliated practice.
              </p>
            </HeroItem>

            {/* CTAs */}
            <HeroItem>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <ButtonLink href={bookingUrl} variant="fern">
                  <CalendarCheck aria-hidden="true" size={15} />
                  Book a Visit
                </ButtonLink>
                <ButtonLink href="/about" variant="quiet">
                  Meet the Provider
                </ButtonLink>
              </div>
            </HeroItem>
          </HeroEntrance>

          {/* Bottom trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-ink/10 pt-5">
            {[
              "Board-certified NP",
              "Telehealth-based visits",
              "Accepting new patients",
            ].map((item) => (
              <p key={item} className="label-caps text-ink/38">{item}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SCROLLING CARE TICKER ────────────────────────────── */}
      <div className="border-y border-fern/15 bg-mist/70 py-3.5 marquee-wrap">
        <div className="marquee-track" aria-hidden="true">
          {[...scopeItems, ...scopeItems].map(({ label, icon: Icon }, i) => (
            <span
              key={i}
              className="condition-pill mx-2"
            >
              <Icon size={11} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── EDITORIAL PULL QUOTE — dark ──────────────────────── */}
      <Section className="bg-ink py-28 text-paper">
        <Container>
          <MotionReveal>
            <p className="label-caps mb-8 text-fern-light/70">Our approach</p>
            <p className="font-display text-[clamp(1.9rem,4vw,3.4rem)] font-light leading-[1.14] text-paper md:max-w-4xl">
              Medicine practiced with intention — a single provider who knows
              your history, names the options clearly, and tells you when to
              go somewhere else.
            </p>
          </MotionReveal>
        </Container>
      </Section>

      {/* ── CREDIBILITY — fern tint ──────────────────────────── */}
      <Section className="bg-mist py-0">
        <Container className="grid divide-y divide-ink/8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {credibilityPoints.map((point, index) => (
            <MotionReveal key={point}>
              <div className="py-14 md:px-12">
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-fern/10">
                  <span className="font-display-italic text-xl font-light leading-none text-fern">
                    {index + 1}
                  </span>
                </div>
                <p className="font-display-italic text-[4rem] font-light leading-none text-ink/8 select-none" aria-hidden="true">
                  0{index + 1}
                </p>
                <p className="mt-4 text-[0.92rem] leading-7 text-ink/58">
                  {point}
                </p>
              </div>
            </MotionReveal>
          ))}
        </Container>
      </Section>

      {/* ── SERVICES — warm paper ────────────────────────────── */}
      <Section className="bg-paper py-32">
        <Container className="grid gap-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <MotionReveal>
            <div className="lg:sticky lg:top-28">
              <p className="label-caps text-fern">Clinical Services</p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,3.8vw,3.4rem)] font-light leading-[1.06] text-ink">
                Focused care with a defined clinical scope.
              </h2>
              <p className="mt-5 text-[0.92rem] leading-7 text-ink/52 max-w-xs">
                Thoughtful assessment, practical plans, and appropriate
                guidance when in-person care is the better path.
              </p>
              <a className="btn-ghost mt-10 inline-flex" href="/services">
                All services <ArrowRight size={13} aria-hidden="true" />
              </a>
            </div>
          </MotionReveal>

          <div>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionReveal key={service.title} delay={index * 0.07}>
                  <div className="group border-t border-ink/10 py-10 last:border-b last:border-ink/10 transition-colors hover:bg-mist/40 hover:px-5 hover:rounded-xl -mx-5 px-5">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-2.5 mb-4">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-fern/10">
                            <Icon aria-hidden="true" size={14} className="text-fern" />
                          </div>
                          <p className="label-caps text-ink/38">{service.eyebrow}</p>
                        </div>
                        <h3 className="font-display text-[1.55rem] font-light leading-tight text-ink">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-[0.90rem] leading-7 text-ink/52">
                          {service.description}
                        </p>
                      </div>
                      <p className="font-display-italic text-5xl font-light text-ink/8 shrink-0 leading-none pt-1 select-none" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── HOW IT WORKS — warm stone ────────────────────────── */}
      <Section className="bg-stone py-32">
        <Container>
          <MotionReveal>
            <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-16">
              <div>
                <p className="label-caps text-fern">Patient Journey</p>
                <h2 className="mt-5 font-display text-[clamp(2.2rem,3.8vw,3.4rem)] font-light leading-[1.06] text-ink">
                  Less friction.
                  <br />
                  <span className="font-display-italic">More clarity.</span>
                </h2>
              </div>
              <p className="max-w-xs text-[0.90rem] leading-7 text-ink/50 md:text-right">
                Scheduling, visits, and patient records remain in the
                practice's existing telehealth systems — not this website.
              </p>
            </div>
          </MotionReveal>

          <div className="grid gap-0 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <MotionReveal key={step.title} delay={index * 0.1}>
                  <div className="border-t border-fern/15 py-10 md:py-12 md:pr-10 md:border-l first:md:border-l-0 md:pl-10 first:md:pl-0">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-fern/12">
                        <Icon aria-hidden="true" size={16} className="text-fern" />
                      </div>
                      <span className="font-display-italic text-3xl font-light text-fern/35 leading-none">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-light text-ink">{step.title}</h3>
                    <p className="mt-3 text-[0.88rem] leading-7 text-ink/52">{step.description}</p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── CTA — dark ink ───────────────────────────────────── */}
      <Section className="bg-ink py-32 text-paper">
        <Container>
          <MotionReveal>
            <div className="grid gap-12 border-t border-paper/15 pt-16 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="label-caps text-fern-mid mb-6">Start here</p>
                <p className="font-display text-[clamp(2.2rem,4vw,3.8rem)] font-light leading-[1.06] text-paper">
                  Ready to start with
                  <br />
                  <span className="font-display-italic">the practice?</span>
                </p>
                <p className="mt-5 text-[0.92rem] leading-7 text-paper/52 max-w-sm">
                  Book through the practice scheduling link. For urgent or
                  emergency needs, call 911 or visit your nearest ER.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 md:items-end md:pb-2">
                <ButtonLink href={bookingUrl} variant="fern">
                  <CalendarCheck aria-hidden="true" size={15} />
                  Book a Visit
                </ButtonLink>
                <p className="label-caps text-paper/30">No patient account required</p>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}
