import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-deliverables',
  standalone: true,
  imports: [NgFor],
  templateUrl: './deliverables.component.html',
  styleUrl: './deliverables.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeliverablesComponent {
  readonly icons = [
    { src: 'assets/icons/icono_1.svg', title: 'Yoga', micro: 'práctica corporal' },
    { src: 'assets/icons/icono_2.svg', title: 'Pilates', micro: 'tonificar' },
    { src: 'assets/icons/icono_3.svg', title: 'QiGong / Chikung', micro: 'energía' },
    { src: 'assets/icons/icono_4.svg', title: 'Baile y expresión corporal', micro: 'sentir' },
    { src: 'assets/icons/icono_5.svg', title: 'Masaje y tacto consciente', micro: 'cuidado' },
    { src: 'assets/icons/icono_6.svg', title: 'Meditación', micro: 'observación' },
    { src: 'assets/icons/icono_7.svg', title: 'Rituales', micro: 'presencia' },
    { src: 'assets/icons/icono_8.svg', title: 'Alimentación adecuada a cada estación', micro: 'ciclos' }
  ];
}
