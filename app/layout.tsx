import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ChatWidget } from "../components/ChatWidget";
import { bpgExtraSquare } from "./fonts";
import { I18nProvider } from "../lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "CleanMaster - Professional Cleaning Services in Tbilisi",
  description: "Top-rated residential and commercial cleaning services in Tbilisi. Eco-friendly, insured, and 100% satisfaction guaranteed.",
  keywords: ["cleaning service", "tbilisi cleaning", "house cleaning", "office cleaning", "damlagebeli", "cleaning georgia"],
  authors: [{ name: "CleanMaster" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "CleanMaster - #1 Cleaning Service in Tbilisi",
    description: " sparkling clean home is just a click away. Get a free quote today!",
    type: "website",
    locale: "ka_GE",
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanMaster Tbilisi",
    description: "Professional cleaning services for your home and office.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body
        className={`${bpgExtraSquare.variable} antialiased`}
      >
        <I18nProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <ChatWidget />
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
