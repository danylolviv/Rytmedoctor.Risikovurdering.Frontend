import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { CreateAuthUserComponent } from './create-auth-user/create-auth-user.component';


@NgModule({
  declarations: [
    LoginComponent,
    CreateAuthUserComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ]
})
export class AuthModule { }
