import { Router, Request, Response } from 'express';
import { MainDataSource, QuestionDataSource } from '../../../data-source';
import { Tests } from '../../../entity/Surveys/Tests';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/ko';
import { getTestDataAll, getUserNameById } from '../../../services/TestDatas/testService';
import { ITestData } from '../../../interfaces/ITestData';
import { Test_Answers } from '../../../entity/Surveys/Test_Answers';
import { Questions } from '../../../entity/Questions/Questions';
import { Question_Types } from '../../../entity/Enums/question_const';
import { Users } from '../../../entity/Users/Users';

dayjs.extend(isLeapYear);
dayjs.locale('ko');

dayjs().format('YYYY-MM-DD');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    res.send('Testdata Router 입니다.');
  } catch (err) {
    console.error(err);
    next(err);
  }
});


router.get('/user/:id', async (req, res, next) => {
  try {
    const testerName = await getUserNameById(req.params.id);
    if (!testerName) {
      return res.status(404).json({ message: 'Test 조회 실패 (해당 사용자가 존재하지 않습니다.)' });
    }
    const tests = await getTestDataAll(testerName.Users_ID);
    if (!tests) {
      return res.status(500).json({ message: 'Test 조회 실패 (해당 사용자의 테스트가 존재하지 않습니다.)' });
    }
    return res.status(200).json({ tests });
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

// type survey 완료 후 호르몬 전 설문조사 데이터 저장
router.post('/user/:id/new-testdata', async (req, res, next) => {
  try {
    const testRepository = MainDataSource.getRepository(Tests);
    const userRepository = MainDataSource.getRepository(Users);
    const user = await userRepository.findOne({
      where: { Users_ID: parseInt(req.params.id) },
    });
    if (!user) {
      return res.status(404).json({ message: 'Test 생성 실패 (해당 사용자id가 존재하지 않습니다.)' });
    }
    const newTest = await testRepository.create({
      test_date: dayjs().toDate(),
      event_Users_ID: user,
    });
    if (!newTest) {
      return res.status(500).json({ message: 'Test 생성 실패 (해당 사용자의 테스트가 존재하지 않습니다.)' });
    }
    await testRepository.save(newTest);

    const requestData = req.body;
    const questionRepository = QuestionDataSource.getRepository(Questions);
    const answerRepository = MainDataSource.getRepository(Test_Answers);

    await requestData.forEach(async (data: ITestData) => {
      let questionID = data.questionID;
      const question = await questionRepository.findOne({ where: { Questions_ID: questionID } });
      if (!question) {
        res.status(404).json({ message: `해당 질문이 존재하지 않습니다.(questionID: ${questionID}` });
      }
      const newAnswer = await answerRepository.create({
        test_id: newTest.Tests_ID,
        pglevel: data.pglevel,
        question_id: questionID,
        question_Type: Question_Types.None,
        // selection_Answer: 0,
        // firstline_Answer: '',
        // secondline_Answer: '',
        // thirdline_Answer: ''
      })
      if (!newAnswer) {
        res.status(500).json({ message: `초기 Test_Answer 생성 실패 (questionID: ${questionID}` });
      }
      switch (data.question_Type) {
        case 'Button_Selector':
          newAnswer.question_Type = Question_Types.Button_Selector;
          newAnswer.selection_Answer = data.answer_selection;
          break;
        case 'Threeline_Picker':
          newAnswer.question_Type = Question_Types.Threeline_Picker;
          newAnswer.firstline_Answer = data.answer_first_content || '';
          newAnswer.secondline_Answer = data.answer_second_content || '';
          break;
        case 'SixLine_Picker':
          newAnswer.question_Type = Question_Types.Sixline_Picker;
          newAnswer.firstline_Answer = data.answer_first_content || '';
          newAnswer.secondline_Answer = data.answer_second_content || '';
          newAnswer.thirdline_Answer = data.answer_third_content || '';
          break;
        case 'Hybrid_Type':
          newAnswer.question_Type = Question_Types.Hybrid_Type;
          newAnswer.selection_Answer = data.answer_selection;
          newAnswer.firstline_Answer = data.answer_first_content || '';
          newAnswer.secondline_Answer = data.answer_second_content || '';
          break;
      }
      await answerRepository.save(newAnswer);
      res.status(200).json({ message: 'Test_Answer을 저장했습니다.' });
    });
  } catch (err) {
    console.error(err);
    return next(err);
  }
});
export default router;
