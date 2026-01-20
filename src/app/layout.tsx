import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/content/content";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollToHash } from "@/components/ScrollToHash";
import { PageTransitions } from "@/components/motion/PageTransitions";
import { BackToTop } from "@/components/site/BackToTop";
import { FloatingCTA } from "@/components/site/FloatingCTA";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.positioning,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: site.name,
    description: site.positioning,
    siteName: site.name,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.positioning,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} flex min-h-screen flex-col bg-white text-brand-blue antialiased`}
      >
        <ScrollToHash />
        <Header />
        <main id="main" data-nav-scheme="light" className="flex-1">
          <PageTransitions>{children}</PageTransitions>
        </main>
        <FloatingCTA />
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
