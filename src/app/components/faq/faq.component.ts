import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor, MatExpansionModule, MatIconModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {
  readonly faqs = [
    { icon: 'self_improvement', q: 'Nunca he practicado yoga, pilates ni meditación, ¿necesito una base mínima?', a: 'No. Cualquier persona con movilidad puede unirse, con o sin experiencia. Hay clases de distintas intensidades y podrás adaptarlas siempre que lo necesites.' },
    { icon: 'explore', q: '¿Qué aspectos voy a trabajar?', a: 'Movimiento consciente, yoga, pilates, QiGong, baile, meditación, alimentación, naturaleza, rituales, lectura, arte, talleres y sesiones con colaboradoras expertas.' },
    { icon: 'sync_alt', q: '¿Qué ocurre si mi situación cambia?', a: 'Las propuestas son flexibles. Podrás avanzar a tu ritmo y valorar con el equipo la mejor opción.' },
    { icon: 'auto_awesome', q: 'Tengo experiencia, ¿voy a aprender más?', a: 'Sí. El contenido es variado y profundiza en distintos estilos y enfoques, como Iyengar, Integral, Hatha, Nidra o Raja.' },
    { icon: 'groups', q: '¿Cómo será el acompañamiento?', a: 'Nos conoceremos personalmente desde el principio, por llamada y a través de la plataforma. Podrás expresarte, compartir y consultar tus dudas.' },
    { icon: 'workspace_premium', q: '¿Recibiré diploma oficial?', a: 'No es una titulación oficial. Te llevarás experiencia, apuntes, amistades y acceso continuado mientras seas miembro.' }
  ];
}
