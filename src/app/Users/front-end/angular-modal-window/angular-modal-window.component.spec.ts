import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularModalWindowComponent } from './angular-modal-window.component';

describe('AngularModalWindowComponent', () => {
  let component: AngularModalWindowComponent;
  let fixture: ComponentFixture<AngularModalWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularModalWindowComponent]
    });
    fixture = TestBed.createComponent(AngularModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
