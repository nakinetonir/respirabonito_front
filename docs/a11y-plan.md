# Plan de accesibilidad (a11y)

Rama: `feature/accesibilidad-a11y` (creada desde `main`).
Revisión hecha sobre los 21 componentes que realmente renderiza `app.component.html`
(landmarks/headings, `aria-*`, imágenes, foco, contraste de color, `prefers-reduced-motion`,
enlaces/botones). Nada especulativo: cada punto tiene el fichero y la línea de origen.

## Crítico (rompe para lector de pantalla / teclado)

1. **`aria-labelledby` roto en `pain-points`**
   - Ficheros: `src/app/components/pain-points-desktop-tablet/pain-points-desktop-tablet.component.html`,
     `src/app/components/pain-points-mobile/pain-points-mobile.component.html`
   - `<section aria-labelledby="bloqueos-title">` pero no existe ningún `id="bloqueos-title"`:
     la sección nunca tuvo `<h2>`, solo tarjetas de texto suelto.
   - Fix: añadir `<h2 id="bloqueos-title">` visualmente coherente con el resto de secciones
     (o `<h2 class="sr-only">` si no se quiere título visible).

2. **Contraste insuficiente en texto real con verde salvia `#6f8f6c`** (falla WCAG AA, necesita 4.5:1
   y da 3.4–3.6:1 sobre `--rb-cream`/blanco)
   - `.rb-guiding-purpose__kicker` en `guiding-purpose-desktop-tablet.component.scss:145` y
     `guiding-purpose-mobile.component.scss:145` (etiqueta eyebrow "CUERPO/MENTE/ALMA")
   - `.rb-guiding-purpose__facet--body` en los mismos ficheros, línea ~356 — afecta a
     `<span>Cuerpo</span>` y `<small>conectar</small>` en el html
   - `.rb-journey-merged__kicker` en `process-desktop-tablet.component.scss:37` y
     `process-mobile.component.scss:37`
   - Fix: oscurecer el tono (ej. `#4f6b4c`, verificar contraste antes de aplicar) o buscar un
     verde que cumpla 4.5:1 sin desentonar con la paleta.
   - Nota: los usos del mismo verde en iconos decorativos (`.rb-method__icon`,
     `.rb-pain__personal-icon`) llevan `aria-hidden` y ya cumplen 3:1 de gráfico UI — esos no
     hace falta tocarlos.

3. **Falta `prefers-reduced-motion` en el hero**
   - Ficheros: `hero-desktop-tablet.component.scss`, `hero-mobile.component.scss`
   - Animaciones siempre activas: `rbHeroContentIn`, `rbHeroGlowOne`/`rbHeroGlowTwo`, `rbScrollCue`.
   - El resto del sitio ya respeta `prefers-reduced-motion: reduce` en 14 componentes
     (`guiding-purpose-*`, `process-*`, `roadmap-*`, `ideal-for-*`, `method-*`, `pain-points-*`,
     `school-content`, y la regla global de `styles.scss:250`) — el hero es la excepción.
   - Fix: añadir el mismo bloque `@media (prefers-reduced-motion: reduce) { animation: none; }`
     que ya usan las otras secciones.

## Importante

4. **Enlace "Contacto" del footer sin aviso de apertura en pestaña nueva**
   - Ficheros: `footer-desktop-tablet.component.html:14`, `footer-mobile.component.html:13`
   - `<a href="https://forms.gle/..." target="_blank">Contacto</a>` sin `aria-label` ni
     indicación visual (no cumple WCAG 3.2.5), mientras que `signup-cta.component.html:35` sí
     lo hace bien: `aria-label="...se abre en una pestaña nueva)"`.
   - Fix: replicar el mismo patrón de `aria-label` (y opcionalmente icono `open_in_new` como en
     signup-cta).

5. **Botón secundario del hero (`.rb-hero__secondary-button`) sobre foto**
   - `--mdc-outlined-button-outline-color: rgba(255,255,255,.72)` — borde translúcido sobre una
     foto variable (atardecer), sin verificar el contraste 3:1 de borde/UI component en las
     zonas más claras de la imagen (cielo).
   - Fix: fondo semitransparente algo más opaco, o `box-shadow` interior que garantice el
     contraste del borde en cualquier zona de la foto. Verificar con captura real tras aplicar.

## Deseable (pulido, no bloqueante)

6. **Skip-link "Saltar al contenido"**: no existe. Como hoy no hay `<app-header>` renderizado
   (`header/` está en el repo pero no se importa en `app.component.ts` — código muerto), el
   primer foco ya cae cerca del `<h1>`/CTAs del hero, así que el impacto es bajo. Añadirlo es
   barato y previene problemas si en el futuro se reactiva un header con navegación.

7. **`deliverables.component.scss` tiene `outline: none`** sin sustituto de foco — pero
   `deliverables/` tampoco se importa en `app.component.ts` (código muerto, igual que
   `header/`, `opportunity/`, `final-cta/`, `achievements/`, `testimonials/`,
   `wellness-break/`, `school-content/`, `purpose/`, `story/`). No tocar salvo que se pida
   limpiar código muerto aparte.

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

## Cómo retomarlo otro día

```
git checkout feature/accesibilidad-a11y
git pull   # si se ha trabajado en remoto
```

Pedir a Claude: "sigue el plan de docs/a11y-plan.md, aplica los puntos críticos (1-3)"
(o el número que toque). El plan no ha tocado código todavía — es solo el documento.
