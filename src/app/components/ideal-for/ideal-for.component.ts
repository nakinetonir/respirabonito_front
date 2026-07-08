import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ideal-for',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './ideal-for.component.html',
  styleUrl: './ideal-for.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdealForComponent {
  readonly idealItemsLeft = [
    { icon: 'pause_circle', text: 'Sientes que la vida va demasiado rápida y necesitas parar' },
    { icon: 'sentiment_dissatisfied', text: 'Estás desencantada a pesar de tenerlo todo' },
    { icon: 'self_improvement', text: 'Quieres aprender a relajarte y retomar el contacto con tu cuerpo' },
    { icon: 'explore', text: 'Llevas un tiempo en el camino del crecimiento personal, pero echas en falta enfoque y claridad' },
    { icon: 'spa', text: 'Buscas la unión de práctica y conocimientos sobre Salud y Bienestar Integral en un solo espacio' }
  ];

  readonly idealItemsRight = [
    { icon: 'public', text: 'Te sientes sola y poco identificada con su entorno (laboral, familiar, amistades…); a veces te sientes de otro planeta' },
    { icon: 'eco', text: 'Algo dentro de ti sabe que necesitas soltar y fluir más' },
    { icon: 'forum', text: 'Quieres relacionarte más asertivamente con los demás' },
    { icon: 'favorite', text: 'Conoces la importancia de desarrollarte acompañada, en un entorno consciente y amoroso' }
  ];
}
