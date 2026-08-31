import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-story-mobile',
  standalone: true,
  templateUrl: './story-mobile.component.html',
  styleUrl: './story-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryMobileComponent {}
