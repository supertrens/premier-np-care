import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
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
      <section className="relative isolate min-h-[calc(100svh-64px)] overflow-hidden">
        <Image
          alt="Warm consultation table with notebook, ceramic cup, and appointment card"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/care-table-hero.png"
        />
        {/* Layer 1: warm amber tint to pull cool image tones into the palette */}
        <div className="absolute inset-0 -z-20 bg-[rgba(210,175,130,0.22)] mix-blend-multiply" />
        {/* Layer 2: left-to-right cream fade */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(108deg,rgba(245,237,224,0.98)_0%,rgba(245,237,224,0.90)_32%,rgba(245,237,224,0.52)_58%,rgba(245,237,224,0.06)_82%,transparent_100%)]" />
        {/* Layer 3: bottom vignette so trust strip blends seamlessly */}
        <div className="absolute bottom-0 left-0 right-0 -z-10 h-40 bg-[linear-gradient(to_top,rgba(245,237,224,0.92),transparent)]" />

        <Container className="flex min-h-[calc(100svh-64px)] flex-col justify-between pb-14 pt-20 md:pb-20">
          <HeroEntrance className="max-w-xl">

            {/* Eyebrow — no heavy badge, just small-caps */}
            <HeroItem>
              <p className="label-caps text-clay flex items-center gap-2.5">
                <span className="soft-dot inline-block h-1.5 w-1.5 rounded-full bg-clay" aria-hidden="true" />
                Nurse Practitioner-led care
              </p>
            </HeroItem>

            {/* Display headline — light weight, tight */}
            <HeroItem>
              <h1 className="mt-7 font-display text-[clamp(3.6rem,9vw,8rem)] font-light leading-[0.93] tracking-[-0.025em] text-ink">
                Premier
                <br />
                <span className="font-display-italic">NP</span> Care
              </h1>
            </HeroItem>

            {/* Italic sub-line */}
            <HeroItem>
              <p className="mt-7 font-display-italic text-[clamp(1.3rem,2.8vw,2rem)] leading-[1.3] text-ink/70">
                Personal medical care with clinical clarity.
              </p>
            </HeroItem>

            {/* Body */}
            <HeroItem>
              <p className="mt-5 max-w-sm text-[0.95rem] leading-7 text-ink/55">
                [PLACEHOLDER: NP Name, Credentials] provides practical,
                provider-led care through the practice's established telehealth
                platform.
              </p>
            </HeroItem>

            {/* Ghost CTAs */}
            <HeroItem>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <ButtonLink href={bookingUrl} variant="ghost">
                  Book an Appointment
                  <ArrowRight aria-hidden="true" size={15} />
                </ButtonLink>
                <ButtonLink href="/about" variant="quiet">
                  Meet the Provider
                </ButtonLink>
              </div>
            </HeroItem>
          </HeroEntrance>

          {/* Bottom caption strip */}
          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-2 border-t border-ink/10 pt-6">
            {[
              "Telehealth-based visits",
              "Single-provider practice",
              "Board-certified NP",
            ].map((item) => (
              <p key={item} className="label-caps text-ink/40">{item}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* ── STATEMENT — full-width editorial pull ────────────── */}
      <Section className="py-28">
        <Container>
          <MotionReveal>
            <div className="border-t border-ink/10 pt-14">
              <p className="label-caps mb-8 text-clay">Our approach</p>
              <p className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.12] text-ink md:max-w-4xl">
                Medicine practiced with intention — a single provider who knows
                your history, names the options clearly, and tells you when to
                go somewhere else.
              </p>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      {/* ── CREDIBILITY — editorial, not dark bar ────────────── */}
      <Section className="bg-stone/50 py-0">
        <Container className="grid divide-y divide-ink/8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {credibilityPoints.map((point, index) => (
            <MotionReveal key={point}>
              <div className="py-14 md:px-12">
                <p className="font-display-italic text-[5rem] font-light leading-none text-ink/12">
                  0{index + 1}
                </p>
                <p className="mt-5 text-[0.92rem] leading-7 text-ink/60">
                  {point}
                </p>
              </div>
            </MotionReveal>
          ))}
        </Container>
      </Section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <Section className="py-32">
        <Container className="grid gap-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <MotionReveal>
            <div className="lg:sticky lg:top-28">
              <p className="label-caps text-clay">Services</p>
              <h2 className="mt-6 font-display text-[clamp(2.4rem,4vw,3.6rem)] font-light leading-[1.05] text-ink">
                Focused care with a defined clinical scope.
              </h2>
              <p className="mt-5 text-[0.92rem] leading-7 text-ink/55 max-w-xs">
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
                  <div className="group border-t border-ink/10 py-10 last:border-b last:border-ink/10">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Icon aria-hidden="true" size={16} className="text-clay/80" />
                          <p className="label-caps text-ink/38">{service.eyebrow}</p>
                        </div>
                        <h3 className="font-display text-[1.6rem] font-light leading-tight text-ink">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-[0.92rem] leading-7 text-ink/55">
                          {service.description}
                        </p>
                      </div>
                      <p className="font-display-italic text-5xl font-light text-ink/10 shrink-0 leading-none pt-1">
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

      {/* ── HOW IT WORKS — linear, editorial ─────────────────── */}
      <Section className="border-y border-ink/8 bg-mist py-32">
        <Container>
          <MotionReveal>
            <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12">
              <div>
                <p className="label-caps text-clay">How it works</p>
                <h2 className="mt-5 font-display text-[clamp(2.4rem,4vw,3.6rem)] font-light leading-[1.05] text-ink">
                  Less friction.
                  <br />
                  <span className="font-display-italic">More clarity.</span>
                </h2>
              </div>
              <p className="max-w-sm text-[0.92rem] leading-7 text-ink/50 md:text-right">
                This site stays public and informational. Scheduling, visits,
                and patient records remain in the practice's existing systems.
              </p>
            </div>
          </MotionReveal>

          <div className="grid gap-0 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <MotionReveal key={step.title} delay={index * 0.1}>
                  <div className="border-t border-ink/10 py-10 md:py-12 md:pr-10 md:border-l first:md:border-l-0 md:pl-10 first:md:pl-0">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-display-italic text-4xl font-light text-clay/40 leading-none">
                        {index + 1}
                      </span>
                      <Icon aria-hidden="true" size={18} className="text-clay/70" />
                    </div>
                    <h3 className="font-display text-2xl font-light text-ink">{step.title}</h3>
                    <p className="mt-3 text-[0.88rem] leading-7 text-ink/55">{step.description}</p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── CTA — warm editorial, not hard dark ──────────────── */}
      <Section className="py-32">
        <Container>
          <MotionReveal>
            <div className="grid gap-12 border-t border-ink/10 pt-16 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="label-caps text-clay mb-6">Start here</p>
                <p className="font-display text-[clamp(2.4rem,4.5vw,4rem)] font-light leading-[1.06] text-ink">
                  Ready to start with
                  <br />
                  <span className="font-display-italic">the practice?</span>
                </p>
                <p className="mt-5 text-[0.92rem] leading-7 text-ink/50 max-w-sm">
                  Book through the practice scheduling link. For urgent needs,
                  use emergency services.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 md:items-end md:pb-2">
                <ButtonLink href={bookingUrl} variant="ink">
                  <CalendarCheck aria-hidden="true" size={17} />
                  Book an Appointment
                </ButtonLink>
                <p className="label-caps text-ink/30">No account required</p>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}
