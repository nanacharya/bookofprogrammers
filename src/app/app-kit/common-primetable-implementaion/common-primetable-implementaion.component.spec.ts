import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPrimetableImplementaionComponent } from './common-primetable-implementaion.component';

describe('CommonPrimetableImplementaionComponent', () => {
  let component: CommonPrimetableImplementaionComponent;
  let fixture: ComponentFixture<CommonPrimetableImplementaionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPrimetableImplementaionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPrimetableImplementaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
