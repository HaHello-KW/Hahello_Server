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

export function getUserType(value: string) {
  try {
    switch (value) {
        case 'A':
          return Page_Types.TypePage_A;
        case 'B':
          return Page_Types.TypePage_B;
        case 'C':
          return Page_Types.TypePage_C;
        case 'D':
          return Page_Types.TypePage_D;
        case 'E':
          return Page_Types.TypePage_E;
        default:
          throw new Error('올바른 params 값이 아닙니다.');
      }
  }
  catch (err) {
    console.error(err);
  }
}