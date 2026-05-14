import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { StatsComponent } from './components/stats/stats';
import { ProblemComponent } from './components/problem/problem';
import { FeaturesComponent } from './components/features/features';
import { HowComponent } from './components/how/how';
import { PricingComponent } from './components/pricing/pricing';
import { CtaFooterComponent } from './components/cta-footer/cta-footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    ProblemComponent,
    FeaturesComponent,
    HowComponent,
    PricingComponent,
    CtaFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}