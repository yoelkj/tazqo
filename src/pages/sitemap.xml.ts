// Genera sitemap SOLO para páginas indexables
import type { APIRoute } from "astro";
import { SITE_URL } from "../config"; // ajusta la ruta si tu config no está en ../config

const base = (SITE_URL || "https://tareas.velcodi.com").replace(/\/+$/, "");

export const GET: APIRoute = async () => {
  // Lista manual de URLs indexables (agrega aquí futuras páginas públicas)
  const urls = [
    { loc: `${base}/`, priority: 1.0 },
    // { loc: `${base}/otra-pagina/`, priority: 0.8 },
  ];

  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (u) => `<url>
      <loc>${u.loc}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${u.priority}</priority>
    </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
