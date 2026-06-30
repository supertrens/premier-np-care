"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/button";

type Status =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <label className="font-semibold text-ink" htmlFor="name">
          Name
        </label>
        <input
          autoComplete="name"
          className="min-h-12 rounded-[12px] border border-line bg-porcelain px-4 py-3 text-base text-ink outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
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
          id="message"
          name="message"
          required
        />
      </div>
      <p className="rounded-[16px] border border-cyan/20 bg-mist px-4 py-3 text-sm leading-6 text-ink">
        Please do not include urgent concerns, medical emergencies, or sensitive
        health details in this form.
      </p>
      <Button disabled={isSubmitting} type="submit" variant="cobalt">
        <Send aria-hidden="true" size={18} />
        {isSubmitting ? "Sending..." : "Send Message"}
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
  );
}
