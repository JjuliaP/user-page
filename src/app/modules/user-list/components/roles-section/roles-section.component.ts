import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { PermissionItem } from '../../../../interfaces/permission-items.interface';

@Component({
  selector: 'app-roles-section',
  templateUrl: './roles-section.component.html',
  styleUrl: './roles-section.component.scss',
})
export class RolesSectionComponent {
  @Input() form!: FormGroup;
  @Input() innerForm!: FormGroup;
  @Input() permissionItems: PermissionItem[] = [];

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  // get innerFormControls(): { [key: string]: AbstractControl; }
  // {
  //     return this.formControls['permissions'];
  // }

  public tab = 2;

  public clickTab(tabNumber: number): void {
    this.tab = tabNumber;
  }

  public getFormControl(
    itemName: string,
    controlName: string
  ): AbstractControl {
    const formGroup = this.formControls['crudPermissions'] as FormGroup;
    const innerFormGroup = formGroup.controls[
      itemName.toLowerCase()
    ] as FormGroup;
    return innerFormGroup.controls[controlName];
  }
}
