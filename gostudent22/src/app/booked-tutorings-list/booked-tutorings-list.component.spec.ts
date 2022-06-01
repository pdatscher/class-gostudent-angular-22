import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedTutoringsListComponent } from './booked-tutorings.component';

describe('BookedTutoringsComponent', () => {
  let component: BookedTutoringsListComponent;
  let fixture: ComponentFixture<BookedTutoringsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedTutoringsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedTutoringsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
