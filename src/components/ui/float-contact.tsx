"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

// ⚠️  Actualiza el número de WhatsApp antes de publicar en producción
const WHATSAPP_NUMBER = "50612345678";
const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hola SPIKEDTECH, me gustaría obtener información sobre sus servicios."
);

export function FloatContact() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 500);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div
            aria-label="Acciones de contacto rápido"
            className="fixed bottom-6 right-5 z-50 flex flex-col gap-2.5 sm:right-7"
        >
            {visible && (
                <button
                    aria-label="Volver al inicio de la página"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#0d1117]/80 text-slate-300 shadow-xl backdrop-blur-md transition hover:border-white/30 hover:text-white"
                    onClick={scrollToTop}
                    type="button"
                >
                    <ArrowUp aria-hidden="true" size={18} strokeWidth={2} />
                </button>
            )}
            <a
                aria-label="Contactar a SPIKEDTECH por WhatsApp"
                className="grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.35)] transition hover:bg-[#20bd5a] hover:shadow-[0_4px_32px_rgba(37,211,102,0.5)]"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                rel="noopener noreferrer"
                target="_blank"
            >
                <MessageCircle aria-hidden="true" size={22} strokeWidth={1.8} />
            </a>
        </div>
    );
}
