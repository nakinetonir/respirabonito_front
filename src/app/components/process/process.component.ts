import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessComponent {}
