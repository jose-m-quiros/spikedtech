import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, FileCode2, LifeBuoy, Mail, MapPin, Plus, ScanLine } from "lucide-react";
import { ServiceCatalog } from "@/components/service-catalog";
import { contactHref, site } from "@/lib/site";

const commitments = [
  { icon: FileCode2, title: "Tu equipo es dueño del código", text: "Repositorio y documentación técnica" },
  { icon: ScanLine, title: "Diagnóstico inicial sin costo", text: "Identificamos prioridades contigo" },
  { icon: LifeBuoy, title: "60 días de garantía técnica", text: "Sobre el alcance acordado" },
];

const steps = [
  { title: "Diagnóstico", text: "Revisamos tus procesos y sistemas para decidir contigo qué conviene resolver primero." },
  { title: "Propuesta", text: "Acordamos entregables, arquitectura, cronograma y presupuesto antes de desarrollar." },
  { title: "Desarrollo", text: "Entregamos avances funcionales por etapas para que tu equipo los pruebe y valide." },
  { title: "Puesta en marcha", text: "Desplegamos la solución y entregamos el repositorio, la documentación y la capacitación." },
];

const team = [
  { initials: "JQ", name: "José Quirós", role: "CEO y líder de ciberseguridad", text: "Diseña la arquitectura backend, define los controles de seguridad y lidera los despliegues cloud." },
  { initials: "JF", name: "Jesús Franco", role: "Gestión de proyectos y liderazgo frontend", text: "Coordina las entregas con el cliente y diseña interfaces que los equipos puedan usar en su operación diaria." },
];

const questions = [
  { title: "¿Cuánto tarda un proyecto?", text: "Una integración o automatización puntual puede tomar de tres a cuatro semanas. Un sistema con varios módulos puede requerir de dos a seis meses. La propuesta detalla el plazo y los hitos según el alcance." },
  { title: "¿Cómo se define el presupuesto?", text: "Tras el diagnóstico inicial preparamos una propuesta con entregables, tiempos y precio. Si se solicita trabajo fuera del alcance, lo cotizamos antes de ejecutarlo." },
  { title: "¿Qué recibe mi equipo al terminar?", text: "Recibes el código fuente, el repositorio, la documentación técnica y capacitación para que tu equipo pueda operar y mantener la solución." },
  { title: "¿Ofrecen soporte después del lanzamiento?", text: "Sí. Durante los 60 días posteriores al despliegue atendemos incidencias dentro del alcance acordado. También ofrecemos mantenimiento para proyectos que requieren soporte continuo." },
  { title: "¿Trabajan con empresas fuera de Costa Rica?", text: "Sí. Atendemos proyectos de forma remota en Costa Rica y Latinoamérica, con revisiones y seguimiento acordados desde el inicio." },
];

export default function HomePage() {
  return (
    <main id="contenido" tabIndex={-1}>
      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow"><MapPin size={15} aria-hidden="true" /> Costa Rica · Atención en Latinoamérica</p>
            <h1 id="hero-title">Software a medida para <span>tu empresa.</span></h1>
            <p className="hero-description">Desarrollamos sistemas que conectan tus herramientas, automatizan tareas y protegen la información de tu negocio.</p>
            <div className="actions">
              <a className="button button-primary" href="#contacto">Solicitar diagnóstico <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a className="button button-secondary" href="#servicios">Explorar servicios <ArrowDown size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/infraestructura.webp"
              alt=""
              fill
              preload
              sizes="(max-width: 719px) calc(100vw - 40px), (max-width: 1220px) 46vw, 550px"
            />
          </div>
        </div>
        <ul className="container commitments" aria-label="Compromisos con tu proyecto">
          {commitments.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <span><Icon size={21} strokeWidth={1.75} aria-hidden="true" /></span>
              <div><strong>{title}</strong><p>{text}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section id="servicios" className="section section-light" aria-labelledby="services-title">
        <div className="container">
          <div className="section-intro">
            <h2 id="services-title">Servicios de ingeniería de software</h2>
            <p>Encuentra el servicio que mejor encaja con el reto de tu operación.</p>
          </div>
          <ServiceCatalog />
        </div>
      </section>

      <section id="proceso" className="section section-white" aria-labelledby="process-title">
        <div className="container">
          <div className="section-intro">
            <h2 id="process-title">Del diagnóstico al lanzamiento</h2>
            <p>Tu equipo participa desde la primera revisión hasta la entrega.</p>
          </div>
          <ol className="process-grid">
            {steps.map(({ title, text }, index) => (
              <li key={title}>
                <span aria-hidden="true">{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="equipo" className="section section-light" aria-labelledby="team-title">
        <div className="container team-layout">
          <div className="section-intro">
            <h2 id="team-title">Conoce al equipo</h2>
            <p>Trabaja directamente con quienes diseñan y construyen tu solución.</p>
          </div>
          <div className="team-grid">
            {team.map(({ initials, name, role, text }) => (
              <article className="team-card" key={name}>
                <span aria-hidden="true">{initials}</span>
                <h3>{name}</h3>
                <p className="team-role">{role}</p>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section section-white" aria-labelledby="faq-title">
        <div className="container faq-layout">
          <div className="section-intro">
            <h2 id="faq-title">Preguntas frecuentes</h2>
            <a className="service-link" href="#contacto">Haznos otra pregunta <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="faq-list">
            {questions.map(({ title, text }) => (
              <details key={title}>
                <summary>{title}<Plus size={19} aria-hidden="true" /></summary>
                <p>{text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="section section-light contact-section" aria-labelledby="contact-title">
        <div className="container">
          <div className="contact-panel">
            <div>
              <h2 id="contact-title">Hablemos de tu proyecto</h2>
              <p>Cuéntanos qué quieres resolver. En el diagnóstico inicial revisamos tu reto y definimos contigo el siguiente paso.</p>
            </div>
            <div>
              <p className="contact-detail"><Check size={18} aria-hidden="true" /> Sesión inicial de 30 minutos sin costo</p>
              <a className="button button-primary" href={`${contactHref}?subject=Solicitud%20de%20diagn%C3%B3stico`}><Mail size={18} aria-hidden="true" /> Solicitar por correo</a>
              <a className="contact-email" href={contactHref}>{site.email}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
