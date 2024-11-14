import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup; // declare propriéte de type formGroup // formgroup hiya classe angular utilisé our regrouper les chamos du formulaire 

  constructor(private fb: FormBuilder) { //formbuilder simplifie la création du formulaire 
    this.userForm = this.fb.group({ // khdhe formbuilder bsh creer un formgroup 
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      adresse: this.fb.group({
        street: ['', Validators.required],
        number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        city: ['', Validators.required],
        postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      }), // bel validators required le champ doit etre rempli sinon form invalide 
      // sans VR le champs peut etre laissé vide ama form yoked aadi valide 
      //donc nestaamlou required waket eli on doit obligé l'user pour remplir un champ 
      
      skills: this.fb.array([this.fb.control('', Validators.required)]) // creer un tableau réactif 
    });
   
  }

  ngOnInit(): void {}

  get skills() {
    return (this.userForm.get('skills') as FormArray);
  }

  addSkill(): void {
    this.skills.push(this.fb.control('', Validators.required));  // Ajouter un champ avec une validation obligatoire
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }
  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Formulaire valide:', this.userForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
  
  onReset(): void {
    this.userForm.reset();
  }
}
