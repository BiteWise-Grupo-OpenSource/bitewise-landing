import { Routes } from '@angular/router';
import { PrivacyComponent } from './pages/privacy/privacy';
import { HomeComponent } from './pages/home/home';
import { TermsComponent } from './pages/terms/terms';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'contact', component: ContactComponent }
];