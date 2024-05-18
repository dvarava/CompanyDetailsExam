import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayDetailsComponent } from './components/display-details/display-details.component';
import { AboutComponent } from './components/about/about.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayDetailsComponent, AboutComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CompanyDetailsExam';
}
