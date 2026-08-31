import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-story-desktop-tablet',
  standalone: true,
  templateUrl: './story-desktop-tablet.component.html',
  styleUrl: './story-desktop-tablet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryDesktopTabletComponent {}
