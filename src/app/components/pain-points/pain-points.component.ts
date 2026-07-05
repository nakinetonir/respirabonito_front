import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pain-points',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './pain-points.component.html',
  styleUrl: './pain-points.component.scss'
})
export class PainPointsComponent {
  points = [
    '¿La semana pasa rápido y enlazas tareas casi sin darte cuenta?',
    '¿Percibes vínculos, pero echas en falta profundidad?',
    '¿Sientes que cuerpo y mente van por distintos caminos?',
    '¿Tienes molestias o incomodidad en el cuerpo que te gustaría cuidar?'
  ];
}
