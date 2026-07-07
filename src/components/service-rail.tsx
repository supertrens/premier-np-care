"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Children,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/components/utils";

interface ServiceRailProps {
  children: ReactNode;
  itemCount: number;
}

export function ServiceRail({ children, itemCount }: ServiceRailProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const initialIndex = itemCount > 2 ? 1 : 0;
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const shouldReduceMotion = useReducedMotion();
  const childrenArray = useMemo(() => Children.toArray(children), [children]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const boundedIndex = (index + itemCount) % itemCount;
      const target = trackRef.current?.children[boundedIndex] as
        | HTMLElement
        | undefined;

      target?.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveIndex(boundedIndex);
    },
    [itemCount, shouldReduceMotion],
  );

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const trackEl = trackRef.current;

    if (!scrollEl || !trackEl) {
      return;
    }

    const updateActiveIndex = () => {
      const childrenArray = Array.from(trackEl.children) as HTMLElement[];
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;
      const scrollCenter = scrollEl.getBoundingClientRect().left + scrollEl.clientWidth / 2;

      childrenArray.forEach((child, index) => {
        const childRect = child.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2;
        const distance = Math.abs(childCenter - scrollCenter);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex(nearestIndex);
    };

    updateActiveIndex();
    scrollEl.addEventListener("scroll", updateActiveIndex, { passive: true });

    return () => scrollEl.removeEventListener("scroll", updateActiveIndex);
  }, [initialIndex]);

  useEffect(() => {
    const target = trackRef.current?.children[initialIndex] as
      | HTMLElement
      | undefined;

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "auto",
      block: "nearest",
      inline: "center",
    });
  }, [initialIndex]);

  return (
    <div className="mt-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div
          aria-label={`Service ${activeIndex + 1} of ${itemCount}`}
          className="flex gap-1.5"
          role="status"
        >
            {Array.from({ length: itemCount }).map((_, index) => (
              <span
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "w-8 bg-cobalt"
                    : "w-2 bg-cyan/30",
                )}
                key={index}
              />
            ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Previous service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-[0_12px_30px_rgba(26,53,87,0.07)] transition-colors hover:border-gold hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => {
              scrollToIndex(activeIndex - 1);
            }}
            type="button"
          >
            <ArrowLeft aria-hidden="true" size={19} />
          </button>
          <button
            aria-label="Next service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-deep-navy text-paper shadow-[0_12px_30px_rgba(26,53,87,0.16)] transition-colors hover:border-gold hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => {
              scrollToIndex(activeIndex + 1);
            }}
            type="button"
          >
            <ArrowRight aria-hidden="true" size={19} />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-paper to-transparent md:w-16"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-paper to-transparent md:w-16"
        />

        <div
          className="overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [scroll-padding-inline:calc((100%_-_min(86vw,760px))_/_2)] md:[scroll-padding-inline:calc((100%_-_min(74vw,900px))_/_2)] [&::-webkit-scrollbar]:hidden"
          ref={scrollRef}
        >
          <div
            className="flex snap-x snap-mandatory gap-5 px-[max(1.25rem,calc((100%_-_min(86vw,760px))_/_2))] md:px-[max(2rem,calc((100%_-_min(74vw,900px))_/_2))]"
            ref={trackRef}
          >
            {childrenArray}
          </div>
        </div>
      </div>
    </div>
  );
}
