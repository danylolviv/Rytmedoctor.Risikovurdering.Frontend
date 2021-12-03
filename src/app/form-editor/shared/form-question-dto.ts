import {QuestionTypeDto} from "./question-type-dto";
import {AnswerOptionDto} from "./answer-option-dto";

export interface FormQuestionDto {

  id: number;
  orderId: number;
  title: string;
  description: string;
  type: QuestionTypeDto;
  answerOptions: AnswerOptionDto[];
}
