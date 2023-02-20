import * as express from 'express';
import { S3 } from '@aws-sdk/client-s3';
import * as AWS from 'aws-sdk';
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var s3 = new AWS.S3();

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
interface ThreelinePicker {
  questionType: string;
  questionID: string;
  questionTitle_First: string;
  questionTitle_Second: string;
  questionTitle_Third: string;
  First_pickerType: string;
  Second_pickerType: string;
}
interface Button {
  questionType: string;
  questionID: string;
  questionTitle: string; //해당 질문제목
  count: number; //선택지 개수
  contents: Array<string>;
}
interface SixlinePicker {
  questionType: string;
  questionID: string;
  questionTitle_First: string;
  questionTitle_Second: string;
  questionTitle_Third: string;
  First_pickerType: string;
  Second_pickerType: string;
  Third_pickerType: string;
}
interface Content {
  contents: string;
}
interface Small {
  imgpath?: object | string;
  level: number;
  depth: number; //각 질문의 깊이 ex)Q-A-4 : 깊이 0, Q-A-4-1 : 깊이 1
  questionType: string;
  questionID: string;
  questionTitle_First?: string;
  questionTitle_Second?: string;
  questionTitle_Third?: string;
  First_pickerType?: string;
  Second_pickerType?: string;
  Third_pickerType?: string;
  questionTitle?: string; //해당 질문제목
  count?: number; //선택지 개수
  contents?: Array<string>;
  nextpage?: string | Array<string>;
}
interface Result {
  imgpath?: object | string;
  questionId: string;
  title: string;
  description: Array<string>;
}
interface Type {
  id: string;
  status: number;
  message: string;
  pages: Array<Small>;
  result?: Result;
}

let default_level = 1;

let default_page: Type = {
  id: 'default',
  status: 200,
  message: 'defaultPage 정상 반환',
  pages: [
    {
      level: default_level++,
      depth: 0,
      //imgpath: image.null,
      questionType: 'Threeline_Picker',
      questionID: 'Q-Default-1',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '태어났어',
      First_pickerType: 'DatePicker',
      Second_pickerType: 'None',
      nextpage: 'Q-Default-2',
    },
    {
      level: default_level++, //upbar에 표시할 단계
      depth: 0,
      //imgpath: image.null,
      questionType: 'Button_Selector', //해당 질문유형
      questionID: 'Q-Default-2', //해당 질문코드
      questionTitle: '나는', //해당 질문제목
      count: 5, //선택지 개수
      contents: [
        //선택지 내용
        '난소 건강을 유지하고 싶어',
        '난자 냉동 계획이 있어',
        '난임 시술 계획이 있어',
        '현재 시술을 하고 있어 (난자 냉동, 난임 시술)',
        '갱년기 준비와 관리를 하고 싶어',
      ],
      nextpage: 'Q-Default-3',
    },
    {
      level: default_level++, //upbar에 표시할 단계
      depth: 0,
      //imgpath: image.null,
      questionType: 'Button_Selector', //해당 질문유형
      questionID: 'Q-Default-3', //해당 질문코드
      questionTitle: '나는', //해당 질문제목
      count: 5, //선택지 개수
      contents: [
        //선택지 내용
        '결혼을 안 했어',
        '결혼을 했어',
        '임신 준비 중이야',
        '자녀가 있어',
        '임신 중이야',
      ],
      nextpage: ['Q-A-1', 'Q-B-1', 'Q-C-1', 'Q-D-1', 'Q-E-1'],
    },
  ],
};
let type_A_level = default_level;
let type_B_level = default_level;
let type_C_level = default_level;
let type_D_level = default_level;
let type_E_level = default_level;

let A_Page: Type = {
  id: 'type_A',
  status: 200,
  message: 'typePage_A 정상 반환',
  pages: [
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_A[type_A_level - default_level].Bucket,
        Key: params_A[type_A_level - default_level].Key,
      }),
      level: type_A_level,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-A-1',
      questionTitle: '나는', //해당 질문제목
      count: 3, //선택지 개수
      contents: [
        //선택지 내용
        '결혼하고 싶어',
        '결혼 생각이 없어',
        '아직 잘 모르겠어',
      ],
      nextpage: 'Q-A-1-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_A[type_A_level - default_level].Bucket,
        Key: params_A[type_A_level - default_level].Key,
      }),
      level: type_A_level++,
      depth: 1,
      questionType: 'Threeline_Picker',
      questionID: 'Q-A-1-1',
      questionTitle_First: '나는',
      questionTitle_Second: '살쯤에',
      questionTitle_Third: '결혼하면 좋겠어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-A-2',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_A[type_A_level - default_level].Bucket,
        Key: params_A[type_A_level - default_level].Key,
      }),
      level: type_A_level,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-A-2',
      questionTitle: '나는 아이를', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '갖고 싶어',
        '갖고 싶은 생각이 없어',
      ],
      nextpage: 'Q-A-2-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_A[type_A_level - default_level].Bucket,
        Key: params_A[type_A_level - default_level].Key,
      }),
      level: type_A_level,
      depth: 1,
      questionType: 'Threeline_Picker',
      questionID: 'Q-A-2-1',
      questionTitle_First: '나는',
      questionTitle_Second: '살에',
      questionTitle_Third: '첫째 아이를 갖고 싶어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-A-2-2',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_A[type_A_level - default_level].Bucket,
        Key: params_A[type_A_level - default_level].Key,
      }),
      level: type_A_level,
      depth: 2,
      questionType: 'Button_Selector',
      questionID: 'Q-A-2-2',
      questionTitle: '나는', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '아이를 1명만 갖고 싶어',
        '둘째도 갖고 싶어',
      ],
      nextpage: 'Q-A-2-3',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_A[type_A_level - default_level].Bucket,
        Key: params_A[type_A_level - default_level].Key,
      }),
      level: type_A_level++,
      depth: 3,
      questionType: 'Threeline_Picker',
      questionID: 'Q-A-2-3',
      questionTitle_First: '나는',
      questionTitle_Second: '살에',
      questionTitle_Third: '둘째 아이를 갖고 싶어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-A-3',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_A[type_A_level - default_level].Bucket,
        Key: params_A[type_A_level - default_level].Key,
      }),
      level: type_A_level++,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-A-3',
      questionTitle: '나는 난자 냉동을', //해당 질문제목
      count: 4, //선택지 개수
      contents: [
        //선택지 내용
        '이미 해서 보관 중이야',
        '하지 않았지만, 관심 있어',
        '하지 않았고, 별로 관심없어',
        '잘 모르고 있어',
      ],
      nextpage: 'Q-A-4',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_A[type_A_level - default_level].Bucket,
        Key: params_A[type_A_level - default_level].Key,
      }),
      level: type_A_level,
      depth: 0,
      questionType: 'Sixline_Picker',
      questionID: 'Q-A-4',
      questionTitle_First: '나의 마지막(최근) 생리일은',
      questionTitle_Second: '나의 생리주기는',
      questionTitle_Third: '나의 생기기간은',
      First_pickerType: 'DatePicker',
      Second_pickerType: 'NumberPicker',
      Third_pickerType: 'NumberPicker',
      nextpage: 'Q-A-4-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_A[type_A_level - default_level].Bucket,
        Key: params_A[type_A_level - default_level].Key,
      }),
      level: type_A_level++,
      depth: 1,
      questionType: 'Button_Selector',
      questionID: 'Q-A-4-1',
      questionTitle: '나는 생리일이', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '규칙적이야',
        '불규칙적이야',
      ],
      nextpage: 'QA-type',
    },
  ],
  result: {
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_A[type_A_level - default_level].Bucket,
      Key: params_A[type_A_level - default_level].Key,
    }),
    questionId: 'QA_Type',
    title: '여유로운 똑똑이 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  }, //QA-type
};

let B_Page: Type = {
  id: 'type_B',
  status: 200,
  message: 'typePage_B 정상 반환',
  pages: [
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_B[type_B_level - default_level].Bucket,
        Key: params_B[type_B_level - default_level].Key,
      }),
      level: type_B_level++,
      depth: 0,
      questionType: 'Threeline_Picker',
      questionID: 'Q-B-1',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '결혼했어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-B-2',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_B[type_B_level - default_level].Bucket,
        Key: params_B[type_B_level - default_level].Key,
      }),
      level: type_B_level,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-B-2',
      questionTitle: '나는 아이를', //해당 질문제목
      count: 3, //선택지 개수
      contents: [
        //선택지 내용
        '갖고 싶어',
        '둘째도 갖고 싶어',
        '갖고 싶은 생각이 없어',
      ],
      nextpage: 'Q-B-2-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_B[type_B_level - default_level].Bucket,
        Key: params_B[type_B_level - default_level].Key,
      }),
      level: type_B_level,
      depth: 1,
      questionType: 'Threeline_Picker',
      questionID: 'Q-B-2-1',
      questionTitle_First: '나는',
      questionTitle_Second: '살에',
      questionTitle_Third: '첫째 아이를 갖고 싶어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-B-2-2',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_B[type_B_level - default_level].Bucket,
        Key: params_B[type_B_level - default_level].Key,
      }),
      level: type_B_level++,
      depth: 2,
      questionType: 'Threeline_Picker',
      questionID: 'Q-B-2-2',
      questionTitle_First: '나는',
      questionTitle_Second: '살에',
      questionTitle_Third: '둘째 아이를 갖고 싶어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-B-3',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_B[type_B_level - default_level].Bucket,
        Key: params_B[type_B_level - default_level].Key,
      }),
      level: type_B_level,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-B-3',
      questionTitle: '나는 난자 냉동을', //해당 질문제목
      count: 4, //선택지 개수
      contents: [
        //선택지 내용
        '이미 해서 보관 중이야',
        '하지 않았지만, 관심 있어',
        '하지 않았고, 별로 관심없어',
        '잘 모르고 있어',
      ],
      nextpage: 'Q-B-3-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_B[type_B_level - default_level].Bucket,
        Key: params_B[type_B_level - default_level].Key,
      }),
      level: type_B_level++,
      depth: 1,
      questionType: 'Threeline_Picker',
      questionID: 'Q-B-3-1',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '개의 난자를 얼려놓았어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'NumberPicker',
      nextpage: 'Q-B-4',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_B[type_B_level - default_level].Bucket,
        Key: params_B[type_B_level - default_level].Key,
      }),
      level: type_B_level++,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-B-4',
      questionTitle: '나는', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '난임 시술을 준비 중이야',
        '자연임신을 준비 중이야',
      ],
      nextpage: 'Q-B-5',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_B[type_B_level - default_level].Bucket,
        Key: params_B[type_B_level - default_level].Key,
      }),
      level: type_B_level,
      depth: 0,
      questionType: 'Sixline_Picker',
      questionID: 'Q-B-5',
      questionTitle_First: '나의 마지막(최근) 생리일은',
      questionTitle_Second: '나의 생리주기는',
      questionTitle_Third: '나의 생기기간은',
      First_pickerType: 'DatePicker',
      Second_pickerType: 'NumberPicker',
      Third_pickerType: 'NumberPicker',
      nextpage: 'Q-B-5-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_B[type_B_level - default_level].Bucket,
        Key: params_B[type_B_level - default_level].Key,
      }),
      level: type_B_level++,
      depth: 1,
      questionType: 'Button_Selector',
      questionID: 'Q-B-5-1',
      questionTitle: '나는 생리일이', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '규칙적이야',
        '불규칙적이야',
      ],
      nextpage: 'QB-type',
    },
  ],
  result: {
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_B[type_B_level - default_level].Bucket,
      Key: params_B[type_B_level - default_level].Key,
    }),
    questionId: 'QB-type',
    title: '여유로운 똑똑이 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  }, //QB-type
};
let C_Page: Type = {
  id: 'type_C',
  status: 200,
  message: 'typePage_C 정상 반환',
  pages: [
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_C[type_C_level - default_level].Bucket,
        Key: params_C[type_C_level - default_level].Key,
      }),
      level: type_C_level++,
      depth: 0,
      questionType: 'Threeline_Picker',
      questionID: 'Q-C-1',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '결혼했어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-C-2',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_C[type_C_level - default_level].Bucket,
        Key: params_C[type_C_level - default_level].Key,
      }),
      level: type_C_level,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-C-2',
      questionTitle: '나는 아이를', //해당 질문제목
      count: 3, //선택지 개수
      contents: [
        //선택지 내용
        '갖고 싶어',
        '둘째도 갖고 싶어',
        '갖고 싶은 생각이 없어',
      ],
      nextpage: 'Q-C-2-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_C[type_C_level - default_level].Bucket,
        Key: params_C[type_C_level - default_level].Key,
      }),
      level: type_C_level,
      depth: 1,
      questionType: 'Threeline_Picker',
      questionID: 'Q-C-2-1',
      questionTitle_First: '나는',
      questionTitle_Second: '살에',
      questionTitle_Third: '첫째 아이를 갖고 싶어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-C-2-2',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_C[type_C_level - default_level].Bucket,
        Key: params_C[type_C_level - default_level].Key,
      }),
      level: type_C_level++,
      depth: 2,
      questionType: 'Threeline_Picker',
      questionID: 'Q-C-2-2',
      questionTitle_First: '나는',
      questionTitle_Second: '살에',
      questionTitle_Third: '둘째 아이를 갖고 싶어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-C-3',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_C[type_C_level - default_level].Bucket,
        Key: params_C[type_C_level - default_level].Key,
      }),
      level: type_C_level,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-C-3',
      questionTitle: '나는 난자 냉동을', //해당 질문제목
      count: 4, //선택지 개수
      contents: [
        //선택지 내용
        '이미 해서 보관 중이야',
        '하지 않았지만, 관심 있어',
        '하지 않았고, 별로 관심없어',
        '잘 모르고 있어',
      ],
      nextpage: 'Q-C-3-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_C[type_C_level - default_level].Bucket,
        Key: params_C[type_C_level - default_level].Key,
      }),
      level: type_C_level++,
      depth: 1,
      questionType: 'Threeline_Picker',
      questionID: 'Q-C-3-1',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '개의 난자를 얼려놓았어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'NumberPicker',
      nextpage: 'Q-C-4',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_C[type_C_level - default_level].Bucket,
        Key: params_C[type_C_level - default_level].Key,
      }),
      level: type_C_level++,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-C-4',
      questionTitle: '나는', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '난임 시술을 준비 중이야',
        '자연임신을 준비 중이야',
      ],
      nextpage: 'Q-C-5',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_C[type_C_level - default_level].Bucket,
        Key: params_C[type_C_level - default_level].Key,
      }),
      level: type_C_level,
      depth: 0,
      questionType: 'Sixline_Picker',
      questionID: 'Q-C-5',
      questionTitle_First: '나의 마지막(최근) 생리일은',
      questionTitle_Second: '나의 생리주기는',
      questionTitle_Third: '나의 생기기간은',
      First_pickerType: 'DatePicker',
      Second_pickerType: 'NumberPicker',
      Third_pickerType: 'NumberPicker',
      nextpage: 'Q-C-5-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_C[type_C_level - default_level].Bucket,
        Key: params_C[type_C_level - default_level].Key,
      }),
      level: type_C_level++,
      depth: 1,
      questionType: 'Button_Selector',
      questionID: 'Q-C-5-1',
      questionTitle: '나는 생리일이', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '규칙적이야',
        '불규칙적이야',
      ],
      nextpage: 'QC-type',
    },
  ],
  result: {
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_C[type_C_level - default_level].Bucket,
      Key: params_C[type_C_level - default_level].Key,
    }),
    questionId: 'QC-type',
    title: '여유로운 똑똑이 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  }, //QB-type
};
let D_Page: Type = {
  id: 'type_D',
  status: 200,
  message: 'typePage_D 정상 반환',
  pages: [
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_D[type_D_level - default_level].Bucket,
        Key: params_D[type_D_level - default_level].Key,
      }),
      level: type_D_level++,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-D-1',
      questionTitle: '나는', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '첫째가 있어',
        '둘째가 있어',
      ],
      nextpage: 'Q-D-2',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_D[type_D_level - default_level].Bucket,
        Key: params_D[type_D_level - default_level].Key,
      }),
      level: type_D_level,
      depth: 0,
      questionType: 'Hybrid_Type',
      questionID: 'Q-D-2',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '첫째를 낳았고',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '둘째 생각이 있어',
        '둘째 생각이 없어',
      ],
      nextpage: 'Q-D-2-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_D[type_D_level - default_level].Bucket,
        Key: params_D[type_D_level - default_level].Key,
      }),
      level: type_D_level,
      depth: 1,
      questionType: 'Threeline_Picker',
      questionID: 'Q-D-2-1',
      questionTitle_First: '나는',
      questionTitle_Second: '살에',
      questionTitle_Third: '둘째 아이를 갖고 싶어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-D-2-2',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_D[type_D_level - default_level].Bucket,
        Key: params_D[type_D_level - default_level].Key,
      }),
      level: type_D_level,
      depth: 2,
      questionType: 'Hybrid_Type',
      questionID: 'Q-D-2-2',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '둘째를 낳았고',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '셋째 생각이 있어',
        '셋째 생각이 없어',
      ],
      nextpage: 'Q-D-2-3',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_D[type_D_level - default_level].Bucket,
        Key: params_D[type_D_level - default_level].Key,
      }),
      level: type_D_level++,
      depth: 3,
      questionType: 'Threeline_Picker',
      questionID: 'Q-D-2-3',
      questionTitle_First: '나는',
      questionTitle_Second: '살에',
      questionTitle_Third: '셋째 아이를 갖고 싶어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-D-3',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_D[type_D_level - default_level].Bucket,
        Key: params_D[type_D_level - default_level].Key,
      }),
      level: type_D_level,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-D-3',
      questionTitle: '나는 난자 냉동을', //해당 질문제목
      count: 4, //선택지 개수
      contents: [
        //선택지 내용
        '이미 해서 보관 중이야',
        '하지 않았지만, 관심 있어',
        '하지 않았고, 별로 관심없어',
        '잘 모르고 있어',
      ],
      nextpage: 'Q-D-3-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_D[type_D_level - default_level].Bucket,
        Key: params_D[type_D_level - default_level].Key,
      }),
      level: type_D_level++,
      depth: 1,
      questionType: 'Threeline_Picker',
      questionID: 'Q-D-3-1',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '개의 난자를 얼려 놓았어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'NumberPicker',
      nextpage: 'Q-D-4',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_D[type_D_level - default_level].Bucket,
        Key: params_D[type_D_level - default_level].Key,
      }),
      level: type_D_level++,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-D-4',
      questionTitle: '나는', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '난임 시술을 준비 중이야',
        '자연임신을 준비 중이야',
      ],
      nextpage: 'Q-D-5',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_D[type_D_level - default_level].Bucket,
        Key: params_D[type_D_level - default_level].Key,
      }),
      level: type_D_level,
      depth: 0,
      questionType: 'Sixline_Picker',
      questionID: 'Q-D-5',
      questionTitle_First: '나의 마지막(최근) 생리일은',
      questionTitle_Second: '나의 생리주기는',
      questionTitle_Third: '나의 생기기간은',
      First_pickerType: 'DatePicker',
      Second_pickerType: 'NumberPicker',
      Third_pickerType: 'NumberPicker',
      nextpage: 'Q-D-5-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_D[type_D_level - default_level].Bucket,
        Key: params_D[type_D_level - default_level].Key,
      }),
      level: type_D_level++,
      depth: 1,
      questionType: 'Button_Selector',
      questionID: 'Q-D-5-1',
      questionTitle: '나는 생리일이', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '규칙적이야',
        '불규칙적이야',
      ],
      nextpage: 'QD-type',
    },
  ],
  result: {
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_D[type_D_level - default_level].Bucket,
      Key: params_D[type_D_level - default_level].Key,
    }),
    questionId: 'QD_Type',
    title: '여유로운 똑똑이 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  }, //QD-type
};
let E_Page: Type = {
  id: 'type_E',
  status: 200,
  message: 'typePage_E 정상 반환',
  pages: [
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_E[type_E_level - default_level].Bucket,
        Key: params_E[type_E_level - default_level].Key,
      }),
      level: type_E_level++,
      depth: 0,
      questionType: 'Threeline_Picker',
      questionID: 'Q-E-1',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '결혼했어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-E-2',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_E[type_E_level - default_level].Bucket,
        Key: params_E[type_E_level - default_level].Key,
      }),
      level: type_E_level,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-E-2',
      questionTitle: '나는', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '첫 번째 임신 중이야',
        '두 번째 임신 중이야',
      ],
      nextpage: 'Q-E-2-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_E[type_E_level - default_level].Bucket,
        Key: params_E[type_E_level - default_level].Key,
      }),
      level: type_E_level,
      depth: 1,
      questionType: 'Button_Selector',
      questionID: 'Q-E-2-1',
      questionTitle: '나는', //해당 질문제목
      count: 3, //선택지 개수
      contents: [
        //선택지 내용
        '둘째를 갖고 싶어',
        '셋째를 갖고 싶어',
        '아이를 갖고 싶은 생각이 없어',
      ],
      nextpage: 'Q-E-2-2',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_E[type_E_level - default_level].Bucket,
        Key: params_E[type_E_level - default_level].Key,
      }),
      level: type_E_level,
      depth: 2,
      questionType: 'Threeline_Picker',
      questionID: 'Q-E-2-2',
      questionTitle_First: '나는',
      questionTitle_Second: '살 터울의',
      questionTitle_Third: '둘째 아이를 갖고 싶어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-E-2-3',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_E[type_E_level - default_level].Bucket,
        Key: params_E[type_E_level - default_level].Key,
      }),
      level: type_E_level++,
      depth: 3,
      questionType: 'Threeline_Picker',
      questionID: 'Q-E-2-3',
      questionTitle_First: '나는',
      questionTitle_Second: '살 터울의',
      questionTitle_Third: '셋째 아이를 갖고 싶어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-E-3',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_E[type_E_level - default_level].Bucket,
        Key: params_E[type_E_level - default_level].Key,
      }),
      level: type_E_level,
      depth: 0,
      questionType: 'Button_Selector',
      questionID: 'Q-E-3',
      questionTitle: '나는 난자 냉동을', //해당 질문제목
      count: 4, //선택지 개수
      contents: [
        //선택지 내용
        '이미 해서 보관 중이야',
        '하지 않았지만, 관심 있어',
        '하지 않았고, 별로 관심없어',
        '잘 모르고 있어',
      ],
      nextpage: 'Q-E-3-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_E[type_E_level - default_level].Bucket,
        Key: params_E[type_E_level - default_level].Key,
      }),
      level: type_E_level++,
      depth: 1,
      questionType: 'Threeline_Picker',
      questionID: 'Q-E-3-1',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '개의 난자를 얼려놓았어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'NumberPicker',
      nextpage: 'Q-E-4',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_E[type_E_level - default_level].Bucket,
        Key: params_E[type_E_level - default_level].Key,
      }),
      level: type_E_level,
      depth: 0,
      questionType: 'Sixline_Picker',
      questionID: 'Q-E-4',
      questionTitle_First: '나의 마지막(최근) 생리일은',
      questionTitle_Second: '나의 생리주기는',
      questionTitle_Third: '나의 생기기간은',
      First_pickerType: 'DatePicker',
      Second_pickerType: 'NumberPicker',
      Third_pickerType: 'NumberPicker',
      nextpage: 'Q-E-4-1',
    },
    {
      imgpath: s3.getSignedUrl('getObject', {
        Bucket: params_E[type_E_level - default_level].Bucket,
        Key: params_E[type_E_level - default_level].Key,
      }),
      level: type_E_level++,
      depth: 1,
      questionType: 'Button_Selector',
      questionID: 'Q-E-4-1',
      questionTitle: '나는 생리일이', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '규칙적이야',
        '불규칙적이야',
      ],
      nextpage: 'QE-type',
    },
  ],
  result: {
    imgpath: s3.getSignedUrl('getObject', {
      Bucket: params_E[type_E_level - default_level].Bucket,
      Key: params_E[type_E_level - default_level].Key,
    }),
    questionId: 'QE_Type',
    title: '여유로운 똑똑이 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
  }, //QE-type
};
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

app.post('/defaultPage', (req: express.Request, res: express.Response) => {
  const q_type = req.body.questionType;
  const new_level = req.body.level;

  default_page.pages.forEach((item) => {
    if (item.level >= new_level) {
      item.level++;
    }
  });
  if (q_type == 'Threeline_Picker') {
    let default_info = {
      level: new_level,
      depth: 0,
      questionType: q_type,
      questionID: req.body.questionID,
      questionTitle_First: req.body.questionTitle_First,
      questionTitle_Second: req.body.questionTitle_Second,
      questionTitle_Third: req.body.questionTitle_Third,
      First_pickerType: req.body.First_pickerType,
      Second_pickerType: req.body.Second_pickerType,
      nextpage: req.body.nextpage,
    };
    default_page.pages = default_page.pages.concat(default_info);
  } else if (q_type == 'Button_Selector') {
    let default_info = {
      level: new_level,
      depth: 0,
      questionType: q_type,
      questionID: req.body.questionID,
      questionTitle: req.body.questionTitle,
      count: req.body.count,
      contents: req.body.contents,
      nextpage: req.body.nextpage,
    };
    default_page.pages = default_page.pages.concat(default_info);
  } else if (q_type == 'Sixline_Picker') {
    let default_info = {
      level: new_level,
      depth: 0,
      questionType: q_type,
      questionID: req.body.questionID,
      questionTitle_First: req.body.questionTitle_First,
      questionTitle_Second: req.body.questionTitle_Second,
      questionTitle_Third: req.body.questionTitle_Third,
      First_pickerType: req.body.First_pickerType,
      Second_pickerType: req.body.Second_pickerType,
      Third_pickerType: req.body.Third_pickerType,
      nextpage: req.body.nextpage,
    };
    default_page.pages = default_page.pages.concat(default_info);
  }
  default_page.pages.sort(function (a, b) {
    return a.level - b.level;
  });
  default_level++;
  A_Page.pages.forEach((item) => {
    item.level++;
  });
  type_A_level++;
  B_Page.pages.forEach((item) => {
    item.level++;
  });
  type_B_level++;
  C_Page.pages.forEach((item) => {
    item.level++;
  });
  type_C_level++;
  D_Page.pages.forEach((item) => {
    item.level++;
  });
  type_D_level++;
  E_Page.pages.forEach((item) => {
    item.level++;
  });
  type_E_level++;
  res.redirect('/defaultPage');
});

app.post('/typePage/:type', (req: express.Request, res: express.Response) => {
  const user_type = req.params.type;
  const q_type = req.body.questionType;
  const new_level = req.body.level;
  const new_depth = req.body.depth;

  if (user_type === 'A') {
    A_Page.pages.forEach((item) => {
      // if (item.level >= new_level) {
      //   item.level++;
      // }
      if (new_depth == 0) {
        if (item.level >= new_level) {
          item.level++;
        }
      } else {
        if (item.level == new_level) {
          if (item.depth >= new_depth) {
            item.depth++;
          }
        }
      }
    });
    if (q_type == 'Threeline_Picker') {
      let A_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        nextpage: req.body.nextpage,
      };
      A_Page.pages = A_Page.pages.concat(A_info);
    } else if (q_type == 'Button_Selector') {
      let A_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle: req.body.questionTitle,
        count: req.body.count,
        contents: req.body.contents,
        nextpage: req.body.nextpage,
      };
      A_Page.pages = A_Page.pages.concat(A_info);
    } else if (q_type == 'Sixline_Picker') {
      let A_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        Third_pickerType: req.body.Third_pickerType,
        nextpage: req.body.nextpage,
      };
      A_Page.pages = A_Page.pages.concat(A_info);
    }
    A_Page.pages.sort(function (a, b) {
      if (a.level == b.level) {
        return a.depth - b.depth;
      }
      return a.level - b.level;
    });
    if (new_depth == 0) {
      type_A_level++;
    }
  } else if (user_type === 'B') {
    B_Page.pages.forEach((item) => {
      // if (item.level >= new_level) {
      //   item.level++;
      // }
      if (new_depth == 0) {
        if (item.level >= new_level) {
          item.level++;
        }
      } else {
        if (item.level == new_level) {
          if (item.depth >= new_depth) {
            item.depth++;
          }
        }
      }
    });
    if (q_type == 'Threeline_Picker') {
      let B_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        nextpage: req.body.nextpage,
      };
      B_Page.pages = B_Page.pages.concat(B_info);
    } else if (q_type == 'Button_Selector') {
      let B_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle: req.body.questionTitle,
        count: req.body.count,
        contents: req.body.contents,
        nextpage: req.body.nextpage,
      };
      B_Page.pages = B_Page.pages.concat(B_info);
    } else if (q_type == 'Sixline_Picker') {
      let B_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        Third_pickerType: req.body.Third_pickerType,
        nextpage: req.body.nextpage,
      };
      B_Page.pages = B_Page.pages.concat(B_info);
    }
    B_Page.pages.sort(function (a, b) {
      if (a.level == b.level) {
        return a.depth - b.depth;
      }
      return a.level - b.level;
    });
    if (new_depth == 0) {
      type_B_level++;
    }
  } else if (user_type === 'C') {
    C_Page.pages.forEach((item) => {
      // if (item.level >= new_level) {
      //   item.level++;
      // }
      if (new_depth == 0) {
        if (item.level >= new_level) {
          item.level++;
        }
      } else {
        if (item.level == new_level) {
          if (item.depth >= new_depth) {
            item.depth++;
          }
        }
      }
    });
    if (q_type == 'Threeline_Picker') {
      let C_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        nextpage: req.body.nextpage,
      };
      C_Page.pages = C_Page.pages.concat(C_info);
    } else if (q_type == 'Button_Selector') {
      let C_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle: req.body.questionTitle,
        count: req.body.count,
        contents: req.body.contents,
        nextpage: req.body.nextpage,
      };
      C_Page.pages = C_Page.pages.concat(C_info);
    } else if (q_type == 'Sixline_Picker') {
      let C_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        Third_pickerType: req.body.Third_pickerType,
        nextpage: req.body.nextpage,
      };
      C_Page.pages = C_Page.pages.concat(C_info);
    }
    C_Page.pages.sort(function (a, b) {
      if (a.level == b.level) {
        return a.depth - b.depth;
      }
      return a.level - b.level;
    });
    if (new_depth == 0) {
      type_C_level++;
    }
  } else if (user_type === 'D') {
    D_Page.pages.forEach((item) => {
      // if (item.level >= new_level) {
      //   item.level++;
      // }
      if (new_depth == 0) {
        if (item.level >= new_level) {
          item.level++;
        }
      } else {
        if (item.level == new_level) {
          if (item.depth >= new_depth) {
            item.depth++;
          }
        }
      }
    });
    if (q_type == 'Threeline_Picker') {
      let D_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        nextpage: req.body.nextpage,
      };
      D_Page.pages = D_Page.pages.concat(D_info);
    } else if (q_type == 'Button_Selector') {
      let D_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle: req.body.questionTitle,
        count: req.body.count,
        contents: req.body.contents,
        nextpage: req.body.nextpage,
      };
      D_Page.pages = D_Page.pages.concat(D_info);
    } else if (q_type == 'Sixline_Picker') {
      let D_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        Third_pickerType: req.body.Third_pickerType,
        nextpage: req.body.nextpage,
      };
      D_Page.pages = D_Page.pages.concat(D_info);
    }
    D_Page.pages.sort(function (a, b) {
      if (a.level == b.level) {
        return a.depth - b.depth;
      }
      return a.level - b.level;
    });
    if (new_depth == 0) {
      type_D_level++;
    }
  } else if (user_type === 'E') {
    E_Page.pages.forEach((item) => {
      // if (item.level >= new_level) {
      //   item.level++;
      // }
      if (new_depth == 0) {
        if (item.level >= new_level) {
          item.level++;
        }
      } else {
        if (item.level == new_level) {
          if (item.depth >= new_depth) {
            item.depth++;
          }
        }
      }
    });
    if (q_type == 'Threeline_Picker') {
      let E_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        nextpage: req.body.nextpage,
      };
      E_Page.pages = E_Page.pages.concat(E_info);
    } else if (q_type == 'Button_Selector') {
      let E_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle: req.body.questionTitle,
        count: req.body.count,
        contents: req.body.contents,
        nextpage: req.body.nextpage,
      };
      E_Page.pages = E_Page.pages.concat(E_info);
    } else if (q_type == 'Sixline_Picker') {
      let E_info = {
        level: new_level,
        depth: new_depth,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        Third_pickerType: req.body.Third_pickerType,
        nextpage: req.body.nextpage,
      };
      E_Page.pages = E_Page.pages.concat(E_info);
    }
    E_Page.pages.sort(function (a, b) {
      if (a.level == b.level) {
        return a.depth - b.depth;
      }
      return a.level - b.level;
    });
    if (new_depth == 0) {
      type_E_level++;
    }
  }
  res.redirect('/typePage/' + user_type);
});
// ==============================================

app.put('/defaultPage', (req: express.Request, res: express.Response) => {
  const find_level = req.body.level;
  const q_type = req.body.questionType;

  if (typeof find_level !== 'undefined') {
    default_page.pages.splice(find_level - 1, 1);
    if (q_type == 'Threeline_Picker') {
      const default_info = {
        level: find_level,
        depth: 0,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        nextpage: req.body.nextpage,
      };
      default_page.pages = default_page.pages.concat(default_info);
    } else if (q_type == 'Button_Selector') {
      const default_info = {
        level: find_level,
        depth: 0,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle: req.body.questionTitle,
        count: req.body.count,
        contents: req.body.contents,
        nextpage: req.body.nextpage,
      };
      default_page.pages = default_page.pages.concat(default_info);
    } else if (q_type == 'Sixline_Picker') {
      let default_info = {
        level: find_level,
        depth: 0,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        Third_pickerType: req.body.Third_pickerType,
        nextpage: req.body.nextpage,
      };
      default_page.pages = default_page.pages.concat(default_info);
    }
    default_page.pages.sort(function (a, b) {
      return a.level - b.level;
    });
  }
  res.redirect('/defaultPage');
});

app.put('/typePage/:type', (req: express.Request, res: express.Response) => {
  const user_type = req.params.type;
  let find_level = req.body.level;
  const q_type = req.body.questionType;
  const find_depth = req.body.depth;
  if (typeof find_level != 'undefined') {
    if (user_type === 'A') {
      let index = A_Page.pages.findIndex((item) => item.level === find_level && item.depth === find_depth);
      const img_path = A_Page.pages[index].imgpath;
      A_Page.pages.splice(index, 1);
      if (q_type == 'Threeline_Picker') {
        const type_A_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          nextpage: req.body.nextpage,
        };
        A_Page.pages = A_Page.pages.concat(type_A_info);
      } else if (q_type == 'Button_Selector') {
        const type_A_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle: req.body.questionTitle,
          count: req.body.count,
          contents: req.body.contents,
          nextpage: req.body.nextpage,
        };
        A_Page.pages = A_Page.pages.concat(type_A_info);
      } else if (q_type == 'Sixline_Picker') {
        let A_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          Third_pickerType: req.body.Third_pickerType,
          nextpage: req.body.nextpage,
        };
        A_Page.pages = A_Page.pages.concat(A_info);
      }
      A_Page.pages.sort(function (a, b) {
        if (a.level == b.level) {
          return a.depth - b.depth;
        }
        return a.level - b.level;
      });
    } else if (user_type === 'B') {
      let index = B_Page.pages.findIndex((item) => item.level === find_level && item.depth === find_depth);
      const img_path = B_Page.pages[index].imgpath;
      B_Page.pages.splice(index, 1);
      if (q_type == 'Threeline_Picker') {
        const type_B_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          nextpage: req.body.nextpage,
        };
        B_Page.pages = B_Page.pages.concat(type_B_info);
      } else if (q_type == 'Button_Selector') {
        const type_B_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle: req.body.questionTitle,
          count: req.body.count,
          contents: req.body.contents,
          nextpage: req.body.nextpage,
        };
        B_Page.pages = B_Page.pages.concat(type_B_info);
      } else if (q_type == 'Sixline_Picker') {
        let B_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          Third_pickerType: req.body.Third_pickerType,
          nextpage: req.body.nextpage,
        };
        B_Page.pages = B_Page.pages.concat(B_info);
      }
      B_Page.pages.sort(function (a, b) {
        if (a.level == b.level) {
          return a.depth - b.depth;
        }
        return a.level - b.level;
      });
    } else if (user_type === 'C') {
      let index = C_Page.pages.findIndex((item) => item.level === find_level && item.depth === find_depth);
      const img_path = C_Page.pages[index].imgpath;
      C_Page.pages.splice(index, 1);
      if (q_type == 'Threeline_Picker') {
        const type_C_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          nextpage: req.body.nextpage,
        };
        C_Page.pages = C_Page.pages.concat(type_C_info);
      } else if (q_type == 'Button_Selector') {
        const type_C_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle: req.body.questionTitle,
          count: req.body.count,
          contents: req.body.contents,
          nextpage: req.body.nextpage,
        };
        C_Page.pages = C_Page.pages.concat(type_C_info);
      } else if (q_type == 'Sixline_Picker') {
        let C_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          Third_pickerType: req.body.Third_pickerType,
          nextpage: req.body.nextpage,
        };
        C_Page.pages = C_Page.pages.concat(C_info);
      }
      C_Page.pages.sort(function (a, b) {
        if (a.level == b.level) {
          return a.depth - b.depth;
        }
        return a.level - b.level;
      });
    } else if (user_type === 'D') {
      let index = D_Page.pages.findIndex((item) => item.level === find_level && item.depth === find_depth);
      const img_path = D_Page.pages[index].imgpath;
      D_Page.pages.splice(index, 1);
      if (q_type == 'Threeline_Picker') {
        const type_D_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          nextpage: req.body.nextpage,
        };
        D_Page.pages = D_Page.pages.concat(type_D_info);
      } else if (q_type == 'Button_Selector') {
        const type_D_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle: req.body.questionTitle,
          count: req.body.count,
          contents: req.body.contents,
          nextpage: req.body.nextpage,
        };
        D_Page.pages = D_Page.pages.concat(type_D_info);
      } else if (q_type == 'Sixline_Picker') {
        let D_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          Third_pickerType: req.body.Third_pickerType,
          nextpage: req.body.nextpage,
        };
        D_Page.pages = D_Page.pages.concat(D_info);
      }
      D_Page.pages.sort(function (a, b) {
        if (a.level == b.level) {
          return a.depth - b.depth;
        }
        return a.level - b.level;
      });
    } else if (user_type === 'E') {
      let index = E_Page.pages.findIndex((item) => item.level === find_level && item.depth === find_depth);
      const img_path = E_Page.pages[index].imgpath;
      E_Page.pages.splice(index, 1);
      if (q_type == 'Threeline_Picker') {
        const type_E_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          nextpage: req.body.nextpage,
        };
        E_Page.pages = E_Page.pages.concat(type_E_info);
      } else if (q_type == 'Button_Selector') {
        const type_E_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle: req.body.questionTitle,
          count: req.body.count,
          contents: req.body.contents,
          nextpage: req.body.nextpage,
        };
        E_Page.pages = E_Page.pages.concat(type_E_info);
      } else if (q_type == 'Sixline_Picker') {
        let E_info = {
          level: find_level,
          depth: find_depth,
          imgpath: img_path,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          Third_pickerType: req.body.Third_pickerType,
          nextpage: req.body.nextpage,
        };
        E_Page.pages = E_Page.pages.concat(E_info);
      }
      E_Page.pages.sort(function (a, b) {
        if (a.level == b.level) {
          return a.depth - b.depth;
        }
        return a.level - b.level;
      });
    }
  }
  res.redirect('/typePage/' + user_type);
});

app.delete('/defaultPage', (req: express.Request, res: express.Response) => {
  let find_level = req.body.level;
  if (typeof find_level != 'undefined') {
    default_page.pages.splice(find_level - 1, 1);
    default_page.pages.forEach((item) => {
      if (item.level > find_level) {
        item.level -= 1;
      }
    });
  }
  default_level--;
  A_Page.pages.forEach((item) => {
    item.level--;
  });
  type_A_level--;
  B_Page.pages.forEach((item) => {
    item.level--;
  });
  type_B_level--;
  C_Page.pages.forEach((item) => {
    item.level--;
  });
  type_C_level--;
  D_Page.pages.forEach((item) => {
    item.level--;
  });
  type_D_level--;
  E_Page.pages.forEach((item) => {
    item.level--;
  });
  type_E_level--;
  res.redirect('/defaultPage');
});

app.delete('/typePage/:type', (req: express.Request, res: express.Response) => {
  let user_type = req.params.type;
  let find_level = req.body.level;
  let find_depth = req.body.depth;
  if (typeof find_level != 'undefined') {
    if (user_type === 'A') {
      let index = A_Page.pages.findIndex((item) => item.level === find_level && item.depth === find_depth);
      A_Page.pages.splice(index, 1);
      let A_depth = 0;
      A_Page.pages.forEach((item) => {
        if (item.level == find_level) {
          A_depth++;
        }
      });
      if (A_depth == 0) {
        A_Page.pages.forEach((item) => {
          if (item.level > find_level) {
            item.level -= 1;
          }
        });
        type_A_level--;
      } else {
        A_Page.pages.forEach((item) => {
          if (item.level == find_level && item.depth > find_depth) {
            item.depth -= 1;
          }
        });
      }
    } else if (user_type === 'B') {
      let index = B_Page.pages.findIndex((item) => item.level === find_level && item.depth === find_depth);
      B_Page.pages.splice(index, 1);
      let B_depth = 0;
      B_Page.pages.forEach((item) => {
        if (item.level == find_level) {
          B_depth++;
        }
      });
      if (B_depth == 0) {
        B_Page.pages.forEach((item) => {
          if (item.level > find_level) {
            item.level -= 1;
          }
        });
        type_B_level--;
      } else {
        B_Page.pages.forEach((item) => {
          if (item.level == find_level && item.depth > find_depth) {
            item.depth -= 1;
          }
        });
      }
    } else if (user_type === 'C') {
      let index = C_Page.pages.findIndex((item) => item.level === find_level && item.depth === find_depth);
      C_Page.pages.splice(index, 1);
      let C_depth = 0;
      C_Page.pages.forEach((item) => {
        if (item.level == find_level) {
          C_depth++;
        }
      });
      if (C_depth == 0) {
        C_Page.pages.forEach((item) => {
          if (item.level > find_level) {
            item.level -= 1;
          }
        });
        type_C_level--;
      } else {
        C_Page.pages.forEach((item) => {
          if (item.level == find_level && item.depth > find_depth) {
            item.depth -= 1;
          }
        });
      }
    } else if (user_type === 'D') {
      let index = D_Page.pages.findIndex((item) => item.level === find_level && item.depth === find_depth);
      D_Page.pages.splice(index, 1);
      let D_depth = 0;
      D_Page.pages.forEach((item) => {
        if (item.level == find_level) {
          D_depth++;
        }
      });
      if (D_depth == 0) {
        D_Page.pages.forEach((item) => {
          if (item.level > find_level) {
            item.level -= 1;
          }
        });
        type_D_level--;
      } else {
        D_Page.pages.forEach((item) => {
          if (item.level == find_level && item.depth > find_depth) {
            item.depth -= 1;
          }
        });
      }
    } else if (user_type === 'E') {
      let index = E_Page.pages.findIndex((item) => item.level === find_level && item.depth === find_depth);
      E_Page.pages.splice(index, 1);
      let E_depth = 0;
      E_Page.pages.forEach((item) => {
        if (item.level == find_level) {
          E_depth++;
        }
      });
      if (E_depth == 0) {
        E_Page.pages.forEach((item) => {
          if (item.level > find_level) {
            item.level -= 1;
          }
        });
        type_E_level--;
      } else {
        E_Page.pages.forEach((item) => {
          if (item.level == find_level && item.depth > find_depth) {
            item.depth -= 1;
          }
        });
      }
    }
  }
  res.redirect('/typePage/' + user_type);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 서버 실행 중');
});
