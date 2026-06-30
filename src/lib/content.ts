import {
  CalendarCheck,
  HeartPulse,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Provider" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "[PLACEHOLDER] Everyday Primary Care",
    eyebrow: "Common concerns",
    description:
      "[PLACEHOLDER] Thoughtful support for common concerns, medication questions, follow-up visits, and practical care planning.",
    icon: Stethoscope,
  },
  {
    title: "[PLACEHOLDER] Women and Family Health",
    eyebrow: "Life-stage care",
    description:
      "[PLACEHOLDER] Thoughtful visits for prevention, wellness conversations, and family-centered health needs.",
    icon: HeartPulse,
  },
  {
    title: "[PLACEHOLDER] Chronic Condition Support",
    eyebrow: "Ongoing guidance",
    description:
      "[PLACEHOLDER] Ongoing guidance for stable conditions, lifestyle goals, and coordinating next steps when more care is needed.",
    icon: ShieldCheck,
  },
  {
    title: "[PLACEHOLDER] Telehealth Check-ins",
    eyebrow: "Accessible visits",
    description:
      "[PLACEHOLDER] Convenient virtual visits for patients who want clear answers without losing the personal feel of care.",
    icon: MessagesSquare,
  },
];

export const howItWorksSteps = [
  {
    title: "Book",
    description:
      "Choose an appointment time through the practice scheduling link. No account is created on this marketing site.",
    icon: CalendarCheck,
  },
  {
    title: "Consult",
    description:
      "Meet with [PLACEHOLDER: NP Name, Credentials] through the existing telehealth platform for a focused, unrushed visit.",
    icon: UserRoundCheck,
  },
  {
    title: "Get Care",
    description:
      "Leave with a clear care plan, next steps, and any appropriate follow-up handled through the practice systems.",
    icon: Sparkles,
  },
];

export const credibilityPoints = [
  "[PLACEHOLDER] Board-certified Nurse Practitioner credentials and training details, stated plainly for patients.",
  "[PLACEHOLDER] Clinical experience translated into assessment, education, and clear next steps.",
  "[PLACEHOLDER] Telehealth-affiliated medical care with appropriate referral guidance when in-person care is needed.",
];

export const patientFit = [
  "[PLACEHOLDER] Patients who want a provider who remembers the context behind the chart.",
  "[PLACEHOLDER] Busy adults and families who need convenient access without feeling rushed.",
  "[PLACEHOLDER] People who are new to telehealth and want the process explained plainly.",
];
