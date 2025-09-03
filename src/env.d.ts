/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Tipado de tus variables de entorno (públicas y privadas del server)
interface ImportMetaEnv {
  // SEO / base URL
  readonly PUBLIC_SITE_URL?: string;
  readonly SITE_URL?: string; // privada (solo server)

  // Analytics
  readonly PUBLIC_GA_ID?: string;
  readonly PUBLIC_GTM_ID?: string;

  // Contacto / WhatsApp
  readonly PUBLIC_WA_NUMBER?: string;
  readonly PUBLIC_WA_MSG?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_TEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
