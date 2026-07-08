import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pain-points',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './pain-points.component.html',
  styleUrl: './pain-points.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PainPointsComponent {
  readonly points = [
    '¿Sientes que la semana pasa rápido y enlazas tareas y actividades casi sin darte cuenta?',
    '¿Percibes vínculos con las personas de tu entorno, pero echas en falta profundidad?',
    '¿Sientes que tu cuerpo y tu mente van por distintos caminos?',
    '¿Tienes molestias o incomodidad en el cuerpo que te gustaría atender y cuidar?'
  ];
}
