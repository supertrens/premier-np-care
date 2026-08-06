import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileBookBar } from "@/components/mobile-book-bar";
import { StructuredData } from "@/components/structured-data";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteDescription =
  "Premier NP Care is a New Jersey Nurse Practitioner-led medical practice led by Virginie Chavannes, APN, offering provider-led telehealth visits for preventive care, common illnesses, chronic disease support, and mental health services.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Premier NP Care",
    template: "%s | Premier NP Care",
  },
  description: siteDescription,
  applicationName: "Premier NP Care",
  keywords: [
    "Premier NP Care",
    "Virginie Chavannes",
    "Virginie Chavannes APN",
    "New Jersey nurse practitioner",
    "telehealth primary care New Jersey",
    "Washington NJ nurse practitioner",
  ],
  openGraph: {
    title: "Premier NP Care",
    description: siteDescription,
    url: siteUrl,
    siteName: "Premier NP Care",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Premier NP Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier NP Care",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${cormorantGaramond.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[8px] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StructuredData />
        <div aria-hidden="true" className="h-[76px] md:hidden" />
        <MobileBookBar />
      </body>
    </html>
  );
}
