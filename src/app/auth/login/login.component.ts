import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {LoginDto} from "../shared/login.dto";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this._fb.group({
    username: [''],
    password: [''],
  })

  public err: string | undefined;
  public localError: any;

  constructor(
    private _fb: FormBuilder,
    private _authServ: AuthService,
    private _router: Router
    ) { }

  ngOnInit(): void {
  }

  login() {
    const loginDto = this.loginForm.value as LoginDto
    this._authServ.login(loginDto)
      .subscribe(token => {
        console.table(token)
        console.log(token.message)
        if(token && token.jwt ){
          this.err = undefined;
          this._router.navigateByUrl('formEditor')
        }
        else if(token && token.message){
          this.err = token.message;
        }
    })
  }
}
