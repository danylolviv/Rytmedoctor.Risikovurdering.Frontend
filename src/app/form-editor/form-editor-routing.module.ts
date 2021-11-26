import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormEditorComponent} from "./form-editor/form-editor.component";

const routes: Routes = [
  {
    path:'', component: FormEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormEditorRoutingModule { }
