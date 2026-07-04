import AppHeader from "@/components/AppHeader";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { IcContacto, IcTel, IcMail, IcReloj, IcBarco } from "@/components/Icons";
import { CONTACTO, ORG } from "@/lib/data";

const rows = [
  { Icon: IcContacto, label: "Dirección", value: CONTACTO.direccion, href: undefined },
  { Icon: IcTel, label: "Teléfono", value: CONTACTO.telefono, href: `tel:${CONTACTO.telefono.replace(/\s/g, "")}` },
  { Icon: IcMail, label: "Correo", value: CONTACTO.correo, href: `mailto:${CONTACTO.correo}` },
  { Icon: IcReloj, label: "Horario de atención", value: CONTACTO.horario, href: undefined },
];

export default function Contacto() {
  return (
    <>
      <AppHeader section="Contacto" />
      <main className="page">
        <Reveal>
          <div style={{ paddingTop: 8 }}>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Estamos para servir</div>
            <h1 style={{ fontSize: 22, fontWeight: 700 }}>Contacto e información</h1>
            <p className="soft" style={{ fontSize: 13, marginTop: 8 }}>
              {ORG.nombre} A.C. · {ORG.ubicacion}
            </p>
          </div>
        </Reveal>

        {/* Mapa estático estilizado */}
        <Reveal delay={0.08}>
          <div
            className="card"
            style={{
              marginTop: 16,
              height: 168,
              overflow: "hidden",
              position: "relative",
              display: "grid",
              placeItems: "center",
              background:
                "repeating-linear-gradient(90deg, rgba(120,170,210,0.06) 0 1px, transparent 1px 34px)," +
                "repeating-linear-gradient(0deg, rgba(120,170,210,0.06) 0 1px, transparent 1px 34px)," +
                "radial-gradient(320px 200px at 60% 30%, rgba(23,134,162,0.35), transparent 70%)," +
                "linear-gradient(180deg, #0a366e, #052653)",
            }}
          >
            {/* bahía estilizada */}
            <svg viewBox="0 0 300 170" width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.5 }} aria-hidden>
              <path d="M0 120 Q 80 90 150 118 T 300 108 L300 170 L0 170 Z" fill="rgba(3,20,42,0.6)" />
              <path d="M0 120 Q 80 90 150 118 T 300 108" fill="none" stroke="rgba(43,166,196,0.5)" strokeWidth="1.4" />
            </svg>
            <div style={{ position: "relative", textAlign: "center", zIndex: 2 }}>
              <span
                style={{
                  display: "inline-grid",
                  placeItems: "center",
                  width: 46,
                  height: 46,
                  borderRadius: 999,
                  background: "var(--teal)",
                  color: "#fff",
                  boxShadow: "0 8px 24px rgba(0,0,0,.4), 0 0 0 6px rgba(43,166,196,.18)",
                }}
              >
                <IcBarco width={24} height={24} />
              </span>
              <div style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: 13.5, marginTop: 10 }}>
                Recinto Portuario de Manzanillo
              </div>
              <div className="muted" style={{ fontSize: 11 }}>Manzanillo, Colima · 19.05° N, 104.31° O</div>
            </div>
          </div>
        </Reveal>

        {/* Datos */}
        <Stagger style={{ marginTop: 14, display: "grid", gap: 10 }}>
          {rows.map(({ Icon, label, value, href }) => {
            const inner = (
              <div className="card" style={{ padding: "13px 15px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    display: "grid",
                    placeItems: "center",
                    background: "var(--teal-soft)",
                    color: "var(--teal-bright)",
                    flexShrink: 0,
                  }}
                >
                  <Icon width={20} height={20} />
                </span>
                <div style={{ minWidth: 0 }}>
                  <div className="muted" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {label}
                  </div>
                  <div style={{ fontSize: 13, marginTop: 3, lineHeight: 1.4, color: "var(--fg)" }}>{value}</div>
                </div>
              </div>
            );
            return <Item key={label}>{href ? <a href={href}>{inner}</a> : inner}</Item>;
          })}
        </Stagger>

        {/* Redes */}
        <Reveal delay={0.05}>
          <div className="eyebrow" style={{ marginTop: 24, marginBottom: 12 }}>Redes sociales</div>
        </Reveal>
        <Stagger style={{ display: "grid", gap: 9 }}>
          {CONTACTO.redes.map((r) => (
            <Item key={r.red}>
              <div className="card" style={{ padding: "12px 15px", display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(255,255,255,0.05)",
                    color: "var(--teal-bright)",
                    fontFamily: '"Sora", sans-serif',
                    fontWeight: 700,
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  {r.red[0]}
                </span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600 }}>{r.red}</div>
                  <div className="muted" style={{ fontSize: 11.5 }}>{r.handle}</div>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>

        <p className="muted" style={{ fontSize: 10.5, textAlign: "center", marginTop: 24, lineHeight: 1.5 }}>
          © 2026 Comunidad Portuaria de Manzanillo A.C.<br />Portal informativo · Datos de contacto de ejemplo.
        </p>
      </main>
    </>
  );
}
