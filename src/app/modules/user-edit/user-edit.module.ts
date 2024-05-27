import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserEditRoutingModule } from './user-edit-routing.module';
import { FeatureInProgressComponent } from '../../components/feature-in-progress/feature-in-progress.component';

@NgModule({
  declarations: [UserEditComponent],
  imports: [CommonModule, UserEditRoutingModule, FeatureInProgressComponent],
})
export class UserEditModule {}
