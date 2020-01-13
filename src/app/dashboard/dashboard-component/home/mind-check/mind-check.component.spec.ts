import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindCheckComponent } from './mind-check.component';

describe('MindCheckComponent', () => {
  let component: MindCheckComponent;
  let fixture: ComponentFixture<MindCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
