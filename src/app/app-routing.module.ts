
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductscategoryComponent } from './productscategory/productscategory.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { AddcategorieComponent } from './addcategorie/addcategorie.component';
import { UserFormComponent } from './user-form/user-form.component'; 
const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'categories', component:ListCategoriesComponent, children:[{path:'details', component:DetailsCategoryComponent}]},
  {path:"productsByCategory/:id", component:ProductscategoryComponent},
  {path:"profile", loadChildren:()=>import('./profile/profile.module').then(x=>x.ProfileModule)},
  {path:"productModule", loadChildren:()=>import('./product/product.module').then(x=>x.ProductModule)},
  {path:"contact", loadChildren:()=>import('./contact/contact.module').then(x=>x.ContactModule)},
  {path:"apropos", loadChildren:()=>import('./apropos/apropos.module').then(x=>x.AproposModule)},
  {path:"addC",component:AddcategorieComponent},
  {path:"addCc",component:AddcategorieComponent},
  { path: 'user-form', component: UserFormComponent },
  {path:"**", component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
