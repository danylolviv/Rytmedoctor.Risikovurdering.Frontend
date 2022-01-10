import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "./login.dto";
import {BehaviorSubject, Observable, of} from "rxjs";
import {TokenDto} from "./token.dto";
import {environment} from "../../../environments/environment";
import {take, tap} from "rxjs/operators";
import {AuthUserDto} from "./auth-user-dto";

const jwtToken = "jwtToken";
const authorization = "username";
const user = "user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$ = new BehaviorSubject<string | null>(this.getToken());


  constructor(private _http: HttpClient) { }

  login(loginDto: LoginDto, username: string): Observable<TokenDto>{
    return this._http
      // Angular HttpClient module is built so it will only "take(1), but there might be other 3rd party clients that do not do the same so you have to take care of possible memory leak"
      .post<TokenDto>(environment.api + "/api/Auth/Login", loginDto)
      .pipe(
        tap( token => {
          if (token && token.jwt){
            localStorage.setItem(jwtToken, token.jwt)
            if (username == "admin")
            localStorage.setItem(authorization, username)
            localStorage.setItem(user, username)
            this.isLoggedIn$.next(token.jwt)
          }else{
            this.logout();
          }
        })
      )
  }

  getToken(): string | null {
    return localStorage.getItem(jwtToken)
  }

  logout(): Observable<boolean> {
    this.cleanLocalStorage();
    this.isLoggedIn$.next(null)
    return  of(true).pipe(take(1))
  }

  private cleanLocalStorage() {
    localStorage.removeItem(jwtToken)
    localStorage.removeItem(authorization)
    localStorage.removeItem(user)
  }

  createAuthUser(createAuthDto: AuthUserDto): Observable<AuthUserDto> {
    return this._http.post<AuthUserDto>("https://formbuildertutee.azurewebsites.net/api/Auth/CreateUser", createAuthDto)
  }
}
