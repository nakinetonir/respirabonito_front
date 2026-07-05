import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({selector:'app-roadmap', standalone:true, imports:[NgFor, MatTabsModule, MatIconModule], templateUrl:'./roadmap.component.html', styleUrl: './journey-dynamics.component.css'})
export class RoadmapComponent {
  cuerpo = ['Yoga', 'Pilates', 'QiGong / Chikung', 'Baile y expresión corporal', 'Masaje y tacto consciente'];
  alma = ['Meditación', 'Rituales', 'Fases de la luna', 'Rueda solar', 'Chakras'];
  vida = ['Alimentación de temporada', 'Lecturas y películas', 'Planes artísticos', 'Talleres presenciales', 'Sesiones con expertas'];

  cuerpoItems = [
    { icon: 'self_improvement', title: 'Yoga', description: 'Prácticas corporales para sentir, respirar y fortalecer desde la escucha del cuerpo.' },
    { icon: 'fitness_center', title: 'Pilates', description: 'Trabajo de centro, postura y tono corporal con intensidad progresiva.' },
    { icon: 'air', title: 'QiGong / Chikung', description: 'Movimiento suave, respiración y presencia para equilibrar la energía.' },
    { icon: 'directions_run', title: 'Baile y expresión corporal', description: 'Dinámicas creativas para liberar tensión, emoción y movimiento.' },
    { icon: 'spa', title: 'Masaje y tacto consciente', description: 'Herramientas de autocuidado para habitar el cuerpo con calma.' }
  ];

  almaItems = [
    { icon: 'nights_stay', title: 'Meditación', description: 'Espacios de silencio y observación para enfocar la mente y abrir presencia.' },
    { icon: 'auto_awesome', title: 'Rituales', description: 'Pequeños gestos simbólicos para marcar procesos, cambios y nuevos comienzos.' },
    { icon: 'favorite', title: 'Autoconocimiento', description: 'Propuestas para reconocer emociones, necesidades y patrones internos.' },
    { icon: 'groups', title: 'Comunidad', description: 'Acompañamiento en un entorno consciente, cuidado y amoroso.' }
  ];

  vidaItems = [
    { icon: 'restaurant', title: 'Alimentación estacional', description: 'Ideas sencillas de nutrición y Ayurveda adaptadas a cada momento del año.' },
    { icon: 'local_florist', title: 'Naturaleza y ciclos', description: 'Fases lunares, rueda solar, ciclos vitales y observación de plantas y animales.' },
    { icon: 'palette', title: 'Planes artísticos', description: 'Cocina, dibujo, manualidades, lecturas, películas y propuestas complementarias.' },
    { icon: 'handshake', title: 'Encuentros y colaboradoras', description: 'Talleres, sesiones y contenidos con profesionales invitadas.' }
  ];

}
