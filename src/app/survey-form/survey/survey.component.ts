import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../form-editor/shared/question.service";
import {Observable} from "rxjs";
import {FormQuestionDto} from "../../form-editor/shared/form-question-dto";
import {tap} from "rxjs/operators";
import {AnswerOptionDto} from "../../form-editor/shared/answer-option-dto";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  public questionAnswersCheckbox = new Map<number, boolean>()
  public questionAnswersDropdown = new Map<number, boolean>()
  public questionAnswersMultiSelect = new Map<number, boolean>()

  questions$: Observable<FormQuestionDto[]> | undefined

  constructor(private _qService: QuestionService) {
  }

  ngOnInit(): void {
    this.questions$ = this._qService.getQuestions()
      .pipe(
        tap(qList => {
          qList.forEach(q => {
            if (q.type.id == 3) {
              q.answerOptions.forEach(opt => {
                this.questionAnswersCheckbox.set(opt.id ? opt.id : -1, opt.selected ? opt.selected : false)
              })
            }
            if (q.type.id == 1) {
              //radio button
            }
            if (q.type.id == 2) {
              // dropdown
            }

          })
        })
      );

  }

  submit() {

  }

  changeOptionValue($event: MatCheckboxChange, o: AnswerOptionDto) {
    this.questionAnswersCheckbox.set(o.id ? o.id : -1, $event.checked)
    console.table(this.questionAnswersCheckbox)
  }
}
