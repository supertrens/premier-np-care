import { CalendarCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Card } from "@/components/card";
import { bookingUrl, isBookingPlaceholder } from "@/lib/config";

export function BookingEmbedSlot() {
  return (
    <Card className="bg-mist/70">
      <div id="booking-placeholder">
        <p className="text-sm font-bold uppercase text-clay">
          [PLACEHOLDER] Booking Embed Slot
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
          Book an appointment
        </h2>
        <p className="mt-4 leading-7 text-ink/76">
          A scheduling widget, iframe, or embed script can replace this block
          later. For now, the button uses{" "}
          <code className="rounded-[6px] bg-paper px-1.5 py-1 text-sm">
            NEXT_PUBLIC_BOOKING_URL
          </code>
          .
        </p>
        {isBookingPlaceholder ? (
          <p className="mt-4 rounded-[8px] border border-clay/35 bg-paper p-3 text-sm font-semibold text-ink">
            [PLACEHOLDER] Set a real tidycall or scheduling URL before launch.
          </p>
        ) : null}
        <ButtonLink className="mt-6" href={bookingUrl}>
          <CalendarCheck aria-hidden="true" size={19} />
          Book an Appointment
        </ButtonLink>
      </div>
    </Card>
  );
}

