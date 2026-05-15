import { Routes } from '@angular/router';
import { PrivacyComponent } from './pages/privacy/privacy';
import { HomeComponent } from './pages/home/home';
import { TermsComponent } from './pages/terms/terms';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'terms', component: TermsComponent }
];