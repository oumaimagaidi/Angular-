import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product-component',
  templateUrl: './form-product.component.html',
  styleUrls:['./form-product.component.css']
})




export class FormProductComponent {
  productForm: FormGroup;
  //list: Product[] = [];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]],
      categoryId: [null, Validators.required],
      price: [null, [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      image: [''],
      description: [''],
      brand: [''],
      promotion: [null, Validators.pattern('^(0|[1-9][0-9]?)$')]
    });
  }

  onSave() {
    if (this.productForm.valid) {
      console.log('added');
      //this.list.push(this.productForm.value);
      this.productForm.reset();  // Réinitialise le formulaire après ajout
    }
  }
}