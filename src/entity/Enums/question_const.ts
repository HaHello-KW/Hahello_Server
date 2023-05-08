export enum question_metaenums {
  Question_Types, Picker_Types, Page_Types,
}

export enum Question_Types {
  None = 0,
  Threeline_Picker = 1,
  Button_Selector = 2,
  Sixline_Picker = 3,
  Hybrid_Type = 4,
}
export enum Picker_Types {
  None = 0,
  DatePicker = 1,
  NumberPicker = 2,
}

export enum Page_Types {
  DefaultPage = 1,
  TypePage,
  ResultPage,
}
