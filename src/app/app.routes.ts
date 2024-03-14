import { Routes } from '@angular/router';

import { NotepadComponent } from './notepad/notepad.component';
import { MenuComponent } from './menu/menu.component';
import { AuthComponent } from './auth/auth.component';

import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', 
    component: MenuComponent,
    canActivate: [authGuard],
},
    { 
        path: 'notepad',
        children: [
            { path: '', component: NotepadComponent},
            { path: ':id', component: NotepadComponent },
        ],
        canActivate: [authGuard],
 },
    {path: 'login', component: AuthComponent},
    { path: '**', redirectTo: '' },
];
