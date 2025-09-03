/* src/pages/robots.txt.ts
 * Robots.txt dinámico — estilo Frevvo (sin archivos en /public)
 */
import type { APIRoute } from 'astro';

let SITE_URL_CONST: string | undefined;
try {
  // @ts-ignore - el proyecto puede o no tener este módulo
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  SITE_URL_CONST = (await import('../../config/index.ts')).SITE_URL as string | undefined;
} catch (_) {
  // sin config, usamos env
}

const site = (SITE_URL_CONST ?? (import.meta.env.SITE_URL as string) ?? 'https://tazqo.com').replace(/\/$/, '');

// Ajusta aquí lo que NO quieres indexar (si hubiera rutas privadas)
const disallow: string[] = [
  // '/admin',
  // '/api',
];

const body = `User-agent: *
Allow: /
${disallow.map((p) => `Disallow: ${p}`).join('\n')}

Sitemap: ${site}/sitemap.xml
`.trim() + "\n";

export const GET: APIRoute = async () => {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
};
