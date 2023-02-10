//import image from '../images';
import * as express from 'express';

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  level: number;
  imgpath?: string;
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
  in_pages?: Array<ThreelinePicker | Button>;
  if?: {
    contents?: string;
    $or?: Array<Content>;
  };
  then?: {
    in_page?: Array<ThreelinePicker | Button>;
  };
  nextpage?: string | Array<string>;
}
interface Result {
  questionId: string;
  title: string;
  description: Array<string>;
  imgPath?: string;
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
      //imgpath: image.null,
      questionType: 'Picker_ThreeLine',
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
      level: type_A_level++,
      //imgpath: image.user_A,
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
      if: {
        contents: '결혼하고 싶어',
      },
      then: {
        in_page: [
          {
            questionType: 'Picker_ThreeLine',
            questionID: 'Q-A-1-1',
            questionTitle_First: '나는',
            questionTitle_Second: '살쯤에',
            questionTitle_Third: '결혼하면 좋겠어',
            First_pickerType: 'NumberPicker',
            Second_pickerType: 'None',
          },
        ],
      },
      nextpage: 'Q-A-2',
    },
    {
      level: type_A_level++,
      //imgpath: image.user_A,
      questionType: 'Button_Selector',
      questionID: 'Q-A-2',
      questionTitle: '나는 아이를', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '갖고 싶어',
        '갖고 싶은 생각이 없어',
      ],
      if: {
        contents: '갖고 싶어',
      },
      then: {
        in_page: [
          {
            questionType: 'Picker_ThreeLine',
            questionID: 'Q-A-2-1',
            questionTitle_First: '나는',
            questionTitle_Second: '살에',
            questionTitle_Third: '첫째 아이를 갖고 싶어',
            First_pickerType: 'NumberPicker',
            Second_pickerType: 'None',
          },
          {
            questionType: 'Button_Selector',
            questionID: 'Q-A-2-2',
            questionTitle: '나는', //해당 질문제목
            count: 2, //선택지 개수
            contents: ['아이를 1명만 갖고 싶어', '둘째도 갖고 싶어'],
          },
          //Q-A-2-1, Q-A-2-2까지 구현
          //Q-A-2-3은 아직 미작성
        ],
      },
      nextpage: 'Q-A-3',
    },
    {
      level: type_A_level++,
      //imgpath: image.user_A,
      questionType: 'Button_Selector',
      questionID: 'Q-A-3',
      questionTitle: '나는 난자 냉동을 ', //해당 질문제목
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
      level: type_A_level++,
      //imgpath: image.user_A,
      questionType: 'Picker_SixLine',
      questionID: 'Q-A-4',
      questionTitle_First: '나의 마지막(최근) 생리일은',
      questionTitle_Second: '나의 생리주기는',
      questionTitle_Third: '나의 생기기간은',
      First_pickerType: 'DatePicker',
      Second_pickerType: 'NumberPicker',
      Third_pickerType: 'NumberPicker',
      in_pages: [
        {
          questionType: 'Button_Selector',
          questionID: 'Q-A-4-1',
          questionTitle: '나는 생리일이 ', //해당 질문제목
          count: 2, //선택지 개수
          contents: [
            //선택지 내용
            '규칙적이야',
            '불규칙적이야',
          ],
        },
      ],
      nextpage: 'QA-type',
    },
  ],
  result: {
    questionId: 'Q_userA_Type',
    title: '여유로운 똑똑이 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
    //imgPath: image.userA,
  }, //QA-type
};

let B_Page: Type = {
  id: 'type_B',
  status: 200,
  message: 'typePage_B 정상 반환',
  pages: [
    {
      level: type_B_level++,
      //imgpath: image.user_B,
      questionType: 'Picker_ThreeLine',
      questionID: 'Q-B-1',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '결혼했어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-B-2',
    },
    {
      level: type_B_level++,
      //imgpath: image.user_B,
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
      if: {
        $or: [{ contents: '갖고 싶어' }, { contents: '둘째도 갖고 싶어' }],
      },
      then: {
        in_page: [
          {
            questionType: 'Picker_ThreeLine',
            questionID: 'Q-B-2-1',
            questionTitle_First: '나는',
            questionTitle_Second: '살에',
            questionTitle_Third: '첫째 아이를 갖고 싶어',
            First_pickerType: 'NumberPicker',
            Second_pickerType: 'None',
          },
          //Q-B-2-1까지 구현
          //Q-B-2-2은 아직 미작성
        ],
      },
      nextpage: 'Q-B-3',
    },
    {
      level: type_B_level++,
      //imgpath: image.user_B,
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
      if: {
        contents: '이미 해서 보관 중이야',
      },
      then: {
        in_page: [
          {
            questionType: 'Picker_ThreeLine',
            questionID: 'Q-B-3-1',
            questionTitle_First: '나는',
            questionTitle_Second: '에',
            questionTitle_Third: '개의 난자를 얼려 놓았어',
            First_pickerType: 'NumberPicker',
            Second_pickerType: 'NumberPicker',
          },
        ],
      },
      nextpage: 'Q-B-4',
    },
    {
      level: type_B_level++,
      //imgpath: image.user_B,
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
      level: type_B_level++,
      //imgpath: image.user_B,
      questionType: 'Picker_SixLine',
      questionID: 'Q-B-5',
      questionTitle_First: '나의 마지막(최근) 생리일은',
      questionTitle_Second: '나의 생리주기는',
      questionTitle_Third: '나의 생기기간은',
      First_pickerType: 'DatePicker',
      Second_pickerType: 'NumberPicker',
      Third_pickerType: 'NumberPicker',
      in_pages: [
        {
          questionType: 'Button_Selector',
          questionID: 'Q-B-5-1',
          questionTitle: '나는 생리일이 ', //해당 질문제목
          count: 2, //선택지 개수
          contents: [
            //선택지 내용
            '규칙적이야',
            '불규칙적이야',
          ],
        },
      ],
      nextpage: 'QB-type',
    },
  ],
  result: {
    questionId: 'Q_userB_Type',
    title: '여유로운 똑똑이 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
    //imgPath: image.userB,
  }, //QB-type
};
let C_Page: Type = {
  id: 'type_C',
  status: 200,
  message: 'typePage_C 정상 반환',
  pages: [
    {
      level: type_C_level++,
      //imgpath: image.user_C,
      questionType: 'Picker_ThreeLine',
      questionID: 'Q-C-1',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '결혼했어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-C-2',
    },
    {
      level: type_C_level++,
      //imgpath: image.user_C,
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
      if: {
        $or: [{ contents: '갖고 싶어' }, { contents: '둘째도 갖고 싶어' }],
      },
      then: {
        in_page: [
          {
            questionType: 'Picker_ThreeLine',
            questionID: 'Q-C-2-1',
            questionTitle_First: '나는',
            questionTitle_Second: '살에',
            questionTitle_Third: '첫째 아이를 갖고 싶어',
            First_pickerType: 'NumberPicker',
            Second_pickerType: 'None',
          },
          //Q-C-2-1까지 구현
          //Q-C-2-2은 아직 미작성
        ],
      },
      nextpage: 'Q-C-3',
    },
    {
      level: type_C_level++,
      //imgpath: image.user_C,
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
      if: {
        contents: '이미 해서 보관 중이야',
      },
      then: {
        in_page: [
          {
            questionType: 'Picker_ThreeLine',
            questionID: 'Q-C-3-1',
            questionTitle_First: '나는',
            questionTitle_Second: '에',
            questionTitle_Third: '개의 난자를 얼려 놓았어',
            First_pickerType: 'NumberPicker',
            Second_pickerType: 'NumberPicker',
          },
        ],
      },
      nextpage: 'Q-C-4',
    },
    {
      level: type_C_level++,
      //imgpath: image.user_C,
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
      level: type_C_level++,
      //imgpath: image.user_C,
      questionType: 'Picker_SixLine',
      questionID: 'Q-C-5',
      questionTitle_First: '나의 마지막(최근) 생리일은',
      questionTitle_Second: '나의 생리주기는',
      questionTitle_Third: '나의 생기기간은',
      First_pickerType: 'DatePicker',
      Second_pickerType: 'NumberPicker',
      Third_pickerType: 'NumberPicker',
      in_pages: [
        {
          questionType: 'Button_Selector',
          questionID: 'Q-C-5-1',
          questionTitle: '나는 생리일이 ', //해당 질문제목
          count: 2, //선택지 개수
          contents: [
            //선택지 내용
            '규칙적이야',
            '불규칙적이야',
          ],
        },
      ],
      nextpage: 'QC-type',
    },
  ],
  result: {
    questionId: 'Q_userC_Type',
    title: '여유로운 똑똑이 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
    //imgPath: image.userC,
  }, //QB-type
};
let D_Page: Type = {
  id: 'type_D',
  status: 200,
  message: 'typePage_D 정상 반환',
  pages: [
    {
      level: type_D_level++,
      //imgpath: image.user_D,
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
      level: type_D_level++,
      //imgpath: image.user_D,
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
        '셋째 생각이 있어',
      ],
      nextpage: 'Q-D-3',
    },
    {
      level: type_D_level++,
      //imgpath: image.user_D,
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
      if: {
        contents: '이미 해서 보관 중이야',
      },
      then: {
        in_page: [
          {
            questionType: 'Picker_ThreeLine',
            questionID: 'Q-D-3-1',
            questionTitle_First: '나는',
            questionTitle_Second: '에',
            questionTitle_Third: '개의 난자를 얼려 놓았어',
            First_pickerType: 'NumberPicker',
            Second_pickerType: 'NumberPicker',
          },
        ],
      },
      nextpage: 'Q-D-4',
    },
    {
      level: type_D_level++,
      //imgpath: image.user_D,
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
      level: type_D_level++,
      //imgpath: image.user_D,
      questionType: 'Picker_SixLine',
      questionID: 'Q-D-5',
      questionTitle_First: '나의 마지막(최근) 생리일은',
      questionTitle_Second: '나의 생리주기는',
      questionTitle_Third: '나의 생기기간은',
      First_pickerType: 'DatePicker',
      Second_pickerType: 'NumberPicker',
      Third_pickerType: 'NumberPicker',
      in_pages: [
        {
          questionType: 'Button_Selector',
          questionID: 'Q-D-5-1',
          questionTitle: '나는 생리일이 ', //해당 질문제목
          count: 2, //선택지 개수
          contents: [
            //선택지 내용
            '규칙적이야',
            '불규칙적이야',
          ],
        },
      ],
      nextpage: 'QD-type',
    },
  ],
  result: {
    questionId: 'Q_userD_Type',
    title: '여유로운 똑똑이 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
    //imgPath: image.userD,
  }, //QD-type
};
let E_Page: Type = {
  id: 'type_E',
  status: 200,
  message: 'typePage_E 정상 반환',
  pages: [
    {
      level: type_E_level++,
      //imgpath: image.user_E,
      questionType: 'Picker_ThreeLine',
      questionID: 'Q-E-1',
      questionTitle_First: '나는',
      questionTitle_Second: '에',
      questionTitle_Third: '결혼했어',
      First_pickerType: 'NumberPicker',
      Second_pickerType: 'None',
      nextpage: 'Q-E-2',
    },
    {
      level: type_E_level++,
      //imgpath: image.user_E,
      questionType: 'Button_Selector',
      questionID: 'Q-E-2',
      questionTitle: '나는', //해당 질문제목
      count: 2, //선택지 개수
      contents: [
        //선택지 내용
        '첫 번째 임신 중이야',
        '두 번째 임신 중이야',
      ],
      in_pages: [
        {
          questionType: 'Button_Selector',
          questionID: 'Q-E-2-1',
          questionTitle: '나는 ', //해당 질문제목
          count: 3, //선택지 개수
          contents: [
            //선택지 내용
            '둘째를 갖고 싶어',
            '셋째를 갖고 싶어',
            '아이를 갖고 싶은 생각이 없어',
          ],
        },
        //Q-E-2-2, Q-E-2-3 경우 속의 속의 속의 질문이라고 판단해서 미작성
      ],
      nextpage: 'Q-E-3',
    },
    {
      level: type_E_level++,
      //imgpath: image.user_E,
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
      if: {
        contents: '이미 해서 보관 중이야',
      },
      then: {
        in_page: [
          {
            questionType: 'Picker_ThreeLine',
            questionID: 'Q-E-3-1',
            questionTitle_First: '나는',
            questionTitle_Second: '에',
            questionTitle_Third: '개의 난자를 얼려 놓았어',
            First_pickerType: 'NumberPicker',
            Second_pickerType: 'NumberPicker',
          },
        ],
      },
      nextpage: 'Q-E-4',
    },
    {
      level: type_E_level++,
      //imgpath: image.user_E,
      questionType: 'Picker_SixLine',
      questionID: 'Q-E-4',
      questionTitle_First: '나의 마지막(최근) 생리일은',
      questionTitle_Second: '나의 생리주기는',
      questionTitle_Third: '나의 생기기간은',
      First_pickerType: 'DatePicker',
      Second_pickerType: 'NumberPicker',
      Third_pickerType: 'NumberPicker',
      in_pages: [
        {
          questionType: 'Button_Selector',
          questionID: 'Q-E-4-1',
          questionTitle: '나는 생리일이 ', //해당 질문제목
          count: 2, //선택지 개수
          contents: [
            //선택지 내용
            '규칙적이야',
            '불규칙적이야',
          ],
        },
      ],
      nextpage: 'QE-type',
    },
  ],
  result: {
    questionId: 'Q_userE_Type',
    title: '여유로운 똑똑이 유형',
    description: ['하해호님에게 맞는 콘텐츠를 추천해드려요.', '다음 설문에 답변해보세요'],
    //imgPath: image.userE,
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
  if (q_type == 'Picker_ThreeLine') {
    let default_info = {
      level: new_level,
      questionType: q_type,
      questionID: req.body.questionID,
      questionTitle_First: req.body.questionTitle_First,
      questionTitle_Second: req.body.questionTitle_Second,
      questionTitle_Third: req.body.questionTitle_Third,
      First_pickerType: req.body.First_pickerType,
      Second_pickerType: req.body.Second_pickerType,
    };
    default_page.pages = default_page.pages.concat(default_info);
  } else if (q_type == 'Button_Selector') {
    let default_info = {
      level: new_level,
      questionType: q_type,
      questionID: req.body.questionID,
      questionTitle: req.body.questionTitle,
      count: req.body.count,
      contents: req.body.contents,
    };
    default_page.pages = default_page.pages.concat(default_info);
  } else if (q_type == 'Picker_SixLine') {
    let default_info = {
      level: new_level,
      questionType: q_type,
      questionID: req.body.questionID,
      questionTitle_First: req.body.questionTitle_First,
      questionTitle_Second: req.body.questionTitle_Second,
      questionTitle_Third: req.body.questionTitle_Third,
      First_pickerType: req.body.First_pickerType,
      Second_pickerType: req.body.Second_pickerType,
      Third_pickerType: req.body.Third_pickerType,
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

  if (user_type === 'A') {
    A_Page.pages.forEach((item) => {
      if (item.level >= new_level) {
        item.level++;
      }
    });
    if (q_type == 'Picker_ThreeLine') {
      let A_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
      };
      A_Page.pages = A_Page.pages.concat(A_info);
    } else if (q_type == 'Button_Selector') {
      let A_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle: req.body.questionTitle,
        count: req.body.count,
        contents: req.body.contents,
      };
      A_Page.pages = A_Page.pages.concat(A_info);
    } else if (q_type == 'Picker_SixLine') {
      let A_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        Third_pickerType: req.body.Third_pickerType,
      };
      A_Page.pages = A_Page.pages.concat(A_info);
    }
    A_Page.pages.sort(function (a, b) {
      return a.level - b.level;
    });
    type_A_level++;
  } else if (user_type === 'B') {
    B_Page.pages.forEach((item) => {
      if (item.level >= new_level) {
        item.level++;
      }
    });
    if (q_type == 'Picker_ThreeLine') {
      let B_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
      };
      B_Page.pages = B_Page.pages.concat(B_info);
    } else if (q_type == 'Button_Selector') {
      let B_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle: req.body.questionTitle,
        count: req.body.count,
        contents: req.body.contents,
      };
      B_Page.pages = B_Page.pages.concat(B_info);
    } else if (q_type == 'Picker_SixLine') {
      let B_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        Third_pickerType: req.body.Third_pickerType,
      };
      B_Page.pages = B_Page.pages.concat(B_info);
    }
    B_Page.pages.sort(function (a, b) {
      return a.level - b.level;
    });
    type_B_level++;
  } else if (user_type === 'C') {
    C_Page.pages.forEach((item) => {
      if (item.level >= new_level) {
        item.level++;
      }
    });
    if (q_type == 'Picker_ThreeLine') {
      let C_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
      };
      C_Page.pages = C_Page.pages.concat(C_info);
    } else if (q_type == 'Button_Selector') {
      let C_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle: req.body.questionTitle,
        count: req.body.count,
        contents: req.body.contents,
      };
      C_Page.pages = C_Page.pages.concat(C_info);
    } else if (q_type == 'Picker_SixLine') {
      let C_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        Third_pickerType: req.body.Third_pickerType,
      };
      C_Page.pages = C_Page.pages.concat(C_info);
    }
    C_Page.pages.sort(function (a, b) {
      return a.level - b.level;
    });
    type_C_level++;
  } else if (user_type === 'D') {
    D_Page.pages.forEach((item) => {
      if (item.level >= new_level) {
        item.level++;
      }
    });
    if (q_type == 'Picker_ThreeLine') {
      let D_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
      };
      D_Page.pages = D_Page.pages.concat(D_info);
    } else if (q_type == 'Button_Selector') {
      let D_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle: req.body.questionTitle,
        count: req.body.count,
        contents: req.body.contents,
      };
      D_Page.pages = D_Page.pages.concat(D_info);
    } else if (q_type == 'Picker_SixLine') {
      let D_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        Third_pickerType: req.body.Third_pickerType,
      };
      D_Page.pages = D_Page.pages.concat(D_info);
    }
    D_Page.pages.sort(function (a, b) {
      return a.level - b.level;
    });
    type_D_level++;
  } else if (user_type === 'E') {
    E_Page.pages.forEach((item) => {
      if (item.level >= new_level) {
        item.level++;
      }
    });
    if (q_type == 'Picker_ThreeLine') {
      let E_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
      };
      E_Page.pages = E_Page.pages.concat(E_info);
    } else if (q_type == 'Button_Selector') {
      let E_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle: req.body.questionTitle,
        count: req.body.count,
        contents: req.body.contents,
      };
      E_Page.pages = E_Page.pages.concat(E_info);
    } else if (q_type == 'Picker_SixLine') {
      let E_info = {
        level: new_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        Third_pickerType: req.body.Third_pickerType,
      };
      E_Page.pages = E_Page.pages.concat(E_info);
    }
    E_Page.pages.sort(function (a, b) {
      return a.level - b.level;
    });
    type_E_level++;
  }
  res.redirect('/typePage/' + user_type);
});
// ==============================================

app.put('/defaultPage', (req: express.Request, res: express.Response) => {
  const find_level = req.body.level;
  if (typeof find_level !== 'undefined') {
    const q_type = req.body.questionType;
    default_page.pages.splice(find_level - 1, 1);
    if (q_type == 'Picker_ThreeLine') {
      const default_info = {
        level: find_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
      };
      default_page.pages = default_page.pages.concat(default_info);
    } else if (q_type == 'Button_Selector') {
      const default_info = {
        level: find_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle: req.body.questionTitle,
        count: req.body.count,
        contents: req.body.contents,
      };
      default_page.pages = default_page.pages.concat(default_info);
    } else if (q_type == 'Picker_SixLine') {
      let default_info = {
        level: find_level,
        questionType: q_type,
        questionID: req.body.questionID,
        questionTitle_First: req.body.questionTitle_First,
        questionTitle_Second: req.body.questionTitle_Second,
        questionTitle_Third: req.body.questionTitle_Third,
        First_pickerType: req.body.First_pickerType,
        Second_pickerType: req.body.Second_pickerType,
        Third_pickerType: req.body.Third_pickerType,
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
  if (typeof find_level != 'undefined') {
    if (user_type === 'A') {
      A_Page.pages.splice(find_level - default_level, 1);
      if (q_type == 'Picker_ThreeLine') {
        const type_A_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
        };
        A_Page.pages = A_Page.pages.concat(type_A_info);
      } else if (q_type == 'Button_Selector') {
        const type_A_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle: req.body.questionTitle,
          count: req.body.count,
          contents: req.body.contents,
        };
        A_Page.pages = A_Page.pages.concat(type_A_info);
      } else if (q_type == 'Picker_SixLine') {
        let A_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          Third_pickerType: req.body.Third_pickerType,
        };
        A_Page.pages = A_Page.pages.concat(A_info);
      }
      A_Page.pages.sort(function (a, b) {
        return a.level - b.level;
      });
    } else if (user_type === 'B') {
      B_Page.pages.splice(find_level - default_level, 1);
      if (q_type == 'Picker_ThreeLine') {
        const type_B_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
        };
        B_Page.pages = B_Page.pages.concat(type_B_info);
      } else if (q_type == 'Button_Selector') {
        const type_B_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle: req.body.questionTitle,
          count: req.body.count,
          contents: req.body.contents,
        };
        B_Page.pages = B_Page.pages.concat(type_B_info);
      } else if (q_type == 'Picker_SixLine') {
        let B_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          Third_pickerType: req.body.Third_pickerType,
        };
        B_Page.pages = B_Page.pages.concat(B_info);
      }
      B_Page.pages.sort(function (a, b) {
        return a.level - b.level;
      });
    } else if (user_type === 'C') {
      C_Page.pages.splice(find_level - default_level, 1);
      if (q_type == 'Picker_ThreeLine') {
        const type_C_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
        };
        C_Page.pages = C_Page.pages.concat(type_C_info);
      } else if (q_type == 'Button_Selector') {
        const type_C_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle: req.body.questionTitle,
          count: req.body.count,
          contents: req.body.contents,
        };
        C_Page.pages = C_Page.pages.concat(type_C_info);
      } else if (q_type == 'Picker_SixLine') {
        let C_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          Third_pickerType: req.body.Third_pickerType,
        };
        C_Page.pages = C_Page.pages.concat(C_info);
      }
      C_Page.pages.sort(function (a, b) {
        return a.level - b.level;
      });
    } else if (user_type === 'D') {
      D_Page.pages.splice(find_level - default_level, 1);
      if (q_type == 'Picker_ThreeLine') {
        const type_D_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
        };
        D_Page.pages = D_Page.pages.concat(type_D_info);
      } else if (q_type == 'Button_Selector') {
        const type_D_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle: req.body.questionTitle,
          count: req.body.count,
          contents: req.body.contents,
        };
        D_Page.pages = D_Page.pages.concat(type_D_info);
      } else if (q_type == 'Picker_SixLine') {
        let D_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          Third_pickerType: req.body.Third_pickerType,
        };
        D_Page.pages = D_Page.pages.concat(D_info);
      }
      D_Page.pages.sort(function (a, b) {
        return a.level - b.level;
      });
    } else if (user_type === 'E') {
      E_Page.pages.splice(find_level - default_level, 1);
      if (q_type == 'Picker_ThreeLine') {
        const type_E_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
        };
        E_Page.pages = E_Page.pages.concat(type_E_info);
      } else if (q_type == 'Button_Selector') {
        const type_E_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle: req.body.questionTitle,
          count: req.body.count,
          contents: req.body.contents,
        };
        E_Page.pages = E_Page.pages.concat(type_E_info);
      } else if (q_type == 'Picker_SixLine') {
        let E_info = {
          level: find_level,
          questionType: q_type,
          questionID: req.body.questionID,
          questionTitle_First: req.body.questionTitle_First,
          questionTitle_Second: req.body.questionTitle_Second,
          questionTitle_Third: req.body.questionTitle_Third,
          First_pickerType: req.body.First_pickerType,
          Second_pickerType: req.body.Second_pickerType,
          Third_pickerType: req.body.Third_pickerType,
        };
        E_Page.pages = E_Page.pages.concat(E_info);
      }
      E_Page.pages.sort(function (a, b) {
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
  if (typeof find_level != 'undefined') {
    if (user_type === 'A') {
      A_Page.pages.splice(find_level - default_level, 1);
      A_Page.pages.forEach((item) => {
        if (item.level > find_level) {
          item.level -= 1;
        }
      });
      type_A_level--;
    } else if (user_type === 'B') {
      B_Page.pages.splice(find_level - default_level, 1);
      B_Page.pages.forEach((item) => {
        if (item.level > find_level) {
          item.level -= 1;
        }
      });
      type_B_level--;
    } else if (user_type === 'C') {
      C_Page.pages.splice(find_level - default_level, 1);
      C_Page.pages.forEach((item) => {
        if (item.level > find_level) {
          item.level -= 1;
        }
      });
      type_C_level--;
    } else if (user_type === 'D') {
      D_Page.pages.splice(find_level - default_level, 1);
      D_Page.pages.forEach((item) => {
        if (item.level > find_level) {
          item.level -= 1;
        }
      });
      type_D_level--;
    } else if (user_type === 'E') {
      E_Page.pages.splice(find_level - default_level, 1);
      E_Page.pages.forEach((item) => {
        if (item.level > find_level) {
          item.level -= 1;
        }
      });
      type_E_level--;
    }
  }
  res.redirect('/typePage/' + user_type);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 서버 실행 중');
});
