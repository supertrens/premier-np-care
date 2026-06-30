import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { patientFit } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the story and care philosophy behind Premier NP Care.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-12">
        <Container className="grid items-center gap-10 md:grid-cols-[0.92fr_1.08fr]">
          <MotionReveal>
            <div className="overflow-hidden rounded-[8px] border border-ink/12 bg-mist p-4 shadow-[0_24px_60px_rgba(36,49,45,0.12)]">
              <Image
                alt="[PLACEHOLDER] Provider headshot placeholder"
                className="aspect-[4/5] w-full rounded-[8px] object-cover"
                height={1200}
                priority
                src="/provider-placeholder.png"
                width={960}
              />
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="mb-4 text-sm font-bold uppercase text-clay">
              About the provider
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.08] text-ink">
              [PLACEHOLDER: NP Name, Credentials]
            </h1>
            <p className="mt-5 text-xl leading-8 text-ink/78">
              [PLACEHOLDER] Her story: training, clinical background, and the
              moments that shaped her belief that healthcare should feel
              attentive, practical, and human.
            </p>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-mist">
        <Container className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <SectionHeading
              eyebrow="Philosophy"
              title="Listening first, planning clearly."
            />
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="space-y-5 text-lg leading-8 text-ink/78">
              <p>
                [PLACEHOLDER] Why she started this practice: to create a calmer
                access point for patients who want thoughtful care without the
                institutional feel of a large system.
              </p>
              <p>
                [PLACEHOLDER] Her approach: ask better questions, explain the
                reasoning behind recommendations, and make sure patients know
                when telehealth is appropriate and when in-person care is safer.
              </p>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <MotionReveal>
            <SectionHeading
              description="This copy is intentionally marked as placeholder until the real kickoff interview gives it a personal voice."
              eyebrow="Built for"
              title="Patients who want access without feeling anonymous."
            />
          </MotionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {patientFit.map((item) => (
              <MotionReveal key={item}>
                <Card className="h-full">
                  <CheckCircle2
                    aria-hidden="true"
                    className="text-clay"
                    size={26}
                  />
                  <p className="mt-5 leading-7 text-ink/78">{item}</p>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

