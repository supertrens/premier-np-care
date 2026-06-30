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
      <section className="relative isolate min-h-[calc(100svh-64px)] overflow-hidden border-b border-ink/10">
        <Image
          alt="Warm consultation table with notebook, ceramic cup, and appointment card"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
          src="/care-table-hero.png"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(247,241,232,0.98)_0%,rgba(247,241,232,0.9)_37%,rgba(247,241,232,0.26)_70%,rgba(247,241,232,0.04)_100%)]" />
        <Container className="flex min-h-[calc(100svh-64px)] items-end pb-12 pt-24 md:pb-20">
          <HeroEntrance className="max-w-4xl">
            <HeroItem>
              <p className="text-sm font-bold uppercase text-clay">
                Nurse Practitioner-led medical practice
              </p>
            </HeroItem>
            <HeroItem>
              <h1 className="mt-5 font-display text-6xl font-medium leading-[0.92] text-ink md:text-8xl lg:text-9xl">
                Premier NP Care
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="mt-7 max-w-2xl font-display text-4xl font-medium leading-[1.08] text-ink md:text-6xl">
                Personal medical care with clinical clarity.
              </p>
            </HeroItem>
            <HeroItem>
              <p className="mt-6 max-w-xl text-xl leading-8 text-ink/76">
                [PLACEHOLDER: NP Name, Credentials] provides practical,
                provider-led care through the practice’s established telehealth
                platform.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={bookingUrl} variant="ink">
                  <CalendarCheck aria-hidden="true" size={20} />
                  Book an Appointment
                </ButtonLink>
                <ButtonLink href="/about" variant="secondary">
                  Meet the Provider
                  <ArrowRight aria-hidden="true" size={19} />
                </ButtonLink>
              </div>
            </HeroItem>
          </HeroEntrance>
        </Container>
      </section>

      <Section className="bg-ink py-0 text-paper">
        <Container className="grid divide-y divide-paper/12 md:grid-cols-3 md:divide-x md:divide-y-0">
          {credibilityPoints.map((point, index) => (
            <MotionReveal key={point}>
              <div className="py-12 md:px-10">
                <p className="font-display text-6xl font-light text-marigold">
                  0{index + 1}
                </p>
                <p className="mt-6 max-w-sm leading-7 text-paper/76">
                  {point}
                </p>
              </div>
            </MotionReveal>
          ))}
        </Container>
      </Section>

      <Section className="py-24">
        <Container className="grid gap-14 lg:grid-cols-[0.76fr_1.24fr]">
          <MotionReveal>
            <p className="text-sm font-bold uppercase text-clay">Services</p>
            <h2 className="mt-5 max-w-lg font-display text-6xl font-medium leading-[0.98] text-ink">
              Focused care with a defined clinical scope.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              The scope is intentionally clear: thoughtful assessment,
              practical plans, and appropriate guidance when in-person care is
              the better path.
            </p>
            <ButtonLink className="mt-9" href="/services" variant="secondary">
              Explore Services
              <ArrowRight aria-hidden="true" size={19} />
            </ButtonLink>
          </MotionReveal>

          <div className="border-y border-ink/12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <MotionReveal key={service.title}>
                  <div className="group grid gap-5 border-b border-ink/12 py-8 last:border-b-0 md:grid-cols-[160px_1fr]">
                    <div className="flex items-center gap-3 text-sm font-bold uppercase text-clay">
                      <Icon aria-hidden="true" size={21} />
                      {service.eyebrow}
                    </div>
                    <div>
                      <h3 className="font-display text-4xl font-medium leading-tight text-ink">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-lg leading-8 text-ink/70">
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

      <Section className="bg-mist py-24">
        <Container className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <MotionReveal>
            <p className="text-sm font-bold uppercase text-clay">
              How it works
            </p>
            <h2 className="mt-5 font-display text-6xl font-medium leading-[0.98] text-ink">
              Less friction. More clarity.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/70">
              This site stays public and informational. Scheduling, visits, and
              patient information remain in the practice’s existing systems.
            </p>
          </MotionReveal>

          <div className="border-y border-ink/12 bg-paper/55">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <MotionReveal key={step.title}>
                  <div className="grid gap-5 border-b border-ink/12 p-7 last:border-b-0 md:grid-cols-[120px_1fr]">
                    <div className="flex items-center gap-4 text-clay">
                      <span className="font-display text-6xl font-light">
                        {index + 1}
                      </span>
                      <Icon aria-hidden="true" size={23} />
                    </div>
                    <div>
                      <h3 className="font-display text-4xl font-medium text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-7 text-ink/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <MotionReveal>
            <div className="grid gap-10 border-y border-ink/12 py-14 md:grid-cols-[0.62fr_1.38fr] md:items-center">
              <div className="flex items-center gap-3 text-clay">
                <ClipboardCheck aria-hidden="true" size={25} />
                <p className="text-sm font-bold uppercase">
                  Informational only
                </p>
              </div>
              <p className="max-w-4xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
                No portal. No patient account. No scheduling database. Just a
                clear public website for a real medical practice.
              </p>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-ink text-paper">
        <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3 text-marigold">
              <HeartHandshake aria-hidden="true" size={24} />
              <p className="text-sm font-bold uppercase">Start here</p>
            </div>
            <p className="font-display text-5xl font-medium leading-tight">
              Ready to start with the practice?
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-paper/76">
              Book through the practice scheduling link. For urgent needs, use
              emergency services.
            </p>
          </div>
          <ButtonLink href={bookingUrl}>
            <CalendarCheck aria-hidden="true" size={20} />
            Book an Appointment
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
