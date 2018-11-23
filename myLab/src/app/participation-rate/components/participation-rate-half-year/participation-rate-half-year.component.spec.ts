import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationRateHalfYearComponent } from './participation-rate-half-year.component';

describe('ParticipationRateHalfYearComponent', () => {
  let component: ParticipationRateHalfYearComponent;
  let fixture: ComponentFixture<ParticipationRateHalfYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipationRateHalfYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipationRateHalfYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
