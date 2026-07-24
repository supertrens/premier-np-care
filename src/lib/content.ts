import {
  Brain,
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

export const insuranceAccepted = {
  summary: "Accepting all major insurance plans in New Jersey, plus self pay.",
  note: "Coverage may vary by plan. Contact the practice if you have questions about your benefits.",
  featured: ["Braven Health", "Horizon BCBS"],
  examples: [
    "Braven Health",
    "Horizon BCBS",
    "UnitedHealthcare",
    "Aetna",
    "AmeriHealth",
    "Self pay",
  ],
};

export const services = [
  {
    title: "Preventive care",
    eyebrow: "Prevention",
    image: "/images/client/preventive-care-nutrition.jpeg",
    imageAlt:
      "Fresh vegetables arranged for preventive care and lifestyle counseling.",
    imagePosition: "center 58%",
    homeImage: "/images/client/preventive-care-nutrition.jpeg",
    homeImageAlt:
      "Fresh vegetables arranged for preventive care and lifestyle counseling.",
    homeImagePosition: "center 55%",
    description:
      "Routine checkups, screenings, immunizations, and lifestyle guidance that help patients stay ahead of health concerns.",
    items: [
      "Routine checkups and annual physical exams",
      "Health risk assessments",
      "Immunizations and vaccinations",
      "Screening for conditions such as high blood pressure, diabetes, high cholesterol, and certain cancers",
      "Lifestyle counseling (nutrition, exercise, smoking cessation)",
    ],
    fit: "Annual physicals, prevention planning, and wellness support for patients age 14 and up.",
    boundary:
      "Some preventive screenings, labs, or procedures may require coordination with an in-person facility.",
    tags: ["Annual physicals", "Immunizations", "Screenings"],
    icon: Stethoscope,
  },
  {
    title: "Diagnosis and treatment of common illnesses",
    eyebrow: "Sick visits",
    image: "/images/client/common-illness-exam.jpeg",
    imageAlt:
      "A clinician checking a patient's eyes during a routine health visit.",
    imagePosition: "center 36%",
    homeImage: "/images/client/common-illness-exam.jpeg",
    homeImageAlt:
      "A clinician checking a patient's eyes during a routine health visit.",
    homeImagePosition: "center 38%",
    description:
      "Timely evaluation and treatment guidance for everyday illnesses, minor injuries, and common acute concerns.",
    items: [
      "Colds, flu, sore throat, and other infections",
      "Fever and minor injuries",
      "Skin conditions",
      "Allergies",
      "Gastrointestinal problems",
    ],
    fit: "Acute symptoms that can be safely reviewed through the visit process.",
    boundary:
      "Severe symptoms, breathing trouble, chest pain, major injuries, or rapidly worsening concerns need urgent care.",
    tags: ["Cold & flu", "Infections", "Minor injuries"],
    icon: ShieldCheck,
  },
  {
    title: "Management of chronic diseases",
    eyebrow: "Ongoing care",
    image: "/images/client/chronic-care-glucose.jpeg",
    imageAlt:
      "A glucose meter and healthy meal for chronic disease management.",
    imagePosition: "center 48%",
    homeImage: "/images/client/chronic-care-glucose.jpeg",
    homeImageAlt:
      "A glucose meter and healthy meal for chronic disease management.",
    homeImagePosition: "center 48%",
    description:
      "Ongoing support for long-term conditions, with education, monitoring, and clear next steps.",
    items: [
      "Diabetes",
      "Hypertension (high blood pressure)",
      "Asthma and chronic obstructive pulmonary disease (COPD)",
      "Heart disease",
      "Arthritis",
      "Thyroid disorders",
    ],
    fit: "Stable chronic condition follow-up, medication questions, and care planning.",
    boundary:
      "Unstable readings, severe symptoms, or complex medication changes may require higher-touch or in-person care.",
    tags: ["Diabetes", "Hypertension", "Asthma"],
    icon: HeartPulse,
  },
  {
    title: "Mental health services",
    eyebrow: "Support",
    image: "/images/client/mental-health-conversation.jpeg",
    imageAlt:
      "A clinician speaking with a patient in a calm care conversation.",
    imagePosition: "center 38%",
    homeImage: "/images/client/mental-health-conversation.jpeg",
    homeImageAlt:
      "A clinician speaking with a patient in a calm care conversation.",
    homeImagePosition: "center 40%",
    description:
      "Screening, basic counseling, medication management for common conditions, and specialist referral when needed.",
    items: [
      "Screening for depression, anxiety, and substance use",
      "Basic counseling and support",
      "Medication management for common mental health conditions",
      "Referral to mental health specialists when needed",
    ],
    fit: "Patients who need screening, early support, or coordinated mental health next steps.",
    boundary:
      "Crisis symptoms, suicidal thoughts, or urgent behavioral health needs require emergency or crisis services right away.",
    tags: ["Anxiety & depression", "Medication management", "Specialist referrals"],
    icon: Brain,
  },
];

export const practiceAtAGlance = [
  {
    title: "You'll know who's treating you",
    body: "Patients know the clinician behind the visit before they book.",
    icon: UserRoundCheck,
  },
  {
    title: "What telehealth can treat",
    body: "Services are explained in plain language so patients can choose confidently.",
    icon: ClipboardCheck,
  },
  {
    title: "Clear guidance when you need more care",
    body: "Some concerns need a local exam or urgent support, and that guidance is part of good care.",
    icon: ShieldCheck,
  },
  {
    title: "Instant online scheduling",
    body: "No phone calls required — booking begins from the site and continues through the practice's scheduling path.",
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
      "Meet with Virginie Chavannes, APN, for a focused telehealth conversation.",
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
    description: "Continue care through the practice's follow-up process.",
    icon: MessagesSquare,
  },
];

export const patientFit = [
  "Patients age 14 and up who want a direct provider relationship and a calmer care experience.",
  "People who value evidence-based care, clear education, and shared decision-making.",
  "Patients and families who want prevention, routine care, and chronic condition support explained plainly.",
];

export const providerStandards = [
  {
    title: "Evidence-based care",
    body: "Care is grounded in clinical evidence, careful assessment, and a respectful understanding of each patient's goals, values, and concerns.",
  },
  {
    title: "Clear communication",
    body: "Virginie prioritizes active listening, patient education, and shared decision-making so patients feel informed and supported.",
  },
  {
    title: "Holistic support",
    body: "The practice helps patients and families understand their health, manage next steps, and participate actively in their well-being.",
  },
];

export const providerBio = [
  "I am a board-certified Adult-Gerontology Primary Care Nurse Practitioner with experience in primary care, acute care, and chronic disease management. My career began in nursing, where I developed a strong foundation in assessment, patient education, and compassionate care across a wide range of settings. Over time, I realized I wanted to do more, especially by diagnosing and managing complex health needs, coordinating care, and advocating for patients throughout their health journeys.",
  "As a Nurse Practitioner, my approach is rooted in evidence-based medicine and a commitment to understanding each patient's goals, values, and concerns. I prioritize clear communication, active listening, and shared decision-making so patients feel informed and supported. Whether I am addressing acute symptoms, managing chronic conditions, or focusing on prevention, I aim to deliver care that is both medically sound and personally respectful.",
  "I am passionate about providing holistic, patient-centered care and empowering patients and their families through education so they can actively manage their own health, which I find incredibly rewarding.",
];

export const missionStatement =
  "My mission is to serve every patient with compassion, respect, and clinical excellence. I am committed to delivering evidence-based, patient-centered care, promoting health through education and prevention, and advocating for equitable access to quality healthcare. I strive to build trusting relationships that empower patients to actively participate in their health and well-being while continually growing as a lifelong learner and healthcare leader.";

export const practiceDetails = {
  schedule: "Monday-Thursday 8-5pm; Friday 9-5pm",
  payment: insuranceAccepted.summary,
  address: "412 East Washington Avenue, Washington, New Jersey 07882",
  ageRange: "Treating patients from 14 and up",
};

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
