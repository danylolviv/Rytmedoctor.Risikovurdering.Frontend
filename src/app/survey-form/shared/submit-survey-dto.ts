import {AnswerPair} from "./answer-pair";

export interface SubmitSurveyDto {
  username: string
  listPairs: AnswerPair[];
}
