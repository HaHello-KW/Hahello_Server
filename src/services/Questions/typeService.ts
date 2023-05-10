import { QuestionDataSource } from '../../data-source';
import { Questions } from '../../entity/Questions/Questions';
import { Page_Types } from '../../entity/Enums/question_const';
import { getUserType } from '../../utils/enumHandler';


export const getTypePages = async (t: string) => {
  const questionRepository = QuestionDataSource.getRepository(Questions);
  const questions = await questionRepository.find({
    where: {
      page_type: getUserType(t),
    },
    order: {
      Questions_ID: 'ASC',
    },
  });
  return questions;
};

export const getMaxLevel = async (t: string) => {
    const questionRepository = QuestionDataSource.getRepository(Questions);
    const answer = await questionRepository
        .createQueryBuilder()
        .select('MAX(page_level) AS max_level')
        .where('page_type = :pageType', {
        pageType: getUserType(t),
        })
        .getRawOne();
    return answer.max_level;
}