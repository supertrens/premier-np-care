import type { Metadata } from "next";
import { CalendarCheck, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { bookingUrl } from "@/lib/config";
import { patientJourney } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Understand the patient journey for Premier NP Care, from booking to consultation and follow-up.",
};

const reassuranceRows = [
  {
    label: "Before the visit",
    body: "[PLACEHOLDER] The practice platform provides any required visit instructions. This website does not collect intake forms or store medical records.",
  },
  {
    label: "During the visit",
    body: "[PLACEHOLDER] Your provider clarifies the concern, discusses appropriate options, and explains when in-person or urgent care is safer.",
  },
  {
    label: "After the visit",
    body: "[PLACEHOLDER] Follow-up details, records, and visit communication are handled through the practice systems.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        aside={
          <div className="border-y border-ink/12 py-5">
            <p className="label-caps text-fern">No portal here</p>
            <p className="mt-3 leading-7 text-ink/74">
              This public website explains the path into care. Scheduling and
              patient information stay in the existing practice platform.
            </p>
          </div>
        }
        eyebrow="How it works"
        title="A practical path from booking to care plan."
      >
        <p>
          Telehealth should feel clear before the visit starts. Premier NP Care
          separates the public website from the systems that handle scheduling,
          visits, and patient information.
        </p>
      </PageIntro>

      <Section className="py-20">
        <Container>
          <div className="border-y border-ink/12">
            {patientJourney.map((step, index) => {
              const Icon = step.icon;
              return (
                <MotionReveal key={step.title}>
                  <div className="grid gap-6 border-b border-ink/12 py-9 last:border-b-0 md:grid-cols-[160px_1fr] md:items-start">
                    <div className="flex items-center gap-4 text-fern">
                      <span className="font-display text-5xl font-medium">
                        {index + 1}
                      </span>
                      <Icon aria-hidden="true" size={26} />
                    </div>
                    <div className="max-w-3xl">
                      <h2 className="font-display text-4xl font-medium leading-tight text-ink">
                        {step.title}
                      </h2>
                      <p className="mt-4 text-xl leading-8 text-ink/74">
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

      <Section className="bg-mist py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <p className="label-caps text-fern">New to telehealth</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink">
              The process should feel legible, not hidden behind a portal.
            </h2>
          </MotionReveal>
          <div className="border-y border-ink/12">
            {reassuranceRows.map((item) => (
              <MotionReveal key={item.label}>
                <div className="grid gap-4 border-b border-ink/12 py-7 last:border-b-0 md:grid-cols-[230px_1fr]">
                  <p className="label-caps text-fern">{item.label}</p>
                  <p className="leading-7 text-ink/74">{item.body}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-linen py-20">
        <Container>
          <MotionReveal>
            <div className="grid gap-8 border-y border-ink/12 py-10 md:grid-cols-[0.64fr_1.36fr] md:items-center">
              <div className="flex items-center gap-3 text-clay">
                <ShieldCheck aria-hidden="true" size={24} />
                <p className="label-caps">Important</p>
              </div>
              <p className="max-w-4xl font-display text-4xl font-medium leading-[1.08] text-ink md:text-5xl">
                This website does not collect intake forms, store records, or
                replace urgent care.
              </p>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-ink text-paper">
        <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-4xl font-medium">
              Start with one simple step.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-paper/78">
              The booking button will point to the practice&apos;s real
              scheduling link once the final URL is configured.
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
