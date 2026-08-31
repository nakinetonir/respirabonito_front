import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

type AuthorityLogoKind = 'seal' | 'square' | 'landscape' | 'wide';

interface AuthorityLogo {
  readonly src: string;
  readonly alt: string;
  readonly kind: AuthorityLogoKind;
}

interface AuthorityAchievement {
  readonly icon: string;
  readonly title: string;
  readonly text: string;
  readonly logos: readonly AuthorityLogo[];
}

@Component({
  selector: 'app-experience-mobile',
  standalone: true,
  imports: [NgFor, NgIf, MatIconModule],
  templateUrl: './experience-mobile.component.html',
  styleUrl: './experience-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceMobileComponent {
  readonly achievements: readonly AuthorityAchievement[] = [
    {
      icon: 'self_improvement',
      title: 'Yoga, Pilates y acompañamiento personal',
      text: 'Enseñanza de Yoga y Pilates con un enfoque sano, cercano y divertido. Reconocida por Yoga Alliance y la Clínica Mayuben.',
      logos: [
        { src: 'assets/logos-vino/yoga-alliance.svg', alt: 'Yoga Alliance', kind: 'seal' },
        { src: 'assets/logos-vino/mayuben.svg', alt: 'Clínica Mayuben', kind: 'square' }
      ]
    },
    {
      icon: 'workspace_premium',
      title: 'Formaciones con mirada integral',
      text: 'Formación con mirada integral: Máster de IPP y curso de Liderazgo y Dirección de la Comunidad de Madrid.',
      logos: [
        {
          src: 'assets/logos-vino/ipp-master-desarrollo-personal-comunidad-madrid.svg',
          alt: 'IPP Máster de Desarrollo Personal y Comunidad de Madrid',
          kind: 'wide'
        }
      ]
    },
    {
      icon: 'child_care',
      title: 'Métodos respetuosos y alternativos',
      text: 'Acompañante y educadora en métodos respetuosos y alternativos con niños de 3 a 15 años.',
      logos: [
        { src: 'assets/logos-vino/flor-de-lis.svg', alt: 'Flor de lis', kind: 'seal' },
        { src: 'assets/logos-vino/fundacion-prodis.svg', alt: 'Fundación Prodis', kind: 'landscape' },
        { src: 'assets/logos-vino/cd-estudio.svg', alt: 'C. D. Estudio', kind: 'seal' }
      ]
    },
    {
      icon: 'local_florist',
      title: 'Método Integral RespiraBonito',
      text: 'Creadora del Método Integral propio de enseñanza RespiraBonito.',
      logos: []
    },
    {
      icon: 'volunteer_activism',
      title: 'Agente de Salud Comunitaria',
      text: 'Formada y reconocida por el Ayuntamiento de Madrid como Agente de Salud Comunitaria.',
      logos: [
        { src: 'assets/logos-vino/madrid-salud.svg', alt: 'Madrid Salud', kind: 'wide' }
      ]
    },
    {
      icon: 'music_note',
      title: 'Trabajo vocal, musical y artístico',
      text: 'Trabajo vocal, musical y artístico, con actuaciones en Madrid: Museo de Ciencias Naturales, Sala Caracol y Sala Lemon.',
      logos: []
    }
  ];
}
