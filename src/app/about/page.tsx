import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { bookingUrl } from "@/lib/config";
import { patientFit } from "@/lib/content";

export const metadata: Metadata = {
  title: "Provider",
  description:
    "Learn about the provider, clinical philosophy, and patient fit behind Premier NP Care.",
};

const practiceSignals = [
  {
    label: "[PLACEHOLDER] New patient status",
    detail: "Opening panel, visit availability, and booking readiness.",
    icon: CalendarCheck,
  },
  {
    label: "[PLACEHOLDER] NP credentials",
    detail: "Board certification, licensure, and specialty preparation.",
    icon: ShieldCheck,
  },
  {
    label: "[PLACEHOLDER] Telehealth access",
    detail: "Visits are completed through the practice's existing platform.",
    icon: Stethoscope,
  },
  {
    label: "[PLACEHOLDER] Service area",
    detail: "State, locality, and patient eligibility language.",
    icon: MapPin,
  },
];

const credentialRows = [
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

const philosophyRows = [
  {
    title: "Focused assessment first",
    body: "[PLACEHOLDER] Her approach to listening, asking specific clinical questions, and understanding what is appropriate for telehealth.",
  },
  {
    title: "Plain-language care plans",
    body: "[PLACEHOLDER] How she explains findings, options, limitations, and follow-up in language patients can use.",
  },
  {
    title: "Appropriate escalation",
    body: "[PLACEHOLDER] How the practice guides patients toward urgent, emergency, specialist, or in-person care when needed.",
  },
];

const modelRows = [
  "[PLACEHOLDER] One provider accountable for the visit, plan, and follow-up guidance.",
  "[PLACEHOLDER] Scheduling and visit records stay in the existing EHR/telehealth platform.",
  "[PLACEHOLDER] Clear scope of care, including when an in-person exam or emergency care is the right next step.",
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        aside={
          <dl className="grid gap-4 border-y border-ink/12 py-5">
            <div>
              <dt className="label-caps text-fern">Practice model</dt>
              <dd className="mt-2 text-lg leading-8 text-ink/74">
                Single-provider medical practice with telehealth-affiliated
                access.
              </dd>
            </div>
            <div className="border-t border-ink/10 pt-4">
              <dt className="label-caps text-fern">Provider</dt>
              <dd className="mt-2 text-lg leading-8 text-ink/74">
                [PLACEHOLDER: NP Name, Credentials]
              </dd>
            </div>
          </dl>
        }
        eyebrow="Provider"
        title="Meet the clinician behind Premier NP Care."
      >
        <p>
          Patients should know who is evaluating them, what the practice can
          help with, and when a higher level of care is needed. This page
          introduces the provider, the clinical standards, and the care model.
        </p>
      </PageIntro>

      <section className="border-b border-ink/10 bg-ink text-paper">
        <Container className="grid divide-y divide-paper/12 md:grid-cols-4 md:divide-x md:divide-y-0">
          {practiceSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <MotionReveal key={signal.label}>
                <div className="py-8 md:px-6">
                  <div className="flex items-center gap-3 text-fern-mid">
                    <Icon aria-hidden="true" size={21} />
                    <p className="label-caps">{signal.label}</p>
                  </div>
                  <p className="mt-3 leading-7 text-paper/72">
                    {signal.detail}
                  </p>
                </div>
              </MotionReveal>
            );
          })}
        </Container>
      </section>

      <Section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <MotionReveal>
            <div className="border-y border-ink/12 py-6">
              <div className="overflow-hidden rounded-[8px] border border-ink/12 bg-mist p-3">
                <Image
                  alt="[PLACEHOLDER] Provider headshot placeholder"
                  className="aspect-[4/5] w-full rounded-[6px] object-cover saturate-[0.78]"
                  height={1200}
                  priority
                  src="/provider-placeholder.png"
                  width={960}
                />
              </div>
              <div className="mt-5">
                <p className="font-display text-4xl font-light leading-tight text-ink md:text-5xl">
                  [PLACEHOLDER: NP Name, Credentials]
                </p>
                <p className="label-caps mt-2 text-fern">
                  [PLACEHOLDER] Nurse Practitioner
                </p>
                <p className="mt-4 text-sm leading-6 text-ink/62">
                  Replace with the real provider headshot. Keep the crop direct,
                  warm, and clinically professional.
                </p>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="grid gap-10">
              <div className="grid gap-8 border-y border-ink/12 py-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="flex items-center gap-3 text-fern">
                    <UserRoundCheck aria-hidden="true" size={24} />
                    <p className="label-caps">Clinical profile</p>
                  </div>
                  <h2 className="mt-5 max-w-3xl font-display text-4xl font-light leading-[1.04] text-ink md:text-5xl">
                    A steady point of contact for focused medical visits.
                  </h2>
                  <p className="mt-5 max-w-3xl text-xl leading-8 text-ink/74">
                    [PLACEHOLDER] Use this section for a concise clinical
                    biography: training, patient population, care philosophy,
                    and why she started Premier NP Care.
                  </p>
                </div>
                <div className="border-t border-ink/12 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <p className="label-caps text-fern">How the practice works</p>
                  <ul className="mt-5 grid gap-4">
                    {modelRows.map((row) => (
                      <li className="flex gap-3 leading-7 text-ink/76" key={row}>
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-fern"
                          size={19}
                        />
                        <span>{row}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-y border-ink/12">
                {credentialRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div
                      className="grid gap-4 border-b border-ink/12 py-7 last:border-b-0 md:grid-cols-[220px_1fr]"
                      key={row.label}
                    >
                      <div className="flex items-center gap-3 text-fern label-caps">
                        <Icon aria-hidden="true" size={21} />
                        {row.label}
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
        <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <MotionReveal>
            <p className="label-caps text-fern">Care standards</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-light leading-[1.02] text-ink md:text-6xl">
              Clear medical guidance, with the right boundaries.
            </h2>
          </MotionReveal>

          <div className="border-y border-ink/12">
            {philosophyRows.map((row) => (
              <MotionReveal key={row.title}>
                <div className="grid gap-4 border-b border-ink/12 py-7 last:border-b-0 md:grid-cols-[0.72fr_1.28fr]">
                  <h3 className="font-display text-3xl font-light leading-tight text-ink">
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
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <MotionReveal>
            <div className="flex items-center gap-3 text-fern">
              <FileText aria-hidden="true" size={24} />
              <p className="label-caps">Built for</p>
            </div>
            <h2 className="mt-5 font-display text-5xl font-light leading-[1.02] text-ink">
              Patients who want access without losing clinical judgment.
            </h2>
          </MotionReveal>
          <div className="border-y border-ink/12">
            {patientFit.map((item) => (
              <MotionReveal key={item}>
                <div className="border-b border-ink/12 py-6 last:border-b-0">
                  <p className="text-lg leading-8 text-ink/76">{item}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink text-paper">
        <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-display text-5xl font-light leading-tight text-paper">
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
