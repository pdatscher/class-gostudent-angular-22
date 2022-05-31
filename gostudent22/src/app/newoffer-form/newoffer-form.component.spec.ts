import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewofferFormComponent } from './newoffer-form.component';

describe('NewofferFormComponent', () => {
  let component: NewofferFormComponent;
  let fixture: ComponentFixture<NewofferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewofferFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewofferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
