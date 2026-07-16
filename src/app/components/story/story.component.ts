import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-story',
  standalone: true,
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryComponent {}
