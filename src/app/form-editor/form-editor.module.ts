

import { FormEditorComponent } from './form-editor/form-editor.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormRoutes } from './form-editor-routing.module';
import {CommonModule} from "@angular/common";
import {QuestionEditorComponent} from "./question-editor/question-editor.component";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";



@NgModule({
  imports: [
    HttpClientModule,
    FormRoutes,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  exports: [],
  declarations: [
    FormEditorComponent,
    QuestionEditorComponent
  ]
})
export class FormEditorModule { }
