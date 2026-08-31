import { ChangeDetectionStrategy, Component } from '@angular/core';

let instanceCount = 0;

/**
 * Bloque aislado de "llamada a la inscripcion": ilustracion (figuras + loto)
 * y boton hacia el formulario externo. Pensado para reutilizarse en varios
 * puntos de la pagina, por eso el degradado del SVG lleva un id unico por
 * instancia (evita colisiones cuando se repite el componente).
 */
@Component({
  selector: 'app-signup-cta',
  standalone: true,
  templateUrl: './signup-cta.component.html',
  styleUrl: './signup-cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupCtaComponent {
  readonly gradientId = `rb-signup-cta-gradient-${instanceCount++}`;

  get gradientRef(): string {
    return `url(#${this.gradientId})`;
  }
}
