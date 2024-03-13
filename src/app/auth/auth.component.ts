import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SocialAuthService, GoogleSigninButtonModule, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

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

  accessToken: string = '';

  constructor(
    private Router: Router,
    private authService: SocialAuthService,
    private httpClient: HttpClient,
    ) {  }

  async getAccessToken(user: SocialUser): Promise<string> {
    
    await this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => {
      this.accessToken = accessToken;
    });

    return this.accessToken;
  }

  async sendAccessTokenToServer(accessToken: string): Promise<string> {
    const url = 'http://localhost:3300/login';
    const body = {accessToken: accessToken};
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    await this.httpClient.post(url, body, options).subscribe((response) => {
      return response;
    });

    return 'Error: Could not send access token to server.'
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if (user) {
        console.log('User is logged in.');
        this.getAccessToken(user)
        .then((accessToken) => {
          console.log(this.sendAccessTokenToServer(accessToken));
        })
        .then(() => {
          this.Router.navigate(['/']);
        })
        .catch((error) => {
          console.error('Error: ' + error);
        });
      }
    })
  }
}

