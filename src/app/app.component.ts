import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { PainPointsComponent } from './components/pain-points/pain-points.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { MethodComponent } from './components/method/method.component';
import { IdealForComponent } from './components/ideal-for/ideal-for.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { DeliverablesComponent } from './components/deliverables/deliverables.component';
import { WellnessBreakComponent } from './components/wellness-break/wellness-break.component';
import { ProcessComponent } from './components/process/process.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { FaqComponent } from './components/faq/faq.component';
import { FinalCtaComponent } from './components/final-cta/final-cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    PainPointsComponent,
    MethodComponent,
    WellnessBreakComponent,
    RoadmapComponent,
    DeliverablesComponent,
    IdealForComponent,
    PurposeComponent,
    ProcessComponent,
    OpportunityComponent,
    FaqComponent,
    FinalCtaComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
