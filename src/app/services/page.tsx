import type { Metadata } from "next";
import { ArrowRight, ShieldCheck, TriangleAlert } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { ClinicalScopePanel } from "@/components/clinical-scope-panel";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { clinicalScopeMatrix, safetyBoundaries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore placeholder service areas, clinical scope, telehealth boundaries, and next steps for Premier NP Care.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        aside={
          <div className="rounded-[22px] border border-line bg-paper/78 p-5 shadow-[0_16px_50px_rgba(7,28,42,0.06)]">
            <div className="flex items-center gap-3 text-cobalt">
              <ShieldCheck aria-hidden="true" size={22} />
              <p className="label-caps">Scope note</p>
            </div>
            <p className="mt-3 leading-7 text-ink/74">
              [PLACEHOLDER] Final clinical scope, exclusions, eligibility, and
              service-area language should be confirmed before launch.
            </p>
          </div>
        }
        eyebrow="Services"
        title="Clinical scope patients can understand before booking."
      >
        <p>
          Premier NP Care should make it easy to understand what may be handled
          through telehealth, what may need in-person care, and what next step
          is safest.
        </p>
      </PageIntro>

      <Section className="bg-paper py-24">
        <Container className="grid gap-6">
          {clinicalScopeMatrix.map((service) => (
            <MotionReveal key={service.area}>
              <ClinicalScopePanel
                appropriate={service.appropriate}
                area={service.area}
                icon={service.icon}
                mayRequire={service.mayRequire}
                nextStep={service.nextStep}
              />
            </MotionReveal>
          ))}
        </Container>
      </Section>

      <Section className="bg-mist py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <div className="flex items-center gap-3 text-warn">
              <TriangleAlert aria-hidden="true" size={24} />
              <p className="label-caps">Safety boundaries</p>
            </div>
            <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[1.04] text-ink md:text-6xl">
              Telehealth is useful, but it is not every kind of care.
            </h2>
          </MotionReveal>

          <div className="grid gap-4">
            {safetyBoundaries.map((item) => {
              const Icon = item.icon;
              return (
                <MotionReveal key={item.title}>
                  <article className="grid gap-4 rounded-[22px] border border-line bg-paper p-6 shadow-[0_16px_50px_rgba(7,28,42,0.05)] md:grid-cols-[230px_1fr]">
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
              Send a general question or book a visit through the scheduling
              link. Emergencies should always use emergency services.
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
