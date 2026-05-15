import { Routes } from '@angular/router';
import { PrivacyComponent } from './pages/privacy/privacy';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacy', component: PrivacyComponent }
];