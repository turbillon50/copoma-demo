"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IcInicio, IcEstatus, IcComunidad, IcAvisos, IcContacto } from "./Icons";

const items = [
  { href: "/", label: "Inicio", Icon: IcInicio },
  { href: "/estatus", label: "Estatus", Icon: IcEstatus },
  { href: "/comunidad", label: "Comunidad", Icon: IcComunidad },
  { href: "/avisos", label: "Avisos", Icon: IcAvisos },
  { href: "/contacto", label: "Contacto", Icon: IcContacto },
];

export default function BottomNav() {
  const path = usePathname();
  return (
    <nav className="bottomnav" aria-label="Navegación principal">
      {items.map(({ href, label, Icon }) => {
        const active = href === "/" ? path === "/" : path.startsWith(href);
        return (
          <Link key={href} href={href} className={`navitem${active ? " active" : ""}`} aria-current={active ? "page" : undefined}>
            <Icon />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
