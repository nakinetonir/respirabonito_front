import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface IdealForText {
  icon: string;
  before: string;
  emphasis: string;
  after: string;
}

interface IdealForPair {
  id: string;
  benefit: IdealForText;
  feeling: IdealForText;
}

@Component({
  selector: 'app-ideal-for',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './ideal-for.component.html',
  styleUrl: './ideal-for.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdealForComponent {
  readonly pairs: readonly IdealForPair[] = [
    {
      id: 'rutina',
      benefit: {
        icon: 'event_available',
        before: 'Asentar una rutina de bienestar que te dé ',
        emphasis: 'confianza en los retos diarios',
        after: '.'
      },
      feeling: {
        icon: 'pace',
        before: 'Sientes que la vida va ',
        emphasis: 'demasiado rápida',
        after: ' y necesitas parar.'
      }
    },
    {
      id: 'autocuidado',
      benefit: {
        icon: 'self_improvement',
        before: 'Aumentar tus momentos semanales de práctica de ',
        emphasis: 'meditación y autocuidado',
        after: '.'
      },
      feeling: {
        icon: 'spa',
        before: 'Buscas la unión de práctica y conocimientos sobre ',
        emphasis: 'Salud y Bienestar Integral',
        after: ' en un solo espacio.'
      }
    },
    {
      id: 'relajacion',
      benefit: {
        icon: 'accessibility_new',
        before: 'Aprender herramientas de ',
        emphasis: 'relajación',
        after: ' y fortalecimiento corporal y mental.'
      },
      feeling: {
        icon: 'favorite',
        before: 'Quieres aprender a ',
        emphasis: 'relajarte',
        after: ' y retomar el contacto con tu cuerpo.'
      }
    },
    {
      id: 'sencillez',
      benefit: {
        icon: 'local_florist',
        before: '',
        emphasis: 'Descubrir la vida en la sencillez del día a día',
        after: ' valorando más los pequeños detalles.'
      },
      feeling: {
        icon: 'sentiment_dissatisfied',
        before: 'Estás ',
        emphasis: 'desencantada',
        after: ' a pesar de tenerlo todo.'
      }
    },
    {
      id: 'ritmo',
      benefit: {
        icon: 'travel_explore',
        before: 'Tener la posibilidad de ',
        emphasis: 'organizarte a tu ritmo y manera, y disfrutar más tiempo de calidad',
        after: ' manteniendo tu rutina de bienestar todo el año.'
      },
      feeling: {
        icon: 'schedule',
        before: 'Te sientes un poco perdida y te ',
        emphasis: 'agobian los horarios estrictos o tantos desplazamientos',
        after: '.'
      }
    },
    {
      id: 'enfoque',
      benefit: {
        icon: 'center_focus_strong',
        before: 'Sentirte ',
        emphasis: 'más en el mundo y enfocar tu dispersión',
        after: '.'
      },
      feeling: {
        icon: 'psychology_alt',
        before: 'Llevas un tiempo en el camino del crecimiento personal, pero echas en falta ',
        emphasis: 'enfoque y claridad',
        after: '.'
      }
    },
    {
      id: 'comunidad',
      benefit: {
        icon: 'diversity_3',
        before: '',
        emphasis: 'Sentirte acompañada',
        after: ' y parte de una Comunidad que comparte valores, en un entorno más consciente y amoroso.'
      },
      feeling: {
        icon: 'person_outline',
        before: 'Te sientes ',
        emphasis: 'sola y poco identificada con tu entorno',
        after: ' (laboral, familiar, amistades…); a veces te sientes de otro planeta.'
      }
    },
    {
      id: 'relaciones',
      benefit: {
        icon: 'forum',
        before: '',
        emphasis: 'Relacionarte más asertivamente',
        after: ' con los demás.'
      },
      feeling: {
        icon: 'air',
        before: 'Algo dentro de ti sabe que necesitas ',
        emphasis: 'soltar y fluir más',
        after: '.'
      }
    }
  ];
}
