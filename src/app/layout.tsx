import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://spikedtech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "SPIKEDTECH | Software House Premium — IA, Automatización y Ciberseguridad",
    template: "%s | SPIKEDTECH",
  },
  description:
    "Desarrollamos software personalizado con IA y automatización para empresas que necesitan crecer sin aumentar su carga operativa. Software empresarial, dashboards, APIs e integraciones a medida.",
  keywords: [
    "software house",
    "desarrollo de software",
    "inteligencia artificial",
    "automatización de procesos",
    "ciberseguridad",
    "ASP.NET Core",
    "Next.js",
    "software a medida",
    "Costa Rica",
    "Latinoamérica",
  ],
  authors: [{ name: "José Manuel Quirós Chaves", url: siteUrl }],
  creator: "SPIKEDTECH",
  publisher: "SPIKEDTECH",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: siteUrl,
    siteName: "SPIKEDTECH",
    title:
      "SPIKEDTECH | Software House Premium — IA, Automatización y Ciberseguridad",
    description:
      "Desarrollamos software personalizado con IA y automatización para empresas que necesitan crecer sin aumentar su carga operativa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SPIKEDTECH — Software House Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPIKEDTECH | Software House Premium",
    description:
      "Desarrollamos software personalizado con IA y automatización para empresas que necesitan crecer sin aumentar su carga operativa.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: siteUrl },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SPIKEDTECH",
  url: siteUrl,
  logo: `${siteUrl}/spikedtech-logo.png`,
  description:
    "Software house especializada en desarrollo de software empresarial, IA, automatización y ciberseguridad.",
  foundingDate: "2024",
  areaServed: "Latin America",
  serviceType: [
    "Software Development",
    "Artificial Intelligence",
    "Process Automation",
    "Cybersecurity",
    "Cloud Infrastructure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        {/* Schema.org Organization — safe static literal */}
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          id="schema-organization"
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
