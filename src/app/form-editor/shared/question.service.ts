import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormQuestionDto} from "./form-question-dto";
import {ListFormQuestionDto} from "./list-form-question-dto";
import {Title} from "@angular/platform-browser";
import {delay, map} from "rxjs/operators";
import {AnswerOptionDto} from "./answer-option-dto";
import {QuestionTypeDto} from "./question-type-dto";
import {SurveyOrderDto} from "./survey-order-dto";
import {environment} from "../../../environments/environment";

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
  }

  getQuestionById(id: number): Observable<FormQuestionDto>{
    return this._http
        .get<FormQuestionDto>("https://localhost:5001/api/Question/"+id)
  }

  saveQuestion(newQuestion: FormQuestionDto): Observable<FormQuestionDto> {
    return this._http
      .put<FormQuestionDto>("https://localhost:5001/api/Question/" + newQuestion.id, newQuestion)
  }

  deleteQuestion(id: number): Observable<FormQuestionDto> {
    return this._http
      .delete<FormQuestionDto>("https://localhost:5001/api/Question/"+id);
  }

  changeOrder(list: SurveyOrderDto[]):Observable<boolean> {
    return this._http
      .post<boolean>(environment.api+"/api/Question/UpdatedQuestionOrder",list)
  }
}

// let blanckQuestion = {
//   title: "Title",
//   description: "description",
//   type:  {id:1} as QuestionTypeDto,
//   answerOptions: [{optionText: "example option", weight: 1}] as AnswerOptionDto[]
// } as FormQuestionDto
