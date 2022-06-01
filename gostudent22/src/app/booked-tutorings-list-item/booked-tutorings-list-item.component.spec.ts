import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedTutoringsListItemComponent } from './booked-tutorings-list-item.component';

describe('BookedTutoringsListItemComponent', () => {
  let component: BookedTutoringsListItemComponent;
  let fixture: ComponentFixture<BookedTutoringsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedTutoringsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedTutoringsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
