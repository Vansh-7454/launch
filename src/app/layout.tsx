import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import { business } from "@/content/business";
import "./globals.css";

const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});


export const viewport: Viewport = {
  themeColor: "#1C1512",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | ${business.tagline}`,
    template: `%s | ${business.name}`,
  },
  description: `${business.oneLinePromise} Located at 12th Main Road, Indiranagar, Bengaluru. Fresh filter kaapi, pour-overs, and whole beans.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${business.name} | Indiranagar, Bengaluru`,
    description: business.oneLinePromise,
    url: business.siteUrl,
    siteName: business.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${business.name} Specialty Coffee Beans & Roastery Indiranagar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Specialty Coffee Roastery`,
    description: business.oneLinePromise,
    images: ["/brand/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${fontDisplay.variable} ${fontSans.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1512] font-sans">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
