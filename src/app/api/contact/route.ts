import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required.").max(120),
  email: z.string().trim().email("A valid email is required.").max(180),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(10, "Message is required.").max(4000),
});

let resendClient: Resend | null = null;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatMessageHtml(message: string) {
  return escapeHtml(message).replaceAll("\n", "<br />");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "Please submit the contact form again." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      {
        ok: false,
        message: "Please check the form fields and try again.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const resend = getResend();
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!resend || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "Contact form submitted, but Resend env vars are not configured.",
      );
      return Response.json(
        {
          ok: true,
          message: "Thanks — your message was received in this preview.",
        },
        { status: 202 },
      );
    }

    return Response.json(
      { ok: false, message: "Contact form is not configured yet." },
      { status: 500 },
    );
  }

  const payload = parsed.data;
  const phone = payload.phone || "Not provided";
  const practiceEmailText = [
    "Premier NP Care website inquiry",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${phone}`,
    "",
    payload.message,
  ].join("\n");

  const confirmationText = [
    `Hi ${payload.name},`,
    "",
    "Thank you for contacting Premier NP Care. We received your message and will review it as soon as possible.",
    "",
    "For urgent symptoms or emergencies, please call 911 or use urgent care. Please do not send sensitive medical information through this general contact form.",
    "",
    "Message received:",
    payload.message,
    "",
    "Premier NP Care",
  ].join("\n");

  try {
    await Promise.all([
      resend.emails.send({
        from,
        to,
        replyTo: payload.email,
        subject: `Premier NP Care inquiry from ${payload.name}`,
        text: practiceEmailText,
        html: `
          <h1>Premier NP Care website inquiry</h1>
          <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Message:</strong></p>
          <p>${formatMessageHtml(payload.message)}</p>
        `,
      }),
      resend.emails.send({
        from,
        to: payload.email,
        replyTo: to,
        subject: "We received your message | Premier NP Care",
        text: confirmationText,
        html: `
          <h1>We received your message</h1>
          <p>Hi ${escapeHtml(payload.name)},</p>
          <p>Thank you for contacting Premier NP Care. We received your message and will review it as soon as possible.</p>
          <p>For urgent symptoms or emergencies, please call 911 or use urgent care. Please do not send sensitive medical information through this general contact form.</p>
          <hr />
          <p><strong>Message received:</strong></p>
          <p>${formatMessageHtml(payload.message)}</p>
          <p>Premier NP Care</p>
        `,
      }),
    ]);
  } catch (error) {
    console.error("Failed to send Premier NP Care contact emails", error);
    return Response.json(
      {
        ok: false,
        message:
          "We could not send your message right now. Please try again shortly.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    message:
      "Thank you. Your message has been sent, and a confirmation email is on the way.",
  });
}
