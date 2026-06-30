import {
  CalendarCheck,
  ClipboardCheck,
  FileText,
  HeartPulse,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TriangleAlert,
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

export const practiceFacts = [
  {
    label: "[PLACEHOLDER] Provider",
    value: "[PLACEHOLDER: NP Name, Credentials]",
  },
  {
    label: "[PLACEHOLDER] New patient status",
    value: "Accepting status, booking availability, and launch timing.",
  },
  {
    label: "[PLACEHOLDER] Service area",
    value: "State, county, or eligibility language for telehealth care.",
  },
  {
    label: "Visit platform",
    value: "Scheduling, visits, and records stay in the existing practice system.",
  },
];

export const practiceAtAGlance = [
  {
    title: "Provider-led",
    body: "Patients know who is responsible for the visit, the explanation, and the next step.",
    icon: UserRoundCheck,
  },
  {
    title: "Defined scope",
    body: "Services are explained plainly, including when telehealth is not the right setting.",
    icon: ClipboardCheck,
  },
  {
    title: "Informational site",
    body: "No patient portal, account, scheduling database, or EHR integration is built here.",
    icon: ShieldCheck,
  },
  {
    title: "Clear access",
    body: "Booking connects to the practice scheduling link when the final URL is configured.",
    icon: CalendarCheck,
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

export const patientJourney = [
  {
    title: "Book",
    description:
      "Use the practice scheduling link. This website does not create an account or store appointment data.",
    icon: CalendarCheck,
  },
  {
    title: "Prepare",
    description:
      "[PLACEHOLDER] The practice platform sends any visit instructions, forms, or reminders needed before the consultation.",
    icon: FileText,
  },
  {
    title: "Consult",
    description:
      "Meet with [PLACEHOLDER: NP Name, Credentials] for a focused visit through the established telehealth system.",
    icon: UserRoundCheck,
  },
  {
    title: "Receive a plan",
    description:
      "[PLACEHOLDER] Leave with plain-language next steps, appropriate follow-up guidance, and safety instructions.",
    icon: ClipboardCheck,
  },
  {
    title: "Follow up",
    description:
      "[PLACEHOLDER] Follow-up and records are handled through the practice systems, not this marketing website.",
    icon: MessagesSquare,
  },
];

export const patientFit = [
  "[PLACEHOLDER] Patients who want a provider who remembers the context behind the chart.",
  "[PLACEHOLDER] Busy adults and families who need convenient access without feeling rushed.",
  "[PLACEHOLDER] People who are new to telehealth and want the process explained plainly.",
];

export const providerStandards = [
  {
    title: "Assessment before recommendation",
    body: "[PLACEHOLDER] How the provider listens, reviews symptoms, asks targeted questions, and determines whether telehealth is appropriate.",
  },
  {
    title: "Plain-language care planning",
    body: "[PLACEHOLDER] How options, limitations, prescriptions, testing, referrals, or follow-up are explained after the visit.",
  },
  {
    title: "Safety boundaries",
    body: "[PLACEHOLDER] How patients are directed to urgent, emergency, specialist, or in-person care when that is safer.",
  },
];

export const patientExpectations = [
  "[PLACEHOLDER] A direct visit with the Nurse Practitioner, not a generic patient portal experience.",
  "[PLACEHOLDER] Clear explanation of what can be handled virtually and what cannot.",
  "[PLACEHOLDER] Practical next steps that fit the patient's concern and the practice scope.",
];

export const clinicalScopeMatrix = [
  {
    area: "[PLACEHOLDER] Everyday primary care",
    appropriate:
      "[PLACEHOLDER] Common concerns, medication questions, stable follow-up needs, and practical care planning.",
    mayRequire:
      "Severe symptoms, sudden changes, procedures, imaging, labs, or concerns needing a hands-on exam.",
    nextStep:
      "Book a visit or contact the practice if you are unsure whether telehealth is appropriate.",
    icon: Stethoscope,
  },
  {
    area: "[PLACEHOLDER] Women and family health",
    appropriate:
      "[PLACEHOLDER] Prevention conversations, wellness questions, education, and family-centered health guidance.",
    mayRequire:
      "In-person exams, urgent pregnancy concerns, severe pain, heavy bleeding, or emergency symptoms.",
    nextStep:
      "Use the scheduling link for routine concerns; urgent symptoms should use urgent or emergency care.",
    icon: HeartPulse,
  },
  {
    area: "[PLACEHOLDER] Chronic condition support",
    appropriate:
      "[PLACEHOLDER] Stable condition check-ins, lifestyle goals, medication conversations, and care coordination.",
    mayRequire:
      "Unstable readings, severe symptoms, complex medication changes, or specialist-directed care.",
    nextStep:
      "Bring current medications and recent readings through the practice platform when instructed.",
    icon: ShieldCheck,
  },
  {
    area: "[PLACEHOLDER] Telehealth check-ins",
    appropriate:
      "[PLACEHOLDER] Convenient visits for questions that can be evaluated safely without an in-person exam.",
    mayRequire:
      "Emergencies, chest pain, trouble breathing, stroke symptoms, severe allergic reactions, or injuries.",
    nextStep:
      "For emergencies, call 911. For non-urgent questions, book or contact the practice.",
    icon: MessagesSquare,
  },
];

export const safetyBoundaries = [
  {
    title: "Use emergency care for urgent symptoms",
    body: "Chest pain, trouble breathing, stroke symptoms, severe allergic reactions, major injuries, or any emergency should not wait for this website.",
    icon: TriangleAlert,
  },
  {
    title: "This site does not store PHI",
    body: "Do not submit sensitive medical details through the general contact form. Patient information belongs in the practice platform.",
    icon: ShieldCheck,
  },
  {
    title: "Telehealth has limits",
    body: "Some concerns need an in-person exam, testing, imaging, specialist care, urgent care, or emergency services.",
    icon: Stethoscope,
  },
];
