import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "SPIKEDTECH | Soluciones digitales de alto impacto",
  description:
    "Software moderno, seguro y escalable mediante IA, automatización y ciberseguridad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
