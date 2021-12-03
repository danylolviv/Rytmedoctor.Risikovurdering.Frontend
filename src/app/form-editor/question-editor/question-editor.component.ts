import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss']
})
export class QuestionEditorComponent implements OnInit {

  private questionId: number | undefined

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(data => {
      this.questionId = data['id']
    })
  }

  ngOnInit(): void {
  }

}
