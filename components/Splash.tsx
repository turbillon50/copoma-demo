"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Splash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 22,
            background:
              "radial-gradient(700px 500px at 50% 40%, #0a366e 0%, #052653 45%, #03142a 100%)",
          }}
        >
          <motion.img
            src="/brand/logo-copoma.png"
            alt="COPOMA"
            width={116}
            height={116}
            initial={{ scale: 0.82, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ width: 116, height: "auto", filter: "drop-shadow(0 12px 30px rgba(0,0,0,.45))" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            style={{ textAlign: "center" }}
          >
            <div
              style={{
                fontFamily: '"Sora", sans-serif',
                fontWeight: 700,
                fontSize: 19,
                letterSpacing: "0.02em",
                color: "#eaf2fb",
              }}
            >
              COPOMA
            </div>
            <div style={{ fontSize: 12, color: "#9fb6cf", marginTop: 4, letterSpacing: "0.04em" }}>
              Comunidad Portuaria de Manzanillo
            </div>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            style={{
              width: 90,
              height: 3,
              borderRadius: 999,
              transformOrigin: "left",
              background: "linear-gradient(90deg, #1786a2, #2ba6c4)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
