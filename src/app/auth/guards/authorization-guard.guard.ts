import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../shared/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuardGuard implements CanActivate {
  constructor(private _authService: AuthService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem("username") == "admin"){
      return true
    }
    return false;
  }

}
