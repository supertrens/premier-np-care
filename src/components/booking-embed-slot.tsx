import { CalendarCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { bookingUrl, isBookingPlaceholder } from "@/lib/config";

export function BookingEmbedSlot() {
  return (
    <section
      className="rounded-[24px] border border-line bg-paper p-6 shadow-[0_22px_70px_rgba(7,28,42,0.08)]"
      id="booking-placeholder"
    >
      <p className="label-caps text-cobalt">Booking</p>
      <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink">
        Book an appointment
      </h2>
      <p className="mt-4 leading-7 text-ink/74">
        Appointments are scheduled through the practice&apos;s secure
        platform. Choose a time that works, and visit instructions follow from
        there.
      </p>
      {isBookingPlaceholder ? (
        <p className="mt-4 rounded-[16px] border border-cyan/20 bg-mist px-4 py-3 text-sm font-semibold leading-6 text-ink">
          Online scheduling opens soon — contact the practice with the form
          below in the meantime.
        </p>
      ) : null}
      <ButtonLink className="mt-6" href={bookingUrl} variant="cobalt">
        <CalendarCheck aria-hidden="true" size={19} />
        Book an Appointment
      </ButtonLink>
    </section>
  );
}
