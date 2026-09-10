import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SignupCtaComponent } from '../signup-cta/signup-cta.component';

interface ProcessStep {
  readonly title: string;
  readonly text: string;
}

@Component({
  selector: 'app-process-desktop-tablet',
  standalone: true,
  imports: [NgFor, SignupCtaComponent],
  templateUrl: './process-desktop-tablet.component.html',
  styleUrl: './process-desktop-tablet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessDesktopTabletComponent {
  readonly steps: readonly ProcessStep[] = [
    {
      title: 'Envía tus datos',
      text: 'Solo tienes que enviar tu nombre y dirección de correo electrónico en el formulario que se despliega al darle al botón de Quiero Inscribirme.'
    },
    {
      title: 'Nos pondremos en contacto contigo',
      text: 'En los días posteriores, nos pondremos en contacto contigo a través del contacto que hayas facilitado, para conocernos mejor.'
    },
    {
      title: 'Vemos si es tu oportunidad',
      text: 'Veremos si es tu oportunidad para comenzar esta aventura. Las plazas son limitadas.'
    }
  ];
}
