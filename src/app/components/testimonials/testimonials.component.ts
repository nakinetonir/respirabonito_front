import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({selector:'app-testimonials', standalone:true, imports:[NgFor, MatIconModule], templateUrl:'./testimonials.component.html', styleUrl:'./testimonials.component.scss'})
export class TestimonialsComponent {
  benefits = ['Asentar una rutina de bienestar que te dé confianza en los retos diarios.', 'Aprender herramientas de relajación mental y corporal.', 'Fortalecer cuerpo y mente.', 'Organizarte a tu manera y avanzar a tu ritmo.', 'Sentirte acompañada y parte de una comunidad que comparte valores.', 'Descubrir la vida en la sencillez del día a día.'];
}
