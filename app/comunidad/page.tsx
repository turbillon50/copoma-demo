import AppHeader from "@/components/AppHeader";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { IcContenedor, IcRuta, IcHoja, IcBrujula, IcAncla, IcCheck } from "@/components/Icons";
import { COMITE_EJECUTIVO, SUBCOMITES } from "@/lib/data";

const ICONS: Record<string, (p: { width?: number; height?: number }) => JSX.Element> = {
  contenedor: IcContenedor,
  ruta: IcRuta,
  hoja: IcHoja,
  brujula: IcBrujula,
};

export default function Comunidad() {
  return (
    <>
      <AppHeader section="Estructura" />
      <main className="page">
        <Reveal>
          <div style={{ paddingTop: 8 }}>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Comunidad portuaria</div>
            <h1 style={{ fontSize: 22, fontWeight: 700 }}>Quiénes la integran</h1>
            <p className="soft" style={{ fontSize: 13, marginTop: 8 }}>
              COPOMA articula al sector público y privado del puerto a través de un Comité Ejecutivo y cuatro
              sub-comités de trabajo especializados.
            </p>
          </div>
        </Reveal>

        {/* Comité Ejecutivo */}
        <Reveal delay={0.08}>
          <div
            className="card"
            style={{
              marginTop: 18,
              padding: "17px 17px",
              background: "linear-gradient(180deg, rgba(23,134,162,0.16), rgba(11,44,82,0.6))",
              borderColor: "var(--line-strong)",
            }}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 13,
                  display: "grid",
                  placeItems: "center",
                  background: "rgba(43,166,196,0.18)",
                  color: "var(--teal-bright)",
                  flexShrink: 0,
                }}
              >
                <IcAncla width={24} height={24} />
              </span>
              <div>
                <div style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: 16 }}>
                  {COMITE_EJECUTIVO.nombre}
                </div>
                <div className="muted" style={{ fontSize: 11.5, marginTop: 1 }}>Órgano rector de la asociación</div>
              </div>
            </div>
            <p className="soft" style={{ fontSize: 12.5, marginTop: 12, lineHeight: 1.5 }}>
              {COMITE_EJECUTIVO.desc}
            </p>
            <div className="divider" style={{ margin: "13px 0" }} />
            <div style={{ display: "grid", gap: 8 }}>
              {COMITE_EJECUTIVO.integrantes.map((n) => (
                <div key={n} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--teal-bright)", flexShrink: 0, marginTop: 1 }}>
                    <IcCheck width={16} height={16} />
                  </span>
                  <span style={{ fontSize: 12.5, color: "var(--fg-soft)" }}>{n}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Sub-Comités */}
        <Reveal delay={0.05}>
          <div className="eyebrow" style={{ marginTop: 26, marginBottom: 12 }}>Los 4 Sub-Comités</div>
        </Reveal>
        <Stagger style={{ display: "grid", gap: 12 }}>
          {SUBCOMITES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? IcBrujula;
            return (
              <Item key={s.nombre}>
                <div className="card" style={{ padding: "16px 16px" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        display: "grid",
                        placeItems: "center",
                        background: "var(--teal-soft)",
                        color: "var(--teal-bright)",
                        flexShrink: 0,
                      }}
                    >
                      <Icon width={23} height={23} />
                    </span>
                    <div>
                      <div className="muted" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.1em" }}>
                        SUB-COMITÉ {String(i + 1).padStart(2, "0")}
                      </div>
                      <div style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: 16 }}>{s.nombre}</div>
                    </div>
                  </div>
                  <p className="soft" style={{ fontSize: 12.5, marginTop: 12, lineHeight: 1.5 }}>{s.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 12 }}>
                    {s.focos.map((f) => (
                      <span key={f} className="chip" style={{ fontSize: 11 }}>{f}</span>
                    ))}
                  </div>
                </div>
              </Item>
            );
          })}
        </Stagger>
      </main>
    </>
  );
}
