import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOfTheMonthComponent } from './car-of-the-month.component';

describe('CarOfTheMonthComponent', () => {
  let component: CarOfTheMonthComponent;
  let fixture: ComponentFixture<CarOfTheMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarOfTheMonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarOfTheMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
