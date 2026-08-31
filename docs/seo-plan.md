# Plan de SEO + análisis de migración a Next.js

Rama: `feature/seo-plan` (creada desde `main`).
Diagnóstico hecho sobre el build de producción real (`ng build --configuration production`),
no sobre suposiciones.

## Diagnóstico actual (verificado)

- **Angular 21, sin SSR ni prerender.** `angular.json` usa el builder
  `@angular-devkit/build-angular:application` sin ninguna opción `ssr`/`prerender`/`server`;
  no hay `server.ts`; `package.json` no tiene `@angular/ssr` ni `@angular/platform-server`.
  Es una SPA 100% cliente.
- **Consecuencia comprobada:** el `<body>` del `index.html` que sale del build de producción
  (`dist/lienzo-sol-angular/browser/index.html`) es literalmente
  `<app-root></app-root>` + dos `<script>`. Cualquier crawler que no ejecute JS (y muchos que
  sí lo hacen, pero con presupuesto de render limitado) no ve ni una palabra del contenido
  hasta que corre `main.js` (~709KB / ~155KB gzip).
- **Es una sola página** (sin Angular Router, no existe `app.routes.ts`; navegación por
  anclas `#metodo`, `#faq`, etc.), así que no hay problema de "rutas sin indexar" — el
  problema es que esa única página depende al 100% de JS para tener contenido.
- **Metadatos ya en buen estado:** `title`, `description`, `canonical`, `robots`, Open
  Graph, Twitter Card y JSON-LD (`Organization` + `FAQPage`) están presentes y correctos en
  `src/index.html`.
- `robots.txt` y `sitemap.xml` existen y son correctos (una única URL, coherente con el
  sitio); el `<lastmod>` del sitemap está fijado a mano (`2026-07-06`) y quedará
  desactualizado.
- Fuentes: no hay `<link>` externo a Google Fonts en el `index.html` — Angular las inlinea
  en build (comportamiento correcto, no bloquea el render).
- CSS crítico ya se inlinea en build (`data-beasties-container` en el `<html>` del dist) —
  optimización ya activa, no hay que tocar nada ahí.
- Imágenes: las que realmente se cargan (hero `hero-yoga-playa.jpg`, 32K; logos en SVG) son
  ligeras. Hay PNGs pesados (hasta 820K) en `public/assets/`, pero pertenecen a componentes
  que no están importados en `app.component.ts` (`experience` usa logos SVG, no esos PNGs) —
  no afectan a lo que carga un visitante, solo ocupan espacio de más en el deploy.
- El dominio actual es un subdominio de Vercel (`respirabonito-front.vercel.app`), no un
  dominio propio.

## Plan de mejora SEO (priorizado)

1. ~~**Crítico — activar SSR/prerender nativo de Angular**~~ **HECHO** (commit `39908cd2`,
   rama `feature/seo-plan`). Se usó `ng add @angular/ssr` + `outputMode: "static"` en
   `angular.json` (la app es una única página 100% prerenderizable, no hace falta un
   servidor Node en producción, solo los ficheros HTML/CSS/JS estáticos ya generados).
   Verificado: el `index.html` de `dist/lienzo-sol-angular/browser/` ya contiene todo el
   contenido real (hero, FAQ, CTAs...) sin depender de JS, y la app hidrata sin errores ni
   duplicados (comprobado con capturas desktop/mobile y dump del DOM tras hidratación).
2. **Ampliar structured data (JSON-LD).** Hoy solo hay `Organization` y `FAQPage`. Añadir
   `EducationalOrganization` o `Course` (más específico para una escuela online) y `sameAs`
   con las redes sociales del proyecto, si existen.
3. **Jerarquía de encabezados.** Ya revisada en `docs/a11y-plan.md` (punto 1: `pain-points`
   sin `<h2>`) — es tanto un problema de accesibilidad como de SEO on-page (Google usa los
   headings para entender la estructura del contenido). Se resuelve con el mismo fix.
4. **Core Web Vitals tras activar SSR.** Con SSR el LCP debería ser la imagen del hero (ya
   tiene `fetchpriority="high"`, correcto); medir con Lighthouse/PageSpeed real tras el punto
   1 y ajustar si hace falta. No adelantar trabajo aquí sin datos post-SSR.
5. **`sitemap.xml` con `lastmod` automático** en vez de fecha fija a mano — generarlo en el
   pipeline de build (o actualizarlo manualmente en cada release relevante) en lugar de
   dejarlo desactualizado indefinidamente.
6. **Dominio propio.** Un dominio propio (en vez del subdominio `*.vercel.app`) pesa más
   para el posicionamiento y la marca que casi cualquier cambio técnico de esta lista. Es
   una decisión de negocio, no de código, pero merece mencionarse porque el impacto es alto.
7. **Opcional / housekeeping.** Eliminar o comprimir los PNGs pesados no usados en
   `public/assets/` — no afecta al SEO real (nunca se cargan), pero reduce el peso del
   deploy.

## ¿Merece la pena migrar a Next.js?

**No.** Con datos concretos del propio repo:

- **El problema real no es "Angular vs Next.js", es la ausencia de SSR** — y Angular tiene
  SSR/SSG de primera clase integrado en el builder estándar desde hace varias versiones (no
  es el antiguo Angular Universal aparte; aquí, con Angular 21, es `ng add @angular/ssr`).
  Activar SSR resuelve el problema real con un comando + build, sin reescribir nada.
- **Coste de una migración completa a Next.js**, medido sobre el código actual:
  - **15.015 líneas** de TS+HTML+SCSS solo en los 22 componentes que se renderizan hoy
    (11 secciones × variante mobile/desktop), a reescribir a JSX/TSX + CSS.
  - **Angular Material en 36 ficheros** (`mat-icon`, y sobre todo `mat-expansion-panel` del
    acordeón de FAQ) — sustituir por una librería React equivalente o un componente propio
    hecho a mano (el acordeón accesible de Material no es trivial de replicar).
  - Reimplementar el patrón `DeviceService` (o eliminarlo a favor de CSS responsive puro,
    lo cual sería buena práctica pero es trabajo adicional no trivial dado que hoy hay
    componentes *-mobile/*-desktop-tablet separados a propósito).
  - Rehacer todo el SEO/meta/JSON-LD actual con la Metadata API de Next.js.
  - Riesgo de regresión visual alto: el diseño usa animaciones CSS a medida, `clamp()` para
    tamaños fluidos, gradientes SVG dinámicos por instancia, mandalas SVG animados y
    scroll-reveal con `animation-timeline: view()` — nada de eso se porta automáticamente,
    hay que revalidar pieza a pieza.
  - Estimación realista: **semanas**, no días, con alto riesgo de introducir bugs visuales
    en un diseño ya pulido.
- **Beneficio de SEO esperado de Next.js sobre "Angular con SSR activado": prácticamente
  ninguno.** Ambos sirven HTML con el contenido completo ya renderizado; Google indexa igual
  de bien cualquiera de los dos si el HTML de respuesta contiene el contenido real. La fama
  de Next.js en SEO viene de que trae SSR *por defecto de fábrica* y la comunidad lo da por
  sentado — no de una capacidad técnica que Angular no tenga disponible.
- **Cuándo sí tendría sentido reconsiderar Next.js:** si el sitio crece a un blog/CMS con
  muchas páginas indexables, necesita rutas i18n complejas, o el equipo decide adoptar React
  por razones de producto/equipo ajenas al SEO. Ninguno de esos casos aplica hoy.

**Recomendación:** activar SSR/SSG nativo de Angular (bajo coste, alto impacto) en vez de
migrar de framework.

## Cómo retomarlo otro día

```
git checkout feature/seo-plan
```

Pedir a Claude: "sigue el plan de docs/seo-plan.md, aplica el punto 1 (SSR)" (o el punto que
toque). El plan no ha tocado código todavía — es solo el documento.
