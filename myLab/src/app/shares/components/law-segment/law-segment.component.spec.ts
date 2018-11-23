import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawSegmentComponent } from './law-segment.component';

describe('LawSegmentComponent', () => {
  let component: LawSegmentComponent;
  let fixture: ComponentFixture<LawSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
