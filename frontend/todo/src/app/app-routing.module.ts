import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

import { GreetingsComponent } from './greetings/greetings.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'login', component : LoginComponent},
  { path: 'greetings/:name', component : GreetingsComponent, canActivate:[RouteGuardService]},
  { path: 'todos', component : ListTodosComponent, canActivate:[RouteGuardService]},
  { path: '', component : LoginComponent, canActivate:[RouteGuardService]},
  { path: 'logout', component : LogoutComponent, canActivate:[RouteGuardService]},
  { path: 'todos/:id', component : TodoComponent, canActivate:[RouteGuardService]},

  { path: '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
