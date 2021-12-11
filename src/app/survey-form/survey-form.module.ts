import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyFormRoutingModule } from './survey-form-routing.module';
import { SurveyComponent } from './survey/survey.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    SurveyComponent
  ],
  imports: [
    CommonModule,
    SurveyFormRoutingModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SurveyFormModule { }
