import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';
import { SocialAuthService } from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Notepad';

  constructor() {}
}
