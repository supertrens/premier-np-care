import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore service areas for Premier NP Care, including telehealth check-ins and everyday primary care needs.",
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
      <PageIntro
        eyebrow="Services"
        title="Focused care, described plainly."
      >
        <p>
          [PLACEHOLDER] Practical visit options for patients seeking Nurse
          Practitioner-led care through a telehealth-affiliated practice.
        </p>
      </PageIntro>

      <Section className="py-20">
        <Container>
          <div className="border-y border-ink/12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionReveal key={service.title}>
                  <div className="grid gap-6 border-b border-ink/12 py-10 last:border-b-0 md:grid-cols-[120px_1fr_0.9fr]">
                    <div className="font-display text-5xl font-light text-fern/25">
                      0{index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 text-fern label-caps">
                        <Icon aria-hidden="true" size={22} />
                        {service.eyebrow}
                      </div>
                      <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ink">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg leading-8 text-ink/74">
                      {service.description}
                    </p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-mist py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          {serviceDetails.map((group) => (
            <MotionReveal key={group.heading}>
              <div className="h-full rounded-[8px] border border-ink/12 bg-paper p-7">
                <h2 className="font-display text-4xl font-light text-ink">
                  {group.heading}
                </h2>
                <ul className="mt-8 grid gap-4">
                  {group.items.map((item) => (
                    <li className="flex gap-3 leading-7 text-ink/78" key={item}>
                      <ArrowRight
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-fern"
                        size={18}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionReveal>
          ))}
        </Container>
      </Section>

      <Section className="bg-ink text-paper">
        <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-4xl font-light text-paper">
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
