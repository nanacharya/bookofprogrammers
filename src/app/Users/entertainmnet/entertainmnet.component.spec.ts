import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmnetComponent } from './entertainmnet.component';

describe('EntertainmnetComponent', () => {
  let component: EntertainmnetComponent;
  let fixture: ComponentFixture<EntertainmnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
