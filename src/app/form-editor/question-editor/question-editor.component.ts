import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormQuestionDto} from "../shared/form-question-dto";
import {QuestionService} from "../shared/question.service";
import {Observable} from "rxjs";
import {QuestionTypeDto} from "../shared/question-type-dto";
import {QuestionTypesService} from "../shared/question-types.service";
import {AnswerOptionDto} from "../shared/answer-option-dto";
import {FormQuestion} from "../shared/form-question";

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss']
})
export class QuestionEditorComponent implements OnInit {

  private questionId: number = 0
  public question$: Observable<FormQuestionDto> | undefined
  questionTypes: QuestionTypeDto[] | undefined

  public id: number|undefined
  public orderId: number |undefined
  public title: string| undefined
  public description: string| undefined
  public typeOfTheQuestion = {id:2} as QuestionTypeDto
  public answerOptions: AnswerOptionDto[]|undefined

  constructor(private route: ActivatedRoute, private _qServ: QuestionService, private _qTServ: QuestionTypesService) {
    this.route.params.subscribe(data => {
      this.questionId = data['id']
    })
    this.questionTypes = this._qTServ.getLitTypes();
  }

  ngOnInit(): void {
    this.question$ = this._qServ.getQuestionById(this.questionId)
  }

  addBlanckOption(answerOptions: AnswerOptionDto[]) {
    let blanckOption = {optionText: "Option Text", weight: 0} as AnswerOptionDto;
    answerOptions.push(blanckOption)
  }

  removeOption(qOption: AnswerOptionDto, answerOptions: AnswerOptionDto[]) {
    let index = answerOptions.indexOf(qOption)
    answerOptions.splice(index, 1);
    console.table(answerOptions)
  }

  saveQuestion(answerOptions: AnswerOptionDto[], id: number, orderId: number) {
    let newQuestion =
      {
        id: id,
        title: this.title,
        description: this.description,
        type: this.typeOfTheQuestion,
        answerOptions: answerOptions,
        orderId: orderId
      } as FormQuestionDto;
    let smth = this._qServ.saveQuestion(newQuestion)
    console.log(smth)
  }
}
