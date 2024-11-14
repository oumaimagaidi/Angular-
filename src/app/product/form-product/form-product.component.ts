import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { ProductComponent } from 'workshops/src/app/product/product/product.component';



@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  // Déclaration du formulaire réactif
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisation du formulaire avec Reactive Forms
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]],
      image: [''],
      categoryId: ['', Validators.required],
      description: [''],
      price: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      brand: [''],
      promotion: ['', [Validators.pattern('^(0|[1-9][0-9]?)$')]]
    });
  }

  // Méthode pour ajouter un produit
  onSubmit() {
    if (this.productForm.valid) {
      const newProduct: ProductComponent = {
        id: Date.now(), // L'id est auto-incrémenté
        name: this.productForm.value.name,
        image: this.productForm.value.image,
        categoryId: this.productForm.value.categoryId,
        description: this.productForm.value.description,
        price: this.productForm.value.price,
        brand: this.productForm.value.brand,
        promotion: this.productForm.value.promotion
      };

      console.log('Product saved:', newProduct);
      // Réinitialiser le formulaire après l'ajout
      this.productForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }}