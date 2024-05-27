import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  {
    path: 'user-list',
    loadComponent: () =>
      import(
        './modules/user-list/components/user-list/user-list.component'
      ).then(m => m.UserListComponent),
  },
  {
    path: 'user-edit',
    loadChildren: () =>
      import('./modules/user-edit/user-edit.module').then(
        m => m.UserEditModule
      ),
  },
  {
    path: 'roles',
    loadChildren: () =>
      import('./modules/roles-permissions/roles-permissions.module').then(
        m => m.RolesPermissionsModule
      ),
  },
  { path: '**', component: PageNotFoundComponent }
];
