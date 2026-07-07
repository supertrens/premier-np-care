import {
  CalendarCheck,
  ClipboardCheck,
  FileText,
  HeartPulse,
  MessagesSquare,
  ShieldCheck,
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
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A calm clinical desktop with a stethoscope and care notes.",
    description:
      "A comfortable place to start for common concerns, medication questions, follow-up needs, and practical care planning.",
    fit: "Routine questions, stable symptoms, medication conversations, and follow-up planning.",
    boundary:
      "Concerns that need imaging, lab work, procedures, or a hands-on exam may be guided to in-person care.",
    icon: Stethoscope,
  },
  {
    title: "Women's and Family Health",
    eyebrow: "Life-stage care",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A warm consultation setting prepared for a patient conversation.",
    description:
      "Preventive conversations, wellness guidance, and family-centered support for patients who want care that feels personal.",
    fit: "Wellness questions, prevention conversations, education, and routine guidance.",
    boundary:
      "Urgent pregnancy concerns, severe pain, heavy bleeding, or exams should be directed appropriately.",
    icon: HeartPulse,
  },
  {
    title: "Chronic Condition Support",
    eyebrow: "Steady follow-up",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clinical follow-up tools arranged for ongoing care planning.",
    description:
      "Steady check-ins for ongoing health goals, recent readings, lifestyle changes, and care coordination.",
    fit: "Stable check-ins, recent readings, lifestyle goals, and care coordination.",
    boundary:
      "Unstable readings, severe symptoms, or complex medication changes may require higher-touch care.",
    icon: ShieldCheck,
  },
  {
    title: "Telehealth Check-ins",
    eyebrow: "Accessible visits",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A laptop and medical workspace prepared for a virtual care visit.",
    description:
      "Convenient virtual visits for patients who want clear answers without losing the personal feel of care.",
    fit: "Questions that can be evaluated safely without an in-person exam.",
    boundary:
      "Emergencies, chest pain, breathing trouble, stroke symptoms, or serious injuries need urgent care.",
    icon: MessagesSquare,
  },
];

export const practiceAtAGlance = [
  {
    title: "Who leads the visit",
    body: "Patients know the clinician behind the visit before they book.",
    icon: UserRoundCheck,
  },
  {
    title: "What can be handled virtually",
    body: "Services are explained in plain language so patients can choose confidently.",
    icon: ClipboardCheck,
  },
  {
    title: "When in-person care may help",
    body: "Some concerns need a local exam or urgent support, and that guidance is part of good care.",
    icon: ShieldCheck,
  },
  {
    title: "Where booking happens",
    body: "Booking begins from the site and continues through the practice's scheduling path.",
    icon: CalendarCheck,
  },
];

export const patientJourney = [
  {
    title: "Book",
    description:
      "Use the scheduling link to choose a visit time that works for you.",
    icon: CalendarCheck,
  },
  {
    title: "Prepare",
    description:
      "Receive simple visit instructions so you know how to prepare.",
    icon: FileText,
  },
  {
    title: "Consult",
    description:
      "Meet with Virginie Chavannes for a focused telehealth conversation.",
    icon: UserRoundCheck,
  },
  {
    title: "Care plan",
    description:
      "Leave with plain-language next steps and follow-up guidance.",
    icon: ClipboardCheck,
  },
  {
    title: "Follow up",
    description:
      "Continue care through the practice's follow-up process.",
    icon: MessagesSquare,
  },
];

export const patientFit = [
  "Patients who want a direct provider relationship and a calmer care experience.",
  "Busy adults and families who need convenient access without feeling rushed.",
  "People who are new to telehealth and want the process explained plainly before booking.",
];

export const providerStandards = [
  {
    title: "Assessment before recommendation",
    body: "The visit starts with listening, thoughtful questions, and a shared understanding of the concern.",
  },
  {
    title: "Plain-language care planning",
    body: "Options, prescriptions, testing, referrals, and follow-up are explained in language patients can use.",
  },
  {
    title: "Right care, right setting",
    body: "When a local exam, specialist, urgent care, or emergency support is the right move, patients are guided clearly.",
  },
];

export const patientExpectations = [
  "A direct visit with the Nurse Practitioner.",
  "Clear explanation of what can be handled virtually and what cannot.",
  "Practical next steps that fit the patient's concern and the practice scope.",
];

export const safetyBoundaries = [
  {
    title: "Urgent symptoms need urgent care",
    body: "Chest pain, trouble breathing, stroke symptoms, severe allergic reactions, major injuries, or any emergency should be handled right away through emergency services.",
    icon: TriangleAlert,
  },
  {
    title: "Keep health details in the visit",
    body: "The contact form is best for general questions. Personal medical details can be shared through the practice visit process.",
    icon: ShieldCheck,
  },
  {
    title: "Some care is best in person",
    body: "If a concern needs an exam, testing, imaging, specialist care, or urgent support, the next step will be explained clearly.",
    icon: Stethoscope,
  },
];
