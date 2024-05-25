import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '',   redirectTo: '/user-list', pathMatch: 'full' },
    {
        path: 'user-list',
        loadChildren: () => import('./modules/user-list/user-list.module').then(m => m.UserListModule)
    },
    {
        path: 'user-edit',
        loadChildren: () => import('./modules/user-edit/user-edit.module').then(m => m.UserEditModule)
    },
    {
        path: 'roles',
        loadChildren: () => import('./modules/roles-permissions/roles-permissions.module').then(m => m.RolesPermissionsModule)
    }
    // { path: '**', component: PageNotFoundComponent }
];
