import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, MatIconModule],
  templateUrl: './roadmap.component.html',
  styleUrl: './journey-dynamics.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadmapComponent {
  selectedIndex = 0;

  readonly cuerpoItems = [
    { icon: 'self_improvement', title: 'Ejercicios corporales', description: 'Ejercicios de Yoga, Pilates, QiGong (Chikung) y otras técnicas corporales para sentir y tonificar esa parte del cuerpo y despertar esos chakras en una misma.' },
    { icon: 'restaurant', title: 'Alimentación adecuada', description: 'Alimentación adecuada a cada estación.' },
    { icon: 'spa', title: 'Movimiento consciente', description: 'Prácticas para sentir, tonificar y acompañar el cuerpo durante el proceso del curso.' }
  ];

  readonly almaItems = [
    { icon: 'local_florist', title: 'Referencias a la naturaleza', description: 'Fases de la luna, ciclo menstrual; rueda solar; comportamiento animal: migraciones, hibernaciones, etc; plantas: florecimientos, etc.' },
    { icon: 'auto_awesome', title: 'Rituales', description: 'Rituales.' },
    { icon: 'menu_book', title: 'Lectura, película o artículo', description: 'Lectura, película o artículo acorde.' }
  ];

  readonly vidaItems = [
    { icon: 'museum', title: 'Planes complementarios', description: 'Propuestas de planes complementarios: museo, exposición.' },
    { icon: 'groups', title: 'Talleres y encuentros', description: 'Talleres y encuentros presenciales.' },
    { icon: 'palette', title: 'Planes artísticos', description: 'Propuestas de planes artísticos: cocina, dibujo, manualidad.' },
    { icon: 'handshake', title: 'Sesiones con colaboradoras', description: 'Sesiones con colaboradoras expertas.' }
  ];

  selectTab(index: number): void {
    this.selectedIndex = index;
  }
}
