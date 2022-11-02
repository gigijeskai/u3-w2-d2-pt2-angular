import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { ToDoListPage } from './to-do-list/to-do-list.page';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPage,
    SignupPage,
    ToDoListPage
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
