import { CalendarDays } from "lucide-react";
import { ButtonLink } from "@/components/button";

export function BookingEmbedSlot() {
  return (
    <section
      className="rounded-[12px] border border-deep-navy bg-white px-6 py-12 text-center shadow-[0_24px_70px_rgba(26,53,87,0.08)] md:px-10"
      id="booking-placeholder"
    >
      {/*
        // BOOKING_EMBED_SLOT: replace this card with the EHR
        // scheduling widget embed code when ready
      */}
      <CalendarDays
        aria-hidden="true"
        className="mx-auto text-deep-navy"
        size={38}
        strokeWidth={1.8}
      />
      <h2 className="mt-5 font-display text-[28px] font-semibold leading-tight text-deep-navy">
        Online Scheduling Coming Soon
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#555555]">
        We are setting up our online booking system. In the meantime, reach out
        directly and we will get you scheduled within 24 hours.
      </p>
      <ButtonLink className="mt-8" href="#contact-form" variant="cobalt">
        Send Us a Message
      </ButtonLink>
    </section>
  );
}
