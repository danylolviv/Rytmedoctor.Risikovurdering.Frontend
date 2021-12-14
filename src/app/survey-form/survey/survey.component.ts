import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../form-editor/shared/question.service";
import {Observable} from "rxjs";
import {FormQuestionDto} from "../../form-editor/shared/form-question-dto";
import {tap} from "rxjs/operators";
import {AnswerOptionDto} from "../../form-editor/shared/answer-option-dto";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MatRadioChange} from "@angular/material/radio";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  public questionAnswersCheckbox = new Map<number, boolean>()
  public questionAnswersDropdown = new Map<number, boolean>()
  public questionAnswersRadio = new Map<number, boolean>()

  questions$: Observable<FormQuestionDto[]> | undefined

  constructor(private _qService: QuestionService) {
  }

  ngOnInit(): void {
    this.questions$ = this._qService.getQuestions()
      .pipe(
        tap(qList => {
          qList.forEach(q => {
            if (q.type.id == 3) {
              // checkbox
              q.answerOptions.forEach(opt => {
                this.questionAnswersCheckbox.set(opt.id ? opt.id : -1, opt.selected ? opt.selected : false)
              })
            }
            if (q.type.id == 1) {
              //radio button
              q.answerOptions.forEach(opt => {
                this.questionAnswersRadio.set(opt.id ? opt.id : -1, opt.selected ? opt.selected : false)
              })
            }
            if (q.type.id == 2) {
              // dropdown
              q.answerOptions.forEach(opt => {
                this.questionAnswersDropdown.set(opt.id ? opt.id : -1, opt.selected ? opt.selected : false)
              })
            }
          })
        })
      );

  }

  submit() {

  }

  changeOptionValueCheckbox($event: MatCheckboxChange, o: AnswerOptionDto) {
    this.questionAnswersCheckbox.set(o.id ? o.id : -1, $event.checked)
    console.table(this.questionAnswersCheckbox)
  }

  changeOptionValueRadio($event: MatRadioChange, o: AnswerOptionDto) {
    this.questionAnswersRadio.set(o.id ? o.id : -1, true)
    console.table(this.questionAnswersRadio)
  }

  changeOptionValueDropdown($event: Event, o: AnswerOptionDto) {
    this.questionAnswersDropdown.set(o.id ? o.id : -1, true)
    console.table(this.questionAnswersDropdown)
  }
}
