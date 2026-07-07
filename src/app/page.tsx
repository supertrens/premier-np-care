import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardCheck,
  ShieldCheck,
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
                Nurse Practitioner-led telehealth
              </p>
            </HeroItem>
            <HeroItem>
              <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.04] text-ink sm:text-6xl md:text-7xl">
                Care you can understand, from a clinician{" "}
                <em className="font-normal italic text-cobalt">you know.</em>
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="mt-7 max-w-xl text-xl leading-8 text-ink/70 md:text-[1.3rem] md:leading-9">
                Book a visit, meet your provider, and know exactly what happens
                next. Calm, direct, and clearly explained.
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
            <HeroItem>
              <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-ink/10 pt-6 text-sm text-ink/56">
                <span>Provider-led visits</span>
                <span aria-hidden="true" className="text-ink/24">
                  ·
                </span>
                <span>Honest telehealth boundaries</span>
                <span aria-hidden="true" className="text-ink/24">
                  ·
                </span>
                <span>Records stay in the secure platform</span>
              </p>
            </HeroItem>
          </HeroEntrance>

          <HeroItem>
            <div className="group/portrait relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(7,28,42,0.16)] lg:ml-auto">
              <Image
                alt="Portrait of Virginie Chavannes, Nurse Practitioner."
                className="absolute inset-0 h-full w-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover/portrait:scale-[1.035]"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 92vw"
                src="/images/virginie-chavannes.jpg"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,42,0)_55%,rgba(7,28,42,0.55))]"
              />
              <Link
                className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 rounded-[20px] border border-white/25 bg-white/14 px-5 py-4 backdrop-blur-md transition-colors hover:bg-white/24"
                href="/about"
              >
                <div>
                  <p className="font-display text-2xl font-medium leading-tight text-paper">
                    Virginie Chavannes
                  </p>
                  <p className="mt-1 text-sm text-paper/80">
                    Nurse Practitioner · Telehealth visits
                  </p>
                </div>
                <ArrowRight
                  aria-hidden="true"
                  className="shrink-0 text-paper/80 transition-transform duration-300 group-hover/portrait:translate-x-1"
                  size={20}
                />
              </Link>
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
              Premier NP Care helps patients understand who they will see, what
              to expect, and how the visit can fit into everyday life.
            </p>
          </MotionReveal>

          <div className="border-y border-white/14">
            {practiceAtAGlance.map((item, index) => {
              return (
                <MotionReveal delay={index * 0.05} key={item.title}>
                  <article className="grid gap-4 border-b border-white/14 py-6 last:border-b-0 md:grid-cols-[84px_1fr]">
                    <span className="font-display text-3xl leading-none text-aqua/70">
                      0{index + 1}
                    </span>
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
              <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
                Common care needs, framed clearly.
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <div className="grid gap-5 border-y border-gold/35 py-6 md:grid-cols-[1fr_auto] md:items-center">
                <p className="max-w-2xl text-lg leading-8 text-ink/70">
                  Browse common starting points for care. Each service card
                  keeps the promise practical, warm, and easy to scan.
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
                    <div className="relative min-h-[250px] overflow-hidden bg-deep-navy p-6 md:min-h-full">
                      <Image
                        alt={service.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover"
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1024px) 36vw, (min-width: 768px) 38vw, 86vw"
                        src={service.image}
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,53,87,0.18),rgba(26,53,87,0.56)),linear-gradient(135deg,rgba(26,53,87,0.28),rgba(26,53,87,0.08)_46%,rgba(255,255,255,0.22))]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:34px_34px]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(0deg,rgba(26,53,87,0.64),transparent)]"
                      />
                      <div className="relative flex h-full min-h-[180px] flex-col justify-between">
                        <div className="flex items-center justify-between gap-4">
                          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/22 bg-paper/88 text-cobalt shadow-[0_16px_40px_rgba(7,28,42,0.18)] backdrop-blur">
                            <Icon aria-hidden="true" size={26} />
                          </span>
                          <span className="label-caps rounded-full border border-white/22 bg-paper/88 px-3 py-2 text-cobalt shadow-[0_16px_36px_rgba(7,28,42,0.16)] backdrop-blur">
                            {service.eyebrow}
                          </span>
                        </div>
                        <div className="mt-10">
                          <p className="label-caps text-paper/82">
                            Service area 0{index + 1}
                          </p>
                          <div className="mt-4 h-2 w-28 rounded-full bg-gold" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col p-7 md:p-8">
                      <h3 className="max-w-2xl font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                        {service.title}
                      </h3>
                      <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
                        {service.description}
                      </p>

                      <div className="mt-auto pt-8">
                        <div className="rounded-[18px] border border-line bg-porcelain p-4">
                          <div className="flex items-center gap-2 text-cobalt">
                            <ClipboardCheck aria-hidden="true" size={18} />
                            <p className="label-caps">Helpful for</p>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-ink/68">
                            {service.fit}
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
              <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
                Meet the provider behind the plan.
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <div className="grid gap-5 border-y border-gold/35 py-6 md:grid-cols-[1fr_auto] md:items-center">
                <p className="max-w-2xl text-lg leading-8 text-ink/70">
                  Premier NP Care makes the clinician relationship visible
                  before booking, so patients know who is listening, guiding,
                  and following through.
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
                <div className="relative min-h-[320px] overflow-hidden bg-deep-navy p-6">
                  <Image
                    alt="Portrait of Virginie Chavannes, Nurse Practitioner."
                    className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    src="/images/virginie-chavannes.jpg"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(7,28,42,0.78),rgba(7,28,42,0.18)_62%,transparent)]"
                  />
                  <div className="relative flex h-full min-h-[270px] flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="label-caps rounded-full border border-white/22 bg-paper/88 px-3 py-2 text-cobalt shadow-[0_16px_36px_rgba(7,28,42,0.16)] backdrop-blur">
                        Provider
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/18 bg-deep-navy text-paper shadow-[0_16px_36px_rgba(7,28,42,0.2)]">
                        <UserRoundCheck aria-hidden="true" size={22} />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-4xl font-medium leading-tight text-paper">
                        Virginie Chavannes
                      </h3>
                      <p className="mt-3 max-w-xs leading-7 text-paper/74">
                        Nurse Practitioner and founder of Premier NP Care.
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
                <p className="mt-5 max-w-2xl font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                  A direct care relationship that feels personal.
                </p>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
                  Patients should feel known from the first click: a named
                  clinician, a clear conversation, and next steps that make
                  sense.
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
                    title: "Guide the next step",
                    body: "If a local exam or additional care is helpful, patients hear that clearly and kindly.",
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
              <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
                A visit path patients can understand before they start.
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p className="max-w-2xl border-y border-gold/35 py-6 text-lg leading-8 text-ink/70">
                The public site explains the path, so booking feels simple and
                the visit feels familiar before it begins.
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
                        "Book from any page",
                        "Meet the named provider",
                        "Leave with next steps",
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
                    return (
                      <li
                        className="grid gap-5 p-6 md:grid-cols-[88px_1fr] md:items-start md:p-7"
                        key={step.title}
                      >
                        <span className="font-display text-4xl font-medium text-cobalt/40">
                          0{index + 1}
                        </span>
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

      <Section className="border-y border-gold/35 bg-porcelain py-16">
        <Container>
          <MotionReveal>
            <p className="label-caps text-warn">Care guidance</p>
            <div className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-8">
              {safetyBoundaries.map((item) => (
                <div
                  className="border-t border-ink/12 pt-5"
                  key={item.title}
                >
                  <h3 className="text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/62">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-porcelain py-32 md:py-40">
        <div className="ocean-field absolute inset-0 opacity-60" aria-hidden="true" />
        <Container className="relative flex flex-col items-center text-center">
          <MotionReveal>
            <p className="label-caps text-cobalt">Premier NP Care</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.06] text-ink md:text-6xl">
              Begin with a conversation,{" "}
              <em className="font-normal italic text-cobalt">
                not a waiting room.
              </em>
            </h2>
            <div className="mt-10 flex flex-col items-center gap-5">
              <ButtonLink href={bookingUrl} variant="cobalt">
                <CalendarCheck aria-hidden="true" size={20} />
                Book an Appointment
              </ButtonLink>
              <p className="text-sm text-ink/56">
                For urgent symptoms, use emergency services.
              </p>
            </div>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}
