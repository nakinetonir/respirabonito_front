import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinalCtaComponent {}
