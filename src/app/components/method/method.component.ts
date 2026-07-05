import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({selector:'app-method', standalone:true, imports: [NgFor, MatCardModule], templateUrl:'./method.component.html', styleUrl:'./method.component.scss'})
export class MethodComponent {
  pillars = [
    {title:'Bienestar', text:'Mejorar la salud en el plano mental, físico y emocional desde un enfoque integral.'},
    {title:'Progreso', text:'Trabajo y compromiso adaptables a tus tiempos, organización y momento vital.'},
    {title:'Comunidad', text:'Acompañamiento, guía y compañeras para afianzar la raíz y disfrutar el camino.'}
  ];
}
