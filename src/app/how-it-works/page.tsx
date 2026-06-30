import type { Metadata } from "next";
import { CalendarCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { bookingUrl } from "@/lib/config";
import { howItWorksSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Understand the simple Book, Consult, Get Care process for Premier NP Care.",
};

const patientReassurance = [
  {
    title: "Before the visit",
    body: "[PLACEHOLDER] The existing telehealth system provides any required visit instructions. This website does not collect intake forms or store medical records.",
  },
  {
    title: "During the visit",
    body: "[PLACEHOLDER] Your provider listens, clarifies the concern, discusses appropriate options, and explains when in-person or urgent care is the safer path.",
  },
  {
    title: "After the visit",
    body: "[PLACEHOLDER] Follow-up details are handled through the practice's established systems.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        aside={
          <div className="border-l border-fern/30 pl-5 leading-7 text-ink/76">
            A simple public path: book through the scheduling link, meet through
            the practice platform, and receive next steps through established
            systems.
          </div>
        }
        eyebrow="How it works"
        title="A calm path into care."
      >
        <p>
          Telehealth should not feel like a maze. Premier NP Care keeps the
          website simple and sends scheduling and visit details through the
          practice platform.
        </p>
      </PageIntro>

      <Section className="py-20">
        <Container>
          <div className="border-y border-ink/12">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <MotionReveal key={step.title}>
                  <div className="grid gap-6 border-b border-ink/12 py-10 last:border-b-0 md:grid-cols-[180px_1fr] md:items-start">
                    <div className="flex items-center gap-4 text-fern">
                      <span className="font-display text-6xl font-light text-fern/35">
                        0{index + 1}
                      </span>
                      <Icon aria-hidden="true" size={28} />
                    </div>
                    <div className="max-w-3xl">
                      <h2 className="font-display text-5xl font-light leading-tight text-ink">
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
        <Container className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <MotionReveal>
            <p className="label-caps text-fern">New to telehealth</p>
            <h2 className="mt-5 font-display text-5xl font-light leading-[1.05] text-ink">
              The process should feel legible.
            </h2>
          </MotionReveal>
          <div className="rounded-[8px] border border-ink/12 bg-paper">
            {patientReassurance.map((item) => (
              <MotionReveal key={item.title}>
                <div className="border-b border-ink/12 p-6 last:border-b-0">
                  <h3 className="font-display text-3xl font-light text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-ink/76">{item.body}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink text-paper">
        <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-4xl font-light text-paper">
              Start with one simple step.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-paper/78">
              The booking button will point to the practice's real scheduling
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
