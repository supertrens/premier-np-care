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
    <section className="border-b border-ink/10 bg-paper py-14 md:py-20">
      <Container className="grid gap-8 md:grid-cols-[1fr_0.44fr] md:items-end">
        <MotionReveal>
          <p className="label-caps mb-5 text-fern">{eyebrow}</p>
          <h1 className="max-w-4xl font-display text-[clamp(2.6rem,6vw,5rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
            {title}
          </h1>
          <div className="mt-6 max-w-2xl text-[1rem] leading-8 text-ink/60">
            {children}
          </div>
        </MotionReveal>
        {aside ? <MotionReveal delay={0.1}>{aside}</MotionReveal> : null}
      </Container>
    </section>
  );
}
