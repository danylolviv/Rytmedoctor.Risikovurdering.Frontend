import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../form-editor/shared/question.service";
import {Observable} from "rxjs";
import {FormQuestionDto} from "../../form-editor/shared/form-question-dto";
import {tap} from "rxjs/operators";
import {AnswerOptionDto} from "../../form-editor/shared/answer-option-dto";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MatRadioChange} from "@angular/material/radio";
import {MatOptionSelectionChange} from "@angular/material/core";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  public questionAnswersCheckbox = new Map<number, boolean>()
  public questionAnswersDropdown = new Map<number, AnswerOptionDto>()
  public questionAnswersRadio = new Map<number, AnswerOptionDto>()

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
                opt.questionId = q.id;
                this.questionAnswersRadio.set(opt.id ? opt.id : -1, opt)
              })
            }
            if (q.type.id == 2) {
              // dropdown
              q.answerOptions.forEach(opt => {
                opt.questionId = q.id;
                this.questionAnswersDropdown.set(opt.id ? opt.id : -1, opt)
              })
            }
          })
        })
      );

  }

  submit() {
    console.log("Radio")
    this.questionAnswersRadio.forEach(op =>{
      console.log(op.optionText + ' ' + op.selected)
    })
    console.log("Dropdown")
    this.questionAnswersDropdown.forEach( op =>{
      console.log(op.optionText + ' ' + op.selected)
    })
    console.log("Checkbox")
    console.table(this.questionAnswersCheckbox)
  }

  changeOptionValueCheckbox($event: MatCheckboxChange, o: AnswerOptionDto) {
    this.questionAnswersCheckbox.set(o.id ? o.id : -1, $event.checked)
    //console.table(this.questionAnswersCheckbox)
  }

  changeOptionValueRadio($event: MatRadioChange, o: AnswerOptionDto, questionId: number) {
    this.questionAnswersRadio.forEach( op => {
      if (op.questionId == questionId && op.selected){
        op.selected = false
      }
    })
    this.questionAnswersRadio.forEach(op => {
      if (op.id == o.id){
        op.selected = true;
      }
    })
  }

  changeOptionValueDropdown($event: MatOptionSelectionChange, o: AnswerOptionDto, questionId: number) {

    if ($event.isUserInput){
      o.selected = true;
      this.questionAnswersDropdown.forEach(op => {
        if(questionId == op.questionId && op.selected){
          op.selected = false;
        }
      })
      this.questionAnswersDropdown.forEach(op => {
        if(op.id == o.id){
          op.selected = true;
        }
      })
    }
  }
}
