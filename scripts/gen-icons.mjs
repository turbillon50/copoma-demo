import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = "public/brand/logo-copoma.png";
const OUT = "public/icons";
mkdirSync(OUT, { recursive: true });

const NAVY = { r: 5, g: 38, b: 83, alpha: 1 };

async function iconOnNavy(size, pad, file) {
  const inner = Math.round(size * (1 - pad * 2));
  const logo = await sharp(SRC).resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: NAVY } })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(`${OUT}/${file}`);
  console.log("✓", file);
}

await iconOnNavy(192, 0.14, "icon-192.png");
await iconOnNavy(512, 0.14, "icon-512.png");
await iconOnNavy(512, 0.2, "maskable-512.png");

// favicon
await sharp(SRC).resize(48, 48, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toFile(`public/favicon.png`);
console.log("✓ favicon.png");
