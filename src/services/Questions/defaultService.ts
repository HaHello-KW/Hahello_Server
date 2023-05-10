import { QuestionDataSource } from "../../data-source";
import { Questions } from '../../entity/Questions/Questions';
import { Page_Types } from "../../entity/Enums/question_const";

export const getDefaultPages = async () => {
  const questionRepository = QuestionDataSource.getRepository(Questions);
  const questions = await questionRepository.find({
    where: {
      page_type: Page_Types.DefaultPage,
    },
    order: {
      Questions_ID: 'ASC',
    },
  });
  return questions;
};
