import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AchievementsComponent {
  readonly achievements = [
    {
      icon: 'self_improvement',
      title: 'Yoga y pilates',
      text: 'Enseñanza corporal con enfoque sano, cercano, progresivo y divertido.'
    },
    {
      icon: 'workspace_premium',
      title: 'Formación reconocida',
      text: 'Reconocimiento por Yoga Alliance y Clínica Mayuben.'
    },
    {
      icon: 'psychology_alt',
      title: 'Desarrollo personal',
      text: 'Formación en liderazgo, acompañamiento y dirección de organizaciones.'
    },
    {
      icon: 'child_care',
      title: 'Educación respetuosa',
      text: 'Experiencia con niñas y niños entre 3 y 15 años en métodos respetuosos.'
    },
    {
      icon: 'local_florist',
      title: 'Método propio',
      text: 'Creadora del Método Integral Respira Bonito.'
    },
    {
      icon: 'volunteer_activism',
      title: 'Salud comunitaria',
      text: 'Reconocida por el Ayuntamiento de Madrid como Agente de Salud Comunitaria.'
    },
    {
      icon: 'music_note',
      title: 'Voz y arte',
      text: 'Experiencia vocal, musical y artística en espacios emblemáticos de Madrid.'
    }
  ];
}
