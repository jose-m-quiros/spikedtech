import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="contenido" tabIndex={-1}>
      <section className="detail-hero" id="inicio">
        <div className="container">
          <h1>Página no encontrada</h1>
          <p>Explora los servicios de SPIKEDTECH o vuelve al inicio.</p>
          <div className="actions">
            <Link href="/" className="button button-primary"><ArrowLeft size={18} aria-hidden="true" /> Volver al inicio</Link>
            <Link href="/#servicios" className="button button-secondary">Ver servicios</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
