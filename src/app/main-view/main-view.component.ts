import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  public adminDesc = "When logged in as admin you are able to adjust the form in the Form Editor tab, create add and delete questions as well as edit the content of the question by clicking the pencil icon. Also you can adjust hte order of the questions inside the Order tab. Admin user can also create new simple users once logged in. You provide the username and in current version standard password will be *password*."
  public customerDesc = "As a customer you are only granted access to the Survey part of the application. At this point the data is being collected and stored in the database and the only thing user can do is to complete the survey again"

  constructor() { }

  ngOnInit(): void {
  }

}
