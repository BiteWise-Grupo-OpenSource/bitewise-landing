import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { StatsComponent } from './components/stats/stats';
import { ProblemComponent } from './components/problem/problem';
import { FeaturesComponent } from './components/features/features';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    ProblemComponent,
    FeaturesComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}