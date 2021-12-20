import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../shared/question.service";
import {FormQuestionDto} from "../shared/form-question-dto";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {SurveyOrderDto} from "../shared/survey-order-dto";
import {newArray} from "@angular/compiler/src/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.scss']
})
export class OrderManagerComponent implements OnInit {

  public questions: FormQuestionDto[] | undefined

  constructor(private _questServ: QuestionService, private _router: Router) { }

  ngOnInit(): void {
    this._questServ.getQuestions().subscribe(quest => {
      this.questions = quest
    })
  }

  public drop(event: CdkDragDrop<string[]>) {
    console.table(this.questions)
    if (this.questions){
      moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
      console.table(this.questions)
    }
  }

  submitOrder() {
    var list: SurveyOrderDto[] = []
    var counter = 0
    this.questions?.forEach( q => {
      var dto = {questionId: q.id, questionOrder: counter+=1 } as SurveyOrderDto
      list.push(dto)
    })
    this._questServ.changeOrder(list).subscribe(r => {
      this._router.navigateByUrl('')
    })
  }
}
