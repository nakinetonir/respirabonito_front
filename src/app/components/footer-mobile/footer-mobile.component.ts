import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INSTAGRAM_URL, WHATSAPP_URL } from '../../config/contact';
import { BrandIconComponent } from '../brand-icon/brand-icon.component';

@Component({
  selector: 'app-footer-mobile',
  standalone: true,
  imports: [BrandIconComponent],
  templateUrl: './footer-mobile.component.html',
  styleUrl: './footer-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterMobileComponent {
  readonly year = new Date().getFullYear();
  readonly instagramUrl = INSTAGRAM_URL;
  readonly whatsappUrl = WHATSAPP_URL;
}
