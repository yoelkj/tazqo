// === Impuestos ===
export const TAX = {
  igvRate: 0.18,
  includesIGV: false,
  note: "Precios en PEN. No incluyen IGV (18%).", // <- úsalo en la UI
};

// === Branding ===
export const BRAND = {
  name: "Tazqo",
  domain: "tareas.velcodi.com", // sin protocolo
  locale: "es-PE",
  currency: "PEN",
  logo: "/brand/tazqo-logo.svg",
};

// === URL base del sitio ===
export const SITE_URL =
  import.meta.env.PUBLIC_SITE_URL ?? "https://tareas.velcodi.com";

// === Contacto (WhatsApp, email, tel) ===
const WA_NUMBER = import.meta.env.PUBLIC_WA_NUMBER ?? "51900000000";
const WA_MSG    = import.meta.env.PUBLIC_WA_MSG ?? "Hola Tazqo, quiero información";

// UTM para identificar origen de clics desde la landing
const UTM = "?utm_source=landing&utm_medium=cta&utm_campaign=whatsapp";

// Mensaje final: saludo + URL del sitio con UTM (para tracking real)
const WA_TEXT = `${WA_MSG} ${SITE_URL}${UTM}`;

export const CONTACT = {
  email: import.meta.env.PUBLIC_CONTACT_EMAIL ?? "hola@tazqo.com",
  tel:   import.meta.env.PUBLIC_TEL ?? "+51 900 000 000",
  whatsappUrl: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`,
};

// (Opcional) Helper si quieres variar el utm_content por botón/ubicación
export function buildWhatsAppUrl(utmContent = "") {
  const extra = utmContent ? `&utm_content=${encodeURIComponent(utmContent)}` : "";
  const txt = `${WA_MSG} ${SITE_URL}${UTM}${extra}`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(txt)}`;
}
