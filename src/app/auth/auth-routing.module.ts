import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CreateAuthUserComponent} from "./create-auth-user/create-auth-user.component";

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"create", component: CreateAuthUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
