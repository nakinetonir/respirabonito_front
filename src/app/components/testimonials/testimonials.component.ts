import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({selector:'app-testimonials', standalone:true, imports:[NgFor, MatIconModule], templateUrl:'./testimonials.component.html', styleUrl:'./testimonials.component.scss'})
export class TestimonialsComponent {
  benefits = [
    'Asentar una rutina de bienestar que te dé confianza en los retos diarios.',
    'Aumentar los momentos semanales de práctica de meditación y autocuidado.',
    'Aprender herramientas de relajación mental y corporal.',
    'Fortalecer cuerpo y mente.',
    'Tener la posibilidad de organizarte a tu manera (viajar, flexibilidad horaria) y disfrutar más tiempo de calidad manteniendo tu rutina de bienestar todo el año.',
    'Posibilidad de avanzar a tu ritmo.',
    'Sentirte más en el mundo y enfocar tu dispersión.',
    'Sentirte acompañada y parte de una Comunidad que comparte valores.',
    'Relacionarte más asertivamente con los demás.',
    'Descubrir la vida en la sencillez del día a día valorando más los pequeños detalles.',
    'Contenido con profesionales de España y América Latina.',
    'Clases de distintos estilos, intensidades y duraciones.',
    'Nuevos contenidos semanales sin publicidad.'
  ];
}
