import { Router, Request, Response } from 'express';
import { QuestionDataSource } from '../../data-source';
import Questions from '../../entity/Questions/Questions';
import { Page_Types } from '../../entity/Enums/question_const';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const questionRepository = QuestionDataSource.getRepository(Questions);
    const questions = await questionRepository.find({
      where: {
        page_type: Page_Types.TypePage,
      },
      order: {
        Questions_ID: 'ASC',
      },
    });
    if (questions.length === 0) {
      return res.status(404).json({ message: 'TypePage 질문 조회 실패' });
    }
    return res.status(200).json({ questions });
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

//post, fetch, delete 는 추후 AdminPage 구축 시 만들 예정.

export default router;
