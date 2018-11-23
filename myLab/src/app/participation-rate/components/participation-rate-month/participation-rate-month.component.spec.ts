import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationRateMonthComponent } from './participation-rate-month.component';

describe('ParticipationRateMonthComponent', () => {
  let component: ParticipationRateMonthComponent;
  let fixture: ComponentFixture<ParticipationRateMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipationRateMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipationRateMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
