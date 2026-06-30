import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarCheck,
  ImagePlus,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { CareCurrentVisual } from "@/components/care-current-visual";
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
        <Container className="relative grid min-h-[690px] gap-12 py-14 md:py-20 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <HeroEntrance className="max-w-4xl">
            <HeroItem>
              <p className="label-caps text-cobalt">
                Nurse Practitioner-led medical practice
              </p>
            </HeroItem>
            <HeroItem>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.04] text-ink sm:text-5xl md:text-7xl lg:text-8xl">
                Premier NP Care
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="mt-7 max-w-3xl text-xl font-semibold leading-8 text-cobalt sm:text-2xl sm:leading-9 md:text-4xl md:leading-tight">
                Calm, direct access to a provider who explains the care path
                before patients book.
              </p>
            </HeroItem>
            <HeroItem>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/72">
                [PLACEHOLDER: NP Name, Credentials] provides focused,
                telehealth-affiliated medical care through the practice
                platform. This public site makes the provider, scope, booking
                path, and safety boundaries easy to understand.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={bookingUrl} variant="cobalt">
                  <CalendarCheck aria-hidden="true" size={20} />
                  Book an Appointment
                </ButtonLink>
                <ButtonLink href="/how-it-works" variant="secondary">
                  See How It Works
                  <ArrowRight aria-hidden="true" size={19} />
                </ButtonLink>
              </div>
            </HeroItem>
          </HeroEntrance>

          <HeroItem>
            <div className="mx-auto w-full max-w-[560px] lg:ml-auto">
              <CareCurrentVisual />
            </div>
          </HeroItem>
        </Container>
      </section>

      <Section className="bg-deep-navy py-0 text-paper">
        <Container className="grid divide-y divide-white/12 md:grid-cols-4 md:divide-x md:divide-y-0">
          {practiceAtAGlance.map((item) => {
            const Icon = item.icon;
            return (
              <MotionReveal key={item.title}>
                <div className="py-9 md:px-6">
                  <div className="flex items-center gap-3 text-aqua">
                    <Icon aria-hidden="true" size={21} />
                    <p className="label-caps">{item.title}</p>
                  </div>
                  <p className="mt-4 leading-7 text-paper/72">{item.body}</p>
                </div>
              </MotionReveal>
            );
          })}
        </Container>
      </Section>

      <Section className="bg-paper py-24">
        <Container className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
          <MotionReveal>
            <p className="label-caps text-cobalt">Clinical scope</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
              Care areas presented with boundaries, not vague promises.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/70">
              The services preview should help patients quickly understand what
              the practice may handle virtually and when another care setting is
              safer.
            </p>
            <ButtonLink className="mt-9" href="/services" variant="secondary">
              View Services
              <ArrowRight aria-hidden="true" size={19} />
            </ButtonLink>
          </MotionReveal>

          <div className="divide-y divide-line border-y border-line">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <MotionReveal key={service.title}>
                  <article className="grid gap-5 py-7 md:grid-cols-[190px_1fr]">
                    <div className="flex items-center gap-3 text-cobalt">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist">
                        <Icon aria-hidden="true" size={21} />
                      </span>
                      <p className="label-caps text-harbor">
                        {service.eyebrow}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-2xl leading-7 text-ink/70">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
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
                      [PLACEHOLDER] Replace with the real provider photo before
                      launch.
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
                  [PLACEHOLDER] Add the provider story, training, and care
                  philosophy here once final copy is approved.
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
