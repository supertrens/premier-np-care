import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore placeholder service areas for Premier NP Care, including telehealth check-ins and everyday primary care needs.",
};

const serviceDetails = [
  {
    heading: "[PLACEHOLDER] Conditions Treated",
    items: [
      "[PLACEHOLDER] Minor acute concerns appropriate for telehealth evaluation.",
      "[PLACEHOLDER] Medication questions and stable follow-up needs.",
      "[PLACEHOLDER] Preventive care conversations and wellness planning.",
      "[PLACEHOLDER] Chronic condition education and care coordination.",
    ],
  },
  {
    heading: "[PLACEHOLDER] Visit Types",
    items: [
      "[PLACEHOLDER] New patient consultation.",
      "[PLACEHOLDER] Follow-up visit.",
      "[PLACEHOLDER] Health goal check-in.",
      "[PLACEHOLDER] Care navigation and next-step planning.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-12">
        <Container>
          <MotionReveal>
            <h1 className="font-display text-5xl font-semibold leading-[1.08] text-ink">
              Services
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-ink/78">
              [PLACEHOLDER] Clear, practical visit options for patients seeking
              Nurse Practitioner-led care through a telehealth-affiliated
              practice.
            </p>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-mist">
        <Container>
          <MotionReveal>
            <SectionHeading
              description="Each area below is intentionally marked for replacement with final service copy."
              eyebrow="Care areas"
              title="A concise menu of realistic patient needs."
            />
          </MotionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <MotionReveal key={service.title}>
                  <Card className="h-full bg-paper">
                    <Icon aria-hidden="true" className="text-clay" size={30} />
                    <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-7 text-ink/76">
                      {service.description}
                    </p>
                  </Card>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-5 md:grid-cols-2">
          {serviceDetails.map((group) => (
            <MotionReveal key={group.heading}>
              <Card className="h-full">
                <h2 className="font-display text-3xl font-semibold text-ink">
                  {group.heading}
                </h2>
                <ul className="mt-6 grid gap-4">
                  {group.items.map((item) => (
                    <li className="flex gap-3 leading-7 text-ink/78" key={item}>
                      <ArrowRight
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-clay"
                        size={18}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </MotionReveal>
          ))}
        </Container>
      </Section>

      <Section className="bg-ink text-paper">
        <Container className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold">
              Not sure where your concern fits?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-paper/78">
              Send a general question or book a visit through the scheduling
              link. Emergencies should always use emergency services.
            </p>
          </div>
          <ButtonLink href="/contact">Contact the Practice</ButtonLink>
        </Container>
      </Section>
    </>
  );
}

