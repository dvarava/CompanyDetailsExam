import { Routes } from '@angular/router';
import { DisplayDetailsComponent } from './components/display-details/display-details.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: '', component: DisplayDetailsComponent },
    { path: 'about', component: AboutComponent },
];