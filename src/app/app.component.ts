import { Component } from '@angular/core';
import {AuthService} from "./auth/shared/auth.service";
import {subscribeOn, take} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rytmedoctor-frontend';
  public jwt: string | null | undefined

  constructor(private _authServ: AuthService, private _router: Router) {
    _authServ.isLoggedIn$.subscribe(jwt => {
      this.jwt = jwt
    })
  }

  logout() {
    this._authServ.logout()
      .subscribe(logout => {
        this._router.navigateByUrl('auth/login')
      })
  }
}
