import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ideal-for',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './ideal-for.component.html',
  styleUrl: './ideal-for.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdealForComponent {
  readonly idealItems = [
    { icon: 'pause_circle', text: 'Sientes que la vida va demasiado deprisa y necesitas parar sin desconectarte de todo.' },
    { icon: 'self_improvement', text: 'Quieres aprender a relajarte, respirar mejor y retomar el contacto con tu cuerpo.' },
    { icon: 'diversity_3', text: 'Buscas práctica, conocimiento y comunidad en un espacio consciente y amoroso.' },
    { icon: 'eco', text: 'Notas que algo dentro de ti necesita soltar, simplificar y fluir con más naturalidad.' }
  ];

  readonly benefitItems = [
    { icon: 'event_available', text: 'Asentar una rutina de bienestar semanal que puedas sostener en la vida real.' },
    { icon: 'spa', text: 'Aprender herramientas de relajación mental, corporal y emocional.' },
    { icon: 'favorite', text: 'Fortalecer cuerpo, mente y confianza con prácticas progresivas.' },
    { icon: 'local_florist', text: 'Descubrir belleza en lo sencillo: cuerpo, naturaleza, arte, rituales y presencia.' }
  ];
}
