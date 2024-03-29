

import {FormEditorComponent} from "./form-editor/form-editor.component";

import { RouterModule } from '@angular/router';
import {QuestionEditorComponent} from "./question-editor/question-editor.component";
import {AuthGuard} from "../auth/guards/auth.guard";
import {OrderManagerComponent} from "./order-manager/order-manager.component";
import {AuthorizationGuard} from "../auth/guards/authorization.guard";


const routes = [
  {
    path: '',
    component: FormEditorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'questionEditor/:id',
    component: QuestionEditorComponent,
  },
  {
    path: 'order',
    component: OrderManagerComponent,
    canActivate: [AuthorizationGuard]
  }
];

export const FormRoutes = RouterModule.forChild(routes);
