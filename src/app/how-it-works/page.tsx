import type { Metadata } from "next";
import { CalendarCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { bookingUrl } from "@/lib/config";
import { howItWorksSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Understand the simple Book, Consult, Get Care process for Premier NP Care.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Section className="pt-12">
        <Container>
          <MotionReveal>
            <h1 className="font-display text-5xl font-semibold leading-[1.08] text-ink">
              How It Works
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-ink/78">
              Telehealth should not feel like a maze. Premier NP Care keeps the
              public website simple and sends scheduling and visit details
              through the practice platform.
            </p>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-mist">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {howItWorksSteps.map((step) => {
              const Icon = step.icon;
              return (
                <MotionReveal key={step.title}>
                  <Card className="h-full bg-paper">
                    <Icon aria-hidden="true" className="text-clay" size={32} />
                    <h2 className="mt-5 font-display text-3xl font-semibold text-ink">
                      {step.title}
                    </h2>
                    <p className="mt-4 leading-7 text-ink/76">
                      {step.description}
                    </p>
                  </Card>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <SectionHeading
              eyebrow="New to telehealth"
              title="You will know what happens next."
            />
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="space-y-5 text-lg leading-8 text-ink/78">
              <p>
                [PLACEHOLDER] Before the appointment, the existing telehealth
                system will provide any required visit instructions. This
                website does not collect intake forms or store medical records.
              </p>
              <p>
                [PLACEHOLDER] During the visit, your provider will listen,
                clarify the reason for the visit, discuss appropriate options,
                and explain when in-person or urgent care is the safer path.
              </p>
              <p>
                [PLACEHOLDER] Afterward, follow-up details are handled through
                the practice’s established systems.
              </p>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-ink text-paper">
        <Container className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold">
              Start with one simple step.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-paper/78">
              The booking button will point to the practice’s real scheduling
              link once the final URL is configured.
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

