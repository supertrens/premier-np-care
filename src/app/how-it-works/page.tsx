import type { Metadata } from "next";
import {
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { bookingUrl } from "@/lib/config";
import { patientJourney } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Understand the Premier NP Care patient journey from booking to telehealth visit, care plan, and follow-up.",
};

const reassuranceRows = [
  {
    label: "Before the visit",
    body: "You receive simple visit instructions so you know what to expect and how to prepare.",
  },
  {
    label: "During the visit",
    body: "Virginie listens, asks focused questions, and talks through the care options that fit your concern.",
  },
  {
    label: "After the visit",
    body: "You leave with plain-language next steps and follow-up guidance.",
  },
];

const appointmentPrepItems = [
  "Photo ID",
  "Insurance card",
  "Current medication list",
  "Any recent health information",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        aside={
          <div className="rounded-[22px] border border-line bg-paper/82 p-5 shadow-[0_16px_50px_rgba(7,28,42,0.06)]">
            <p className="label-caps text-cobalt">Simple from the start</p>
            <p className="mt-3 leading-7 text-ink/74">
              The care path is easy to follow: book, prepare, meet with the
              provider, and leave with next steps.
            </p>
          </div>
        }
        eyebrow="How it works"
        title="From booking to next steps, the path stays clear."
      >
        <p>
          Telehealth should feel clear before the visit starts. Premier NP Care
          makes the care journey easy to understand from the first click.
        </p>
      </PageIntro>

      <Section className="bg-paper py-24">
        <Container>
          <div className="overflow-hidden rounded-[32px] border border-line bg-porcelain shadow-[0_28px_90px_rgba(7,28,42,0.08)]">
            <div className="grid lg:grid-cols-[0.56fr_1.44fr]">
              <MotionReveal>
                <div className="relative h-full overflow-hidden bg-deep-navy p-7 text-paper md:p-8">
                  <div className="care-current-lines absolute inset-0 opacity-18" />
                  <div className="relative flex h-full min-h-[360px] flex-col justify-between">
                    <div>
                      <p className="label-caps text-aqua">Care path</p>
                      <h2 className="mt-5 max-w-sm font-display text-4xl font-medium leading-tight md:text-5xl">
                        Book once. Know what comes next.
                      </h2>
                      <p className="mt-5 max-w-md leading-7 text-paper/72">
                        The path is intentionally simple: choose a time,
                        prepare for the visit, meet with the provider, and
                        leave with a plan.
                      </p>
                    </div>
                    <div className="mt-8 grid gap-3 border-y border-white/14 py-5">
                      {[
                        "Choose a visit time",
                        "Meet Virginie Chavannes, APN",
                        "Leave with a care plan",
                      ].map((item) => (
                        <div className="flex items-center gap-3" key={item}>
                          <span className="h-2 w-2 rounded-full bg-aqua" />
                          <p className="text-sm font-semibold text-paper/76">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionReveal>

              <ol className="divide-y divide-line bg-paper">
                {patientJourney.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <MotionReveal delay={index * 0.04} key={step.title}>
                      <li className="grid gap-5 p-6 md:grid-cols-[96px_1fr] md:items-start md:p-7">
                        <div className="flex items-center gap-4 text-cobalt">
                          <span className="font-display text-4xl font-medium text-cobalt/36">
                            0{index + 1}
                          </span>
                          <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-cyan/20 bg-mist md:flex">
                            <Icon aria-hidden="true" size={20} />
                          </span>
                        </div>
                        <div>
                          <h3 className="font-display text-3xl font-medium leading-tight text-ink">
                            {step.title}
                          </h3>
                          <p className="mt-2 max-w-3xl leading-7 text-ink/70">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    </MotionReveal>
                  );
                })}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-porcelain py-20">
        <Container>
          <MotionReveal>
            <div className="grid gap-8 rounded-[28px] border border-line bg-paper p-7 shadow-[0_22px_70px_rgba(7,28,42,0.08)] lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <div className="flex items-center gap-3 text-cobalt">
                  <FileText aria-hidden="true" size={24} />
                  <p className="label-caps">What to have ready</p>
                </div>
                <h2 className="mt-5 max-w-md font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
                  A little prep helps the visit feel easier.
                </h2>
              </div>
              <div>
                <p className="text-lg leading-8 text-ink/74">
                  This telemedicine visit is scheduled to discuss current
                  health concerns, review symptoms, assess medications, and
                  address questions or follow-up care needs. Please join the
                  video appointment 5-10 minutes early using the provided link.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {appointmentPrepItems.map((item) => (
                    <div
                      className="flex items-center gap-3 rounded-[14px] border border-line bg-porcelain px-4 py-3"
                      key={item}
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="shrink-0 text-cobalt"
                        size={18}
                      />
                      <p className="font-semibold text-ink/78">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 border-t border-line pt-5 text-sm leading-6 text-ink/62">
                  Service fees vary depending on the length and complexity of
                  the visit.
                </p>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-mist py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <p className="label-caps text-cobalt">New to telehealth</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              The process should feel calm before the visit begins.
            </h2>
          </MotionReveal>
          <div className="grid gap-4">
            {reassuranceRows.map((item, index) => (
              <MotionReveal delay={index * 0.04} key={item.label}>
                <article className="grid gap-4 border-t border-line py-6 md:grid-cols-[220px_1fr]">
                  <div className="flex items-center gap-3 text-cobalt">
                    <CheckCircle2 aria-hidden="true" size={21} />
                    <p className="label-caps">{item.label}</p>
                  </div>
                  <p className="leading-7 text-ink/74">{item.body}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-porcelain py-20">
        <Container>
          <MotionReveal>
            <div className="grid gap-8 rounded-[28px] border border-line bg-paper p-7 shadow-[0_22px_70px_rgba(7,28,42,0.08)] md:grid-cols-[0.64fr_1.36fr] md:items-center">
              <div className="flex items-center gap-3 text-cobalt">
                <ShieldCheck aria-hidden="true" size={24} />
                <p className="label-caps">Important</p>
              </div>
              <p className="max-w-4xl font-display text-3xl font-medium leading-[1.08] text-ink md:text-4xl">
                If symptoms feel urgent, choose urgent or emergency care right
                away.
              </p>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-deep-navy text-paper">
        <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3 text-aqua">
              <ClipboardCheck aria-hidden="true" size={22} />
              <p className="label-caps">Start here</p>
            </div>
            <h2 className="font-display text-4xl font-medium">
              One simple first step.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-paper/78">
              Book through the practice scheduling link, and the next steps are
              explained from there.
            </p>
          </div>
          <ButtonLink href={bookingUrl} variant="mist">
            <CalendarCheck aria-hidden="true" size={20} />
            Book an Appointment
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
