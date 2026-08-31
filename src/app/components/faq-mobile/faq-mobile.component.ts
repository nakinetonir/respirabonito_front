import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-faq-mobile',
  standalone: true,
  imports: [NgFor, MatExpansionModule, MatIconModule],
  templateUrl: './faq-mobile.component.html',
  styleUrl: './faq-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqMobileComponent {
  readonly faqs = [
    { icon: 'self_improvement', q: 'Nunca he practicado Yoga ni Pilates ni meditación, ¿es necesario tener una base mínima?', a: 'Cualquier persona con movilidad puede unirse, con o sin experiencia previa: hay clases de distinta intensidad que puedes ver y repetir a tu ritmo. Lo importante es escuchar tu cuerpo -el dolor marca el límite- y saber que surgirán dudas; tendrás espacios donde resolverlas.' },
    { icon: 'explore', q: '¿Qué aspectos o temas voy a trabajar en la Escuela?', a: 'Un viaje desde tu energía raíz (primer chakra) hasta tu centro más elevado (séptimo chakra), combinando Yoga, Pilates y QiGong, alimentación de temporada, referencias a la naturaleza, rituales, planes artísticos y complementarios, lecturas y sesiones con colaboradoras expertas.' },
    { icon: 'sync_alt', q: '¿Qué ocurre si mi situación cambia y me impide seguir el ritmo propuesto?', a: 'Las propuestas son eso, propuestas: avanzas a tu ritmo, sin presión. Si tienes dudas, cuéntanos tu caso y valoramos juntas la mejor opción.' },
    { icon: 'payments', q: '¿Qué ocurre si en el transcurrir del curso mi situación económica empeora y me siento apurada?', a: 'Comunica tu caso al Equipo y valoraremos la mejor opción.' },
    { icon: 'auto_awesome', q: 'Tengo algo de experiencia con el Yoga o el Pilates, ¿voy a aprender más realmente?', a: 'Siempre. Esta es -nos atrevemos a decir- la Escuela de Bienestar Online con más contenido variado del país. Conocerás distintas prácticas y enfoques, y en Yoga podrás profundizar en Iyengar, Integral, Hatha, Nidra o Raja.' },
    { icon: 'tune', q: '¿Es un contenido fijo o tengo algún poder de decisión en lo que quiero aprender?', a: 'Habrá un contenido central para todas y Contenidos Dinámicos optativos que podrás elegir a tu gusto.' },
    { icon: 'groups', q: '¿Cómo sé que habrá personas afines a mí en la Escuela y en las que confiar?', a: 'El enfoque es integral: cuerpo, mente y espíritu. Aquí te encuentras con personas hispanohablantes de todo el mundo que, como tú, quieren ser su mejor versión. Además nos elegimos mutuamente al entrar, y el Equipo supervisa tutorías y comentarios para cuidar un ambiente sano y nutritivo.' },
    { icon: 'help', q: '¿Me podrías ayudar a tomar la decisión?', a: 'Claro. Si tras leer la respuesta a estas preguntas tienes alguna duda, rellena el formulario y nos pondremos en contacto contigo.' },
    { icon: 'favorite', q: '¿Cómo va a ser el acompañamiento?', a: 'Nos conocemos desde el principio, por llamada y a través de la plataforma. El equipo y tus compañeras te acompañamos: podrás expresarte, compartir y resolver tus dudas.' },
    { icon: 'workspace_premium', q: '¿Al final de este curso obtendré algún diploma o reconocimiento?', a: 'Te llevarás tu experiencia, tus apuntes, amistades y acceso continuado mientras seas miembro. No hay titulación oficial.' }
  ];
}
