import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringOfferListComponent } from './tutoring-offer-list.component';

describe('TutoringOfferListComponent', () => {
  let component: TutoringOfferListComponent;
  let fixture: ComponentFixture<TutoringOfferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoringOfferListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringOfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
