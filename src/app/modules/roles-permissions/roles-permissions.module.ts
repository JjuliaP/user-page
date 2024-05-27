import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesPermissionsComponent } from './components/roles-permissions/roles-permissions.component';
import { RolesPermissionsRoutingModule } from './roles-permissions-routing.module';
import { FeatureInProgressComponent } from '../../components/feature-in-progress/feature-in-progress.component';

@NgModule({
  declarations: [RolesPermissionsComponent],
  imports: [
    CommonModule,
    RolesPermissionsRoutingModule,
    FeatureInProgressComponent,
  ],
})
export class RolesPermissionsModule {}
