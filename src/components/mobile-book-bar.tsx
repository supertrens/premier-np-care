import { CalendarCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { bookingUrl } from "@/lib/config";

export function MobileBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/92 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur-xl md:hidden">
      <ButtonLink className="w-full" href={bookingUrl} variant="cobalt">
        <CalendarCheck aria-hidden="true" size={20} />
        Book an Appointment
      </ButtonLink>
    </div>
  );
}
