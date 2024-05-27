import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesPermissionsComponent } from './components/roles-permissions/roles-permissions.component';

const routes: Routes = [
  {
    path: '',
    component: RolesPermissionsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesPermissionsRoutingModule {}
