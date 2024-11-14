import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent} from './form-product/form-product.component'; // Adjust the path as necessary

const routes: Routes = [
  { path: 'addProduct', component: FormProductComponent }, // Define the route for the product form
  // Add other routes for the Product module if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }