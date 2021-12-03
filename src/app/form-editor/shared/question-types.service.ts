import { Injectable } from '@angular/core';
import {QuestionTypeDto} from "./question-type-dto";

@Injectable({
  providedIn: 'root'
})
export class QuestionTypesService {
  private _listTypes: QuestionTypeDto[] = []

  constructor() {
    let type1 = {id: 1, typeName: "Choicebox"} as QuestionTypeDto;
    let type2 = {id: 2, typeName: "Dropdown"} as QuestionTypeDto;
    let type3 = {id: 3, typeName: "Multiple select"} as QuestionTypeDto;
    this._listTypes.push(type1)
    this._listTypes.push(type2)
    this._listTypes.push(type3)
  }

  getLitTypes(): QuestionTypeDto[]{
    return this._listTypes;
  }
}
