# Plan de accesibilidad (a11y)

Rama: `feature/accesibilidad-a11y` (creada desde `main`).
Revisión hecha sobre los 21 componentes que realmente renderiza `app.component.html`
(landmarks/headings, `aria-*`, imágenes, foco, contraste de color, `prefers-reduced-motion`,
enlaces/botones). Nada especulativo: cada punto tiene el fichero y la línea de origen.

## Crítico (rompe para lector de pantalla / teclado)

1. ~~**`aria-labelledby` roto en `pain-points`**~~ **HECHO** (en el trabajo de SEO, commit
   `b5e7a96a`, ya en `main`). Se añadió
   `<h2 id="bloqueos-title">¿Te suena alguna de estas situaciones?</h2>` en los dos
   componentes `pain-points-*`.

2. ~~**Contraste insuficiente en texto real con verde salvia `#6f8f6c`**~~ **HECHO.**
   Verificado ~3.6:1 sobre blanco (falla AA). Se cambia el verde de texto a `#4f6b4c`
   (~5.7:1 sobre `--rb-cream`, cumple AA):
   - `--rb-green` en `styles.scss:16` (solo lo usa `.rb-guiding-purpose__kicker` en los dos
     ficheros; los iconos decorativos usan el hex literal, no la variable).
   - `color: #6f8f6c` → `#4f6b4c` en `guiding-purpose-{mobile,desktop-tablet}.scss:356`
     (`.rb-guiding-purpose__facet--body`, hereda a `<small>conectar</small>`; el
     `<span>Cuerpo</span>` ya iba en `--rb-ink`) y en
     `process-{mobile,desktop-tablet}.scss:37` (`.rb-journey-merged__kicker`).
   - Los usos decorativos de `#6f8f6c` (gradientes, `--pair-accent`, iconos con
     `aria-hidden`) se dejan igual.

3. ~~**Falta `prefers-reduced-motion` en el hero**~~ **HECHO** (consistencia; la regla global
   de `styles.scss:250` sobre `*,*::before,*::after` ya neutralizaba las animaciones, así que
   el impacto real era bajo). Añadido bloque
   `@media (prefers-reduced-motion: reduce)` en `hero-{mobile,desktop-tablet}.scss` que pone
   `animation: none` en `.rb-hero__copy`, `.rb-hero__glow--one/two` y
   `.rb-hero__scroll-cue::after`, y fija `.rb-hero__copy` a `opacity:1; transform:none`.

## Importante

4. ~~**Enlace "Contacto" del footer sin aviso de apertura en pestaña nueva**~~ **HECHO.**
   Añadido `aria-label="Contacto: abrir formulario externo (se abre en una pestaña nueva)"`
   en `footer-mobile.component.html` y `footer-desktop-tablet.component.html`. Sin icono para
   no meter `MatIconModule` en el footer (hoy solo tiene enlaces de texto).

5. ~~**Botón secundario del hero (`.rb-hero__secondary-button`) sobre foto**~~ **OBSOLETO.**
   Verificado en la app real: el hero **ya no tiene botones** (`hero-*.component.html` solo
   renderiza `<h1>` + `<p class="rb-hero-lead">`). La regla `.rb-hero__secondary-button` en
   el SCSS es estilo muerto. No se toca. Ver punto 8 (el problema real de contraste del hero
   está en el texto, no en un botón).

## Deseable (pulido, no bloqueante)

6. ~~**Skip-link "Saltar al contenido"**~~ **HECHO.** `<a class="rb-skip-link" href="#contenido">`
   como primer elemento de `app.component.html`; `<main>` pasa a `<main id="contenido">`.
   Estilo `.rb-skip-link` en `styles.scss` (oculto con `translateY(-150%)`, visible al
   recibir foco).

7. **`deliverables.component.scss` tiene `outline: none`** sin sustituto de foco — pero
   `deliverables/` tampoco se importa en `app.component.ts` (código muerto, igual que
   `header/`, `opportunity/`, `final-cta/`, `achievements/`, `testimonials/`,
   `wellness-break/`, `school-content/`, `purpose/`, `story/`). No tocar salvo que se pida
   limpiar código muerto aparte.

## Hallazgos de la auditoría automatizada (axe-core 4.10, 2026-09-01)

Ejecutada con axe sobre el build servido en local (`app-root` como contexto).

8. ~~**`aria-label` en `<div>` sin `role` (aria-prohibited-attr, 10 nodos)**~~ **HECHO.**
   axe no garantiza que un lector de pantalla anuncie `aria-label` en un `div` genérico.
   Añadido `role="group"` a los contenedores de agrupación (`.laurem-story__chapters`,
   `.rb-guiding-purpose__promise`, `.rb-yinyang__board`, `.rb-process__group-message`,
   `.laurem-story__authority-logos`) y `role="img"` a las composiciones visuales
   (`.journey-stage`/`.journey-mobile-stage`, `.rb-guiding-purpose__visual`), en los pares
   mobile/desktop.

9. ~~**`<aside>` anidado dentro de `<main>` (landmark-complementary-is-top-level)**~~ **HECHO.**
   `<aside class="laurem-story__authority">` de `experience-{mobile,desktop-tablet}` pasa a
   `<div>` (contenía el `<h2>` principal de la sección, no era contenido complementario).

10. ~~**Contraste del texto del hero sobre la foto**~~ **HECHO** (combinación de las tres
    vías, midiendo píxeles reales tras cada iteración):
    - `.rb-hero__overlay`: gradiente base más oscuro (`.28 / .24@42% / .50@100%` de
      `rgba(31,23,27)`), en `hero-{mobile,desktop-tablet}.scss` y su override de
      `@media (max-width: 640px)`.
    - `.rb-hero__copy::before`: viñeta radial suave (`rgba(31,23,27,.46)` centro → transparente
      al 76%) que se extiende `inset: -4rem -1.5rem` más allá del bloque de texto, así el
      degradado termina fuera de la vista y no se percibe una caja ni un borde.
    - `.rb-hero-title` y `.rb-hero-lead`: texto blanco puro + `text-shadow` en capas con halo
      corto (`0 0 6px` / `0 0 14px`) que define cada letra.
    Resultado medido: **lead ~3.8–8.7:1** (0 % por debajo de 3:1), **título media ~6:1** con
    ~87 % del texto por encima de 3:1 (los slivers restantes son bordes de glifo sobre el
    cielo más claro, con el halo de sombra encima). Verificado visualmente: el hero mantiene
    el look de atardecer con texto flotante.

Tras los puntos 8, 9 y 10: **axe da 0 violaciones**. Queda solo `color-contrast` como
"incomplete" (~142 nodos: axe no puede calcular sobre gradientes/pseudo-elementos, incluido
ahora el texto del hero bajo la viñeta). Revisión visual: el resto de textos (dark/plum sobre
cream, verde `#4f6b4c`) se ven correctos.

## Ya verificado como correcto (no tocar)

- `lang="es"` en `src/index.html`.
- Foco visible global consistente: `:focus-visible` en `styles.scss:77-79`.
- Un único `<h1>` en toda la página (hero); jerarquía `h2`→`h3` correcta en el resto.
- Imágenes: la del hero es decorativa (`alt="" aria-hidden="true"`); los logos de `experience`
  llevan `[alt]="logo.alt"` dinámico.
- FAQ usa `mat-accordion`/`mat-expansion-panel`, que ya gestiona `aria-expanded`/roles.
- No hay elementos no interactivos (`div`/`span`) con `(click)` sin rol/teclado.
- Contraste de `ink` sobre `cream` (9–16.7:1) y `plum` sobre `cream`/blanco (7.4–7.8:1):
  sobrado.

## Estado (2026-09-01)

Puntos 1–4, 6, 8, 9, 10 aplicados en `feature/accesibilidad-a11y` (rebasada sobre `main`, que
ya incluye SSR y el trabajo de SEO). Punto 5 obsoleto (no hay botón). Punto 7 = código
muerto. Auditoría axe: **0 violaciones**. Build (`npm run build`) OK.

Pendiente (nada bloqueante):
- Repaso visual de Laurem sobre el deploy: viñeta del hero (¿demasiado oscura?), verde
  `#4f6b4c`, hero con `prefers-reduced-motion`.
- Opcional: prueba con lector de pantalla y reflow al 400% (no cubierto por axe).
