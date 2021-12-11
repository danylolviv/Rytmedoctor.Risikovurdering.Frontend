import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../form-editor/shared/question.service";
import {Observable} from "rxjs";
import {FormQuestionDto} from "../../form-editor/shared/form-question-dto";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  questions$: Observable<FormQuestionDto[]> | undefined

  constructor(private _qService: QuestionService) { }

  ngOnInit(): void {
    this.questions$ = this._qService.getQuestions();
  }

}
