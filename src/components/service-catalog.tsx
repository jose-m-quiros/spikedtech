"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, BrainCircuit, CodeXml, Network, ShieldCheck, Workflow } from "lucide-react";
import { categories, services } from "@/lib/services";

const icons = { code: CodeXml, workflow: Workflow, network: Network, brain: BrainCircuit, shield: ShieldCheck };
const filters = [{ id: "todos", label: "Todos" }, ...categories];

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = icons[service.icon];
  return (
    <article className="service-card">
      <span className="service-icon"><Icon size={22} strokeWidth={1.75} aria-hidden="true" /></span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link href={`/servicios/${service.slug}`} className="service-link" aria-label={`Ver servicio: ${service.title}`}>
        Ver servicio <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}

export function ServiceCatalog() {
  const [selected, setSelected] = useState("todos");
  const visibleServices = selected === "todos" ? services : services.filter(({ category }) => category === selected);

  return (
    <>
      <div role="group" aria-label="Filtrar servicios" className="service-filters">
        {filters.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={selected === id}
            aria-controls="lista-servicios"
            onClick={() => setSelected(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {visibleServices.length === 1 ? "1 servicio disponible." : `${visibleServices.length} servicios disponibles.`}
      </p>
      <ul id="lista-servicios" className="services-grid">
        {visibleServices.map((service) => <li key={service.slug}><ServiceCard service={service} /></li>)}
      </ul>
    </>
  );
}
