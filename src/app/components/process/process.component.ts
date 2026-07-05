import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({selector:'app-process', standalone:true, imports:[NgFor, MatCardModule], templateUrl:'./process.component.html', styleUrl:'./process.component.scss'})
export class ProcessComponent { steps = [
{title:'Rellena el formulario', text:'Envía tu nombre y correo electrónico para solicitar plaza.'},
{title:'Nos conocemos', text:'En los días posteriores contactaremos contigo para conocernos mejor.'},
{title:'Vemos si es tu momento', text:'Las plazas son limitadas y cuidamos que el grupo tenga sentido.'}
]; }
