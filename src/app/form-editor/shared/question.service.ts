import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormQuestionDto} from "./form-question-dto";
import {ListFormQuestionDto} from "./list-form-question-dto";
import {Title} from "@angular/platform-browser";
import {delay, map} from "rxjs/operators";
import {AnswerOptionDto} from "./answer-option-dto";
import {QuestionTypeDto} from "./question-type-dto";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  q1: FormQuestionDto | undefined;
  q2: FormQuestionDto | undefined;
  q3: FormQuestionDto | undefined;

  test: FormQuestionDto[] | undefined;

  constructor(private _http: HttpClient) {}

  getQuestions(): Observable<FormQuestionDto[]>{
    return this._http
      .get<FormQuestionDto[]>("https://localhost:5001/api/Question");
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

  getQuestionById(id: number): Observable<FormQuestionDto>{
    return this._http
        .get<FormQuestionDto>("https://localhost:5001/api/Question/"+id)
  }


  saveQuestion(newQuestion: FormQuestionDto): Observable<FormQuestionDto> {
    console.log(newQuestion.description)
    return this._http
      .put<FormQuestionDto>("https://localhost:5001/api/Question/" + newQuestion.id, newQuestion)
  }

  deleteQuestion(id: number): Observable<FormQuestionDto> {
    return this._http
      .delete<FormQuestionDto>("https://localhost:5001/api/Question/"+id);
  }
}

// let blanckQuestion = {
//   title: "Title",
//   description: "description",
//   type:  {id:1} as QuestionTypeDto,
//   answerOptions: [{optionText: "example option", weight: 1}] as AnswerOptionDto[]
// } as FormQuestionDto
