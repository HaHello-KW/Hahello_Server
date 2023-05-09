import { Router, Request, Response } from 'express';
import { QuestionDataSource } from '../../data-source';
import Questions from '../../entity/Questions/Questions';
import { question_metaenums, Page_Types, Picker_Types, Question_Types } from '../../entity/Enums/question_const';
import { getKeyName, getUserType } from '../../utils/enumHandler';

const router = Router();

router.get('/:types', async (req, res, next) => {
  try {
    
    const questionRepository = QuestionDataSource.getRepository(Questions);
    const questions = await questionRepository.find({
      where: {
        page_type: getUserType(req.params.types),
      },
      order: {
        Questions_ID: 'ASC',
      },
    });
    if (questions.length === 0) {
      return res.status(404).json({ message: 'TypePage 조회 실패 (질문이 존재하지 않습니다.)' });
    }
    const _max_level = await questionRepository
      .createQueryBuilder()
      .select('MAX(page_level) AS max_level')
      .where('page_type = :pageType', {pageType: getUserType(req.params.types)})
      .getRawOne()

    const responseDTO = questions.map((questions) => {
      return {
        Questions_ID: questions.Questions_ID,
        page_type: getKeyName(question_metaenums.Page_Types, questions.page_type),
        page_name: questions.page_name,
        page_level: questions.page_level,
        max_level : _max_level.max_level,
        question_type: getKeyName(question_metaenums.Question_Types, questions.question_type),
        question_txt: questions.question_txt,
        selection_txt: questions.selection_txt,
        first_picker_type: getKeyName(question_metaenums.Picker_Types, questions.first_picker_type),
        first_line_txt: questions.first_line_txt,
        second_picker_type: getKeyName(question_metaenums.Picker_Types, questions.second_picker_type),
        second_line_txt: questions.second_line_txt,
        third_picker_type: getKeyName(question_metaenums.Picker_Types, questions.third_picker_type),
        third_line_txt: questions.third_line_txt,
        img_path: questions.img_path,
      };
    });
    return res.status(200).json({ responseDTO });
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

//post, fetch, delete 는 추후 AdminPage 구축 시 만들 예정.

export default router;
