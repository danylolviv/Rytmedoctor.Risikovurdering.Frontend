import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
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
  public wrongInput = false;
  wrongInputMessage = "Username and password must be 5 - 16 characters long";

  constructor(
    private _fb: FormBuilder,
    private _authServ: AuthService,
    private _router: Router
    ) { }

  ngOnInit(): void {
  }

  login() {
    const loginDto = this.loginForm.value as LoginDto
    if (this.inputIsvalid(loginDto)){
      this.wrongInput = false
      this._authServ.login(loginDto, loginDto.username)
        .pipe(catchError( error =>{
          this.err = error.error ? error.error: error.message();
          return throwError(error);
        }) )
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
    if (!this.inputIsvalid(loginDto)){
      this.wrongInput = true
    }
  }

  private inputIsvalid(loginDto: LoginDto) {
    var user = loginDto.username.length
    var pass = loginDto.password.length
    if(user>=5 && user<=16){
      if (pass>=5 && pass<=16){
        return true
      }
    }
    return false
  }
}
