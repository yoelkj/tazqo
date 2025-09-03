// astro.config.mjs
import { defineConfig } from 'astro/config';

// Dominio canónico del sitio (ajústalo si cambias de dominio)
const SITE = 'https://tareas.velcodi.com';

// Export con top-level await para integrar Tailwind solo si está instalado
export default defineConfig(
  await (async () => {
    let tailwind;
    try {
      // Carga opcional: si @astrojs/tailwind no está instalado, seguimos sin integrar
      tailwind = (await import('@astrojs/tailwind')).default;
    } catch {
      // sin tailwind
    }

    return {
      site: SITE,                 // útil para canónicos y generación de URLs
      integrations: [
        // Quita applyBaseStyles si prefieres el preflight por defecto de Tailwind
        ...(tailwind ? [tailwind({ applyBaseStyles: false })] : []),
      ],
      alias: {
        '@': './src',             // import LandingLayout desde "@/layouts/LandingLayout.astro"
      },
      // Puedes agregar aquí otras opciones (image, vite, markdown, etc.)
    };
  })()
);
