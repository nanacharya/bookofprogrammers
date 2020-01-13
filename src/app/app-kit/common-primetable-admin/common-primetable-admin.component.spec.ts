import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPrimetableAdminComponent } from './common-primetable-admin.component';

describe('CommonPrimetableAdminComponent', () => {
  let component: CommonPrimetableAdminComponent;
  let fixture: ComponentFixture<CommonPrimetableAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPrimetableAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPrimetableAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
