import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";
import {LoginDto} from "../shared/login.dto";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {AuthUserDto} from "../shared/auth-user-dto";

@Component({
  selector: 'app-create-auth-user',
  templateUrl: './create-auth-user.component.html',
  styleUrls: ['./create-auth-user.component.scss']
})
export class CreateAuthUserComponent implements OnInit {
  createUserForm = this._fb.group({
    username: ['']
  })
  public err: string | undefined;
  public message: string | undefined;

  constructor(private _fb: FormBuilder,
              private _authServ: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  createUser() {
    const createAuthDto = this.createUserForm.value as AuthUserDto
    this._authServ.createAuthUser(createAuthDto)
      .pipe(
        catchError( error =>{
          this.err = error.error ? error.error: error.message();
          this.message = undefined
          return throwError(error);
      }) )
      .subscribe(() => {
        this.err = undefined;
        this.createUserForm.reset();
        this.message = "New User successfully created"
      })
  }
}
