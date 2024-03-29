import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCardsComponent } from './note-cards.component';

describe('NoteCardsComponent', () => {
  let component: NoteCardsComponent;
  let fixture: ComponentFixture<NoteCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
