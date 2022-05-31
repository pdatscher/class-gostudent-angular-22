import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorListItemComponent } from './tutor-list-item.component';

describe('TutorListItemComponent', () => {
  let component: TutorListItemComponent;
  let fixture: ComponentFixture<TutorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
