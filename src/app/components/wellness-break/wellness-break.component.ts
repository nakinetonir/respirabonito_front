import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wellness-break',
  standalone: true,
  templateUrl: './wellness-break.component.html',
  styleUrl: './wellness-break.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellnessBreakComponent {}
