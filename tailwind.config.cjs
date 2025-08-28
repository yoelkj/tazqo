/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],

  // Asegura que Tailwind no purgue las clases con CSS vars que usamos
  safelist: [
    "bg-[color:var(--canvas)]",
    "bg-[color:var(--footer-top)]",
    "bg-[color:var(--footer-bottom)]",
    "text-[color:var(--brand-indigo)]",      // si la usas en textos
    "focus-visible:outline-[color:var(--brand-indigo)]",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial"],
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
      boxShadow: {
        // sombras suaves y consistentes para cards
        "elev-1": "0 1px 2px rgba(16,24,40,0.06), 0 1px 1px rgba(16,24,40,0.03)",
        "elev-2": "0 6px 16px rgba(16,24,40,0.08)",
      },
      colors: {
        // Paleta Tazqo alineada al diseño actual
        brand: {
          DEFAULT: "#6659F5",   // morado Tazqo (acento principal)
          indigo:  "#6659F5",
          600:     "#5A4EE8",
          700:     "#4A40D9",
          accent:  "#10B981",   // toques esmeralda usados en el hero
          dark:    "#0F172A",   // texto fuerte
        },
      },
    },
  },
  plugins: [],
};
