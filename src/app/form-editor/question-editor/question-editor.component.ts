import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormQuestionDto} from "../shared/form-question-dto";
import {QuestionService} from "../shared/question.service";
import {Observable, pipe} from "rxjs";
import {QuestionTypeDto} from "../shared/question-type-dto";
import {QuestionTypesService} from "../shared/question-types.service";
import {AnswerOptionDto} from "../shared/answer-option-dto";
import {FormQuestion} from "../shared/form-question";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss']
})
export class QuestionEditorComponent implements OnInit {

  private questionId: number = 0
  public question$: Observable<FormQuestionDto> | undefined
  public updatedQuestion$: Observable<FormQuestionDto>| undefined
  public updatedQuestion: FormQuestionDto | undefined
  questionTypes: QuestionTypeDto[] | undefined

  public id: number|undefined
  public orderId: number |undefined
  public title: string| undefined
  public description: string| undefined
  public typeOfTheQuestion = {id:2} as QuestionTypeDto

  constructor(private route: ActivatedRoute, private _qServ: QuestionService, private _qTServ: QuestionTypesService, private router: Router) {
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
     this._qServ.saveQuestion(newQuestion).subscribe((updatedQuestion) =>{
       this.updatedQuestion = updatedQuestion;
       // todo add delay here and display updated question
       this.router.navigate(['formEditor'])
     })

    // starting on update functionality
  }
}
