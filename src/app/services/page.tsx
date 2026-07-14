import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { safetyBoundaries, serviceHighlights, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore service areas, clinical scope, telehealth boundaries, and next steps for Premier NP Care.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        aside={
          <div className="rounded-[22px] border border-line bg-paper/82 p-5 shadow-[0_16px_50px_rgba(7,28,42,0.06)]">
            <div className="flex items-center gap-3 text-cobalt">
              <ShieldCheck aria-hidden="true" size={22} />
              <p className="label-caps">Patients 14 and up</p>
            </div>
            <p className="mt-3 leading-7 text-ink/74">
              Premier NP Care provides prevention, sick visits, screenings,
              chronic disease support, and lifestyle counseling.
            </p>
          </div>
        }
        eyebrow="Services"
        title="Care options that feel simple to understand."
      >
        <p>
          Premier NP Care provides patient-centered primary and preventive care
          for everyday health needs, common illnesses, and ongoing conditions.
        </p>
      </PageIntro>

      <Section className="bg-mist py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
          <MotionReveal>
            <p className="label-caps text-cobalt">Services provided</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              A practical menu for prevention, common concerns, and ongoing
              care.
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="grid gap-3 rounded-[28px] border border-line bg-paper p-6 shadow-[0_22px_70px_rgba(26,53,87,0.07)] sm:grid-cols-2">
              {serviceHighlights.map((item) => (
                <div className="flex gap-3" key={item}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-cobalt"
                    size={18}
                  />
                  <p className="leading-7 text-ink/74">{item}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-paper py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <MotionReveal>
              <p className="label-caps text-cobalt">Common starting points</p>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
                Common reasons patients start with Premier NP Care.
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p className="max-w-2xl border-y border-gold/35 py-6 text-lg leading-8 text-ink/70">
                These categories are written for people, not paperwork: clear
                enough to scan, warm enough to feel approachable.
              </p>
            </MotionReveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionReveal delay={index * 0.05} key={service.title}>
                  <article className="grid h-full overflow-hidden rounded-[28px] border border-line bg-porcelain shadow-[0_22px_70px_rgba(7,28,42,0.07)]">
                    <div className="relative min-h-[220px] overflow-hidden bg-deep-navy">
                      <Image
                        alt={service.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover"
                        fill
                        sizes="(min-width: 768px) 46vw, 92vw"
                        src={service.image}
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,42,0.1),rgba(7,28,42,0.62))]"
                      />
                      <div className="relative flex h-full min-h-[220px] flex-col justify-between p-6">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/22 bg-paper/90 text-cobalt backdrop-blur">
                          <Icon aria-hidden="true" size={23} />
                        </span>
                        <p className="label-caps text-paper/78">
                          {service.eyebrow}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-3xl font-medium leading-tight text-ink">
                        {service.title}
                      </h3>
                      <p className="mt-4 leading-7 text-ink/70">
                        {service.description}
                      </p>
                      <div className="mt-6 rounded-[18px] border border-line bg-paper p-4">
                        <div className="flex items-center gap-2 text-cobalt">
                          <ClipboardCheck aria-hidden="true" size={18} />
                          <p className="label-caps">Helpful for</p>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-ink/66">
                          {service.fit}
                        </p>
                      </div>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-mist py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <div className="flex items-center gap-3 text-warn">
              <TriangleAlert aria-hidden="true" size={24} />
              <p className="label-caps">When another setting is best</p>
            </div>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              Clear guidance is part of feeling cared for.
            </h2>
          </MotionReveal>

          <div className="grid gap-4 rounded-[28px] border border-line bg-paper p-6 shadow-[0_22px_70px_rgba(7,28,42,0.06)]">
            {safetyBoundaries.slice(0, 1).map((item) => {
              const Icon = item.icon;
              return (
                <MotionReveal key={item.title}>
                  <article className="grid gap-4 md:grid-cols-[240px_1fr]">
                    <div className="flex items-center gap-3 text-warn">
                      <Icon aria-hidden="true" size={21} />
                      <p className="label-caps">{item.title}</p>
                    </div>
                    <p className="leading-7 text-ink/72">{item.body}</p>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-deep-navy text-paper">
        <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-4xl font-medium">
              Not sure where your concern fits?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-paper/76">
              Book a visit or send a general question. If symptoms feel urgent,
              choose urgent or emergency care right away.
            </p>
          </div>
          <ButtonLink href="/contact" variant="mist">
            Contact the Practice
            <ArrowRight aria-hidden="true" size={19} />
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
