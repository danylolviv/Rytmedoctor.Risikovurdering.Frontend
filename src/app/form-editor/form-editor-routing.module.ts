

import {FormEditorComponent} from "./form-editor/form-editor.component";

import { RouterModule } from '@angular/router';
import {QuestionEditorComponent} from "./question-editor/question-editor.component";


const routes = [
  {
    path: '',
    component: FormEditorComponent
  },
  {
    path: 'questionEditor/:id',
    component: QuestionEditorComponent
  }
];

export const FormRoutes = RouterModule.forChild(routes);
