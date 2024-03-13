import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()), 
    provideAnimationsAsync(),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '490932244124-saet96ukom68rgese3tmri2hkdkk333h.apps.googleusercontent.com',
              { scopes: 'https://www.googleapis.com/auth/spreadsheets'}
            )
          }
        ],
        onError: (error) => {
          console.error(error);
        }
      } as SocialAuthServiceConfig,
    }
  ]};
