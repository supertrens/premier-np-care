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
import { PracticeStatusPanel } from "@/components/practice-status-panel";
import { ProviderImageSlot } from "@/components/provider-image-slot";
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
    label: "Credentials",
    value: "Board certification, licensure, and clinical training details can be finalized before launch.",
    icon: ShieldCheck,
  },
  {
    label: "Training",
    value: "Graduate program, specialty focus, and relevant clinical rotations.",
    icon: GraduationCap,
  },
  {
    label: "Experience",
    value: "Years in practice, care settings, and patient populations served.",
    icon: ClipboardCheck,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-porcelain">
        <div className="ocean-field absolute inset-0" aria-hidden="true" />
        <Container className="relative grid gap-12 py-14 md:py-20 lg:grid-cols-[1fr_0.58fr] lg:items-center">
          <MotionReveal>
            <p className="label-caps text-cobalt">Provider dossier</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] text-ink md:text-7xl">
              Meet the clinician responsible for the visit.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/72">
              Premier NP Care is built around direct access to a Nurse
              Practitioner, clear clinical judgment, and practical guidance
              patients can understand.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                ["Provider", "Virginie Chavannes"],
                ["Status", "Accepting new patients status to be confirmed"],
                ["Access", "Telehealth availability through the practice platform"],
              ].map(([label, value]) => (
                <div
                  className="rounded-[18px] border border-line bg-paper/78 p-4 shadow-[0_14px_40px_rgba(7,28,42,0.05)]"
                  key={label}
                >
                  <p className="label-caps text-cobalt">{label}</p>
                  <p className="mt-2 leading-7 text-ink/74">{value}</p>
                </div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <ProviderImageSlot />
          </MotionReveal>
        </Container>
      </section>

      <Section className="bg-paper py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <MotionReveal>
            <p className="label-caps text-cobalt">Clinical profile</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
              A provider story that feels specific, not generic.
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-ink/70">
              Use this space for the real biography: training, patient
              population, care philosophy, and why she started Premier NP Care.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="grid gap-5">
              <article className="rounded-[24px] border border-line bg-porcelain p-7 shadow-[0_18px_60px_rgba(7,28,42,0.06)]">
                <div className="flex items-center gap-3 text-cobalt">
                  <UserRoundCheck aria-hidden="true" size={24} />
                  <p className="label-caps">Care philosophy</p>
                </div>
                <p className="mt-5 max-w-3xl font-display text-4xl font-medium leading-tight text-ink">
                  Thoughtful assessment, clear next steps, and honest
                  telehealth boundaries.
                </p>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/72">
                  This practice is designed around direct provider access,
                  careful listening, and care plans that help patients
                  understand what happens next.
                </p>
              </article>

              <div className="grid gap-4">
                {credentials.map((row) => {
                  const Icon = row.icon;
                  return (
                    <article
                      className="grid gap-4 rounded-[20px] border border-line bg-paper p-5 md:grid-cols-[220px_1fr]"
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
            <p className="label-caps text-cobalt">Care standards</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
              What patients can expect from the visit.
            </h2>
          </MotionReveal>

          <div className="grid gap-4">
            {providerStandards.map((row) => (
              <MotionReveal key={row.title}>
                <article className="rounded-[22px] border border-line bg-paper p-6 shadow-[0_16px_50px_rgba(7,28,42,0.05)]">
                  <h3 className="font-display text-3xl font-medium leading-tight text-ink">
                    {row.title}
                  </h3>
                  <p className="mt-3 leading-7 text-ink/72">{row.body}</p>
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
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink">
              Built for patients who want clarity before and after the visit.
            </h2>
          </MotionReveal>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[24px] border border-line bg-porcelain p-6">
              <p className="label-caps text-cobalt">What to expect</p>
              <div className="mt-5 grid gap-4">
                {patientExpectations.map((item) => (
                  <p className="leading-7 text-ink/74" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-line bg-porcelain p-6">
              <p className="label-caps text-cobalt">Designed for</p>
              <div className="mt-5 grid gap-4">
                {patientFit.map((item) => (
                  <p className="leading-7 text-ink/74" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-deep-navy text-paper">
        <Container className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="label-caps text-aqua">Practice status</p>
            <p className="mt-4 font-display text-5xl font-medium leading-tight">
              Ready to meet the provider?
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-paper/72">
              Booking is handled through the practice scheduling link.
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
