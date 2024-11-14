import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add this line

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { FormProductComponent } from './form-product/form-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    FormProductComponent
    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule // Include if using reactive forms
  ]
})
export class ProductModule {
  
 }
 