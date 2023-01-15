import * as express from 'express';
import User_Default_Info from '../entity/User_Default_Info';

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let default_Id = 0;
let default_user_list: {
  User_Default_Info_id: number;
  birth: string;
  ovary_type: string;
  married_type: string;
  is_injection: string;
}[] = [];

let type_A_Id = 0;
let type_A_user_list: {
  id: number;
  married_info: { married_id: number; user_type: any; married_age: any };
  pregnant_info: {
    pregnant_id: number;
    user_type: any;
    first_pregnant: any;
    second_pregnant: any;
    third_pregnant: any;
  };
  freezing_info: {
    freezing_id: number;
    freezing_past_experience: any;
    freezing_year: number; //Q-A-3경우 난자 냉동의 유무만을 물어보지 언제 얼려놨는지에 대해서는 묻지 않아서 0으로 설정
    freezing_egg_count: number;
  };
  menstruation_info: { menstuation_id: number; last_date: any; duration: any; term: any; is_repetitive: any };
}[] = [];

let type_B_Id = 0;
let type_B_user_list: {
  id: number;
  married_info: { married_id: number; user_type: any; married_age: any };
  pregnant_info: {
    pregnant_id: number;
    user_type: any;
    first_pregnant: any;
    second_pregnant: any;
    third_pregnant: any;
  };
  freezing_info: { freezing_id: number; freezing_past_experience: any; freezing_year: any; freezing_egg_count: any };
  menstruation_info: { menstuation_id: number; last_date: any; duration: any; term: any; is_repetitive: any };
}[] = [];

let type_C_Id = 0;
let type_C_user_list: {
  id: number;
  married_info:
    | { married_id: number; user_type: any; married_age: any }
    | { married_id: number; user_type: any; married_age: any };
  pregnant_info:
    | { pregnant_id: number; user_type: any; first_pregnant: any; second_pregnant: any; third_pregnant: any }
    | { pregnant_id: number; user_type: any; first_pregnant: any; second_pregnant: any; third_pregnant: any };
  freezing_info:
    | { freezing_id: number; freezing_past_experience: any; freezing_year: any; freezing_egg_count: any }
    | { freezing_id: number; freezing_past_experience: any; freezing_year: any; freezing_egg_count: any };
  menstruation_info:
    | { menstuation_id: number; last_date: any; duration: any; term: any; is_repetitive: any }
    | { menstuation_id: number; last_date: any; duration: any; term: any; is_repetitive: any };
}[] = [];

let type_D_Id = 0;
let type_D_user_list = [];

let type_E_Id = 0;
let type_E_user_list = [];

let married_id = 0;
let freezing_id = 0;
let pregnant_id = 0;
let menstruation_id = 0;
let treatment_id = 0;

app.get('/defaultPage', (req: express.Request, res: express.Response) => {
  let page = {
    id: 'default',
    status: 200,
    message: 'defaultPage 정상 반환',
    pages: [
      {
        level: 1,
        questionType: 'Picker_ThreeLine',
        questionID: 'Q-Default1',
        questionTitle_First: '나는',
        questionTitle_Second: '에',
        questionTitle_Third: '태어났어',
        First_pickerType: 'DatePicker',
        Second_pickerType: 'None',
      },
      {
        level: 2, //upbar에 표시할 단계
        questionType: 'Button_Selector', //해당 질문유형
        questionID: 'Q-Default2', //해당 질문코드
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
      },
      {
        level: 3, //upbar에 표시할 단계
        questionType: 'Button_Selector', //해당 질문유형
        questionID: 'Q-Default3', //해당 질문코드
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
      },
    ],
  };
  res.send(page);
});

app.get('/typePage', (req: express.Request, res: express.Response) => {
  const user_type = req.body.married_type;
  let page;
  if (user_type === 'A') {
    page = {
      id: 'type_A',
      status: 200,
      message: 'typePage_A 정상 반환',
      pages: [
        {
          level: 1,
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
                in_level: 1,
                questionType: 'Picker_ThreeLine',
                questionID: 'Q-A-1-1',
                questionTitle_First: '나는',
                questionTitle_Second: '살쯤에',
                questionTitle_Third: '결혼하면 좋겠어',
                First_pickerType: 'DatePicker',
                Second_pickerType: 'None',
              },
            ],
          },
        },
        {
          level: 2,
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
            contents: '결혼하고 싶어',
          },
          then: {
            in_page: [
              {
                in_level: 1,
                questionType: 'Picker_ThreeLine',
                questionID: 'Q-A-2-1',
                questionTitle_First: '나는',
                questionTitle_Second: '살에',
                questionTitle_Third: '첫째 아이를 갖고 싶어',
                First_pickerType: 'DatePicker',
                Second_pickerType: 'None',
              },
              //Q-A-2-1까지 구현
              //Q-A-2-2, Q-A-2-3은 아직 미작성
            ],
          },
        },
        {
          level: 3,
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
        },
        {
          level: 4,
          //questionType: 'Button_Selector',
          questionID: 'Q-A-4',
          //Q-A-4 같은 경우 아직 questionType이 정해지지 않아서 그 속의 질문만 코드 작성
          in_pages: [
            {
              in_level: 1,
              questionType: 'Button_Selector',
              questionID: 'Q-A-4-1',
              questionTitle: '나는 생리일이 ', //해당 질문제목
              count: 2, //선택지 개수
              in_contents: [
                //선택지 내용
                '규칙적이야',
                '불규칙적이야',
              ],
            },
          ],
        },
        {
          level: 5,
          questionType: 'Show_Image',
          questionID: 'QA-type',
        },
      ],
    };
  } else if (user_type === 'B') {
    page = {
      id: 'type_B',
      status: 200,
      message: 'typePage_B 정상 반환',
      pages: [
        {
          level: 1,
          questionType: 'Picker_ThreeLine',
          questionID: 'Q-B-1',
          questionTitle_First: '나는',
          questionTitle_Second: '에',
          questionTitle_Third: '결혼했어',
          First_pickerType: 'DatePicker',
          Second_pickerType: 'None',
        },
        {
          level: 2,
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
            $or: [{ content: '갖고 싶어' }, { content: '둘째도 갖고 싶어' }],
          },
          then: {
            in_page: [
              {
                in_level: 1,
                questionType: 'Picker_ThreeLine',
                questionID: 'Q-B-2-1',
                questionTitle_First: '나는',
                questionTitle_Second: '살에',
                questionTitle_Third: '첫째 아이를 갖고 싶어',
                First_pickerType: 'DatePicker',
                Second_pickerType: 'None',
              },
              //Q-B-2-1까지 구현
              //Q-B-2-2은 아직 미작성
            ],
          },
        },
        {
          level: 3,
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
          in_page: [
            {
              in_level: 1,
              questionType: 'Picker_ThreeLine',
              questionID: 'Q-B-3-1',
              questionTitle_First: '나는',
              questionTitle_Second: '에',
              questionTitle_Third: '개의 난자를 얼려 놓았어',
              First_pickerType: 'DatePicker',
              Second_pickerType: 'None',
            },
          ],
        },
        {
          level: 4,
          questionType: 'Button_Selector',
          questionID: 'Q-B-4',
          questionTitle: '나는', //해당 질문제목
          count: 2, //선택지 개수
          contents: [
            //선택지 내용
            '난임 시술을 준비 중이야',
            '자연임신을 준비 중이야',
          ],
        },
        {
          level: 5,
          //questionType: 'Show_Image',
          questionID: 'Q-B-5',
          //Q-B-5같은 경우 questionType이 정해지지 않았으므로 보류
          in_pages: [
            {
              in_level: 1,
              questionType: 'Button_Selector',
              questionID: 'Q-B-5-1',
              questionTitle: '나는 생리일이 ', //해당 질문제목
              count: 2, //선택지 개수
              in_contents: [
                //선택지 내용
                '규칙적이야',
                '불규칙적이야',
              ],
            },
          ],
        },
        {
          level: 6,
          questionType: 'Show_Image',
          questionID: 'QB-type',
        },
      ],
    };
  } else if (user_type === 'C') {
    page = {
      id: 'type_C',
      status: 200,
      message: 'typePage_C 정상 반환',
      pages: [
        {
          level: 1,
          questionType: 'Picker_ThreeLine',
          questionID: 'Q-C-1',
          questionTitle_First: '나는',
          questionTitle_Second: '에',
          questionTitle_Third: '결혼했어',
          First_pickerType: 'DatePicker',
          Second_pickerType: 'None',
        },
        {
          level: 2,
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
            $or: [{ content: '갖고 싶어' }, { content: '둘째도 갖고 싶어' }],
          },
          then: {
            in_page: [
              {
                in_level: 1,
                questionType: 'Picker_ThreeLine',
                questionID: 'Q-B-2-1',
                questionTitle_First: '나는',
                questionTitle_Second: '살에',
                questionTitle_Third: '첫째 아이를 갖고 싶어',
                First_pickerType: 'DatePicker',
                Second_pickerType: 'None',
              },
              //Q-C-2-1까지 구현
              //Q-C-2-2은 아직 미작성
            ],
          },
        },
        {
          level: 3,
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
          in_page: [
            {
              in_level: 1,
              questionType: 'Picker_ThreeLine',
              questionID: 'Q-C-3-1',
              questionTitle_First: '나는',
              questionTitle_Second: '에',
              questionTitle_Third: '개의 난자를 얼려 놓았어',
              First_pickerType: 'DatePicker',
              Second_pickerType: 'None',
            },
          ],
        },
        {
          level: 4,
          questionType: 'Button_Selector',
          questionID: 'Q-C-4',
          questionTitle: '나는', //해당 질문제목
          count: 2, //선택지 개수
          contents: [
            //선택지 내용
            '난임 시술을 준비 중이야',
            '자연임신을 준비 중이야',
          ],
        },
        {
          level: 5,
          //questionType: 'Show_Image',
          questionID: 'Q-C-5',
          //Q-C-5 같은 경우 아직 questionType이 정해지지 않아서 그 속의 질문만 코드 작성
          in_pages: [
            {
              in_level: 1,
              questionType: 'Button_Selector',
              questionID: 'Q-C-5-1',
              questionTitle: '나는 생리일이 ', //해당 질문제목
              count: 2, //선택지 개수
              in_contents: [
                //선택지 내용
                '규칙적이야',
                '불규칙적이야',
              ],
            },
          ],
        },
        {
          level: 6,
          questionType: 'Show_Image',
          questionID: 'QC-type',
        },
      ],
    };
  } else if (user_type === 'D') {
    page = {
      id: 'type_D',
      status: 200,
      message: 'typePage_D 정상 반환',
      pages: [
        {
          level: 1,
          questionType: 'Button_Selector',
          questionID: 'Q-D-1',
          questionTitle: '나는', //해당 질문제목
          count: 2, //선택지 개수
          contents: [
            //선택지 내용
            '첫째가 있어',
            '둘째가 있어',
          ],
        },
        {
          level: 2,
          questionType: 'Button_Selector',
          questionID: 'Q-D-2',
          questionTitle: '나는', //해당 질문제목
          count: 2, //선택지 개수
          contents: [
            //선택지 내용
            '첫 번째 임신 중이야',
            '둘 번째 임신 중이야',
          ],
        },
        {
          level: 3,
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
          in_page: [
            {
              in_level: 1,
              questionType: 'Picker_ThreeLine',
              questionID: 'Q-D-3-1',
              questionTitle_First: '나는',
              questionTitle_Second: '에',
              questionTitle_Third: '개의 난자를 얼려 놓았어',
              First_pickerType: 'DatePicker',
              Second_pickerType: 'None',
            },
          ],
        },
        {
          level: 4,
          questionType: 'Button_Selector',
          questionID: 'Q-D-4',
          questionTitle: '나는', //해당 질문제목
          count: 2, //선택지 개수
          contents: [
            //선택지 내용
            '난임 시술을 준비 중이야',
            '자연임신을 준비 중이야',
          ],
        },
        {
          level: 5,
          //questionType: 'Show_Image',
          questionID: 'Q-D-5',
          //Q-D-5 같은 경우 아직 questionType이 정해지지 않아서 그 속의 질문만 코드 작성
          in_pages: [
            {
              in_level: 1,
              questionType: 'Button_Selector',
              questionID: 'Q-D-5-1',
              questionTitle: '나는 생리일이 ', //해당 질문제목
              count: 2, //선택지 개수
              in_contents: [
                //선택지 내용
                '규칙적이야',
                '불규칙적이야',
              ],
            },
          ],
        },
        {
          level: 6,
          questionType: 'Show_Image',
          questionID: 'QD-type',
        },
      ],
    };
  } else if (user_type === 'E') {
    page = {
      id: 'type_E',
      status: 200,
      message: 'typePage_E 정상 반환',
      pages: [
        {
          level: 1,
          questionType: 'Picker_ThreeLine',
          questionID: 'Q-E-1',
          questionTitle_First: '나는',
          questionTitle_Second: '에',
          questionTitle_Third: '결혼했어',
          First_pickerType: 'DatePicker',
          Second_pickerType: 'None',
        },
        {
          level: 2,
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
              in_level: 1,
              questionType: 'Button_Selector',
              questionID: 'Q-E-2-1',
              questionTitle: '나는 생리일이 ', //해당 질문제목
              count: 3, //선택지 개수
              in_contents: [
                //선택지 내용
                '둘째를 갖고 싶어',
                '셋째를 갖고 싶어',
                '아이를 갖고 싶은 생각이 없어',
              ],
            },
            //Q-E-2-2, Q-E-2-3 경우 속의 속의 속의 질문이라고 판단해서 미작성
          ],
        },
        {
          level: 3,
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
          in_page: [
            {
              in_level: 1,
              questionType: 'Picker_ThreeLine',
              questionID: 'Q-E-3-1',
              questionTitle_First: '나는',
              questionTitle_Second: '에',
              questionTitle_Third: '개의 난자를 얼려 놓았어',
              First_pickerType: 'DatePicker',
              Second_pickerType: 'None',
            },
          ],
        },
        {
          level: 4,
          //questionType: 'Show_Image',
          questionID: 'Q-E-4',
          //Q-E-4 같은 경우 아직 questionType이 정해지지 않아서 그 속의 질문만 코드 작성
          in_pages: [
            {
              in_level: 1,
              questionType: 'Button_Selector',
              questionID: 'Q-E-4-1',
              questionTitle: '나는 생리일이 ', //해당 질문제목
              count: 2, //선택지 개수
              in_contents: [
                //선택지 내용
                '규칙적이야',
                '불규칙적이야',
              ],
            },
          ],
        },
        {
          level: 5,
          questionType: 'Show_Image',
          questionID: 'QE-type',
        },
      ],
    };
  }
  res.send(page);
});

app.post('/defaultPage', (req: express.Request, res: express.Response) => {
  const default_info = {
    User_Default_Info_id: ++default_Id,
    birth: req.params.birth,
    ovary_type: req.params.ovary,
    married_type: req.params.married_type,
    is_injection: req.params.is_injection,
  };
  default_user_list.push(default_info);
  res.redirect('/default');
});

app.post('/typePage', (req: express.Request, res: express.Response) => {
  const user_type = req.body.married_type;
  let page;
  if (user_type === 'A') {
    const type_A_info = {
      id: ++type_A_Id,
      married_info: {
        married_id: ++married_id,
        user_type: user_type,
        married_age: req.body.Marriage_age,
      },
      pregnant_info: {
        pregnant_id: ++pregnant_id,
        user_type: user_type,
        first_pregnant: req.body.first_pregnant,
        second_pregnant: req.body.second_pregnant,
        third_pregnant: req.body.third_pregnant,
      },
      freezing_info: {
        freezing_id: ++freezing_id,
        freezing_past_experience: req.body.Freezing_past_experience,
        freezing_year: 0, //Q-A-3경우 난자 냉동의 유무만을 물어보지 언제 얼려놨는지에 대해서는 묻지 않아서 0으로 설정
        freezing_egg_count: 0, //Q-A-3경우 난자 냉동의 유무만을 물어보지 몇 개를 얼려놨는지에 대해서는 묻지 않아서 0으로 설정
      },
      menstruation_info: {
        menstuation_id: ++menstruation_id,
        last_date: req.body.last_date,
        duration: req.body.duration,
        term: req.body.term,
        is_repetitive: req.body.is_repetitive,
      },
    };
    type_A_user_list.push(type_A_info);
  } else if (user_type === 'B') {
    const type_B_info = {
      id: ++type_B_Id,
      married_info: {
        married_id: ++married_id,
        user_type: user_type,
        married_age: req.body.Marriage_age < 1000 ? req.body.Marriage_age : req.body.Marriage_age - req.body.birth,
      },
      pregnant_info: {
        pregnant_id: ++pregnant_id,
        user_type: user_type,
        first_pregnant: req.body.first_pregnant,
        second_pregnant: req.body.second_pregnant,
        third_pregnant: req.body.third_pregnant,
      },
      freezing_info: {
        freezing_id: ++freezing_id,
        freezing_past_experience: req.body.Freezing_past_experience,
        freezing_year: req.body.Freezing_year,
        freezing_egg_count: req.body.Freezing_egg_count,
      },
      menstruation_info: {
        menstuation_id: ++menstruation_id,
        last_date: req.body.last_date,
        duration: req.body.duration,
        term: req.body.term,
        is_repetitive: req.body.is_repetitive,
      },
    };
    type_B_user_list.push(type_B_info);
  } else if (user_type === 'C') {
    const type_C_info = {
      id: ++type_C_Id,
      married_info: {
        married_id: ++married_id,
        user_type: user_type,
        married_age: req.body.Marriage_age < 1000 ? req.body.Marriage_age : req.body.Marriage_age - req.body.birth,
      },
      pregnant_info: {
        pregnant_id: ++pregnant_id,
        user_type: user_type,
        first_pregnant: req.body.first_pregnant,
        second_pregnant: req.body.second_pregnant,
        third_pregnant: req.body.third_pregnant,
      },
      freezing_info: {
        freezing_id: ++freezing_id,
        freezing_past_experience: req.body.Freezing_past_experience,
        freezing_year: req.body.Freezing_year,
        freezing_egg_count: req.body.Freezing_egg_count,
      },
      menstruation_info: {
        menstuation_id: ++menstruation_id,
        last_date: req.body.last_date,
        duration: req.body.duration,
        term: req.body.term,
        is_repetitive: req.body.is_repetitive,
      },
    };
    type_C_user_list.push(type_C_info);
  } else if (user_type === 'D') {
  } else if (user_type === 'E') {
    const type_E_info = {
      id: ++type_E_Id,
      married_info: {
        married_id: ++married_id,
        user_type: user_type,
        married_age: req.body.Marriage_age < 1000 ? req.body.Marriage_age : req.body.Marriage_age - req.body.birth,
      },
      //   pregnant_info: {
      //     pregnant_id: ++pregnant_id,
      //     user_type: user_type,
      //     first_pregnant: req.body.first_pregnant,
      //     second_pregnant: req.body.second_pregnant,
      //     third_pregnant: req.body.third_pregnant,
      //   },
      // 임신 여부 및 언제 아이를 가지고 싶은지에 대해서 받는 형태가 다른 설문지와 다르다 판단하여 일단 미작성
      freezing_info: {
        freezing_id: ++freezing_id,
        freezing_past_experience: req.body.Freezing_past_experience,
        freezing_year: req.body.Freezing_year,
        freezing_egg_count: req.body.Freezing_egg_count,
      },
      menstruation_info: {
        menstuation_id: ++menstruation_id,
        last_date: req.body.last_date,
        duration: req.body.duration,
        term: req.body.term,
        is_repetitive: req.body.is_repetitive,
      },
    };
    type_E_user_list.push(type_E_info);
  }
  res.redirect('/typePage');
});
// ==============================================
// put, delete의 경우 같은 곳에서 에러 발생 => 수정 후에 다시 push 예정
app.put('/default/:User_Default_Info_id', (req: express.Request, res: express.Response) => {
  const findDefault = default_user_list.find((item) => {
    return item.User_Default_Info_id == +req.params.User_Default_Info_id;
  });
  if (typeof findDefault !== 'undefined') {
    const idx = default_user_list.indexOf(findDefault);
    default_user_list.splice(idx, 1);
    const default_info = {
      User_Default_Info_id: ++default_Id,
      birth: req.params.birth,
      ovary_type: req.params.ovary,
      married_type: req.params.married_type,
      is_injection: req.params.is_injection,
    };
    default_user_list.push(default_info);
  }
  res.redirect('/default');
});

app.put('/typePage/:id', (req: express.Request, res: express.Response) => {
  const user_type = req.body.married_type;
  if (user_type === 'A') {
    const findTypeA = type_A_user_list.find((item) => {
      return item.id == +req.params.id;
    });
    if (typeof findTypeA != 'undefined') {
      const idx = type_A_user_list.indexOf(findTypeA);
      type_A_user_list.splice(idx, 1);
      const type_A_info = {
        id: ++type_A_Id,
        married_info: {
          married_id: ++married_id,
          user_type: user_type,
          married_age: req.body.Marriage_age,
        },
        pregnant_info: {
          pregnant_id: ++pregnant_id,
          user_type: user_type,
          first_pregnant: req.body.first_pregnant,
          second_pregnant: req.body.second_pregnant,
          third_pregnant: req.body.third_pregnant,
        },
        freezing_info: {
          freezing_id: ++freezing_id,
          freezing_past_experience: req.body.Freezing_past_experience,
          freezing_year: 0, //Q-A-3경우 난자 냉동의 유무만을 물어보지 언제 얼려놨는지에 대해서는 묻지 않아서 0으로 설정
          freezing_egg_count: 0, //Q-A-3경우 난자 냉동의 유무만을 물어보지 몇 개를 얼려놨는지에 대해서는 묻지 않아서 0으로 설정
        },
        menstruation_info: {
          menstuation_id: ++menstruation_id,
          last_date: req.body.last_date,
          duration: req.body.duration,
          term: req.body.term,
          is_repetitive: req.body.is_repetitive,
        },
      };
      type_A_user_list.push(type_A_info);
    }
  } else if (user_type === 'B') {
    const findTypeB = type_B_user_list.find((item) => {
      return item.id == +req.params.id;
    });
    if (typeof findTypeB != 'undefined') {
      const idx = type_B_user_list.indexOf(findTypeB);
      type_B_user_list.splice(idx, 1);
      const type_B_info = {
        id: ++type_B_Id,
        married_info: {
          married_id: ++married_id,
          user_type: user_type,
          married_age: req.body.Marriage_age < 1000 ? req.body.Marriage_age : req.body.Marriage_age - req.body.birth,
        },
        pregnant_info: {
          pregnant_id: ++pregnant_id,
          user_type: user_type,
          first_pregnant: req.body.first_pregnant,
          second_pregnant: req.body.second_pregnant,
          third_pregnant: req.body.third_pregnant,
        },
        freezing_info: {
          freezing_id: ++freezing_id,
          freezing_past_experience: req.body.Freezing_past_experience,
          freezing_year: req.body.Freezing_year,
          freezing_egg_count: req.body.Freezing_egg_count,
        },
        menstruation_info: {
          menstuation_id: ++menstruation_id,
          last_date: req.body.last_date,
          duration: req.body.duration,
          term: req.body.term,
          is_repetitive: req.body.is_repetitive,
        },
      };
      type_B_user_list.push(type_B_info);
    }
  } else if (user_type === 'C') {
    const findTypeC = type_C_user_list.find((item) => {
      return item.id == +req.params.id;
    });
    if (typeof findTypeC != 'undefined') {
      const idx = type_C_user_list.indexOf(findTypeC);
      type_C_user_list.splice(idx, 1);
      const type_C_info = {
        id: ++type_C_Id,
        married_info: {
          married_id: ++married_id,
          user_type: user_type,
          married_age: req.body.Marriage_age < 1000 ? req.body.Marriage_age : req.body.Marriage_age - req.body.birth,
        },
        pregnant_info: {
          pregnant_id: ++pregnant_id,
          user_type: user_type,
          first_pregnant: req.body.first_pregnant,
          second_pregnant: req.body.second_pregnant,
          third_pregnant: req.body.third_pregnant,
        },
        freezing_info: {
          freezing_id: ++freezing_id,
          freezing_past_experience: req.body.Freezing_past_experience,
          freezing_year: req.body.Freezing_year,
          freezing_egg_count: req.body.Freezing_egg_count,
        },
        menstruation_info: {
          menstuation_id: ++menstruation_id,
          last_date: req.body.last_date,
          duration: req.body.duration,
          term: req.body.term,
          is_repetitive: req.body.is_repetitive,
        },
      };
      type_C_user_list.push(type_C_info);
    }
  } else if (user_type === 'D') {
    //D형의 경우는
  } else if (user_type === 'E') {
  }
  res.redirect('/typePage');
});

app.delete('/default/:User_Default_Info_id', (req: express.Request, res: express.Response) => {
  const findDefault = default_user_list.find((item) => {
    return item.User_Default_Info_id == +req.params.User_Default_Info_id;
  });
  if (typeof findDefault != 'undefined') {
    const idx = default_user_list.indexOf(findDefault);
    default_user_list.splice(idx, 1);
  }
  res.redirect('/default');
});

app.delete('/typePage/:id', (req: express.Request, res: express.Response) => {
  const user_type = req.body.married_type;
  if (user_type === 'A') {
    const findTypeA = type_A_user_list.find((item) => {
      return item.id == +req.params.id;
    });
    if (typeof findTypeA != 'undefined') {
      const idx = type_A_user_list.indexOf(findTypeA);
      type_A_user_list.splice(idx, 1);
    }
  } else if (user_type === 'B') {
    const findTypeB = type_B_user_list.find((item) => {
      return item.id == +req.params.id;
    });
    if (typeof findTypeB != 'undefined') {
      const idx = type_B_user_list.indexOf(findTypeB);
      type_B_user_list.splice(idx, 1);
    }
  } else if (user_type === 'C') {
    const findTypeC = type_C_user_list.find((item) => {
      return item.id == +req.params.id;
    });
    if (typeof findTypeC != 'undefined') {
      const idx = type_C_user_list.indexOf(findTypeC);
      type_C_user_list.splice(idx, 1);
    }
  } else if (user_type === 'D') {
  } else if (user_type === 'E') {
  }
  res.redirect('/typePage');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 서버 실행 중');
});
