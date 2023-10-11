import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSolidPrincipleComponent } from './angular-solid-principle.component';

describe('AngularSolidPrincipleComponent', () => {
  let component: AngularSolidPrincipleComponent;
  let fixture: ComponentFixture<AngularSolidPrincipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularSolidPrincipleComponent]
    });
    fixture = TestBed.createComponent(AngularSolidPrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
