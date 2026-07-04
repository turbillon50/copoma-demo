import AppHeader from "@/components/AppHeader";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { IcMegafono } from "@/components/Icons";
import { AVISOS } from "@/lib/data";

const TAG_COLOR: Record<string, string> = {
  Operativa: "#2ba6c4",
  Movilidad: "#7cb6e0",
  Sustentabilidad: "#2fae7a",
  Comunidad: "#d9a441",
  Promoción: "#c58fd9",
};

export default function Avisos() {
  return (
    <>
      <AppHeader section="Comunicados" />
      <main className="page">
        <Reveal>
          <div style={{ paddingTop: 8 }}>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Tablón oficial</div>
            <h1 style={{ fontSize: 22, fontWeight: 700 }}>Avisos y comunicados</h1>
            <p className="soft" style={{ fontSize: 13, marginTop: 8 }}>
              Información publicada por COPOMA y sus sub-comités para la comunidad portuaria.
            </p>
          </div>
        </Reveal>

        <Stagger style={{ marginTop: 20, display: "grid", gap: 12 }}>
          {AVISOS.map((a) => {
            const color = TAG_COLOR[a.tag] ?? "var(--teal-bright)";
            return (
              <Item key={a.titulo}>
                <article
                  className="card"
                  style={{
                    padding: "16px 16px",
                    borderColor: a.destacado ? color : "var(--line)",
                    background: a.destacado
                      ? "linear-gradient(180deg, rgba(43,166,196,0.14), rgba(11,44,82,0.55))"
                      : undefined,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span
                      className="chip"
                      style={{ borderColor: color, color, background: "transparent", fontSize: 11 }}
                    >
                      {a.tag}
                    </span>
                    {a.destacado && (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10.5, fontWeight: 700, color: "var(--teal-bright)" }}>
                        <IcMegafono width={14} height={14} /> Destacado
                      </span>
                    )}
                    <span className="muted" style={{ marginLeft: "auto", fontSize: 11 }}>{a.fecha}</span>
                  </div>
                  <h2 style={{ fontSize: 15.5, fontWeight: 700, lineHeight: 1.3 }}>{a.titulo}</h2>
                  <p className="soft" style={{ fontSize: 12.5, marginTop: 8, lineHeight: 1.5 }}>{a.resumen}</p>
                </article>
              </Item>
            );
          })}
        </Stagger>

        <p className="muted" style={{ fontSize: 10.5, textAlign: "center", marginTop: 22, lineHeight: 1.5 }}>
          Comunicados con fines informativos · Comunidad Portuaria de Manzanillo A.C.
        </p>
      </main>
    </>
  );
}
