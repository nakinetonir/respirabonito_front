import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-purpose',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './purpose.component.html',
  styleUrl: './purpose.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurposeComponent {}
