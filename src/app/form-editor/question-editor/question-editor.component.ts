import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormQuestionDto} from "../shared/form-question-dto";
import {QuestionService} from "../shared/question.service";
import {Observable} from "rxjs";
import {QuestionTypeDto} from "../shared/question-type-dto";
import {QuestionTypesService} from "../shared/question-types.service";

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss']
})
export class QuestionEditorComponent implements OnInit {

  private questionId: number = 0
  public question$: Observable<FormQuestionDto> | undefined
  questionTypes: QuestionTypeDto[] | undefined

  constructor(private route: ActivatedRoute, private _qServ: QuestionService, private _qTServ: QuestionTypesService) {
    this.route.params.subscribe(data => {
      this.questionId = data['id']
    })
    this.questionTypes = this._qTServ.getLitTypes();
  }

  ngOnInit(): void {
    this.question$ = this._qServ.getQuestionById(this.questionId)
  }

}
