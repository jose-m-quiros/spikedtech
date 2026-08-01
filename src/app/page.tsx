import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  FileText,
  GitBranch,
  Github,
  HelpCircle,
  Layers3,
  LayoutGrid,
  LifeBuoy,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Target,
  Unplug,
  Users,
  UsersRound,
  Zap,
} from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import {
  MagneticCard,
  type ServiceCardProps,
} from "@/components/motion/magnetic-card";
import { ProcessTimeline } from "@/components/motion/process-timeline";
import { Reveal } from "@/components/motion/reveal";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FloatContact } from "@/components/ui/float-contact";
import { GradientBackground } from "@/components/ui/gradient-background";
import { SectionHeader } from "@/components/ui/section-header";

const heroMetrics = [
  { label: "Código de tu propiedad", value: "100%" },
  { label: "Dependencias de terceros", note: "No vendor lock-in", value: "0" },
  { label: "Días de garantía técnica", value: "60" },
];

const problems = [
  {
    description:
      "La demanda tecnológica supera la capacidad interna de ejecución. Sin un equipo técnico capaz de diseñar, construir y mantener sistemas robustos, la organización pierde velocidad competitiva.",
    icon: Users,
    title: "Brecha de capacidad técnica",
  },
  {
    description:
      "Los sistemas críticos del negocio (ERP, CRM, plataformas de datos) operan de forma aislada. La falta de interoperabilidad genera reprocesos, inconsistencias y decisiones basadas en información incompleta.",
    icon: Unplug,
    title: "Silos operativos sin interoperabilidad",
  },
  {
    description:
      "La ejecución manual de flujos repetibles consume capacidad humana de alto valor. Esta fricción operativa se acumula como deuda que limita directamente la capacidad de escalar.",
    icon: Clock,
    title: "Deuda operativa sin orquestar",
  },
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
      "Orquestamos y automatizamos flujos operativos completos mediante RPA e integración de sistemas. Desde la captura de documentos hasta la generación de reportes ejecutivos, eliminamos el error humano y liberamos capacidad operativa de alto valor.",
    icon: "automation",
    result: "Reducción medible del costo operativo por proceso automatizado",
    title: "Automatización de Procesos (RPA)",
  },
  {
    accent: "sky",
    description:
      "Diseñamos la capa de integración que conecta tu ecosistema tecnológico: ERP, CRM, bases de datos y plataformas SaaS. El resultado es un flujo de datos unificado con visibilidad ejecutiva en tiempo real.",
    icon: "integration",
    result: "Ecosistema tecnológico interoperable con un único panel de control",
    title: "Integraciones API & Dashboards",
  },
  {
    accent: "emerald",
    description:
      "Desplegamos infraestructura de IA privada (RAG sobre LLMs) que permite a tu equipo consultar bases de conocimiento corporativas con precisión. Decisiones estratégicas basadas en información consolidada, en segundos.",
    icon: "intelligence",
    result: "Recuperación de conocimiento institucional en segundos, con privacidad total",
    title: "Asistentes de IA Internos",
  },
  {
    accent: "sky",
    description:
      "Auditamos tu superficie de ataque en AWS y Azure, identificamos vectores de riesgo activos y cerramos brechas antes de que se conviertan en un incidente. Seguridad como requerimiento de diseño, no como corrección reactiva.",
    icon: "cloud",
    result: "Superficie de ataque auditada y vectores de riesgo mitigados",
    title: "Auditoría y Ciberseguridad Cloud",
  },
];

const guarantees = [
  {
    description:
      "En proyectos de automatización piloto, si no demostramos reducción cuantificable en el tiempo de ejecución del proceso objetivo, el desarrollo final no se factura.",
    icon: Target,
    title: "Garantía de impacto en proyectos piloto",
  },
  {
    description:
      "El código fuente, la arquitectura y la documentación técnica son activos de tu organización desde el día uno. Sin licencias recurrentes, sin dependencia del proveedor.",
    icon: FileText,
    title: "100% de propiedad intelectual transferida",
  },
  {
    description:
      "SLA de 60 días post-despliegue en producción. Cualquier incidencia dentro del alcance construido es resuelta sin costo adicional.",
    icon: LifeBuoy,
    title: "SLA de 60 días post-despliegue",
  },
];

const processSteps = [
  {
    deliverable: "Mapa de arquitectura y diagnóstico de puntos de fricción",
    description:
      "Análisis de la arquitectura existente, mapeo de flujos críticos y diagnóstico de cuellos de botella. Entregable estructurado, sin compromiso contractual.",
    duration: "1–2 días",
    title: "Auditoría Técnica Inicial (Gratis)",
  },
  {
    deliverable: "Documento de alcance, arquitectura propuesta y presupuesto fijo",
    description:
      "Definimos el alcance técnico, la arquitectura de la solución, el cronograma por sprints y el presupuesto cerrado. Sin variaciones una vez acordado.",
    duration: "3–5 días",
    title: "Propuesta Técnica y Alcance Fijo",
  },
  {
    deliverable: "Entregables funcionales por sprint con acceso al repositorio",
    description:
      "Entregas funcionales incrementales cada sprint. El cliente revisa, valida y aprueba antes de avanzar. Control de versiones y documentación desde el inicio.",
    duration: "Según alcance",
    title: "Desarrollo Iterativo con Visibilidad Total",
  },
  {
    deliverable: "Sistema en producción + documentación técnica + capacitación",
    description:
      "Despliegue en producción con hardening de seguridad, capacitación del equipo y entrega completa del repositorio con documentación operativa.",
    duration: "1–3 días",
    title: "Despliegue, Hardening y Transferencia",
  },
];

const team = [
  {
    bio: "Arquitecto de backend con especialización en ciberseguridad y diseño de infraestructuras cloud. Lidera el diseño de sistemas distribuidos, la definición de la arquitectura de seguridad y la estrategia de despliegue de cada proyecto. Su criterio técnico establece el estándar de calidad de cada entrega.",
    github: "https://github.com/",
    initials: "JQ",
    linkedin: "https://linkedin.com/in/",
    name: "José Quirós",
    role: "CEO & Cybersecurity Lead",
    specialties: [
      "Arquitectura",
      "Backend",
      "DevOps",
      "Ciberseguridad",
      "Cloud",
      "Automatización",
    ],
  },
  {
    bio: "Especialista en orquestación de proyectos tecnológicos complejos y arquitectura frontend de alto rendimiento. Garantiza la entrega iterativa dentro del alcance definido y diseña las interfaces que maximizan la adopción del sistema en el equipo del cliente.",
    github: "",
    initials: "JF",
    linkedin: "https://linkedin.com/in/",
    name: "Jesús Franco",
    role: "Project Manager & Frontend Lead",
    specialties: [
      "Gestión de Proyectos",
      "Frontend",
      "UX/UI",
      "Automatización",
      "QA",
      "Planificación",
    ],
  },
];

const faqItems = [
  {
    answer:
      "Depende del alcance y la complejidad de la arquitectura. Integraciones y automatizaciones puntuales pueden estar operativas en 3–4 semanas. Sistemas complejos con múltiples módulos (ERPs, plataformas con IA, sistemas distribuidos) toman entre 2 y 6 meses. La propuesta técnica incluye cronograma por sprints con hitos medibles.",
    question: "¿Cuánto tiempo tarda un proyecto?",
  },
  {
    answer:
      "El costo depende del alcance técnico, el número de integraciones y la complejidad de la arquitectura. Emitimos una estimación detallada después de la auditoría inicial sin costo. El presupuesto acordado en la propuesta es el precio final. Sin costos variables ni sorpresas en producción.",
    question: "¿Cuánto cuesta desarrollar software con SPIKEDTECH?",
  },
  {
    answer:
      "Sí. El código fuente, la documentación técnica y la arquitectura del sistema son propiedad de tu organización desde el inicio. Al cierre entregamos el repositorio completo para que cualquier equipo técnico pueda operar, mantener y extender el sistema de forma autónoma.",
    question: "¿Me entregan el código fuente del proyecto?",
  },
  {
    answer:
      "Ofrecemos un SLA de 60 días post-despliegue en producción. Cualquier incidencia dentro del alcance acordado se corrige sin costo adicional. Para operación continua, disponemos de contratos de mantenimiento y soporte técnico mensual.",
    question: "¿Qué garantías tienen sobre el software entregado?",
  },
  {
    answer:
      "Hemos diseñado e implementado soluciones para organizaciones en retail, logística, salud, finanzas, manufactura y servicios profesionales. La arquitectura se diseña a partir del análisis del proceso de negocio, no de plantillas genéricas. Cada sistema parte de los requerimientos reales de la operación.",
    question: "¿Tienen experiencia en mi industria?",
  },
  {
    answer:
      "Operamos en modalidad 100% remota con clientes en Costa Rica, Panamá, Colombia, México y el resto de Latinoamérica. Utilizamos herramientas de gestión asíncronas y sincrónicas que garantizan visibilidad total del avance del proyecto independientemente de la zona horaria.",
    question: "¿Trabajan con clientes fuera de Costa Rica?",
  },
  {
    answer:
      "La capacitación técnica y operativa está incluida en el despliegue. Entregamos documentación que permite a tu equipo técnico operar, mantener y extender el sistema sin dependencia del proveedor. Esta es parte de nuestra garantía de transferencia de conocimiento.",
    question: "¿Capacitan a nuestro equipo para usar el sistema?",
  },
  {
    answer:
      "Trabajamos con metodología ágil por sprints. Los cambios dentro del alcance acordado se incorporan en el siguiente sprint sin costo adicional. Los cambios que amplían el alcance original se documentan, presupuestan y acuerdan formalmente antes de ejecutarse.",
    question: "¿Qué pasa si el proyecto necesita cambios en el camino?",
  },
  {
    answer:
      "Las arquitecturas que diseñamos son escalables horizontalmente desde el inicio: el sistema puede crecer en volumen de usuarios, transacciones e integraciones sin necesidad de reescribirse. La escalabilidad se define como requerimiento técnico desde la auditoría inicial.",
    question: "¿El software puede crecer con mi empresa?",
  },
  {
    answer:
      "La seguridad es un requerimiento de diseño, no una capa adicional. Implementamos autenticación multifactor, cifrado en reposo y en tránsito, control de acceso basado en roles (RBAC), auditoría de eventos y análisis de vulnerabilidades antes de cada despliegue a producción. Aplicamos las prácticas del OWASP Top 10 y los marcos de seguridad cloud de AWS y Azure.",
    question: "¿Cómo garantizan la seguridad del sistema?",
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
      <FloatContact />

      <main id="contenido">
        {/* HERO */}
        <section
          className="relative mx-auto max-w-7xl px-5 pb-6 pt-14 sm:px-8 sm:pb-10 sm:pt-28 lg:px-10 lg:pb-12 lg:pt-32"
          id="inicio"
        >
          <Reveal className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-300/[0.07] px-3 py-1.5 text-sm font-medium text-cyan-100 backdrop-blur-md">
              <Zap aria-hidden="true" size={14} strokeWidth={2} />
              Tu unidad de ingeniería de software e IA a demanda
            </p>
            <h1 className="text-balance max-w-4xl text-4xl font-semibold leading-[1.06] text-white sm:text-6xl lg:text-7xl">
              Eliminamos la deuda operativa que limita la capacidad de escalar
              de tu empresa.
            </h1>
            <p className="mt-7 text-xl font-medium leading-8 text-cyan-100 sm:text-2xl">
              Accede a una unidad de ingeniería de software e IA de nivel
              enterprise, sin los costos estructurales de un equipo interno.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Auditamos tu arquitectura actual, identificamos los cuellos de
              botella y entregamos la solución técnica que tu operación
              necesita para escalar.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button className="sm:min-w-56" href="#contacto">
                Agendar diagnóstico técnico sin costo
                <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
              </Button>
              <Button
                className="sm:min-w-52"
                href="#servicios"
                variant="secondary"
              >
                Ver nuestras soluciones
                <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2} />
              </Button>
            </div>
          </Reveal>
          <Reveal
            className="mt-12 border-t border-white/[0.1] pt-8"
            delay={0.12}
          >
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {heroMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-3xl font-semibold text-white sm:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    {metric.label}
                    {"note" in metric ? (
                      <span className="ml-1.5 italic text-slate-500">
                        ({metric.note})
                      </span>
                    ) : null}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* PROBLEMAS */}
        <section
          className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12"
          id="problemas"
        >
          <Reveal>
            <SectionHeader
              description="Organizaciones que operan con arquitecturas fragmentadas y procesos sin orquestar sacrifican escalabilidad, continuidad de negocio y retorno sobre sus activos tecnológicos."
              eyebrow="Diagnóstico operativo"
              icon={AlertTriangle}
              title="La deuda técnica y los silos operativos no son problemas de TI. Son riesgos estratégicos para el negocio."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Reveal delay={index * 0.06} key={problem.title}>
                  <div className="flex h-full flex-col gap-4 rounded-lg border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-rose-200/15 bg-rose-400/[0.08] text-rose-300">
                      <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {problem.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-col items-start gap-4 rounded-lg border border-cyan-200/15 bg-cyan-300/[0.04] px-5 py-4 sm:flex-row sm:items-center">
              <CheckCircle2
                aria-hidden="true"
                className="shrink-0 text-cyan-300"
                size={22}
                strokeWidth={1.7}
              />
              <p className="text-sm leading-6 text-slate-300">
                <strong className="font-semibold text-white">
                  SPIKEDTECH opera como tu unidad de ingeniería externa.
                </strong>{" "}
                Sin estructura de nómina, sin intermediarios. Cada requerimiento
                es atendido directamente por los arquitectos responsables del
                sistema.
              </p>
              <Button
                className="ml-auto hidden shrink-0 sm:inline-flex"
                href="#servicios"
                variant="ghost"
              >
                Ver soluciones{" "}
                <ArrowRight aria-hidden="true" size={15} strokeWidth={2} />
              </Button>
            </div>
          </Reveal>
        </section>

        {/* SERVICIOS */}
        <section
          className="border-y border-white/[0.08] bg-black/[0.13]"
          id="servicios"
        >
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
            <Reveal>
              <SectionHeader
                description="Diseñamos e implementamos sistemas que resuelven los cuellos de botella más críticos de la organización, con arquitecturas limpias y propiedad total del código."
                eyebrow="Capacidades técnicas"
                icon={LayoutGrid}
                title="Soluciones de ingeniería con impacto medible en la operación."
              />
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <Reveal delay={index * 0.05} key={service.title}>
                  <MagneticCard {...service} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <div className="mt-10 flex justify-center">
                <Button href="#contacto" variant="secondary">
                  Hablar sobre mi caso
                  <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* GARANTÍA */}
        <section
          className="border-y border-white/[0.08] bg-black/[0.13]"
          id="garantia"
        >
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
            <Reveal>
              <SectionHeader
                description="Nuestros compromisos están estructurados para alinear nuestros incentivos con los resultados de tu negocio, no con la renovación de un contrato."
                eyebrow="Compromisos estructurales"
                icon={ShieldCheck}
                title="Transferencia total de propiedad intelectual. Sin vendor lock-in."
              />
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {guarantees.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal delay={index * 0.06} key={item.title}>
                    <Card className="h-full p-6 sm:p-7">
                      <span className="grid h-11 w-11 place-items-center rounded-md border border-emerald-200/20 bg-emerald-300/[0.08] text-emerald-100">
                        <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
                      </span>
                      <h3 className="mt-5 text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section
          className="border-y border-white/[0.08] bg-black/[0.13]"
          id="proceso"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-8 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-12">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <SectionHeader
                  description="Cada fase tiene un entregable verificable. Sabes qué se está construyendo, en qué etapa está y cuándo lo recibes."
                  eyebrow="Proceso de trabajo"
                  icon={GitBranch}
                  title="Desde la auditoría hasta la producción sin cajas negras."
                />
                <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
                  <LockKeyhole
                    aria-hidden="true"
                    className="text-cyan-200"
                    size={17}
                    strokeWidth={1.8}
                  />
                  Seguridad y rendimiento como requerimientos de diseño desde el primer sprint.
                </div>
                <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
                  <CheckCircle2
                    aria-hidden="true"
                    className="text-emerald-300"
                    size={17}
                    strokeWidth={1.8}
                  />
                  60 días de garantía de funcionamiento post-entrega.
                </div>
              </div>
            </Reveal>
            <ProcessTimeline steps={processSteps} />
          </div>
        </section>

        {/* EQUIPO */}
        <section
          className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12"
          id="equipo"
        >
          <Reveal>
            <SectionHeader
              description="Cada proyecto en SPIKEDTECH es diseñado y ejecutado por los mismos ingenieros con los que te comunicas. Seguridad de nivel enterprise e interfaces de alto rendimiento en la misma cadena de decisión."
              eyebrow="Nuestro equipo"
              icon={UsersRound}
              title="Ingeniería dirigida por sus arquitectos. Sin capas de gestión intermedias."
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
                    <div className="flex gap-2">
                      {member.linkedin ? (
                        <a
                          aria-label={`LinkedIn de ${member.name}`}
                          className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-white/20 hover:text-white"
                          href={member.linkedin}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <Linkedin
                            aria-hidden="true"
                            size={14}
                            strokeWidth={1.8}
                          />
                        </a>
                      ) : null}
                      {member.github ? (
                        <a
                          aria-label={`GitHub de ${member.name}`}
                          className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-white/20 hover:text-white"
                          href={member.github}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <Github
                            aria-hidden="true"
                            size={14}
                            strokeWidth={1.8}
                          />
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-cyan-100">{member.role}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {member.bio}
                  </p>
                  <ul
                    className="mt-6 flex flex-wrap gap-2"
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

        {/* FILOSOFÍA */}
        <section
          className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12"
          id="filosofia"
        >
          <Reveal>
            <SectionHeader
              description="Cada decisión técnica está subordinada a un objetivo de negocio: que el software que construimos genere retorno medible y sostenible."
              eyebrow="Nuestra filosofía"
              icon={Sparkles}
              title="Arquitectura como ventaja competitiva, no como costo operativo."
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
                  Diseñar e implementar soluciones tecnológicas que generen
                  ventaja competitiva real para las organizaciones que las
                  adoptan: sistemas seguros, escalables y construidos para
                  operar sin dependencia de su creador.
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
                  Convertirnos en el socio tecnológico estratégico de
                  referencia para organizaciones en Latinoamérica que compiten
                  con infraestructura de software de nivel enterprise.
                </p>
              </Card>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="mt-4 border-y border-white/[0.09] py-7 sm:py-8">
              <p className="mb-5 text-sm font-semibold text-slate-200">
                Principios que sostienen cada arquitectura
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

        {/* FAQ */}
        <section
          className="border-y border-white/[0.08] bg-black/[0.13]"
          id="faq"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-8 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-12">
            <Reveal>
              <SectionHeader
                description="Las preguntas que hacen los equipos técnicos y directivos antes de tomar una decisión de este tipo. Respondidas sin ambigüedad."
                eyebrow="Rigor técnico"
                icon={HelpCircle}
                title="Respuestas directas a las preguntas que importan."
              />
              <div className="mt-10">
                <Button href="#contacto" variant="secondary">
                  ¿Tienes otra pregunta?
                  <MessageCircle aria-hidden="true" size={16} strokeWidth={2} />
                </Button>
              </div>
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

        {/* CTA BANNER */}
        <section
          aria-labelledby="cta-title"
          className="relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,116,144,0.18),transparent_70%)]"
          />
          <div className="mx-auto max-w-4xl px-5 py-8 text-center sm:px-8 sm:py-12 lg:px-10">
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-300/[0.07] px-3 py-1.5 text-sm font-medium text-cyan-100">
                <Zap aria-hidden="true" size={14} strokeWidth={2} />
                Diagnóstico técnico con los fundadores · Sin costo
              </p>
              <h2
                className="text-balance text-3xl font-semibold text-white sm:text-5xl"
                id="cta-title"
              >
                Tu arquitectura actual tiene un techo. Construyamos el
                siguiente nivel.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Una sesión de 30 minutos con los arquitectos de SPIKEDTECH.
                Auditamos tu infraestructura actual, identificamos los cuellos
                de botella y diseñamos un mapa de ruta técnico para tu próxima
                etapa de crecimiento.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  className="w-full sm:w-auto sm:min-w-56"
                  href="#contacto"
                >
                  Agendar auditoría técnica
                  <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
                </Button>
                <Button
                  className="w-full sm:w-auto sm:min-w-52"
                  href="#servicios"
                  variant="secondary"
                >
                  Ver nuestras soluciones
                  <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2} />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className="border-t border-white/[0.1] bg-[#040609]"
        id="contacto"
      >
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-10 sm:px-8 lg:px-10 lg:pt-14">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <BrandMark />
              <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
                Ingeniería de software e IA para organizaciones que exigen
                escalabilidad, seguridad y propiedad total de su tecnología.
              </p>
              <ul className="mt-7 space-y-3 text-sm text-slate-400">
                <li>
                  {/* ⚠️  Reemplaza con el correo real antes de publicar */}
                  <a
                    className="inline-flex items-center gap-2.5 transition hover:text-cyan-100"
                    href="mailto:contacto@spikedtech.com"
                  >
                    <Mail aria-hidden="true" size={15} strokeWidth={1.8} />
                    contacto@spikedtech.com
                  </a>
                </li>
                <li>
                  {/* ⚠️  Reemplaza con el número real de WhatsApp */}
                  <a
                    className="inline-flex items-center gap-2.5 transition hover:text-cyan-100"
                    href="https://wa.me/50612345678"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Phone aria-hidden="true" size={15} strokeWidth={1.8} />
                    WhatsApp disponible
                  </a>
                </li>
                <li className="inline-flex items-center gap-2.5">
                  <MapPin aria-hidden="true" size={15} strokeWidth={1.8} />
                  Costa Rica &middot; Latinoamérica
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  aria-label="GitHub de SPIKEDTECH"
                  className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-white/20 hover:text-white"
                  href="https://github.com/spikedtech"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github aria-hidden="true" size={16} strokeWidth={1.8} />
                </a>
                <a
                  aria-label="LinkedIn de SPIKEDTECH"
                  className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-white/20 hover:text-white"
                  href="https://linkedin.com/company/spikedtech"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin aria-hidden="true" size={16} strokeWidth={1.8} />
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Navegación</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                {[
                  ["Servicios", "#servicios"],
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
              <h2 className="text-sm font-semibold text-white">Servicios</h2>
              <ul className="mt-5 space-y-3 text-sm leading-5 text-slate-400">
                <li>Software Empresarial</li>
                <li>IA &amp; LLM</li>
                <li>Automatización</li>
                <li>Integraciones API</li>
                <li>Cloud &amp; Ciberseguridad</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Legal</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                <li>
                  <a className="transition hover:text-cyan-100" href="#">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-cyan-100" href="#">
                    Términos de servicio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.09] pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2025 SPIKEDTECH. Todos los derechos reservados.</p>
            <p className="inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.7)]"
              />
              Sistemas operando
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
