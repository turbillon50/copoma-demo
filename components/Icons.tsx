import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/* ---- Bottom nav ---- */
export const IcInicio = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 2.5 3.5 9.2V21h5.2v-6.1h6.6V21h5.2V9.2z" />
    <path d="M12 12.4v2.5" />
  </svg>
);

export const IcEstatus = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3.6 15.5a9 9 0 0 1 16.8 0" />
    <path d="M12 15.4 15.4 10" />
    <circle cx="12" cy="15.6" r="1.2" fill="currentColor" stroke="none" />
    <path d="M5.4 20.5h13.2" />
  </svg>
);

export const IcComunidad = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="2.7" />
    <path d="M3.7 19.2a5.3 5.3 0 0 1 10.6 0" />
    <circle cx="16.8" cy="9.2" r="2.1" />
    <path d="M15.2 14.2a4.4 4.4 0 0 1 5.1 4.4" />
  </svg>
);

export const IcAvisos = (p: P) => (
  <svg {...base} {...p}>
    <path d="M18 9a6 6 0 1 0-12 0c0 5.2-1.7 6.7-1.7 6.7h15.4S18 14.2 18 9" />
    <path d="M10.2 19a2 2 0 0 0 3.6 0" />
  </svg>
);

export const IcContacto = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 10.5c0 5.2-8 11-8 11s-8-5.8-8-11a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10.3" r="2.6" />
  </svg>
);

/* ---- Decorativos / marítimos ---- */
export const IcAncla = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="4.4" r="1.9" />
    <path d="M12 6.3V21" />
    <path d="M8.4 9.6h7.2" />
    <path d="M4 14.2c0 4 3.6 6.8 8 6.8s8-2.8 8-6.8" />
    <path d="M4 14.2H6.6M20 14.2h-2.6" />
  </svg>
);

export const IcContenedor = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="7.5" width="18" height="10" rx="1" />
    <path d="M7 7.5v10M11 7.5v10M15 7.5v10M19 7.5v-.0" />
    <path d="M7 7.5v10M10 7.5v10M13 7.5v10M16 7.5v10" />
  </svg>
);

export const IcBarco = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 15.5h18l-2 4.2a2 2 0 0 1-1.8 1.1H6.8A2 2 0 0 1 5 19.7z" />
    <path d="M6 15.5V9.5h9l3.4 6" />
    <path d="M10.5 9.5V5.5h2.4l1.6 2" />
  </svg>
);

export const IcBrujula = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.3 8.7-2 4.6-4.6 2 2-4.6z" />
    <path d="M12 3v1.6M12 19.4V21M3 12h1.6M19.4 12H21" />
  </svg>
);

export const IcHoja = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 20c-1-6 2-13 14-14 1 10-4 15-11 14" />
    <path d="M8 17c2-4 5-6 8-7" />
  </svg>
);

export const IcRuta = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="6" cy="18.5" r="2.3" />
    <circle cx="18" cy="5.5" r="2.3" />
    <path d="M8 16.8c2.5-2 3.5-2 5-2 3.5 0 4.5-3.5 3-6.4" />
  </svg>
);

export const IcMegafono = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 10v4a1.5 1.5 0 0 0 1.5 1.5H8l7 4V4.5l-7 4H5.5A1.5 1.5 0 0 0 4 10Z" />
    <path d="M18 9.2a4 4 0 0 1 0 5.6" />
  </svg>
);

export const IcTel = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6.5 4h3l1.4 4-2 1.4a11 11 0 0 0 5.2 5.2l1.4-2 4 1.4v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  </svg>
);

export const IcMail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m3.6 7 8.4 6 8.4-6" />
  </svg>
);

export const IcReloj = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IcFlecha = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IcCheck = (p: P) => (
  <svg {...base} {...p}>
    <path d="m5 12.5 4.5 4.5L19 6.5" />
  </svg>
);
