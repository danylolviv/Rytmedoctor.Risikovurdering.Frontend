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

  constructor(private _qServ: QuestionService, private _qTServ: QuestionTypesService, private router: Router) { }

  ngOnInit(): void {
    this.questions$ = this._qServ.getQuestions();
    this.questionTypes = this._qTServ.getLitTypes();
    /*this._qServ.getProducts().subscribe( (questionList) => {
      this.questions$ = questionList;

      console.table(this.questions$)
    });*/
  }

  addBlanckQuestion( list: FormQuestionDto[]): void{
    let blanckListOpt = [] as AnswerOptionDto[];
    let blanckOption = {optionText: "Option", weight: 0} as AnswerOptionDto;
    blanckListOpt.push(blanckOption)
    blanckListOpt.push(blanckOption)
    let blanck = {title: "New Question", description: "Description", answerOptions: blanckListOpt } as FormQuestionDto;
    list.push(blanck)

    console.table(list)
  }

  openQuestionEditor(question: FormQuestionDto): void{
    this.router.navigate(['questionEditor/'+question.id])
  }

}
