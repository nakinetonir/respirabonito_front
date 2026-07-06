import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-opportunity',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './opportunity.component.html',
  styleUrl: './opportunity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpportunityComponent {}
