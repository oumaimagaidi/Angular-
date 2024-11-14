import { Component, Input } from '@angular/core';
import { Categorie } from '../Models/categorie';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.css']
})
export class CardCategoryComponent {
  @Input() category!: Categorie;

}
