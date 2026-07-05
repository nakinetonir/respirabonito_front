import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({selector:'app-achievements', standalone:true, imports:[NgFor, MatIconModule], templateUrl:'./achievements.component.html', styleUrl:'./achievements.component.scss'})
export class AchievementsComponent {
  achievements = [
    'Enseñanza de Yoga y Pilates y acompañamiento personal con enfoque sano, cercano y divertido.',
    'Reconocimiento por Yoga Alliance y Clínica Mayuben.',
    'Formación en Desarrollo Personal, liderazgo y dirección de organizaciones.',
    'Experiencia como acompañante y educadora en métodos respetuosos con niños entre 3 y 15 años.',
    'Creadora del Método Integral RespiraBonito.',
    'Reconocida por el Ayuntamiento de Madrid como Agente de Salud Comunitaria.',
    'Experiencia vocal, musical y artística en espacios emblemáticos de Madrid.'
  ];
}
