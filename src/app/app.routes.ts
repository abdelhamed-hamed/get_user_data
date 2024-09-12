import { Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('../components/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];
