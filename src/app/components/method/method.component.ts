import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [NgFor, MatCardModule],
  templateUrl: './method.component.html',
  styleUrl: './method.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodComponent {
  readonly pillars = [
    { title: 'Bienestar', text: 'a través de un enfoque integral, el objetivo es mejorar la salud en el plano mental, físico y emocional.' },
    { title: 'Progreso', text: 'queremos crecer y esto implica trabajo y compromiso, con unas indicaciones y propuestas que cada alumna puede adaptar a sus tiempos y organización.' },
    { title: 'Comunidad', text: 'vivimos en sociedad y por lo tanto somos interdependientes. En la Escuela nos abrimos con confianza a la Guía y a las demás compañeras, porque esto permite afianzar nuestra raíz y hace el camino más fácil y divertido.' }
  ];
}
