import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';{}
@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.css']
})
export class AddcategorieComponent {
 showForm(f: NgForm){
  console.log(f);
 }
}
