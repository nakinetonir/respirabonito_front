import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { NgFor, isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pain-points-desktop-tablet',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './pain-points-desktop-tablet.component.html',
  styleUrl: './pain-points-desktop-tablet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PainPointsDesktopTabletComponent implements AfterViewInit {
  @ViewChild('mandalaVideo') private readonly mandalaVideo?: ElementRef<HTMLVideoElement>;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  /**
   * Android/Chrome a veces ignora el atributo HTML `muted` y bloquea el
   * autoplay si la propiedad del elemento no está en `true` en el momento
   * de llamar a `play()`; se fuerza aquí para que el vídeo no se quede solo
   * en el poster. Solo aplica en el navegador: el DOM del renderizado en
   * servidor no implementa `play()`.
   */
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const video = this.mandalaVideo?.nativeElement;
    if (!video) {
      return;
    }
    video.muted = true;
    video.play().catch(() => {});
  }
  readonly points = [
    {
      icon: 'schedule',
      text: '¿Sientes que la semana pasa rápido y enlazas tareas y actividades casi sin darte cuenta?'
    },
    {
      icon: 'sync_problem',
      text: '¿Sientes que tu cuerpo y tu mente van por distintos caminos?'
    },
    {
      icon: 'health_and_safety',
      text: '¿Tienes molestias o incomodidad en el cuerpo que te gustaría atender y cuidar?'
    },
    {
      icon: 'event_available',
      text: '¿Necesitas un método que te ayude a priorizar y organizarte mejor?'
    },
    {
      icon: 'diversity_3',
      text: '¿Percibes vínculos con las personas de tu entorno, pero echas en falta profundidad?'
    }
  ];
}
