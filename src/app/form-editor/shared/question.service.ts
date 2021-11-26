import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormQuestionDto} from "./form-question-dto";
import {ListFormQuestionDto} from "./list-form-question-dto";
import {Title} from "@angular/platform-browser";
import {delay, map} from "rxjs/operators";
import {AnswerOptionDto} from "./answer-option-dto";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  q1: FormQuestionDto | undefined;
  q2: FormQuestionDto | undefined;
  q3: FormQuestionDto | undefined;

  test: FormQuestionDto[] | undefined;

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<FormQuestionDto[]>{
    console.log("called backend")
    return this._http
      .get<FormQuestionDto[]>("https://localhost:5001/api/Question")
      .pipe(
        delay(5000)
      );
      /*.pipe(
        map(formQuestions => {
          //Select List C#
          return formQuestions.map<FormQuestionDto>(q => {
            return {
              id: q.id,
              title: q.title,
              description:
              q.description,
              orderId: q.orderId,
              type: q.type,
              answerOptions: q.answerOptions?.map<AnswerOptionDto>(a => {
                return {
                  id: a.id,
                  optionText: a.optionText,
                  weight: a.weight
                };
              })
            };
          })
        })
      )*/

    // todo data consitency
    // todo promisses instead of observable
  }


}
