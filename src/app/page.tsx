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

const trustItems = [
  { label: "Board-Certified NP", detail: "Licensed & credentialed" },
  { label: "100% Telehealth",    detail: "No commute required" },
  { label: "Single Provider",    detail: "You see the same face" },
  { label: "New Patients",       detail: "Currently accepting" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO — editorial split ───────────────────────────── */}
      <section className="overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-[1440px] flex-col lg:min-h-[calc(100vh-62px)] lg:flex-row">

          {/* Left — content */}
          <div className="flex flex-1 flex-col justify-center px-6 py-20 md:px-12 lg:px-16 xl:px-24">
            <HeroEntrance>

              <HeroItem>
                <div className="flex items-center gap-2">
                  <span className="soft-dot h-1.5 w-1.5 rounded-full bg-fern" aria-hidden="true" />
                  <p className="label-caps text-fern">Telehealth · Nurse Practitioner</p>
                </div>
              </HeroItem>

              <HeroItem>
                <h1 className="mt-7 font-display text-[clamp(3.8rem,6.5vw,8rem)] font-light leading-[0.90] tracking-[-0.03em] text-ink">
                  Premier
                  <br />
                  <span className="font-display-italic text-fern">NP</span>{" "}Care
                </h1>
              </HeroItem>

              <HeroItem>
                <p className="mt-7 max-w-sm text-[1rem] leading-[1.9] text-ink/50">
                  Board-certified Nurse Practitioner care —
                  personal, thoughtful, and delivered entirely
                  through telehealth.
                </p>
              </HeroItem>

              <HeroItem>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <ButtonLink href={bookingUrl} variant="fern">
                    <CalendarCheck aria-hidden="true" size={15} />
                    Book a Visit
                  </ButtonLink>
                  <ButtonLink href="/about" variant="quiet">
                    Meet the Provider
                  </ButtonLink>
                </div>
              </HeroItem>

              {/* Horizontal trust bar */}
              <HeroItem>
                <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-ink/8 md:grid-cols-4">
                  {trustItems.map((item) => (
                    <div key={item.label} className="border-r border-ink/8 px-5 py-4 last:border-r-0">
                      <p className="label-caps text-fern">{item.label}</p>
                      <p className="mt-1 text-[0.76rem] text-ink/38">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </HeroItem>

            </HeroEntrance>
          </div>

          {/* Right — contained photo frame */}
          <div className="relative hidden shrink-0 lg:block lg:w-[42%]">
            <div className="absolute inset-5 overflow-hidden rounded-[2rem]">
              <Image
                alt="Clinical setting — provider ready for a telehealth consultation"
                className="h-full w-full object-cover object-[60%_15%]"
                fill
                priority
                sizes="42vw"
                src="https://images.unsplash.com/photo-1758691461990-03b49d969495?w=1200&q=90&auto=format&fit=crop"
              />
              {/* Subtle blue gradient overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(26,82,168,0.08) 0%, rgba(13,27,69,0.28) 100%)",
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── SCROLLING CARE TICKER ────────────────────────────── */}
      <div className="border-y border-fern/12 bg-mist/60 py-3.5 marquee-wrap">
        <div className="marquee-track" aria-hidden="true">
          {[...scopeItems, ...scopeItems].map(({ label, icon: Icon }, i) => (
            <span key={i} className="condition-pill mx-2">
              <Icon size={11} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── PULL QUOTE — dark with photo atmosphere ──────────── */}
      <Section className="relative overflow-hidden bg-ink py-28 text-paper">
        {/* Photo as very subtle texture */}
        <Image
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.08] mix-blend-luminosity"
          fill
          sizes="100vw"
          src="https://images.unsplash.com/photo-1758691461990-03b49d969495?w=1920&q=50&auto=format&fit=crop"
        />
        {/* Dark veil so text stays legible */}
        <div aria-hidden="true" className="absolute inset-0 bg-ink/80" />

        <Container className="relative">
          <MotionReveal>
            <p className="label-caps mb-8 text-fern-mid/70">Our approach</p>
            <p className="font-display text-[clamp(2rem,4.2vw,3.6rem)] font-light leading-[1.13] text-paper md:max-w-4xl">
              Medicine practiced with intention — a single provider
              who knows your history, names the options clearly,
              and tells you when to go somewhere else.
            </p>
          </MotionReveal>
        </Container>
      </Section>

      {/* ── CREDIBILITY — light, editorial numbers ───────────── */}
      <Section className="bg-paper py-0">
        <Container className="grid divide-y divide-ink/8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {credibilityPoints.map((point, index) => (
            <MotionReveal key={point}>
              <div className="relative py-14 md:px-12">
                <p
                  aria-hidden="true"
                  className="select-none font-display-italic text-[6rem] font-light leading-none text-fern/8"
                >
                  0{index + 1}
                </p>
                <p className="mt-4 text-[0.93rem] leading-7 text-ink/56">
                  {point}
                </p>
              </div>
            </MotionReveal>
          ))}
        </Container>
      </Section>

      {/* ── SERVICES — mist background ───────────────────────── */}
      <Section className="bg-mist py-32">
        <Container className="grid gap-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <MotionReveal>
            <div className="lg:sticky lg:top-28">
              <p className="label-caps text-fern">Clinical Services</p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,3.8vw,3.4rem)] font-light leading-[1.06] text-ink">
                Focused care with a defined{" "}
                <span className="font-display-italic">clinical scope.</span>
              </h2>
              <p className="mt-5 max-w-xs text-[0.92rem] leading-7 text-ink/50">
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
                  <div className="group -mx-5 border-t border-ink/10 px-5 py-10 transition-all duration-300 last:border-b last:border-ink/10 hover:rounded-2xl hover:bg-paper hover:px-7 hover:shadow-sm">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="mb-4 flex items-center gap-2.5">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-fern/12">
                            <Icon aria-hidden="true" className="text-fern" size={14} />
                          </div>
                          <p className="label-caps text-ink/36">{service.eyebrow}</p>
                        </div>
                        <h3 className="font-display text-[1.55rem] font-light leading-tight text-ink">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-[0.90rem] leading-7 text-ink/50">
                          {service.description}
                        </p>
                      </div>
                      <p
                        aria-hidden="true"
                        className="shrink-0 select-none pt-1 font-display-italic text-5xl font-light leading-none text-ink/6"
                      >
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

      {/* ── HOW IT WORKS — paper ─────────────────────────────── */}
      <Section className="bg-paper py-32">
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
              <p className="max-w-xs text-[0.90rem] leading-7 text-ink/44 md:text-right">
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
                  <div className="border-t border-fern/15 py-10 md:py-12 md:pr-10 md:pl-10 first:md:pl-0 md:border-l first:md:border-l-0">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-fern/10">
                        <Icon aria-hidden="true" className="text-fern" size={16} />
                      </div>
                      <span className="font-display-italic text-3xl font-light leading-none text-fern/28">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-light text-ink">{step.title}</h3>
                    <p className="mt-3 text-[0.88rem] leading-7 text-ink/50">{step.description}</p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── CTA — dark ───────────────────────────────────────── */}
      <Section className="bg-ink py-32 text-paper">
        <Container>
          <MotionReveal>
            <div className="grid gap-12 border-t border-paper/10 pt-16 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="label-caps mb-6 text-fern-mid">Start here</p>
                <p className="font-display text-[clamp(2.2rem,4vw,3.8rem)] font-light leading-[1.06] text-paper">
                  Ready to start with
                  <br />
                  <span className="font-display-italic">the practice?</span>
                </p>
                <p className="mt-5 max-w-sm text-[0.92rem] leading-7 text-paper/46">
                  Book through the practice scheduling link. For urgent or
                  emergency needs, call 911 or visit your nearest ER.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 md:items-end md:pb-2">
                <ButtonLink href={bookingUrl} variant="fern">
                  <CalendarCheck aria-hidden="true" size={15} />
                  Book a Visit
                </ButtonLink>
                <p className="label-caps text-paper/26">No patient account required</p>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}
