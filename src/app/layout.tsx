import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const siteDescription =
  "Premier NP Care is a Nurse Practitioner-led telehealth-affiliated medical practice offering personal, accessible care.";

export const metadata: Metadata = {
  metadataBase: new URL("https://premier-np-care.example"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  title: {
    default: "Premier NP Care",
    template: "%s | Premier NP Care",
  },
  description: siteDescription,
  openGraph: {
    title: "Premier NP Care",
    description: siteDescription,
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
      className={`${sourceSans.variable} ${newsreader.variable} h-full scroll-smooth antialiased`}
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
      </body>
    </html>
  );
}
