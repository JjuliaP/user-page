import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PermissionItem } from '../../../../interfaces/permission-items.interface';
import { ChipOption } from '../../../../interfaces/chip-option.interface';
import { UserListApiService } from '../../services/user-list-api.service';
import { UserListRoutingModule } from '../../user-list-routing.module';
import { RolesSectionComponent } from '../roles-section/roles-section.component';
import { FormSectionComponent } from '../form-section/form-section.component';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

type UserInfoFormFields = {
  firstName: string;
  lastName: string;
  birthday: string;
  citizenship: Array<ChipOption>;
  files: Array<File>;
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
  crudPermissions: FormGroup<{
    [key: string]: FormGroup<{
      create: FormControl<boolean | null>;
      read: FormControl<boolean | null>;
      update: FormControl<boolean | null>;
      delete: FormControl<boolean | null>;
    }>;
  }>;
  role: FormControl<Array<ChipOption> | null>;
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [UserListApiService],
  standalone: true,
  imports: [
    CommonModule,
    UserListRoutingModule,
    ReactiveFormsModule,
    ButtonComponent,
    ModalComponent,
    RolesSectionComponent,
    FormSectionComponent,
  ],
})
export class UserListComponent implements OnInit {
  @ViewChild(ModalComponent) modal!: ModalComponent;

  private readonly nameValidationString = '[a-zA-Z ]*';
  private readonly emailValidationString =
    '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public userDataForm: FormGroup = new FormGroup({
    permissions: new FormControl(null),
    userInfo: new FormControl(null),
  });
  public userInfoGroup: FormGroup<UserForm> = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(this.nameValidationString),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(this.nameValidationString),
    ]),
    birthday: new FormControl('', [Validators.required]),
    citizenship: new FormControl<ChipOption[]>([]),
    files: new FormControl<File[]>([]),
    instagram: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(this.emailValidationString),
    ]),
    tweeter: new FormControl(''),
    facebook: new FormControl(''),
  });
  public permissionsGroup: FormGroup<PermissionForm> = new FormGroup({
    crudPermissions: new FormGroup({}),
    role: new FormControl<ChipOption[]>([]),
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
  constructor(
    private fb: FormBuilder,
    private userListApiService: UserListApiService
  ) {}

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
    this.userDataForm.setControl('userInfo', this.userInfoGroup);
  }

  public onFormSubmit(): void {
    this.userDataForm.markAllAsTouched();

    if (this.userDataForm.valid) {
      this.userListApiService
        .sendRequest(this.createRequestBody())
        .subscribe(response =>
          console.warn('Response:', [...(response as any).entries()])
        );
    }
  }

  public openModal(): void {
    this.modal.open();
  }

  public onConfirmClick(): void {
    this.modal.close();
  }

  public onCancelClick(): void {
    this.modal.close();
  }

  public onBlockClick() {}

  private createRequestBody(): FormData {
    return this.convertObjectToFormData(this.userDataForm.value);
  }

  private convertObjectToFormData(
    obj: any,
    form = new FormData(),
    namespace = ''
  ): FormData {
    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        const formKey = namespace ? `${namespace}[${property}]` : property;

        if (obj[property] instanceof File) {
          // If the property is a file
          form.append(formKey, obj[property]);
        } else if (
          typeof obj[property] === 'object' &&
          !(obj[property] instanceof Date)
        ) {
          // If the property is an object, but not a Date, recursively convert it
          this.convertObjectToFormData(obj[property], form, formKey);
        } else {
          // If the property is a scalar (string, number, boolean, or Date)
          form.append(formKey, obj[property]);
        }
      }
    }
    return form;
  }
}
