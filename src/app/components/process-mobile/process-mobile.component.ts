import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SignupCtaComponent } from '../signup-cta/signup-cta.component';

interface ProcessStep {
  readonly title: string;
  readonly text: string;
}

@Component({
  selector: 'app-process-mobile',
  standalone: true,
  imports: [NgFor, SignupCtaComponent],
  templateUrl: './process-mobile.component.html',
  styleUrl: './process-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessMobileComponent {
  readonly steps: readonly ProcessStep[] = [
    {
      title: 'Envía tus datos',
      text: 'Envía tu nombre y correo electrónico en el formulario que se abre al pulsar Quiero Inscribirme.'
    },
    {
      title: 'Nos pondremos en contacto contigo',
      text: 'En los días siguientes te contactaremos para conocernos mejor.'
    },
    {
      title: 'Vemos si es tu momento',
      text: 'Veremos si es tu momento para comenzar esta aventura. Las plazas son limitadas.'
    }
  ];
}
