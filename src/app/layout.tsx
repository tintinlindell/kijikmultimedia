import type { Metadata } from "next";
import { Geist, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SanityLive } from "@/sanity/lib/live";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KijiK Multimedia — The Fire Inside",
  description:
    "KijiK Multimedia is an award-winning storytelling company producing branded content, animation, film, AR/VR and more. The Fire Inside drives everything we do.",
  keywords: [
    "multimedia",
    "storytelling",
    "animation",
    "branding",
    "film",
    "AR",
    "VR",
    "Miami",
    "Atlanta",
  ],
  openGraph: {
    title: "KijiK Multimedia — The Fire Inside",
    description:
      "Award-winning storytelling company. Film, Animation, Branding, AR/VR.",
    url: "https://kijikmultimedia.com",
    siteName: "KijiK Multimedia",
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${bebasNeue.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#060606] text-[#f0f0f0]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
