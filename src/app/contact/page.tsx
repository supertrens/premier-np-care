import type { Metadata } from "next";
import { CalendarCheck, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { BookingEmbedSlot } from "@/components/booking-embed-slot";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book an appointment with Premier NP Care or send a general, non-urgent question to the practice.",
};

const contactRows = [
  {
    label: "Phone",
    value: "(555) 123-4567",
    icon: Phone,
  },
  {
    label: "Email",
    value: "Use the general inquiry form below.",
    icon: Mail,
  },
  {
    label: "Service area",
    value:
      "Telehealth availability depends on licensure and patient location at the time of care.",
    icon: MapPin,
  },
];

const safetyNotes = [
  "For urgent symptoms, call 911 or use urgent care.",
  "Use the form for general questions and booking help.",
  "Visit instructions are shared after your appointment is scheduled.",
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        aside={
          <div className="rounded-[22px] border border-line bg-paper/82 p-5 shadow-[0_16px_50px_rgba(7,28,42,0.06)]">
            <div className="flex items-center gap-3 text-cobalt">
              <Phone aria-hidden="true" size={22} />
              <p className="label-caps">Prefer to call?</p>
            </div>
            <p className="mt-3 leading-7 text-ink/76">
              Online scheduling is coming soon. For now, call or send a message
              and the practice will help you find the right appointment path.
            </p>
          </div>
        }
        eyebrow="Contact"
        title="Book care or send a general question."
      >
        <p>
          Start with the booking card or send a message below. The goal is to
          make the next step feel simple.
        </p>
      </PageIntro>

      <Section className="bg-paper py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <MotionReveal>
            <div>
              <div className="flex items-center gap-3 text-cobalt">
                <CalendarCheck aria-hidden="true" size={24} />
                <p className="label-caps">Booking first</p>
              </div>
              <h2 className="mt-5 max-w-lg font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
                The easiest way to begin is right here.
              </h2>
              <p className="mt-5 max-w-lg leading-8 text-ink/70">
                Online scheduling is almost ready. Until then, the practice can
                help you book by phone or message.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <BookingEmbedSlot />
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-mist py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <MotionReveal>
            <div>
              <p className="label-caps text-cobalt">General inquiries</p>
              <h2 className="mt-5 max-w-lg font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
                A simple form for questions and booking help.
              </h2>
              <p className="mt-5 max-w-lg leading-8 text-ink/70">
                Send a quick note and the practice can help with the next step.
                Keep the message general; detailed health conversations belong
                in the visit.
              </p>
              <div className="mt-8 grid gap-3 border-y border-line py-5">
                {safetyNotes.map((note) => (
                  <div className="flex items-start gap-3" key={note}>
                    <ShieldCheck
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-cobalt"
                      size={18}
                    />
                    <p className="text-sm leading-6 text-ink/68">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div
              className="rounded-[28px] border border-line bg-paper p-6 shadow-[0_22px_70px_rgba(26,53,87,0.08)]"
              id="contact-form"
            >
              <ContactForm />
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section className="bg-paper py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionReveal>
            <p className="label-caps text-cobalt">Practice info</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.06] text-ink md:text-5xl">
              A few ways to reach the practice.
            </h2>
          </MotionReveal>

          <div className="grid gap-4">
            {contactRows.map((row, index) => {
              const Icon = row.icon;
              return (
                <MotionReveal delay={index * 0.04} key={row.label}>
                  <article className="grid gap-4 border-t border-line py-6 md:grid-cols-[220px_1fr]">
                    <div className="flex items-center gap-3 text-cobalt">
                      <Icon aria-hidden="true" size={21} />
                      <p className="label-caps">{row.label}</p>
                    </div>
                    <p className="text-lg leading-8 text-ink/76">
                      {row.value}
                    </p>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
