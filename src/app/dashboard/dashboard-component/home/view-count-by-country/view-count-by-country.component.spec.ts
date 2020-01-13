import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCountByCountryComponent } from './view-count-by-country.component';

describe('ViewCountByCountryComponent', () => {
  let component: ViewCountByCountryComponent;
  let fixture: ComponentFixture<ViewCountByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCountByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCountByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
