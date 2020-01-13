import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPrimetableComponent } from './common-primetable.component';

describe('CommonPrimetableComponent', () => {
  let component: CommonPrimetableComponent;
  let fixture: ComponentFixture<CommonPrimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPrimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPrimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
