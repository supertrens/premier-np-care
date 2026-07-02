import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardCheck,
  ImagePlus,
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

          <div className="-mx-5 mt-12 overflow-x-auto px-5 pb-3 [scrollbar-width:thin] md:-mx-8 md:px-8">
            <div className="flex snap-x snap-mandatory gap-5">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <MotionReveal
                    className="w-[82vw] max-w-[390px] shrink-0 snap-start md:w-[360px]"
                    delay={index * 0.05}
                    key={service.title}
                  >
                    <article className="flex min-h-[520px] flex-col rounded-[28px] border border-line bg-porcelain p-6 shadow-[0_24px_70px_rgba(7,28,42,0.07)]">
                      <div className="flex items-center justify-between gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan/20 bg-mist text-cobalt">
                          <Icon aria-hidden="true" size={23} />
                        </span>
                        <span className="label-caps rounded-full border border-cyan/18 bg-paper px-3 py-2 text-harbor">
                          {service.eyebrow}
                        </span>
                      </div>

                      <h3 className="mt-7 font-display text-3xl font-medium leading-tight text-ink">
                        {service.title}
                      </h3>
                      <p className="mt-4 leading-7 text-ink/70">
                        {service.description}
                      </p>

                      <div className="mt-auto space-y-4 pt-7">
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
                            <p className="label-caps">Consider another setting</p>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-ink/68">
                            {service.boundary}
                          </p>
                        </div>
                      </div>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-mist py-24">
        <div className="care-current-lines absolute inset-x-0 top-0 h-32 opacity-30" />
        <Container className="relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <MotionReveal>
            <p className="label-caps text-cobalt">Provider accountability</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
              A real practice needs a visible clinician.
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-ink/70">
              The demo intentionally uses a polished provider image slot until
              the real headshot is available. It keeps trust honest while still
              looking launch-quality.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="grid gap-8 border-y border-line py-8 md:grid-cols-[0.72fr_1fr] md:items-center">
              <figure>
                <div className="grid aspect-[4/5] max-h-[430px] place-items-center rounded-[28px] border border-dashed border-cyan/45 bg-paper/72">
                  <div className="max-w-[240px] px-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[18px] bg-deep-navy text-paper shadow-[0_18px_42px_rgba(7,4,95,0.18)]">
                      <UserRoundCheck aria-hidden="true" size={30} />
                    </div>
                    <p className="mt-5 font-display text-3xl font-medium leading-tight text-ink">
                      Provider headshot
                    </p>
                    <p className="mt-3 text-sm leading-6 text-ink/64">
                      Replace with the real provider photo before launch.
                    </p>
                  </div>
                </div>
                <figcaption className="mt-4 flex gap-3 text-sm leading-6 text-ink/64">
                  <ImagePlus
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-cobalt"
                    size={18}
                  />
                  Use a direct, professional crop with natural light and no
                  stock portraits.
                </figcaption>
              </figure>

              <div>
                <div className="flex items-center gap-3 text-cobalt">
                  <UserRoundCheck aria-hidden="true" size={23} />
                  <p className="label-caps">Provider-led care</p>
                </div>
                <p className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
                  Patients should know who is responsible for the visit and the
                  care plan.
                </p>
                <p className="mt-5 max-w-xl leading-8 text-ink/70">
                  This section keeps the provider visible while the final
                  biography, training, and care philosophy are prepared for
                  launch.
                </p>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-paper py-24">
        <Container className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <p className="label-caps text-cobalt">Patient journey</p>
            <h2 className="mt-5 max-w-lg font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
              Book, prepare, consult, leave with a plan.
            </h2>
          </MotionReveal>

          <div className="grid gap-4">
            {patientJourney.slice(0, 4).map((step, index) => {
              const Icon = step.icon;
              return (
                <MotionReveal key={step.title}>
                  <article className="grid gap-5 rounded-[22px] border border-line bg-porcelain p-5 md:grid-cols-[120px_1fr] md:items-center">
                    <div className="flex items-center gap-4 text-cobalt">
                      <span className="font-display text-5xl font-medium">
                        {index + 1}
                      </span>
                      <Icon aria-hidden="true" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-medium text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-7 text-ink/70">
                        {step.description}
                      </p>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
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
