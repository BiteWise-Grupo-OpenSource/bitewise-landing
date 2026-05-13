import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { DashboardPreviewComponent } from './components/dashboard-preview/dashboard-preview';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, DashboardPreviewComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}