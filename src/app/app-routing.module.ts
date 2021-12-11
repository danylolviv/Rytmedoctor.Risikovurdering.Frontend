import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainViewComponent} from "./main-view/main-view.component";

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent
  },
  {
    path:"formEditor",
    loadChildren: () => import('./form-editor/form-editor.module')
      .then(f => f.FormEditorModule)
  },
  {
    path:"survey",
    loadChildren: () => import('./survey-form/survey-form.module')
      .then(f => f.SurveyFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
