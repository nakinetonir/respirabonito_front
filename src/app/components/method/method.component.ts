import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [NgFor, MatCardModule],
  templateUrl: './method.component.html',
  styleUrl: './method.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodComponent {
  readonly pillars = [
    { title: 'Cuerpo', text: 'Yoga, pilates, QiGong, baile y tacto consciente para volver a sentir, respirar y habitar tu cuerpo.' },
    { title: 'Alma', text: 'Meditación, rituales, ciclos, autoconocimiento y comunidad para crear espacios de presencia.' },
    { title: 'Vida diaria', text: 'Alimentación de temporada, lecturas, arte y hábitos sencillos para sostener el bienestar sin exigirte de más.' }
  ];
}
