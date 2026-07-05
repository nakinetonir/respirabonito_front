import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({selector:'app-ideal-for', standalone:true, imports:[NgFor, MatIconModule], templateUrl:'./ideal-for.component.html', styleUrl:'./ideal-for.component.scss'})
export class IdealForComponent {
  items = [
    'Sientes que la vida va demasiado rápida y necesitas parar.',
    'Quieres aprender a relajarte y retomar el contacto con tu cuerpo.',
    'Buscas unión de práctica y conocimientos sobre salud integral en un solo espacio.',
    'Te sientes sola o poco identificada con tu entorno.',
    'Algo dentro de ti sabe que necesitas soltar y fluir más.',
    'Quieres desarrollarte acompañada en un entorno consciente y amoroso.'
  ];
}
