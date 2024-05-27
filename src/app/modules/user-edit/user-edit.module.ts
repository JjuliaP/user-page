import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserEditRoutingModule } from './user-edit-routing.module';

@NgModule({
  declarations: [UserEditComponent],
  imports: [CommonModule, UserEditRoutingModule],
})
export class UserEditModule {}
