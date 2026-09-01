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

10. **Contraste del texto del hero sobre la foto** — PENDIENTE, decisión de diseño.
    `.rb-hero-lead` (blanco `rgba(255,255,255,.94)`) y `#hero-title` sobre el atardecer.
    Muestreo de píxeles reales bajo el texto: ratio ~2.0–2.8:1 en gran parte del ancho
    (WCAG AA para texto grande pide 3:1); el `text-shadow` actual ayuda a la percepción pero
    no cuenta para WCAG. Opciones: (a) oscurecer el gradiente de `.rb-hero__overlay` en la
    zona del copy, (b) scrim local detrás de `.rb-hero__copy`, (c) `text-shadow` más marcado.
    Todas afectan al look del hero — que lo valide Laurem.

Tras los puntos 8 y 9: **axe da 0 violaciones**. Queda solo `color-contrast` como
"incomplete" (140 nodos: axe no puede calcular sobre gradientes/pseudo-elementos). Revisión
visual: el resto de textos (dark/plum sobre cream, verde `#4f6b4c`) se ven correctos; el
único contraste real por debajo de umbral es el del punto 10.

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

Puntos 1–4, 6, 8, 9 aplicados en `feature/accesibilidad-a11y` (rebasada sobre `main`, que ya
incluye SSR y el trabajo de SEO). Punto 5 obsoleto (no hay botón). Punto 7 = código muerto.
Auditoría axe: **0 violaciones**.

Pendiente:
- **Punto 10**: contraste del texto del hero sobre la foto (decisión de diseño de Laurem).
- Repaso visual rápido sobre el deploy: verde `#4f6b4c` y hero con `prefers-reduced-motion`.
- Opcional: prueba con lector de pantalla y reflow al 400% (no cubierto por axe).
