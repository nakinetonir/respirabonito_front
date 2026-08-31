import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer-mobile',
  standalone: true,
  imports: [],
  templateUrl: './footer-mobile.component.html',
  styleUrl: './footer-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterMobileComponent {
  readonly year = new Date().getFullYear();
}
