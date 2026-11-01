import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INSTAGRAM_URL, WHATSAPP_URL } from '../../config/contact';
import { BrandIconComponent } from '../brand-icon/brand-icon.component';

@Component({
  selector: 'app-footer-desktop-tablet',
  standalone: true,
  imports: [BrandIconComponent],
  templateUrl: './footer-desktop-tablet.component.html',
  styleUrl: './footer-desktop-tablet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterDesktopTabletComponent {
  readonly year = new Date().getFullYear();
  readonly instagramUrl = INSTAGRAM_URL;
  readonly whatsappUrl = WHATSAPP_URL;
}
