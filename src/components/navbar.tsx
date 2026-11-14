"use client";

import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { useRef } from "react";
import { BrandMark } from "@/components/brand-mark";

export const navigation = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#equipo", label: "Equipo" },
  { href: "/#faq", label: "Preguntas frecuentes" },
];

export function Navbar() {
  const mobileMenu = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    mobileMenu.current?.removeAttribute("open");
  }

  return (
    <header className="site-header">
      <nav className="container header-inner" aria-label="Navegación principal">
        <Link href="/" aria-label="SPIKEDTECH, inicio" onClick={closeMenu}><BrandMark /></Link>
        <ul className="desktop-nav">
          {navigation.map(({ href, label }) => (
            <li key={href}><Link href={href}>{label}</Link></li>
          ))}
        </ul>
        <Link className="button button-header" href="/#contacto">
          Hablemos <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <details
          className="mobile-menu"
          ref={mobileMenu}
          onKeyDown={(event) => {
            if (event.key === "Escape" && mobileMenu.current?.open) {
              closeMenu();
              mobileMenu.current.querySelector("summary")?.focus();
            }
          }}
        >
          <summary aria-label="Menú de navegación"><Menu size={22} aria-hidden="true" /></summary>
          <ul>
            {navigation.map(({ href, label }) => (
              <li key={href}><Link href={href} onClick={closeMenu}>{label}</Link></li>
            ))}
            <li><Link href="/#contacto" onClick={closeMenu}>Contacto</Link></li>
          </ul>
        </details>
      </nav>
    </header>
  );
}
