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
    default: `${site.name} · ${site.discipline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Ntuthuko Mdunge",
    "electrical engineering",
    "computer engineering",
    "embedded systems",
    "PCB design",
    "computer vision",
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
    title: `${site.name} · ${site.discipline}`,
    description: site.description,
    locale: "en_ZA",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.discipline}`,
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
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
