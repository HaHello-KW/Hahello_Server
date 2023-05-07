export interface IDefaultPage {
  pagename: string;
  id: number;
  pgLevel: number;
  questionType: string;
  questionTxt?: any;
  selectionTxt?: string[] | null;
  firstPickerType?: any;
  firstlineTxt?: any;
  secondPickerType?: any;
  secondlineTxt?: any;
  thirdPickerType?: any;
  thirdlineTxt?: any;
  nextpage?: string;
}

export interface ITypePage {
  imgpath?: string | object;
  pagename: string;
  id: number;
  pgLevel: number;
  questionType: string;
  questionTxt?: any;
  selectionTxt?: string[] | null;
  firstPickerType?: any;
  firstlineTxt?: any;
  secondPickerType?: any;
  secondlineTxt?: any;
  thirdPickerType?: any;
  thirdlineTxt?: any;
  nextpage?: string;
}

export interface IResultPage {
  questionId: string;
  title: string;
  description: string[];
  imgpath?: string | object;
}