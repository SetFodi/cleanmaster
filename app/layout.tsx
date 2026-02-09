import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ChatWidget } from "../components/ChatWidget";
import { bpgExtraSquare } from "./fonts";
import { I18nProvider } from "../lib/i18n";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.css";

// ... existing imports

export const metadata: Metadata = {
  title: "Fast&Clean - Professional Cleaning Services in Batumi",
  description: "Top-rated residential and commercial cleaning services in Batumi. Eco-friendly, insured, and 100% satisfaction guaranteed.",
  keywords: ["cleaning service", "batumi cleaning", "house cleaning", "office cleaning", "damlagebeli", "cleaning georgia", "fast&clean"],
  authors: [{ name: "Fast&Clean" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Fast&Clean - #1 Cleaning Service in Batumi",
    description: "Sparkling clean home is just a click away. Get a free quote today!",
    type: "website",
    locale: "ka_GE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast&Clean Batumi",
    description: "Professional cleaning services for your home and office.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" suppressHydrationWarning>
      <body
        className={`${bpgExtraSquare.variable} antialiased`}
      >
        <ThemeProvider>
          <I18nProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <ChatWidget />
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
