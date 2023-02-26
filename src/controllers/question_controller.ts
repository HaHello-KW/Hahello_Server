import { MySQLDataSource } from '../data-source';
import { Questions } from '../entity/Questions';
import { Request, Response } from 'express';

export default class Questions_Controller {
  //Create Freezing
  add_Question = async (req: Request, res: Response) => {
    let question_info = {
      Question_id: req.body.Question_id,
      Pglevel: req.body.Pglevel,
      Question_type: req.body.Question_type,
      QuestionTxt: req.body.QuestionTxt,
      SelectionTxt: req.body.SelectionTxt,
      FirstPickerType: req.body.First_pickerType,
      FirstlineTxt: req.body.FirstlineTxt,
      SecondPickerType: req.body.Second_pickerType,
      SecondlineTxt: req.body.SecondlineTxt,
      ThirdPickerType: req.body.Third_pickerType,
      ThirdlineTxt: req.body.ThirdlineTxt,
      ImgPath: req.body.ImgPath,
    };

    const question_Repo = MySQLDataSource.getRepository(Questions);
    const question = question_Repo.create(question_info);

    await question_Repo
      .save(question)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  };

  //Read freezing
  get_Question = async (req: Request, res: Response) => {
    let info = req.body.Question_id;
    const question_Repo = MySQLDataSource.getRepository(Questions);

    await question_Repo
      .findOne({ where: { Question_id: info } })
      .then((data) => {
        res.json(data);
        console.log('Get Question : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Read all freezing
  get_All_Questions = async (req: Request, res: Response) => {
    const question_Repo = MySQLDataSource.getRepository(Questions);

    await question_Repo
      .findAndCount()
      .then((data) => {
        res.json(data);
        console.log('Get All Questions : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Update Freezing
  update_Question = async (req: Request, res: Response) => {
    const question_Repo = MySQLDataSource.getRepository(Questions);

    await question_Repo
      .createQueryBuilder()
      .update(Questions)
      .set(req.body)
      .where({ Question_id: req.body.Question_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Update Question : ', data);
      })
      .catch((err) => console.log(err));
  };

  //Delete Freezing
  delete_Question = async (req: Request, res: Response) => {
    const question_Repo = MySQLDataSource.getRepository(Questions);

    await question_Repo
      .createQueryBuilder()
      .delete()
      .from(Questions)
      .where({ Question_id: req.body.Question_id })
      .execute()
      .then((data) => {
        res.json(data);
        console.log('Delete Question : ', data);
      })
      .catch((err) => console.log(err));
  };
}
