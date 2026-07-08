import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor, MatExpansionModule, MatIconModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {
  readonly faqs = [
    { icon: 'self_improvement', q: 'Nunca he practicado Yoga ni Pilates ni meditación, ¿es necesario tener una base mínima?', a: 'Cualquier persona con movilidad puede unirse a la Escuela, con o sin experiencia previa. Hay gran variedad de clases, de más intensidad y de menos. Podrás verlas y trabajarlas las veces que quieras y pararlas siempre que lo necesites. Lo importante es que escuches tu cuerpo y hagas caso a las sensaciones. El dolor siempre muestra un límite: para o adapta. Naturalmente en el proceso surgirán dudas (¡bien, estamos aprendiendo!); habrá espacios donde consultarlas.' },
    { icon: 'explore', q: '¿Qué aspectos o temas voy a trabajar en la Escuela?', a: 'A lo largo del curso haremos un viaje desde nuestra energía raíz (Muladhara, primer chakra) hasta nuestro centro más elevado y sutil (Swadisthana, séptimo chakra), explorando de manera física y espiritual a través de herramientas como: Ejercicios de Yoga, Pilates, QiGong (Chikung), baile y otras técnicas corporales para sentir y tonificar esa parte del cuerpo y despertar esos chakras en una misma; Alimentación adecuada a cada estación; Referencias a la naturaleza: fases de la luna; rueda solar; observaciones sobre el comportamiento animal y vegetal; Rituales; Planes complementarios: museo, exposición; Lectura, película o artículo acorde; Talleres y encuentros presenciales; Propuestas de planes artísticos: cocina, dibujo, manualidad; Sesiones con colaboradoras expertas.' },
    { icon: 'sync_alt', q: '¿Qué ocurre si mi situación cambia y me impide seguir el ritmo propuesto?', a: 'Las propuestas son eso: propuestas. Vas a poder avanzar a tu ritmo, sin presión. En caso de duda, puedes comunicarnos tu caso y valoraremos juntas la mejor opción.' },
    { icon: 'payments', q: '¿Qué ocurre si en el trascurrir del curso mi situación económica empeora y me siento apurada?', a: 'Comunica tu caso al Equipo y valoraremos la mejor opción.' },
    { icon: 'auto_awesome', q: 'Tengo algo de experiencia con el Yoga o el Pilates, ¿voy a aprender más realmente?', a: 'Siempre. Tienes delante -nos atrevemos a decir- la Escuela de Bienestar Online con contenido más variado del país. El Pilates y, mucho más, el Yoga, son disciplinas muy amplias, un estilo de vida. Conocerás diferentes prácticas y enfoques. En el caso del Yoga, podrás profundizar en Iyengar, Integral, Hatha, Nidra o Raja.' },
    { icon: 'tune', q: '¿Es un contenido fijo o tengo algún poder de decisión en lo que quiero aprender?', a: 'Habrá un contenido central, único para todos los alumnos, y Contenidos Dinámicos, temarios optativos donde podrás elegir el que más te guste.' },
    { icon: 'groups', q: '¿Cómo sé que habrá personas afines a mí en la Escuela y en las que confiar?', a: 'El enfoque de la Escuela RespiraBonito es integral: trabajamos cuerpo, mente y espíritu. Aquí nos encontramos personas hispanohablantes de todo el mundo abiertas a aprender sobre esto, porque algo dentro de nosotras nos dice que podemos mejorar, es más, que hemos nacido para ser nuestra mejor versión y ser felices. Y aquí presentamos un método para conseguirlo. Además, hay un filtro para formar parte de la Escuela, nos elegimos mutuamente. Por último, los comentarios, tutorías y compartires grupales estarán supervisados por el Equipo, que cuidará de que se mantenga un ambiente sano y nutritivo.' },
    { icon: 'help', q: '¿Me podrías ayudar a tomar la decisión?', a: 'Claro. Si tras leer la respuesta a estas preguntas tienes alguna duda, rellena el formulario (poner hipervínculo) y nos pondremos en contacto contigo.' },
    { icon: 'favorite', q: '¿Cómo va a ser el acompañamiento?', a: 'Vamos a conocernos personalmente desde el principio, por llamada y a través de la plataforma. Tanto el equipo de profesionales como tus compañeras estamos para acompañarte en tu proceso. Podrás expresarte, compartir y consultar tus dudas.' },
    { icon: 'workspace_premium', q: '¿Al final de este curso obtendré algún diploma o reconocimiento?', a: 'Todo lo que te llevarás será tu experiencia, tus apuntes, amistades y el acceso continuado e ilimitado mientras seas miembro de la Escuela. No recibirás titulación oficial.' }
  ];
}
