// Script de deploy — sube el contenido de dist/ al hosting por FTPS
// Uso: npm run deploy
// Requiere: .env con FTP_HOST, FTP_PORT, FTP_USER, FTP_PASS

import { Client } from "basic-ftp";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const DIST_DIR = resolve("dist");
const REMOTE_DIR = process.env.FTP_REMOTE_DIR || "/";

if (!existsSync(DIST_DIR)) {
  console.error("❌ No existe la carpeta dist/. Corré 'npm run build' primero.");
  process.exit(1);
}

const required = ["FTP_HOST", "FTP_PORT", "FTP_USER", "FTP_PASS"];
const missing = required.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(`❌ Faltan variables en .env: ${missing.join(", ")}`);
  process.exit(1);
}

const client = new Client(30_000);
client.ftp.verbose = false;

try {
  console.log(`🔌 Conectando a ${process.env.FTP_HOST}:${process.env.FTP_PORT}...`);
  await client.access({
    host: process.env.FTP_HOST,
    port: Number(process.env.FTP_PORT),
    user: process.env.FTP_USER,
    password: process.env.FTP_PASS,
    secure: true,
    secureOptions: { rejectUnauthorized: false }, // cert self-signed de cPanel
  });
  console.log("✅ Conectado.");

  client.trackProgress((info) => {
    if (info.name) {
      process.stdout.write(`  ⬆ ${info.name} (${info.bytesOverall.toLocaleString()} bytes)\r`);
    }
  });

  console.log(`📦 Subiendo dist/ → ${REMOTE_DIR} ...`);
  const start = Date.now();
  await client.ensureDir(REMOTE_DIR);
  await client.uploadFromDir(DIST_DIR, REMOTE_DIR);
  const elapsed = ((Date.now() - start) / 1000).toFixed(1);

  console.log(`\n✅ Deploy completo en ${elapsed}s.`);
  console.log(`🌐 Verificá el cambio en https://tradeco506.com`);
} catch (err) {
  console.error(`\n❌ Error en el deploy: ${err.message}`);
  process.exit(1);
} finally {
  client.close();
}
