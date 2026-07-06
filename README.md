# RespiraBonito · Landing Angular

Landing page de Respira Bonito basada en Angular 21, Angular Material, Tailwind CSS y componentes standalone.

## Cambios SEO, CSS y conversión aplicados

- Head SEO completo en `src/index.html`: title, description, canonical, Open Graph, Twitter cards, theme color y JSON-LD Organization + FAQPage.
- Nuevos archivos públicos: `public/robots.txt`, `public/sitemap.xml`, `public/assets/og-respirabonito.jpg` y `public/assets/apple-touch-icon.png`.
- Hero reescrito con propuesta de valor más clara, CTA menos agresiva y enlaces accesibles.
- Sección anterior de beneficios eliminada del render para mantener la landing más directa.
- Copy reorganizado hacia conversión: método, qué incluye, para quién, Laurem, proceso, FAQ y CTA final.
- CTA sticky móvil para facilitar contacto.
- CSS global con tokens, focus visible, `prefers-reduced-motion`, fondos suaves y overrides de Angular Material sin depender de `!important` para los botones nuevos.
- Imágenes principales convertidas a WebP: `laurem-respirabonito.webp` y `bienestar-integral.webp`.
- Uso de `NgOptimizedImage` en imágenes principales.
- `ChangeDetectionStrategy.OnPush` aplicado en componentes principales.
- Configuración de app extraída a `src/app/app.config.ts`.

## Ejecutar en local

```bash
npm install
npm start
```

Abre `http://localhost:4200`.

## Build

```bash
npm run build
```

En Vercel, usa:

```txt
Framework Preset: Angular
Install Command: npm ci
Build Command: npm run build
Output Directory: dist/lienzo-sol-angular/browser
```

## Pendiente recomendado

Para resolver el problema SEO de CSR puro al 100%, ejecutar en una máquina con internet:

```bash
ng add @angular/ssr
```

Después configurar prerender/SSG estático y confirmar que `dist/lienzo-sol-angular/browser/index.html` contiene el H1 y los textos de la landing sin depender de JavaScript.
