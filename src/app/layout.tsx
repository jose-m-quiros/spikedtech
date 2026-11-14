import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

const geist = localFont({
  src: "./fonts/geist-latin.woff2",
  weight: "400 800",
  display: "swap",
  variable: "--font-geist",
});

const homeTitle = "Desarrollo de software en Costa Rica | SPIKEDTECH";
const verification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: homeTitle, template: "%s | SPIKEDTECH" },
  description: site.description,
  verification: verification ? { google: verification } : undefined,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: site.name,
    title: homeTitle,
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organizacion`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/spikedtech-logo.png`,
      email: site.email,
      description: site.description,
      areaServed: [{ "@type": "Country", name: "Costa Rica" }, "Latinoamérica"],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#sitio`,
      url: site.url,
      name: site.name,
      inLanguage: "es-CR",
      publisher: { "@id": `${site.url}/#organizacion` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CR" className={geist.variable}>
      <body>
        <a className="skip-link" href="#contenido">Ir al contenido principal</a>
        <Navbar />
        {children}
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
