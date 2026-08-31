import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero-desktop-tablet',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './hero-desktop-tablet.component.html',
  styleUrl: './hero-desktop-tablet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDesktopTabletComponent {}
