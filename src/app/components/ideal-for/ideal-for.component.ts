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
  readonly idealItems = [
    { icon: 'pause_circle', text: 'Sientes que la vida va demasiado rápida y necesitas parar.' },
    { icon: 'sentiment_dissatisfied', text: 'Estás desencantada a pesar de tenerlo todo.' },
    { icon: 'self_improvement', text: 'Quieres aprender a relajarte y retomar el contacto con tu cuerpo.' },
    { icon: 'psychology_alt', text: 'Llevas un tiempo en el camino del crecimiento personal, pero echas en falta enfoque y claridad.' },
    { icon: 'spa', text: 'Buscas la unión de práctica y conocimientos sobre Salud y Bienestar Integral en un solo espacio.' },
    { icon: 'public', text: 'Te sientes sola y poco identificada con su entorno (laboral, familiar, amistades…); a veces te sientes de otro planeta.' },
    { icon: 'eco', text: 'Algo dentro de ti sabe que necesitas soltar y fluir más.' },
    { icon: 'forum', text: 'Quieres relacionarte más asertivamente con los demás.' },
    { icon: 'diversity_3', text: 'Conoces la importancia de desarrollarte acompañada, en un entorno consciente y amoroso.' }
  ];

  readonly benefitItems = [
    { icon: 'event_available', text: 'Asentar una rutina de bienestar que te dé confianza en los retos diarios.' },
    { icon: 'self_improvement', text: 'Aumentar los momentos semanales de práctica de meditación y autocuidado.' },
    { icon: 'spa', text: 'Aprender herramientas de relajación mental y corporal.' },
    { icon: 'fitness_center', text: 'Fortalecer cuerpo y mente.' },
    { icon: 'travel_explore', text: 'Tener la posibilidad de organizarte a tu manera (viajar, flexibilidad horaria) y disfrutar más tiempo de calidad manteniendo tu rutina de bienestar todo el año.' },
    { icon: 'speed', text: 'Posibilidad de avanzar a tu ritmo.' },
    { icon: 'center_focus_strong', text: 'Sentirte más en el mundo y enfocar tu dispersión.' },
    { icon: 'groups', text: 'Sentirte acompañada y parte de una Comunidad que comparte valores.' },
    { icon: 'forum', text: 'Relacionarte más asertivamente con los demás.' },
    { icon: 'local_florist', text: 'Descubrir la vida en la sencillez del día a día valorando más los pequeños detalles.' },
    { icon: 'language', text: 'Contenido con profesionales de España y América Latina.' },
    { icon: 'class', text: 'Clases de distintos estilos, intensidades y duraciones.' },
    { icon: 'new_releases', text: 'Nuevos contenidos semanales sin publicidad.' }
  ];
}
