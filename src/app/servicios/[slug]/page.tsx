import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) notFound();

  const path = `/servicios/${service.slug}`;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_CR",
      siteName: site.name,
      title: `${service.title} | ${site.name}`,
      description: service.description,
      url: path,
      images: [{ url: site.socialImage, width: 1200, height: 630, alt: site.name }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) notFound();

  return (
    <main id="contenido" tabIndex={-1}>
      <section id="inicio" className="detail-hero" aria-labelledby="service-title">
        <div className="container">
          <Link className="detail-back" href="/#servicios"><ArrowLeft size={17} aria-hidden="true" /> Todos los servicios</Link>
          <h1 id="service-title">{service.title}</h1>
          <p>{service.description}</p>
          <div className="actions">
            <Link href="/#contacto" className="button button-primary">Solicitar diagnóstico <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <section className="section section-light" aria-labelledby="deliverables-title">
        <div className="container detail-layout">
          <div className="detail-copy">
            <h2 id="deliverables-title">Qué incluye</h2>
            <p>{service.introduction}</p>
            <ul className="deliverables">
              {service.deliverables.map((item) => <li key={item}><Check size={19} aria-hidden="true" /> {item}</li>)}
            </ul>
          </div>
          <aside className="example" aria-labelledby="example-title">
            <h2 id="example-title">Ejemplo de aplicación</h2>
            <p>{service.example}</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
