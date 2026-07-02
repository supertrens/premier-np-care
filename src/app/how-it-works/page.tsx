import type { Metadata } from "next";
import { CalendarCheck, CheckCircle2, ShieldCheck } from "lucide-react";
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
    body: "The practice platform provides any required visit instructions. This website does not collect intake forms or store medical records.",
  },
  {
    label: "During the visit",
    body: "Your provider clarifies the concern, discusses appropriate options, and explains when in-person or urgent care is safer.",
  },
  {
    label: "After the visit",
    body: "Follow-up details, records, and visit communication are handled through the practice systems.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        aside={
          <div className="rounded-[22px] border border-line bg-paper/78 p-5 shadow-[0_16px_50px_rgba(7,28,42,0.06)]">
            <p className="label-caps text-cobalt">No portal here</p>
            <p className="mt-3 leading-7 text-ink/74">
              This public website explains the path into care. Scheduling and
              patient information stay in the existing practice platform.
            </p>
          </div>
        }
        eyebrow="How it works"
        title="A polished path from booking to care plan."
      >
        <p>
          Telehealth should feel clear before the visit starts. Premier NP Care
          separates this public website from the systems that handle scheduling,
          visits, and patient information.
        </p>
      </PageIntro>

      <Section className="bg-paper py-24">
        <Container>
          <div className="relative">
            <div
              className="absolute left-6 top-10 hidden h-[calc(100%-80px)] w-px bg-[linear-gradient(#0A4D8F,#12AEC4,#C9EEF3)] md:block"
              aria-hidden="true"
            />
            <div className="grid gap-5">
              {patientJourney.map((step, index) => {
                const Icon = step.icon;
                return (
                  <MotionReveal key={step.title}>
                    <article className="relative grid gap-5 rounded-[24px] border border-line bg-porcelain p-6 shadow-[0_18px_55px_rgba(7,28,42,0.06)] md:grid-cols-[120px_1fr] md:items-start">
                      <div className="flex items-center gap-4 text-cobalt">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-deep-navy font-display text-2xl font-medium text-paper">
                          {index + 1}
                        </span>
                        <Icon aria-hidden="true" size={24} />
                      </div>
                      <div className="max-w-3xl">
                        <h2 className="font-display text-4xl font-medium leading-tight text-ink">
                          {step.title}
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-ink/74">
                          {step.description}
                        </p>
                      </div>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-mist py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <p className="label-caps text-cobalt">New to telehealth</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
              The process should feel legible before anything is submitted.
            </h2>
          </MotionReveal>
          <div className="grid gap-4">
            {reassuranceRows.map((item) => (
              <MotionReveal key={item.label}>
                <article className="grid gap-4 rounded-[22px] border border-line bg-paper p-6 shadow-[0_16px_50px_rgba(7,28,42,0.05)] md:grid-cols-[230px_1fr]">
                  <div className="flex items-center gap-3 text-cobalt">
                    <CheckCircle2 aria-hidden="true" size={21} />
                    <p className="label-caps">{item.label}</p>
                  </div>
                  <p className="leading-7 text-ink/74">{item.body}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-porcelain py-20">
        <Container>
          <MotionReveal>
            <div className="grid gap-8 rounded-[28px] border border-line bg-paper p-7 shadow-[0_22px_70px_rgba(7,28,42,0.08)] md:grid-cols-[0.64fr_1.36fr] md:items-center">
              <div className="flex items-center gap-3 text-cobalt">
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

      <Section className="bg-deep-navy text-paper">
        <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-4xl font-medium">
              Start with one simple step.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-paper/78">
              Book through the practice scheduling link, and everything after
              that is clearly explained.
            </p>
          </div>
          <ButtonLink href={bookingUrl} variant="mist">
            <CalendarCheck aria-hidden="true" size={20} />
            Book an Appointment
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
