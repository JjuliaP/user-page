import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.scss'
})
export class FormSectionComponent {
  @Input() form!: FormGroup;
  public tab = 1;
 

  // get formControls(): { [key: string]: AbstractControl; }
  // {
  //     return this.form.controls;
  // }

  public clickTab(tabNumber: number): void{
    this.tab = tabNumber;
  }

  public onFileSelected(event: Event){

  }
}
