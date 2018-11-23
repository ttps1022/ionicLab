import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationRateYearComponent } from './participation-rate-year.component';

describe('ParticipationRateYearComponent', () => {
  let component: ParticipationRateYearComponent;
  let fixture: ComponentFixture<ParticipationRateYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipationRateYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipationRateYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
