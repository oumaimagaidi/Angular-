import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductscategoryComponent } from './productscategory.component';

describe('ProductscategoryComponent', () => {
  let component: ProductscategoryComponent;
  let fixture: ComponentFixture<ProductscategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductscategoryComponent]
    });
    fixture = TestBed.createComponent(ProductscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
