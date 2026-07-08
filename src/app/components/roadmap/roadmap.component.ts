import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, MatTabsModule, MatIconModule],
  templateUrl: './roadmap.component.html',
  styleUrl: './journey-dynamics.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadmapComponent {
  readonly cuerpoItems = [
    { icon: 'self_improvement', title: 'Ejercicios corporales', description: 'Ejercicios de Yoga, Pilates, QiGong (Chikung) y otras técnicas corporales para sentir y tonificar esa parte del cuerpo y despertar esos chakras en una misma' },
    { icon: 'restaurant', title: 'Alimentación adecuada', description: 'Alimentación adecuada a cada estación' }
  ];

  readonly almaItems = [
    { icon: 'local_florist', title: 'Referencias a la naturaleza', description: 'Referencias a la naturaleza: fases de la luna, ciclo menstrual; rueda solar; comportamiento animal: migraciones, hibernaciones, etc; plantas: florecimientos, etc.' },
    { icon: 'auto_awesome', title: 'Rituales', description: 'Rituales' },
    { icon: 'museum', title: 'Propuestas de planes complementarios', description: 'Propuestas de planes complementarios: museo, exposición' }
  ];

  readonly vidaItems = [
    { icon: 'menu_book', title: 'Lectura, película o artículo acorde', description: 'Lectura, película o artículo acorde' },
    { icon: 'groups', title: 'Talleres y encuentros presenciales', description: 'Talleres y encuentros presenciales' },
    { icon: 'palette', title: 'Propuestas de planes artísticos', description: 'Propuestas de planes artísticos: cocina, dibujo, manualidad' },
    { icon: 'handshake', title: 'Sesiones con colaboradoras expertas', description: 'Sesiones con colaboradoras expertas' }
  ];
}
