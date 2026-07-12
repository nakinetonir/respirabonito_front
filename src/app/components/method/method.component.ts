import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [NgFor, MatCardModule, MatIconModule],
  templateUrl: './method.component.html',
  styleUrl: './method.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodComponent implements AfterViewInit {
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
      text: 'Queremos crecer y esto implica trabajo y compromiso, con unas indicaciones y propuestas que cada alumna puede adaptar a sus tiempos y organización.'
    },
    {
      icon: 'groups',
      number: '03',
      tone: 'blue',
      title: 'Comunidad',
      text: 'Vivimos en sociedad y por lo tanto somos interdependientes. En la Escuela nos abrimos con confianza a la Guía y a las demás compañeras, porque esto permite afianzar nuestra raíz y hace el camino más fácil y divertido.'
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
