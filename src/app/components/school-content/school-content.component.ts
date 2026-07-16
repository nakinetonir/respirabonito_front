import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface SchoolContentItem {
  readonly eyebrow: string;
  readonly title: string;
  readonly text: string;
  readonly icon: 'people' | 'movement' | 'sparkles';
}

@Component({
  selector: 'app-school-content',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './school-content.component.html',
  styleUrl: './school-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchoolContentComponent {
  readonly items: readonly SchoolContentItem[] = [
    {
      eyebrow: 'Acompañamiento',
      title: 'Profesionales que suman',
      text: 'Contenido con profesionales en distintos ámbitos del Bienestar y la Salud Integral.',
      icon: 'people'
    },
    {
      eyebrow: 'Práctica flexible',
      title: 'Clases para cada momento',
      text: 'Clases de distintos estilos, intensidades y duraciones.',
      icon: 'movement'
    },
    {
      eyebrow: 'Una escuela viva',
      title: 'Nuevos contenidos',
      text: 'Nuevos contenidos semanales sin publicidad.',
      icon: 'sparkles'
    }
  ];
}
