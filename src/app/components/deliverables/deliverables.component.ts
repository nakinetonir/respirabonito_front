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
    { src: 'assets/icons/icono_1.svg', title: 'Yoga', micro: 'presencia' },
    { src: 'assets/icons/icono_2.svg', title: 'Música y voz', micro: 'expresión' },
    { src: 'assets/icons/icono_3.svg', title: 'Pilates', micro: 'centro' },
    { src: 'assets/icons/icono_4.svg', title: 'Masajes y tacto', micro: 'calma' },
    { src: 'assets/icons/icono_5.svg', title: 'Meditación', micro: 'silencio' },
    { src: 'assets/icons/icono_6.svg', title: 'Expresión corporal', micro: 'libertad' },
    { src: 'assets/icons/icono_7.svg', title: 'Hábitos y creencias', micro: 'claridad' },
    { src: 'assets/icons/icono_8.svg', title: 'Nutrición y Ayurveda', micro: 'raíz' }
  ];
}
