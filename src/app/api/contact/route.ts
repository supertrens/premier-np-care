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
  const text = [
    "Premier NP Care website inquiry",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${phone}`,
    "",
    payload.message,
  ].join("\n");

  await resend.emails.send({
    from,
    to,
    replyTo: payload.email,
    subject: `Premier NP Care inquiry from ${payload.name}`,
    text,
    html: `
      <h1>Premier NP Care website inquiry</h1>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(payload.message).replaceAll("\n", "<br />")}</p>
    `,
  });

  return Response.json({
    ok: true,
    message: "Thank you. Your message has been sent to the practice.",
  });
}
