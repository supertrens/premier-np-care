import { CalendarCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { bookingUrl, isBookingPlaceholder } from "@/lib/config";

export function BookingEmbedSlot() {
  return (
    <section className="border-y border-ink/12 py-7" id="booking-placeholder">
      <p className="label-caps text-fern">[PLACEHOLDER] Booking embed slot</p>
      <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink">
        Book an appointment
      </h2>
      <p className="mt-4 leading-7 text-ink/74">
        A scheduling widget, iframe, or embed script can replace this block
        later. For now, the button uses{" "}
        <code className="rounded-[6px] bg-mist px-1.5 py-1 text-sm">
          NEXT_PUBLIC_BOOKING_URL
        </code>
        .
      </p>
      {isBookingPlaceholder ? (
        <p className="mt-4 border-l-2 border-clay bg-linen px-4 py-3 text-sm font-semibold leading-6 text-ink">
          [PLACEHOLDER] Set a real tidycall or scheduling URL before launch.
        </p>
      ) : null}
      <ButtonLink className="mt-6" href={bookingUrl}>
        <CalendarCheck aria-hidden="true" size={19} />
        Book an Appointment
      </ButtonLink>
    </section>
  );
}
