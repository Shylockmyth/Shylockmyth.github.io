import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StatusBar } from "@/components/StatusBar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Ntuthuko Mdunge",
    "SATNAC 2026",
    "Innovator of the Year",
    "electronic engineering",
    "analogue electronics",
    "embedded systems",
    "PCB design",
    "signals and DSP",
    "renewable energy",
    "Durban University of Technology",
    "South Africa",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    locale: "en_ZA",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07090b" },
    { media: "(prefers-color-scheme: light)", color: "#f2f5f6" },
  ],
};

const themeScript = `(function(){try{var s=localStorage.getItem("theme");var t=s||(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.dataset.theme=t;document.documentElement.classList.add("js")}catch(e){document.documentElement.classList.add("js")}})();`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ntuthuko Mdunge",
  alternateName: site.name,
  url: site.url,
  jobTitle: "Electronic Engineering student",
  affiliation: { "@type": "CollegeOrUniversity", name: site.institution },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Durban",
    addressCountry: "ZA",
  },
  award: [
    "SATNAC 2026 Innovator of the Year (SignalMyth)",
    "BRICS 2025 Bronze, Technology Innovation (Dr Kiosk)",
    "JCI Smart Cities Hackathon 2025, second place",
  ],
  knowsAbout: [
    "Analogue electronics",
    "Embedded systems",
    "PCB design",
    "Digital signal processing",
    "Machine learning",
    "Renewable energy modelling",
  ],
  sameAs: [site.linkedin, site.github],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <StatusBar />
        <RevealOnScroll />
      </body>
    </html>
  );
}
