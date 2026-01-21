import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { themeToCssVars } from "@/theme/theme";
import { defaultTheme } from "@/theme/theme";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const iconUrl = `${basePath}/icon.svg`;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShreeGuru Leadership & Learning",
  description: "Guiding minds. Shaping leaders.",
  icons: {
    icon: [{ url: iconUrl, type: "image/svg+xml" }],
    shortcut: [{ url: iconUrl, type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialVars = themeToCssVars(defaultTheme);
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <style>{`:root{${Object.entries(initialVars)
          .map(([key, value]) => `${key}:${value}`)
          .join(";")}}`}</style>
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Header />
          <main className="min-h-dvh pt-[var(--header-height)]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
