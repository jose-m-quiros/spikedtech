import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarCheck,
  Check,
  CheckCircle2,
  Clock,
  FileText,
  GitBranch,
  Github,
  GraduationCap,
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
  TrendingDown,
  Unplug,
  Users,
  UsersRound,
  Zap,
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
import { FloatContact } from "@/components/ui/float-contact";
import { GradientBackground } from "@/components/ui/gradient-background";
import { SectionHeader } from "@/components/ui/section-header";

const statistics = [
  { label: "proyectos entregados", prefix: "+", value: 25 },
  {
    label: "módulos funcionales construídos",
    prefix: "+",
    value: 300,
  },
  { label: "satisfacción del cliente", suffix: "%", value: 98 },
  { label: "proyectos con código documentado", suffix: "%", value: 100 },
  { label: "días de garantía post-entrega", value: 60 },
];

const problems = [
  {
    description:
      "Tareas repetitivas que consumen horas del equipo cada día y generan errores costosos. Los automatizamos.",
    icon: Clock,
    title: "Procesos manuales que frenan el crecimiento",
  },
  {
    description:
      "Sistemas viejos que no escalan, no se integran y bloquean cualquier mejora operativa.",
    icon: AlertTriangle,
    title: "Software heredado o desactualizado",
  },
  {
    description:
      "Decisiones tomadas sin datos confiables porque la información está dispersa en hojas de cálculo.",
    icon: BarChart3,
    title: "Sin visibilidad real del negocio",
  },
  {
    description:
      "Herramientas que no se hablan entre sí. Tu equipo copia datos manualmente entre sistemas.",
    icon: Unplug,
    title: "Integraciones que fallan o no existen",
  },
  {
    description:
      "No tienes capacidad interna para desarrollar, mantener ni evolucionar el software que el negocio exige.",
    icon: Users,
    title: "Sin equipo técnico propio",
  },
  {
    description:
      "El negocio crece pero la tecnología no acompaña. Cada cambio pequeño requiere semanas de trabajo.",
    icon: TrendingDown,
    title: "Crecimiento sin infraestructura técnica",
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
      "Eliminamos ineficiencias operativas con plataformas que automatizan, integran y escalan con tu negocio.",
    icon: "code",
    result: "Hasta 70% menos tiempo en operaciones manuales",
    title: "Desarrollo de Software Empresarial",
  },
  {
    accent: "sky",
    description:
      "Experiencias web y móviles rápidas que convierten visitantes en clientes y retienen usuarios.",
    icon: "mobile",
    result: "Productos listos para producción en semanas",
    title: "Desarrollo Web & Apps Móviles",
  },
  {
    accent: "emerald",
    description:
      "Modelos LLM (OpenAI, Ollama) integrados en tus flujos para automatizar análisis, soporte y decisiones.",
    icon: "intelligence",
    result: "Hasta 5× más capacidad con el mismo equipo",
    title: "Inteligencia Artificial & LLM",
  },
  {
    accent: "cyan",
    description:
      "RPA y sistemas de gestión que eliminan tareas repetitivas y dan trazabilidad completa a la operación.",
    icon: "automation",
    result: "+300 transacciones automáticas diarias posibles",
    title: "Automatización de Procesos",
  },
  {
    accent: "sky",
    description:
      "Conectamos tus sistemas y centralizamos la información para que cada decisión se tome con datos reales.",
    icon: "integration",
    result: "Visibilidad total del negocio en un solo lugar",
    title: "Integraciones API & Dashboards",
  },
  {
    accent: "emerald",
    description:
      "Arquitectura cloud segura (Azure, AWS, GCP) con auditorías de seguridad y cumplimiento desde el inicio.",
    icon: "cloud",
    result: "99.9% uptime con infraestructura auditada",
    title: "Cloud & Ciberseguridad",
  },
];

const differentiators = [
  {
    description:
      "Cada proyecto incluye documentación técnica y manual de usuario para que tu equipo sea autónomo.",
    icon: FileText,
    title: "Documentación completa",
  },
  {
    description:
      "Diseñamos pensando en el futuro. Tu sistema puede crecer sin necesidad de reescribirse.",
    icon: Layers3,
    title: "Arquitectura que escala",
  },
  {
    description:
      "Seguridad integrada en cada capa: autenticación, cifrado, auditoría y control de acceso.",
    icon: ShieldCheck,
    title: "Seguridad desde el diseño",
  },
  {
    description:
      "Cronograma claro, presupuesto fijo y actualización semanal del avance sin sorpresas.",
    icon: CalendarCheck,
    title: "Entregas sin sorpresas",
  },
  {
    description:
      "Enseñamos a tu equipo a usar y mantener lo que construimos. La autonomía es parte del entregable.",
    icon: GraduationCap,
    title: "Capacitación incluida",
  },
  {
    description:
      "60 días de garantía de funcionamiento post-entrega más soporte continuo según el proyecto.",
    icon: LifeBuoy,
    title: "Soporte post-entrega",
  },
];

const processSteps = [
  {
    deliverable: "Brief técnico del proyecto",
    description: "Entendemos tu negocio, tus procesos y tus objetivos reales.",
    duration: "1–2 días",
    title: "Reunión inicial",
  },
  {
    deliverable: "Propuesta + cronograma detallado",
    description:
      "Definimos alcance, arquitectura, tecnología y estimación de tiempos.",
    duration: "3–5 días",
    title: "Planificación",
  },
  {
    deliverable: "Prototipo en Figma",
    description:
      "Prototipos navegables de alta fidelidad antes de escribir una sola línea de código.",
    duration: "1–2 semanas",
    title: "Diseño UX/UI",
  },
  {
    deliverable: "Demos semanales del avance",
    description:
      "Iteraciones ágiles con entrega continua. Ves el progreso cada semana.",
    duration: "Según alcance",
    title: "Desarrollo",
  },
  {
    deliverable: "Reporte de QA y seguridad",
    description:
      "Pruebas funcionales, de seguridad y rendimiento antes de ir a producción.",
    duration: "3–7 días",
    title: "Pruebas",
  },
  {
    deliverable: "Sistema en producción + código fuente",
    description:
      "Publicación en el entorno definitivo con zero-downtime deployment.",
    duration: "1–2 días",
    title: "Despliegue",
  },
  {
    deliverable: "Canal de soporte dedicado",
    description:
      "60 días de garantía de funcionamiento y acompañamiento post-entrega.",
    duration: "60 días garantía",
    title: "Soporte",
  },
];

const team = [
  {
    bio: "Lidera la estrategia de ciberseguridad de SPIKEDTECH, impulsando el desarrollo de soluciones seguras con un enfoque en backend, arquitectura de software, pruebas de seguridad, automatización e implementación de buenas prácticas para aplicaciones empresariales.",
    github: "https://github.com/",
    initials: "JM",
    linkedin: "https://linkedin.com/in/",
    name: "Jose Quiros",
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
    bio: "Responsable de la gestión de clientes, planificación de proyectos y desarrollo de interfaces modernas. Lidera la experiencia del cliente desde el levantamiento de requerimientos hasta la entrega final, integrando desarrollo frontend, automatizaciones y soluciones centradas en el usuario.",

    github: "",
    initials: "JF",
    linkedin: "",
    name: "Jesús Franco",
    role: "Project Manager & Frontend Lead",

    specialties: [
      "Gestión de Clientes",
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
      "Depende del alcance. Proyectos simples como una landing o una API básica pueden estar listos en 3–4 semanas. Sistemas complejos como ERPs o plataformas con IA suelen tomar entre 2 y 6 meses. En la propuesta te damos un cronograma detallado con hitos.",
    question: "¿Cuánto tiempo tarda un proyecto?",
  },
  {
    answer:
      "Varía según la complejidad, las integraciones y el número de módulos. Ofrecemos una estimación sin costo después de la reunión inicial. Lo que nunca cambia: el precio acordado en la propuesta es el precio final.",
    question: "¿Cuánto cuesta desarrollar software con SPIKEDTECH?",
  },
  {
    answer:
      "Sí. El código fuente es tuyo desde el primer día. Al cerrar el proyecto, entregamos el repositorio completo con documentación técnica para que tu equipo o cualquier otro desarrollador pueda continuarlo.",
    question: "¿Me entregan el código fuente del proyecto?",
  },
  {
    answer:
      "Ofrecemos 60 días de garantía de funcionamiento post-entrega. Cualquier error o falla en lo construído lo corregimos sin costo adicional. Para soporte continuo, tenemos planes de mantenimiento mensual.",
    question: "¿Qué garantías tienen sobre el software entregado?",
  },
  {
    answer:
      "Sí, hemos trabajado con empresas de retail, logística, salud, finanzas, manufactura y servicios profesionales. El software que construimos parte del análisis del negocio, no de plantillas genéricas.",
    question: "¿Tienen experiencia en mi industria?",
  },
  {
    answer:
      "Sí. Trabajamos 100% en modalidad remota con clientes en Costa Rica, Panamá, Colombia, México y más países de Latinoamérica. Usamos herramientas de colaboración y comunicación semanal para mantener total visibilidad.",
    question: "¿Trabajan con clientes fuera de Costa Rica?",
  },
  {
    answer:
      "Incluimos capacitación para el equipo usuario al momento de la entrega. También entregamos documentación que permite a tu equipo usar, mantener y evolucionar el sistema de forma autónoma.",
    question: "¿Capacitan a nuestro equipo para usar el sistema?",
  },
  {
    answer:
      "Usamos metodologías ágiles, por lo que los cambios se incorporan de forma controlada en el siguiente sprint. Los cambios dentro del alcance original no tienen costo adicional. Los que amplían el alcance se presupuestan y acuerdan antes de implementarse.",
    question: "¿Qué pasa si el proyecto necesita cambios en el camino?",
  },
  {
    answer:
      "Diseñamos arquitecturas escalables desde el inicio. Tu sistema puede crecer en usuarios, volumen de datos e integraciones sin necesidad de reescribirse. Esto lo definimos como parte del análisis técnico inicial.",
    question: "¿El software puede crecer con mi empresa?",
  },
  {
    answer:
      "La seguridad es parte del diseño, no un extra. Implementamos autenticación robusta, cifrado de datos, control de acceso por roles, auditoría de eventos y revisamos vulnerabilidades antes de cada entrega a producción.",
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
          className="relative mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pb-16 sm:pt-28 lg:px-10 lg:pb-20 lg:pt-32"
          id="inicio"
        >
          <Reveal className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-300/[0.07] px-3 py-1.5 text-sm font-medium text-cyan-100 backdrop-blur-md">
              <Zap aria-hidden="true" size={14} strokeWidth={2} />
              Proyectos entregados en tiempo y dentro del presupuesto
            </p>
            <h1 className="text-balance max-w-4xl text-4xl font-semibold leading-[1.06] text-white sm:text-6xl lg:text-7xl">
              Automatizamos los procesos que frenan el crecimiento de tu
              empresa.
            </h1>
            <p className="mt-7 text-xl font-medium leading-8 text-cyan-100 sm:text-2xl">
              Software personalizado con IA para empresas que necesitan escalar
              sin aumentar la carga operativa.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Identificamos los cuellos de botella de tu negocio y construimos
              el software que los resuelve. Sin soluciones genéricas, sin
              dependencias, con código que es tuyo desde el primer día.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button className="sm:min-w-56" href="#contacto">
                Quiero automatizar mi empresa
                <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
              </Button>
              <Button
                className="sm:min-w-52"
                href="#servicios"
                variant="secondary"
              >
                Ver nuestros servicios
                <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2} />
              </Button>
            </div>
          </Reveal>
          <Reveal
            className="hidden border-t border-white/[0.1] pt-7 sm:mt-20 sm:block"
            delay={0.12}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Empresas que ya operan con software de SPIKEDTECH
            </p>
            {/* ⚠️  Reemplaza con logos reales de clientes */}
            <div className="flex flex-wrap items-center gap-8 opacity-35">
              {["Cliente A", "Cliente B", "Cliente C", "Cliente D"].map((c) => (
                <span
                  className="text-sm font-bold tracking-wide text-slate-300"
                  key={c}
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* STATS */}
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

        {/* PROBLEMAS */}
        <section
          className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20"
          id="problemas"
        >
          <Reveal>
            <SectionHeader
              description="Si alguno de estos escenarios describe tu empresa, llegaste al lugar correcto."
              eyebrow="¿Te identificas con esto?"
              icon={AlertTriangle}
              title="Los problemas que más frenan el crecimiento de las empresas."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Reveal delay={index * 0.05} key={problem.title}>
                  <div className="flex h-full gap-4 rounded-lg border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-sm">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-md border border-rose-200/15 bg-rose-400/[0.08] text-rose-300">
                      <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {problem.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-slate-400">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col items-start gap-4 rounded-lg border border-cyan-200/15 bg-cyan-300/[0.04] px-5 py-4 sm:flex-row sm:items-center">
              <CheckCircle2
                aria-hidden="true"
                className="shrink-0 text-cyan-300"
                size={22}
                strokeWidth={1.7}
              />
              <p className="text-sm leading-6 text-slate-300">
                <strong className="font-semibold text-white">
                  SPIKEDTECH resuelve estos problemas
                </strong>{" "}
                con software a medida, sin dependencias de terceros y con código
                documentado que queda en tus manos.
              </p>
              <Button
                className="ml-auto hidden shrink-0 sm:inline-flex"
                href="#servicios"
                variant="ghost"
              >
                Ver cómo{" "}
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
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
            <Reveal>
              <SectionHeader
                description="No trabajamos con plantillas. Cada solución parte del análisis real de tu negocio y se construye para resolverlo."
                eyebrow="Nuestros servicios"
                icon={LayoutGrid}
                title="¿Qué podemos construir para tu empresa?"
              />
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <Reveal delay={index * 0.05} key={service.title}>
                  <MagneticCard {...service} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <div className="mt-10 flex justify-center">
                <Button href="#contacto" variant="secondary">
                  Hablar sobre mi proyecto
                  <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* POR QUÉ SPIKEDTECH */}
        <section
          className="border-y border-white/[0.08] bg-black/[0.13]"
          id="porque"
        >
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
            <Reveal>
              <SectionHeader
                description="Lo que nos diferencia no está en el marketing. Está en cómo trabajamos, en lo que entregamos y en cómo te acompañamos."
                eyebrow="¿Por qué SPIKEDTECH?"
                icon={Target}
                title="Razones concretas para elegirnos."
              />
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal delay={index * 0.04} key={item.title}>
                    <Card className="h-full p-5">
                      <span className="grid h-10 w-10 place-items-center rounded-md border border-cyan-200/20 bg-cyan-300/[0.08] text-cyan-100">
                        <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
                      </span>
                      <h3 className="mt-5 font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
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
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-20">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <SectionHeader
                  description="Sabes exactamente en qué etapa estás, qué se está construyendo y cuándo lo recibirás."
                  eyebrow="Proceso de trabajo"
                  icon={GitBranch}
                  title="Sin incertidumbre. Avance visible en cada etapa."
                />
                <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
                  <LockKeyhole
                    aria-hidden="true"
                    className="text-cyan-200"
                    size={17}
                    strokeWidth={1.8}
                  />
                  Seguridad y rendimiento integrados desde el primer día.
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
          className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20"
          id="equipo"
        >
          <Reveal>
            <SectionHeader
              description="Un equipo interdisciplinario que convierte la estrategia en software que funciona."
              eyebrow="Nuestro equipo"
              icon={UsersRound}
              title="Las personas detrás de cada proyecto."
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
          className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20"
          id="filosofia"
        >
          <Reveal>
            <SectionHeader
              description="Detrás de cada decisión técnica hay un propósito: que el software que construimos genere valor real y duradero."
              eyebrow="Nuestra filosofía"
              icon={Sparkles}
              title="Construimos para el presente, diseñamos para el futuro."
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
                  Desarrollar soluciones tecnológicas que impulsen el
                  crecimiento de las empresas mediante software seguro,
                  eficiente y diseñado para escalar.
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
                  Ser el socio tecnológico de referencia en Latinoamérica para
                  empresas que quieren crecer con software inteligente,
                  automatizado y seguro.
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

        {/* FAQ */}
        <section
          className="border-y border-white/[0.08] bg-black/[0.13]"
          id="faq"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-20">
            <Reveal>
              <SectionHeader
                description="Preguntas reales que nos hacen antes de contratar. Respondidas con claridad."
                eyebrow="Preguntas frecuentes"
                icon={HelpCircle}
                title="Todo lo que necesitas saber antes de empezar."
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
          <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-20 lg:px-10">
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-300/[0.07] px-3 py-1.5 text-sm font-medium text-cyan-100">
                <Zap aria-hidden="true" size={14} strokeWidth={2} />
                Diagnóstico inicial sin costo
              </p>
              <h2
                className="text-balance text-3xl font-semibold text-white sm:text-5xl"
                id="cta-title"
              >
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Agenda una reunión gratuita de 30 minutos. Analizamos tu caso,
                identificamos los cuellos de botella y te entregamos una
                propuesta sin compromisos.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  className="w-full sm:w-auto sm:min-w-56"
                  href="#contacto"
                >
                  Agendar reunión gratuita
                  <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
                </Button>
                <Button
                  className="w-full sm:w-auto sm:min-w-52"
                  href="#servicios"
                  variant="secondary"
                >
                  Ver nuestros servicios
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
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:px-10 lg:pt-20">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <BrandMark />
              <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
                Software personalizado con IA y automatización para empresas que
                necesitan crecer sin aumentar la carga operativa.
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

