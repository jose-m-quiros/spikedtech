import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spikedtech.com"),
  title: "SPIKEDTECH | Software House",
  description:
    "Software house especializada en desarrollo de soluciones digitales modernas, seguras y escalables.",
  keywords: [
    "software house",
    "desarrollo web",
    "automatizacion",
    "inteligencia artificial",
    "ciberseguridad",
    "SPIKEDTECH",
  ],
  openGraph: {
    title: "SPIKEDTECH | Software House",
    description:
      "Innovacion, desarrollo e inteligencia para el futuro digital.",
    type: "website",
    locale: "es_LA",
    siteName: "SPIKEDTECH",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPIKEDTECH | Software House",
    description:
      "Innovacion, desarrollo e inteligencia para el futuro digital.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
