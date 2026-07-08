import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [NgFor, MatCardModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessComponent {
  readonly steps = [
    { title: 'Envía tus datos', text: 'Solo tienes que enviar tus nombre y dirección de correo electrónico en el formulario que se despliega al darle al botón de Quiero Inscribirme.' },
    { title: 'Nos pondremos en contacto contigo', text: 'En los días posteriores, nos pondremos en contacto contigo a través del contacto que hayas facilitado, para conocernos mejor.' },
    { title: 'Vemos si es tu momento', text: 'Veremos si es tu momento para comenzar esta aventura. Las plazas son limitadas.' }
  ];
}
