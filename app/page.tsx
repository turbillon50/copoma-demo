import Link from "next/link";
import AppHeader from "@/components/AppHeader";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { IcContenedor, IcBarco, IcFlecha, IcMegafono, IcReloj } from "@/components/Icons";
import { ORG, PUERTO_STATS, PUERTO_KPIS, AVISOS } from "@/lib/data";

export default function Inicio() {
  const destacado = AVISOS.find((a) => a.destacado) ?? AVISOS[0];

  return (
    <>
      <AppHeader section="Portal informativo" />
      <main className="page">
        {/* HERO */}
        <Reveal>
          <section
            style={{
              textAlign: "center",
              padding: "18px 6px 8px",
            }}
          >
            <img
              src="/brand/logo-copoma.png"
              alt="Comunidad Portuaria de Manzanillo"
              width={96}
              height={96}
              style={{ width: 96, height: "auto", margin: "0 auto 16px", filter: "drop-shadow(0 10px 26px rgba(0,0,0,.4))" }}
            />
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              Asociación Civil · Manzanillo
            </div>
            <h1 style={{ fontSize: 25, lineHeight: 1.18, fontWeight: 700 }}>
              Comunidad Portuaria<br />de Manzanillo
            </h1>
            <p className="soft" style={{ fontSize: 13.5, marginTop: 12, maxWidth: 340, marginInline: "auto" }}>
              {ORG.tagline}. Coordinamos a los actores públicos y privados del recinto más importante de México.
            </p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }}>
              <span className="chip">Constituida {ORG.constituida}</span>
              <span className="chip">Puerto de Manzanillo, Colima</span>
            </div>
          </section>
        </Reveal>

        {/* BANNER COMUNICADO */}
        <Reveal delay={0.1}>
          <Link href="/avisos">
            <div
              className="card"
              style={{
                marginTop: 20,
                padding: "14px 15px",
                display: "flex",
                gap: 12,
                alignItems: "center",
                borderColor: "var(--line-strong)",
                background: "linear-gradient(180deg, rgba(23,134,162,0.16), rgba(11,44,82,0.55))",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  display: "grid",
                  placeItems: "center",
                  background: "rgba(43,166,196,0.16)",
                  color: "var(--teal-bright)",
                }}
              >
                <IcMegafono width={22} height={22} />
              </span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.12em", color: "var(--teal-bright)", textTransform: "uppercase" }}>
                  Comunicado · {destacado.tag}
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 600, marginTop: 2, lineHeight: 1.3 }}>
                  {destacado.titulo}
                </div>
              </div>
              <IcFlecha width={20} height={20} style={{ marginLeft: "auto", flexShrink: 0, color: "var(--fg-mut)" }} />
            </div>
          </Link>
        </Reveal>

        {/* CIFRAS DEL PUERTO */}
        <div style={{ marginTop: 26 }}>
          <Reveal delay={0.05}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>El Puerto de Manzanillo</div>
          </Reveal>
          <Stagger style={{ display: "grid", gap: 10 }}>
            {PUERTO_STATS.map((s) => (
              <Item key={s.label}>
                <div className="card" style={{ padding: "15px 16px", display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      fontFamily: '"Sora", sans-serif',
                      fontWeight: 700,
                      fontSize: 26,
                      color: "var(--teal-bright)",
                      minWidth: 74,
                    }}
                  >
                    {s.valor}
                  </div>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.3 }}>{s.label}</div>
                    <div className="muted" style={{ fontSize: 11.5, marginTop: 2 }}>{s.nota}</div>
                  </div>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>

        {/* KPIs GRID */}
        <Stagger style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {PUERTO_KPIS.map((k, i) => (
            <Item key={k.k}>
              <div className="card" style={{ padding: "14px 14px", height: "100%" }}>
                <span style={{ color: "var(--teal-bright)" }}>
                  {i % 2 === 0 ? <IcContenedor width={22} height={22} /> : <IcBarco width={22} height={22} />}
                </span>
                <div style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: 20, marginTop: 10 }}>{k.v}</div>
                <div style={{ fontSize: 12, fontWeight: 600, marginTop: 2 }}>{k.k}</div>
                <div className="muted" style={{ fontSize: 11, marginTop: 3 }}>{k.sub}</div>
              </div>
            </Item>
          ))}
        </Stagger>

        {/* CTA a estatus */}
        <Reveal delay={0.1}>
          <Link href="/estatus">
            <div
              className="card"
              style={{
                marginTop: 14,
                padding: "15px 16px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ color: "var(--teal-bright)" }}><IcReloj width={22} height={22} /></span>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>Estatus operativo del puerto</div>
                <div className="muted" style={{ fontSize: 11.5 }}>Saturación y disponibilidad por terminal</div>
              </div>
              <IcFlecha width={20} height={20} style={{ marginLeft: "auto", color: "var(--fg-mut)" }} />
            </div>
          </Link>
        </Reveal>

        <p className="muted" style={{ fontSize: 10.5, textAlign: "center", marginTop: 22, lineHeight: 1.5 }}>
          Portal informativo oficial de la Comunidad Portuaria de Manzanillo A.C.<br />
          Datos con fines informativos.
        </p>
      </main>
    </>
  );
}
