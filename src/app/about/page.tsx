import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarCheck,
  UserRoundCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { ProviderImageSlot } from "@/components/provider-image-slot";
import { Section } from "@/components/section";
import { bookingUrl } from "@/lib/config";
import {
  missionStatement,
  patientExpectations,
  patientFit,
  providerBio,
  providerStandards,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Provider",
  description:
    "Meet Virginie Chavannes, APN, and learn how Premier NP Care approaches provider-led telehealth visits.",
};

const providerPrinciples = [
  ["Evidence-based", "Care is grounded in clinical evidence and assessment."],
  ["Personal", "Patients are heard as people with goals, values, and concerns."],
  ["Educational", "Clear teaching helps patients participate in their health."],
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
              Chavannes, APN, practical telehealth guidance, and a visit
              experience that explains what happens next.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={bookingUrl} id="hero-book" variant="cobalt">
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
            <p className="label-caps text-cobalt">Her story</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              A practice shaped around listening first.
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-ink/70">
              Virginie brings primary care, acute care, and chronic disease
              management experience to a practice centered on compassion,
              prevention, education, and clear communication.
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
                  Evidence-based care delivered with active listening, shared
                  decision-making, and respect for the person behind the visit.
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

              <div className="grid gap-6 p-7 md:p-8">
                {providerBio.map((paragraph) => (
                  <p
                    className="max-w-3xl text-lg leading-8 text-ink/74"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
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

      <Section className="relative overflow-hidden bg-paper py-24">
        <div className="ocean-field absolute inset-0 opacity-70" aria-hidden="true" />
        <Container className="relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <p className="label-caps text-cobalt">Mission statement</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              Compassion, respect, and clinical excellence.
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <blockquote className="rounded-[28px] border border-cyan/25 bg-paper/90 p-7 shadow-[0_22px_70px_rgba(26,53,87,0.07)] md:p-8">
              <div className="h-1.5 w-20 rounded-full bg-[linear-gradient(90deg,#12aec4,#58c7d6,#c9eef3)]" />
              <p className="mt-6 max-w-4xl font-display text-2xl font-medium leading-9 text-ink md:text-[1.7rem] md:leading-10">
                {missionStatement}
              </p>
              <footer className="mt-6 text-sm font-semibold text-harbor">
                Virginie Chavannes, APN
              </footer>
            </blockquote>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-mist py-24">
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

    </>
  );
}
