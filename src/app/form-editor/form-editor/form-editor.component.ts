import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../shared/question.service";
import {Observable} from "rxjs";
import {FormQuestionDto} from "../shared/form-question-dto";
import {ListFormQuestionDto} from "../shared/list-form-question-dto";

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss']
})
export class FormEditorComponent implements OnInit {

  //questions: FormQuestionDto[] | undefined
  questions$: Observable<FormQuestionDto[]> | undefined

  constructor(private _qServ: QuestionService) { }

  ngOnInit(): void {
    this.questions$ = this._qServ.getProducts();
    /*this._qServ.getProducts().subscribe( (questionList) => {
      this.questions$ = questionList;

      console.table(this.questions$)
    });*/
  }

}
