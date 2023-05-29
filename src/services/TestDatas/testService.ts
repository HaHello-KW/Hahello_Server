import { MainDataSource } from '../../data-source';
import { Page_Types } from '../../entity/Enums/question_const';
import { Tests } from '../../entity/Surveys/Tests';
import { Users } from '../../entity/Users/Users';

export const getTestDataAll = async (userID: number) => {
  const testRepository = MainDataSource.getRepository(Tests);
  const tests = await testRepository.find({
    where: {
      event_Users_ID: userID,
    },
    order: {
      Tests_ID: 'ASC',
    },
    relations: ['event_Users_ID'],
  });
  return tests;
};

export const getUserNameById = async (username: string) => {
  const userRepository = MainDataSource.getRepository(Users);
  const user = await userRepository.findOne({
    where: {
      name: username,
    },
  });
  return user;
};
