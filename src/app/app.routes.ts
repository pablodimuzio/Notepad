import { Routes } from '@angular/router';

import { NotepadComponent } from './notepad/notepad.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path: '', component: MenuComponent},
    { 
        path: 'notepad',
        children: [
            { path: '', component: NotepadComponent},
            { path: ':id', component: NotepadComponent },
        ],
 },
    { path: '**', redirectTo: '' },
];
