import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SocialAuthService, GoogleSigninButtonModule, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';

import { AuthService } from '../services/auth.service';
import { NotesService } from '../services/notes.service';

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
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private noteService: NotesService,
    ) {  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      if (user) {
        console.log('User is logging-in.');
        this.authService.getAccessToken(user)
        .then((accessToken) => {
          this.noteService.getPageNotes(accessToken, 0, 3).then((notes) => {console.log(notes)});
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

