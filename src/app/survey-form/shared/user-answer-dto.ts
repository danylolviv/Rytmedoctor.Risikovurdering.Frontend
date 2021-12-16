import {AnswerPair} from "./answer-pair";

export interface UserAnswerDto {
  username: string;
  listAnswerPairs: AnswerPair[];
}
