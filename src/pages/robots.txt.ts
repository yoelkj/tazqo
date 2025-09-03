// src/pages/robots.txt.ts
/**
 * robots.txt dinámico
 * - Prioriza SITE_URL de tu config
 * - Luego PUBLIC_SITE_URL del .env
 * - Y por último el origin del request (fallback)
 */
import type { APIRoute } from "astro";
import { SITE_URL } from "../config"; // <- ruta correcta desde /pages

export const GET: APIRoute = async ({ request }) => {
  const origin = new URL(request.url).origin;

  const base = (
    SITE_URL ||
    (import.meta.env.PUBLIC_SITE_URL as string | undefined) ||
    origin
  )
    .replace(/\/+$/, ""); // sin / final

  // Si alguna ruta debe bloquearse, añade aquí: p.ej. "/admin"
  const DISALLOW: string[] = [
    // "/admin",
    // "/api",
  ];

  const body =
    [
      "User-agent: *",
      "Allow: /",
      ...DISALLOW.map((p) => `Disallow: ${p}`),
      "",
      `Sitemap: ${base}/sitemap.xml`,
      "",
    ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
};
