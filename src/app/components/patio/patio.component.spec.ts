import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatioComponent } from './patio.component';

describe('PatioComponent', () => {
  let component: PatioComponent;
  let fixture: ComponentFixture<PatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
