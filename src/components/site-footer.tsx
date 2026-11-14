import Link from "next/link";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { contactHref, site } from "@/lib/site";
import { services } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-columns">
          <div>
            <Link href="/" aria-label="SPIKEDTECH, inicio"><BrandMark /></Link>
            <p>Software a medida, automatización y seguridad para empresas.</p>
          </div>
          <nav aria-label="Servicios en el pie de página">
            <h2>Servicios</h2>
            <ul>
              {services.map(({ slug, title }) => (
                <li key={slug}><Link href={`/servicios/${slug}`}>{title}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2>Contacto</h2>
            <ul>
              <li><a href={contactHref}><Mail size={15} aria-hidden="true" /> {site.email}</a></li>
              <li><span><MapPin size={15} aria-hidden="true" /> Costa Rica · Latinoamérica</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SPIKEDTECH</p>
          <a href="#inicio">Volver arriba <ArrowUp size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
