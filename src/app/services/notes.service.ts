import { Injectable } from '@angular/core';
import { Notes } from '../interfaces/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  getAllNotes(){
    return NOTES;
  }

  getNoteById(id: number){
    return NOTES.find((note) => note.id === id);
  }

  createNote(note: Notes){
    NOTES.push(note);
  }
}

  const NOTES: Notes[] = [
  {
    id: 1,
    title: 'Note 1',
    content: 'This is a note',
    date: new Date(),
  },
  {
    id: 2,
    title: 'Note 2',
    content: 'This is another note',
    date: new Date(),
  },
  {
    id: 3,
    title: 'Note 3',
    content: 'This is yet another note',
    date: new Date(),
  },
];
