export const categories = [
  { id: "software", label: "Software" },
  { id: "automatizacion", label: "Automatización" },
  { id: "ia", label: "Inteligencia artificial" },
  { id: "seguridad", label: "Ciberseguridad" },
] as const;

type Category = (typeof categories)[number]["id"];

interface Service {
  slug: string;
  category: Category;
  icon: "code" | "workflow" | "network" | "brain" | "shield";
  title: string;
  description: string;
  introduction: string;
  deliverables: string[];
  example: string;
}

export const services: Service[] = [
  {
    slug: "desarrollo-de-software",
    category: "software",
    icon: "code",
    title: "Desarrollo de software a medida",
    description: "Sistemas web y aplicaciones empresariales diseñados alrededor de tus procesos.",
    introduction: "Diseñamos aplicaciones para operaciones que requieren reglas, permisos o flujos específicos. Definimos el alcance contigo y entregamos versiones funcionales para que tu equipo valide el sistema durante el desarrollo.",
    deliverables: ["Aplicaciones web y sistemas internos", "Gestión de usuarios, permisos y flujos de aprobación", "Repositorio, documentación y capacitación para tu equipo"],
    example: "Un portal interno para registrar pedidos, asignar responsables y consultar su estado desde que se reciben hasta que se entregan.",
  },
  {
    slug: "automatizacion-de-procesos",
    category: "automatizacion",
    icon: "workflow",
    title: "Automatización de procesos",
    description: "Flujos que reducen tareas repetitivas y dejan registro de cada operación.",
    introduction: "Revisamos cómo se ejecuta el proceso, dónde se acumulan errores y qué tareas requieren aprobación humana. A partir de ese diagnóstico elegimos entre integraciones directas, automatización de interfaces (RPA) y flujos de trabajo.",
    deliverables: ["Mapa del proceso y tratamiento de excepciones", "Captura de documentos, alertas y generación de reportes", "Registro de ejecuciones y métricas para evaluar el flujo"],
    example: "Recibir facturas por correo, extraer datos, enviarlas a aprobación y registrar las aprobadas en el sistema contable.",
  },
  {
    slug: "integraciones-api-y-dashboards",
    category: "software",
    icon: "network",
    title: "Integraciones API y dashboards",
    description: "Conecta tu ERP, CRM y bases de datos para consultar la operación en un solo lugar.",
    introduction: "Identificamos qué sistema es la fuente de cada dato, cómo se sincroniza la información y qué necesita ver cada equipo. Diseñamos la integración para detectar fallas y recuperar operaciones pendientes.",
    deliverables: ["Conectores para APIs, bases de datos y eventos", "Validación de datos y registros de sincronización", "Paneles con indicadores definidos junto a tu equipo"],
    example: "Cruzar pedidos del ERP con oportunidades del CRM y mostrar ventas, entregas pendientes y alertas en un tablero operativo.",
  },
  {
    slug: "asistentes-de-ia",
    category: "ia",
    icon: "brain",
    title: "Asistentes de IA internos",
    description: "Consulta documentos, manuales y políticas internas con un asistente que cite sus fuentes.",
    introduction: "Construimos asistentes sobre tus fuentes de información. Evaluamos cómo se actualizan los documentos, quién puede consultarlos y cuándo el asistente debe indicar que le falta información.",
    deliverables: ["Búsqueda y recuperación de información en documentos internos", "Respuestas con referencias a las fuentes y controles de acceso", "Pruebas de calidad con preguntas de tu operación"],
    example: "Un asistente para que el equipo de soporte consulte procedimientos internos y encuentre el documento que respalda cada respuesta.",
  },
  {
    slug: "ciberseguridad-cloud",
    category: "seguridad",
    icon: "shield",
    title: "Ciberseguridad cloud",
    description: "Auditorías para detectar riesgos y priorizar mejoras en AWS y Azure.",
    introduction: "Revisamos la configuración de identidades, redes y servicios expuestos dentro del alcance acordado. Priorizamos los hallazgos según su impacto y dejamos pasos concretos para corregirlos.",
    deliverables: ["Revisión de accesos, exposición y configuración", "Hallazgos priorizados con evidencias técnicas", "Plan de remediación y validación de correcciones acordadas"],
    example: "Revisar permisos y repositorios de almacenamiento de un entorno cloud para corregir accesos excesivos y servicios expuestos.",
  },
];
