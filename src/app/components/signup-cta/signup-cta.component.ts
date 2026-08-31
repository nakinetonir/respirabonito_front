import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

let instanceCount = 0;

export type SignupCtaTone = 'plum' | 'sage' | 'sky';

interface ToneColors {
  readonly start: string;
  readonly mid: string;
  readonly end: string;
}

/** Reutiliza los acentos ya presentes en el resto del sitio (--rb-plum, --rb-green, --rb-blue). */
const TONE_COLORS: Record<SignupCtaTone, ToneColors> = {
  plum: { start: '#b04a7a', mid: '#8b2f68', end: '#cf8cab' },
  sage: { start: '#8fae82', mid: '#6f8f6c', end: '#c7dcc0' },
  sky: { start: '#9fb2cf', mid: '#738baa', end: '#cddaeb' }
};

/**
 * Bloque aislado de "llamada a la inscripcion": ilustracion (figuras + loto),
 * un mensaje opcional de contexto y el boton hacia el formulario externo.
 * Pensado para reutilizarse en varios puntos de la pagina: el degradado del
 * SVG lleva un id unico por instancia (evita colisiones cuando se repite el
 * componente) y admite un `tone` distinto para que cada aparicion se sienta
 * propia sin perder la identidad visual del boton, que se mantiene igual en
 * todas partes para que siempre se reconozca como la misma accion.
 */
@Component({
  selector: 'app-signup-cta',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './signup-cta.component.html',
  styleUrl: './signup-cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupCtaComponent {
  /** Linea corta opcional mostrada encima de la ilustracion, propia de cada aparicion. */
  @Input() prompt = '';

  /** Acento de color de la ilustracion; el boton siempre mantiene el mismo tono de marca. */
  @Input() tone: SignupCtaTone = 'plum';

  readonly gradientId = `rb-signup-cta-gradient-${instanceCount++}`;

  get gradientRef(): string {
    return `url(#${this.gradientId})`;
  }

  get colors(): ToneColors {
    return TONE_COLORS[this.tone];
  }
}
