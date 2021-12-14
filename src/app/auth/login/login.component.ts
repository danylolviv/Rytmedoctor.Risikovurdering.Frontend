import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {LoginDto} from "../shared/login.dto";
import {Router} from "@angular/router";

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
      .subscribe(t => {
        if(t && t.jwt ){
          this._router.navigateByUrl('formEditor')
        }
      console.table(t)
    })
  }
}
