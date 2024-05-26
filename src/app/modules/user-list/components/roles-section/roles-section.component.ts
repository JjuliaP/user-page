import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { PermissionItem } from '../../../../interfaces/permission-items.interface';
import { ChipOption } from '../../../../interfaces/chip-option.interface';

@Component({
  selector: 'app-roles-section',
  templateUrl: './roles-section.component.html',
  styleUrl: './roles-section.component.scss',
})
export class RolesSectionComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() permissionItems: PermissionItem[] = [];

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public tab = 2;
  public rolesOptions: ChipOption[] = [
    { name: 'Performer', id: 1 },
    { name: 'Moderator', id: 2 },
    { name: 'Admin', id: 3 },
  ];

  ngOnInit(): void {
    this.form.controls['role'].setValue([this.rolesOptions[0]]);
  }

  public clickTab(tabNumber: number): void {
    this.tab = tabNumber;
  }

  public getInnerFormGroup(itemName: string): FormGroup {
    const formGroup = this.formControls['crudPermissions'] as FormGroup;
    return formGroup.controls[itemName.toLowerCase()] as FormGroup;
  }

  public getFormControl(
    itemName: string,
    controlName: string
  ): AbstractControl {
    return this.getInnerFormGroup(itemName).controls[controlName];
  }
}
