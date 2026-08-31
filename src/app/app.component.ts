import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DeviceService } from './services/device.service';
import { SignupCtaComponent } from './components/signup-cta/signup-cta.component';

import { HeroDesktopTabletComponent } from './components/hero-desktop-tablet/hero-desktop-tablet.component';
import { HeroMobileComponent } from './components/hero-mobile/hero-mobile.component';
import { PainPointsDesktopTabletComponent } from './components/pain-points-desktop-tablet/pain-points-desktop-tablet.component';
import { PainPointsMobileComponent } from './components/pain-points-mobile/pain-points-mobile.component';
import { StoryDesktopTabletComponent } from './components/story-desktop-tablet/story-desktop-tablet.component';
import { StoryMobileComponent } from './components/story-mobile/story-mobile.component';
import { GuidingPurposeDesktopTabletComponent } from './components/guiding-purpose-desktop-tablet/guiding-purpose-desktop-tablet.component';
import { GuidingPurposeMobileComponent } from './components/guiding-purpose-mobile/guiding-purpose-mobile.component';
import { MethodDesktopTabletComponent } from './components/method-desktop-tablet/method-desktop-tablet.component';
import { MethodMobileComponent } from './components/method-mobile/method-mobile.component';
import { RoadmapDesktopTabletComponent } from './components/roadmap-desktop-tablet/roadmap-desktop-tablet.component';
import { RoadmapMobileComponent } from './components/roadmap-mobile/roadmap-mobile.component';
import { IdealForDesktopTabletComponent } from './components/ideal-for-desktop-tablet/ideal-for-desktop-tablet.component';
import { IdealForMobileComponent } from './components/ideal-for-mobile/ideal-for-mobile.component';
import { ExperienceDesktopTabletComponent } from './components/experience-desktop-tablet/experience-desktop-tablet.component';
import { ExperienceMobileComponent } from './components/experience-mobile/experience-mobile.component';
import { ProcessDesktopTabletComponent } from './components/process-desktop-tablet/process-desktop-tablet.component';
import { ProcessMobileComponent } from './components/process-mobile/process-mobile.component';
import { FaqDesktopTabletComponent } from './components/faq-desktop-tablet/faq-desktop-tablet.component';
import { FaqMobileComponent } from './components/faq-mobile/faq-mobile.component';
import { FooterDesktopTabletComponent } from './components/footer-desktop-tablet/footer-desktop-tablet.component';
import { FooterMobileComponent } from './components/footer-mobile/footer-mobile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroDesktopTabletComponent,
    HeroMobileComponent,
    PainPointsDesktopTabletComponent,
    PainPointsMobileComponent,
    StoryDesktopTabletComponent,
    StoryMobileComponent,
    GuidingPurposeDesktopTabletComponent,
    GuidingPurposeMobileComponent,
    MethodDesktopTabletComponent,
    MethodMobileComponent,
    RoadmapDesktopTabletComponent,
    RoadmapMobileComponent,
    IdealForDesktopTabletComponent,
    IdealForMobileComponent,
    ExperienceDesktopTabletComponent,
    ExperienceMobileComponent,
    ProcessDesktopTabletComponent,
    ProcessMobileComponent,
    FaqDesktopTabletComponent,
    FaqMobileComponent,
    FooterDesktopTabletComponent,
    FooterMobileComponent,
    SignupCtaComponent
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private readonly deviceService = inject(DeviceService);

  /**
   * true en movil (<=760px). Cada seccion tiene una variante *-mobile y otra
   * *-desktop-tablet; hoy son identicas en contenido, pero al vivir en
   * componentes separados pueden evolucionar de forma independiente.
   */
  readonly isMobile = this.deviceService.isMobile;
}
