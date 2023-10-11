import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPdfComponent } from './angular-pdf.component';

describe('AngularPdfComponent', () => {
  let component: AngularPdfComponent;
  let fixture: ComponentFixture<AngularPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularPdfComponent]
    });
    fixture = TestBed.createComponent(AngularPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
