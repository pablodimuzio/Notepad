import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authService: SocialAuthService,
    private httpClient: HttpClient
    ) { }

  public isLoggedIn(): boolean {
    return false;
  }
  
}
