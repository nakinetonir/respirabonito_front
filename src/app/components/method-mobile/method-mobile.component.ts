import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-method-mobile',
  standalone: true,
  imports: [NgFor, MatCardModule, MatIconModule],
  templateUrl: './method-mobile.component.html',
  styleUrl: './method-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodMobileComponent implements AfterViewInit {
  @ViewChild('methodSection', { static: true }) private readonly methodSection?: ElementRef<HTMLElement>;

  progress = 0;

  readonly pillars = [
    {
      icon: 'favorite',
      number: '01',
      tone: 'rose',
      title: 'Bienestar',
      text: 'A través de un enfoque integral, el objetivo es mejorar la salud en el plano mental, físico y emocional.'
    },
    {
      icon: 'trending_up',
      number: '02',
      tone: 'green',
      title: 'Progreso',
      text: 'Queremos crecer, y eso implica trabajo y compromiso: propuestas que cada alumna adapta a su tiempo y organización.'
    },
    {
      icon: 'groups',
      number: '03',
      tone: 'blue',
      title: 'Comunidad',
      text: 'Nos abrimos con confianza a la Guía y a las compañeras: afianza nuestra raíz y hace el camino más fácil y divertido.'
    }
  ];

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.updateProgress();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  updateProgress(): void {
    const section = this.methodSection?.nativeElement;
    if (!section || typeof window === 'undefined') {
      return;
    }

    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const totalTravel = rect.height + viewportHeight;
    const distanceCovered = viewportHeight - rect.top;
    const nextProgress = Math.max(0, Math.min(1, distanceCovered / totalTravel));

    if (Math.abs(nextProgress - this.progress) > 0.01) {
      this.progress = nextProgress;
      this.cdr.markForCheck();
    }
  }
}
