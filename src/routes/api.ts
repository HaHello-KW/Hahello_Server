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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_A[type_A_level - default_level].Bucket,
      Key: params_A[type_A_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_A[type_A_level - default_level].Bucket,
      Key: params_A[type_A_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_A[type_A_level - default_level].Bucket,
      Key: params_A[type_A_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_A[type_A_level - default_level].Bucket,
      Key: params_A[type_A_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_A[type_A_level - default_level].Bucket,
      Key: params_A[type_A_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_A[type_A_level - default_level].Bucket,
      Key: params_A[type_A_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_A[type_A_level - default_level].Bucket,
      Key: params_A[type_A_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_A[type_A_level - default_level].Bucket,
      Key: params_A[type_A_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_A[type_A_level - default_level].Bucket,
      Key: params_A[type_A_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_B[type_B_level - default_level].Bucket,
      Key: params_B[type_B_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_B[type_B_level - default_level].Bucket,
      Key: params_B[type_B_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_B[type_B_level - default_level].Bucket,
      Key: params_B[type_B_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_B[type_B_level - default_level].Bucket,
      Key: params_B[type_B_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_B[type_B_level - default_level].Bucket,
      Key: params_B[type_B_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_B[type_B_level - default_level].Bucket,
      Key: params_B[type_B_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_B[type_B_level - default_level].Bucket,
      Key: params_B[type_B_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_B[type_B_level - default_level].Bucket,
      Key: params_B[type_B_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_B[type_B_level - default_level].Bucket,
      Key: params_B[type_B_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_C[type_C_level - default_level].Bucket,
      Key: params_C[type_C_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_C[type_C_level - default_level].Bucket,
      Key: params_C[type_C_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_C[type_C_level - default_level].Bucket,
      Key: params_C[type_C_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_C[type_C_level - default_level].Bucket,
      Key: params_C[type_C_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_C[type_C_level - default_level].Bucket,
      Key: params_C[type_C_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_C[type_C_level - default_level].Bucket,
      Key: params_C[type_C_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_C[type_C_level - default_level].Bucket,
      Key: params_C[type_C_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_C[type_C_level - default_level].Bucket,
      Key: params_C[type_C_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_C[type_C_level - default_level].Bucket,
      Key: params_C[type_C_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_D[type_D_level - default_level].Bucket,
      Key: params_D[type_D_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_D[type_D_level - default_level].Bucket,
      Key: params_D[type_D_level - default_level].Key,
    }),
    pagename: 'q_d_2',
    id: type_D_id++,
    pgLevel: type_D_level,
    questionType: 'Hybrid_Type',
    questionTxt: null,
    selectionTxt: ['둘째 생각이 있어', '둘째 생각이 없어'],
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '에',
    thirdPickerType: 'none',
    thirdlineTxt: '첫째를 낳았고',
  },
  {
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_D[type_D_level - default_level].Bucket,
      Key: params_D[type_D_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_D[type_D_level - default_level].Bucket,
      Key: params_D[type_D_level - default_level].Key,
    }),
    pagename: 'q_d_4',
    id: type_D_id++,
    pgLevel: type_D_level,
    questionType: 'Hybrid_Type',
    questionTxt: null,
    selectionTxt: ['셋째 생각이 있어', '셋째 생각이 없어'],
    firstPickerType: 'none',
    firstlineTxt: '나는',
    secondPickerType: 'numberPicker',
    secondlineTxt: '에',
    thirdPickerType: 'none',
    thirdlineTxt: '둘째를 낳았고',
  },
  {
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_D[type_D_level - default_level].Bucket,
      Key: params_D[type_D_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_D[type_D_level - default_level].Bucket,
      Key: params_D[type_D_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_D[type_D_level - default_level].Bucket,
      Key: params_D[type_D_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_D[type_D_level - default_level].Bucket,
      Key: params_D[type_D_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_D[type_D_level - default_level].Bucket,
      Key: params_D[type_D_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_D[type_D_level - default_level].Bucket,
      Key: params_D[type_D_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_E[type_E_level - default_level].Bucket,
      Key: params_E[type_E_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_E[type_E_level - default_level].Bucket,
      Key: params_E[type_E_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_E[type_E_level - default_level].Bucket,
      Key: params_E[type_E_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_E[type_E_level - default_level].Bucket,
      Key: params_E[type_E_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_E[type_E_level - default_level].Bucket,
      Key: params_E[type_E_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_E[type_E_level - default_level].Bucket,
      Key: params_E[type_E_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_E[type_E_level - default_level].Bucket,
      Key: params_E[type_E_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_E[type_E_level - default_level].Bucket,
      Key: params_E[type_E_level - default_level].Key,
    }),
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
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_E[type_E_level - default_level].Bucket,
      Key: params_E[type_E_level - default_level].Key,
    }),
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
app.get('/defaultPage', (req: express.Request, res: express.Response) => {
  res.send(default_page);
});

app.get('/typePage/:type', (req: express.Request, res: express.Response) => {
  // const user_type = req.body.married_type;
  const user_type = req.params.type;
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

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 서버 실행 중');
});
