import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringOfferDetailsComponent } from './tutoring-offer-details.component';

describe('TutoringOfferDetailsComponent', () => {
  let component: TutoringOfferDetailsComponent;
  let fixture: ComponentFixture<TutoringOfferDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoringOfferDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringOfferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
