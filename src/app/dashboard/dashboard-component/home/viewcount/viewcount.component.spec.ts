import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcountComponent } from './viewcount.component';

describe('ViewcountComponent', () => {
  let component: ViewcountComponent;
  let fixture: ComponentFixture<ViewcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
