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
    title: "Everyday Primary Care",
    eyebrow: "Focused concerns",
    description:
      "Focused support for common concerns, medication questions, follow-up needs, and practical care planning.",
    fit: "Routine questions, stable symptoms, medication conversations, and follow-up planning.",
    boundary:
      "Severe symptoms, sudden changes, procedures, imaging, labs, or hands-on exams may need another setting.",
    icon: Stethoscope,
  },
  {
    title: "Women's and Family Health",
    eyebrow: "Life-stage care",
    description:
      "Preventive conversations, wellness guidance, and family-centered support within the practice scope.",
    fit: "Wellness questions, prevention conversations, education, and routine guidance.",
    boundary:
      "Urgent pregnancy concerns, severe pain, heavy bleeding, or exams should be directed appropriately.",
    icon: HeartPulse,
  },
  {
    title: "Chronic Condition Support",
    eyebrow: "Steady follow-up",
    description:
      "Check-ins for stable conditions, lifestyle goals, and coordination when more care is needed.",
    fit: "Stable check-ins, recent readings, lifestyle goals, and care coordination.",
    boundary:
      "Unstable readings, severe symptoms, or complex medication changes may require higher-touch care.",
    icon: ShieldCheck,
  },
  {
    title: "Telehealth Check-ins",
    eyebrow: "Accessible visits",
    description:
      "Convenient virtual visits for patients who want clear answers without losing the personal feel of care.",
    fit: "Questions that can be evaluated safely without an in-person exam.",
    boundary:
      "Emergencies, chest pain, breathing trouble, stroke symptoms, or serious injuries need urgent care.",
    icon: MessagesSquare,
  },
];

export const practiceFacts = [
  {
    label: "Provider",
    value: "Virginie Chavannes",
  },
  {
    label: "New patient status",
    value: "Accepting status and launch timing can be confirmed before go-live.",
  },
  {
    label: "Service area",
    value: "Telehealth eligibility and service-area language can be finalized before launch.",
  },
  {
    label: "Visit platform",
    value: "Scheduling, visits, and records stay in the existing practice system.",
  },
];

export const practiceAtAGlance = [
  {
    title: "Who leads the visit",
    body: "Patients see that care is provider-led before they enter the practice platform.",
    icon: UserRoundCheck,
  },
  {
    title: "What can be handled virtually",
    body: "Services are framed with practical scope instead of vague promises.",
    icon: ClipboardCheck,
  },
  {
    title: "When another setting is safer",
    body: "Urgent symptoms and in-person needs are separated from routine telehealth.",
    icon: ShieldCheck,
  },
  {
    title: "Where booking happens",
    body: "Scheduling connects to the established practice platform once the final URL is configured.",
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
      "Meet with Virginie Chavannes through the existing telehealth platform for a focused, unrushed visit.",
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
      "Use the practice scheduling link to choose a visit time. This website does not create an account or store appointment data.",
    icon: CalendarCheck,
  },
  {
    title: "Prepare",
    description:
      "The practice platform sends any visit instructions, forms, or reminders needed before the consultation.",
    icon: FileText,
  },
  {
    title: "Consult",
    description:
      "Meet with Virginie Chavannes for a focused visit through the established telehealth platform.",
    icon: UserRoundCheck,
  },
  {
    title: "Care plan",
    description:
      "Leave with plain-language next steps, appropriate follow-up guidance, and safety instructions.",
    icon: ClipboardCheck,
  },
  {
    title: "Follow up",
    description:
      "Follow-up and records are handled through the practice systems, not this marketing website.",
    icon: MessagesSquare,
  },
];

export const patientFit = [
  "Patients who want a direct provider relationship rather than a faceless portal experience.",
  "Busy adults and families who need convenient access without feeling rushed.",
  "People who are new to telehealth and want the process explained plainly before booking.",
];

export const providerStandards = [
  {
    title: "Assessment before recommendation",
    body: "The visit starts with listening, targeted questions, and a clear determination of whether telehealth is appropriate.",
  },
  {
    title: "Plain-language care planning",
    body: "Options, limits, prescriptions, testing, referrals, and follow-up are explained in language patients can use.",
  },
  {
    title: "Safety boundaries",
    body: "Patients are directed to urgent, emergency, specialist, or in-person care when that is the safer path.",
  },
];

export const patientExpectations = [
  "A direct visit with the Nurse Practitioner, not a generic patient portal experience.",
  "Clear explanation of what can be handled virtually and what cannot.",
  "Practical next steps that fit the patient's concern and the practice scope.",
];

export const clinicalScopeMatrix = [
  {
    area: "Everyday primary care",
    appropriate:
      "Common concerns, medication questions, stable follow-up needs, and practical care planning.",
    mayRequire:
      "Severe symptoms, sudden changes, procedures, imaging, labs, or concerns needing a hands-on exam.",
    nextStep:
      "Book a visit or contact the practice if you are unsure whether telehealth is appropriate.",
    icon: Stethoscope,
  },
  {
    area: "Women's and family health",
    appropriate:
      "Prevention conversations, wellness questions, education, and family-centered health guidance.",
    mayRequire:
      "In-person exams, urgent pregnancy concerns, severe pain, heavy bleeding, or emergency symptoms.",
    nextStep:
      "Use the scheduling link for routine concerns; urgent symptoms should use urgent or emergency care.",
    icon: HeartPulse,
  },
  {
    area: "Chronic condition support",
    appropriate:
      "Stable condition check-ins, lifestyle goals, medication conversations, and care coordination.",
    mayRequire:
      "Unstable readings, severe symptoms, complex medication changes, or specialist-directed care.",
    nextStep:
      "Bring current medications and recent readings through the practice platform when instructed.",
    icon: ShieldCheck,
  },
  {
    area: "Telehealth check-ins",
    appropriate:
      "Convenient visits for questions that can be evaluated safely without an in-person exam.",
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
