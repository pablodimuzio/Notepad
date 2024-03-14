import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public accessToken: string = '';

  constructor(
    private authService: SocialAuthService,
    private httpClient: HttpClient
    ) { }

  public isLoggedIn(): boolean {
    return !(!this.accessToken);
  }

  async getAccessToken(user: SocialUser): Promise<string> {
    
    await this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => {
      this.accessToken = accessToken;
    });

    return this.accessToken;
  }
}
