

import {FormEditorComponent} from "./form-editor/form-editor.component";

import { RouterModule } from '@angular/router';
import {QuestionEditorComponent} from "./question-editor/question-editor.component";
import {AuthGuard} from "../auth/guards/auth.guard";
import {OrderManagerComponent} from "./order-manager/order-manager.component";


const routes = [
  {
    path: '',
    component: FormEditorComponent
  },
  {
    path: 'questionEditor/:id',
    component: QuestionEditorComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'order',
    component: OrderManagerComponent
  }
];

export const FormRoutes = RouterModule.forChild(routes);
