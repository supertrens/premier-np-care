"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CalendarCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { cn } from "@/components/utils";
import { bookingUrl } from "@/lib/config";

export function MobileBookBar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const target = document.getElementById("hero-book");

    if (!target) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-68px 0px 0px 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/92 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur-xl transition-transform duration-300 ease-out md:hidden",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      <ButtonLink
        className="w-full"
        href={bookingUrl}
        tabIndex={visible ? undefined : -1}
        variant="cobalt"
      >
        <CalendarCheck aria-hidden="true" size={20} />
        Book an Appointment
      </ButtonLink>
    </div>
  );
}
