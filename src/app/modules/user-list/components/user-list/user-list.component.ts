import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { PermissionItem } from '../../../../interfaces/permission-items.interface';

type UserInfoFormFields = {
  firstName: string;
  lastName: string;
  birthday: string;
  citizenship: string;
  files: string;
  instagram: string;
  email: string;
  tweeter: string;
  facebook: string;
};
type UserForm = {
  [field in keyof UserInfoFormFields]: FormControl<
    UserInfoFormFields[field] | null
  >;
};

type PermissionForm = {
  role: FormControl<{
    [key: string]: FormGroup<{
      create: FormControl<boolean | null>;
      read: FormControl<boolean | null>;
      update: FormControl<boolean | null>;
      delete: FormControl<boolean | null>;
    }>;
  }>;
  crudPermissions: FormGroup<any>;
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  public userDataForm: FormGroup = new FormGroup({
    permissions: new FormControl(null),
    userInfo: new FormControl(null),
  });
  public userInfoGroup: FormGroup<UserForm> = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    birthday: new FormControl('', [Validators.required]),
    citizenship: new FormControl('', [Validators.required]),
    files: new FormControl('', [Validators.required]),
    instagram: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    tweeter: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    facebook: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  public permissionsGroup: FormGroup<PermissionForm> = new FormGroup({
    role: new FormControl({} as any, [Validators.required]), // TODO fix
    crudPermissions: new FormGroup(''),
  });
  public crudPermissionsGroup: FormGroup = new FormGroup({});
  public permissionItems: PermissionItem[] = [
    {
      name: 'Script',
      permissions: {
        create: false,
        read: false,
        update: false,
        delete: false,
      },
    },
    {
      name: 'Props',
      permissions: {
        create: false,
        read: false,
        update: false,
        delete: false,
      },
    },
    {
      name: 'Screens',
      permissions: {
        create: false,
        read: false,
        update: false,
        delete: false,
      },
    },
    {
      name: 'Money',
      permissions: {
        create: false,
        read: false,
        update: false,
        delete: false,
      },
    },
    {
      name: 'Stunt',
      permissions: {
        create: false,
        read: false,
        update: false,
        delete: false,
      },
    },
  ];
  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.permissionItems.forEach(item => {
      const crudPermissionsControls = this.fb.group(item.permissions);

      this.crudPermissionsGroup.addControl(
        item.name.toLowerCase(),
        crudPermissionsControls
      );
    });

    this.permissionsGroup.setControl(
      'crudPermissions',
      this.crudPermissionsGroup
    );

    this.userDataForm.setControl('permissions', this.permissionsGroup);
  }

  public onFormSubmit() {}
}
