import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PracticeStatusPanel } from "@/components/practice-status-panel";
import { ProviderImageSlot } from "@/components/provider-image-slot";
import { Section } from "@/components/section";
import { bookingUrl } from "@/lib/config";
import {
  patientExpectations,
  patientFit,
  providerStandards,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Provider",
  description:
    "Meet Virginie Chavannes and learn how Premier NP Care approaches provider-led telehealth visits.",
};

const profileRows = [
  {
    label: "Provider",
    value: "Virginie Chavannes",
    icon: UserRoundCheck,
  },
  {
    label: "Credential line",
    value:
      "Nurse Practitioner credentials and final licensing language should be confirmed with the provider before launch.",
    icon: ShieldCheck,
  },
  {
    label: "Clinical background",
    value:
      "Training, specialty focus, and practice experience can be expanded once the provider supplies final biography details.",
    icon: GraduationCap,
  },
  {
    label: "Care model",
    value:
      "Provider-led telehealth visits with clear scope, practical next steps, and documented safety boundaries.",
    icon: ClipboardCheck,
  },
];

const providerPrinciples = [
  ["Visible", "A named clinician is attached to the visit and care plan."],
  ["Plain", "Patients should leave knowing what to do next."],
  ["Bounded", "Telehealth limits are explained instead of hidden."],
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-porcelain">
        <div className="ocean-field absolute inset-0" aria-hidden="true" />
        <Container className="relative grid gap-12 py-14 md:py-20 lg:grid-cols-[1fr_0.58fr] lg:items-center">
          <MotionReveal>
            <p className="label-caps text-cobalt">Provider</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] text-ink md:text-6xl">
              Care feels different when the clinician is visible from the
              start.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/72">
              Premier NP Care is built around direct access to Virginie
              Chavannes, practical telehealth guidance, and a visit experience
              that explains what happens next.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={bookingUrl} variant="cobalt">
                <CalendarCheck aria-hidden="true" size={20} />
                Book an Appointment
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Services
                <ArrowRight aria-hidden="true" size={19} />
              </ButtonLink>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <ProviderImageSlot />
          </MotionReveal>
        </Container>
      </section>

      <Section className="bg-paper py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <MotionReveal>
            <p className="label-caps text-cobalt">Clinical profile</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              A provider dossier for the first client review.
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-ink/70">
              This page is structured so the provider can quickly validate the
              final details: credential line, care philosophy, patient fit, and
              where telehealth should stop.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="overflow-hidden rounded-[30px] border border-line bg-porcelain shadow-[0_28px_90px_rgba(7,28,42,0.08)]">
              <div className="border-b border-line bg-paper p-7 md:p-8">
                <div className="flex items-center gap-3 text-cobalt">
                  <UserRoundCheck aria-hidden="true" size={24} />
                  <p className="label-caps">Care philosophy</p>
                </div>
                <p className="mt-5 max-w-3xl font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                  Direct provider access, clear clinical judgment, and guidance
                  patients can actually follow.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {providerPrinciples.map(([label, body]) => (
                    <div
                      className="rounded-[18px] border border-line bg-porcelain p-4"
                      key={label}
                    >
                      <p className="label-caps text-harbor">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-ink/70">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="divide-y divide-line">
                {profileRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <article
                      className="grid gap-4 p-6 md:grid-cols-[220px_1fr] md:items-start"
                      key={row.label}
                    >
                      <div className="flex items-center gap-3 text-cobalt">
                        <Icon aria-hidden="true" size={21} />
                        <p className="label-caps">{row.label}</p>
                      </div>
                      <p className="text-lg leading-8 text-ink/74">
                        {row.value}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-mist py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <p className="label-caps text-cobalt">Visit standards</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              What the visit should feel like for patients.
            </h2>
          </MotionReveal>

          <div className="grid gap-4">
            {providerStandards.map((row, index) => (
              <MotionReveal delay={index * 0.04} key={row.title}>
                <article className="grid gap-5 border-t border-line py-6 md:grid-cols-[88px_1fr]">
                  <span className="font-display text-4xl font-medium text-cobalt/34">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-medium leading-tight text-ink">
                      {row.title}
                    </h3>
                    <p className="mt-3 max-w-3xl leading-7 text-ink/72">
                      {row.body}
                    </p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <p className="label-caps text-cobalt">Patient fit</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              Built for patients who want clarity before and after the visit.
            </h2>
          </MotionReveal>
          <div className="grid gap-5 md:grid-cols-2">
            <MotionReveal delay={0.06}>
              <div className="h-full rounded-[24px] border border-line bg-porcelain p-6">
                <p className="label-caps text-cobalt">What to expect</p>
                <div className="mt-5 grid gap-4">
                  {patientExpectations.map((item) => (
                    <p className="leading-7 text-ink/74" key={item}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <div className="h-full rounded-[24px] border border-line bg-porcelain p-6">
                <p className="label-caps text-cobalt">Designed for</p>
                <div className="mt-5 grid gap-4">
                  {patientFit.map((item) => (
                    <p className="leading-7 text-ink/74" key={item}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </MotionReveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-deep-navy text-paper">
        <Container className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="label-caps text-aqua">Practice status</p>
            <p className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
              Ready to meet the provider?
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-paper/72">
              Booking is handled through the practice scheduling link. For
              urgent needs, use emergency services.
            </p>
            <ButtonLink className="mt-7" href={bookingUrl} variant="mist">
              <CalendarCheck aria-hidden="true" size={20} />
              Book an Appointment
            </ButtonLink>
          </div>
          <PracticeStatusPanel />
        </Container>
      </Section>
    </>
  );
}
