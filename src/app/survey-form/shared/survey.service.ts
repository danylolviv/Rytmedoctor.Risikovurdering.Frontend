import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserAnswerDto} from "./user-answer-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private _http: HttpClient) { }

  public submitForm(userAnswer: UserAnswerDto): Observable<boolean>{
    return this._http.post<boolean>("https://localhost:5001/api/Survey", userAnswer)
  }
}
