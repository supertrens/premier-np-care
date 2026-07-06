import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ClipboardCheck,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { ClinicalScopePanel } from "@/components/clinical-scope-panel";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import {
  clinicalScopeMatrix,
  safetyBoundaries,
  services,
} from "@/lib/content";

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
              <p className="label-caps">Scope first</p>
            </div>
            <p className="mt-3 leading-7 text-ink/74">
              Service information is designed to help patients understand what
              may fit telehealth and when a different setting may be safer.
            </p>
          </div>
        }
        eyebrow="Services"
        title="Care options, with the boundaries named up front."
      >
        <p>
          Premier NP Care keeps the service menu practical. Patients can scan
          common starting points, understand likely fit, and move into booking
          with clearer expectations.
        </p>
      </PageIntro>

      <Section className="bg-paper py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <MotionReveal>
              <p className="label-caps text-cobalt">Common starting points</p>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
                A clearer service preview for the first visit decision.
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p className="max-w-2xl border-y border-line py-6 text-lg leading-8 text-ink/70">
                These categories are written for patient understanding, not as
                a promise that every concern can be handled virtually.
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
                      <div className="mt-6 grid gap-4 border-t border-line pt-5">
                        <div>
                          <div className="flex items-center gap-2 text-cobalt">
                            <ClipboardCheck aria-hidden="true" size={18} />
                            <p className="label-caps">May fit telehealth</p>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-ink/66">
                            {service.fit}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-warn">
                            <TriangleAlert aria-hidden="true" size={18} />
                            <p className="label-caps">Consider another setting</p>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-ink/66">
                            {service.boundary}
                          </p>
                        </div>
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
            <p className="label-caps text-cobalt">Clinical matrix</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              The practical difference between fit, limits, and next steps.
            </h2>
          </MotionReveal>

          <div className="grid gap-6">
            {clinicalScopeMatrix.map((service, index) => (
              <MotionReveal delay={index * 0.04} key={service.area}>
                <ClinicalScopePanel
                  appropriate={service.appropriate}
                  area={service.area}
                  icon={service.icon}
                  mayRequire={service.mayRequire}
                  nextStep={service.nextStep}
                />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <div className="flex items-center gap-3 text-warn">
              <TriangleAlert aria-hidden="true" size={24} />
              <p className="label-caps">Safety boundaries</p>
            </div>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              Telehealth is useful, but it is not every kind of care.
            </h2>
          </MotionReveal>

          <div className="grid gap-4">
            {safetyBoundaries.map((item, index) => {
              const Icon = item.icon;
              return (
                <MotionReveal delay={index * 0.04} key={item.title}>
                  <article className="grid gap-4 border-t border-line py-6 md:grid-cols-[240px_1fr]">
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
              Book a visit or send a general question. Emergencies should
              always use emergency services.
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
