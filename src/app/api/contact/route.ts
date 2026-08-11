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

function emailShell(content: string) {
  return `
    <div style="margin:0;background:#f7fcfd;padding:32px 16px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#1A3557;">
      <div style="margin:0 auto;max-width:640px;overflow:hidden;border:1px solid #cfeaf0;border-radius:24px;background:#ffffff;box-shadow:0 24px 70px rgba(26,53,87,0.10);">
        <div style="background:#1A3557;padding:28px 32px;color:#ffffff;">
          <div style="font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.1;font-weight:600;letter-spacing:-0.01em;">Premier NP Care</div>
          <div style="margin-top:12px;height:2px;width:86px;background:#C9A84C;"></div>
        </div>
        ${content}
        <div style="border-top:1px solid #e0eef2;background:#f7fcfd;padding:20px 32px;color:#6b7b88;font-size:13px;line-height:1.6;">
          Premier NP Care<br />
          412 East Washington Avenue, Washington, New Jersey 07882
        </div>
      </div>
    </div>
  `;
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
    "Thank you for reaching out to Premier NP Care. Your message has been received.",
    "",
    "What happens next:",
    "1. The practice will review your note.",
    "2. If a reply is needed, someone will follow up using the contact information you provided.",
    "3. If this is about scheduling, please keep an eye on your email and phone.",
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
        html: emailShell(`
          <div style="padding:32px;">
            <p style="margin:0 0 8px;color:#087EAE;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Website inquiry</p>
            <h1 style="margin:0;color:#1A3557;font-family:Georgia,'Times New Roman',serif;font-size:36px;line-height:1.08;font-weight:600;">New message from ${escapeHtml(payload.name)}</h1>
            <p style="margin:14px 0 0;color:#5f7182;font-size:16px;line-height:1.7;">A visitor submitted the Premier NP Care contact form. Replying to this email should reply directly to the sender.</p>

            <div style="margin-top:28px;border:1px solid #cfeaf0;border-radius:18px;overflow:hidden;">
              <div style="display:block;padding:16px 18px;border-bottom:1px solid #e0eef2;background:#f7fcfd;">
                <strong style="display:block;color:#1A3557;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;">Name</strong>
                <span style="display:block;margin-top:6px;color:#263b52;font-size:17px;">${escapeHtml(payload.name)}</span>
              </div>
              <div style="display:block;padding:16px 18px;border-bottom:1px solid #e0eef2;">
                <strong style="display:block;color:#1A3557;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;">Email</strong>
                <span style="display:block;margin-top:6px;color:#263b52;font-size:17px;">${escapeHtml(payload.email)}</span>
              </div>
              <div style="display:block;padding:16px 18px;">
                <strong style="display:block;color:#1A3557;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;">Phone</strong>
                <span style="display:block;margin-top:6px;color:#263b52;font-size:17px;">${escapeHtml(phone)}</span>
              </div>
            </div>

            <div style="margin-top:24px;border-left:4px solid #C9A84C;background:#f7fcfd;padding:18px 20px;color:#263b52;font-size:16px;line-height:1.7;">
              <strong style="display:block;margin-bottom:8px;color:#1A3557;">Message</strong>
              ${formatMessageHtml(payload.message)}
            </div>
          </div>
        `),
      }),
      resend.emails.send({
        from,
        to: payload.email,
        replyTo: to,
        subject: "Your message was received | Premier NP Care",
        text: confirmationText,
        html: emailShell(`
          <div style="padding:32px;">
            <p style="margin:0 0 8px;color:#087EAE;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Message received</p>
            <h1 style="margin:0;color:#1A3557;font-family:Georgia,'Times New Roman',serif;font-size:38px;line-height:1.08;font-weight:600;">Thank you for reaching out.</h1>
            <p style="margin:22px 0 0;color:#263b52;font-size:17px;line-height:1.7;">Hi ${escapeHtml(payload.name)},</p>
            <p style="margin:12px 0 0;color:#263b52;font-size:17px;line-height:1.7;">Premier NP Care received your message. The practice will review your note and follow up if a reply is needed.</p>

            <div style="margin-top:28px;border:1px solid #cfeaf0;border-radius:18px;background:#f7fcfd;padding:22px;">
              <p style="margin:0;color:#1A3557;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">What happens next</p>
              <ol style="margin:14px 0 0;padding-left:22px;color:#4f6375;font-size:16px;line-height:1.8;">
                <li>The practice reviews your message.</li>
                <li>If a reply is needed, someone will follow up using the contact information you provided.</li>
                <li>If this is about scheduling, please watch your email and phone.</li>
              </ol>
            </div>

            <div style="margin-top:24px;border-left:4px solid #C9A84C;background:#fffaf0;padding:16px 18px;color:#5f4b20;font-size:15px;line-height:1.7;">
              For urgent symptoms or emergencies, please call 911 or use urgent care. Please do not send sensitive medical information through this general contact form.
            </div>

            <div style="margin-top:24px;color:#6b7b88;font-size:15px;line-height:1.7;">
              <strong style="display:block;margin-bottom:8px;color:#1A3557;">Message received</strong>
              ${formatMessageHtml(payload.message)}
            </div>
          </div>
        `),
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
