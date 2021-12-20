import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../shared/question.service";
import {Observable} from "rxjs";
import {FormQuestionDto} from "../shared/form-question-dto";
import {ListFormQuestionDto} from "../shared/list-form-question-dto";
import {AnswerOptionDto} from "../shared/answer-option-dto";
import {QuestionTypesService} from "../shared/question-types.service";
import {QuestionTypeDto} from "../shared/question-type-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss']
})
export class FormEditorComponent implements OnInit {

  //questions: FormQuestionDto[] | undefined
  questions$: Observable<FormQuestionDto[]> | undefined
  questionTypes: QuestionTypeDto[] | undefined

  deletedQuestion: FormQuestionDto| undefined

  listQuestions: FormQuestionDto[]|undefined

  constructor(
    private _qServ: QuestionService,
    private _qTServ: QuestionTypesService,
    private router: Router) { }

  ngOnInit(): void {
    this.updateListQuestions();
    this.questionTypes = this._qTServ.getLitTypes();
  }

  updateListQuestions(): void{
    this.questions$ = this._qServ.getQuestions();
  }

  addBlanckQuestion( list: FormQuestionDto[]): void{
    this.listQuestions = list;
    let blanckN = {
       title: "New Question, Press to edit",
    } as FormQuestionDto;


    list.push(blanckN)

    // todo complete the new fake question to avoid errors in the console
  }

  openQuestionEditor(question: FormQuestionDto): void{
    if (question.id === undefined){
      this.router.navigate(['questionEditor/'+1])
    }else {
      this.router.navigate(['questionEditor/'+question.id])
    }
  }

  deleteQuestion(id: number):void{
    console.log(id)
    if (id === undefined){
      this.listQuestions?.pop()
    }else {
      this._qServ.deleteQuestion(id).subscribe((q) => {
        this.deletedQuestion = q;
        this.updateListQuestions()
      })
    }


  }

}
