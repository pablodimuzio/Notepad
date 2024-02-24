import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { NoteCardsComponent } from '../note-cards/note-cards.component';
import { Notes } from '../interfaces/notes';

import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    NoteCardsComponent,
    RouterLink,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  notes: Notes[] = [];

  constructor(private notesService: NotesService) {
    this.notes = this.notesService.getAllNotes();
  }

}
