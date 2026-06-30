import type { Metadata } from "next";
import {
  CalendarCheck,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { ProviderHeadshotSlot } from "@/components/provider-headshot-slot";
import { Section } from "@/components/section";
import { bookingUrl } from "@/lib/config";
import { patientExpectations, patientFit, providerStandards } from "@/lib/content";

export const metadata: Metadata = {
  title: "Provider",
  description:
    "Learn about the provider, clinical philosophy, and care standards behind Premier NP Care.",
};

const credentials = [
  {
    label: "[PLACEHOLDER] Credentials",
    value: "Board certification, licensure, and clinical training details.",
    icon: ShieldCheck,
  },
  {
    label: "[PLACEHOLDER] Training",
    value: "Graduate program, specialty focus, and relevant clinical rotations.",
    icon: GraduationCap,
  },
  {
    label: "[PLACEHOLDER] Experience",
    value: "Years in practice, care settings, and patient populations served.",
    icon: ClipboardCheck,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
        <div className="practice-rule absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative grid gap-12 py-14 md:py-20 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <MotionReveal>
            <p className="label-caps text-fern">Provider dossier</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] text-ink md:text-7xl">
              Meet the clinician responsible for the visit.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/72">
              Premier NP Care is built around direct access to a Nurse
              Practitioner, a clear care scope, and practical medical guidance
              patients can understand.
            </p>
            <div className="mt-9 grid border-y border-ink/12 md:grid-cols-3 md:divide-x md:divide-ink/12">
              {[
                ["Provider", "[PLACEHOLDER: NP Name, Credentials]"],
                ["Clinical status", "[PLACEHOLDER] Accepting new patients"],
                ["Service area", "[PLACEHOLDER] Telehealth availability"],
              ].map(([label, value]) => (
                <div className="py-5 md:px-5" key={label}>
                  <p className="label-caps text-fern">{label}</p>
                  <p className="mt-3 leading-7 text-ink/74">{value}</p>
                </div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <ProviderHeadshotSlot />
          </MotionReveal>
        </Container>
      </section>

      <Section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <MotionReveal>
            <div>
              <p className="label-caps text-fern">Clinical profile</p>
              <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
                The provider story belongs in plain view.
              </h2>
              <p className="mt-6 max-w-lg leading-8 text-ink/70">
                Use this section for the real provider biography: training,
                patient population, care philosophy, and why she started Premier
                NP Care.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="grid gap-10">
              <div className="border-y border-ink/12 py-8">
                <div className="flex items-center gap-3 text-fern">
                  <UserRoundCheck aria-hidden="true" size={24} />
                  <p className="label-caps">Clinical profile</p>
                </div>
                <h2 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.05] text-ink md:text-5xl">
                  A steady point of contact for focused medical visits.
                </h2>
                <p className="mt-5 max-w-3xl text-xl leading-8 text-ink/74">
                  [PLACEHOLDER] Use this section for a concise clinical
                  biography: training, patient population, care philosophy, and
                  why she started Premier NP Care.
                </p>
              </div>

              <div className="border-y border-ink/12">
                {credentials.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div
                      className="grid gap-4 border-b border-ink/12 py-7 last:border-b-0 md:grid-cols-[220px_1fr]"
                      key={row.label}
                    >
                      <div className="flex items-center gap-3 text-fern">
                        <Icon aria-hidden="true" size={21} />
                        <p className="label-caps">{row.label}</p>
                      </div>
                      <p className="text-xl leading-8 text-ink/76">
                        {row.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-mist py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.74fr_1.26fr]">
          <MotionReveal>
            <p className="label-caps text-fern">Care standards</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
              Clear medical guidance, with the right boundaries.
            </h2>
          </MotionReveal>

          <div className="border-y border-ink/12">
            {providerStandards.map((row) => (
              <MotionReveal key={row.title}>
                <div className="grid gap-4 border-b border-ink/12 py-7 last:border-b-0 md:grid-cols-[0.72fr_1.28fr]">
                  <h3 className="font-display text-3xl font-medium leading-tight text-ink">
                    {row.title}
                  </h3>
                  <p className="leading-7 text-ink/72">{row.body}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <p className="label-caps text-fern">What patients can expect</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink">
              Access without losing clinical judgment.
            </h2>
          </MotionReveal>
          <div className="grid gap-10">
            <div className="border-y border-ink/12">
              {patientExpectations.map((item) => (
                <MotionReveal key={item}>
                  <div className="border-b border-ink/12 py-6 last:border-b-0">
                    <p className="text-lg leading-8 text-ink/76">{item}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
            <div className="border-y border-ink/12">
              {patientFit.map((item) => (
                <MotionReveal key={item}>
                  <div className="border-b border-ink/12 py-6 last:border-b-0">
                    <p className="text-lg leading-8 text-ink/76">{item}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-ink text-paper">
        <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-display text-5xl font-medium leading-tight">
              Ready to meet the provider?
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-paper/76">
              Booking is handled through the practice scheduling link.
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
