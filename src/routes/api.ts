import * as express from 'express';
import { S3 } from '@aws-sdk/client-s3';
import * as AWS from 'aws-sdk';
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const s3 = new AWS.S3();

interface Params {
  Bucket: string;
  Key: string;
}
// var params1: Params = {
//   Bucket: "hahello-server/images/Type-A/A-1",
//   Key: "A-1-1.png",
// };
const params_A: Array<Params> = [
  {
    Bucket: 'hahello-server/images/Type-A/A-1',
    Key: 'A-1-1.png',
  },
  {
    Bucket: 'hahello-server/images/Type-A/A-1',
    Key: 'A-1-2.png',
  },
  {
    Bucket: 'hahello-server/images/Type-A/A-1',
    Key: 'A-1-3.png',
  },
  {
    Bucket: 'hahello-server/images/Type-A/A-1',
    Key: 'A-1-4.png',
  },
  {
    Bucket: 'hahello-server/images/Type-A/A-1',
    Key: 'A-1-5.png',
  },
];

const params_B: Array<Params> = [
  {
    Bucket: 'hahello-server/images/Type-B/B-1',
    Key: 'B-1-1.png',
  },
  {
    Bucket: 'hahello-server/images/Type-B/B-1',
    Key: 'B-1-2.png',
  },
  {
    Bucket: 'hahello-server/images/Type-B/B-1',
    Key: 'B-1-3.png',
  },
  {
    Bucket: 'hahello-server/images/Type-B/B-1',
    Key: 'B-1-4.png',
  },
  {
    Bucket: 'hahello-server/images/Type-B/B-1',
    Key: 'B-1-5.png',
  },
  {
    Bucket: 'hahello-server/images/Type-B/B-1',
    Key: 'B-1-6.png',
  },
];

const params_C: Array<Params> = [
  {
    Bucket: 'hahello-server/images/Type-C/C-1',
    Key: 'C-1-1.png',
  },
  {
    Bucket: 'hahello-server/images/Type-C/C-1',
    Key: 'C-1-2.png',
  },
  {
    Bucket: 'hahello-server/images/Type-C/C-1',
    Key: 'C-1-3.png',
  },
  {
    Bucket: 'hahello-server/images/Type-C/C-1',
    Key: 'C-1-4.png',
  },
  {
    Bucket: 'hahello-server/images/Type-C/C-1',
    Key: 'C-1-5.png',
  },
  {
    Bucket: 'hahello-server/images/Type-C/C-1',
    Key: 'C-1-6.png',
  },
];

const params_D: Array<Params> = [
  {
    Bucket: 'hahello-server/images/Type-D/D-1',
    Key: 'D-1-1.png',
  },
  {
    Bucket: 'hahello-server/images/Type-D/D-1',
    Key: 'D-1-2.png',
  },
  {
    Bucket: 'hahello-server/images/Type-D/D-1',
    Key: 'D-1-3.png',
  },
  {
    Bucket: 'hahello-server/images/Type-D/D-1',
    Key: 'D-1-4.png',
  },
  {
    Bucket: 'hahello-server/images/Type-D/D-1',
    Key: 'D-1-5.png',
  },
  {
    Bucket: 'hahello-server/images/Type-D/D-1',
    Key: 'D-1-6.png',
  },
];

const params_E: Array<Params> = [
  {
    Bucket: 'hahello-server/images/Type-E/E-1',
    Key: 'E-1-1.png',
  },
  {
    Bucket: 'hahello-server/images/Type-E/E-1',
    Key: 'E-1-2.png',
  },
  {
    Bucket: 'hahello-server/images/Type-E/E-1',
    Key: 'E-1-3.png',
  },
  {
    Bucket: 'hahello-server/images/Type-E/E-1',
    Key: 'E-1-4.png',
  },
  {
    Bucket: 'hahello-server/images/Type-E/E-1',
    Key: 'E-1-5.png',
  },
];

interface defaultPageModel {
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
interface typePageModel {
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
interface resultPageModel {
  questionId: string;
  title: string;
  description: string[];
}
let default_id = 0;
let default_level = 1;

let default_page: defaultPageModel[] = [
  {
    pagename: 'q_d_1',
    id: default_id++,
    pgLevel: default_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'datePicker',
    secondlineTxt: '에',
    thirdPickerType: 'none',
    thirdlineTxt: '태어났어',
    nextpage: 'q_d_2',
  },
  {
    pagename: 'q_d_2',
    id: default_id++,
    pgLevel: default_level++,
    questionType: 'Button_Selector',
    questionTxt: '나는',
    selectionTxt: [
      '난소 건강을 유지하고 싶어',
      '난자 냉동 계획이 있어',
      '난임 시술 계획이 있어',
      '현재 시술을 하고 있어 (난자 냉동, 난임 시술)',
      '갱년기 준비와 관리를 하고 싶어',
    ],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
    nextpage: 'q_d_3',
  },
  {
    pagename: 'q_d_3',
    id: default_id++,
    pgLevel: default_level++,
    questionType: 'Button_Selector',
    questionTxt: '나는',
    selectionTxt: ['결혼을 안 했어', '결혼을 했어', '임신 준비 중이야', '자녀가 있어', '임신 중이야'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
    nextpage: 'typePage',
  },
];
let type_A_id = default_id;
let type_B_id = default_id;
let type_C_id = default_id;
let type_D_id = default_id;
let type_E_id = default_id;

let type_A_level = default_level;
let type_B_level = default_level;
let type_C_level = default_level;
let type_D_level = default_level;
let type_E_level = default_level;

let A_Page: typePageModel[] = [
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_A[type_A_level - default_level].Bucket,
    //   Key: params_A[type_A_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-A/A-1/A1-1.png',
    pagename: 'q_a_1',
    id: type_A_id++,
    pgLevel: type_A_level,
    questionType: 'Button_Selector',
    questionTxt: '나는',
    selectionTxt: ['결혼하고 싶어', '결혼 생각이 없어', '아직 잘 모르겠어'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_A[type_A_level - default_level].Bucket,
    //   Key: params_A[type_A_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-A/A-1/A1-1.png',
    pagename: 'q_a_2',
    id: type_A_id++,
    pgLevel: type_A_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '살쯤에',
    thirdPickerType: 'none',
    thirdlineTxt: '결혼하면 좋겠어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_A[type_A_level - default_level].Bucket,
    //   Key: params_A[type_A_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-A/A-1/A1-2.png',
    pagename: 'q_a_3',
    id: type_A_id++,
    pgLevel: type_A_level,
    questionType: 'Button_Selector',
    questionTxt: '나는 아이를 ',
    selectionTxt: ['갖고 싶어', '갖고 싶은 생각이 없어'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_A[type_A_level - default_level].Bucket,
    //   Key: params_A[type_A_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-A/A-1/A1-2.png',
    pagename: 'q_a_4',
    id: type_A_id++,
    pgLevel: type_A_level,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '살에',
    thirdPickerType: 'none',
    thirdlineTxt: '첫째 아이를 갖고 싶어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_A[type_A_level - default_level].Bucket,
    //   Key: params_A[type_A_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-A/A-1/A1-2.png',
    pagename: 'q_a_5',
    id: type_A_id++,
    pgLevel: type_A_level,
    questionType: 'Button_Selector',
    questionTxt: '나는 ',
    selectionTxt: ['아이를 1명만 갖고 싶어', '둘째도 갖고 싶어'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_A[type_A_level - default_level].Bucket,
    //   Key: params_A[type_A_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-A/A-1/A1-2.png',
    pagename: 'q_a_6',
    id: type_A_id++,
    pgLevel: type_A_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '살에',
    thirdPickerType: 'none',
    thirdlineTxt: '둘째 아이를 갖고 싶어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_A[type_A_level - default_level].Bucket,
    //   Key: params_A[type_A_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-A/A-1/A1-3.png',
    pagename: 'q_a_7',
    id: type_A_id++,
    pgLevel: type_A_level++,
    questionType: 'Button_Selector',
    questionTxt: '나는 난자 냉동을',
    selectionTxt: [
      '이미 해서 보관 중이야',
      '하진 않았지만, 관심 있어',
      '하지 않았고, 별로 관심 없어',
      '잘 모르고 있어',
    ],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_A[type_A_level - default_level].Bucket,
    //   Key: params_A[type_A_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-A/A-1/A1-4.png',
    pagename: 'q_a_8',
    id: type_A_id++,
    pgLevel: type_A_level,
    questionType: 'Sixline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'datePicker',
    firstlineTxt: '나의 마지막(최근) 생리일은',
    secondPickerType: 'numberPicker',
    secondlineTxt: '나의 생리주기는 ',
    thirdPickerType: 'numberPicker',
    thirdlineTxt: '나의 생리기간은 ',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_A[type_A_level - default_level].Bucket,
    //   Key: params_A[type_A_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-A/A-1/A1-4.png',
    pagename: 'q_a_9',
    id: type_A_id++,
    pgLevel: type_A_level++,
    questionType: 'Button_Selector',
    questionTxt: '나는 생리일이',
    selectionTxt: ['규칙적이야', '불규칙적이야'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
];

let B_Page: typePageModel[] = [
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_B[type_B_level - default_level].Bucket,
    //   Key: params_B[type_B_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-B/B-1/B1-1.png',
    pagename: 'q_b_1',
    id: type_B_id++,
    pgLevel: type_B_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '에',
    thirdPickerType: 'none',
    thirdlineTxt: '결혼했어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_B[type_B_level - default_level].Bucket,
    //   Key: params_B[type_B_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-B/B-1/B1-2.png',
    pagename: 'q_b_2',
    id: type_B_id++,
    pgLevel: type_B_level,
    questionType: 'Button_Selector',
    questionTxt: '나는 아이를',
    selectionTxt: ['갖고 싶어', '둘째도 갖고 싶어', '갖고 싶은 생각이 없어'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_B[type_B_level - default_level].Bucket,
    //   Key: params_B[type_B_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-B/B-1/B1-2.png',
    pagename: 'q_b_3',
    id: type_B_id++,
    pgLevel: type_B_level,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '살에',
    thirdPickerType: 'none',
    thirdlineTxt: '첫째 아이를 갖고 싶어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_B[type_B_level - default_level].Bucket,
    //   Key: params_B[type_B_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-B/B-1/B1-2.png',
    pagename: 'q_b_4',
    id: type_B_id++,
    pgLevel: type_B_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '살에',
    thirdPickerType: 'none',
    thirdlineTxt: '둘째 아이를 갖고 싶어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_B[type_B_level - default_level].Bucket,
    //   Key: params_B[type_B_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-B/B-1/B1-3.png',
    pagename: 'q_b_5',
    id: type_B_id++,
    pgLevel: type_B_level,
    questionType: 'Button_Selector',
    questionTxt: '나는 난자 냉동을',
    selectionTxt: ['이미 해서 보관 중이야', '하지 않았지만, 관심 있어', '하지 않았고, 별로 관심없어', '잘 모르고 있어'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_B[type_B_level - default_level].Bucket,
    //   Key: params_B[type_B_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-B/B-1/B1-3.png',
    pagename: 'q_b_6',
    id: type_B_id++,
    pgLevel: type_B_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '에',
    thirdPickerType: 'numberPicker',
    thirdlineTxt: '개의 난자를 얼려놓았어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_B[type_B_level - default_level].Bucket,
    //   Key: params_B[type_B_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-B/B-1/B1-4.png',
    pagename: 'q_b_7',
    id: type_B_id++,
    pgLevel: type_B_level++,
    questionType: 'Button_Selector',
    questionTxt: '나는',
    selectionTxt: ['난임 시술을 준비 중이야', '자연임신을 준비 중이야'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_B[type_B_level - default_level].Bucket,
    //   Key: params_B[type_B_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-B/B-1/B1-5.png',
    pagename: 'q_b_8',
    id: type_B_id++,
    pgLevel: type_B_level,
    questionType: 'Sixline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'datePicker',
    firstlineTxt: '나의 마지막(최근) 생리일은',
    secondPickerType: 'numberPicker',
    secondlineTxt: '나의 생리주기는 ',
    thirdPickerType: 'numberPicker',
    thirdlineTxt: '나의 생리기간은 ',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_B[type_B_level - default_level].Bucket,
    //   Key: params_B[type_B_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-B/B-1/B1-5.png',
    pagename: 'q_b_9',
    id: type_B_id++,
    pgLevel: type_B_level++,
    questionType: 'Button_Selector',
    questionTxt: '나는 생리일이',
    selectionTxt: ['규칙적이야', '불규칙적이야'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
];
let C_Page: typePageModel[] = [
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_C[type_C_level - default_level].Bucket,
    //   Key: params_C[type_C_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-C/C-1/C1-1.png',
    pagename: 'q_c_1',
    id: type_C_id++,
    pgLevel: type_C_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '에',
    thirdPickerType: 'none',
    thirdlineTxt: '결혼했어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_C[type_C_level - default_level].Bucket,
    //   Key: params_C[type_C_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-C/C-1/C1-2.png',
    pagename: 'q_c_2',
    id: type_C_id++,
    pgLevel: type_C_level,
    questionType: 'Button_Selector',
    questionTxt: '나는 아이를',
    selectionTxt: ['갖고 싶어', '둘째도 갖고 싶어', '갖고 싶은 생각이 없어'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_C[type_C_level - default_level].Bucket,
    //   Key: params_C[type_C_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-C/C-1/C1-2.png',
    pagename: 'q_c_3',
    id: type_C_id++,
    pgLevel: type_C_level,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '살에',
    thirdPickerType: 'none',
    thirdlineTxt: '첫째 아이를 갖고 싶어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_C[type_C_level - default_level].Bucket,
    //   Key: params_C[type_C_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-C/C-1/C1-2.png',
    pagename: 'q_c_4',
    id: type_C_id++,
    pgLevel: type_C_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '살에',
    thirdPickerType: 'none',
    thirdlineTxt: '둘째 아이를 갖고 싶어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_C[type_C_level - default_level].Bucket,
    //   Key: params_C[type_C_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-C/C-1/C1-3.png',
    pagename: 'q_c_5',
    id: type_C_id++,
    pgLevel: type_C_level,
    questionType: 'Button_Selector',
    questionTxt: '나는 난자 냉동을',
    selectionTxt: ['이미 해서 보관 중이야', '하지 않았지만, 관심 있어', '하지 않았고, 별로 관심없어', '잘 모르고 있어'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_C[type_C_level - default_level].Bucket,
    //   Key: params_C[type_C_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-C/C-1/C1-3.png',
    pagename: 'q_c_6',
    id: type_C_id++,
    pgLevel: type_C_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '에',
    thirdPickerType: 'numberPicker',
    thirdlineTxt: '개의 난자를 얼려놓았어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_C[type_C_level - default_level].Bucket,
    //   Key: params_C[type_C_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-C/C-1/C1-4.png',
    pagename: 'q_c_7',
    id: type_C_id++,
    pgLevel: type_C_level++,
    questionType: 'Button_Selector',
    questionTxt: '나는',
    selectionTxt: ['난임 시술을 준비 중이야', '자연임신을 준비 중이야'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_C[type_C_level - default_level].Bucket,
    //   Key: params_C[type_C_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-C/C-1/C1-5.png',
    pagename: 'q_c_8',
    id: type_C_id++,
    pgLevel: type_C_level,
    questionType: 'Sixline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'datePicker',
    firstlineTxt: '나의 마지막(최근) 생리일은',
    secondPickerType: 'numberPicker',
    secondlineTxt: '나의 생리주기는 ',
    thirdPickerType: 'numberPicker',
    thirdlineTxt: '나의 생리기간은 ',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_C[type_C_level - default_level].Bucket,
    //   Key: params_C[type_C_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-C/C-1/C1-5.png',
    pagename: 'q_c_9',
    id: type_C_id++,
    pgLevel: type_C_level++,
    questionType: 'Button_Selector',
    questionTxt: '나는 생리일이',
    selectionTxt: ['규칙적이야', '불규칙적이야'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
];
let D_Page: typePageModel[] = [
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_D[type_D_level - default_level].Bucket,
    //   Key: params_D[type_D_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-D/D-1/D1-1.png',
    pagename: 'q_d_1',
    id: type_D_id++,
    pgLevel: type_D_level++,
    questionType: 'Button_Selector',
    questionTxt: '나는',
    selectionTxt: ['첫째가 있어', '둘째가 있어'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_D[type_D_level - default_level].Bucket,
    //   Key: params_D[type_D_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-D/D-1/D1-2.png',
    pagename: 'q_d_2',
    id: type_D_id++,
    pgLevel: type_D_level,
    questionType: 'Hybrid_Type',
    questionTxt: null,
    selectionTxt: ['둘째 생각이 있어', '둘째 생각이 없어'],
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'yearPicker',
    secondlineTxt: '에',
    thirdPickerType: 'none',
    thirdlineTxt: '첫째를 낳았고',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_D[type_D_level - default_level].Bucket,
    //   Key: params_D[type_D_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-D/D-1/D1-2.png',
    pagename: 'q_d_3',
    id: type_D_id++,
    pgLevel: type_D_level,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '살에',
    thirdPickerType: 'none',
    thirdlineTxt: '둘째 아이를 갖고 싶어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_D[type_D_level - default_level].Bucket,
    //   Key: params_D[type_D_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-D/D-1/D1-2.png',
    pagename: 'q_d_4',
    id: type_D_id++,
    pgLevel: type_D_level,
    questionType: 'Hybrid_Type',
    questionTxt: null,
    selectionTxt: ['셋째 생각이 있어', '셋째 생각이 없어'],
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'yearPicker',
    secondlineTxt: '에',
    thirdPickerType: 'none',
    thirdlineTxt: '둘째를 낳았고',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_D[type_D_level - default_level].Bucket,
    //   Key: params_D[type_D_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-D/D-1/D1-2.png',
    pagename: 'q_d_5',
    id: type_D_id++,
    pgLevel: type_D_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '살에',
    thirdPickerType: 'none',
    thirdlineTxt: '셋째 아이를 갖고 싶어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_D[type_D_level - default_level].Bucket,
    //   Key: params_D[type_D_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-D/D-1/D1-3.png',
    pagename: 'q_d_6',
    id: type_D_id++,
    pgLevel: type_D_level,
    questionType: 'Button_Selector',
    questionTxt: '나는 난자 냉동을',
    selectionTxt: ['이미 해서 보관 중이야', '하지 않았지만, 관심 있어', '하지 않았고, 별로 관심없어', '잘 모르고 있어'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_D[type_D_level - default_level].Bucket,
    //   Key: params_D[type_D_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-D/D-1/D1-3.png',
    pagename: 'q_d_7',
    id: type_D_id++,
    pgLevel: type_D_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '에',
    thirdPickerType: 'numberPicker',
    thirdlineTxt: '개의 난자를 얼려 놓았어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_D[type_D_level - default_level].Bucket,
    //   Key: params_D[type_D_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-D/D-1/D1-4.png',
    pagename: 'q_d_8',
    id: type_D_id++,
    pgLevel: type_D_level++,
    questionType: 'Button_Selector',
    questionTxt: '나는',
    selectionTxt: ['난임 시술을 준비 중이야', '자연임신을 준비 중이야'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_D[type_D_level - default_level].Bucket,
    //   Key: params_D[type_D_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-D/D-1/D1-5.png',
    pagename: 'q_d_9',
    id: type_D_id++,
    pgLevel: type_D_level,
    questionType: 'Sixline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'datePicker',
    firstlineTxt: '나의 마지막(최근) 생리일은',
    secondPickerType: 'numberPicker',
    secondlineTxt: '나의 생리주기는 ',
    thirdPickerType: 'numberPicker',
    thirdlineTxt: '나의 생리기간은 ',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_D[type_D_level - default_level].Bucket,
    //   Key: params_D[type_D_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-D/D-1/D1-5.png',
    pagename: 'q_d_10',
    id: type_D_id++,
    pgLevel: type_D_level++,
    questionType: 'Button_Selector',
    questionTxt: '나는 생리일이',
    selectionTxt: ['규칙적이야', '불규칙적이야'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
];
let E_Page: typePageModel[] = [
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_E[type_E_level - default_level].Bucket,
    //   Key: params_E[type_E_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-E/E-1/E1-1.png',
    pagename: 'q_e_1',
    id: type_E_id++,
    pgLevel: type_E_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '에',
    thirdPickerType: 'none',
    thirdlineTxt: '결혼했어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_E[type_E_level - default_level].Bucket,
    //   Key: params_E[type_E_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-E/E-1/E1-2.png',
    pagename: 'q_e_2',
    id: type_E_id++,
    pgLevel: type_E_level,
    questionType: 'Button_Selector',
    questionTxt: '나는',
    selectionTxt: ['첫 번째 임신 중이야', '두 번째 임신 중이야'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_E[type_E_level - default_level].Bucket,
    //   Key: params_E[type_E_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-E/E-1/E1-2.png',
    pagename: 'q_e_3',
    id: type_E_id++,
    pgLevel: type_E_level,
    questionType: 'Button_Selector',
    questionTxt: '나는',
    selectionTxt: ['둘째를 갖고 싶어', '셋째를 갖고 싶어', '아이를 갖고 싶은 생각이 없어'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_E[type_E_level - default_level].Bucket,
    //   Key: params_E[type_E_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-E/E-1/E1-2.png',
    pagename: 'q_e_4',
    id: type_E_id++,
    pgLevel: type_E_level,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '살 터울의',
    thirdPickerType: 'none',
    thirdlineTxt: '둘째 아이를 갖고 싶어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_E[type_E_level - default_level].Bucket,
    //   Key: params_E[type_E_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-E/E-1/E1-2.png',
    pagename: 'q_e_5',
    id: type_E_id++,
    pgLevel: type_E_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '살 터울의',
    thirdPickerType: 'none',
    thirdlineTxt: '셋째 아이를 갖고 싶어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_E[type_E_level - default_level].Bucket,
    //   Key: params_E[type_E_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-E/E-1/E1-3.png',
    pagename: 'q_e_6',
    id: type_E_id++,
    pgLevel: type_E_level,
    questionType: 'Button_Selector',
    questionTxt: '나는 난자 냉동을',
    selectionTxt: ['이미 해서 보관 중이야', '하지 않았지만, 관심 있어', '하지 않았고, 별로 관심없어', '잘 모르고 있어'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_E[type_E_level - default_level].Bucket,
    //   Key: params_E[type_E_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-E/E-1/E1-3.png',
    pagename: 'q_e_7',
    id: type_E_id++,
    pgLevel: type_E_level++,
    questionType: 'Threeline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '에',
    thirdPickerType: 'numberPicker',
    thirdlineTxt: '개의 난자를 얼려 놓았어',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_E[type_E_level - default_level].Bucket,
    //   Key: params_E[type_E_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-E/E-1/E1-4.png',
    pagename: 'q_e_8',
    id: type_E_id++,
    pgLevel: type_E_level++,
    questionType: 'Sixline_Picker',
    questionTxt: null,
    selectionTxt: null,
    firstPickerType: 'datePicker',
    firstlineTxt: '나의 마지막(최근) 생리일은',
    secondPickerType: 'numberPicker',
    secondlineTxt: '나의 생리주기는 ',
    thirdPickerType: 'numberPicker',
    thirdlineTxt: '나의 생리기간은 ',
  },
  {
    // imgpath: s3.getSignedUrl('getObject', {
    //   Bucket: params_E[type_E_level - default_level].Bucket,
    //   Key: params_E[type_E_level - default_level].Key,
    // }),
    imgpath: 'https://hahello-server.s3.ap-northeast-2.amazonaws.com/images/Type-E/E-1/E1-4.png',
    pagename: 'q_e_9',
    id: type_E_id++,
    pgLevel: type_E_level,
    questionType: 'Button_Selector',
    questionTxt: '나는 생리일이',
    selectionTxt: ['규칙적이야', '불규칙적이야'],
    firstPickerType: null,
    firstlineTxt: null,
    secondPickerType: null,
    secondlineTxt: null,
    thirdPickerType: null,
    thirdlineTxt: null,
  },
];

let Result_A_Page: resultPageModel[] = [
  {
    questionId: 'A1',
    title: '생기 있는 설계자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'A2',
    title: '자신감 있는 설계자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'A3',
    title: '체계적인 설계자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'A4',
    title: '신중한 설계자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'A5',
    title: '여유로운 설계자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
];
let Result_B_Page: resultPageModel[] = [
  {
    questionId: 'B1',
    title: '매력적인 추진자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'B2',
    title: '긍정적인 추진자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'B3',
    title: '활기 있는 추진자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'B4',
    title: '믿음을 주는 추진자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'B5',
    title: '자유를 만끽하는 추진자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
];
let Result_C_Page: resultPageModel[] = [
  {
    questionId: 'C1',
    title: '빛나는 예술가 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'C2',
    title: '생각이 깊은 예술가 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'C3',
    title: '이끌어 가는 예술가 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'C4',
    title: '결단력 있는 예술가 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'C5',
    title: '철저한 예술가 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
];
let Result_D_Page: resultPageModel[] = [
  {
    questionId: 'D1',
    title: '행동하는 항해자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'D2',
    title: '주도적인 항해자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'D3',
    title: '의욕적인 항해자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'D4',
    title: '사려 깊은 항해자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'D5',
    title: '통찰력 있는 항해자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
];
let Result_E_Page: resultPageModel[] = [
  {
    questionId: 'E1',
    title: '꼼꼼한 수호자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'E2',
    title: '세심한 수호자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'E3',
    title: '굳건한 수호자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'E4',
    title: '자신을 믿는 수호자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
  {
    questionId: 'E5',
    title: '주의 깊은 수호자 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  },
];
app.get('/defaultPage', (req: express.Request, res: express.Response) => {
  res.send(default_page);
});

app.get('/typePage/:type', (req: express.Request, res: express.Response) => {
  // const user_type = req.body.married_type;
  const user_type = req.params.type;
  const type_num = req.params.num;
  if (user_type === 'A') {
    res.send(A_Page);
  } else if (user_type === 'B') {
    res.send(B_Page);
  } else if (user_type === 'C') {
    res.send(C_Page);
  } else if (user_type === 'D') {
    res.send(D_Page);
  } else if (user_type === 'E') {
    res.send(E_Page);
  }
});
app.get('/resultPage/:type', (req: express.Request, res: express.Response) => {
  // const user_type = req.body.married_type;
  const user_type = req.params.type;
  if (user_type === 'A') {
    res.send(Result_A_Page);
  } else if (user_type === 'B') {
    res.send(Result_B_Page);
  } else if (user_type === 'C') {
    res.send(Result_C_Page);
  } else if (user_type === 'D') {
    res.send(Result_D_Page);
  } else if (user_type === 'E') {
    res.send(Result_E_Page);
  }
});
app.post('/defaultPage', (req: express.Request, res: express.Response) => {
  const q_type = req.body.questionType;
  const new_id = req.body.id;
  let new_level = 0;
  default_page.forEach((item) => {
    if (item.id >= new_id) {
      if (item.id == new_id) {
        new_level = item.pgLevel;
      }
      item.id++;
      item.pgLevel++;
    }
  });
  if (q_type == 'Threeline_Picker') {
    let default_info: typePageModel = {
      pagename: req.body.pagename,
      id: new_id,
      pgLevel: new_level,
      questionType: q_type,
      questionTxt: null,
      selectionTxt: null,
      firstPickerType: req.body.firstPickerType,
      firstlineTxt: req.body.firstlineTxt,
      secondPickerType: req.body.secondPickerType,
      secondlineTxt: req.body.secondlineTxt,
      thirdPickerType: req.body.thirdPickerType,
      thirdlineTxt: req.body.thirdlineTxt,
    };
    default_page = default_page.concat(default_info);
  } else if (q_type == 'Button_Selector') {
    let default_info: typePageModel = {
      pagename: req.body.pagename,
      id: new_id,
      pgLevel: new_level,
      questionType: q_type,
      questionTxt: req.body.questionTxt,
      selectionTxt: req.body.selectionTxt,
      firstPickerType: null,
      firstlineTxt: null,
      secondPickerType: null,
      secondlineTxt: null,
      thirdPickerType: null,
      thirdlineTxt: null,
    };
    default_page = default_page.concat(default_info);
  } else if (q_type == 'Sixline_Picker') {
    let default_info: typePageModel = {
      pagename: req.body.pagename,
      id: new_id,
      pgLevel: new_level,
      questionType: req.body.questionType,
      questionTxt: null,
      selectionTxt: null,
      firstPickerType: req.body.firstPickerType,
      firstlineTxt: req.body.firstlineTxt,
      secondPickerType: req.body.secondPickerType,
      secondlineTxt: req.body.secondlineTxt,
      thirdPickerType: req.body.thirdPickerType,
      thirdlineTxt: req.body.thirdlineTxt,
    };
    default_page = default_page.concat(default_info);
  }
  default_page.sort(function (a, b) {
    return a.id - b.id;
  });
  default_id++;
  default_level++;
  A_Page.forEach((item) => {
    item.id++;
    item.pgLevel++;
  });
  type_A_id++;
  type_A_level++;
  B_Page.forEach((item) => {
    item.id++;
    item.pgLevel++;
  });
  type_B_id++;
  type_B_level++;
  C_Page.forEach((item) => {
    item.id++;
    item.pgLevel++;
  });
  type_C_id++;
  type_C_level++;
  D_Page.forEach((item) => {
    item.id++;
    item.pgLevel++;
  });
  type_D_id++;
  type_D_level++;
  E_Page.forEach((item) => {
    item.id++;
    item.pgLevel++;
  });
  type_E_id++;
  type_E_level++;
  res.redirect('/defaultPage');
});

app.post('/typePage/:type', (req: express.Request, res: express.Response) => {
  const user_type = req.params.type;
  const q_type = req.body.questionType;
  const new_id = req.body.id;
  let new_imgpath: any = '';
  let new_level = 0;
  if (user_type === 'A') {
    A_Page.forEach((item) => {
      if (item.id >= new_id) {
        if (item.id === new_id) {
          new_level = item.pgLevel;
          new_imgpath = item.imgpath;
        }
        item.id++;
      }
      // item.pgLevel++;
    });
    let pgLevel_cnt = 0;
    A_Page.forEach((item) => {
      if (new_level == item.pgLevel) pgLevel_cnt++;
    });
    if (pgLevel_cnt == 1) {
      A_Page.forEach((item) => {
        if (item.pgLevel >= new_level) item.pgLevel++;
      });
      type_A_level++;
    }
    if (q_type == 'Threeline_Picker') {
      let A_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: q_type,
        questionTxt: null,
        selectionTxt: null,
        firstPickerType: req.body.firstPickerType,
        firstlineTxt: req.body.firstlineTxt,
        secondPickerType: req.body.secondPickerType,
        secondlineTxt: req.body.secondlineTxt,
        thirdPickerType: req.body.thirdPickerType,
        thirdlineTxt: req.body.thirdlineTxt,
      };
      A_Page = A_Page.concat(A_info);
    } else if (q_type == 'Button_Selector') {
      let A_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: q_type,
        questionTxt: req.body.questionTxt,
        selectionTxt: req.body.selectionTxt,
        firstPickerType: null,
        firstlineTxt: null,
        secondPickerType: null,
        secondlineTxt: null,
        thirdPickerType: null,
        thirdlineTxt: null,
      };
      A_Page = A_Page.concat(A_info);
    } else if (q_type == 'Sixline_Picker') {
      let A_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: req.body.questionType,
        questionTxt: null,
        selectionTxt: null,
        firstPickerType: req.body.firstPickerType,
        firstlineTxt: req.body.firstlineTxt,
        secondPickerType: req.body.secondPickerType,
        secondlineTxt: req.body.secondlineTxt,
        thirdPickerType: req.body.thirdPickerType,
        thirdlineTxt: req.body.thirdlineTxt,
      };
      A_Page = A_Page.concat(A_info);
    }
    A_Page.sort(function (a, b) {
      return a.id - b.id;
    });
    type_A_id++;
  } else if (user_type === 'B') {
    B_Page.forEach((item) => {
      if (item.id >= new_id) {
        if (item.id === new_id) {
          new_level = item.pgLevel;
          new_imgpath = item.imgpath;
        }
        item.id++;
      }
      // item.pgLevel++;
    });
    let pgLevel_cnt = 0;
    B_Page.forEach((item) => {
      if (new_level == item.pgLevel) pgLevel_cnt++;
    });
    if (pgLevel_cnt == 1) {
      B_Page.forEach((item) => {
        if (item.pgLevel >= new_level) item.pgLevel++;
      });
      type_B_level++;
    }
    if (q_type == 'Threeline_Picker') {
      let B_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: q_type,
        questionTxt: null,
        selectionTxt: null,
        firstPickerType: req.body.firstPickerType,
        firstlineTxt: req.body.firstlineTxt,
        secondPickerType: req.body.secondPickerType,
        secondlineTxt: req.body.secondlineTxt,
        thirdPickerType: req.body.thirdPickerType,
        thirdlineTxt: req.body.thirdlineTxt,
      };
      B_Page = B_Page.concat(B_info);
    } else if (q_type == 'Button_Selector') {
      let B_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: q_type,
        questionTxt: req.body.questionTxt,
        selectionTxt: req.body.selectionTxt,
        firstPickerType: null,
        firstlineTxt: null,
        secondPickerType: null,
        secondlineTxt: null,
        thirdPickerType: null,
        thirdlineTxt: null,
      };
      B_Page = B_Page.concat(B_info);
    } else if (q_type == 'Sixline_Picker') {
      let B_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: req.body.questionType,
        questionTxt: null,
        selectionTxt: null,
        firstPickerType: req.body.firstPickerType,
        firstlineTxt: req.body.firstlineTxt,
        secondPickerType: req.body.secondPickerType,
        secondlineTxt: req.body.secondlineTxt,
        thirdPickerType: req.body.thirdPickerType,
        thirdlineTxt: req.body.thirdlineTxt,
      };
      B_Page = B_Page.concat(B_info);
    }
    B_Page.sort(function (a, b) {
      return a.id - b.id;
    });
    type_B_id++;
  } else if (user_type === 'C') {
    C_Page.forEach((item) => {
      if (item.id >= new_id) {
        if (item.id === new_id) {
          new_level = item.pgLevel;
          new_imgpath = item.imgpath;
        }
        item.id++;
      }
      // item.pgLevel++;
    });
    let pgLevel_cnt = 0;
    C_Page.forEach((item) => {
      if (new_level == item.pgLevel) pgLevel_cnt++;
    });
    if (pgLevel_cnt == 1) {
      C_Page.forEach((item) => {
        if (item.pgLevel >= new_level) item.pgLevel++;
      });
      type_C_level++;
    }
    if (q_type == 'Threeline_Picker') {
      let C_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: q_type,
        questionTxt: null,
        selectionTxt: null,
        firstPickerType: req.body.firstPickerType,
        firstlineTxt: req.body.firstlineTxt,
        secondPickerType: req.body.secondPickerType,
        secondlineTxt: req.body.secondlineTxt,
        thirdPickerType: req.body.thirdPickerType,
        thirdlineTxt: req.body.thirdlineTxt,
      };
      C_Page = C_Page.concat(C_info);
    } else if (q_type == 'Button_Selector') {
      let C_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: q_type,
        questionTxt: req.body.questionTxt,
        selectionTxt: req.body.selectionTxt,
        firstPickerType: null,
        firstlineTxt: null,
        secondPickerType: null,
        secondlineTxt: null,
        thirdPickerType: null,
        thirdlineTxt: null,
      };
      C_Page = C_Page.concat(C_info);
    } else if (q_type == 'Sixline_Picker') {
      let C_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: req.body.questionType,
        questionTxt: null,
        selectionTxt: null,
        firstPickerType: req.body.firstPickerType,
        firstlineTxt: req.body.firstlineTxt,
        secondPickerType: req.body.secondPickerType,
        secondlineTxt: req.body.secondlineTxt,
        thirdPickerType: req.body.thirdPickerType,
        thirdlineTxt: req.body.thirdlineTxt,
      };
      C_Page = C_Page.concat(C_info);
    }
    B_Page.sort(function (a, b) {
      return a.id - b.id;
    });
    type_C_id++;
  } else if (user_type === 'D') {
    D_Page.forEach((item) => {
      if (item.id >= new_id) {
        if (item.id === new_id) {
          new_level = item.pgLevel;
          new_imgpath = item.imgpath;
        }
        item.id++;
      }
      // item.pgLevel++;
    });
    let pgLevel_cnt = 0;
    D_Page.forEach((item) => {
      if (new_level == item.pgLevel) pgLevel_cnt++;
    });
    if (pgLevel_cnt == 1) {
      D_Page.forEach((item) => {
        if (item.pgLevel >= new_level) item.pgLevel++;
      });
      type_D_level++;
    }
    if (q_type == 'Threeline_Picker') {
      let D_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: q_type,
        questionTxt: null,
        selectionTxt: null,
        firstPickerType: req.body.firstPickerType,
        firstlineTxt: req.body.firstlineTxt,
        secondPickerType: req.body.secondPickerType,
        secondlineTxt: req.body.secondlineTxt,
        thirdPickerType: req.body.thirdPickerType,
        thirdlineTxt: req.body.thirdlineTxt,
      };
      D_Page = D_Page.concat(D_info);
    } else if (q_type == 'Button_Selector') {
      let D_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: q_type,
        questionTxt: req.body.questionTxt,
        selectionTxt: req.body.selectionTxt,
        firstPickerType: null,
        firstlineTxt: null,
        secondPickerType: null,
        secondlineTxt: null,
        thirdPickerType: null,
        thirdlineTxt: null,
      };
      D_Page = D_Page.concat(D_info);
    } else if (q_type == 'Sixline_Picker') {
      let D_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: req.body.questionType,
        questionTxt: null,
        selectionTxt: null,
        firstPickerType: req.body.firstPickerType,
        firstlineTxt: req.body.firstlineTxt,
        secondPickerType: req.body.secondPickerType,
        secondlineTxt: req.body.secondlineTxt,
        thirdPickerType: req.body.thirdPickerType,
        thirdlineTxt: req.body.thirdlineTxt,
      };
      D_Page = D_Page.concat(D_info);
    }
    D_Page.sort(function (a, b) {
      return a.id - b.id;
    });
    type_D_id++;
  } else if (user_type === 'E') {
    E_Page.forEach((item) => {
      if (item.id >= new_id) {
        if (item.id === new_id) {
          new_level = item.pgLevel;
          new_imgpath = item.imgpath;
        }
        item.id++;
      }
      // item.pgLevel++;
    });
    let pgLevel_cnt = 0;
    E_Page.forEach((item) => {
      if (new_level == item.pgLevel) pgLevel_cnt++;
    });
    if (pgLevel_cnt == 1) {
      E_Page.forEach((item) => {
        if (item.pgLevel >= new_level) item.pgLevel++;
      });
      type_E_level++;
    }
    if (q_type == 'Threeline_Picker') {
      let E_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: q_type,
        questionTxt: null,
        selectionTxt: null,
        firstPickerType: req.body.firstPickerType,
        firstlineTxt: req.body.firstlineTxt,
        secondPickerType: req.body.secondPickerType,
        secondlineTxt: req.body.secondlineTxt,
        thirdPickerType: req.body.thirdPickerType,
        thirdlineTxt: req.body.thirdlineTxt,
      };
      E_Page = E_Page.concat(E_info);
    } else if (q_type == 'Button_Selector') {
      let E_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: q_type,
        questionTxt: req.body.questionTxt,
        selectionTxt: req.body.selectionTxt,
        firstPickerType: null,
        firstlineTxt: null,
        secondPickerType: null,
        secondlineTxt: null,
        thirdPickerType: null,
        thirdlineTxt: null,
      };
      E_Page = E_Page.concat(E_info);
    } else if (q_type == 'Sixline_Picker') {
      let E_info = {
        imgpath: new_imgpath,
        pagename: req.body.pagename,
        id: new_id,
        pgLevel: new_level,
        questionType: req.body.questionType,
        questionTxt: null,
        selectionTxt: null,
        firstPickerType: req.body.firstPickerType,
        firstlineTxt: req.body.firstlineTxt,
        secondPickerType: req.body.secondPickerType,
        secondlineTxt: req.body.secondlineTxt,
        thirdPickerType: req.body.thirdPickerType,
        thirdlineTxt: req.body.thirdlineTxt,
      };
      E_Page = E_Page.concat(E_info);
    }
    E_Page.sort(function (a, b) {
      return a.id - b.id;
    });
    type_E_id++;
  }
  res.redirect('/typePage/' + user_type);
});

app.put('/defaultPage', (req: express.Request, res: express.Response) => {
  const find_id = req.body.id;
  const q_type = req.body.questionType;
  let new_level = 0;
  if (typeof find_id !== 'undefined') {
    default_page.forEach((item) => {
      if (item.id == find_id) {
        new_level = item.pgLevel;
      }
    });
    default_page.splice(find_id, 1);
    if (q_type == 'Threeline_Picker') {
      let default_info: typePageModel = {
        pagename: req.body.pagename,
        id: find_id,
        pgLevel: new_level,
        questionType: q_type,
        questionTxt: null,
        selectionTxt: null,
        firstPickerType: req.body.firstPickerType,
        firstlineTxt: req.body.firstlineTxt,
        secondPickerType: req.body.secondPickerType,
        secondlineTxt: req.body.secondlineTxt,
        thirdPickerType: req.body.thirdPickerType,
        thirdlineTxt: req.body.thirdlineTxt,
      };
      default_page = default_page.concat(default_info);
    } else if (q_type == 'Button_Selector') {
      let default_info: typePageModel = {
        pagename: req.body.pagename,
        id: find_id,
        pgLevel: new_level,
        questionType: q_type,
        questionTxt: req.body.questionTxt,
        selectionTxt: req.body.selectionTxt,
        firstPickerType: null,
        firstlineTxt: null,
        secondPickerType: null,
        secondlineTxt: null,
        thirdPickerType: null,
        thirdlineTxt: null,
      };
      default_page = default_page.concat(default_info);
    } else if (q_type == 'Sixline_Picker') {
      let default_info: typePageModel = {
        pagename: req.body.pagename,
        id: find_id,
        pgLevel: new_level,
        questionType: req.body.questionType,
        questionTxt: null,
        selectionTxt: null,
        firstPickerType: req.body.firstPickerType,
        firstlineTxt: req.body.firstlineTxt,
        secondPickerType: req.body.secondPickerType,
        secondlineTxt: req.body.secondlineTxt,
        thirdPickerType: req.body.thirdPickerType,
        thirdlineTxt: req.body.thirdlineTxt,
      };
      default_page = default_page.concat(default_info);
    }
    default_page.sort(function (a, b) {
      return a.id - b.id;
    });
  }
  res.redirect('/defaultPage');
});

app.put('/typePage/:type', (req: express.Request, res: express.Response) => {
  const user_type = req.params.type;
  let find_id = req.body.id;
  const q_type = req.body.questionType;
  let new_imgpath: any = '';
  let new_level = 0;
  if (typeof find_id != 'undefined') {
    if (user_type === 'A') {
      A_Page.forEach((item) => {
        if (item.pgLevel == find_id) {
          new_level = item.pgLevel;
          new_imgpath = item.imgpath;
        }
      });
      A_Page.splice(find_id - default_id, 1);
      if (q_type == 'Threeline_Picker') {
        let A_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: q_type,
          questionTxt: null,
          selectionTxt: null,
          firstPickerType: req.body.firstPickerType,
          firstlineTxt: req.body.firstlineTxt,
          secondPickerType: req.body.secondPickerType,
          secondlineTxt: req.body.secondlineTxt,
          thirdPickerType: req.body.thirdPickerType,
          thirdlineTxt: req.body.thirdlineTxt,
        };
        A_Page = A_Page.concat(A_info);
      } else if (q_type == 'Button_Selector') {
        let A_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: q_type,
          questionTxt: req.body.questionTxt,
          selectionTxt: req.body.selectionTxt,
          firstPickerType: null,
          firstlineTxt: null,
          secondPickerType: null,
          secondlineTxt: null,
          thirdPickerType: null,
          thirdlineTxt: null,
        };
        A_Page = A_Page.concat(A_info);
      } else if (q_type == 'Sixline_Picker') {
        let A_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: req.body.questionType,
          questionTxt: null,
          selectionTxt: null,
          firstPickerType: req.body.firstPickerType,
          firstlineTxt: req.body.firstlineTxt,
          secondPickerType: req.body.secondPickerType,
          secondlineTxt: req.body.secondlineTxt,
          thirdPickerType: req.body.thirdPickerType,
          thirdlineTxt: req.body.thirdlineTxt,
        };
        A_Page = A_Page.concat(A_info);
      }
      A_Page.sort(function (a, b) {
        return a.id - b.id;
      });
    } else if (user_type === 'B') {
      B_Page.forEach((item) => {
        if (item.pgLevel == find_id) {
          new_level = item.pgLevel;
          new_imgpath = item.imgpath;
        }
      });
      B_Page.splice(find_id - default_id, 1);
      if (q_type == 'Threeline_Picker') {
        let B_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: q_type,
          questionTxt: null,
          selectionTxt: null,
          firstPickerType: req.body.firstPickerType,
          firstlineTxt: req.body.firstlineTxt,
          secondPickerType: req.body.secondPickerType,
          secondlineTxt: req.body.secondlineTxt,
          thirdPickerType: req.body.thirdPickerType,
          thirdlineTxt: req.body.thirdlineTxt,
        };
        B_Page = B_Page.concat(B_info);
      } else if (q_type == 'Button_Selector') {
        let B_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: q_type,
          questionTxt: req.body.questionTxt,
          selectionTxt: req.body.selectionTxt,
          firstPickerType: null,
          firstlineTxt: null,
          secondPickerType: null,
          secondlineTxt: null,
          thirdPickerType: null,
          thirdlineTxt: null,
        };
        B_Page = B_Page.concat(B_info);
      } else if (q_type == 'Sixline_Picker') {
        let B_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: req.body.questionType,
          questionTxt: null,
          selectionTxt: null,
          firstPickerType: req.body.firstPickerType,
          firstlineTxt: req.body.firstlineTxt,
          secondPickerType: req.body.secondPickerType,
          secondlineTxt: req.body.secondlineTxt,
          thirdPickerType: req.body.thirdPickerType,
          thirdlineTxt: req.body.thirdlineTxt,
        };
        B_Page = B_Page.concat(B_info);
      }
      B_Page.sort(function (a, b) {
        return a.id - b.id;
      });
    } else if (user_type === 'C') {
      C_Page.forEach((item) => {
        if (item.pgLevel == find_id) {
          new_level = item.pgLevel;
          new_imgpath = item.imgpath;
        }
      });
      C_Page.splice(find_id - default_id, 1);
      if (q_type == 'Threeline_Picker') {
        let C_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: q_type,
          questionTxt: null,
          selectionTxt: null,
          firstPickerType: req.body.firstPickerType,
          firstlineTxt: req.body.firstlineTxt,
          secondPickerType: req.body.secondPickerType,
          secondlineTxt: req.body.secondlineTxt,
          thirdPickerType: req.body.thirdPickerType,
          thirdlineTxt: req.body.thirdlineTxt,
        };
        C_Page = C_Page.concat(C_info);
      } else if (q_type == 'Button_Selector') {
        let C_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: q_type,
          questionTxt: req.body.questionTxt,
          selectionTxt: req.body.selectionTxt,
          firstPickerType: null,
          firstlineTxt: null,
          secondPickerType: null,
          secondlineTxt: null,
          thirdPickerType: null,
          thirdlineTxt: null,
        };
        C_Page = C_Page.concat(C_info);
      } else if (q_type == 'Sixline_Picker') {
        let C_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: req.body.questionType,
          questionTxt: null,
          selectionTxt: null,
          firstPickerType: req.body.firstPickerType,
          firstlineTxt: req.body.firstlineTxt,
          secondPickerType: req.body.secondPickerType,
          secondlineTxt: req.body.secondlineTxt,
          thirdPickerType: req.body.thirdPickerType,
          thirdlineTxt: req.body.thirdlineTxt,
        };
        C_Page = C_Page.concat(C_info);
      }
      C_Page.sort(function (a, b) {
        return a.id - b.id;
      });
    } else if (user_type === 'D') {
      D_Page.forEach((item) => {
        if (item.pgLevel == find_id) {
          new_level = item.pgLevel;
          new_imgpath = item.imgpath;
        }
      });
      D_Page.splice(find_id - default_id, 1);
      if (q_type == 'Threeline_Picker') {
        let D_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: q_type,
          questionTxt: null,
          selectionTxt: null,
          firstPickerType: req.body.firstPickerType,
          firstlineTxt: req.body.firstlineTxt,
          secondPickerType: req.body.secondPickerType,
          secondlineTxt: req.body.secondlineTxt,
          thirdPickerType: req.body.thirdPickerType,
          thirdlineTxt: req.body.thirdlineTxt,
        };
        D_Page = D_Page.concat(D_info);
      } else if (q_type == 'Button_Selector') {
        let D_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: q_type,
          questionTxt: req.body.questionTxt,
          selectionTxt: req.body.selectionTxt,
          firstPickerType: null,
          firstlineTxt: null,
          secondPickerType: null,
          secondlineTxt: null,
          thirdPickerType: null,
          thirdlineTxt: null,
        };
        D_Page = D_Page.concat(D_info);
      } else if (q_type == 'Sixline_Picker') {
        let D_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: req.body.questionType,
          questionTxt: null,
          selectionTxt: null,
          firstPickerType: req.body.firstPickerType,
          firstlineTxt: req.body.firstlineTxt,
          secondPickerType: req.body.secondPickerType,
          secondlineTxt: req.body.secondlineTxt,
          thirdPickerType: req.body.thirdPickerType,
          thirdlineTxt: req.body.thirdlineTxt,
        };
        D_Page = D_Page.concat(D_info);
      }
      D_Page.sort(function (a, b) {
        return a.id - b.id;
      });
    } else if (user_type === 'E') {
      E_Page.forEach((item) => {
        if (item.pgLevel == find_id) {
          new_level = item.pgLevel;
          new_imgpath = item.imgpath;
        }
      });
      E_Page.splice(find_id - default_id, 1);
      if (q_type == 'Threeline_Picker') {
        let E_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: q_type,
          questionTxt: null,
          selectionTxt: null,
          firstPickerType: req.body.firstPickerType,
          firstlineTxt: req.body.firstlineTxt,
          secondPickerType: req.body.secondPickerType,
          secondlineTxt: req.body.secondlineTxt,
          thirdPickerType: req.body.thirdPickerType,
          thirdlineTxt: req.body.thirdlineTxt,
        };
        E_Page = E_Page.concat(E_info);
      } else if (q_type == 'Button_Selector') {
        let E_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: q_type,
          questionTxt: req.body.questionTxt,
          selectionTxt: req.body.selectionTxt,
          firstPickerType: null,
          firstlineTxt: null,
          secondPickerType: null,
          secondlineTxt: null,
          thirdPickerType: null,
          thirdlineTxt: null,
        };
        E_Page = A_Page.concat(E_info);
      } else if (q_type == 'Sixline_Picker') {
        let E_info = {
          imgpath: new_imgpath,
          pagename: req.body.pagename,
          id: find_id,
          pgLevel: new_level,
          questionType: req.body.questionType,
          questionTxt: null,
          selectionTxt: null,
          firstPickerType: req.body.firstPickerType,
          firstlineTxt: req.body.firstlineTxt,
          secondPickerType: req.body.secondPickerType,
          secondlineTxt: req.body.secondlineTxt,
          thirdPickerType: req.body.thirdPickerType,
          thirdlineTxt: req.body.thirdlineTxt,
        };
        E_Page = E_Page.concat(E_info);
      }
      E_Page.sort(function (a, b) {
        return a.id - b.id;
      });
    }
  }
  res.redirect('/typePage/' + user_type);
});

app.delete('/defaultPage', (req: express.Request, res: express.Response) => {
  let find_id = req.body.id;
  if (typeof find_id != 'undefined') {
    default_page.splice(find_id, 1);
    default_page.forEach((item) => {
      if (item.id > find_id) {
        item.id -= 1;
        item.pgLevel -= 1;
      }
    });
  }
  default_level--;
  A_Page.forEach((item) => {
    item.id--;
    item.pgLevel--;
  });
  type_A_id--;
  type_A_level--;
  B_Page.forEach((item) => {
    item.id--;
    item.pgLevel--;
  });
  type_B_id--;
  type_B_level--;
  C_Page.forEach((item) => {
    item.id--;
    item.pgLevel--;
  });
  type_C_id--;
  type_C_level--;
  D_Page.forEach((item) => {
    item.id--;
    item.pgLevel--;
  });
  type_D_id--;
  type_D_level--;
  E_Page.forEach((item) => {
    item.id--;
    item.pgLevel--;
  });
  type_E_id--;
  type_E_level--;
  res.redirect('/defaultPage');
});

app.delete('/typePage/:type', (req: express.Request, res: express.Response) => {
  let user_type = req.params.type;
  let find_id = req.body.id;
  let find_level = 0;
  let find_imgpath: any = '';
  if (typeof find_id != 'undefined') {
    if (user_type === 'A') {
      A_Page.forEach((item) => {
        if (find_id == item.id) {
          find_level = item.pgLevel;
        }
      });
      let index = A_Page.findIndex((item) => item.id == find_id);
      let pgLevel_cnt = 0;
      A_Page.splice(index, 1);
      A_Page.forEach((item) => {
        if (find_level == item.pgLevel) {
          pgLevel_cnt++;
        }
      });
      A_Page.forEach((item) => {
        if (item.id > find_id) {
          item.id--;
          if (pgLevel_cnt == 0) {
            item.pgLevel--;
            item.imgpath = s3.getSignedUrl('getObject', {
              Bucket: params_A[item.pgLevel - default_level].Bucket,
              Key: params_A[item.pgLevel - default_level].Key,
            });
          }
        }
      });
    } else if (user_type === 'B') {
      B_Page.forEach((item) => {
        if (find_id == item.id) {
          find_level = item.pgLevel;
        }
      });
      let index = B_Page.findIndex((item) => item.id == find_id);
      let pgLevel_cnt = 0;
      B_Page.splice(index, 1);
      B_Page.forEach((item) => {
        if (find_level == item.pgLevel) {
          pgLevel_cnt++;
        }
      });
      B_Page.forEach((item) => {
        if (item.id > find_id) {
          item.id--;
          if (pgLevel_cnt == 0) {
            item.pgLevel--;
            item.imgpath = s3.getSignedUrl('getObject', {
              Bucket: params_B[item.pgLevel - default_level].Bucket,
              Key: params_B[item.pgLevel - default_level].Key,
            });
          }
        }
      });
    } else if (user_type === 'C') {
      C_Page.forEach((item) => {
        if (find_id == item.id) {
          find_level = item.pgLevel;
        }
      });
      let index = C_Page.findIndex((item) => item.id == find_id);
      let pgLevel_cnt = 0;
      C_Page.splice(index, 1);
      C_Page.forEach((item) => {
        if (find_level == item.pgLevel) {
          pgLevel_cnt++;
        }
      });
      C_Page.forEach((item) => {
        if (item.id > find_id) {
          item.id--;
          if (pgLevel_cnt == 0) {
            item.pgLevel--;
            item.imgpath = s3.getSignedUrl('getObject', {
              Bucket: params_C[item.pgLevel - default_level].Bucket,
              Key: params_C[item.pgLevel - default_level].Key,
            });
          }
        }
      });
    } else if (user_type === 'D') {
      D_Page.forEach((item) => {
        if (find_id == item.id) {
          find_level = item.pgLevel;
        }
      });
      let index = D_Page.findIndex((item) => item.id == find_id);
      let pgLevel_cnt = 0;
      D_Page.splice(index, 1);
      D_Page.forEach((item) => {
        if (find_level == item.pgLevel) {
          pgLevel_cnt++;
        }
      });
      D_Page.forEach((item) => {
        if (item.id > find_id) {
          item.id--;
          if (pgLevel_cnt == 0) {
            item.pgLevel--;
            item.imgpath = s3.getSignedUrl('getObject', {
              Bucket: params_D[item.pgLevel - default_level].Bucket,
              Key: params_D[item.pgLevel - default_level].Key,
            });
          }
        }
      });
    } else if (user_type === 'E') {
      E_Page.forEach((item) => {
        if (find_id == item.id) {
          find_level = item.pgLevel;
        }
      });
      let index = E_Page.findIndex((item) => item.id == find_id);
      let pgLevel_cnt = 0;
      E_Page.splice(index, 1);
      E_Page.forEach((item) => {
        if (find_level == item.pgLevel) {
          pgLevel_cnt++;
        }
      });
      E_Page.forEach((item) => {
        if (item.id > find_id) {
          item.id--;
          if (pgLevel_cnt == 0) {
            item.pgLevel--;
            item.imgpath = s3.getSignedUrl('getObject', {
              Bucket: params_E[item.pgLevel - default_level].Bucket,
              Key: params_E[item.pgLevel - default_level].Key,
            });
          }
        }
      });
    }
  }
  res.redirect('/typePage/' + user_type);
});
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 서버 실행 중');
});
