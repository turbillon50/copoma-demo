import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import Splash from "@/components/Splash";
import SWRegister from "@/components/SWRegister";

export const metadata: Metadata = {
  title: "COPOMA — Comunidad Portuaria de Manzanillo",
  description:
    "Portal informativo de la Comunidad Portuaria de Manzanillo A.C. (COPOMA): estatus operativo del puerto, sub-comités, avisos y contacto.",
  manifest: "/manifest.json",
  applicationName: "COPOMA",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "COPOMA",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#052653",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Splash />
        <div className="shell">{children}</div>
        <BottomNav />
        <SWRegister />
      </body>
    </html>
  );
}
