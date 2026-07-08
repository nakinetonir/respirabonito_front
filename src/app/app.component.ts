import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PainPointsComponent } from './components/pain-points/pain-points.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { MethodComponent } from './components/method/method.component';
import { IdealForComponent } from './components/ideal-for/ideal-for.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { ProcessComponent } from './components/process/process.component';
import { FaqComponent } from './components/faq/faq.component';
import { FinalCtaComponent } from './components/final-cta/final-cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    PainPointsComponent,
    PurposeComponent,
    TestimonialsComponent,
    MethodComponent,
    RoadmapComponent,
    IdealForComponent,
    AchievementsComponent,
    ProcessComponent,
    FaqComponent,
    FinalCtaComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
