// Contenido informativo COPOMA — datos públicos y ejemplos plausibles.
// NADA transaccional. Todo hardcodeado.

export const ORG = {
  nombre: "Comunidad Portuaria de Manzanillo",
  sigla: "COPOMA",
  tipo: "Asociación Civil",
  constituida: "Septiembre 2019",
  tagline: "Coordinación, información y competitividad para el Puerto de Manzanillo",
  ubicacion: "Puerto de Manzanillo, Colima, México",
};

export const PUERTO_STATS = [
  { valor: "+40%", label: "del movimiento nacional de contenedores", nota: "Principal puerto de carga de México" },
  { valor: "3.º", label: "puerto de contenedores en América Latina", nota: "Por volumen operado" },
  { valor: "1.º", label: "recinto de carga de México", nota: "En movimiento total" },
];

export const PUERTO_KPIS = [
  { k: "Contenedores / año", v: "3.7M TEU", sub: "Movimiento anual estimado" },
  { k: "Líneas navieras", v: "28", sub: "Con recalada regular" },
  { k: "Destinos conectados", v: "74", sub: "Puertos en 4 continentes" },
  { k: "Terminales", v: "4", sub: "Especializadas y multipropósito" },
];

export type Estado = "fluida" | "moderada" | "alta";

export const TERMINALES: {
  nombre: string;
  zona: string;
  ocupacion: number; // 0-100
  estado: Estado;
  citas: string;
  actualizado: string;
}[] = [
  { nombre: "Contecon Manzanillo (TEC II)", zona: "Terminal Especializada de Contenedores", ocupacion: 62, estado: "moderada", citas: "Disponibilidad media", actualizado: "Hoy 08:40" },
  { nombre: "SSA México (TEC I)", zona: "Terminal de Contenedores", ocupacion: 81, estado: "alta", citas: "Cupo limitado", actualizado: "Hoy 08:35" },
  { nombre: "OMC — Operadora Multimodal", zona: "Carga general y granel", ocupacion: 44, estado: "fluida", citas: "Amplia disponibilidad", actualizado: "Hoy 08:20" },
  { nombre: "Zona de Fiscalización (Aduana)", zona: "Recinto fiscalizado", ocupacion: 70, estado: "moderada", citas: "Disponibilidad media", actualizado: "Hoy 08:15" },
];

export const ACCESOS = [
  { nombre: "Acceso Norte — Villa de Álvarez", estado: "fluida" as Estado, detalle: "Circulación normal de tractocamiones" },
  { nombre: "Acceso Centro — Blvd. Miguel de la Madrid", estado: "moderada" as Estado, detalle: "Flujo con demoras leves 07–10 h" },
  { nombre: "Corredor Ferroviario", estado: "fluida" as Estado, detalle: "Sin incidencias reportadas" },
];

export const COMITE_EJECUTIVO = {
  nombre: "Comité Ejecutivo",
  desc: "Órgano rector de COPOMA. Coordina a los actores públicos y privados de la comunidad portuaria, fija la agenda estratégica y representa a la asociación ante autoridades.",
  integrantes: [
    "Administración del Sistema Portuario Nacional (ASIPONA)",
    "Terminales y operadores portuarios",
    "Agentes aduanales y navieros",
    "Cámaras y asociaciones de transporte",
  ],
};

export const SUBCOMITES = [
  {
    nombre: "Operativa",
    icon: "contenedor",
    desc: "Optimiza los procesos de carga, descarga y despacho. Da seguimiento a tiempos de estadía, ventanas de atraque y coordinación entre terminales y aduana.",
    focos: ["Tiempos de estadía", "Ventanas de atraque", "Coordinación aduana"],
  },
  {
    nombre: "Movilidad",
    icon: "ruta",
    desc: "Trabaja la fluidez del transporte terrestre y ferroviario. Aborda accesos, corredores logísticos y descongestionamiento vial del entorno portuario.",
    focos: ["Accesos carreteros", "Corredor ferroviario", "Descongestión vial"],
  },
  {
    nombre: "Sustentabilidad",
    icon: "hoja",
    desc: "Impulsa prácticas ambientales responsables: calidad del aire, manejo de residuos y protección del ecosistema de la bahía de Manzanillo.",
    focos: ["Calidad del aire", "Manejo de residuos", "Bahía de Manzanillo"],
  },
  {
    nombre: "Promoción y Facilitación",
    icon: "brujula",
    desc: "Difunde las capacidades del puerto, atrae inversión y facilita trámites. Vincula a la comunidad portuaria con cadenas logísticas nacionales e internacionales.",
    focos: ["Atracción de inversión", "Facilitación de trámites", "Difusión"],
  },
];

export const AVISOS = [
  {
    tag: "Operativa",
    titulo: "Ampliación de ventanas de atraque en TEC II",
    fecha: "2 jul 2026",
    resumen: "A partir de julio, Contecon Manzanillo habilita ventanas adicionales nocturnas para agilizar el despacho de contenedores refrigerados.",
    destacado: true,
  },
  {
    tag: "Movilidad",
    titulo: "Trabajos de repavimentación en Acceso Centro",
    fecha: "28 jun 2026",
    resumen: "Se prevén reducciones de carril sobre el Blvd. Miguel de la Madrid del 5 al 12 de julio. Se recomienda usar el Acceso Norte en horario pico.",
    destacado: false,
  },
  {
    tag: "Sustentabilidad",
    titulo: "Jornada de monitoreo de calidad del aire",
    fecha: "24 jun 2026",
    resumen: "El Sub-Comité de Sustentabilidad presentó los resultados del trimestre con mejora del 6% en partículas suspendidas en la zona de maniobras.",
    destacado: false,
  },
  {
    tag: "Comunidad",
    titulo: "Sesión ordinaria del Comité Ejecutivo",
    fecha: "18 jun 2026",
    resumen: "La comunidad portuaria aprobó la agenda del segundo semestre con foco en digitalización de citas y eficiencia logística.",
    destacado: false,
  },
  {
    tag: "Promoción",
    titulo: "Manzanillo presente en foro logístico nacional",
    fecha: "11 jun 2026",
    resumen: "COPOMA participó en el encuentro de puertos del Pacífico para promover la conectividad multimodal del recinto.",
    destacado: false,
  },
];

export const CONTACTO = {
  direccion: "Recinto Portuario de Manzanillo, Av. Teniente Azueta s/n, Col. Burócrata, C.P. 28250, Manzanillo, Colima, México.",
  telefono: "+52 314 331 0000",
  correo: "contacto@copoma.org.mx",
  horario: "Lun a Vie · 9:00 – 18:00 h (Tiempo del Pacífico)",
  redes: [
    { red: "LinkedIn", handle: "Comunidad Portuaria de Manzanillo" },
    { red: "Facebook", handle: "@COPOMA.Manzanillo" },
    { red: "X", handle: "@COPOMA_mzo" },
  ],
};

export const ESTADO_META: Record<Estado, { label: string; color: string }> = {
  fluida: { label: "Fluida", color: "var(--ok)" },
  moderada: { label: "Moderada", color: "var(--warn)" },
  alta: { label: "Alta", color: "var(--busy)" },
};
