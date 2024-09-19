import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: 'add-user', component: AddUserComponent },
      { path: 'list-users', component: ListUsersComponent },
    ],
  },
];
