import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTosterComponent } from './alert-toster.component';

describe('AlertTosterComponent', () => {
  let component: AlertTosterComponent;
  let fixture: ComponentFixture<AlertTosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertTosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertTosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
