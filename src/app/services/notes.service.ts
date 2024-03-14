import { Injectable } from '@angular/core';
import { Notes } from '../interfaces/notes';

import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpClient: HttpClient) { }

  getAllNotes(){
    return NOTES;
  }

  getNoteById(id: number){
    return NOTES.find((note) => note.id === id);
  }

  createNote(note: Notes){
    NOTES.push(note);
  }

  async getPageNotes(accessToken: string, page: number = 0, notesPerPages: number = 3): Promise<string> {
    const url = 'http://localhost:3300/auth';
    const body = {
      accessToken: accessToken,
      page: page,
      notesPerPages: notesPerPages,
    };
    const options = {
      headers: {
        'Content-Type': 'application/json'
      },
    };

    try {
      return await lastValueFrom(this.httpClient.post<string>(url, body, options));
    } catch(error) {
      return Promise.reject(error);
    }
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
