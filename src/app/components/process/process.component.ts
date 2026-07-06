import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [NgFor, MatCardModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessComponent {
  readonly steps = [
    { title: 'Solicitas información', text: 'Rellenas el formulario con tus datos y lo que estás buscando ahora mismo.' },
    { title: 'Nos conocemos', text: 'Te contamos cómo funciona la Escuela y resolvemos tus dudas con calma.' },
    { title: 'Eliges cómo empezar', text: 'Vemos si es tu momento y cuál es la forma más sencilla de incorporarte.' }
  ];
}
