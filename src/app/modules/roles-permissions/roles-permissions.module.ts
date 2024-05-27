import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesPermissionsComponent } from './components/roles-permissions/roles-permissions.component';
import { RolesPermissionsRoutingModule } from './roles-permissions-routing.module';

@NgModule({
  declarations: [RolesPermissionsComponent],
  imports: [CommonModule, RolesPermissionsRoutingModule],
})
export class RolesPermissionsModule {}
