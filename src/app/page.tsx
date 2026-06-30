import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import {
  HeroEntrance,
  HeroItem,
  MotionReveal,
} from "@/components/motion-reveal";
import { ProviderHeadshotSlot } from "@/components/provider-headshot-slot";
import { Section } from "@/components/section";
import { bookingUrl } from "@/lib/config";
import {
  patientJourney,
  practiceAtAGlance,
  practiceFacts,
  safetyBoundaries,
  services,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Nurse Practitioner-Led Medical Practice",
  description:
    "Premier NP Care is a Nurse Practitioner-led medical practice offering clear, telehealth-affiliated care.",
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
        <div className="practice-rule absolute inset-0 opacity-45" aria-hidden="true" />
        <Container className="relative grid min-h-[680px] gap-10 py-14 md:min-h-[720px] md:py-20 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <HeroEntrance className="max-w-4xl">
            <HeroItem>
              <p className="label-caps text-fern">
                Nurse Practitioner-led medical practice
              </p>
            </HeroItem>
            <HeroItem>
              <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] text-ink md:text-7xl lg:text-8xl">
                Premier NP Care
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="mt-7 max-w-3xl font-display text-4xl font-medium leading-[1.08] text-ink md:text-6xl">
                Personal access to care, with clinical boundaries clearly
                stated.
              </p>
            </HeroItem>
            <HeroItem>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/72">
                [PLACEHOLDER: NP Name, Credentials] provides focused,
                telehealth-affiliated medical care through the practice
                platform. This site explains the practice, the provider, and
                how to start.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={bookingUrl} variant="fern">
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
            <aside className="border-y border-ink/12 bg-paper/90 py-6">
              <div className="flex items-center gap-3 px-1 text-clay">
                <ClipboardCheck aria-hidden="true" size={23} />
                <p className="label-caps">Practice brief</p>
              </div>
              <div className="mt-6 border-y border-ink/12">
                {practiceFacts.map((fact) => (
                  <div
                    className="grid gap-2 border-b border-ink/12 py-5 last:border-b-0 md:grid-cols-[155px_1fr]"
                    key={fact.label}
                  >
                    <p className="label-caps text-ink/54">{fact.label}</p>
                    <p className="leading-7 text-ink/76">{fact.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-l-2 border-clay pl-4 text-sm leading-6 text-ink/66">
                This website is public and informational. Scheduling, visits,
                and records stay inside the practice system.
              </p>
            </aside>
          </HeroItem>
        </Container>
      </section>

      <Section className="bg-ink py-0 text-paper">
        <Container className="grid divide-y divide-paper/12 md:grid-cols-4 md:divide-x md:divide-y-0">
          {practiceAtAGlance.map((item) => {
            const Icon = item.icon;
            return (
              <MotionReveal key={item.title}>
                <div className="py-9 md:px-6">
                  <div className="flex items-center gap-3 text-marigold">
                    <Icon aria-hidden="true" size={21} />
                    <p className="label-caps">{item.title}</p>
                  </div>
                  <p className="mt-4 leading-7 text-paper/74">{item.body}</p>
                </div>
              </MotionReveal>
            );
          })}
        </Container>
      </Section>

      <Section className="py-24">
        <Container className="grid gap-14 lg:grid-cols-[0.74fr_1.26fr]">
          <MotionReveal>
            <p className="label-caps text-fern">Clinical scope</p>
            <h2 className="mt-5 max-w-lg font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
              Care that explains what fits and what does not.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/70">
              A credible practice website should help patients understand the
              visit before they book: the care areas, the limits of telehealth,
              and the right next step.
            </p>
            <ButtonLink className="mt-9" href="/services" variant="secondary">
              View Services
              <ArrowRight aria-hidden="true" size={19} />
            </ButtonLink>
          </MotionReveal>

          <div className="border-y border-ink/12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <MotionReveal key={service.title}>
                  <div className="grid gap-5 border-b border-ink/12 py-8 last:border-b-0 md:grid-cols-[190px_1fr]">
                    <div className="flex items-center gap-3 text-fern">
                      <Icon aria-hidden="true" size={21} />
                      <p className="label-caps">{service.eyebrow}</p>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-lg leading-8 text-ink/70">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-mist py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <p className="label-caps text-fern">Provider accountability</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
              Patients should know the clinician behind the visit.
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-ink/70">
              The real provider photo is intentionally not faked here. This
              slot becomes the first credibility asset once the practice has the
              final headshot.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <ProviderHeadshotSlot />
          </MotionReveal>
        </Container>
      </Section>

      <Section className="py-24">
        <Container className="grid gap-14 lg:grid-cols-[0.74fr_1.26fr]">
          <MotionReveal>
            <p className="label-caps text-fern">Patient journey</p>
            <h2 className="mt-5 max-w-lg font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
              Book, prepare, consult, receive a plan.
            </h2>
          </MotionReveal>

          <div className="border-y border-ink/12">
            {patientJourney.slice(0, 4).map((step, index) => {
              const Icon = step.icon;
              return (
                <MotionReveal key={step.title}>
                  <div className="grid gap-5 border-b border-ink/12 py-7 last:border-b-0 md:grid-cols-[120px_1fr]">
                    <div className="flex items-center gap-4 text-fern">
                      <span className="font-display text-4xl font-medium">
                        {index + 1}
                      </span>
                      <Icon aria-hidden="true" size={23} />
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-medium text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-7 text-ink/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-linen py-20">
        <Container className="grid gap-8 lg:grid-cols-3">
          {safetyBoundaries.map((item) => {
            const Icon = item.icon;
            return (
              <MotionReveal key={item.title}>
                <div className="border-y border-ink/12 py-6">
                  <Icon aria-hidden="true" className="text-clay" size={25} />
                  <h3 className="mt-5 font-display text-3xl font-medium leading-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-ink/70">{item.body}</p>
                </div>
              </MotionReveal>
            );
          })}
        </Container>
      </Section>

      <Section className="bg-ink text-paper">
        <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3 text-marigold">
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
          <ButtonLink href={bookingUrl}>
            <CalendarCheck aria-hidden="true" size={20} />
            Book an Appointment
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
