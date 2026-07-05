import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({selector:'app-roadmap', standalone:true, imports:[NgFor, MatTabsModule], templateUrl:'./roadmap.component.html', styleUrl:'./roadmap.component.scss'})
export class RoadmapComponent {
  cuerpo = ['Yoga', 'Pilates', 'QiGong / Chikung', 'Baile y expresión corporal', 'Masaje y tacto consciente'];
  alma = ['Meditación', 'Rituales', 'Fases de la luna', 'Rueda solar', 'Chakras'];
  vida = ['Alimentación de temporada', 'Lecturas y películas', 'Planes artísticos', 'Talleres presenciales', 'Sesiones con expertas'];
}
