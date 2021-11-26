import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormEditorRoutingModule } from './form-editor-routing.module';
import { FormEditorComponent } from './form-editor/form-editor.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";


@NgModule({
  declarations: [
    FormEditorComponent
  ],
  imports: [
    CommonModule,
    FormEditorRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class FormEditorModule { }
