import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.scss'
})
export class FormSectionComponent {
  public tab = 1;
  signUpForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    birthday: new FormControl("", [
      Validators.required,
    ]),
    citizenship: new FormControl("", [Validators.required]),
    files: new FormControl("", [Validators.required]),
    instagram: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    tweeter: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    facebook: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
  });

  public clickTab(tabNumber: number): void{
    this.tab = tabNumber;
  }

  public onFormSubmit(){}

  public onFileSelected(event: Event){

  }
}
