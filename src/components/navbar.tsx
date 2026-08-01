"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";

const navigation = [
  { href: "#servicios", label: "Servicios" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#proceso", label: "Proceso" },
  { href: "#equipo", label: "Equipo" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        hasScrolled
          ? "border-white/[0.12] bg-[#07090d]/80 shadow-[0_12px_42px_rgba(0,0,0,0.32)] backdrop-blur-xl"
          : "border-transparent bg-[#07090d]/35 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10"
      >
        <a aria-label="SPIKEDTECH, ir al inicio" href="#inicio">
          <BrandMark />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button className="hidden sm:inline-flex" href="#contacto">
            Cotizar Proyecto
          </Button>
          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-white/15 bg-white/[0.045] text-slate-200 transition hover:bg-white/[0.09] [&::-webkit-details-marker]:hidden">
              <Menu aria-hidden="true" size={19} strokeWidth={1.8} />
              <span className="sr-only">Abrir navegación</span>
            </summary>
            <div className="absolute right-0 top-12 w-56 rounded-lg border border-white/[0.12] bg-[#0a0d14]/95 p-2 shadow-2xl backdrop-blur-xl">
              {navigation.map((item) => (
                <a
                  className="block rounded-md px-3 py-2.5 text-sm text-slate-200 transition hover:bg-white/[0.07] hover:text-white"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="mt-1 block rounded-md bg-cyan-300 px-3 py-2.5 text-sm font-semibold text-slate-950"
                href="#contacto"
              >
                Cotizar Proyecto
              </a>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
