"use client";

import { CheckCircle2, Send, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/button";

type Status =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const isSent = status.type === "success";

  useEffect(() => {
    if (!showSuccessOverlay) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowSuccessOverlay(false);
    }, 7000);

    return () => window.clearTimeout(timer);
  }, [showSuccessOverlay]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Please check the form and try again.");
      }

      setStatus({
        type: "success",
        message:
          data.message ||
          "Thank you. Your message has been sent to the practice.",
      });
      setShowSuccessOverlay(true);
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form className="grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <label className="font-semibold text-ink" htmlFor="name">
            Name
          </label>
          <input
            autoComplete="name"
            className="min-h-12 rounded-[12px] border border-line bg-porcelain px-4 py-3 text-base text-ink outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
            disabled={isSent}
            id="name"
            name="name"
            required
            type="text"
          />
        </div>
        <div className="grid gap-2">
          <label className="font-semibold text-ink" htmlFor="email">
            Email
          </label>
          <input
            autoComplete="email"
            className="min-h-12 rounded-[12px] border border-line bg-porcelain px-4 py-3 text-base text-ink outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
            disabled={isSent}
            id="email"
            name="email"
            required
            type="email"
          />
        </div>
        <div className="grid gap-2">
          <label className="font-semibold text-ink" htmlFor="phone">
            Phone
          </label>
          <input
            autoComplete="tel"
            className="min-h-12 rounded-[12px] border border-line bg-porcelain px-4 py-3 text-base text-ink outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
            disabled={isSent}
            id="phone"
            name="phone"
            type="tel"
          />
        </div>
        <div className="grid gap-2">
          <label className="font-semibold text-ink" htmlFor="message">
            Message
          </label>
          <textarea
            className="min-h-36 rounded-[12px] border border-line bg-porcelain px-4 py-3 text-base text-ink outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
            disabled={isSent}
            id="message"
            name="message"
            required
          />
        </div>
        <p className="rounded-[16px] border border-cyan/20 bg-mist px-4 py-3 text-sm leading-6 text-ink">
          For urgent symptoms, call 911 or use urgent care. For this form, a
          general note is best.
        </p>
        <Button disabled={isSubmitting || isSent} type="submit" variant="cobalt">
          {isSent ? (
            <CheckCircle2 aria-hidden="true" size={18} />
          ) : (
            <Send aria-hidden="true" size={18} />
          )}
          {isSubmitting ? "Sending..." : isSent ? "Message Sent" : "Send Message"}
        </Button>
        {status.type !== "idle" ? (
          <p
            className={
              status.type === "success"
                ? "rounded-[12px] bg-mist p-3 font-semibold text-ink"
                : "rounded-[12px] bg-warn/12 p-3 font-semibold text-ink"
            }
            role="status"
          >
            {status.message}
          </p>
        ) : null}
      </form>

      {showSuccessOverlay ? (
        <div
          aria-labelledby="contact-success-title"
          aria-modal="true"
          className="fixed inset-0 z-[100] grid place-items-center bg-deep-navy/84 px-5 py-8 backdrop-blur-sm"
          role="dialog"
        >
          <div className="relative w-full max-w-xl overflow-hidden rounded-[28px] border border-gold/55 bg-paper p-8 text-center shadow-[0_30px_100px_rgba(7,28,42,0.36)] md:p-10">
            <button
              aria-label="Close confirmation"
              autoFocus
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition hover:-translate-y-0.5 hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
              onClick={() => setShowSuccessOverlay(false)}
              type="button"
            >
              <X aria-hidden="true" size={19} />
            </button>
            <div
              aria-hidden="true"
              className="mx-auto grid size-20 place-items-center rounded-full border border-gold/60 bg-deep-navy text-paper shadow-[0_18px_50px_rgba(26,53,87,0.24)]"
            >
              <CheckCircle2 size={36} />
            </div>
            <p className="mt-6 label-caps text-cobalt">Premier NP Care</p>
            <h2
              className="mt-3 font-display text-4xl font-medium leading-tight text-ink md:text-5xl"
              id="contact-success-title"
            >
              Message sent.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-ink/72">
              Thank you. Your message was sent to the practice, and a
              confirmation email is on the way.
            </p>
            <div className="mx-auto mt-7 h-px w-24 bg-gold" />
            <p className="mx-auto mt-6 max-w-sm text-sm leading-6 text-ink/62">
              For urgent symptoms, call 911 or use urgent care.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
