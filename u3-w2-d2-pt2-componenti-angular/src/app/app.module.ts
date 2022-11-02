import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { ToDoListPage } from './to-do-list/to-do-list.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'signup',
    component: SignupPage,
  },
  {
    path: 'to-do-list',
    component: ToDoListPage,
  },
];

@NgModule({
  declarations: [AppComponent, LoginPage, SignupPage, ToDoListPage],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
