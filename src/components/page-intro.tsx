import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";

interface PageIntroProps {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  aside?: ReactNode;
}

export function PageIntro({ eyebrow, title, children, aside }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-porcelain py-14 md:py-20">
      <div className="ocean-field absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="hero-glow hero-glow-a pointer-events-none absolute -left-24 top-0 h-[340px] w-[340px] rounded-full bg-cyan/16 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hero-glow hero-glow-c pointer-events-none absolute right-1/4 bottom-0 h-36 w-36 rounded-full bg-gold/12 blur-2xl"
      />
      <Container className="relative grid gap-8 md:grid-cols-[1fr_0.48fr] md:items-end">
        <MotionReveal>
          <p className="label-caps mb-5 text-cobalt">{eyebrow}</p>
          <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.03] text-ink md:text-6xl">
            {title}
          </h1>
          <div className="mt-6 max-w-2xl text-xl leading-8 text-ink/72">
            {children}
          </div>
        </MotionReveal>
        {aside ? <MotionReveal delay={0.1}>{aside}</MotionReveal> : null}
      </Container>
    </section>
  );
}
