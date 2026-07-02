import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardCheck,
  ShieldCheck,
  TriangleAlert,
  UserRoundCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import {
  HeroEntrance,
  HeroItem,
  MotionReveal,
} from "@/components/motion-reveal";
import { Section } from "@/components/section";
import { ServiceRail } from "@/components/service-rail";
import { bookingUrl } from "@/lib/config";
import {
  patientJourney,
  practiceAtAGlance,
  safetyBoundaries,
  services,
} from "@/lib/content";
import { StartCarePanel } from "@/components/start-care-panel";

export const metadata: Metadata = {
  title: "Nurse Practitioner-Led Medical Practice",
  description:
    "Premier NP Care is a Nurse Practitioner-led medical practice offering clear, telehealth-affiliated care.",
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-porcelain">
        <div className="ocean-field absolute inset-0" aria-hidden="true" />
        <Container className="relative grid min-h-[700px] gap-12 py-14 md:py-20 lg:grid-cols-[0.88fr_0.96fr] lg:items-center">
          <HeroEntrance className="max-w-3xl">
            <HeroItem>
              <p className="label-caps text-cobalt">
                Nurse Practitioner-led medical practice
              </p>
            </HeroItem>
            <HeroItem>
              <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.02] text-ink sm:text-6xl md:text-7xl lg:text-[5.25rem]">
                Premier NP Care
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="mt-7 max-w-3xl text-3xl font-semibold leading-tight text-cobalt md:text-5xl">
                Personal care, clearly guided from booking to next steps.
              </p>
            </HeroItem>
            <HeroItem>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/72 md:text-[1.35rem] md:leading-9">
                Telehealth-affiliated care for patients who want the process to
                feel calm, direct, and clearly explained before they book.
                Scheduling, visits, records, and patient details stay inside
                the established care platform.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={bookingUrl} variant="cobalt">
                  <CalendarCheck aria-hidden="true" size={20} />
                  Book an Appointment
                </ButtonLink>
                <ButtonLink href="/about" variant="secondary">
                  Meet the Provider
                  <ArrowRight aria-hidden="true" size={19} />
                </ButtonLink>
              </div>
            </HeroItem>
          </HeroEntrance>

          <HeroItem>
            <div className="mx-auto w-full max-w-[660px] lg:ml-auto">
              <StartCarePanel />
            </div>
          </HeroItem>
        </Container>
      </section>

      <Section className="relative overflow-hidden bg-deep-navy py-20 text-paper">
        <div className="care-current-lines absolute inset-0 opacity-10" />
        <Container className="relative grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <MotionReveal>
            <p className="label-caps text-aqua">Practice clarity</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight md:text-5xl">
              Know the care path before the visit begins.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-paper/72">
              Premier NP Care explains the practical details first: who leads
              care, what telehealth can handle, and when another setting is
              safer.
            </p>
          </MotionReveal>

          <div className="border-y border-white/14">
            {practiceAtAGlance.map((item, index) => {
              const Icon = item.icon;
              return (
                <MotionReveal delay={index * 0.05} key={item.title}>
                  <article className="grid gap-4 border-b border-white/14 py-6 last:border-b-0 md:grid-cols-[84px_1fr]">
                    <div className="flex items-center gap-3 text-aqua">
                      <span className="font-display text-3xl leading-none text-paper/36">
                        0{index + 1}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/7">
                        <Icon aria-hidden="true" size={20} />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-paper">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl leading-7 text-paper/68">
                        {item.body}
                      </p>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="overflow-hidden bg-paper py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <MotionReveal>
              <p className="label-caps text-cobalt">Clinical scope</p>
              <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
                Common care needs, framed clearly.
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <div className="grid gap-5 border-y border-line py-6 md:grid-cols-[1fr_auto] md:items-center">
                <p className="max-w-2xl text-lg leading-8 text-ink/70">
                  Browse common starting points for care. Each service card
                  keeps the promise practical: what may fit a telehealth visit
                  and when another setting may be safer.
                </p>
                <ButtonLink href="/services" variant="secondary">
                  View Services
                  <ArrowRight aria-hidden="true" size={19} />
                </ButtonLink>
              </div>
            </MotionReveal>
          </div>

          <ServiceRail itemCount={services.length}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionReveal
                  className="w-[86vw] max-w-[760px] shrink-0 snap-center md:w-[74vw] lg:max-w-[900px]"
                  delay={index * 0.05}
                  key={service.title}
                >
                  <article className="grid min-h-[520px] overflow-hidden rounded-[30px] border border-line bg-porcelain shadow-[0_28px_80px_rgba(7,28,42,0.08)] md:grid-cols-[0.86fr_1.14fr]">
                    <div className="relative min-h-[210px] overflow-hidden bg-[linear-gradient(135deg,#E7F8FB,#F7FCFD_54%,#D4F0F6)] p-6 md:min-h-full">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(rgba(10,77,143,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(10,77,143,0.06)_1px,transparent_1px)] bg-[size:34px_34px]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute -right-12 top-10 h-48 w-48 rounded-full border border-cyan/30"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute bottom-8 left-8 h-32 w-32 rounded-full bg-cyan/10"
                      />
                      <div className="relative flex h-full min-h-[180px] flex-col justify-between">
                        <div className="flex items-center justify-between gap-4">
                          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan/25 bg-paper/80 text-cobalt shadow-[0_16px_40px_rgba(10,77,143,0.08)]">
                            <Icon aria-hidden="true" size={26} />
                          </span>
                          <span className="label-caps rounded-full border border-cyan/18 bg-paper/80 px-3 py-2 text-harbor">
                            {service.eyebrow}
                          </span>
                        </div>
                        <div className="mt-10">
                          <p className="label-caps text-cobalt">
                            Service area 0{index + 1}
                          </p>
                          <div className="mt-4 h-2 w-28 rounded-full bg-[linear-gradient(90deg,#07045F,#12AEC4,#C9EEF3)]" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col p-7 md:p-8">
                      <h3 className="max-w-2xl font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
                        {service.title}
                      </h3>
                      <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
                        {service.description}
                      </p>

                      <div className="mt-auto grid gap-4 pt-8 lg:grid-cols-2">
                        <div className="border-t border-line pt-4">
                          <div className="flex items-center gap-2 text-cobalt">
                            <ClipboardCheck aria-hidden="true" size={18} />
                            <p className="label-caps">May fit telehealth</p>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-ink/68">
                            {service.fit}
                          </p>
                        </div>
                        <div className="border-t border-line pt-4">
                          <div className="flex items-center gap-2 text-warn">
                            <TriangleAlert aria-hidden="true" size={18} />
                            <p className="label-caps">
                              Consider another setting
                            </p>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-ink/68">
                            {service.boundary}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
          </ServiceRail>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-mist py-24">
        <div className="care-current-lines absolute inset-x-0 top-0 h-32 opacity-25" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
            <MotionReveal>
              <p className="label-caps text-cobalt">Provider accountability</p>
              <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
                Meet the provider behind the plan.
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <div className="grid gap-5 border-y border-line py-6 md:grid-cols-[1fr_auto] md:items-center">
                <p className="max-w-2xl text-lg leading-8 text-ink/70">
                  Premier NP Care makes the clinician relationship visible
                  before booking, so patients know who guides the visit and how
                  care boundaries are handled.
                </p>
                <ButtonLink href="/about" variant="secondary">
                  Meet the Provider
                  <ArrowRight aria-hidden="true" size={19} />
                </ButtonLink>
              </div>
            </MotionReveal>
          </div>

          <MotionReveal delay={0.12}>
            <div className="mt-12 grid gap-5 lg:grid-cols-[0.92fr_1.08fr_0.86fr]">
              <article className="overflow-hidden rounded-[30px] border border-line bg-paper shadow-[0_28px_90px_rgba(7,28,42,0.08)]">
                <div className="relative min-h-[320px] overflow-hidden bg-[linear-gradient(135deg,#E8F7FA,#F7FCFD_58%,#D5F1F6)] p-6">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(rgba(10,77,143,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(10,77,143,0.055)_1px,transparent_1px)] bg-[size:34px_34px]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 top-10 h-52 w-52 rounded-full border border-cyan/28"
                  />
                  <div className="relative flex h-full min-h-[270px] flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="label-caps rounded-full border border-cyan/20 bg-paper/80 px-3 py-2 text-harbor">
                        Provider
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-deep-navy text-paper">
                        <UserRoundCheck aria-hidden="true" size={22} />
                      </span>
                    </div>
                    <div>
                      <div className="grid h-28 w-28 place-items-center rounded-[30px] bg-deep-navy font-display text-5xl font-medium text-paper shadow-[0_22px_60px_rgba(7,4,95,0.24)]">
                        VC
                      </div>
                      <h3 className="mt-6 font-display text-4xl font-medium leading-tight text-ink">
                        Virginie Chavannes
                      </h3>
                      <p className="mt-3 max-w-xs leading-7 text-ink/66">
                        A professional headshot can replace this slot while
                        keeping the layout steady.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="rounded-[30px] border border-line bg-paper p-7 shadow-[0_28px_90px_rgba(7,28,42,0.08)] md:p-8">
                <div className="flex items-center gap-3 text-cobalt">
                  <ClipboardCheck aria-hidden="true" size={23} />
                  <p className="label-caps">Care philosophy</p>
                </div>
                <p className="mt-5 max-w-2xl font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
                  A direct care relationship, not a faceless portal.
                </p>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
                  Patients should be able to understand who is responsible for
                  the visit, what can be handled virtually, and what the next
                  step should be.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Visible", "Named clinician"],
                    ["Plain", "Clear next steps"],
                    ["Safe", "Care boundaries"],
                  ].map(([label, value]) => (
                    <div
                      className="rounded-[18px] border border-line bg-porcelain p-4"
                      key={label}
                    >
                      <p className="label-caps text-harbor">{label}</p>
                      <p className="mt-2 font-semibold leading-6 text-ink/72">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <div className="grid gap-4">
                {[
                  {
                    title: "Listen first",
                    body: "The visit starts with context, symptoms, questions, and goals.",
                    icon: UserRoundCheck,
                  },
                  {
                    title: "Explain the plan",
                    body: "Next steps are written plainly so patients know what happens after the visit.",
                    icon: ClipboardCheck,
                  },
                  {
                    title: "Name the limits",
                    body: "When telehealth is not the right setting, that boundary is part of the care.",
                    icon: ShieldCheck,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      className="rounded-[24px] border border-line bg-paper p-5 shadow-[0_18px_55px_rgba(7,28,42,0.05)]"
                      key={item.title}
                    >
                      <div className="flex items-center gap-3 text-cobalt">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist">
                          <Icon aria-hidden="true" size={19} />
                        </span>
                        <p className="label-caps">{item.title}</p>
                      </div>
                      <p className="mt-4 leading-7 text-ink/70">{item.body}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-paper py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
            <MotionReveal>
              <p className="label-caps text-cobalt">Patient journey</p>
              <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
                A visit path patients can understand before they start.
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p className="max-w-2xl border-y border-line py-6 text-lg leading-8 text-ink/70">
                The public site explains the path. Booking, visit instructions,
                patient records, and follow-up details stay inside the practice
                platform.
              </p>
            </MotionReveal>
          </div>

          <MotionReveal delay={0.12}>
            <div className="mt-12 overflow-hidden rounded-[32px] border border-line bg-porcelain shadow-[0_28px_90px_rgba(7,28,42,0.08)]">
              <div className="grid lg:grid-cols-[0.62fr_1.38fr]">
                <div className="relative overflow-hidden bg-deep-navy p-7 text-paper md:p-8">
                  <div className="care-current-lines absolute inset-0 opacity-18" />
                  <div className="relative">
                    <p className="label-caps text-aqua">Care path</p>
                    <h3 className="mt-5 max-w-sm font-display text-4xl font-medium leading-tight md:text-5xl">
                      Book once. Know what comes next.
                    </h3>
                    <p className="mt-5 max-w-md leading-7 text-paper/70">
                      The journey is intentionally plain: schedule through the
                      platform, prepare for the visit, meet with the provider,
                      receive a plan, and follow up in the right place.
                    </p>

                    <div className="mt-8 grid gap-3 border-y border-white/14 py-5">
                      {[
                        "No portal on this website",
                        "No records stored here",
                        "Urgent needs use urgent care",
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

                <ol className="divide-y divide-line bg-paper">
                  {patientJourney.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <li
                        className="grid gap-5 p-6 md:grid-cols-[112px_1fr] md:items-start md:p-7"
                        key={step.title}
                      >
                        <div className="flex items-center gap-4 text-cobalt">
                          <span className="font-display text-4xl font-medium text-ink/28">
                            0{index + 1}
                          </span>
                          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan/20 bg-mist">
                            <Icon aria-hidden="true" size={21} />
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
                    );
                  })}
                </ol>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-porcelain py-20">
        <Container className="grid gap-6 lg:grid-cols-3">
          {safetyBoundaries.map((item) => {
            const Icon = item.icon;
            return (
              <MotionReveal key={item.title}>
                <article className="h-full rounded-[22px] border border-line bg-paper p-6 shadow-[0_18px_55px_rgba(7,28,42,0.06)]">
                  <Icon aria-hidden="true" className="text-warn" size={25} />
                  <h3 className="mt-5 font-display text-3xl font-medium leading-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-ink/70">{item.body}</p>
                </article>
              </MotionReveal>
            );
          })}
        </Container>
      </Section>

      <Section className="bg-deep-navy text-paper">
        <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3 text-aqua">
              <ShieldCheck aria-hidden="true" size={24} />
              <p className="label-caps">Start here</p>
            </div>
            <p className="font-display text-5xl font-medium leading-tight">
              Ready to start with the practice?
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-paper/76">
              Book through the practice scheduling link. For urgent needs, use
              emergency services.
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
