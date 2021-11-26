import {QuestionTypeDto} from "./question-type-dto";
import {AnswerOptionDto} from "./answer-option-dto";

export interface FormQuestionDto {

  id: number;
  // @ts-ignore
  orderId: number;
  // @ts-ignore
  title: string;
  // @ts-ignore
  description: string;
  // @ts-ignore
  type: QuestionTypeDto;
  // @ts-ignore
  answerOptions: AnswerOptionDto[];
}
