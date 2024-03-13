import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SocialAuthService, GoogleSigninButtonModule, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    GoogleSigninButtonModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit{

  accessToken = '';

  constructor(
    private Router: Router,
    private authService: SocialAuthService
    ) {}

  async getAccessToken(user: SocialUser): Promise<string> {
    
    await this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => {
      this.accessToken = accessToken;
    });

    return this.accessToken;
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if (user) {
        console.log('User is logged in.');
        this.getAccessToken(user)
        .then((accessToken) => {
          console.log('Access token: ' + accessToken)
        })
        .then(() => {
          this.Router.navigate(['/']);
        })
        .catch((error) => {
          console.error('Error: ' + error);
        });
      }
    })
    console.log('AuthComponent initialized.')
  }
}

