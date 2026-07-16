import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { isPlatformBrowser, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface JourneyOrb {
  icon: string;
  title: string;
  description: string;
  accent: string;
  angle: string;
}

const JOURNEY_ITEMS: JourneyOrb[] = [
  {
    icon: 'self_improvement',
    title: 'Yoga, Pilates y QiGong',
    description: 'Yoga, Pilates, QiGong (Chikung) y otras técnicas corporales para sentir y tonificar esa parte del cuerpo y despertar esos chakras en una misma.',
    accent: '#9e315f',
    angle: '0deg'
  },
  {
    icon: 'restaurant',
    title: 'Alimentación de temporada',
    description: 'Alimentación adecuada a cada estación.',
    accent: '#c16d68',
    angle: '40deg'
  },
  {
    icon: 'nature',
    title: 'Referencias a la naturaleza',
    description: 'Fases de la luna, ciclo menstrual; rueda solar; comportamiento animal: migraciones, hibernaciones, etc.; plantas: florecimientos, etc.',
    accent: '#6f8f6c',
    angle: '80deg'
  },
  {
    icon: 'auto_awesome',
    title: 'Rituales corporales',
    description: 'Rituales que integren el sentir en el cuerpo.',
    accent: '#9a7a45',
    angle: '120deg'
  },
  {
    icon: 'museum',
    title: 'Planes complementarios',
    description: 'Propuestas de planes complementarios: museo, exposición.',
    accent: '#846fa1',
    angle: '160deg'
  },
  {
    icon: 'menu_book',
    title: 'Lectura, película o artículo',
    description: 'Lectura, película o artículo acorde.',
    accent: '#738baa',
    angle: '200deg'
  },
  {
    icon: 'groups',
    title: 'Talleres y encuentros',
    description: 'Talleres y encuentros presenciales.',
    accent: '#5f8d83',
    angle: '240deg'
  },
  {
    icon: 'palette',
    title: 'Planes artísticos',
    description: 'Propuestas de planes artísticos: cocina, dibujo, manualidad.',
    accent: '#bf7659',
    angle: '280deg'
  },
  {
    icon: 'diversity_1',
    title: 'Colaboradoras expertas',
    description: 'Sesiones con colaboradoras expertas.',
    accent: '#8a5f78',
    angle: '320deg'
  }
];

@Component({
  selector: 'app-roadmap',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, MatIconModule],
  templateUrl: './roadmap.component.html',
  styleUrl: './journey-dynamics.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadmapComponent implements AfterViewInit, OnDestroy {
  readonly journeyItems = JOURNEY_ITEMS;

  @ViewChild('roadmapSection') private roadmapSection?: ElementRef<HTMLElement>;

  mandalaReady = false;

  /**
   * Alias mantenido para las versiones de la plantilla móvil que todavía
   * utilizan `mobileMandalaReady`. Ambos estados se activan a la vez.
   */
  get mobileMandalaReady(): boolean {
    return this.mandalaReady;
  }

  private sectionObserver?: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !this.roadmapSection) {
      return;
    }

    const section = this.roadmapSection.nativeElement;

    if (!('IntersectionObserver' in window)) {
      this.activateMandala();
      return;
    }

    this.sectionObserver = new IntersectionObserver(
      entries => {
        if (!entries.some(entry => entry.isIntersecting)) {
          return;
        }

        this.activateMandala();
        this.sectionObserver?.disconnect();
      },
      { rootMargin: '0px 0px -14% 0px', threshold: 0.16 }
    );

    this.sectionObserver.observe(section);
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  trackByTitle(_: number, item: JourneyOrb): string {
    return item.title;
  }

  private activateMandala(): void {
    this.mandalaReady = true;
    this.changeDetectorRef.markForCheck();
  }
}
