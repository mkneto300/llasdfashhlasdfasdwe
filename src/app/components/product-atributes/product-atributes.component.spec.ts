import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAtributesComponent } from './product-atributes.component';

describe('ProductAtributesComponent', () => {
  let component: ProductAtributesComponent;
  let fixture: ComponentFixture<ProductAtributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAtributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAtributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
