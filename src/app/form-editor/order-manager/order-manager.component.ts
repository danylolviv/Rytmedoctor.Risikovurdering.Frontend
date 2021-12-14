import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../shared/question.service";
import {FormQuestionDto} from "../shared/form-question-dto";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.scss']
})
export class OrderManagerComponent implements OnInit {

  public questions: FormQuestionDto[] | undefined

  constructor(private _questServ: QuestionService) { }

  ngOnInit(): void {
    this._questServ.getQuestions().subscribe(quest => {
      this.questions = quest
    })
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (this.questions){
      moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
      console.table(this.questions)
    }
  }

}
