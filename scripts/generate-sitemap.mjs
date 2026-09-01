/**
 * Genera public/sitemap.xml con el <lastmod> puesto a la fecha de build.
 *
 * El sitio es una única página, así que el sitemap tiene una sola URL. En vez de
 * mantener la fecha a mano (y que quede desactualizada), se regenera en cada
 * build de produccion: cada deploy relevante coincide con un cambio de contenido.
 */

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

// Configuracion
const SITE_URL = 'https://respirabonito-front.vercel.app/';
const lastmod = new Date().toISOString().slice(0, 10);

// Contenido
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

// Escritura
const here = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(here, '../public/sitemap.xml');
writeFileSync(outPath, xml);
console.log(`sitemap.xml generado con lastmod ${lastmod}`);
