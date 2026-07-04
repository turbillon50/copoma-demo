import AppHeader from "@/components/AppHeader";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { IcReloj, IcRuta } from "@/components/Icons";
import { TERMINALES, ACCESOS, ESTADO_META } from "@/lib/data";

export default function Estatus() {
  return (
    <>
      <AppHeader section="Estatus operativo" />
      <main className="page">
        <Reveal>
          <div style={{ paddingTop: 8 }}>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Tablero de saturación</div>
            <h1 style={{ fontSize: 22, fontWeight: 700 }}>Disponibilidad del puerto</h1>
            <p className="soft" style={{ fontSize: 13, marginTop: 8 }}>
              Nivel de ocupación estimado por terminal y zona de operación del Puerto de Manzanillo.
            </p>
          </div>
        </Reveal>

        {/* Aviso informativo */}
        <Reveal delay={0.08}>
          <div
            style={{
              marginTop: 14,
              padding: "11px 13px",
              borderRadius: 13,
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              background: "rgba(217,164,65,0.10)",
              border: "1px solid rgba(217,164,65,0.3)",
            }}
          >
            <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 1 }}>
              <IcReloj width={18} height={18} />
            </span>
            <p style={{ fontSize: 11.5, color: "#e7d4a8", lineHeight: 1.45 }}>
              <strong style={{ color: "#f2e2bd" }}>Informativo.</strong> Estos indicadores se actualizan
              <strong> manualmente por COPOMA</strong> como referencia visual. No constituyen reservación
              ni asignación de citas.
            </p>
          </div>
        </Reveal>

        {/* Terminales */}
        <Stagger style={{ marginTop: 20, display: "grid", gap: 12 }}>
          {TERMINALES.map((t) => {
            const meta = ESTADO_META[t.estado];
            return (
              <Item key={t.nombre}>
                <div className="card" style={{ padding: "15px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.25 }}>{t.nombre}</div>
                      <div className="muted" style={{ fontSize: 11.5, marginTop: 2 }}>{t.zona}</div>
                    </div>
                    <span
                      className="chip"
                      style={{ flexShrink: 0, borderColor: meta.color, color: meta.color, background: "transparent" }}
                    >
                      <span style={{ width: 7, height: 7, borderRadius: 999, background: meta.color }} />
                      {meta.label}
                    </span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 14, marginBottom: 6 }}>
                    <span className="muted" style={{ fontSize: 11.5 }}>Ocupación estimada</span>
                    <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: 17, color: meta.color }}>
                      {t.ocupacion}%
                    </span>
                  </div>
                  <div className="gaugebar">
                    <span style={{ width: `${t.ocupacion}%`, background: `linear-gradient(90deg, ${meta.color}, ${meta.color}cc)` }} />
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 11 }}>
                    <span className="soft" style={{ fontSize: 11.5, fontWeight: 600 }}>{t.citas}</span>
                    <span className="muted" style={{ fontSize: 11 }}>Actualizado: {t.actualizado}</span>
                  </div>
                </div>
              </Item>
            );
          })}
        </Stagger>

        {/* Accesos */}
        <Reveal delay={0.05}>
          <div className="eyebrow" style={{ marginTop: 26, marginBottom: 12 }}>Accesos y corredores</div>
        </Reveal>
        <Stagger style={{ display: "grid", gap: 10 }}>
          {ACCESOS.map((a) => {
            const meta = ESTADO_META[a.estado];
            return (
              <Item key={a.nombre}>
                <div className="card" style={{ padding: "13px 15px", display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ color: "var(--teal-bright)", flexShrink: 0 }}><IcRuta width={22} height={22} /></span>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.25 }}>{a.nombre}</div>
                    <div className="muted" style={{ fontSize: 11.5, marginTop: 2 }}>{a.detalle}</div>
                  </div>
                  <span style={{ flexShrink: 0, width: 9, height: 9, borderRadius: 999, background: meta.color, boxShadow: `0 0 0 4px ${meta.color}22` }} />
                </div>
              </Item>
            );
          })}
        </Stagger>

        <p className="muted" style={{ fontSize: 10.5, textAlign: "center", marginTop: 22, lineHeight: 1.5 }}>
          Referencia visual de disponibilidad · Última carga manual: Hoy 08:40 h
        </p>
      </main>
    </>
  );
}
