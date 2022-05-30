import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringOfferListItemComponent } from './tutoring-offer-list-item.component';

describe('TutoringOfferListItemComponent', () => {
  let component: TutoringOfferListItemComponent;
  let fixture: ComponentFixture<TutoringOfferListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoringOfferListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringOfferListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
