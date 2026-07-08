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
      title: 'Yoga, Pilates y acompañamiento personal',
      text: 'Enseñanza del Yoga y el Pilates, y acompañamiento personal desde un enfoque sano, cercano y divertido. Reconocimiento por Yoga Alliance y la Clínica Mayuben.'
    },
    {
      icon: 'workspace_premium',
      title: 'Formaciones con mirada integral',
      text: 'Realización de formaciones con mirada integral como el Master de IPP o el curso de Liderazgo y Dirección de organizaciones de la Comunidad de Madrid.'
    },
    {
      icon: 'child_care',
      title: 'Métodos respetuosos y alternativos',
      text: 'Experiencia como acompañante y educadora en métodos respetuosos y alternativos con niños entre los 3 y los 15 años.'
    },
    {
      icon: 'local_florist',
      title: 'Método Integral RespiraBonito',
      text: 'Creadora del Método Integral propio de enseñanza RespiraBonito.'
    },
    {
      icon: 'volunteer_activism',
      title: 'Agente de Salud Comunitaria',
      text: 'Formada y reconocida por el Ayuntamiento de Madrid como Agente de Salud Comunitaria.'
    },
    {
      icon: 'music_note',
      title: 'Trabajo vocal, musical y artístico',
      text: 'Amplia experiencia en trabajo vocal, musical y artístico, con actuaciones en lugares emblemáticos de Madrid como el Museo Nacional de Ciencias Naturales, la Sala Caracol y la sala Lemon.'
    }
  ];
}
