import {
    ArrowRight,
    ArrowUpRight,
    BrainCircuit,
    Check,
    Cloud,
    Code2,
    Database,
    GitBranch,
    HelpCircle,
    Layers3,
    LayoutGrid,
    LockKeyhole,
    Plus,
    Server,
    Sparkles,
    Target,
    UsersRound,
} from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import {
    MagneticCard,
    type ServiceCardProps,
} from "@/components/motion/magnetic-card";
import { ProcessTimeline } from "@/components/motion/process-timeline";
import { Reveal } from "@/components/motion/reveal";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GradientBackground } from "@/components/ui/gradient-background";
import { SectionHeader } from "@/components/ui/section-header";

const statistics = [
  { label: "Funcionalidades desarrolladas", prefix: "+", value: 50 },
  { label: "Código propio", suffix: "%", value: 100 },
  { label: "Disponibilidad", precision: 1, suffix: "%", value: 99.9 },
  { label: "Diseño Responsive", suffix: "%", value: 100 },
  { label: "Soporte", suffix: "/7", value: 24 },
];

const values = [
  "Innovación",
  "Calidad",
  "Seguridad",
  "Transparencia",
  "Compromiso",
  "Escalabilidad",
  "Mejora continua",
];

const services: ServiceCardProps[] = [
  {
    accent: "cyan",
    description:
      "Plataformas robustas que ordenan operaciones y convierten procesos complejos en ventaja competitiva.",
    icon: "code",
    title: "Desarrollo de Software Empresarial",
  },
  {
    accent: "sky",
    description:
      "Experiencias web y móviles rápidas, accesibles y preparadas para acompañar el crecimiento del producto.",
    icon: "mobile",
    title: "Desarrollo Web & Apps Móviles",
  },
  {
    accent: "emerald",
    description:
      "Sistemas inteligentes con OpenAI y Ollama que llevan conocimiento útil a los flujos de trabajo.",
    icon: "intelligence",
    title: "Inteligencia Artificial & Modelos LLM (OpenAI, Ollama)",
  },
  {
    accent: "cyan",
    description:
      "Automatización conectada que reduce tareas manuales y da trazabilidad a la operación.",
    icon: "automation",
    title: "Automatización de Procesos & Sistemas de Gestión",
  },
  {
    accent: "sky",
    description:
      "APIs, integraciones y dashboards para que cada equipo decida con información conectada y actualizada.",
    icon: "integration",
    title: "Integraciones API & Dashboards",
  },
  {
    accent: "emerald",
    description:
      "Arquitectura cloud y prácticas de seguridad para operar con confianza en Azure, AWS y GCP.",
    icon: "cloud",
    title: "Ciberseguridad & Infraestructura Cloud (Azure, AWS, GCP)",
  },
];

const technologyGroups = [
  { icon: Code2, name: "Frontend", tools: ["React", "Next.js", "TailwindCSS"] },
  {
    icon: Server,
    name: "Backend",
    tools: ["C#", "ASP.NET Core", "Python", "FastAPI", "Node.js"],
  },
  {
    icon: Database,
    name: "Bases de Datos",
    tools: ["SQL Server", "PostgreSQL"],
  },
  { icon: Cloud, name: "Cloud", tools: ["Azure", "AWS", "GCP"] },
  { icon: GitBranch, name: "DevOps", tools: ["Docker", "GitHub Actions"] },
  { icon: BrainCircuit, name: "IA", tools: ["OpenAI", "Ollama"] },
];

const processSteps = [
  { description: "Análisis del negocio", title: "Reunión inicial" },
  { description: "Alcance y arquitectura", title: "Planificación" },
  { description: "Prototipos modernos", title: "Diseño UX/UI" },
  { description: "Metodologías ágiles", title: "Desarrollo" },
  { description: "Seguridad y rendimiento", title: "Pruebas" },
  { description: "Producción", title: "Despliegue" },
  { description: "Acompañamiento continuo", title: "Soporte" },
];

const team = [
  {
    initials: "JQ",
    name: "José Manuel Quirós Chaves",
    role: "Fundador & Lead Software Engineer",
    specialties: [
      "Arquitectura de Software",
      "Backend",
      "Frontend",
      "IA",
      "DevOps",
      "Ciberseguridad",
    ],
  },
  {
    initials: "PM",
    name: "Project Manager & UX/UI Designer",
    role: "Gestión y experiencia de producto",
    specialties: [
      "Gestión de proyectos",
      "Diseño UX/UI",
      "Control de calidad",
      "Planificación",
    ],
  },
];

const faqItems = [
  {
    answer:
      "Cada solución parte del contexto real del negocio, sus usuarios y sus objetivos. Definimos arquitectura y alcance para que la tecnología responda a una necesidad concreta.",
    question: "¿Cómo construyen soluciones personalizadas?",
  },
  {
    answer:
      "Trabajamos con código limpio, tipado estricto y criterios de calidad que hacen que el producto pueda evolucionar sin perder claridad ni confiabilidad.",
    question: "¿Qué significa código limpio para SPIKEDTECH?",
  },
  {
    answer:
      "Diseñamos arquitecturas escalables, con límites claros entre responsabilidades y capacidad de crecer al ritmo de la operación.",
    question: "¿El software puede crecer con mi negocio?",
  },
  {
    answer:
      "La seguridad desde el diseño forma parte del proceso: revisamos acceso, datos, infraestructura y rendimiento antes de llevar una solución a producción.",
    question: "¿Cómo abordan la seguridad?",
  },
  {
    answer:
      "Priorizamos entregas ágiles, visibilidad continua y validación temprana para convertir el avance técnico en valor comprobable.",
    question: "¿Cómo mantienen entregas ágiles?",
  },
];

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      <GradientBackground />
      <a
        className="sr-only absolute left-4 top-4 z-[60] rounded-md bg-cyan-200 px-4 py-2 text-sm font-semibold text-slate-950 focus:not-sr-only"
        href="#contenido"
      >
        Ir al contenido principal
      </a>
      <Navbar />

      <main id="contenido">
        <section
          className="relative mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pb-16 sm:pt-28 lg:px-10 lg:pb-20 lg:pt-32"
          id="inicio"
        >
          <Reveal className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-300/[0.07] px-3 py-1.5 text-sm font-medium text-cyan-100 backdrop-blur-md">
              <Sparkles aria-hidden="true" size={15} strokeWidth={1.8} />
              Software, IA y seguridad para negocios que avanzan
            </p>
            <h1 className="text-balance max-w-4xl text-4xl font-semibold leading-[1.06] text-white sm:text-6xl lg:text-7xl">
              Transformamos ideas en soluciones digitales de alto impacto.
            </h1>
            <p className="mt-7 text-xl font-medium leading-8 text-cyan-100 sm:text-2xl">
              Innovación, Desarrollo e Inteligencia para el Futuro Digital.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              SPIKEDTECH es una software house especializada en el desarrollo de
              soluciones a medida. Creamos software moderno, seguro y escalable
              mediante IA, automatización y ciberseguridad.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button className="sm:min-w-52" href="#contacto">
                Solicitar una Cotización
                <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
              </Button>
              <Button
                className="sm:min-w-52"
                href="#proceso"
                variant="secondary"
              >
                Agendar una Reunión
                <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2} />
              </Button>
            </div>
          </Reveal>

          <Reveal
            className="hidden border-t border-white/[0.1] pt-7 sm:mt-20 sm:block"
            delay={0.12}
          >
            <p className="max-w-2xl text-sm leading-6 text-slate-400">
              Ingeniería de producto con decisiones trazables, diseño
              intencional y una base técnica preparada para evolucionar.
            </p>
          </Reveal>
        </section>

        <section
          aria-label="Indicadores de SPIKEDTECH"
          className="border-y border-white/[0.09] bg-black/[0.14]"
        >
          <div className="mx-auto grid max-w-7xl divide-y divide-white/[0.09] px-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-5 lg:px-10">
            {statistics.map((statistic) => (
              <div
                className="px-5 py-7 first:pl-0 sm:px-7 sm:first:pl-0 lg:px-6 lg:first:pl-0"
                key={statistic.label}
              >
                <AnimatedCounter {...statistic} />
              </div>
            ))}
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
          id="filosofia"
        >
          <Reveal>
            <SectionHeader
              description="Diseñamos cada proyecto para resolver una necesidad de hoy sin limitar el crecimiento de mañana."
              eyebrow="Nuestra filosofía"
              icon={Target}
              title="Construimos soluciones digitales capaces de hacer crecer negocios."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <Card className="h-full p-6 sm:p-8">
                <span className="grid h-11 w-11 place-items-center rounded-md border border-cyan-200/20 bg-cyan-300/10 text-cyan-100">
                  <Sparkles aria-hidden="true" size={21} strokeWidth={1.7} />
                </span>
                <h3 className="mt-7 text-2xl font-semibold text-white">
                  Misión
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                  Desarrollar soluciones tecnológicas innovadoras que impulsen
                  el crecimiento mediante software seguro y eficiente.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full p-6 sm:p-8">
                <span className="grid h-11 w-11 place-items-center rounded-md border border-emerald-200/20 bg-emerald-300/10 text-emerald-100">
                  <Layers3 aria-hidden="true" size={21} strokeWidth={1.7} />
                </span>
                <h3 className="mt-7 text-2xl font-semibold text-white">
                  Visión
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                  Ser referentes en Latinoamérica en desarrollo de software,
                  automatización e IA.
                </p>
              </Card>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="mt-4 border-y border-white/[0.09] py-7 sm:py-8">
              <p className="mb-5 text-sm font-semibold text-slate-200">
                Valores que sostienen cada entrega
              </p>
              <ul
                className="flex flex-wrap gap-2.5"
                aria-label="Valores de SPIKEDTECH"
              >
                {values.map((value) => (
                  <li
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.035] px-3 py-2 text-sm text-slate-200"
                    key={value}
                  >
                    <Check
                      aria-hidden="true"
                      className="text-cyan-200"
                      size={15}
                      strokeWidth={2.2}
                    />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section
          className="border-y border-white/[0.08] bg-black/[0.13]"
          id="servicios"
        >
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <Reveal>
              <SectionHeader
                description="Unimos visión de negocio, experiencia de usuario e ingeniería para construir productos que resisten el uso real."
                eyebrow="Nuestros servicios"
                icon={LayoutGrid}
                title="Tecnología diseñada para el próximo paso de tu negocio."
              />
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <Reveal delay={index * 0.05} key={service.title}>
                  <MagneticCard {...service} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
          id="tecnologias"
        >
          <Reveal>
            <SectionHeader
              description="Seleccionamos herramientas maduras y mantenibles para construir con velocidad sin comprometer el futuro del producto."
              eyebrow="Stack tecnológico"
              icon={Code2}
              title="Tecnología con criterio de ingeniería."
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/[0.1] bg-white/[0.1] sm:grid-cols-2 lg:grid-cols-3">
            {technologyGroups.map(({ icon: Icon, name, tools }) => (
              <Reveal className="h-full" key={name}>
                <article className="h-full bg-[#090c12]/90 p-6 transition duration-300 hover:bg-[#0c1118] sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-md border border-white/[0.1] bg-white/[0.04] text-cyan-100">
                      <Icon aria-hidden="true" size={18} strokeWidth={1.7} />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{name}</h3>
                  </div>
                  <ul
                    className="mt-6 flex flex-wrap gap-2"
                    aria-label={`Tecnologías de ${name}`}
                  >
                    {tools.map((tool) => (
                      <li
                        className="rounded-full bg-white/[0.06] px-2.5 py-1 text-sm text-slate-300"
                        key={tool}
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="border-y border-white/[0.08] bg-black/[0.13]"
          id="proceso"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <SectionHeader
                  description="Un proceso claro para decidir con información, reducir incertidumbre y llegar a producción con confianza."
                  eyebrow="Proceso de trabajo"
                  icon={GitBranch}
                  title="Avance visible en cada etapa."
                />
                <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
                  <LockKeyhole
                    aria-hidden="true"
                    className="text-cyan-200"
                    size={17}
                    strokeWidth={1.8}
                  />
                  Seguridad y rendimiento integrados desde el inicio.
                </div>
              </div>
            </Reveal>
            <ProcessTimeline steps={processSteps} />
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
          id="equipo"
        >
          <Reveal>
            <SectionHeader
              description="Un equipo compacto, interdisciplinario y cercano a las decisiones que hacen que un producto funcione."
              eyebrow="Nuestro equipo"
              icon={UsersRound}
              title="Personas que convierten estrategia en software."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {team.map((member, index) => (
              <Reveal delay={index * 0.08} key={member.name}>
                <Card className="h-full p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-md border border-cyan-200/20 bg-cyan-300/[0.09] text-sm font-semibold text-cyan-100">
                      {member.initials}
                    </span>
                    <UsersRound
                      aria-hidden="true"
                      className="text-slate-500"
                      size={23}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm text-cyan-100">{member.role}</p>
                  <ul
                    className="mt-7 flex flex-wrap gap-2"
                    aria-label={`Especialidades de ${member.name}`}
                  >
                    {member.specialties.map((specialty) => (
                      <li
                        className="rounded-full border border-white/[0.1] bg-white/[0.035] px-2.5 py-1.5 text-sm text-slate-300"
                        key={specialty}
                      >
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="border-y border-white/[0.08] bg-black/[0.13]"
          id="faq"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-32">
            <Reveal>
              <SectionHeader
                description="Ingeniería pragmática para lograr productos útiles, mantenibles y preparados para operar."
                eyebrow="¿Por qué SPIKEDTECH?"
                icon={HelpCircle}
                title="Una base técnica que permite avanzar con confianza."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="divide-y divide-white/[0.09] rounded-lg border border-white/[0.1] bg-white/[0.025] px-5 backdrop-blur-md sm:px-7">
                {faqItems.map((item) => (
                  <details className="group py-5" key={item.question}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <Plus
                        aria-hidden="true"
                        className="shrink-0 text-cyan-100 transition duration-300 group-open:rotate-45"
                        size={20}
                        strokeWidth={1.8}
                      />
                    </summary>
                    <p className="pr-8 pt-4 text-sm leading-6 text-slate-400">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer
        className="border-t border-white/[0.1] bg-[#040609]"
        id="contacto"
      >
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:px-10 lg:pt-20">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
            <div>
              <BrandMark />
              <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
                Software moderno, seguro y escalable para convertir retos de
                negocio en productos digitales de alto impacto.
              </p>
              <Button className="mt-7" href="#inicio" variant="secondary">
                Volver al inicio
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
              </Button>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">
                Enlaces rápidos
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                {[
                  ["Servicios", "#servicios"],
                  ["Tecnologías", "#tecnologias"],
                  ["Proceso", "#proceso"],
                  ["Equipo", "#equipo"],
                  ["FAQ", "#faq"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a className="transition hover:text-cyan-100" href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">
                Servicios principales
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-5 text-slate-400">
                <li>Software Empresarial</li>
                <li>IA & Automatización</li>
                <li>Integraciones API</li>
                <li>Cloud & Ciberseguridad</li>
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.09] pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Todos los derechos reservados. SPIKEDTECH.</p>
            <p className="inline-flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.7)]"
                aria-hidden="true"
              />
              Sistemas listos para evolucionar
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
