import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Notes } from '../interfaces/notes';

import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notepad',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './notepad.component.html',
  styleUrl: './notepad.component.scss',
})
export class NotepadComponent implements OnInit {
  note: Notes = {
    id: -1,
    title: '',
    content: '',
    date: new Date(),
  };

  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService,
    private Router: Router
  ) {

    const id = parseInt(this.route.snapshot.params['id']);

    if (this.notesService.getNoteById(id) == null) {

      Router.navigate(['/notepad']);

    } else {

      this.note = this.notesService.getNoteById(id)!;

    }
  }

  ngOnInit(): void {}

}
