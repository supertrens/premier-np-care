import type { Metadata } from "next";
import Image from "next/image";
import {
  ClipboardCheck,
  FileText,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { patientFit } from "@/lib/content";

export const metadata: Metadata = {
  title: "Provider",
  description:
    "Learn about the provider, clinical philosophy, and patient fit behind Premier NP Care.",
};

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
    title: "Assessment before assumption",
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

export default function AboutPage() {
  return (
    <>
      <PageIntro
        aside={
          <div className="border-y border-ink/12 py-5">
            <p className="text-sm font-bold uppercase text-clay">
              Provider profile
            </p>
            <p className="mt-3 text-lg leading-8 text-ink/74">
              A clinical biography page for the person patients will actually
              meet, not a generic brand story.
            </p>
          </div>
        }
        eyebrow="Provider"
        title="[PLACEHOLDER: NP Name, Credentials]"
      >
        <p>
          Premier NP Care is a Nurse Practitioner-led medical practice. This
          page should establish training, scope, clinical judgment, and the care
          philosophy behind each visit.
        </p>
      </PageIntro>

      <Section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
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
              <p className="mt-4 text-sm leading-6 text-ink/62">
                [PLACEHOLDER] Replace with the real provider headshot. Keep the
                crop quiet, direct, and clinically professional.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="border-y border-ink/12">
              {credentialRows.map((row) => {
                const Icon = row.icon;
                return (
                  <div
                    className="grid gap-4 border-b border-ink/12 py-7 last:border-b-0 md:grid-cols-[220px_1fr]"
                    key={row.label}
                  >
                    <div className="flex items-center gap-3 text-sm font-bold uppercase text-clay">
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
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-mist py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <MotionReveal>
            <p className="text-sm font-bold uppercase text-clay">
              Clinical philosophy
            </p>
            <h2 className="mt-5 font-display text-6xl font-medium leading-[0.98] text-ink">
              Medical care should feel clear, not vague.
            </h2>
          </MotionReveal>

          <div className="border-y border-ink/12 bg-paper/55">
            {philosophyRows.map((row) => (
              <MotionReveal key={row.title}>
                <div className="grid gap-4 border-b border-ink/12 p-7 last:border-b-0 md:grid-cols-[0.72fr_1.28fr]">
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
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <MotionReveal>
            <div className="flex items-center gap-3 text-clay">
              <FileText aria-hidden="true" size={24} />
              <p className="text-sm font-bold uppercase">Built for</p>
            </div>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[1.02] text-ink">
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
    </>
  );
}
