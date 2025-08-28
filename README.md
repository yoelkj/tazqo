# 🚀 Tazqo Landing Page

Landing page oficial de **Tazqo**, desarrollada con [Astro](https://astro.build/) y TailwindCSS.  
Optimizada para SEO, velocidad de carga y escalabilidad en despliegues productivos.

---

## ✨ Características principales

- ⚡ **Framework moderno**: Construido con **Astro** para máximo rendimiento y generación estática.
- 🎨 **Estilos profesionales**: UI responsiva y consistente usando **TailwindCSS**.
- 🌍 **Multilenguaje listo**: Estructura pensada para soportar varios idiomas.
- 📈 **SEO optimizado**: Metaetiquetas dinámicas (`title`, `description`, Open Graph, Twitter Card).
- 🛡️ **Accesibilidad (a11y)**: Colores con contraste correcto, navegación por teclado y etiquetas alt.
- 📱 **Responsive Design**: Adaptado para móviles, tablets y desktop.
- 🔧 **Configuración centralizada**: Branding, URLs y contenidos gestionados desde `config/`.
- 🔒 **Producción segura**: Certificado SSL configurado en servidor (Let's Encrypt).

---

## 📂 Estructura del proyecto

```
tazqo-landing/
├── public/             # Archivos estáticos (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── components/     # Componentes Astro (Header, Footer, Hero, etc.)
│   ├── data/           # Datos estáticos (navegación, productos, páginas)
│   ├── layouts/        # Layouts globales (BaseLayout.astro)
│   ├── pages/          # Rutas del sitio (index, contacto, legal, etc.)
│   └── styles/         # Estilos globales con Tailwind y clases personalizadas
├── astro.config.mjs    # Configuración principal de Astro
├── package.json        # Dependencias y scripts
└── tailwind.config.js  # Configuración de TailwindCSS
```

---

## ⚙️ Scripts disponibles

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Generar build de producción
npm run build

# Vista previa de la build
npm run preview
```

---

## 🚀 Deploy

El proyecto puede desplegarse en cualquier servicio estático o SSR, como:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- Hosting propio (Apache/Nginx con Node.js)

---

## 📋 Pendiente

- [ ] Integrar plugin de sitemap (`@astrojs/sitemap`)
- [ ] Completar favicon y `safari-pinned-tab.svg`
- [ ] Ajustar tipografías en header/footer para mejor proporción
- [ ] Añadir enlaces a redes sociales en footer
- [ ] Integrar analítica con [Plausible](https://plausible.io/)
- [ ] Revisión de accesibilidad con Lighthouse

---

## 👨‍💻 Autor

Proyecto desarrollado por **Velcodi**  
🔗 [https://velcodi.com](https://velcodi.com)
