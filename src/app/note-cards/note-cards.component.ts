import { Component, Input } from '@angular/core';
import { Notes } from '../interfaces/notes';

@Component({
  selector: 'app-note-cards',
  standalone: true,
  imports: [],
  templateUrl: './note-cards.component.html',
  styleUrl: './note-cards.component.scss'
})
export class NoteCardsComponent {
  @Input() note!: Notes;
}
