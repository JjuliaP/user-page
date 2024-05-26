import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { ButtonComponent } from './components/button/button.component';
import { RolesSectionComponent } from './components/roles-section/roles-section.component';
import { BadgeComponent } from './components/badge/badge.component';
import { FormSectionComponent } from './components/form-section/form-section.component';
import { ChipsSelectComponent } from './components/chips-select/chips-select.component';
import { FileInputComponent } from './components/file-input/file-input.component';

@NgModule({
  declarations: [
    UserListComponent,
    ButtonComponent,
    FormSectionComponent,
    BadgeComponent,
    RolesSectionComponent,
    ChipsSelectComponent,
    FileInputComponent,
  ],
  imports: [CommonModule, UserListRoutingModule, ReactiveFormsModule],
  exports: [ButtonComponent],
})
export class UserListModule {}
