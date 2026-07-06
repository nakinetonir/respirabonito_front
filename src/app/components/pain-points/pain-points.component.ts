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
    'Sientes que la semana pasa rápido y apenas respiras.',
    'Tu cuerpo te pide pausa, movimiento o más presencia.',
    'Quieres meditar o practicar, pero te cuesta sostenerlo sola.',
    'Buscas una comunidad cercana, sin exigencia y con profundidad.'
  ];
}
