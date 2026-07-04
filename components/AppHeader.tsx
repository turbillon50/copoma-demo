export default function AppHeader({ section }: { section: string }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "14px 18px 12px",
        background: "linear-gradient(180deg, rgba(4,26,51,0.96) 0%, rgba(4,26,51,0.72) 70%, transparent 100%)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <img
        src="/brand/logo-copoma.png"
        alt="COPOMA"
        width={38}
        height={38}
        style={{ width: 38, height: "auto", flexShrink: 0 }}
      />
      <div style={{ lineHeight: 1.15 }}>
        <div style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: 15, letterSpacing: "0.01em" }}>
          COPOMA
        </div>
        <div style={{ fontSize: 10.5, color: "var(--fg-mut)", fontWeight: 600, letterSpacing: "0.02em" }}>
          {section}
        </div>
      </div>
      <span
        aria-hidden
        style={{
          marginLeft: "auto",
          width: 9,
          height: 9,
          borderRadius: 999,
          background: "var(--teal-bright)",
          boxShadow: "0 0 0 4px rgba(43,166,196,0.18)",
        }}
      />
    </header>
  );
}
