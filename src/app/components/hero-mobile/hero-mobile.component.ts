import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero-mobile',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './hero-mobile.component.html',
  styleUrl: './hero-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroMobileComponent {}
