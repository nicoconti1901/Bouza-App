export const siteConfig = {
  name: "Bouza Glatigny",
  tagline: "Higiene y Seguridad",
  description:
    "Consultora de Seguridad e Higiene dedicada a proporcionar servicios integrales que satisfagan plenamente las necesidades del cliente.",
  email: "leandro.bouza@outlook.com",
  phone: "(0297) 155387685",
  phoneHref: "tel:+54297155387685",
  whatsapp: "https://wa.me/54297155387685",
  location: "Comodoro Rivadavia · Patagonia Argentina",
};

export const professional = {
  name: "Leandro Sebastián Bouza",
  license: "COHSECH N°L0006",
  phone: "(0297) 155387685",
  email: "leandro.bouza@outlook.com",
};

export const navLinks = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#profesional", label: "Profesional" },
  { href: "#contacto", label: "Contacto" },
];

export type Service = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: "empresas-industrias",
    title: "Higiene y Seguridad para Empresas e Industrias",
    summary:
      "Asesoramiento integral en prevención de riesgos laborales, cumplimiento normativo y gestión de la seguridad en el trabajo.",
    items: [
      "Planes antisiniestrales",
      "Representación y asistencia ante inspecciones (ART, SRT, Sec. de Trabajo, Municipio)",
      "Relevamiento General de Riesgos Laborales (RGRL Res. 463)",
      "Relevamiento de Agentes de riesgo, exámenes periódicos (RAR Res. 37)",
      "Registro de sustancias Cancerígenas (RSAC Res. 415)",
      "Estudios de carga de fuego y dotación de extintores",
      "Control de equipos e instalaciones contra incendio",
      "Planos de evacuación y planes de emergencia",
      "Auditorías en materia de Higiene y Seguridad",
      "Diseño de procedimientos seguros de trabajo",
      "Estadísticas de accidentabilidad e investigación de accidentes",
      "Cronograma de capacitación anual al personal",
    ],
    image: "/images/servicio-industrial.jpg",
  },
  {
    id: "construccion",
    title: "Higiene y Seguridad para la Construcción",
    summary:
      "Programas de seguridad, avisos de obra y acompañamiento técnico especializado para obras y proyectos de construcción.",
    items: [
      "Confección de programas de seguridad y aviso de obra según Res. 51, Res. 35, Res. 319",
      "Representación y asistencia ante inspecciones",
      "Redacción de normas y procedimientos de seguridad para tareas críticas",
      "Asesoramiento en selección de elementos de protección personal",
      "Capacitación al personal de obra",
      "Asistencia en auditorías a terceros (contratistas, proveedores)",
    ],
    image: "/images/servicio-construccion.jpg",
  },
  {
    id: "capacitacion",
    title: "Capacitación al Personal",
    summary:
      "Diseño y ejecución de planes de capacitación en seguridad, higiene y respuesta ante emergencias.",
    items: [
      "Diseño y ejecución del Plan Anual de Capacitación",
      "Capacitación en primeros auxilios, RCP y DEA",
      "Capacitación y entrenamiento de brigadas de emergencias",
      "Realización de simulacros teórico-prácticos",
    ],
    image: "/images/servicio-capacitacion.jpg",
  },
  {
    id: "mediciones",
    title: "Mediciones del Ambiente Laboral y Ergonómicas",
    summary:
      "Evaluación técnica de condiciones ambientales y ergonómicas del puesto de trabajo según normativa vigente.",
    items: [
      "Niveles de iluminación Res. SRT 84/2012",
      "Niveles de ruido Res. SRT 85/2012",
      "Puesta a tierra y continuidad de masas Res. 900/15",
      "Relevamientos ergonómicos Res. SRT 886/15 y Res. 295/03",
      "Evaluación de riesgos psicosociales",
      "Medición de atmósfera explosiva y condiciones higrométricas",
    ],
    image: "/images/servicio-mediciones.jpg",
  },
  {
    id: "medioambiente",
    title: "Servicios Medioambientales",
    summary:
      "Gestión ambiental, cumplimiento legal y acompañamiento técnico en materia de medio ambiente.",
    items: [
      "Elaboración de línea de base ambiental",
      "Planes de gestión y adecuaciones ambientales",
      "Evaluación de impacto ambiental (EIA)",
      "Desarrollo de planes de residuos",
      "Matrices de cumplimiento legal ambiental",
      "Acompañamiento de inspecciones y auditorías ambientales",
    ],
    image: "/images/servicio-medioambiente.jpg",
  },
  {
    id: "ingenieria",
    title: "Servicios de Ingeniería",
    summary:
      "Soluciones de ingeniería aplicadas a la seguridad y el cumplimiento normativo de instalaciones.",
    items: [
      "Cálculo de estabilidad de tráiler",
      "Proyectos eléctricos",
      "Auditorías eléctricas",
    ],
    image: "/images/servicio-ingenieria.jpg",
  },
];

export const aboutParagraphs = [
  "Somos una consultora de Seguridad e Higiene dedicada a proporcionar servicios integrales que satisfagan plenamente las necesidades del cliente.",
  "Conformada por profesionales especialistas en Seguridad e Higiene en el trabajo, con trayectoria, experiencia y vocación de servicio.",
  "Brindamos soluciones de acuerdo con los estándares de seguridad establecidos por la normativa legal vigente y la política de Seguridad, Higiene y Medio Ambiente de cada empresa.",
];

export const contactServices = [
  "Higiene y Seguridad para empresas e industrias",
  "Higiene y Seguridad para la construcción",
  "Capacitación al personal",
  "Mediciones del ambiente laboral",
  "Servicios medioambientales",
  "Servicios de ingeniería",
  "Otras consultas",
];
