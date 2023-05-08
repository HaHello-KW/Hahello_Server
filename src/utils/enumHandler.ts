import { question_metaenums, Page_Types, Picker_Types, Question_Types } from '../entity/Enums/question_const';

export function getKeyName(enum_type: question_metaenums, value: number) {
  switch (enum_type) {
    case question_metaenums.Page_Types:
      return Page_Types[value];
    case question_metaenums.Picker_Types:
      return Picker_Types[value];
    case question_metaenums.Question_Types:
      return Question_Types[value];
  }
}
