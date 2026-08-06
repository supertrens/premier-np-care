import { siteUrl } from "@/lib/site";

const medicalPracticeJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${siteUrl}/#medical-practice`,
  name: "Premier NP Care",
  alternateName: "Premier NP Care LLC",
  url: siteUrl,
  image: `${siteUrl}/images/virginie-chavannes.jpeg`,
  logo: `${siteUrl}/images/logo-icon.png`,
  description:
    "Premier NP Care is a New Jersey Nurse Practitioner-led medical practice offering provider-led telehealth visits, preventive care, common illness visits, chronic disease support, and mental health services for patients age 14 and up.",
  medicalSpecialty: [
    "Primary Care",
    "Preventive Care",
    "Telehealth",
    "Chronic Disease Management",
    "Mental Health",
  ],
  areaServed: {
    "@type": "AdministrativeArea",
    name: "New Jersey",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "412 East Washington Avenue",
    addressLocality: "Washington",
    addressRegion: "NJ",
    postalCode: "07882",
    addressCountry: "US",
  },
  openingHours: ["Mo-Th 08:00-17:00", "Fr 09:00-17:00"],
  paymentAccepted: "Insurance and self pay",
  provider: {
    "@type": "Person",
    name: "Virginie Chavannes, APN",
    jobTitle: "Board-certified Adult-Gerontology Primary Care Nurse Practitioner",
    image: `${siteUrl}/images/virginie-chavannes.jpeg`,
  },
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Preventive care",
    },
    {
      "@type": "MedicalProcedure",
      name: "Diagnosis and treatment of common illnesses",
    },
    {
      "@type": "MedicalProcedure",
      name: "Management of chronic diseases",
    },
    {
      "@type": "MedicalTherapy",
      name: "Mental health services",
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(medicalPracticeJsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
