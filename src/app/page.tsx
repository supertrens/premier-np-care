import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import {
  HeroEntrance,
  HeroItem,
  MotionReveal,
} from "@/components/motion-reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import {
  credibilityPoints,
  howItWorksSteps,
  services,
} from "@/lib/content";
import { bookingUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Personal Telehealth Care",
  description:
    "Premier NP Care offers Nurse Practitioner-led telehealth-affiliated care with a personal, practical approach.",
};

export default function Home() {
  return (
    <>
      <Section className="overflow-hidden pb-14 pt-10">
        <Container>
          <HeroEntrance className="grid items-center gap-10 md:grid-cols-[1.02fr_0.98fr]">
            <div>
              <HeroItem>
                <p className="mb-4 text-sm font-bold uppercase text-clay">
                  Nurse Practitioner-led telehealth care
                </p>
              </HeroItem>
              <HeroItem>
                <h1 className="font-display text-5xl font-semibold leading-[1.08] text-ink">
                  Premier NP Care
                </h1>
              </HeroItem>
              <HeroItem>
                <p className="mt-4 text-xl font-semibold text-ink/86">
                  [PLACEHOLDER: NP Name, Credentials]
                </p>
              </HeroItem>
              <HeroItem>
                <p className="mt-5 max-w-2xl text-xl leading-8 text-ink/78">
                  Personal, accessible care from a provider who takes time to
                  understand the person behind the appointment.
                </p>
              </HeroItem>
              <HeroItem>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={bookingUrl}>
                    <CalendarCheck aria-hidden="true" size={20} />
                    Book an Appointment
                  </ButtonLink>
                  <ButtonLink href="/how-it-works" variant="secondary">
                    How It Works
                    <ArrowRight aria-hidden="true" size={19} />
                  </ButtonLink>
                </div>
              </HeroItem>
            </div>

            <HeroItem className="relative">
              <div className="relative min-h-[520px] overflow-hidden rounded-[8px] border border-ink/12 bg-mist p-5 shadow-[0_28px_70px_rgba(36,49,45,0.14)]">
                <Image
                  alt="[PLACEHOLDER] Warm illustrated provider portrait placeholder"
                  className="h-full min-h-[480px] w-full rounded-[8px] object-cover"
                  height={1200}
                  priority
                  src="/provider-placeholder.png"
                  width={960}
                />
                <div className="absolute bottom-5 left-5 right-5 rounded-[8px] border border-ink/10 bg-paper/94 p-5 shadow-[0_18px_42px_rgba(36,49,45,0.16)] backdrop-blur">
                  <div className="flex items-start gap-3">
                    <HeartHandshake
                      aria-hidden="true"
                      className="mt-1 text-clay"
                      size={24}
                    />
                    <div>
                      <p className="font-display text-2xl font-semibold text-ink">
                        A care note
                      </p>
                      <p className="mt-2 leading-7 text-ink/76">
                        [PLACEHOLDER] “You should leave each visit knowing what
                        we are watching, what comes next, and how to reach us.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </HeroItem>
          </HeroEntrance>
        </Container>
      </Section>

      <Section className="bg-mist">
        <Container>
          <MotionReveal>
            <SectionHeading
              description="The site will hold the public story. Scheduling, telehealth visits, and patient data stay in the existing practice systems."
              eyebrow="Why patients choose this practice"
              title="Care that feels personal before it feels procedural."
            />
          </MotionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {credibilityPoints.map((point) => (
              <MotionReveal key={point}>
                <div className="flex gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-clay"
                    size={22}
                  />
                  <p className="leading-7 text-ink/78">{point}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <MotionReveal>
              <SectionHeading
                description="Real service copy will be finalized after kickoff; each placeholder is marked for easy replacement."
                eyebrow="Services"
                title="Practical care for everyday health needs."
              />
            </MotionReveal>
            <ButtonLink href="/services" variant="secondary">
              View Services
              <ArrowRight aria-hidden="true" size={19} />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <MotionReveal key={service.title}>
                  <Card className="h-full">
                    <Icon aria-hidden="true" className="text-clay" size={28} />
                    <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-7 text-ink/76">
                      {service.description}
                    </p>
                    <Link
                      className="mt-5 inline-flex font-semibold text-clay hover:text-ink focus-visible:rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
                      href="/services"
                    >
                      Learn more
                    </Link>
                  </Card>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <MotionReveal>
            <SectionHeading
              description="A simple path for patients who want telehealth to feel clear instead of confusing."
              eyebrow="How it works"
              title="Book, consult, and leave with next steps."
            />
          </MotionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {howItWorksSteps.map((step) => {
              const Icon = step.icon;
              return (
                <MotionReveal key={step.title}>
                  <Card className="h-full bg-mist/65">
                    <Icon aria-hidden="true" className="text-clay" size={30} />
                    <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-7 text-ink/76">
                      {step.description}
                    </p>
                  </Card>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink text-paper">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-3xl font-semibold">
              Ready for a more personal kind of visit?
            </p>
            <p className="mt-3 max-w-2xl leading-7 text-paper/78">
              Book through the practice scheduling link. This website does not
              create accounts, manage appointments, or store patient records.
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

