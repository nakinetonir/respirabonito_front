# RespiraBonito · Landing Angular

Landing page basada en los flyers de Bienestar Integral y el texto de la Escuela Online RespiraBonito.

## Tecnologías

- Angular 21
- Angular Material
- Tailwind CSS
- Componentes standalone
- HTML separado por componente

## Ejecutar

```bash
npm install
npm start
```

Abre `http://localhost:4200`.

## Estructura

Cada bloque del scroll está separado en `src/app/components/*` con su `.ts`, `.html` y `.scss`.

Los recursos están en:

- `public/assets/icons`: SVG de las disciplinas
- `public/assets/flyers`: flyers de referencia usados en la landing


## SVG dinámico flor y lago

El SVG está integrado en `src/assets/flor_y_lago_lineas_animado.svg` y se muestra en la landing mediante `<img src="assets/flor_y_lago_lineas_animado.svg">`.

## Cambios incluidos

- Eliminado el link externo de Google Fonts Material Icons en `src/index.html`.
- Añadido `@import 'material-icons/iconfont/material-icons.css';` en `src/styles.css`/`src/styles.scss`.
- Añadida dependencia `material-icons` en `package.json`.
- Cambiado el color naranja de la sección `Dinámicas del viaje` al morado del botón `Inscribirme`.


## Cambios finales incluidos

- `RoadmapComponent` importa `MatIconModule`.
- Los iconos de `mat-icon` usan Material Icons local.
- Eliminado el link externo a Google Fonts de Material Icons en `index.html`.
- Añadido `@import 'material-icons/iconfont/material-icons.css';`.
- Añadida dependencia `material-icons`.
- Se sustituye el naranja del timeline por el morado de `Inscribirme`.
- Se incluye `src/assets/flor-y-lago-lineas-animado.svg`.
- Se incluye imagen de Laurem sin teléfono visible: `src/assets/laurem-respirabonito-sin-telefono.png`.
- Se incluye imagen de experiencia/certificaciones: `src/assets/experiencia-certificaciones.png`.
