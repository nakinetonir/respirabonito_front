import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({selector:'app-deliverables', standalone:true, imports:[NgFor], templateUrl:'./deliverables.component.html', styleUrl:'./deliverables.component.scss'})
export class DeliverablesComponent {
  icons = [
    {src:'assets/icons/icono_1.svg', title:'Yoga'},
    {src:'assets/icons/icono_2.svg', title:'Música y voz'},
    {src:'assets/icons/icono_3.svg', title:'Pilates'},
    {src:'assets/icons/icono_4.svg', title:'Masajes y tacto'},
    {src:'assets/icons/icono_5.svg', title:'Meditación'},
    {src:'assets/icons/icono_6.svg', title:'Expresión corporal'},
    {src:'assets/icons/icono_7.svg', title:'Hábitos y creencias'},
    {src:'assets/icons/icono_8.svg', title:'Nutrición y Ayurveda'}
  ];
}
